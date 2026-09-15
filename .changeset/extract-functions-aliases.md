---
"@osdk/aliases": minor
"@osdk/functions": patch
---

Extract the existing Functions alias runtime into `@osdk/aliases/internal`, an internal compatibility entry point for `@osdk/functions`. All six alias readers remain available through `Aliases` in `@osdk/functions` with the same synchronous return types and error behavior.
