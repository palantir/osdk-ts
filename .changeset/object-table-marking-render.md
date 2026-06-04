---
"@osdk/react-components": minor
---

Render CBAC and MANDATORY marking property columns in `ObjectTable`. Columns backed by marking properties whose `typeMetadata.markingType` is `"CBAC"` now render via the `CbacBanner`, and `"MANDATORY"` marking columns render one pill per marking on the row. Columns whose marking subtype isn't surfaced by the platform fall back to the previous default rendering.
