---
"@osdk/client": patch
---

Fix two runtime-derived-property (RDP) cache-merge bugs. A now-null derived value now clears instead of retaining the stale value: the source query is authoritative for the RDP fields it computed, so an omitted field propagates as cleared. Separately, a derived value shared by two queries with overlapping RDP sets is no longer dropped when one propagates to the other. RDP fields are now resolved by the query's RDP set rather than the base object schema, which never lists derived field names.
