---
"@osdk/client": minor
"@osdk/react-devtools": patch
---

`applyAction` returns the value produced by a function-backed action as `{ returnValue }` (merged with edits when `$returnEdits` is set), and `ObservableClient.applyAction` types the `returnValue` of a single action.
