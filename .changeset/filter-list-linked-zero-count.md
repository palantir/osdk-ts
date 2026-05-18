---
"@osdk/react-components": minor
---

`FilterList` now supports combining linked-property and direct-property filters via a single objectSet. Pass the unfiltered scope as `objectSet` and a new `onEffectiveObjectSetChanged` callback receives the fully-narrowed `ObjectSet` (linked + direct filters applied) for use as a downstream `ObjectTable`'s `objectSet`. Adds `LinkedPropertyFilterDefinition.reverseLinkName` (required by FilterList's internal walker to invert the pivot back to the source object type) and `showFilteredOutValues`, which renders count=0 greyed-out rows on direct-property facets for values present in the unfiltered scope but absent under an active linked-property filter.

`onFilterClauseChanged` continues to emit a `WhereClause<Q>` containing only direct-property selections (link traversals can't be expressed in `WhereClause`). Linked-property narrowing is applied internally by composing `pivotTo`/`where`/`intersect`/`union`/`subtract` on the input `objectSet` — no SDK-level changes required.

Note: `onFilterClauseChanged` no longer fires on mount. Consumers that need the initial filter state should read it from the hook's returned `filterStates`/`whereClause` directly.
