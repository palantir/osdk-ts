import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

// Ultracite's preset is strict opt-out. The ESLint config this replaced was
// deliberately mild for scaffolded projects: eslint/recommended +
// typescript-eslint/recommended + react and jsx-a11y recommended, plus a handful
// of import rules. The rules turned off below are ones that (a) the previous
// config did not enforce, so enabling them would raise the bar for existing
// users, and (b) the OSDK repo also relaxes for its own source. Rules that the
// OSDK repo does enforce are left on even where they are new here, so scaffolds
// match the standards the SDK itself is held to.
export default defineConfig({
  extends: [core, react],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // Stylistic; the previous config allowed either form.
    "arrow-body-style": "off",
    // `==`/`!=` are banned except against null, so the coercion-free
    // `x == null` ("null or undefined") idiom stays available. Mirrors the OSDK
    // repo, which documents this as an intentional idiom.
    eqeqeq: ["error", "always", { null: "never" }],
    // Not enforced previously, and off in the OSDK repo too: both `function f()`
    // and `const f = () => {}` are fine.
    "func-style": "off",
    // `import { type X }` vs `import type { X }` is stylistic.
    "import/consistent-type-specifier-style": "off",
    // Vite serves public/ assets from the root, and importing them keeps the URL
    // base-aware: with `vite build --base=/sub/` the import resolves to
    // "/sub/logo.svg" while a hardcoded "/logo.svg" does not. These apps set the
    // router basename from import.meta.env.BASE_URL so they can be served from a
    // subpath, which makes the import form load-bearing.
    "import/no-absolute-path": "off",
    // See eqeqeq above.
    "no-eq-null": "off",
    // Stylistic; inverting conditions is not always clearer. Both the eslint and
    // unicorn variants are off, matching the OSDK repo.
    "no-negated-condition": "off",
    // Returning from a Promise executor is a real smell but was not previously
    // enforced, and the mock helpers rely on the terse form.
    "no-promise-executor-return": "off",
    // Shadowing is worth surfacing but not worth failing a build over.
    "no-shadow": "warn",
    // Would force reordering declarations; hoisted functions are fine.
    "no-use-before-define": "off",
    // Stylistic.
    "prefer-destructuring": "off",
    // A timer-based delay legitimately needs `new Promise`.
    "promise/avoid-new": "off",
    // Promise chains are readable and were not previously discouraged.
    "promise/prefer-await-to-then": "off",
    // The Rules of Hooks are React correctness rules; enable them explicitly
    // since the preset does not turn them on by default.
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    // Keep React Fast Refresh working: warn when a module exports more than
    // components (constants are still allowed).
    "react/only-export-components": ["warn", { allowConstantExport: true }],
    // Purely cosmetic and high-churn: it fires on almost every object literal
    // and would force alphabetical keys on your own code (e.g. a route's `path`
    // must follow `element`).
    "sort-keys": "off",
    // The React entrypoint idiom relies on a non-null assertion
    // (createRoot(document.getElementById("root")!)).
    "typescript/no-non-null-assertion": "off",
    // `catch (e)` is fine.
    "unicorn/catch-error-name": "off",
    // React components are conventionally PascalCase (e.g. AuthCallback.tsx).
    "unicorn/filename-case": "off",
    // `(await getThing()).prop` is clear enough.
    "unicorn/no-await-expression-member": "off",
    // See no-negated-condition above.
    "unicorn/no-negated-condition": "off",
    // Explicit `return undefined` is often clearer than a bare `return`.
    "unicorn/no-useless-undefined": "off",
    // getElementById is the idiomatic (and faster) lookup for the React root.
    "unicorn/prefer-query-selector": "off",
    // This project targets ES2020 (see tsconfig.json), where
    // String.prototype.replaceAll (ES2021) is not available, so keep using
    // String#replace with a global regex.
    "unicorn/prefer-string-replace-all": "off",
  },
});
