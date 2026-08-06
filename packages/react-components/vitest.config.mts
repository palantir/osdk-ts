/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    pool: "threads",
    exclude: [...configDefaults.exclude, "**/build/**/*"],
    environment: "happy-dom",
    setupFiles: ["./src/test/setupPolyfills.ts"],
    env: {
      TZ: "UTC",
      LANG: "en_US.UTF-8",
    },
    // JUnit XML for CI. Deliberately not passed as a turbo `--` arg:
    // turbo folds passthrough args into its *global* hash, so doing
    // that makes every task in the run a cache miss, not just `test`.
    reporters: process.env.CI ? ["default", "junit"] : ["default"],
    outputFile: { junit: "reports/junit.xml" },
    coverage: {
      // Switched on by env, not a turbo `--` arg, for the same reason
      // as the reporter above. CI sets it on the Node 24 leg only;
      // `pnpm run coverage` passes its own CLI flags, which win.
      enabled: process.env.COVERAGE === "true",
      provider: "v8",
      // json only: coverage-final.json is what scripts/coverage
      // merges. The default set adds text, which would print a table
      // per package across ~80 packages of CI log.
      reporter: ["json"],
      include: ["src/**"],
      // Exclude tests, generated code, and index.ts barrels (no logic).
      exclude: [
        "**/*.test.*",
        "**/__tests__/**",
        "**/__mocks__/**",
        "**/generatedNoCheck/**",
        "**/*.d.ts",
        "**/index.ts",
      ],
    },
    fakeTimers: {
      toFake: ["setTimeout", "clearTimeout", "Date"],
    },
  },
});
