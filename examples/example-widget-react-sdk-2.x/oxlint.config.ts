import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, react],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // Ultracite's preset steers toward function expressions; we only warn so
    // named declarations are encouraged while arrow callbacks stay idiomatic.
    "func-style": ["warn", "declaration"],
    // The Rules of Hooks are React correctness rules; enable them explicitly
    // since the preset does not turn them on by default.
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    // Keep React Fast Refresh working: warn when a module exports more than
    // components (constants are still allowed).
    "react/only-export-components": ["warn", { allowConstantExport: true }],
    // Purely cosmetic and high-churn: it fires on almost every object literal
    // and would force alphabetical keys on your own code (e.g. a route's `path`
    // must follow `element`). It catches no bugs and changes no behavior, so it
    // is off here, matching the OSDK repo's own config.
    "sort-keys": "off",
    // The React entrypoint idiom relies on a non-null assertion
    // (createRoot(document.querySelector("#root")!)).
    "typescript/no-non-null-assertion": "off",
    // React components are conventionally PascalCase (e.g. AuthCallback.tsx).
    "unicorn/filename-case": "off",
    // This project targets ES2020 (see tsconfig.json), where
    // String.prototype.replaceAll (ES2021) is not available, so keep using
    // String#replace with a global regex.
    "unicorn/prefer-string-replace-all": "off",
  },
});
