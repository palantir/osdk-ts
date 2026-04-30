---
"@osdk/react": minor
"@osdk/client": minor
---

expose `$includeAllBaseObjectProperties` on `useLinks` and on the underlying `ObservableClient.observeLinks`. When set against a link whose target is an interface, the server returns the underlying concrete object's full property set so `obj.$as(ConcreteType)` yields a fully-populated concrete object. The flag is dropped at fetch time when the link target is an object type and does not narrow the returned `Osdk.Instance` type.
