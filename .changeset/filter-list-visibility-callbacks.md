---
"@osdk/react-components": minor
---

Fire `onFilterVisibilityChange` on drag-reorder in controlled mode, not just uncontrolled. Previously a drag in `addFilterMode="controlled"` fired no callback at all and the row snapped back, so reordering was impossible to observe or persist. `onFilterAdded` no longer receives a second `newDefinitions` argument: it was passed the caller's own unchanged `filterDefinitions` array rather than the post-add state. Use `onFilterVisibilityChange`, which reports visible-then-hidden filters in display order, for the resulting visibility and order.
