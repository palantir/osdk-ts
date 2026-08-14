---
"@osdk/react-components": minor
---

`BaseSpreadsheetViewer` takes its parsed workbook as `content`, matching the convention shared by the other viewers.

Nothing is removed. `spreadsheet` is still accepted, is `@deprecated`, and `content` wins when both are set.

```
BaseSpreadsheetViewer  spreadsheet -> content
```
