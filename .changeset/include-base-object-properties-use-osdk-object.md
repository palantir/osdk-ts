---
"@osdk/react": minor
"@osdk/client": minor
---

expose `$includeAllBaseObjectProperties` on `useOsdkObject` and on the underlying `ObservableClient.observeObject`. When set against an interface query, the server returns the underlying concrete object's full property set so `obj.$as(ConcreteType)` yields a fully-populated concrete object. The flag is dropped for non-interface queries and does not narrow the returned `Osdk.Instance` type.
