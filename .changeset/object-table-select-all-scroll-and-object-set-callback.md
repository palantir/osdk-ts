---
"@osdk/react-components": minor
---

ObjectTable:

- Fix "select all" + scroll: newly-loaded rows are now checked and the header checkbox stays in sync. `onRowSelection` refires in uncontrolled mode with the expanded id list as new pages load.
- Add `onRowSelectionChanged(change)` callback that delivers a `RowSelectionChange` payload with `selectedRowIds`, `selectedRows`, `isSelectAll`, and a derived `objectSet` (full underlying set on "select all", otherwise narrowed by `$primaryKey`).
- Deprecate `onRowSelection` in favor of `onRowSelectionChanged`. The legacy callback continues to fire for backwards compatibility.
