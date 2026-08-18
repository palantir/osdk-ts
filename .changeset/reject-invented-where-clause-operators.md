---
"@osdk/react-components": patch
"@osdk/react-sdk-docs": patch
---

Fix FilterList's `HAS_LINK` filter, which sent an unsupported `$isNotNull` filter. `HAS_LINK` and `LINKED_PROPERTY` now filter by deriving a count of matching linked objects and not using intersect. Remove bad documentation `$isNotNull` in `useOsdkObjects` snippets.
