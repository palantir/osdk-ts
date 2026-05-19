---
"@osdk/client": patch
"@osdk/api": patch
---

Unwrap `$primaryKey` and `$title` when they are returned as secured property values, and include them as keys in `$propertySecurities` (both at the type level and at runtime, including interface views).
