---
"@osdk/client": minor
---

Add `EXPERIMENTAL__observeObjectSetV2` to observe a fully constructed object set. Apply filters, derived properties, set operations, and pivots to the set before observing it; the options control fetching and observation. Resolve known dependencies from the complete expression and refetch nested queries when those dependencies change. Reuse RDP object-cache handling for derived properties on the returned objects. The existing `observeObjectSet` behavior is unchanged. Multi-object-type results, unknown RID dependencies, and canonicalization of equivalent query expressions remain follow-up work.
