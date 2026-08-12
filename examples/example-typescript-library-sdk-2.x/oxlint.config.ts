import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

export default defineConfig({
  extends: [core],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // Prefer named `function f() {}` declarations for top-level functions, but
    // only warn: arrow functions still work, and inline callbacks are untouched.
    "func-style": ["warn", "declaration"],
    "import/consistent-type-specifier-style": "off",
    "typescript/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
  },
});
