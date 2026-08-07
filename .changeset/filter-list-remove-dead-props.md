---
"@osdk/react-components": minor
---

Remove dead and deprecated props from the experimental FilterList API. `FilterListProps.filterClause` was never read — FilterList has always owned its own filter state, so passing it did nothing; read state out with `onFilterClauseChanged` instead. Also removes the unused `FilterStatesMap` and `FilterState<Q>` types, the unused `FilterListItemProps` type, and `BaseFilterListProps.hasVisibilityChanges` (deprecated in favor of `canReset`).
