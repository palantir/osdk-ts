---
"@osdk/react-components": minor
"@osdk/react-sdk-docs": patch
---

Fix FilterList's `HAS_LINK` filter, which previously sent an unsupported `$isNotNull` operator and was silently rejected by the server. `HAS_LINK` and `LINKED_PROPERTY` now filter by deriving a `$count` of matching linked objects and no longer use object-set `intersect`.

Fix `LINKED_PROPERTY` excluding: source rows with no linked object at all are now retained (previously dropped). 

Consumer notes:

- `HAS_LINK` and `LINKED_PROPERTY` do not appear in `onFilterClauseChanged` (they cannot be expressed as a `WhereClause`). Wire `onEffectiveObjectSet` and pass the returned `ObjectSet` to the table to see them applied.
- `LINKED_PROPERTY` no longer requires `reverseLinkName` — the count-based narrowing does not need the reverse traversal.
- Removed bad documentation `$isNotNull` in `useOsdkObjects` snippets.
