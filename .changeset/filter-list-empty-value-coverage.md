---
"@osdk/react-components": patch
---

Dedupe empty/null aggregation rows across all FilterList property filters. `usePropertyAggregation` now collapses any combination of `null`, `undefined`, and `""` buckets returned by the backend into a single "No value" row, so dropdown, multi-select, and text-tag filters no longer show two or more "No value" entries when the underlying aggregation produces multiple empty groupings. Whitespace-only strings remain as their literal value, matching Workshop. The behavior previously lived in `ListogramInput` only; lifting it into the hook covers every consumer. Adds a shared `dedupeEmptyAggregationRows` helper exported from `utils/filterValues.ts` for downstream reuse.
