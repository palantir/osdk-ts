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
    pool: "forks",
    exclude: [...configDefaults.exclude, "**/build/**/*"],
    // Env-driven so these are not turbo `--` args; see .circleci/README.md.
    // classnameTemplate prefixes the package directory, because
    // CircleCI keys a test on (classname, name) and vitest's default
    // classname is package-relative, so `src/junk.test.ts` collides
    // across packages.
    reporters: process.env.CI
      ? [
        "default",
        [
          "junit",
          {
            classnameTemplate: (v) =>
              v.filepath.split("/packages/").pop() ?? v.filepath,
          },
        ],
      ]
      : ["default"],
    outputFile: { junit: "reports/junit.xml" },
    coverage: {
      enabled: process.env.COVERAGE === "true",
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
