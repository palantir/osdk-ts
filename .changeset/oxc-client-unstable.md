---
"@osdk/client.unstable": patch
---

Migrate @osdk/client.unstable to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eighth increment of the repo-wide oxc migration). The package is almost entirely conjure-generated code under src/generated, which this repo treats as first-class checked-in source (it was linted by ESLint and formatted by dprint before), so a nested oxlint config re-includes the generated tree and oxfmt reformats it, preserving the prior linting/formatting coverage.
