---
"@osdk/react-components": minor
---

ObjectTable: drop the redundant `selectedRowIds` field from the `RowSelectionChange` payload delivered to `onRowSelectionChanged`. The primary keys are still available via `selectedRows.map(r => r.$primaryKey)`. `selectedRowIds` was redundant with `selectedRows` and was kept only as a transitional alias.
