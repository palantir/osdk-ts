import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

// Ultracite drives the oxfmt formatting preset. We extend its ignorePatterns to
// leave files that other tooling owns untouched: package.json / tsconfig.json are
// still managed by monorepolint + dprint, and changelog yaml is historical.
//
// We drop two of Ultracite's generated-globs:
//   - `**/generated`: this repo treats `src/generated/` (conjure-emitted code) as
//     first-class checked-in source — only `src/generatedNoCheck{,2}/` are excluded
//     (see below), and dprint formatted `src/generated/` before the oxc migration.
//   - `**/*.generated.*`: this glob is meant to match generated *files* (e.g.
//     `foo.generated.ts`), but it also matches the `@osdk/e2e.generated.*` package
//     *directory* names on their absolute path, which would make oxfmt skip those
//     packages entirely (their hand-written `src/index.ts` barrel included) and
//     exit non-zero on "no files". dprint formatted those barrels before the
//     migration; dropping this glob keeps that parity. The repo has no real
//     `*.generated.*` files that rely on it (verified via `git ls-files`).
// The other Ultracite generated-globs (`**/_generated`, `**/__generated__`,
// `**/auto-generated`, `**/codegen`, …) are left intact.
export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []).filter((p) =>
      p !== "**/generated" && p !== "**/*.generated.*"
    ),
    "**/package.json",
    "**/tsconfig.json",
    // YAML stays excluded. The only .yml/.yaml inside oxc-migrated packages are
    // the mustache-template docs (react-sdk-docs / typescript-sdk-docs
    // src/documentation.yml) and historical changelog entries (**/changelog/,
    // excluded below). oxfmt's YAML formatter changes the indentation of the
    // `{{#isUnary}}` / `{{/isUnary}}` mustache sections inside the `|-` scalars,
    // which corrupts the templates (verified). There is nothing else to gain, so
    // leave the whole type to its authors.
    "**/*.yml",
    "**/*.yaml",
    // JSON / JSONC ARE formatted by oxfmt (parity with dprint, which formatted
    // them via its json plugin before the migration). EXCEPTIONS: package.json
    // and tsconfig.json are excluded above because monorepolint owns their exact
    // content (field order, generated tsconfig) and oxfmt's json formatter
    // reorders/reshapes them, which fights `mrl check`. All other json
    // (api-extractor.json, turbo.json, data fixtures, …) is oxfmt-formatted.
    // `.md` IS formatted by oxfmt (parity with dprint, which formatted markdown
    // via its markdown plugin before the migration): oxfmt normalizes markdown
    // structure and reformats embedded code fences the same way it formats source.
    // `.mdx` stays excluded: oxfmt would reflow it as markdown and corrupt the
    // embedded JSX expressions (e.g. the `{/* license */}` block), breaking
    // Storybook's mdx indexer.
    "**/*.mdx",
    // CSS / SCSS / HTML ARE formatted by oxfmt (these types were never covered by
    // dprint, which had no css/html plugin). oxfmt only runs inside oxc-migrated
    // packages (each invokes `oxfmt -c ../../oxfmt.config.ts .`), so enabling
    // these types here formats the migrated component packages' stylesheets
    // (@osdk/react-components, @osdk/cbac-components, @osdk/react-devtools, …) and
    // the vite sandbox apps' index.html entry points, while packages still on the
    // dprint/eslint path are untouched. `.hbs`/mustache stays out via the
    // **/templates/ exclusion below; YAML stays out above.
    // Shipped scaffolding under create-app/create-widget template packages'
    // templates/ dirs is not part of this repo's own source: it carries its own
    // (soon-to-be-oxc) tooling config, uses .hbs mustache templates oxfmt would
    // corrupt, and is migrated separately. oxlint already ignores **/templates/;
    // mirror that here so the tooling migration touches only each package's src.
    "**/templates/",
    // generated/owned by monorepolint (dprint-formatted)
    "**/vitest.config.mts",
    "**/changelog/",
    "**/src/generatedNoCheck/",
    "**/src/generatedNoCheck2/",
    "**/build/",
    "**/dist",
  ],
});
