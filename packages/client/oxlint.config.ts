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

// Nested oxlint config for @osdk/client (the flagship SDK package, ~300
// hand-written source files). It inherits the whole repo ruleset by `extends`-ing
// the root config, then turns off the error-level rules that this package's
// existing source first surfaces. Every rule below is a NEW Ultracite-preset rule
// that the repo's prior ESLint config did not enforce at error level (the existing
// code already violates them and CI was green), so disabling them keeps the
// ESLint -> oxlint migration behavior-preserving: the package is reformatted, not
// rewritten, and `oxlint --fix` applies no source rewrites (the diff is pure
// oxfmt). Keeping these here rather than in the root config keeps the shared
// config from accumulating package-specific carve-outs (the nested-config
// pattern; cf. packages/react-components/oxlint.config.ts).
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated/ignored files
// would start being linted).
//
// Warn-level findings (e.g. typescript/no-explicit-any, no-shadow,
// no-unused-vars) already match the root config's severities and do not fail
// `lint`, so they are left as-is rather than overridden here.
//
// Several of these rules are genuine bug-catchers (e.g. no-dupe-else-if,
// no-unsafe-optional-chaining, array-callback-return). They are disabled only to
// preserve the prior linter's behavior in this tooling migration; addressing the
// underlying findings is follow-up work, intentionally out of scope here.
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    // --- typescript ---
    // Non-null assertions (`x!`); rewriting changes type-narrowing and risks
    // runtime behavior. (107 occurrences.)
    "typescript/no-non-null-assertion": "off",
    // `x!.y?.z`; the assertion-on-optional-chain is intentional here.
    "typescript/no-non-null-asserted-optional-chain": "off",
    // `import type` whose specifier is kept for a side effect; the autofix would
    // drop the side-effecting import.
    "typescript/no-import-type-side-effects": "off",
    // `const x: Foo<T> = new Foo()` vs `new Foo<T>()`; the autofix moves the type
    // args. Stylistic churn.
    "typescript/consistent-generic-constructors": "off",
    // `interface`-as-callable vs function type alias; stylistic.
    "typescript/prefer-function-type": "off",
    // Declaration merging used intentionally in the SDK's type model.
    "typescript/no-unsafe-declaration-merging": "off",
    // `delete obj[computed]`; the pattern is intentional.
    "typescript/no-dynamic-delete": "off",
    // getter vs readonly-field style for class literal properties; stylistic.
    "typescript/class-literal-property-style": "off",

    // --- unicorn ---
    // Autofix rewrites `.concat()` / `Array.from()` / `.apply()` into spread;
    // structural churn that can change runtime shape.
    "unicorn/prefer-spread": "off",
    // `catch (e) {}` -> `catch {}`; harmless but a source rewrite.
    "unicorn/prefer-optional-catch-binding": "off",
    // Rewrites a numeric literal's zero fraction (`1.0` -> `1`); pure churn.
    "unicorn/no-zero-fractions": "off",
    // Collapses multiple spaces inside a console string; a source rewrite.
    "unicorn/no-console-spaces": "off",
    // An object literal used as a default parameter value; rewriting changes the
    // signature shape.
    "unicorn/no-object-as-default-parameter": "off",
    // Passing an argument to `new Set()` / `new Map()` the rule deems redundant;
    // rewriting changes construction.
    "unicorn/no-useless-collection-argument": "off",
    // `require("fs")` / `"fs"` -> `"node:fs"`; the autofix rewrites specifiers.
    "unicorn/prefer-node-protocol": "off",
    // `JSON.parse(JSON.stringify(x))` -> `structuredClone(x)`; not a safe no-op
    // (differs on functions / unsupported types).
    "unicorn/prefer-structured-clone": "off",
    // `.replace(/g)` -> `.replaceAll`; a source rewrite (and a newer API).
    "unicorn/prefer-string-replace-all": "off",
    // Rewrites the global `isNaN`/`isFinite` to `Number.*`; differ in coercion,
    // not a safe no-op.
    "unicorn/prefer-number-properties": "off",
    // `findIndex` -> `indexOf` and similar; behavioral nuance.
    "unicorn/prefer-array-index-of": "off",

    // --- eslint core ---
    // `case` blocks that declare without braces; the switches are intentional.
    "no-case-declarations": "off",
    // Autofix rewrites string concatenation into template literals; churn.
    "prefer-template": "off",
    // Deliberate case-stacks (guarded switches that fall through on purpose).
    "no-fallthrough": "off",
    // `void expr` used to deliberately discard a promise/value.
    "no-void": "off",
    // `{ foo: foo }` -> `{ foo }`; stylistic churn.
    "object-shorthand": "off",
    // `new Foo()` for side effects without using the result; intentional.
    "no-new": "off",
    // More than one class per file; the SDK keeps related classes together.
    "max-classes-per-file": "off",
    // Private class members the rule reads as unused (often used reflectively /
    // by subclasses).
    "no-unused-private-class-members": "off",
    // Escapes the rule deems unnecessary; rewriting risks regex/string meaning.
    "no-useless-escape": "off",
    // `a?.b + c` style; the optional chaining is intentional.
    "no-unsafe-optional-chaining": "off",
    // `throw "string"` / non-Error throws; changing them is an API/behavior
    // change, not a reformat.
    "no-throw-literal": "off",
    // `return (x = y)`; intentional assignment-in-return.
    "no-return-assign": "off",
    // `obj.hasOwnProperty(...)`; rewriting changes call style.
    "no-prototype-builtins": "off",
    // Functions declared inside loops; intentional closures.
    "no-loop-func": "off",
    // `"red" === color` yoda conditions; stylistic.
    yoda: "off",
    // Preserving the originally-caught error; rewriting changes error plumbing.
    "preserve-caught-error": "off",
    // `Math.pow(a, b)` -> `a ** b`; churn.
    "prefer-exponentiation-operator": "off",
    // Empty/forwarding constructors the rule deems useless; intentional.
    "no-useless-constructor": "off",
    // `{ ["x"]: 1 }` computed key the rule deems useless; stylistic.
    "no-useless-computed-key": "off",
    // A loop condition the rule reads as never modified (often modified via a
    // closure/ref).
    "no-unmodified-loop-condition": "off",
    // Multiline expressions the rule reads as ambiguous; the code is intentional.
    "no-unexpected-multiline": "off",
    // `a = b = c` chained assignment; intentional.
    "no-multi-assign": "off",
    // Standalone block statements used for scoping; intentional.
    "no-lone-blocks": "off",
    // Two imports from the same module; merging is a source rewrite.
    "no-duplicate-imports": "off",
    // A duplicated `else if` condition; flagged but left for follow-up (see note
    // above).
    "no-dupe-else-if": "off",
    // `while (true)` and similar intentional constant conditions.
    "no-constant-condition": "off",
    // Requires named function expressions; the anonymous callbacks are
    // intentional.
    "func-names": "off",
    // Array callbacks (map/filter/reduce) without a return in every path;
    // intentional in places.
    "array-callback-return": "off",

    // --- import ---
    // Import cycles within the package; pre-existing, not introduced by this
    // migration.
    "import/no-cycle": "off",
    // Inserts a blank line after import groups; oxfmt owns import spacing here.
    "import/newline-after-import": "off",

    // --- promise ---
    // `then(onFulfilled, onRejected)` -> `.catch`; control-flow rewrite.
    "promise/prefer-catch": "off",

    // --- jsdoc ---
    // Empty JSDoc tags (e.g. a bare `@returns`) in existing doc comments.
    "jsdoc/empty-tags": "off",
    // `@property` without a type in existing doc comments.
    "jsdoc/require-property-type": "off",

    // --- oxc ---
    // A parameter only used to recurse; rewriting changes the function shape.
    "oxc/only-used-in-recursion": "off",
    // Spread inside a reduce accumulator; perf-only, not behavioral.
    "oxc/no-accumulating-spread": "off",
  },
});
