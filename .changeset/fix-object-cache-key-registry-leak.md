---
"@osdk/client": patch
---

fix ObjectCacheKeyRegistry leak where unregister was never called during GC cleanup
