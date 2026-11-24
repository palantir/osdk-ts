---
"@osdk/client": patch
"@osdk/react": patch
"@osdk/react-devtools": patch
---

Add `invalidateObjectOrInterfaceType`, which takes an object or interface definition, and deprecate `invalidateObjectType`. React refetch callbacks use the new API, and aggregations now refresh for interface dependencies, including when a fetch is already running.
