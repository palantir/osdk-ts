---
"@osdk/react-components": minor
---

ObjectTable `EditFieldConfig.getFieldComponentProps` now receives a second `edits` argument with the row's pending cell edits (keyed by columnId), so editor configuration can react to other in-progress edits within the same row.
