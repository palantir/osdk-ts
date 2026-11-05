---
"@osdk/seed-helpers": patch
---

Allow undefined nullable properties when creating seed objects. On update, clear nullable properties explicitly set to undefined while leaving omitted properties unchanged, matching ontology edits returned from functions. Accept null at runtime with the same behavior, but exclude it from TypeScript input types. Require primary keys and properties marked non-nullable in the ontology metadata, and return empty properties as undefined.
