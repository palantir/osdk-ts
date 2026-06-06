---
"@osdk/client": minor
---

Send a single-rid attribution header on function, query, and action calls so the API Gateway can attribute the execution to the calling app as `callerRid`. The header prefers the client's `applicationRid` when present and otherwise falls back to the resource rid the call acts on.
