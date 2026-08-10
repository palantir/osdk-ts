---
"@osdk/react-components": minor
---

Remove dead and deprecated props from the experimental FilterList API, and export `FilterKey`.

`FilterListProps.filterClause` was never read — FilterList has always owned its own filter state, so passing it did nothing; read state out with `onFilterClauseChanged` instead. `FilterListItemProps` was exported but described props no component accepts.

`BaseFilterListProps.hasVisibilityChanges` (deprecated in 0.24.0 in favor of `canReset`) is gone, along with its fallback in the reset button's enabled state. `FilterList` is unaffected — it already folds visibility changes into the `canReset` it passes down. Consumers using `BaseFilterList` directly who still pass only `hasVisibilityChanges` will see the reset button stay disabled when no filters are active; pass `canReset` instead.

`FilterKey<Q>` is now exported. It was already referenced by three public `FilterListProps` callbacks (`onFilterAdded`, `onFilterRemoved`, `onFilterVisibilityChange`) but wasn't nameable from outside the package.
