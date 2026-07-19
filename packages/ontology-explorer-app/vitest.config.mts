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
    environment: "happy-dom",
    coverage: {
      include: ["src/**"],
      // Barrel/re-export entry files (index.ts) carry no testable
      // logic and are structurally 0% in per-package coverage (a
      // package's own tests import concrete modules, not its public
      // barrel), so we exclude them along with tests and generated code.
      exclude: [
        "**/*.test.*",
        "**/__tests__/**",
        "**/__mocks__/**",
        "**/generatedNoCheck/**",
        "**/*.d.ts",
        "**/index.ts",
      ],
      // Uniform per-package floor. A package's own coverage run fails
      // if any metric drops below this. Enforced only when coverage is
      // enabled (the coverage job), dormant in the normal test matrix.
      thresholds: {
        lines: 60,
        statements: 60,
        functions: 60,
        branches: 60,
      },
    },
    fakeTimers: {
      toFake: ["setTimeout", "clearTimeout", "Date"],
    },
  },
});
