/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const envFilePaths = [
  "./src/env/client",
  "./src/env/server",
]

const jiti = createJiti(fileURLToPath(import.meta.url));

envFilePaths.forEach((path) => {
  jiti(path);
})

/** @type {import("next").NextConfig} */
const config = {};

export default config;
