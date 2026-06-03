---
"@osdk/react-components": minor
---

- new `focusedRowId` / `onFocusedRowIdChanged` props expose controlled focus state (typed `PrimaryKeyType<Q> | null`). When controlled, the table no longer auto-clears focus on outside clicks — callers own clearing, so the row stays highlighted while a drawer or side panel is open.
- uncontrolled behavior is unchanged: clicking focuses, clicking outside clears, and `onFocusedRowIdChanged` fires in both modes for observability.
