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

// Nested oxlint config for @osdk/faux. It inherits the whole repo ruleset by
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
    // Non-null assertions (`x!`); rewriting changes type-narrowing and risks
    // runtime behavior.
    "typescript/no-non-null-assertion": "off",
    // `const x: Foo<T> = new Foo()` vs `new Foo<T>()`; the autofix moves the
    // type args. Stylistic churn.
    "typescript/consistent-generic-constructors": "off",
    // Rewrites an interface/type with a single call signature into a function
    // type; a source rewrite of the type surface.
    "typescript/prefer-function-type": "off",
    // `import type` whose specifier is kept for a side effect; the autofix would
    // drop the side-effecting import.
    "typescript/no-import-type-side-effects": "off",

    // --- unicorn ---
    // Autofix rewrites `.concat()` / `Array.from()` / `.apply()` into spread;
    // structural churn that can change runtime shape.
    "unicorn/prefer-spread": "off",
    // Rewrites the global `isNaN`/`isFinite` to `Number.*`; differ in coercion,
    // not a safe no-op.
    "unicorn/prefer-number-properties": "off",
    // `.replace(/g)` -> `.replaceAll`; a source rewrite (and a newer API).
    "unicorn/prefer-string-replace-all": "off",
    // `.filter(...)[0]` -> `.find(...)`; a source rewrite.
    "unicorn/prefer-array-find": "off",
    // An object literal as a default parameter; the rule wants it destructured.
    "unicorn/no-object-as-default-parameter": "off",

    // --- oxc ---
    // Async Express-style endpoint handlers; the affected handlers are
    // intentional and rewriting changes control flow.
    "oxc/no-async-endpoint-handlers": "off",
    // Barrel (re-export) files; intentional for this package's public surface.
    "oxc/no-barrel-file": "off",

    // --- import ---
    // Import cycles within the package; pre-existing, not introduced by this
    // migration.
    "import/no-cycle": "off",
    // Namespace-import member access the rule cannot statically verify; the
    // imports are intentional.
    "import/namespace": "off",

    // --- eslint core ---
    // `case` blocks that declare without braces; the switches are intentional.
    "no-case-declarations": "off",
    // Autofix rewrites string concatenation into template literals; churn.
    "prefer-template": "off",
    // `{ foo: foo }` -> `{ foo }`; stylistic churn.
    "object-shorthand": "off",
    // Deliberate case-stacks (guarded switches that fall through on purpose).
    "no-fallthrough": "off",
  },
});
