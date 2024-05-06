import { createEnv } from "@t3-oss/env-nextjs";

export const clientEnv = createEnv({
  client: {
    // NEXT_PUBLIC_VAR: z.string(),
  },
  runtimeEnv: {},
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
