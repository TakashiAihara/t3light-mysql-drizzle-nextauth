import NextAuth, { type DefaultSession } from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import { serverEnv } from '~/env/server';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from "~/server/db";
import { accounts, users, verificationTokens, sessions } from "~/server/db/schema";

const {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
} = serverEnv;

declare module "next-auth" {
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}

export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts,
    usersTable: users,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens
  }),
  providers: [
    DiscordProvider({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  // session: {
  //   strategy: "jwt",
  // }
})