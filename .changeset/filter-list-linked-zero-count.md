---
"@osdk/react-components": minor
---

`FilterList` now supports combining linked-property and direct-property filters via a single objectSet. Pass the unfiltered scope as `objectSet` and the new `onEffectiveObjectSet` observer receives the fully-narrowed `ObjectSet` (direct + linked filters applied) on every filter change. Adds `LinkedPropertyFilterDefinition.reverseLinkName` (required by FilterList to invert the pivot back to the source object type) and `showFilteredOutValues`, which renders count=0 greyed-out rows for values present in the unfiltered scope but absent under an active linked-property filter. Ghost rows apply symmetrically to both direct-property facets (Listogram, MultiSelect, SingleSelect) and linked-property facets configured with `MULTI_SELECT` / `SINGLE_SELECT` / `LISTOGRAM` sub-components.

Existing `filterClause` / `onFilterClauseChanged` props still work and continue to emit a `WhereClause<Q>` covering direct filters (LINKED_PROPERTY narrowing cannot be expressed as a `WhereClause<Q>` and surface only through `onEffectiveObjectSet`). Linked filters are composed via the new exported `narrowObjectSet(objectSet, whereClause, linkedFilters)` helper for consumers building their own headless pipelines.

Linked-property facets now compare against the raw unfiltered `objectSet` when computing ghost rows, so a value whose source rows were filtered out by either direct or linked sibling filters still renders as a count=0 row.
