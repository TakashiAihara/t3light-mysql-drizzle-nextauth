import { type Config } from "drizzle-kit";
import { dbUri } from "~/env";
import { APP_CONTEXT } from "~/index";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: dbUri,
  },
  tablesFilter: [`${APP_CONTEXT}_*`],
} satisfies Config;
