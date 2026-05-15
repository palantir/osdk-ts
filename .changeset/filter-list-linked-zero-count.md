---
"@osdk/react-components": minor
---

`FilterList` now supports a dual-`ObjectSet` configuration for integrations that combine linked-property and direct-property filters. Pass `baseObjectSet` alongside the (already narrowed) `objectSet` and direct property facets aggregate against the narrowed set for accurate counts while still surfacing base-only values as muted/greyed-out zero-count rows; linked-property facets pivot from the base scope so their value lists never collapse. Adds `onFilterStatesChanged` for emitting the full filter state map on every change (useful as a stable cache key, since `filterClause` does not reflect linked-filter selections), adds `reverseLinkName` to `LinkedPropertyFilterDefinition`, and ships a new `applyLinkedFilters(baseObjectSet, definitions, filterStates)` helper that builds the narrowed `ObjectSet` from linked-filter selections via `pivotTo`/`where`/`pivotTo`/`intersect`.
