---
"@osdk/react-components": minor
---

FilterList: fire `onFilterVisibilityChange` on drag-reorder in controlled mode, not just uncontrolled. Previously a drag in `addFilterMode="controlled"` fired no callback at all and the row snapped back, so reordering was impossible to observe or persist. Deprecate `addFilterMode`: it is going away, and visibility will always be managed internally, i.e. today's `"uncontrolled"` behavior. Deprecate the `newDefinitions` argument of `onFilterAdded`, which is the caller's own unchanged `filterDefinitions` rather than the post-add state — it is still passed, so existing handlers keep working, but read `onFilterVisibilityChange` for the resulting visibility and order instead. No breaking changes.
