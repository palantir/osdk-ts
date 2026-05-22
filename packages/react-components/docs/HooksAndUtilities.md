# Hooks and Utilities

`@osdk/react-components` exports composable hooks alongside its components,
enabling you to build fully custom UIs while reusing the data-fetching and
state-management logic.

Hooks and utilities are documented alongside the component they belong to.
See the individual component guides for full API details:

| Component    | Import Path                                       | Guide                              |
| ------------ | ------------------------------------------------- | ---------------------------------- |
| `PdfViewer`  | `@osdk/react-components/experimental/pdf-viewer`  | [PdfViewer docs](./PdfViewer.md)   |
| `FilterList` | `@osdk/react-components/experimental/filter-list` | [FilterList docs](./FilterList.md) |

## Composable Building Blocks

Some components export sub-components that can be composed into custom layouts:

### FilterList

| Export          | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `FilterPopover` | A single filter rendered as a popover trigger + panel.        |
| `FilterInput`   | The inner filter input (listogram, select, date range, etc.). |

### PdfViewer

| Export                      | Description                                                      |
| --------------------------- | ---------------------------------------------------------------- |
| `PdfViewerToolbar`          | Toolbar with page navigation, zoom, search, and sidebar toggles. |
| `PdfViewerContent`          | The main PDF rendering area with page virtualization.            |
| `PdfViewerAnnotationLayer`  | Overlay layer for rendering annotations on PDF pages.            |
| `PdfViewerOutlineSidebar`   | Document outline sidebar (bookmarks).                            |
| `PdfViewerThumbnailSidebar` | Page thumbnail sidebar.                                          |
| `PdfViewerSearchBar`        | Inline search bar with match navigation.                         |

### ObjectTable

| Export                               | Description                                       |
| ------------------------------------ | ------------------------------------------------- |
| `BaseTable`                          | Headless table component — no OSDK dependency.    |
| `ColumnConfigDialog`                 | Dialog for showing/hiding and reordering columns. |
| `MultiColumnSortDialog`              | Dialog for configuring multi-column sort rules.   |
| `LoadingCell` / `LoadingCellContent` | Skeleton loading cells for table placeholders.    |
