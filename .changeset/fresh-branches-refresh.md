---
"@osdk/client": patch
"@osdk/vite-plugin-branch": patch
---

Inject the current Foundry branch into a CSP-safe HTML meta tag so switching git branches cannot reuse a stale branch from Vite's optimized dependency cache. The client reads this runtime value from the document, while the Vite plugin accepts the server-only `FOUNDRY_BRANCH_RID` override during development and production builds. Replace any `VITE_FOUNDRY_BRANCH_RID` override with `FOUNDRY_BRANCH_RID`.
