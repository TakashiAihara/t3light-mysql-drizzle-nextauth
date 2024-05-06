import { type Config } from "drizzle-kit";
import { dbUri } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: dbUri,
  },
  tablesFilter: ["unique-feed_*"],
} satisfies Config;
