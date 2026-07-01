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
});
