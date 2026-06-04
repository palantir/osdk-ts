---
"@osdk/react-components": minor
---

add `apiRef` to `ObjectTable` exposing an imperative `getSnapshot()` handle that loads all matching rows (up to `maxRows`) and returns format-agnostic columns and row values for the caller to export (CSV, Excel, etc.); function-backed and custom columns are reported in `excludedColumns`
