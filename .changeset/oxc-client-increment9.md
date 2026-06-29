---
"@osdk/client.unstable.tpsa": patch
"@osdk/client": patch
---

Migrate @osdk/client and @osdk/client.unstable.tpsa to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (ninth increment of the repo-wide oxc migration). @osdk/client.unstable.tpsa is almost entirely conjure-generated code (only its hand-written barrel is linted, with a small carve-out); @osdk/client is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.
