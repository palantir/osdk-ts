---
"@osdk/react-components": minor
---

FilterList: add `onFilterChanged`, a single callback whose event object carries `filterKey`, `definition`, `newState`, `filterClause`, `filteredObjectSet` and `linkedFilters`, replacing the need to wire up `onFilterStateChanged`, `onFilterClauseChanged` and `onEffectiveObjectSet` separately.
