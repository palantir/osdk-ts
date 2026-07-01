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

// Nested oxlint config for @osdk/unit-testing. It inherits the whole repo
// ruleset by `extends`-ing the root config, then turns off the error-level
// rules that this package's existing source first surfaces. Every rule below is
// a NEW Ultracite-preset rule that the repo's prior ESLint config did not
// enforce at error level (the existing code already violates them and CI was
// green), so disabling them keeps the ESLint -> oxlint migration
// behavior-preserving: the package is reformatted, not rewritten, and
// `oxlint --fix` applies no source rewrites (the diff is pure oxfmt).
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated/ignored files
// would start being linted).
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    // --- typescript ---
    // Non-null assertions (`x!`); rewriting changes type-narrowing and risks
    // runtime behavior.
    "typescript/no-non-null-assertion": "off",
    // `import type` whose specifier is kept for a side effect; the autofix would
    // drop the side-effecting import.
    "typescript/no-import-type-side-effects": "off",

    // --- unicorn ---
    // Throwing a plain Error where the rule wants TypeError; an API/behavior
    // change, not a reformat.
    "unicorn/prefer-type-error": "off",

    // --- oxc ---
    // A parameter the rule sees as only used in recursion; removing it changes
    // the function signature.
    "oxc/only-used-in-recursion": "off",

    // --- eslint core ---
    // `void expr` statements; the explicit void is intentional.
    "no-void": "off",
    // Requires named function expressions; naming them is a source rewrite.
    "func-names": "off",
  },
});
