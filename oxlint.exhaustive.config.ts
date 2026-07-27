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

import { defineConfig } from "oxlint";

// Dedicated, isolated lint pass for switch-case exhaustiveness.
//
// `typescript/switch-exhaustiveness-check` is a *type-aware* rule, so it only
// runs when oxlint is invoked with `--type-aware`. That flag is global: turning
// it on in the main lint config (oxlint.config.ts) would also activate every
// other type-aware rule in the Ultracite preset (no-unsafe-*, no-unnecessary-*,
// ...) that the repo deliberately keeps off during the ESLint -> oxlint
// migration. To avoid that, this config turns *all* rule categories off and
// enables only the exhaustiveness rule, so the pass reports nothing else.
//
// Run it with the root `lint:exhaustive` script (which passes `--type-aware`).
//
// Currently at "warn": it surfaces every non-exhaustive switch (a `switch` over
// a closed union that relies on `default` to absorb unhandled members) without
// failing CI. Once the existing violations are burned down, flip to "error" and
// wire this pass into the blocking lint/check pipeline.
export default defineConfig({
  categories: {
    correctness: "off",
    suspicious: "off",
    pedantic: "off",
    perf: "off",
    style: "off",
    restriction: "off",
    nursery: "off",
  },

  rules: {
    "typescript/switch-exhaustiveness-check": "warn",
  },

  ignorePatterns: [
    "**/tsup.config.bundled_*",
    "**/vitest.config.mts",
    "**/vitest.config.mts.timestamp-*",
    "**/build/",
    "**/dist",
    "**/node_modules/",
    "**/src/generatedNoCheck/",
    "**/src/generatedNoCheck2/",
    "**/templates/",
    "examples/**/*",
    "packages/monorepo.*/**",
    "google-font-mocked-response.js",
    "**/mockServiceWorker.js",
    "tests/",
  ],
});
