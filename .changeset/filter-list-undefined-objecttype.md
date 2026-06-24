---
"@osdk/react": patch
"@osdk/react-components": patch
---

fix listogram filter crash when objectType is undefined; @osdk/react aggregation/list/function/metadata hooks now return a loading state instead of throwing when type/queryDef is undefined, and FilterList objectType is now allowed to be undefined
