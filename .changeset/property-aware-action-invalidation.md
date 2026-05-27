---
"@osdk/client": patch
---

Property-aware per-type cache invalidation after actions. Lists and aggregations now skip their server refetch when the only properties an action modifies are disjoint from the where, orderBy, groupBy or aggregated fields they actually depend on. Queries that use `withProperties` (RDPs) keep the prior conservative behavior since their where clauses may reference derived names backed by underlying properties we can't statically map. Restores the awaited per-type fan-out so `applyAction` resolves with a consistent cache.
