---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/generator": minor
"@osdk/generator-converters": minor
---

Return and type the value produced by a function-backed action: `applyAction` resolves to `{ returnValue }` (merged with edits when `$returnEdits` is set), and generated actions get a `ReturnType` from the action's `returnType`. Generated list and set query results now allow `undefined` items and type sets as arrays, and maps nested in struct query results are converted to records
