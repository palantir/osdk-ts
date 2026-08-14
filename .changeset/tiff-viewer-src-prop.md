---
"@osdk/react-components": minor
---

`BaseTiffViewer` takes its TIFF bytes as `src`, matching the convention shared by the other viewers. `content` is reserved for already-decoded payloads such as text or a parsed object; TIFF bytes are a binary source, so they belong under `src` alongside `BasePdfViewer`.

Nothing is removed. `content` is still accepted, is `@deprecated`, and `src` wins when both are set.

```
BaseTiffViewer  content -> src
```
