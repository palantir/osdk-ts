import { loadEnvConfig } from "@next/env";
import { afterEach, beforeEach, expect, test, vi } from "vitest";

const ENV_VARS = [
  "NEXT_PUBLIC_FOUNDRY_API_URL",
  "NEXT_PUBLIC_FOUNDRY_CLIENT_ID",
  "NEXT_PUBLIC_FOUNDRY_REDIRECT_URL",
];

beforeEach(() => {
  vi.stubEnv("NODE_ENV", "production");
});

afterEach(() => {
  vi.unstubAllEnvs();
});

for (const envVar of ENV_VARS) {
  test.skipIf(process.env.VERIFY_ENV_PRODUCTION !== "true")(
    `production env should contain ${envVar}`,
    () => {
      const env = loadEnvConfig(process.cwd());
      expect(
        env.combinedEnv[envVar],
        `${envVar} should be defined`,
      ).toBeDefined();
      expect(
        env.combinedEnv[envVar],
        `${envVar} should not contain placeholder value`,
      ).not.toMatch(/<.*>/);
    },
  );
}
