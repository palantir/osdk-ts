---
"@osdk/seed-helpers": patch
---

Allow undefined for any non-primary-key seed property, including properties marked required in ontology metadata. On create, undefined leaves the property empty. On update, undefined clears the property while omitted properties keep their values.
