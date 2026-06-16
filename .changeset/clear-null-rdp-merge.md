---
"@osdk/client": patch
---

Fix runtime-derived-property (RDP) cache-merge bugs by reconciling every cached object through a single path where base properties resolve by the object schema and derived fields resolve by the query's RDP set. A now-null derived value clears instead of retaining the stale value; a derived value shared by two queries with overlapping RDP sets is no longer dropped when one propagates to the other; and a query using both `$select` and a derived property no longer loses the derived field on a partial write. Previously the derived fields were resolved against the base object schema, which never lists derived field names at runtime, and the select merge ran before the RDP merge could read them.
