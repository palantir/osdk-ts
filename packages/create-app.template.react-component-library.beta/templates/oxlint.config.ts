import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

export default defineConfig({
  extends: [core],
  ignorePatterns: [
    ...core.ignorePatterns,
    "**/dist/**",
    "**/build/**",
    "**/.docusaurus/**",
    "**/.turbo/**",
    // Docusaurus's swizzle convention requires the override file to keep its
    // exact original name (PascalCase with all-caps "MDX") — can't rename to
    // satisfy unicorn/filename-case.
    "apps/docs/src/theme/MDXComponents.tsx",
  ],
  rules: {
    // Prefer `function Foo()` declarations over `const Foo = () =>`.
    // Arrow functions are still allowed for callbacks and inline lambdas.
    "eslint/func-style": [
      "error",
      "declaration",
      { allowArrowFunctions: true },
    ],
    // React convention: components live in PascalCase files.
    "unicorn/filename-case": [
      "error",
      { cases: { kebabCase: true, pascalCase: true } },
    ],
  },
});
