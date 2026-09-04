---
"@osdk/api": patch
---

Fix unsound aggregation result types: `min`/`max`/`sum`/`avg` are now always `| undefined`, regardless of whether the aggregated property is nullable. These metrics return null when the aggregation matches no objects, so a non-nullable property (such as a primary key, which the generator always emits as `non-nullable`) previously typed as non-null while still resolving to null at runtime. Note this can surface new compile errors where code relied on the previous non-null type.
