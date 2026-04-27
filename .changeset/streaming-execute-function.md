---
"@osdk/client": minor
---

Add `executeStreamingFunction` on query proxies, backed by the `streamingExecute` endpoint in `@osdk/foundry.functions`. Use `for await (const item of client(myQuery).executeStreamingFunction(params))` to consume streamed query results; the returned `AsyncIterable` flattens batched array outputs so each element is yielded individually, and error lines from the stream are thrown as `Error`s with the `errorCode`, `errorName`, `errorInstanceId`, and `errorDescription` fields attached.
