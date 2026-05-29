---
"@osdk/react-components": patch
---

Fix "Failed to load null count" error on date and number range filters when no cross-filter is active. The null-count aggregation no longer wraps an empty where clause inside `$and`, which the aggregation API rejects.
