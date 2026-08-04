---
"@osdk/react-components": minor
---

Rename `ExcelViewer` to `SpreadsheetViewer`. Breaking: the `experimental/excel-viewer` subpath is now `experimental/spreadsheet-viewer`, `ExcelViewer`/`BaseExcelViewer` and their prop types are renamed, `DocumentViewer`'s `excelViewerProps` is now `spreadsheetViewerProps`, `ViewerType.Excel` is now `ViewerType.Spreadsheet` and its value changed from `"excel"` to `"spreadsheet"`, and the `--osdk-excel-viewer-*` CSS tokens are now `--osdk-spreadsheet-viewer-*`. No deprecated aliases are kept.
