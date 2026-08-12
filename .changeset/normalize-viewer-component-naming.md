---
"@osdk/react-components": minor
---

Normalize viewer component naming so every viewer follows the `<X>Viewer` / `Base<X>Viewer` pattern, and drop the `Media` suffix from the media-wrapper prop types.

The `experimental/markdown-renderer` and `experimental/tiff-renderer` import paths are unchanged. They get renamed later, when the `experimental/` prefix is dropped, so consumers change import paths once rather than twice.

The renamed components keep `@deprecated` aliases, so no import of a component needs to change yet. The prop-type renames do not: dropping the `Media` suffix is a clean break across all eight viewers. It cannot be aliased for pdf, where `PdfViewerProps` was reused for a different type, and aliasing seven of eight would be more confusing than none. Deprecated aliases are cleared in one pass once a migration script is available.

Renamed components, all with deprecated aliases:

```
MarkdownRenderer     -> BaseMarkdownViewer
MarkdownViewerMedia  -> MarkdownViewer
TiffRenderer         -> BaseTiffViewer
TiffViewerMedia      -> TiffViewer
```

Renamed prop types, none of which keep an alias:

```
MarkdownRendererProps        -> BaseMarkdownViewerProps
TiffRendererProps            -> BaseTiffViewerProps
PdfViewerProps               -> BasePdfViewerProps
EmailViewerMediaProps        -> EmailViewerProps
ImageViewerMediaProps        -> ImageViewerProps
MarkdownViewerMediaProps     -> MarkdownViewerProps
PdfViewerMediaProps          -> PdfViewerProps
SpreadsheetViewerMediaProps  -> SpreadsheetViewerProps
TiffViewerMediaProps         -> TiffViewerProps
VideoViewerMediaProps        -> VideoViewerProps
XmlViewerMediaProps          -> XmlViewerProps
```

Note that `PdfViewerProps` appears on both sides: it used to describe `BasePdfViewer` (which takes `src`) and now describes `PdfViewer` (which takes `media`). Pdf is the only viewer affected, because it was the only one whose base props were not already `Base`-prefixed. Code that used `PdfViewerProps` for the base component fails to compile rather than silently changing behavior, since `src` and `media` are not interchangeable, and should move to `BasePdfViewerProps`.

Renamed props:

```
DocumentViewer's tiffRendererProps  -> tiffViewerProps
usePdfViewerInstance's highlightEnabled -> enableHighlight
```

Removed props, each of which resolved to `{}` and could never carry a value, because those Base props consist only of the primary input plus `className`, both of which `DocumentViewer` omits when forwarding:

```
DocumentViewer's markdownViewerProps     -> delete
DocumentViewer's spreadsheetViewerProps  -> delete
DocumentViewer's emailViewerProps        -> delete
DocumentViewer's xmlViewerProps          -> delete
```

Renamed CSS custom properties, which have no fallback and need updating in any consumer theme:

```
--osdk-markdown-renderer-*  -> --osdk-markdown-viewer-*
```

Component names reported to metrics also change from `TiffViewerMedia` and `MarkdownViewerMedia` to `TiffViewer` and `MarkdownViewer`, so dashboards keyed on the old names need updating.

`PdfViewerInstanceOptions` is now derived from `BasePdfViewerProps` instead of restating it, so the two cannot drift apart. This adds `enableHighlight` (the deprecated `highlightEnabled` still works) and drops `downloadFileName`, which was never implemented by the hooks tier.
