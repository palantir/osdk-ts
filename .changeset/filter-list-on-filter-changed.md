---
"@osdk/react-components": minor
---

FilterList: add `onFilterChanged`, a single callback whose event object carries `filterKey`, `newState`, `filterClause`, `filteredObjectSet` and `activeFilters`, replacing the need to wire up `onFilterStateChanged`, `onFilterClauseChanged` and `onEffectiveObjectSet` separately. `activeFilters` lists every active filter in definition order, tagged with the `kind` of its definition (`PROPERTY`, `STATIC_VALUES`, `KEYWORD_SEARCH`, `CUSTOM`, `HAS_LINK`, `LINKED_PROPERTY`), carrying that filter's own `clause` for the clause-producing kinds and `linkName` / `innerWhere` / `isExcluding` for the link kinds. Also exports `getActiveFilters` and the `ActiveFilter` types.

`filterKey` on `onFilterAdded`, `onFilterRemoved` and `onFilterVisibilityChange` is now typed `string` rather than a union of the declared filter keys.
