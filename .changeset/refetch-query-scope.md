---
"@osdk/react": patch
"@osdk/client": patch
---

Scope `refetch()` in `useOsdkObjects`, `useObjectSet`, and `useOsdkAggregation` to the calling query by default instead of invalidating the entire object type. Add `RefetchOptions` with `scope: "query" | "type"` to support query-scoped and type-wide invalidation.
