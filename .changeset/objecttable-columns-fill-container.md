---
"@osdk/react-components": minor
---

Stretch `ObjectTable` columns to fill the parent container instead of leaving dead space to the right of the last column. Columns given an explicit `width`, pinned columns, and columns the user has resized keep their exact width; the rest share the leftover width in proportion to their current width, up to any `maxWidth`. Resizing a column only takes width from, or gives width to, the columns to its right, so the divider being dragged follows the pointer; the rightmost column takes up any width released by the drag. `LoadingCell` accepts a new optional `flexGrow` prop so custom loading rows can stay aligned with the stretched header.
