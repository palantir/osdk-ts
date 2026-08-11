---
"@osdk/react-components": minor
---

Normalize viewer component naming so every viewer follows the `<X>Viewer` / `Base<X>Viewer` pattern. Breaking: the `experimental/markdown-renderer` and `experimental/tiff-renderer` subpaths are now `experimental/markdown-viewer` and `experimental/tiff-viewer`, `MarkdownViewerMedia`/`TiffViewerMedia` are now `MarkdownViewer`/`TiffViewer`, `MarkdownRenderer`/`TiffRenderer` are now `BaseMarkdownViewer`/`BaseTiffViewer`, `MarkdownRendererProps`/`TiffRendererProps` are now `BaseMarkdownViewerProps`/`BaseTiffViewerProps`, `PdfViewerProps` is now `BasePdfViewerProps`, `DocumentViewer`'s `tiffRendererProps` and `markdownRendererProps` props are now `tiffViewerProps` and `markdownViewerProps`, the `--osdk-markdown-renderer-*` CSS tokens are now `--osdk-markdown-viewer-*`, and the component names reported to metrics change from `TiffViewerMedia`/`MarkdownViewerMedia` to `TiffViewer`/`MarkdownViewer`. No deprecated aliases are kept.
