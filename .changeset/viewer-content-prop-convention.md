---
"@osdk/react-components": minor
---

Document the convention for a viewer's primary input prop. `src` names the binary source to render from, in whatever forms that renderer supports (a URL, raw bytes, or both); `content` names the already-decoded payload (text, or a parsed object). `BasePdfViewer.src` is the reference for the first, `BaseXmlViewer.content` for the second.

No API changes. `BaseTiffViewer`, `BaseEmailViewer` and `BaseSpreadsheetViewer` move onto the convention in follow-up changes, each keeping a deprecated alias for its old prop name.
