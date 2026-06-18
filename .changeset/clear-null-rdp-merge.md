---
"@osdk/client": patch
---

Fix runtime-derived-property (RDP) cache-merge bugs by reconciling every cached object through a single rule: for each field the source query wins for a field it loaded or computed (an omitted such field clears), otherwise the target keeps its cached value. A now-null derived value clears instead of retaining the stale value; a derived value shared by two queries with overlapping RDP sets is no longer dropped when one propagates to the other; a query using both `$select` and a derived property no longer loses the derived field on a partial write; and a full write, which is authoritative for its base properties, now clears a base property it omits instead of retaining the stale cached value. Previously the derived fields were resolved against the base object schema, which never lists derived field names at runtime, and the select merge ran before the RDP merge could read them.
