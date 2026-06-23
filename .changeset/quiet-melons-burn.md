---
"@osdk/client": patch
---

Revert the empty-where-clause runtime checks added in #3348. `modernToLegacyWhereClause` no longer throws on an empty clause, and `.where({})` no longer short-circuits to a no-op, restoring the pre-#3348 behavior where an empty clause lowers to an empty AND. Note: this reintroduces the original behavior where a `.where({})` (including no-filter `useOsdkObjects`/`useOsdkAggregation` queries via the observable layer) emits an empty AND on the wire, which some object-storage backends reject on the aggregate path.
