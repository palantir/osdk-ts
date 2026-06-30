---
"@osdk/client.unstable": patch
"@osdk/client.unstable.tpsa": patch
"@osdk/client": patch
---

Migrate @osdk/client, @osdk/client.unstable, and @osdk/client.unstable.tpsa to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eighth and ninth increments of the repo-wide oxc migration). The conjure-generated src/generated trees in @osdk/client.unstable and @osdk/client.unstable.tpsa are re-included (linted and oxfmt-formatted, matching the prior ESLint + dprint coverage) via per-package nested oxlint configs; @osdk/client's newly-surfaced error-level lint rules are turned off in its nested config to keep the change behavior-preserving.
