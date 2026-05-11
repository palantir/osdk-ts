---
"@osdk/react-components": patch
---

Fix `NotFoundError: removeChild` crashes when zooming or switching documents in `PdfViewer`. Annotation overlays are now rendered as siblings of pdfjs content (using measured page coordinates) instead of portaled into pdfjs-owned DOM. `AnnotationPortalTarget` now exposes `left`/`top`/`width`/`height`/`transform` in place of `container`.
