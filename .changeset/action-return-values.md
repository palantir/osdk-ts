---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/generator": minor
"@osdk/generator-converters": minor
"@osdk/react-devtools": patch
---

Return and type the value produced by a function-backed action: `applyAction` resolves to `{ returnValue }` (merged with edits when `$returnEdits` is set), generated actions get a `ReturnType` built from the new `ActionDataTypeDefinition` and `ActionResult` types, and `ObservableClient.applyAction` types the `returnValue` of a single action.
