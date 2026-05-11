---
"@osdk/client": patch
---

fix list hooks emitting undefined entries during deletes

• register `changes.deleted` when `propagateWrite` writes a tombstone, so list/objectset queries drop the cache key in the same batch (fixes `useOsdkObjects` + `applyAction(delete)` and optimistic deletes)
• same fix applied to streaming-driven removals in `BaseListQuery.onOswRemoved`
