---
"@osdk/functions-testing.experimental": patch
---

Improve mock link error behavior in `createMockOsdkObject`:

- The `links` option now accepts an `Error` as a single-link value. `fetchOne()` rejects with the error and `fetchOneWithErrors()` resolves with `{ error }`, so code that branches on the error result of a single-link fetch is now reachable in mocks.
- Accessing a link that wasn't configured no longer silently returns `undefined`. The accessor now exists, and its `fetchOne()` rejects / `fetchOneWithErrors()` resolves with a descriptive error naming the link, object type, and primary key.
