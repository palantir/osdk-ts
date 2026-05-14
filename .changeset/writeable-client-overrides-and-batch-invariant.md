---
"@osdk/client": minor
---

`createClientFromWriteableClient` now accepts an optional `options` argument to override `transactionId`, `baseUrl`, `ontologyRid`, or `tokenProvider` from the source client. `applyAction` also now throws when batch actions are invoked on a client with an active transaction id, since batch actions are not supported for staged edit functions.
