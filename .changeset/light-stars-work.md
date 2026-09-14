---
"@osdk/client": patch
---

invalidateAll() flips the order of objects because of a clientSort, this change removes that behavior
