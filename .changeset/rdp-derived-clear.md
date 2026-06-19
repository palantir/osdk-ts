---
"@osdk/client": patch
---

Fix runtime-derived-property (RDP) cache merges dropping or stale-serving derived values. Derived fields are now resolved by the query's rdp set rather than by object-schema membership or wire presence, so: a derived value that becomes null clears instead of retaining the stale cached value; a derived field shared by two queries with overlapping rdp sets is no longer dropped when one propagates to the other; and a query using both `$select` and a derived property keeps the derived field on a partial write.
