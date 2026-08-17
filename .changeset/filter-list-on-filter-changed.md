---
"@osdk/react-components": minor
---

FilterList: add `onFilterChanged`, a single callback whose event object carries `filterKey`, `newState`, `filterClause`, `filteredObjectSet` and `activeLinkedFilters`, replacing the need to wire up `onFilterStateChanged`, `onFilterClauseChanged` and `onEffectiveObjectSet` separately.

`filterKey` on `onFilterAdded`, `onFilterRemoved` and `onFilterVisibilityChange` is now typed `string` rather than a union of the declared filter keys.
