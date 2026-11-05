---
"@osdk/client": patch
"@osdk/react": patch
---

Add `invalidateObjectOrInterfaceType`, which accepts an object or interface definition and refreshes affected queries. Deprecate `invalidateObjectType` while retaining its object-only behavior. React list, object-set, and aggregation refetch callbacks use the typed API and do nothing while disabled. Preserve object/interface identity in dependency matching and normalize mixed interface/object pivots before dependency discovery.
