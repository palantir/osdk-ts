import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

// Ultracite is strict by default. The rules below are relaxed because they are
// stylistic, or because they conflict with how this app is set up. Remove any
// of them to opt back in.
export default defineConfig({
  extends: [core, react],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // Stylistic.
    "arrow-body-style": "off",
    // Allow `x == null` as the coercion-free "is null or undefined" check.
    eqeqeq: ["error", "always", { null: "never" }],
    // Prefer named `function f() {}` declarations for top-level functions, but
    // only warn: arrow functions still work, and inline callbacks are untouched.
    "func-style": ["warn", "declaration"],
    // `import { type X }` and `import type { X }` are both fine.
    "import/consistent-type-specifier-style": "off",
    "typescript/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
    // Assets in public/ are imported by absolute path so their URL respects
    // Vite's `base` (e.g. `vite build --base=/sub/`); a hardcoded "/logo.svg"
    // would not.
    "import/no-absolute-path": "off",
    // See eqeqeq.
    "no-eq-null": "off",
    // Stylistic; the negated form is often the clearer one.
    "no-negated-condition": "off",
    // The mock helpers use the terse `new Promise((r) => setTimeout(r, n))`.
    "no-promise-executor-return": "off",
    // Worth knowing about, not worth failing a build over.
    "no-shadow": "warn",
    // Hoisted functions may be declared after they are used.
    "no-use-before-define": "off",
    // Stylistic.
    "prefer-destructuring": "off",
    // See no-promise-executor-return.
    "promise/avoid-new": "off",
    // Promise chains are fine where they read better than async/await.
    "promise/prefer-await-to-then": "off",
    // Hook correctness rules, which the preset does not enable by default.
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    // Keeps React Fast Refresh working; constants may still be exported.
    "react/only-export-components": ["warn", { allowConstantExport: true }],
    // Would force alphabetical keys everywhere, e.g. a route's `path` after its
    // `element`.
    "sort-keys": "off",
    // The entrypoint uses `createRoot(document.getElementById("root")!)`.
    "typescript/no-non-null-assertion": "off",
    // `catch (e)` is fine.
    "unicorn/catch-error-name": "off",
    // Components are PascalCase (e.g. AuthCallback.tsx).
    "unicorn/filename-case": "off",
    // `(await getThing()).prop` is clear enough.
    "unicorn/no-await-expression-member": "off",
    // See no-negated-condition.
    "unicorn/no-negated-condition": "off",
    // An explicit `return undefined` is often clearer than a bare `return`.
    "unicorn/no-useless-undefined": "off",
    // getElementById is the idiomatic lookup for the React root.
    "unicorn/prefer-query-selector": "off",
    // This project targets ES2020; String.prototype.replaceAll is ES2021.
    "unicorn/prefer-string-replace-all": "off",
  },
});
