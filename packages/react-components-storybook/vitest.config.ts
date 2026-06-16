/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { defineConfig } from "vitest/config";

// Runs every story as a Vitest test in a real (headless) browser:
//  - stories without a play function get a render smoke test
//  - stories WITH a play function (the "Interactions" tests) have their
//    play() executed and any failed assertion fails the test, and therefore CI
//
// The storybookTest plugin reads .storybook (main.ts + preview.tsx), so the
// MSW handlers, FauxFoundry client, and decorators that power the stories are
// applied here exactly as they are in `storybook dev`.
export default defineConfig({
  plugins: [
    storybookTest({ configDir: ".storybook" }),
  ],
  test: {
    name: "storybook",
    setupFiles: [".storybook/vitest.setup.ts"],
    // Interaction tests drive real (MSW-mocked) async round-trips; give them
    // room above Vitest's 5s default so a loaded CI runner doesn't trip the
    // per-test timeout before a play function's own waitFor resolves.
    testTimeout: 30_000,
    browser: {
      enabled: true,
      provider: "playwright",
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
  // Pre-bundle the runtime deps the stories pull in. Without this, Vite
  // discovers them mid-run and reloads the browser page, which closes the
  // Vitest connection and reports "no tests" (especially on a cold CI cache).
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
});
