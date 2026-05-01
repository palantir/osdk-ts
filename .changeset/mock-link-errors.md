---
"@osdk/functions-testing.experimental": patch
---

Accessing a link that wasn't configured on a `createMockOsdkObject` mock no longer silently returns `undefined`. The accessor now exists, and its `fetchOne()` rejects / `fetchOneWithErrors()` resolves with a descriptive error naming the link, object type, and primary key.
