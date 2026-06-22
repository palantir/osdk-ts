---
"@osdk/shared.net.errors": patch
"@osdk/shared.client.impl": patch
"@osdk/shared.net.fetch": patch
"@osdk/shared.net": patch
---

Lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint. First increment of the repo-wide oxc migration (#3031), covering: `@osdk/shared.net`, `@osdk/shared.net.errors`, `@osdk/shared.net.fetch`, and `@osdk/shared.client.impl`.
