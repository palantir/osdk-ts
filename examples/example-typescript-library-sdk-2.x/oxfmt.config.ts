import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // Override Ultracite's `trailingComma: "es5"` to match the monorepo root config.
  trailingComma: "all",
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "**/package.json",
    "**/tsconfig.json",
  ],
});
