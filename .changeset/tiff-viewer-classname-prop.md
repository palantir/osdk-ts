---
"@osdk/react-components": minor
---

`BaseTiffViewer` accepts `className`, like every other base viewer. It renders a root element in every state to carry it, where before it rendered nothing until decoding finished.

`TiffViewerProps` is unchanged for consumers: it now inherits `className` from `BaseTiffViewerProps` instead of declaring its own. `DocumentViewer`'s `tiffViewerProps` omits `className`, matching `pdfViewerProps`, `imageViewerProps` and `videoViewerProps`.
