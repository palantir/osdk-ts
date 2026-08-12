---
"@osdk/react-components": minor
---

Add `getCellValue` and `cellValueType` to ObjectTable column definitions, pass the cell value to `renderCell`, and type `getCellValue`'s return against the declared `cellValueType`. `cellValueType` is now required whenever `getCellValue` is provided. The `RDPs` type parameter of the object-table types now defaults to `{}`, matching the rest of the SDK.
