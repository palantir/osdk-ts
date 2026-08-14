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

// Nested oxlint config for @osdk/aip-core. It inherits the whole repo ruleset by
// `extends`-ing the root config, then turns off the error-level rules that this
// package's existing source first surfaces. Every rule below is a NEW
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
    // `const x: Foo<T> = new Foo()` vs `new Foo<T>()`; the autofix moves the
    // type args. Stylistic churn.
    "typescript/consistent-generic-constructors": "off",

    // --- unicorn ---
    // Spread the rule deems a useless fallback (`{ ...(x ?? {}) }`); rewriting
    // changes construction.
    "unicorn/no-useless-fallback-in-spread": "off",
    // `Response.json(...)` static over `new Response(JSON.stringify(...))`; a
    // source rewrite to a newer API.
    "unicorn/prefer-response-static-json": "off",
    // `.replace(/g)` -> `.replaceAll`; a source rewrite (and a newer API).
    "unicorn/prefer-string-replace-all": "off",
    // Autofix rewrites `.concat()` / `Array.from()` / `.apply()` into spread;
    // structural churn that can change runtime shape.
    "unicorn/prefer-spread": "off",
    // Moves constructor assignments to class fields; a source rewrite.
    "unicorn/prefer-class-fields": "off",
    // `.map(...).flat()` -> `.flatMap(...)`; a source rewrite.
    "unicorn/prefer-array-flat-map": "off",

    // --- eslint core ---
    // Autofix rewrites string concatenation into template literals; churn.
    "prefer-template": "off",
    // Requires named function expressions; naming them is a source rewrite.
    "func-names": "off",
  },
});
