---
"@osdk/react-components": minor
---

Add `orientation="horizontal"` to FilterList. In horizontal mode, filters render as a row of label-left inputs. Compact filters (`CONTAINS_TEXT`, `SINGLE_DATE`, `TOGGLE`) render inline; tall filters collapse into a button trigger that opens the existing input UI in a popover. New `HorizontalFilterTrigger` component, new `summarizeFilterValue` helper for the trigger label, and dnd-kit switches to `horizontalListSortingStrategy` for drag-reorder. The popover content only mounts when opened so aggregation queries don't fire until the user interacts with the filter.
