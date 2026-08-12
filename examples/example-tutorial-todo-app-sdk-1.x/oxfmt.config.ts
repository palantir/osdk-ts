import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // Ultracite's preset sorts package.json (sortPackageJson) and would also
  // reformat tsconfig.json. Leave both to the package manager / TypeScript
  // tooling that owns their field order rather than the formatter.
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "**/package.json",
    "**/tsconfig.json",
  ],
  // Import order is not enforced. Templates render some imports inside
  // handlebars conditionals (e.g. the `$branch` import when --unstableFeatures
  // is set), so their position is fixed by the template while the module
  // specifier depends on the user's OSDK package name. Sorting would therefore
  // reject a freshly scaffolded project on its own `npm run lint`.
  sortImports: false,
  // Override Ultracite's `trailingComma: "es5"`. "all" adds trailing commas to
  // every multi-line comma-separated structure, function params and arguments
  // included, matching the OSDK repo's own formatting.
  trailingComma: "all",
});
