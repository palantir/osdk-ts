---
"@osdk/client": minor
"@osdk/react-devtools": patch
---

Type the action return value from `ObservableClient.applyAction`: a single action that returns a value resolves to `ObservableClient.ApplyActionResult<Q>` (edits plus `returnValue`), and batches resolve to `ActionEditResponse`.
