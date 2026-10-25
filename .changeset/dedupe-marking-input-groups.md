---
"@osdk/maker-experimental": patch
"@osdk/maker": patch
---

Deduplicate marking input group names when building an object's datasource marking constraint, so properties that share a group no longer create a separate repeated-name Marketplace input such as `group/group`.
