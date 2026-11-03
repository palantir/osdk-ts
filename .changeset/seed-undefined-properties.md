---
"@osdk/seed-helpers": patch
---

Allow null and undefined properties when creating seed objects. On update, clear properties explicitly set to null or undefined while leaving omitted properties unchanged, matching ontology edits returned from functions. Keep primary keys required and return empty properties as undefined.
