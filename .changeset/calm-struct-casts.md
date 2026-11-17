---
"@osdk/client": patch
---

Allow casting interface instances with struct property implementations back to their object type only when their backing properties were fully loaded. Determine completeness from the load request, including selections and property load levels, and preserve it through clones and cache updates. Casts with reduced implementations still throw.
