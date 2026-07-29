---
"@osdk/react-components": patch
"@osdk/react-components-storybook": patch
---

Fix `ObjectTable` fetching the next page of rows when the user scrolls horizontally. The scroll container scrolls on both axes and `scroll` events carry no axis information, so a horizontal scroll reached the "near the bottom" check — which is always satisfied when the rows already fit vertically or the user is parked at the bottom.

Pagination is now driven by the visibility of a sentinel row via `useInfiniteScroll` instead of by scroll offsets, so there is no axis to confuse. The trailing loading row doubles as the sentinel and is rendered whenever `fetchMore` is defined (i.e. while more rows exist). As a side effect this also loads more rows when the first page does not fill the viewport, which the previous scroll-offset logic could not do.

`useInfiniteScroll` gains an optional `threshold` (default `0.5`, unchanged for existing callers); `ObjectTable` passes `0` because a full-width sentinel row in a horizontally scrollable table is only ever partially exposed and would otherwise never reach a non-zero visibility ratio.
