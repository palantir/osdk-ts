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
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

// Ultracite drives the oxlint ruleset (strict, "opt-out" preset). On top of it
// we keep this repo's Apache-2.0 license-header rule, our ignore patterns, and a
// small set of overrides for conventions that differ from Ultracite's defaults.
// (Incremental ESLint -> oxlint / dprint -> oxfmt migration.)
//
// The React preset (react / react-perf / jsx-a11y / react-hooks) is added
// globally: its rules only target JSX/.tsx code, so non-React packages are
// unaffected.
export default defineConfig({
  extends: [core, react],

  // Apache license header enforcement (Ultracite does not provide this).
  // Resolved to an absolute path (rather than "./plugins/...") so the path stays
  // correct when this config is pulled in via `extends` from a package-level
  // nested config (oxlint rejects relative JS-plugin specifiers in extended
  // configs). See packages/react-components-storybook/oxlint.config.ts.
  jsPlugins: [
    new URL("./plugins/oxlint-plugin-header.js", import.meta.url).pathname,
  ],

  rules: {
    "palantir-header/header": "error",

    // This repo names source files in PascalCase/camelCase, not kebab-case.
    "unicorn/filename-case": "off",

    // Stylistic rules from Ultracite's preset that would force pure-churn
    // restructuring of existing code with no behavioral benefit. Disabled to
    // keep this an incremental, behavior-preserving tooling migration.
    "func-style": "off",
    "no-use-before-define": "off",
    "no-inline-comments": "off",
    "unicorn/no-lonely-if": "off",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",
    // Cyclomatic-complexity ceiling; the large discriminated-union switch helpers
    // in the docs packages exceed it. Splitting them up is pure churn here.
    "complexity": "off",
    // Several switches list known discriminant values (e.g. "string", "unknown")
    // that share the `default` body. Keeping the explicit cases documents intent;
    // removing them would be churn with no behavioral change.
    "unicorn/no-useless-switch-case": "off",

    // Rules whose autofix would change behavior or the public API of these
    // already-published packages. Kept at prior severity / disabled so the
    // migration introduces no breaking changes (revisit in a dedicated PR).
    "typescript/no-explicit-any": "warn",
    // `no-eq-null` is off so `x == null` / `x != null` stay allowed as the
    // coercion-free "is null or undefined" idiom. We eventually want to move to ===.
    "eqeqeq": ["error", "always", { "null": "never" }],
    "no-eq-null": "off",
    "unicorn/custom-error-definition": "error",
    "default-param-last": "error",
    "require-await": "error",
    "typescript/require-await": "error",
    "require-unicode-regexp": "error",

    // --- Repo-wide cosmetic / high-churn policy ---
    // These rules from Ultracite's strict preset are auto-fixable but purely
    // cosmetic: enabling them forces enormous, behavior-neutral diffs across
    // the codebase (e.g. `sort-keys` fires in nearly every file). They catch
    // no bugs and change no behavior, so they are disabled repo-wide. Revisit
    // as a group in a dedicated formatting-only PR if desired.
    "sort-keys": "off",
    "curly": "off",
    "prefer-destructuring": "off",
    "arrow-body-style": "off",
    "no-else-return": "off",
    "no-useless-return": "off",
    "no-negated-condition": "off",
    "unicorn/no-negated-condition": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/switch-case-braces": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/numeric-separators-style": "off",
    "typescript/array-type": "off",
    "typescript/consistent-type-definitions": "off",
    "typescript/consistent-indexed-object-style": "off",
    "import/consistent-type-specifier-style": "off",

    // --- React hooks: surface hook-dependency issues as warnings rather than
    // rewriting hooks to satisfy them (a rewrite risks changing render/effect
    // behavior). Other react/* and jsx-a11y rules stay at the preset's severity.
    "react-hooks/exhaustive-deps": "warn",

    // --- Rules whose autofix would be pure churn or would change a deliberate
    // runtime / type / API pattern. Disabled (or kept at warn) so linting does
    // not pressure code into behavior changes; each comment notes the pattern
    // the rule would otherwise break. ---
    // for-in loops here iterate freshly-built own-key objects, so the
    // hasOwnProperty guard is redundant; warn rather than force it.
    "guard-for-in": "warn",
    // Intentional no-op default callbacks (e.g. `emitEvent: () => {}`).
    "no-empty-function": "off",
    // The `someContextHook.withTypes` style merges a namespace onto a function
    // to expose a typed helper; a deliberate, published API pattern.
    "typescript/no-namespace": "off",
    // Deliberate `{}` in a conditional type ("no extra props"); rewriting it
    // would change the type, not just its style.
    "typescript/no-empty-object-type": "off",
    "typescript/ban-types": "off",
    // Stylistic (`x = x ?? y` vs `x ??= y`); leave runtime untouched.
    "logical-assignment-operators": "off",
    // Test setup legitimately runs a statement (e.g. IS_REACT_ACT_ENVIRONMENT)
    // before imports; reordering would change evaluation order.
    "import/first": "off",
    // Hoisting test helpers / using forEach / `new Promise` / removeChild /
    // appendChild are fine; disabling avoids large behavior-neutral rewrites.
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/prefer-dom-node-remove": "off",
    "unicorn/prefer-dom-node-append": "off",
    "promise/avoid-new": "off",

    // --- Rules not enforced by the repo's prior ESLint config whose autofix
    // would be churn or change a published type/runtime. Kept off / at prior
    // severity so the migration stays behavior-preserving. ---
    // Prior ESLint had `@typescript-eslint/no-shadow: warn`; these are
    // deliberate nested namespaces (e.g. `WidgetMessage.Payload.Ready` vs
    // `WidgetMessage.Ready`) and enum/namespace merges. Keep at warn.
    "no-shadow": "warn",
    // Branded message types are intentionally empty interfaces (e.g.
    // `interface Reload {}`, interfaces that only extend WidgetBaseMessage);
    // rewriting them to type aliases would change the public API shape.
    "typescript/no-empty-interface": "off",
    // `@optional` is a repo JSDoc convention tag, not a standard tag name.
    "jsdoc/check-tag-names": "off",
    // TODO/FIXME comments are allowed (prior ESLint did not flag them).
    "no-warning-comments": "off",
    // Bare `@ts-expect-error` directives (no trailing description) are common in
    // the existing test suites; prior ESLint did not require descriptions.
    "typescript/ban-ts-comment": "off",
    // Method-signature vs property-signature is stylistic, and the switch flips
    // strict variance checking on published interfaces — leave as authored.
    "typescript/method-signature-style": "off",

    // --- Rules first surfaced by React packages with CSS exports
    // (@osdk/cbac-components): not enforced by the repo's prior ESLint config,
    // and whose autofix would be churn or change a deliberate pattern. Kept off
    // so the migration stays behavior-preserving. ---
    // The package's `index.ts` is an intentional placeholder entry point
    // (components are published via export subpaths); it holds only the
    // license header. Not an error worth fabricating code to satisfy.
    "unicorn/no-empty-file": "off",
    // The `Promise.withResolvers` polyfill assigns the outer `resolve`/`reject`
    // from the inner constructor's `(res, rej)` params; renaming the params to
    // match would shadow those bindings and break the polyfill.
    "promise/param-names": "off",
    // Nested/chained ternaries in JSX render branches; rewriting to if/else (or
    // wrapping in parens) would be structural churn with no behavioral change
    // (cf. the cosmetic policy). Both the eslint and unicorn variants fire.
    "no-nested-ternary": "off",
    "unicorn/no-nested-ternary": "off",
    // Switches over closed string unions are exhaustive and TS-checked; adding
    // a `default` case would be churn and could mask a future missing variant.
    "default-case": "off",
    // Components are deliberately authored as named function expressions inside
    // `React.memo(function Name(){})` so the name surfaces as the DevTools
    // displayName / in stack traces; the autofix to an anonymous arrow would
    // drop that name. Not enforced by prior ESLint.
    "prefer-arrow-callback": "off",

    // --- Rules not enforced by the repo's prior ESLint config whose autofix
    // would be churn or change a deliberate runtime/type/API pattern. Kept off
    // (or at the prior ESLint severity) so the migration stays
    // behavior-preserving. ---
    // Prior ESLint enforced only unused *imports* (unused-imports/no-unused-imports
    // as error, autofixed). It never flagged unused locals/params/functions. Many
    // here are deliberate: the intellisense.test.helpers/** fixtures declare
    // components/vars purely to pin hover-tooltip types at hard-coded line numbers
    // (rewriting them would break those tests). Keep at warn, not error.
    "no-unused-vars": "warn",
    // Prior ESLint had `@typescript-eslint/unified-signatures: warn`; preserve it.
    // (Merging the published hook overloads would also change the API surface.)
    "typescript/unified-signatures": "warn",
    // `await foo().then(...)` / callback-style helpers: the autofix restructures
    // control flow. Not enforced by prior ESLint. (cf. promise/avoid-new off.)
    "promise/prefer-await-to-then": "off",
    "promise/prefer-await-to-callbacks": "off",
    // `i++` in counters/loops; autofix to `i += 1` is pure churn. Not prior.
    "no-plusplus": "off",
    // Accessing a member off an await expression (`(await x).y`) reads fine here;
    // the autofix introduces an intermediate variable (churn). Not prior.
    "unicorn/no-await-expression-member": "off",
    // EventEmitter is used deliberately (Node test harness); swapping to
    // EventTarget would change runtime behavior. Not prior.
    "unicorn/prefer-event-target": "off",
    // default-vs-named import style for `node:path` is stylistic. Not prior.
    "unicorn/import-style": "off",
    // `void` inside a union (e.g. `onMount?: () => void | Promise<void>`) is a
    // deliberate callback return type; rewriting changes the type. Not prior.
    "typescript/no-invalid-void-type": "off",
    // Explicit type annotation kept for a published const's documented type;
    // removing it is churn. Not prior. (cf. widget.vite-plugin override list.)
    "typescript/no-inferrable-types": "off",
    // Node callback-return convention; the existing helpers invoke callbacks
    // mid-function intentionally. Autofix is churn. Not prior.
    "node/callback-return": "off",
    // `new Promise((resolve) => setTimeout(resolve, n))` in tests returns the
    // timer handle; harmless. Not prior.
    "no-promise-executor-return": "off",
    // A test helper trims a parameter in place; renaming/copying is churn and the
    // file pins hard-coded line numbers. Not prior.
    "no-param-reassign": "off",
    // A small class method does not reference `this`; converting to static would
    // change the call site. Not prior.
    "class-methods-use-this": "off",

    // -- react-devtools (the largest React-family package) surfaces more. Rules
    // that prior ESLint kept at `warn` are preserved at warn; the rest are new
    // Ultracite-preset rules whose (auto)fix would churn or change behavior. --
    // Prior ESLint severities (preserved):
    // Intentional bare expressions: e.g. `wrapped.name;` in PropertyAccessTracker
    // tests deliberately triggers a Proxy getter's access-recording side effect.
    "no-unused-expressions": "warn",
    "no-empty": "warn",
    // Prior `@typescript-eslint/no-extraneous-class: [warn, {allowEmpty}]` — the
    // remaining hits are empty marker classes in tests, which prior allowed.
    "typescript/no-extraneous-class": "warn",
    // Prior `@typescript-eslint/no-this-alias: warn` (deliberate `const self = this`).
    "typescript/no-this-alias": "warn",
    "typescript/prefer-for-of": "warn",
    "no-bitwise": "warn",
    "radix": "warn",
    // New Ultracite-preset rules not enforced by prior ESLint (off):
    // Adding named capture groups to existing regexes is churn and risks changing
    // match semantics; same rationale as widget.vite-plugin's deferred override.
    "prefer-named-capture-group": "off",
    // `constructor(private readonly x: T)` parameter properties are a deliberate,
    // widely-used DI pattern here; the rule is not autofixable and rewriting to
    // explicit field declarations would be large hand-churn.
    "typescript/parameter-properties": "off",
    // Anonymous functions assigned to a `type:` prop in fiber test fixtures; the
    // name intentionally differs from the property. Renaming would be churn.
    "func-name-matching": "off",
    // `class C` test marker / `const self = this` capture: the unicorn variants
    // duplicate the (warn) typescript rules above; keep off to avoid double churn.
    "unicorn/no-this-assignment": "off",
    // Remaining unicorn stylistic/perf rewrites whose autofix is pure churn or
    // would alter a deliberate runtime construct. Not enforced by prior ESLint.
    "unicorn/prefer-string-slice": "off",
    "unicorn/error-message": "off",
    "unicorn/prefer-native-coercion-functions": "off",
    "unicorn/no-new-array": "off",
    "unicorn/no-immediate-mutation": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-includes": "off",
    "unicorn/empty-brace-spaces": "off",
    "unicorn/catch-error-name": "off",
    // A default prop that is an object/array literal is an intentional stable
    // reference here; the rule is not autofixable and the fix changes structure.
    "react/no-object-type-as-default-prop": "off",
    // Remaining eslint rules whose autofix is churn or whose pattern is deliberate
    // (custom debug `alert`, anonymous Symbol, `Object.prototype.hasOwnProperty`).
    "symbol-description": "off",
    "prefer-object-has-own": "off",
    "no-lonely-if": "off",
    "no-alert": "off",
    // Behavior-changing autofixes that must NOT be applied: these rewrite a
    // mutating call into an immutable ES2023 copy method, which both changes
    // runtime semantics (in-place vs new array) AND fails to compile, since the
    // repo targets ES2022 (`toSorted`/`toReversed` are not in the lib). Disable
    // them so `oxlint --fix` leaves the existing `.sort()` / `.reverse()` intact.
    "unicorn/no-array-sort": "off",
    "unicorn/no-array-reverse": "off",
    // Autofix rewrites `element.getAttribute("data-x")` to `element.dataset.x`,
    // but `dataset` only exists on `HTMLElement` (not `Element`), so the fix
    // breaks typechecking. Leave the explicit attribute access as authored.
    "unicorn/prefer-dom-node-dataset": "off",
    // Autofix rewrites `str.charCodeAt(i)` to `str.codePointAt(i)`, but the
    // latter returns `number | undefined` (vs `number`), so the fix breaks
    // typechecking under strict null checks. Leave `charCodeAt` as authored.
    "unicorn/prefer-code-point": "off",
    // Autofix unwraps `return Promise.resolve(x)` to `return x` in async
    // functions. That is usually fine, but here the wrapped value is itself a
    // thenable (a pino Logger), so unwrapping trips TS1058 ("return type of an
    // async function must not contain a callable 'then' member"). The explicit
    // `Promise.resolve(...)` is load-bearing; leave it as authored.
    "unicorn/no-useless-promise-resolve-reject": "off",
    // Autofix rewrites `typeof x === "undefined"` to `x === undefined`. For a
    // possibly-undeclared GLOBAL (e.g. `process` in the browser, `window` in
    // node) the `typeof` guard is load-bearing: a bare `process === undefined`
    // throws ReferenceError where `typeof process` safely yields "undefined".
    // This broke OsdkProvider's __DEV__ check in Storybook's browser test env.
    // Leave `typeof` guards as authored.
    "unicorn/no-typeof-undefined": "off",
    // Autofix rewrites `arr[arr.length - 1]` to `arr.at(-1)`, but `.at()` returns
    // `T | undefined` whereas the index access is typed `T` under the existing
    // (non-strict-index) code, so the fix introduces spurious `| undefined` that
    // breaks typechecking at the use site (e.g. spreading the result into a
    // non-optional object type). Leave index access as authored.
    "unicorn/prefer-at": "off",
    // The rule's suggested replacements (`import.meta.dirname` / `filename`)
    // require Node >=20.11, but the repo still supports Node 18 (engines
    // >=18.19.0, and the CI test matrix runs transpile/codegen on Node 18).
    // Enabling it would nudge contributors toward an API that throws on our
    // supported floor. Keep it off until Node 18 is dropped, then re-enable.
    "unicorn/prefer-import-meta-properties": "off",
  },

  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    "**/tsup.config.bundled_*",
    // vitest.config.mts is generated/owned by monorepolint (formatted with dprint);
    // don't let oxlint --fix reorder it or //#check-mrl will fail.
    "**/vitest.config.mts",
    "**/vitest.config.mts.timestamp-*",
    "**/build/",
    "**/dist",
    "**/node_modules/",
    "**/src/generatedNoCheck/",
    "**/src/generatedNoCheck2/",
    "**/templates/",
    "examples/**/*",
    "packages/monorepo.*/**",
    "google-font-mocked-response.js",
    // Generated mock service worker; not hand-written source.
    "**/mockServiceWorker.js",
    "tests/",
  ],

  overrides: [
    {
      files: [
        "**/bin/*.mjs",
        "**/bin/*.cjs",
        "examples-extra/**/*",
        "packages/e2e.sandbox.*/**/*",
      ],
      rules: {
        "palantir-header/header": "off",
      },
    },
    {
      files: [
        "**/*.test.ts",
        "**/test/*",
        "examples-extra/**/*",
        "packages/e2e.sandbox.*/**/*",
        "packages/typescript-sdk-docs-examples/**/*",
      ],
      rules: {
        "no-console": "off",
      },
    },
  ],
});
