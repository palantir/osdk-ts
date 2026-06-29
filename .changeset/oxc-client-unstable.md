---
"@osdk/client.unstable": patch
---

Migrate @osdk/client.unstable to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eighth increment of the repo-wide oxc migration). The package is almost entirely conjure-generated code under src/generated, which the shared Ultracite preset ignores, so only the hand-written files are linted and formatted and no source reformat is needed.
