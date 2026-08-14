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

// Nested oxlint config for @osdk/react-components (the 221-tsx component-library
// giant). It inherits the whole repo ruleset by `extends`-ing the root config,
// then turns off the error-level rules that this package's existing source first
// surfaces. Every rule below is a NEW Ultracite-preset rule that the repo's
// prior ESLint config did not enforce (the existing code already violates them),
// so disabling them keeps the ESLint -> oxlint migration behavior-preserving:
// the package is reformatted, not rewritten. Keeping these here rather than in
// the root config keeps the shared config from accumulating package-specific
// carve-outs (cf. the nested config in
// packages/react-components-storybook/oxlint.config.ts).
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated/ignored files
// would start being linted).
//
// Warn-level findings (typescript/no-explicit-any, no-shadow, no-unused-vars,
// no-unused-expressions, react-hooks/exhaustive-deps, the jsx-a11y preset rules)
// already match the root config's severities and do not fail `lint`, so they are
// left as-is rather than overridden here.
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    // Autofix rewrites a numeric literal's zero fraction (`1.0` -> `1`). Pure
    // churn across the design-token / layout math; not enforced by prior ESLint.
    "unicorn/no-zero-fractions": "off",
    // Autofix rewrites the global `isNaN`/`isFinite` to `Number.isNaN`/
    // `Number.isFinite`. The two differ in coercion semantics, so this is not a
    // safe no-op rewrite; not enforced by prior ESLint. (cf. the storybook
    // nested config, which disables the same rule.)
    "unicorn/prefer-number-properties": "off",
    // Autofix rewrites `.concat()` / `Array.from()` / `.apply()` into spread.
    // Structural churn that can change runtime shape; not enforced by prior ESLint.
    "unicorn/prefer-spread": "off",
    // Inserts a blank line after import groups. oxfmt owns import spacing in this
    // migration; not enforced by prior ESLint.
    "import/newline-after-import": "off",
    // Autofix rewrites `Math.pow(a, b)` -> `a ** b`. Churn; not enforced by prior
    // ESLint.
    "prefer-exponentiation-operator": "off",
    // Autofix rewrites `Math.sqrt(a*a + b*b)` -> `Math.hypot(a, b)`; the two
    // differ in overflow/precision handling, so this is not a safe no-op. Not
    // enforced by prior ESLint.
    "unicorn/prefer-modern-math-apis": "off",
    // Spread inside a reduce accumulator; the rule is not autofixable and
    // rewriting changes structure. Perf-only, not behavioral; not enforced by
    // prior ESLint. (cf. the storybook nested config.)
    "oxc/no-accumulating-spread": "off",
    // Autofix rewrites `indexOf(x) === -1` -> `!includes(x)` etc. Behavioral
    // nuance around NaN / -0; not enforced by prior ESLint.
    "unicorn/consistent-existence-index-check": "off",
    // Autofix rewrites `new Date(d.getTime())` -> `new Date(d)`. Not enforced by
    // prior ESLint; leave the explicit clone as authored.
    "unicorn/consistent-date-clone": "off",
    // Empty JSDoc tags (e.g. a bare `@returns`) in existing doc comments; not
    // enforced by prior ESLint.
    "jsdoc/empty-tags": "off",
    // `reject(value)` with a non-Error; changing the rejected value is an API/
    // behavior change, not a reformat. Not enforced by prior ESLint.
    "prefer-promise-reject-errors": "off",
    // Recommends switching an array membership check to a `Set`. Not autofixable;
    // rewriting changes the data structure. Not enforced by prior ESLint.
    "unicorn/prefer-set-has": "off",
    // Autofix rewrites `getElementById` -> `querySelector("#id")`; the two differ
    // (live vs static, escaping). Not enforced by prior ESLint.
    "unicorn/prefer-query-selector": "off",
    // `then(onFulfilled, onRejected)` -> `.catch`; control-flow rewrite, not a
    // reformat. Not enforced by prior ESLint.
    "promise/prefer-catch": "off",
    // Autofix rewrites string concatenation into template literals. Churn; not
    // enforced by prior ESLint.
    "prefer-template": "off",
    // Autofix rewrites a ternary into `||`/`??`; can change behavior on falsy
    // values. Not enforced by prior ESLint.
    "unicorn/prefer-logical-operator-over-ternary": "off",
    // Passing an argument to `new Set()` / `new Map()` that the rule deems
    // redundant; rewriting changes construction. Not enforced by prior ESLint.
    "unicorn/no-useless-collection-argument": "off",
    // `import type` whose specifier is kept for a side effect; the autofix would
    // drop the side-effecting import. Not enforced by prior ESLint.
    "typescript/no-import-type-side-effects": "off",
    // `return Promise.resolve(x)` inside a `.then`; the autofix unwraps it.
    // Control-flow rewrite, not a reformat. Not enforced by prior ESLint.
    "promise/no-return-wrap": "off",
    // Nested `.then` chains; flattening is a structural rewrite. Not enforced by
    // prior ESLint.
    "promise/no-nesting": "off",
    // `src/public/experimental.ts` is the package's intentional published API
    // barrel (the `@osdk/react-components/experimental` entry point); the
    // many-module re-export is by design, not an accidental barrel.
    "oxc/no-barrel-file": "off",
    // A deliberate case-stack whose shared body sits below a comment between the
    // stacked `case` labels (filterValues.ts). oxlint reads the comment as a
    // fallthrough; the switch is exhaustive (guarded by a `never` default). Not
    // flagged by prior ESLint.
    "no-fallthrough": "off",
    // Autofix removes a `!!x` double-negation. Stylistic churn; not enforced by
    // prior ESLint.
    "no-extra-boolean-cast": "off",
    // Requires named function expressions; the existing anonymous callbacks are
    // intentional. Not enforced by prior ESLint.
    "func-names": "off",
    // Non-null assertions (`x!`) in component/test code; rewriting them changes
    // type-narrowing and risks runtime behavior. Not enforced by prior ESLint.
    // (cf. the storybook nested config, which disables the same rule.)
    "typescript/no-non-null-assertion": "off",

    // a11y rules that the react preset sets to error and that this package's
    // existing markup first surfaces. Satisfying them requires behavior-changing
    // hand edits (adding `tabIndex`, associating labels/controls), which is out
    // of scope for a behavior-preserving tooling migration; prior ESLint did not
    // run jsx-a11y. The remaining jsx-a11y rules stay at the preset's warn
    // severity. (cf. the storybook nested config, which disables these two.)
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/interactive-supports-focus": "off",
  },
});
