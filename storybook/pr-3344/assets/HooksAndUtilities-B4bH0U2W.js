import{j as e}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as t}from"./index-FlUseBxK.js";import{M as r}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...t(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Hooks and Utilities"}),`
`,e.jsx(n.h1,{id:"hooks-and-utilities",children:"Hooks and Utilities"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@osdk/react-components"}),` exports composable hooks alongside its components,
enabling you to build fully custom UIs while reusing the data-fetching and
state-management logic.`]}),`
`,e.jsx(n.h2,{id:"pdfviewer-hooks",children:"PdfViewer Hooks"}),`
`,e.jsxs(n.p,{children:["Import from ",e.jsx(n.code,{children:"@osdk/react-components/experimental/pdf-viewer"}),"."]}),`
`,e.jsx(n.h3,{id:"composition-hooks",children:"Composition hooks"}),`
`,e.jsxs(n.p,{children:[`| Hook | Description |
|------|-------------|
| `,e.jsx(n.code,{children:"usePdfViewerState"}),` | All-in-one state hook — combines core viewer, search, highlight, outline, and form fields into a single return value. Use this when you want everything wired together. |
| `,e.jsx(n.code,{children:"usePdfViewerCore"})," | Core viewer state (page navigation, zoom, scroll position) without search or annotation features. |"]}),`
`,e.jsx(n.h3,{id:"primitive-hooks",children:"Primitive hooks"}),`
`,e.jsxs(n.p,{children:[`| Hook | Description |
|------|-------------|
| `,e.jsx(n.code,{children:"usePdfViewer"}),` | Low-level viewer instance management. |
| `,e.jsx(n.code,{children:"usePdfDocument"})," | Loads a PDF document from a URL or ",e.jsx(n.code,{children:"ArrayBuffer"}),`. |
| `,e.jsx(n.code,{children:"usePdfViewerSearch"}),` | Full-text search within the PDF with match highlighting. |
| `,e.jsx(n.code,{children:"usePdfHighlightMode"}),` | Manages text highlight/annotation mode. |
| `,e.jsx(n.code,{children:"usePdfOutline"}),` | Extracts the document outline (bookmarks/table of contents). |
| `,e.jsx(n.code,{children:"usePdfFormFields"}),` | Reads and manages interactive form fields in the PDF. |
| `,e.jsx(n.code,{children:"usePdfAnnotationPortals"}),` | Creates React portals for rendering custom annotation overlays on PDF pages. |
| `,e.jsx(n.code,{children:"usePdfAnnotationsByPage"}),` | Groups annotations by page number for efficient per-page rendering. |
| `,e.jsx(n.code,{children:"usePdfViewerSync"})," | Synchronizes viewer state across multiple viewer instances. |"]}),`
`,e.jsx(n.h3,{id:"context",children:"Context"}),`
`,e.jsxs(n.p,{children:[`| Export | Description |
|--------|-------------|
| `,e.jsx(n.code,{children:"PdfViewerProvider"}),` | React context provider for sharing PDF viewer state across a component tree. |
| `,e.jsx(n.code,{children:"usePdfViewerContext"})," | Access the full context value from within a ",e.jsx(n.code,{children:"PdfViewerProvider"}),`. |
| `,e.jsx(n.code,{children:"usePdfViewerInstance"})," | Access just the viewer instance from within a ",e.jsx(n.code,{children:"PdfViewerProvider"}),". |"]}),`
`,e.jsx(n.h2,{id:"filterlist-hooks",children:"FilterList Hooks"}),`
`,e.jsxs(n.p,{children:["Import from ",e.jsx(n.code,{children:"@osdk/react-components/experimental/filter-list"}),"."]}),`
`,e.jsxs(n.p,{children:[`| Hook | Description |
|------|-------------|
| `,e.jsx(n.code,{children:"useFilterListState"})," | Manages the complete filter state for a ",e.jsx(n.code,{children:"FilterList"})," — tracks active filters, produces ",e.jsx(n.code,{children:"WhereClause"})," objects, and provides per-filter cross-filter context. Use this to build custom filter layouts (e.g. horizontal toolbar) while reusing all the filter logic. |"]}),`
`,e.jsx(n.h3,{id:"helpers",children:"Helpers"}),`
`,e.jsxs(n.p,{children:[`| Utility | Description |
|---------|-------------|
| `,e.jsx(n.code,{children:"getFilterKey"}),` | Returns the unique key for a filter definition. |
| `,e.jsx(n.code,{children:"getFilterLabel"}),` | Returns the display label for a filter definition. |
| `,e.jsx(n.code,{children:"summarizeFilterValue"}),` | Produces a human-readable summary of the active filter state. |
| `,e.jsx(n.code,{children:"filterHasActiveState"})," | Returns ",e.jsx(n.code,{children:"true"})," if a filter has a non-empty active state. |"]}),`
`,e.jsx(n.h2,{id:"composable-building-blocks",children:"Composable Building Blocks"}),`
`,e.jsx(n.p,{children:"Some components export sub-components that can be composed into custom layouts:"}),`
`,e.jsx(n.h3,{id:"filterlist",children:"FilterList"}),`
`,e.jsxs(n.p,{children:[`| Export | Description |
|--------|-------------|
| `,e.jsx(n.code,{children:"FilterPopover"}),` | A single filter rendered as a popover trigger + panel. |
| `,e.jsx(n.code,{children:"FilterInput"})," | The inner filter input (listogram, select, date range, etc.). |"]}),`
`,e.jsx(n.h3,{id:"pdfviewer",children:"PdfViewer"}),`
`,e.jsxs(n.p,{children:[`| Export | Description |
|--------|-------------|
| `,e.jsx(n.code,{children:"PdfViewerToolbar"}),` | Toolbar with page navigation, zoom, search, and sidebar toggles. |
| `,e.jsx(n.code,{children:"PdfViewerContent"}),` | The main PDF rendering area with page virtualization. |
| `,e.jsx(n.code,{children:"PdfViewerAnnotationLayer"}),` | Overlay layer for rendering annotations on PDF pages. |
| `,e.jsx(n.code,{children:"PdfViewerOutlineSidebar"}),` | Document outline sidebar (bookmarks). |
| `,e.jsx(n.code,{children:"PdfViewerThumbnailSidebar"}),` | Page thumbnail sidebar. |
| `,e.jsx(n.code,{children:"PdfViewerSearchBar"})," | Inline search bar with match navigation. |"]}),`
`,e.jsx(n.h3,{id:"objecttable",children:"ObjectTable"}),`
`,e.jsxs(n.p,{children:[`| Export | Description |
|--------|-------------|
| `,e.jsx(n.code,{children:"BaseTable"}),` | Headless table component — no OSDK dependency. |
| `,e.jsx(n.code,{children:"ColumnConfigDialog"}),` | Dialog for showing/hiding and reordering columns. |
| `,e.jsx(n.code,{children:"MultiColumnSortDialog"}),` | Dialog for configuring multi-column sort rules. |
| `,e.jsx(n.code,{children:"LoadingCell"})," / ",e.jsx(n.code,{children:"LoadingCellContent"})," | Skeleton loading cells for table placeholders. |"]})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{p as default};
