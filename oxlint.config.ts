import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

// Ultracite drives the oxlint ruleset (strict, "opt-out" preset). On top of it
// we keep this repo's Apache-2.0 license-header rule, our ignore patterns, and a
// small set of overrides for conventions that differ from Ultracite's defaults.
// See #3031 (incremental ESLint -> oxlint / dprint -> oxfmt migration).
export default defineConfig({
  extends: [core],

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
