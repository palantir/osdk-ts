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

// Nested oxlint config for @osdk/api. It inherits the whole repo ruleset by
// `extends`-ing the root config, then turns off the error-level rules that this
// package's existing source first surfaces. Every rule below is a NEW
// Ultracite-preset rule that the repo's prior ESLint config did not enforce at
// error level (the existing code already violates them and CI was green), so
// disabling them keeps the ESLint -> oxlint migration behavior-preserving: the
// package is reformatted, not rewritten, and `oxlint --fix` applies no source
// rewrites (the diff is pure oxfmt). @osdk/api is the core published SDK type
// surface, so the conservative choice is to preserve the prior behavior here
// and address the findings as separate follow-up work.
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
    // Rewrites an interface/type with a single call signature into a function
    // type; a source rewrite of the public type surface.
    "typescript/prefer-function-type": "off",
    // `String`/`Number` wrapper object types; rewriting changes the declared
    // public type.
    "typescript/no-wrapper-object-types": "off",
    // `export {}` module markers the rule deems useless; intentional here.
    "typescript/no-useless-empty-export": "off",

    // --- unicorn ---
    // `.replace(/g)` -> `.replaceAll`; a source rewrite (and a newer API).
    "unicorn/prefer-string-replace-all": "off",
    // Rewrites the global `isNaN`/`isFinite` to `Number.*`; differ in coercion,
    // not a safe no-op.
    "unicorn/prefer-number-properties": "off",
    // Casing of encoding strings like `"utf-8"`; a source rewrite.
    "unicorn/text-encoding-identifier-case": "off",
    // Throwing a plain Error where the rule wants TypeError; an API/behavior
    // change, not a reformat.
    "unicorn/prefer-type-error": "off",
    // Spread the rule deems redundant; rewriting changes construction.
    "unicorn/no-useless-spread": "off",
    // `import.meta` property suggestions; a source rewrite to a newer API.
    "unicorn/prefer-import-meta-properties": "off",
    // Rewrites `>>> 0` bit twiddling into `Math.trunc`; changes the expression.
    "unicorn/prefer-math-trunc": "off",
    // Requires explicit specifiers on empty exports; pairs with the empty
    // export marker above.
    "unicorn/require-module-specifiers": "off",

    // --- eslint core ---
    // `let` the rule wants as `const`; the autofix rewrites declarations.
    "prefer-const": "off",
    // More than one class per file; splitting files is out of scope here.
    "max-classes-per-file": "off",
  },
});
