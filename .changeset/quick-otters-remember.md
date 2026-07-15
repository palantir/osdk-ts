---
"@osdk/react-components": minor
---

Remove the deprecated `onRowSelection` prop and the dead filtering API (`enableFiltering`, `onFilterChanged`, and the per-column `filterable`) from ObjectTable. Use `onRowSelectionChanged` for selection changes; programmatic filtering via the controlled `filter` prop is unchanged.
