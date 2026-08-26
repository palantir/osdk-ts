---
"@osdk/react-components": minor
---

FilterList: add `onFilterListChanged`, a single callback that fires on mount and on every filter-state change — set, remove or reset. The event has a `snapshot` with the resulting `filterClause` and filtered `ObjectSet`, plus a `reason` tagged union (`FILTER_STATE_CHANGED`, `FILTER_REMOVED`, `FILTER_LIST_RESET`, `FILTER_LIST_INITIALIZED`) describing what changed — replacing the need to wire up `onFilterStateChanged`, `onFilterClauseChanged` and `onEffectiveObjectSet` separately.

`filterKey` on `onFilterAdded`, `onFilterRemoved` and `onFilterVisibilityChange` is now typed `string` rather than a union of the declared filter keys.
