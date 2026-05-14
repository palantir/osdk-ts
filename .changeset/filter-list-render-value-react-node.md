---
"@osdk/react-components": minor
---

Widen `renderValue` return type on FilterList property and static-values filter definitions from `string` to `ReactNode` so callers can render custom React components (e.g. avatars, anchors) for filter values. When `renderValue` returns a non-string `ReactNode`, search matching falls back to the raw value.
