# Hooks and Utilities

`@osdk/react-components` exports composable hooks alongside its components,
enabling you to build fully custom UIs while reusing the data-fetching and
state-management logic.

## PdfViewer Hooks

Import from `@osdk/react-components/experimental/pdf-viewer`.

### Composition hooks

| Hook | Description |
|------|-------------|
| `usePdfViewerState` | All-in-one state hook — combines core viewer, search, highlight, outline, and form fields into a single return value. Use this when you want everything wired together. |
| `usePdfViewerCore` | Core viewer state (page navigation, zoom, scroll position) without search or annotation features. |

### Primitive hooks

| Hook | Description |
|------|-------------|
| `usePdfViewer` | Low-level viewer instance management. |
| `usePdfDocument` | Loads a PDF document from a URL or `ArrayBuffer`. |
| `usePdfViewerSearch` | Full-text search within the PDF with match highlighting. |
| `usePdfHighlightMode` | Manages text highlight/annotation mode. |
| `usePdfOutline` | Extracts the document outline (bookmarks/table of contents). |
| `usePdfFormFields` | Reads and manages interactive form fields in the PDF. |
| `usePdfAnnotationPortals` | Creates React portals for rendering custom annotation overlays on PDF pages. |
| `usePdfAnnotationsByPage` | Groups annotations by page number for efficient per-page rendering. |
| `usePdfViewerSync` | Synchronizes viewer state across multiple viewer instances. |

### Context

| Export | Description |
|--------|-------------|
| `PdfViewerProvider` | React context provider for sharing PDF viewer state across a component tree. |
| `usePdfViewerContext` | Access the full context value from within a `PdfViewerProvider`. |
| `usePdfViewerInstance` | Access just the viewer instance from within a `PdfViewerProvider`. |

## FilterList Hooks

Import from `@osdk/react-components/experimental/filter-list`.

| Hook | Description |
|------|-------------|
| `useFilterListState` | Manages the complete filter state for a `FilterList` — tracks active filters, produces `WhereClause` objects, and provides per-filter cross-filter context. Use this to build custom filter layouts (e.g. horizontal toolbar) while reusing all the filter logic. |

### Helpers

| Utility | Description |
|---------|-------------|
| `getFilterKey` | Returns the unique key for a filter definition. |
| `getFilterLabel` | Returns the display label for a filter definition. |
| `summarizeFilterValue` | Produces a human-readable summary of the active filter state. |
| `filterHasActiveState` | Returns `true` if a filter has a non-empty active state. |

## Composable Building Blocks

Some components export sub-components that can be composed into custom layouts:

### FilterList

| Export | Description |
|--------|-------------|
| `FilterPopover` | A single filter rendered as a popover trigger + panel. |
| `FilterInput` | The inner filter input (listogram, select, date range, etc.). |

### PdfViewer

| Export | Description |
|--------|-------------|
| `PdfViewerToolbar` | Toolbar with page navigation, zoom, search, and sidebar toggles. |
| `PdfViewerContent` | The main PDF rendering area with page virtualization. |
| `PdfViewerAnnotationLayer` | Overlay layer for rendering annotations on PDF pages. |
| `PdfViewerOutlineSidebar` | Document outline sidebar (bookmarks). |
| `PdfViewerThumbnailSidebar` | Page thumbnail sidebar. |
| `PdfViewerSearchBar` | Inline search bar with match navigation. |

### ObjectTable

| Export | Description |
|--------|-------------|
| `BaseTable` | Headless table component — no OSDK dependency. |
| `ColumnConfigDialog` | Dialog for showing/hiding and reordering columns. |
| `MultiColumnSortDialog` | Dialog for configuring multi-column sort rules. |
| `LoadingCell` / `LoadingCellContent` | Skeleton loading cells for table placeholders. |
