---
"@osdk/client": patch
---

Allow casting interface instances with struct property implementations back to their object type only when their backing properties were fully loaded. Store the load request on the object and analyze its selections and property load levels when casting. Preserve the load sources through clones and cache updates. Casts with reduced implementations still throw.

Honor the experimental default property load level when fetching interface instances.
