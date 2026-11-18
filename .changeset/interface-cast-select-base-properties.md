---
"@osdk/client": patch
---

Reject interface to object type `$as` casts when struct-backed properties were loaded with `$select`, since the server ignores `$includeAllBaseObjectProperties` for selected loads and returns partial structs
