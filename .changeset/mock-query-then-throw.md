---
"@osdk/functions-testing.experimental": patch
---

Add `thenThrow(error)` to `whenQuery(...)` stub builder. Lets tests explicitly configure a query's `executeFunction` to reject with a specific error, instead of only being able to exercise the implicit "no stub registered" error path.
