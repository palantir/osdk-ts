---
"@osdk/client": patch
---

Fix observed object sets with filters or pivots in their base query staying stale after actions or explicit invalidation. Resolve the types used by the complete query and refresh derived bases from the server.
