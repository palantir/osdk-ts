---
"@osdk/react-components": patch
---

Add ObjectView API contract (`ObjectViewApi.ts`). Defines `ObjectViewProps` with three input modes (`{objectType, primaryKey}` / `{objectSet}` / `{object}`), header rendering control, render overrides, and load lifecycle listeners. No implementation or public exports yet — implementation lands in a follow-up PR.
