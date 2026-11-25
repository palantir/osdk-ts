---
"@osdk/react-components": patch
---

Fix two `ObjectTable` column header menu bugs.

Clicking `Sort ascending` on a column already sorted ascending (or `Sort descending` on one already sorted descending) re-applied the same sort instead of removing it; it now returns that column to unsorted. Only that column's sort is removed, so the remaining columns of a multi-column sort keep their direction and relative order.

The header menu's active-item highlight never rendered, because its style rule used a descendant selector for a class applied to the same element as the base class. The applied sort direction and `Unpin Column` (while a column is pinned) are now highlighted as intended.
