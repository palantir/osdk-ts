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

// Nested oxlint config for @osdk/maker. It inherits the whole repo ruleset by
// `extends`-ing the root config, then turns off the error-level rules that this
// package's existing source first surfaces. Every rule below is a NEW
// Ultracite-preset rule that the repo's prior ESLint config did not enforce at
// error level (the existing code already violates them and CI was green), so
// disabling them keeps the ESLint -> oxlint migration behavior-preserving: the
// package is reformatted, not rewritten, and `oxlint --fix` applies no source
// rewrites (the diff is pure oxfmt). Keeping these here rather than in the root
// config keeps the shared config from accumulating package-specific carve-outs
// (the nested-config pattern; cf. packages/client/oxlint.config.ts).
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated/ignored files
// would start being linted).
//
// Several of these rules are genuine bug-catchers (e.g.
// no-unsafe-optional-chaining). They are disabled only to preserve the prior
// linter's behavior in this tooling migration; addressing the underlying
// findings is follow-up work, intentionally out of scope here.
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    // --- typescript ---
    // Non-null assertions (`x!`); rewriting changes type-narrowing and risks
    // runtime behavior.
    "typescript/no-non-null-assertion": "off",
    // `x!.y?.z`; the assertion-on-optional-chain is intentional here.
    "typescript/no-non-null-asserted-optional-chain": "off",
    // `import type` whose specifier is kept for a side effect; the autofix would
    // drop the side-effecting import.
    "typescript/no-import-type-side-effects": "off",
    // `const x: Foo<T> = new Foo()` vs `new Foo<T>()`; the autofix moves the type
    // args. Stylistic churn.
    "typescript/consistent-generic-constructors": "off",
    // `delete obj[computed]`; the pattern is intentional.
    "typescript/no-dynamic-delete": "off",
    // Enum members without explicit initializers; assigning values is a source
    // rewrite and changes the public enum surface.
    "typescript/prefer-enum-initializers": "off",

    // --- unicorn ---
    // Autofix rewrites `.concat()` / `Array.from()` / `.apply()` into spread;
    // structural churn that can change runtime shape.
    "unicorn/prefer-spread": "off",
    // `require("fs")` / `"fs"` -> `"node:fs"`; the autofix rewrites specifiers.
    "unicorn/prefer-node-protocol": "off",
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
    // `.includes()` over `.indexOf() !== -1` on a Set; a source rewrite.
    "unicorn/prefer-set-has": "off",
    // `.some()` over `.find() !== undefined`; a source rewrite.
    "unicorn/prefer-array-some": "off",
    // Spread the rule deems redundant; rewriting changes construction.
    "unicorn/no-useless-spread": "off",
    // `__dirname` / CommonJS globals flagged in favor of ESM; the affected code
    // is intentional.
    "unicorn/prefer-module": "off",
    // `import.meta` property suggestions; a source rewrite to a newer API.
    "unicorn/prefer-import-meta-properties": "off",

    // --- eslint core ---
    // `case` blocks that declare without braces; the switches are intentional.
    "no-case-declarations": "off",
    // Autofix rewrites string concatenation into template literals; churn.
    "prefer-template": "off",
    // Deliberate case-stacks (guarded switches that fall through on purpose).
    "no-fallthrough": "off",
    // `{ foo: foo }` -> `{ foo }`; stylistic churn.
    "object-shorthand": "off",
    // Escapes the rule deems unnecessary; rewriting risks regex/string meaning.
    "no-useless-escape": "off",
    // `a?.b + c` style; the optional chaining is intentional.
    "no-unsafe-optional-chaining": "off",
    // Standalone block statements used for scoping; intentional.
    "no-lone-blocks": "off",
    // `new Array(...)` constructor; rewriting changes construction style.
    "no-array-constructor": "off",

    // --- import ---
    // Import cycles within the package; pre-existing, not introduced by this
    // migration.
    "import/no-cycle": "off",
    // Inserts a blank line after import groups; oxfmt owns import spacing here.
    "import/newline-after-import": "off",
    // A `let` export the rule deems mutable; the reassignment is intentional.
    "import/no-mutable-exports": "off",
  },
});
