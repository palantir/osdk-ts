---
"@osdk/client": patch
---

Fix `pivotTo` emitting an object set the backend rejects with `Api:UnsupportedObjectSet`. On an object set rooted at an interface, every subsequent `pivotTo` emitted an `interfaceLinkSearchAround` node — even once the chain had already followed a link onto a concrete object type, at which point the traversal is an ordinary link and must be a `searchAround`. An interface link cannot be resolved against an object-typed object set, so the request failed.

Whether a link's target is an object type or an interface type is only known from ontology metadata, which `pivotTo` cannot read synchronously. The wire object set is therefore normalized just before it is sent: any `interfaceLinkSearchAround` whose source resolves to an object type is rewritten to `searchAround`. Chains that stay on interface types the whole way are unaffected, and object sets containing no interface-link traversal are passed through untouched.

This applies to every path that sends an object set: `fetchPage` (object and interface), `aggregate`, link loading, temporary object set creation, and object sets supplied as action or query parameters. The observable layer inherits the fix because it reads through `fetchPage`.
