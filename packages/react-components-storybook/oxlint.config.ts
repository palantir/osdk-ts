import { defineConfig } from "oxlint";

import root from "../../oxlint.config.ts";

// Nested oxlint config for @osdk/react-components-storybook. It inherits the
// whole repo ruleset by `extends`-ing the root config, then turns off a handful
// of rules that only make sense to relax for this package: a private (never
// published) collection of Storybook stories, mock data, and .storybook tooling.
// Keeping these here rather than in the root config keeps the shared config from
// accumulating package-specific carve-outs.
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated files such as
// public/mockServiceWorker.js would start being linted).
//
// It also re-enables eslint-plugin-storybook here: oxlint can load it through
// its ESLint-compatible JS plugin API (`jsPlugins`, the same mechanism the root
// uses for the license-header plugin), so the storybook rules survive the
// ESLint -> oxlint migration unchanged. The rule severities and file-scoping
// below mirror the plugin's own `flat/recommended` config.
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,
  jsPlugins: ["eslint-plugin-storybook"],

  rules: {
    // The package's prior eslint.config.mjs set header/header off (it ships
    // stories, not published source); preserve that rather than mass-adding
    // Apache headers.
    "palantir-header/header": "off",
    // Non-null assertions in story setup (e.g. on querySelector results).
    "typescript/no-non-null-assertion": "off",
    // Large integer IDs in employee mock data; intentional fixtures.
    "no-loss-of-precision": "off",
    // `(x) | 0` truncation in a crypto polyfill; deliberate bit-trick.
    "unicorn/prefer-math-trunc": "off",
    // Stylistic `isNaN` vs `Number.isNaN` in a story; not behavior-relevant.
    "unicorn/prefer-number-properties": "off",
    // Spread-in-reduce in a story's table data builder; perf is irrelevant for
    // fixture data and rewriting changes structure.
    "oxc/no-accumulating-spread": "off",
    // a11y rules on illustrative story controls; not enforced previously and
    // stories are not shipped UI.
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    // The brand theme toolbar uses custom styled components with ARIA roles
    // (role="dialog", role="listbox", role="option") because native elements
    // would break Storybook's styling constraints.
    "jsx-a11y/prefer-tag-over-role": "off",
    // querySelector vs getElementById is a stylistic choice; we use whichever
    // fits the context.
    "unicorn/prefer-query-selector": "off",
  },

  // eslint-plugin-storybook rules, scoped exactly as the plugin's
  // `flat/recommended` config scopes them (story files / .storybook/main).
  overrides: [
    {
      files: [
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.stories.js",
        "**/*.stories.jsx",
        "**/*.story.ts",
        "**/*.story.tsx",
      ],
      rules: {
        "storybook/await-interactions": "error",
        "storybook/context-in-play-function": "error",
        "storybook/default-exports": "error",
        "storybook/hierarchy-separator": "warn",
        "storybook/no-redundant-story-name": "warn",
        "storybook/no-renderer-packages": "error",
        "storybook/prefer-pascal-case": "warn",
        "storybook/story-exports": "error",
        "storybook/use-storybook-expect": "error",
        "storybook/use-storybook-testing-library": "error",
      },
    },
    {
      files: [
        "**/.storybook/main.ts",
        "**/.storybook/main.js",
        "**/.storybook/main.cjs",
        "**/.storybook/main.mjs",
      ],
      rules: {
        "storybook/no-uninstalled-addons": "error",
      },
    },
  ],
});
