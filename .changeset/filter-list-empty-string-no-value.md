---
"@osdk/react-components": minor
---

FilterList now separates "No value" (null/undefined) from a literal empty string. null and undefined are grouped under a single "No value" option, while an empty string is its own option rendered as "(empty)". Selecting "No value" is now represented by the exported `NO_VALUE` sentinel in `selectedValues` (mapping to `$isNull`), whereas a literal empty string maps to an equality filter. This is a breaking change for callers that previously used `""` in `selectedValues`/`values` to mean "no value" — use `NO_VALUE` instead.
