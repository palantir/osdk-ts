---
"@osdk/client": patch
---

Allow casting interface instances with non-local property implementations back to their object type unless a selected property has a reduced implementation, or a struct implementation loaded without `$includeAllBaseObjectProperties: true`. Honor the experimental default property load level when fetching interface instances.
