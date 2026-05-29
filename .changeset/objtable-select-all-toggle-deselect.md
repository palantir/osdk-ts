---
"@osdk/react-components": patch
---

ObjectTable: clicking the header select-all checkbox now deselects all rows whenever any rows are selected (including the indeterminate state). Previously a partial selection promoted to "select all" on click, requiring a second click to clear. 