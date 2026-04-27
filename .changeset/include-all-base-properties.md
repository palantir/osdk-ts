---
"@osdk/react": minor
"@osdk/client": minor
---

expose $includeAllBaseObjectProperties on useOsdkObjects, useLinks, and useOsdkObject; when true, the returned Osdk.Instance options slot gains "$allBaseProperties" so obj.$as(ConcreteType) yields a fully-populated concrete object

the observable ObserveObjectsCallbackArgs type's "$allBaseProperties" is now conditional on the new IncludeBase generic — callers that relied on the unconditional "$allBaseProperties" will need to pass the option or will see narrowed types
