import { readFileSync } from "fs";
import { resolve } from "path";
import { expect, test } from "vitest";

test.skipIf(process.env.VERIFY_DEPLOYMENT_CONFIG !== "true")(
  "deployment.config.json should not contain placeholder values for redirectUrl",
  () => {
    const configPath = resolve(
      process.cwd(),
      "./public/.palantir/deployment.config.json",
    );
    const configContent = readFileSync(configPath, "utf-8");
    const config = JSON.parse(configContent);

    expect(
      config.redirectUrl,
      "redirectUrl should not contain placeholder value",
    ).not.toMatch(/<.*>/);
  },
);
