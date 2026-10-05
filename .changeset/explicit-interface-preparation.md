---
"@osdk/client": major
---

Require explicit interface preparation with `await client.prepare({ interfaces: [MyInterface] })` before interface queries, interface metadata access, or `$as()` conversions. Preparation returns a new client and preserves declarations when extended. Concrete object metadata still loads automatically, without eagerly fetching implemented interfaces. Use the returned client to load objects; existing clients and instances retain their original preparation contract.
