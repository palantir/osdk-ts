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

import root from "../../oxlint.config.ts";

// Nested oxlint config for @osdk/aliases. This package's source was moved here
// verbatim from @osdk/functions, which carries the same carve-outs, so the same
// rules are disabled to keep the extraction a move rather than a rewrite. Every
// rule below is surfaced only by the moved test setup, not by the runtime source.
// This list is a strict subset of the one in packages/functions/oxlint.config.ts.
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly.
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    // --- typescript ---
    // `delete process.env[computed]` in test setup; the pattern is intentional.
    "typescript/no-dynamic-delete": "off",

    // --- unicorn ---
    // `__dirname` in test setup, reading fixture files relative to the test.
    "unicorn/prefer-module": "off",
    // `require("fs")` / `"fs"` -> `"node:fs"`; the autofix rewrites specifiers,
    // and the test deliberately uses `node:fs` separately from the mocked `fs`.
    "unicorn/prefer-node-protocol": "off",

    // --- import ---
    // Keep the moved runtime files byte-for-byte identical to their source.
    "import/newline-after-import": "off",

    // --- node ---
    // `require(...)` inside `vi.hoisted(...)`, which must not be a static import.
    "node/global-require": "off",
  },
});
