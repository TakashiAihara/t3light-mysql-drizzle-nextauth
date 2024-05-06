import { drizzle } from "drizzle-orm/mysql2";
import { createPool, type Pool } from "mysql2/promise";

import { serverEnv } from "~/env/server";
import * as schema from "./schema";
import { dbUri } from "~/env";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn =
  globalForDb.conn ??
  createPool({
    uri: dbUri,
  });
if (serverEnv.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema, mode: "default" });
