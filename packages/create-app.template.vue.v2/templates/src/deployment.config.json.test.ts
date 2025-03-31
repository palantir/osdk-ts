import { expect, test } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

test.skipIf(process.env.VERIFY_ENV_PRODUCTION !== "true")(
  "deployment.config.json should not contain placeholder values for redirectUrl",
  () => {
    const configPath = resolve(
      process.cwd(),
      "./public/.palantir/deployment.config.json"
    );
    const configContent = readFileSync(configPath, "utf-8");
    const config = JSON.parse(configContent);

    expect(
      config.redirectUrl,
      "redirectUrl should not contain placeholder value"
    ).not.toMatch(/<.*>/);
  }
);
