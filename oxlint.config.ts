import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

// Ultracite drives the oxlint ruleset (strict, "opt-out" preset). On top of it
// we keep this repo's Apache-2.0 license-header rule, our ignore patterns, and a
// small set of overrides for conventions that differ from Ultracite's defaults.
// See #3031 (incremental ESLint -> oxlint / dprint -> oxfmt migration).
//
// The React preset (react / react-perf / jsx-a11y / react-hooks) is added
// globally: its rules only target JSX/.tsx code, so non-React packages are
// unaffected.
export default defineConfig({
  extends: [core, react],

  // Apache license header enforcement (Ultracite does not provide this).
  jsPlugins: ["./plugins/oxlint-plugin-header.js"],

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
    "eqeqeq": ["error", "always", { "null": "never" }],
    "no-eq-null": "off",
    "unicorn/custom-error-definition": "off",
    "default-param-last": "off",
    "require-await": "off",
    "typescript/require-await": "off",
    // Adding the `u` flag to an existing regex can change its matching semantics;
    // leave published runtime regexes untouched in this tooling migration.
    "require-unicode-regexp": "off",

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
  },

  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    "**/*.js",
    "**/*.mjs",
    "**/*.cjs",
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
