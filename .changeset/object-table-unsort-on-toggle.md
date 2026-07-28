---
"@osdk/react-components": patch
---

Fix `ObjectTable` column header menu re-applying an existing sort instead of removing it: clicking `Sort ascending` on a column already sorted ascending (or `Sort descending` on one already sorted descending) now returns that column to unsorted. Only that column's sort is removed, so the remaining columns of a multi-column sort keep their direction and relative order.
