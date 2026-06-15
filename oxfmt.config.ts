import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

// Ultracite drives the oxfmt formatting preset. We extend its ignorePatterns to
// leave files that other tooling owns untouched: package.json / tsconfig.json are
// still managed by monorepolint + dprint, and changelog yaml is historical.
// See #3031 (incremental dprint -> oxfmt migration).
export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "**/package.json",
    "**/tsconfig.json",
    // YAML is not formatted by dprint either (no yaml plugin); some packages keep
    // significant-whitespace data here (e.g. mustache templates in
    // typescript-sdk-docs/src/documentation.yml) that reformatting would corrupt.
    "**/*.yml",
    "**/*.yaml",
    // generated/owned by monorepolint (dprint-formatted)
    "**/vitest.config.mts",
    "**/changelog/",
    "**/src/generatedNoCheck/",
    "**/src/generatedNoCheck2/",
    "**/build/",
    "**/dist",
  ],
});
