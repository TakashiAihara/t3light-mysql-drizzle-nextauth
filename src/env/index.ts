import { serverEnv } from "./server";
import { clientEnv } from "./client";

export { serverEnv, clientEnv };

const {
  MYSQL_DATABASE: database,
  MYSQL_PASSWORD: password,
  MYSQL_USER: user,
  MYSQL_HOST: host,
  MYSQL_PORT: port,
} = serverEnv;

export const envFilePaths = ["./src/env/client", "./src/env/server"] as const;

export const dbUri = `mysql://${user}:${password}@${host}:${port}/${database}`;
