---
"@osdk/maker": patch
"@osdk/maker-experimental": patch
"@osdk/maker-import": patch
---

Migrate @osdk/maker, @osdk/maker-experimental, and @osdk/maker-import to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (tenth increment of the repo-wide oxc migration; the maker family). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.
