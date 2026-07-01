import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

// Ultracite drives the oxfmt formatting preset. We extend its ignorePatterns to
// leave files that other tooling owns untouched: package.json / tsconfig.json are
// still managed by monorepolint + dprint, and changelog yaml is historical.
//
// We drop Ultracite's `**/generated` ignore: this repo treats `src/generated/`
// (conjure-emitted code) as first-class checked-in source — only
// `src/generatedNoCheck{,2}/` are excluded (see below), and dprint formatted
// `src/generated/` before the oxc migration. Keeping it formatted under oxfmt
// preserves that behavior. The other Ultracite generated-globs (`**/_generated`,
// `**/__generated__`, `**/*.generated.*`, `**/codegen`, …) are left intact.
export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []).filter((p) => p !== "**/generated"),
    "**/package.json",
    "**/tsconfig.json",
    // YAML is not formatted by dprint either (no yaml plugin); some packages keep
    // significant-whitespace data here (e.g. mustache templates in
    // typescript-sdk-docs/src/documentation.yml) that reformatting would corrupt.
    "**/*.yml",
    "**/*.yaml",
    // JSON / JSONC are dprint's domain (it has a json plugin) and several are
    // monorepolint-generated (turbo.json, etc.); leaving them out keeps the
    // tooling migration to .ts/.tsx and avoids fighting mrl over formatting.
    "**/*.json",
    "**/*.jsonc",
    "**/*.json5",
    // `.md` IS formatted by oxfmt (parity with dprint, which formatted markdown
    // via its markdown plugin before the migration): oxfmt normalizes markdown
    // structure and reformats embedded code fences the same way it formats source.
    // `.mdx` stays excluded: oxfmt would reflow it as markdown and corrupt the
    // embedded JSX expressions (e.g. the `{/* license */}` block), breaking
    // Storybook's mdx indexer.
    "**/*.mdx",
    // CSS / SCSS are not formatted by dprint either (no css plugin); component
    // packages hand-maintain these stylesheets (e.g. @osdk/cbac-components and,
    // ahead, @osdk/react-components). Leave them to their authors so the tooling
    // migration touches only .ts/.tsx.
    "**/*.css",
    "**/*.scss",
    // generated/owned by monorepolint (dprint-formatted)
    "**/vitest.config.mts",
    "**/changelog/",
    "**/src/generatedNoCheck/",
    "**/src/generatedNoCheck2/",
    "**/build/",
    "**/dist",
  ],
});
