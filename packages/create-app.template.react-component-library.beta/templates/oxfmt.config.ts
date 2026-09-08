import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "**/dist/**",
    "**/build/**",
    "**/.docusaurus/**",
    "**/.turbo/**",
    // create-app fills in the package.json name and tsconfig; their key order
    // is owned by the package manager and tsc, so keep oxfmt out of them.
    "**/package.json",
    "**/tsconfig.json",
  ],
});
