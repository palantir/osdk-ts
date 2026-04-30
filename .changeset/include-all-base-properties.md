---
"@osdk/react": minor
"@osdk/client": minor
---

expose $includeAllBaseObjectProperties on useOsdkObjects, useLinks, and useOsdkObject (and on the underlying ObservableClient observeObject/observeList/observeLinks). When set against an interface query, the server returns the underlying concrete object's full property set so obj.$as(ConcreteType) yields a fully-populated concrete object. The flag is a runtime-only option — it is dropped for non-interface queries and does not narrow the returned Osdk.Instance type.
