/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

// Nested oxlint config for @osdk/osdk-docs-context. It inherits the whole repo
// ruleset by `extends`-ing the root config, then turns off the error-level rules
// that this package's existing source first surfaces. Every rule below is a NEW
// Ultracite-preset rule that the repo's prior ESLint config did not enforce at
// error level (the existing code already violates them and CI was green), so
// disabling them keeps the ESLint -> oxlint migration behavior-preserving: the
// package is reformatted, not rewritten, and `oxlint --fix` applies no source
// rewrites (the diff is pure oxfmt).
//
// This repo treats src/generated/ as first-class checked-in source (only
// src/generatedNoCheck{,2}/ are excluded, and ESLint linted src/generated before
// the oxc migration), so this config re-includes it: the inherited Ultracite
// preset ignores `**/generated`, which is removed from `ignorePatterns` below so
// the generated tree (src/generated/inlinedExamples.ts) is linted and
// oxfmt-formatted just as ESLint + dprint did before. (cf. the same pattern in
// packages/client.unstable/oxlint.config.ts.)
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (minus `**/generated`).
export default defineConfig({
  extends: [root],
  ignorePatterns: (root.ignorePatterns ?? []).filter(
    (p) => p !== "**/generated"
  ),

  rules: {
    // --- typescript ---
    // Non-null assertions (`x!`); rewriting changes type-narrowing and risks
    // runtime behavior.
    "typescript/no-non-null-assertion": "off",

    // --- unicorn ---
    // A class with only static members; converting to plain functions is a
    // source rewrite of the public surface.
    "unicorn/no-static-only-class": "off",
  },
});
