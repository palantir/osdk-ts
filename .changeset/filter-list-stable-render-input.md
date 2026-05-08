---
"@osdk/react-components": patch
---

Stabilize per-filter where-clause references inside `useFilterListState` via deep-equality caching, so `FilterInput.memo` holds when the cross-filter context for a given filter is unchanged across selections. Eliminates redundant aggregation requests on every value selection. Internal-only — no public API changes.
