---
"@osdk/client": patch
---

Fix observed object sets with intersect, subtract, or union options using only their where clause for cache updates. These sets now refresh from the server when related objects change in the cache, preserving the complete set operation.
