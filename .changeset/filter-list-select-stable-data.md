---
"@osdk/react-components": patch
---

Fix layout flash in FilterList multi-select and single-select inputs during sibling-aggregation refetch. Previously, when a listogram checkbox toggled and triggered a refetch in sibling filters, MULTI_SELECT and SINGLE_SELECT inputs briefly stacked "Loading options..." and "Updating..." above the combobox, pushing the panel layout down and snapping back when the fetch completed. Both inputs now use the same useStableData pattern already used by ListogramInput and RangeInput: the last non-loading values are preserved across refetch so the combobox stays mounted with its prior options and chips, with no inline loading hint. The "Loading options..." empty-state still shows on genuine first load; "No options available" still shows when the aggregation resolves to empty.
