---
"@osdk/react-components": minor
---

FilterList: add `onFilterChanged`, a single callback that fires on every filter-state change — set, clear or reset — replacing the need to wire up `onFilterStateChanged`, `onFilterClauseChanged` and `onEffectiveObjectSet` separately. The event carries `filterClause`, `filteredObjectSet` and `activeFilters`, plus a `cause` of `"SET"` (with `filterKey` and `newState`), `"CLEAR"` (with `filterKey`) or `"RESET"`. `activeFilters` lists every active filter in definition order, tagged with the `kind` of its definition (`PROPERTY`, `STATIC_VALUES`, `KEYWORD_SEARCH`, `CUSTOM`, `HAS_LINK`, `LINKED_PROPERTY`), carrying that filter's state plus, per kind, its own `clause` for the clause-producing kinds and `linkName` / `innerWhere` / `innerState` / `isExcluding` for the link kinds. Also exports the `ActiveFilter` types.

`filterKey` on `onFilterAdded`, `onFilterRemoved` and `onFilterVisibilityChange` is now typed `string` rather than a union of the declared filter keys.
