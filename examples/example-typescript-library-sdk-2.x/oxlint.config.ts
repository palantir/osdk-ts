import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

export default defineConfig({
  extends: [core],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // Prefer named `function f() {}` declarations for top-level functions, but
    // only warn: arrow functions still work, and inline callbacks are untouched.
    "func-style": ["warn", "declaration"],
    // Type-only imports are not policed here, matching the other create-app and
    // create-widget templates. Without this, the preset default
    // (`prefer-top-level`) would reject inline `import { type X }`.
    "import/consistent-type-specifier-style": "off",
    "typescript/consistent-type-imports": "off",
  },
});
