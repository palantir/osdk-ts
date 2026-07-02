---
"@osdk/api": patch
"@osdk/functions": patch
"@osdk/unit-testing": patch
---

Migrate @osdk/api, @osdk/functions, and @osdk/unit-testing to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eleventh increment of the repo-wide oxc migration; the check-api core libraries). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving; the public API surface is unchanged.
