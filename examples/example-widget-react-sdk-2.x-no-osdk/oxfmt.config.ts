import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // Leave package.json and tsconfig.json to npm and TypeScript.
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "**/package.json",
    "**/tsconfig.json",
  ],
  // Import order is not enforced, so you can group imports however you like.
  sortImports: false,
  // Trailing commas everywhere, function parameters and arguments included.
  trailingComma: "all",
});
