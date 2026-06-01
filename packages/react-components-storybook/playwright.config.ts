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

import { defineConfig, devices } from "@playwright/test";

const STORYBOOK_PORT = 6007;
const STORYBOOK_URL = `http://127.0.0.1:${STORYBOOK_PORT}`;

export default defineConfig({
  testDir: "./playwright",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  // First-load story compilation can take longer than the default 30s
  // when storybook is cold-starting alongside the test run.
  timeout: 90_000,
  expect: { timeout: 15_000 },
  reporter: [["list"]],
  use: {
    baseURL: STORYBOOK_URL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    // Pin to UTC so assertions about "local midnight" are reproducible
    // across machines and don't drift across DST boundaries. SingleDateInput
    // strips wall-clock time using local Date components, so the test must
    // agree on what "local" means. UTC also keeps date-fns' subMonths /
    // subYears arithmetic free of DST adjustments, which would otherwise
    // shift past-6-months by an hour when crossing the PDT/PST boundary.
    timezoneId: "UTC",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // Serve the pre-built static storybook. `storybook dev` triggers Vite
    // dep-optimization at request time, which mis-resolves the monorepo's
    // mixed date-fns major versions (v2 in @osdk/react-components, v4 in
    // @osdk/client) and crashes with "constructNow is not exported." The
    // production `storybook build` resolves the import graph once at
    // build time and avoids the problem entirely.
    //
    // `pnpm test:e2e` runs `storybook build` before Playwright starts so
    // the directory below is populated.
    command:
      `python3 -m http.server ${STORYBOOK_PORT} --directory storybook-static --bind 127.0.0.1`,
    url: STORYBOOK_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
    stdout: "pipe",
    stderr: "pipe",
  },
});
