---
"@osdk/client": patch
"@osdk/functions": patch
---

Fix writeable client reads not flushing staged edits: persist `flushEdits` onto the client context and wire it to the EditRequestManager so awaiting a read (fetchOne/fetchPage/aggregate/query) flushes pending creates/updates first.
