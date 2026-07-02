---
"@osdk/aip-core": patch
"@osdk/foundry-config-json": patch
"@osdk/seed-compiler": patch
"@osdk/seed-helpers": patch
"@osdk/oauth": patch
"@osdk/faux": patch
"@osdk/osdk-docs-context": patch
---

Migrate @osdk/aip-core, @osdk/foundry-config-json, @osdk/seed-compiler, @osdk/seed-helpers, @osdk/oauth, @osdk/faux, and @osdk/osdk-docs-context to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eleventh increment of the repo-wide oxc migration; the standard libraries). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.
