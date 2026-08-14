---
"@osdk/react-components": minor
---

FilterList: a `CUSTOM` filter's seed now filters the object set, not just the input.

`filterState` and `defaultFilterState` are now read as one chain, `defaultFilterState` winning, so renaming preserves the value.

Also fixes the active filter count for `CUSTOM` filters, which counted any custom state as active. It now counts only when its `toWhereClause` produces a clause, matching what FilterList actually applies — so a seed that filters nothing no longer inflates the count.
