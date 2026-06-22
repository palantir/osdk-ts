---
"@osdk/client": patch
---

Fix runtime-derived-property (RDP) cache merges dropping or stale-serving derived values. A write now declares the derived fields it actually computed, so: a derived value that becomes null clears instead of retaining the stale cached value; a derived field shared by two queries with overlapping rdp sets is no longer dropped when one propagates to the other; a query using both `$select` and a derived property keeps the derived field on a partial write; and a subscription update, which carries base props only, preserves the cached derived values instead of clearing them on every tick.
