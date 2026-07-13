---
"@osdk/react-components": minor
---

Export ObjectTable's building-block hooks (`useObjectTableData`, `useColumnDefs`, `useTableSorting`, `useRowSelection`, `useColumnPinning`, `useColumnResize`, `useColumnVisibility`, `useSelectionColumn`, `useFocusedRow`, `useEditableTable`, `useObjectTableSnapshot`, `useFunctionColumnsData`, `useCellContextMenu`) from `@osdk/react-components/experimental/object-table` so consumers can build a fully headless table. `useObjectTableData` now takes a single options object instead of positional arguments, and `@tanstack/react-table` is now a peer dependency (consumers building their own table need the same TanStack version).
