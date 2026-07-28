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

// Nested oxlint config for @osdk/functions. It inherits the whole repo ruleset
// by `extends`-ing the root config, then turns off the error-level rules that
// this package's existing source first surfaces. Every rule below is a NEW
// Ultracite-preset rule that the repo's prior ESLint config did not enforce at
// error level (the existing code already violates them and CI was green), so
// disabling them keeps the ESLint -> oxlint migration behavior-preserving: the
// package is reformatted, not rewritten, and `oxlint --fix` applies no source
// rewrites (the diff is pure oxfmt).
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated/ignored files
// would start being linted).
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    // --- typescript ---
    // `delete obj[computed]`; the pattern is intentional.
    "typescript/no-dynamic-delete": "off",

    // --- unicorn ---
    // `__dirname` / CommonJS globals flagged in favor of ESM; the affected code
    // is intentional.
    "unicorn/prefer-module": "off",
    // `require("fs")` / `"fs"` -> `"node:fs"`; the autofix rewrites specifiers.
    "unicorn/prefer-node-protocol": "off",
    // `1.0` -> `1`; a numeric-literal source rewrite.
    "unicorn/no-zero-fractions": "off",

    // --- eslint core ---
    // `let` the rule wants as `const`; the autofix rewrites declarations.
    "prefer-const": "off",
    // Empty/forwarding constructors the rule deems useless; removing changes the
    // class surface.
    "no-useless-constructor": "off",
    // Requires re-throwing the caught error; the handling here is intentional.
    "preserve-caught-error": "off",

    // --- node ---
    // CommonJS `require(...)` calls; the affected code is intentional.
    "node/global-require": "off",

    // --- import ---
    // Inserts a blank line after import groups; oxfmt owns import spacing here.
    "import/newline-after-import": "off",

    // --- jsdoc ---
    // Requires a type on `@throws` tags; a doc-comment rewrite.
    "jsdoc/require-throws-type": "off",
  },
});
