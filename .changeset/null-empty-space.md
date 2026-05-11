---
"@osdk/react-components": patch
---

Treat `null`, `""`, and whitespace strings as three distinct filter values in FilterList. The null row now toggles `includeNull` via a dedicated sibling control and continues to render as `<NoValueLabel />`. Literal empty strings render with a new `<EmptyStringLabel />` ("(empty)") and flow through `values` / `selectedValues` literally. Whitespace strings render their literal characters. `SELECT` and `EXACT_MATCH` predicate output no longer maps `""` to `$isNull` — surface `includeNull: true` on the filter state instead. Adds `--osdk-filter-empty-string-color` and `--osdk-filter-empty-string-font-style` tokens. Replaces the previous null/`""` dedupe with category-aware deduping (`dedupeAggregationRows`) that merges within each category but never across.
