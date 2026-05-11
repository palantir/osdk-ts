---
"@osdk/react-components": patch
---

Treat `null`, `""`, and whitespace strings as distinct FilterList values. null renders as "No value" and toggles `includeNull`; literal `""` and whitespace strings render as their quoted literal (`""`, `"   "`) and flow through `values`/`selectedValues`. `SELECT` and `EXACT_MATCH` predicates no longer map `""` to `$isNull` — set `includeNull: true` instead.
