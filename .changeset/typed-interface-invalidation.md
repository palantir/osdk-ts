---
"@osdk/client": patch
"@osdk/react": patch
---

Add `invalidateObjectOrInterfaceType`, accepting an API name string or object/interface definition through the existing invalidation path. Deprecate `invalidateObjectType` as an alias. React refetch callbacks use the new API, and aggregations now refresh for interface dependencies, including when a fetch is already running.
