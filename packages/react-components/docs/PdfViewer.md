# PdfViewer

A React component for rendering PDF documents with text selection, custom annotations, sidebar navigation, and in-document search.

## Import

```tsx
import { BasePdfViewer, PdfViewer } from "@osdk/react-components/experimental";
```

- **`PdfViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, handles fetching the PDF contents, and renders the viewer.
- **`BasePdfViewer`** — Lower-level component that accepts a URL string or `ArrayBuffer` directly. Use this when you already have the PDF source.

## Usage

### With OSDK Media

```tsx
import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={employee.employeeDocuments} />;
```

### With a URL or ArrayBuffer

```tsx
import { BasePdfViewer } from "@osdk/react-components/experimental";

// From a URL
<BasePdfViewer src="https://example.com/document.pdf" />

// From an ArrayBuffer (e.g. file input or fetch)
<BasePdfViewer src={arrayBuffer} />
```

### With annotations and sidebar

```tsx
<PdfViewer
  media={myMedia}
  initialPage={3}
  initialScale={1.5}
  initialSidebarOpen
  sidebarMode="outline"
  enableDownload
  annotations={{
    1: [
      {
        id: "finding-1",
        type: "highlight",
        page: 1,
        rect: { x: 72, y: 500, width: 200, height: 16 },
        label: "Key finding",
        color: "rgba(255, 200, 0, 0.4)",
      },
    ],
  }}
  onAnnotationClick={(annotation) => console.log("Clicked:", annotation.id)}
/>;
```

## Props

### PdfViewerMediaProps

| Prop    | Type    | Required | Description                                  |
| ------- | ------- | -------- | -------------------------------------------- |
| `media` | `Media` | Yes      | OSDK Media object to fetch PDF contents from |

Plus all props from `PdfViewerProps` except `src`.

### PdfViewerProps (BasePdfViewer)

| Prop                 | Type                                           | Default        | Description                                                     |
| -------------------- | ---------------------------------------------- | -------------- | --------------------------------------------------------------- |
| `src`                | `string \| ArrayBuffer`                        | —              | PDF source URL or binary data (required)                        |
| `annotations`        | `Record<number, PdfAnnotation[]>`              | `{}`           | Annotations keyed by page number (1-indexed)                    |
| `onAnnotationClick`  | `(annotation: PdfAnnotation) => void`          | —              | Callback when an annotation is clicked                          |
| `initialPage`        | `number`                                       | `1`            | Page to display on first render                                 |
| `initialScale`       | `number`                                       | `1.0`          | Initial zoom level                                              |
| `initialSidebarOpen` | `boolean`                                      | `false`        | Whether the sidebar is initially open                           |
| `sidebarMode`        | `SidebarMode`                                  | `"thumbnails"` | Which sidebar panel to show: `"thumbnails"` or `"outline"`      |
| `outlineIcons`       | `Partial<Record<number, React.ComponentType>>` | —              | Custom icon components for each outline depth level (0-indexed) |
| `enableDownload`     | `boolean`                                      | `false`        | Whether the download button is shown in the toolbar             |
| `className`          | `string`                                       | —              | CSS class applied to the root element                           |

## Features

### Text selection and copy

The component renders an invisible text layer on top of each PDF page using the pdf.js `TextLayer` API. This enables native browser text selection — users can click and drag to select text, then copy it with Ctrl+C / Cmd+C.

### Sidebar

The sidebar supports two modes controlled by the `sidebarMode` prop:

- **Thumbnails** (`"thumbnails"`) — Renders page thumbnails. Click a thumbnail to jump to that page.
- **Outline** (`"outline"`) — Shows the document's table of contents. If the PDF has embedded bookmarks, those are displayed with their original nesting and bold/italic styling. If no bookmarks exist, headings are automatically extracted from the text content based on font size.

### Annotations

Annotations are positioned using PDF coordinate space (origin at bottom-left of the page). The component transforms these to CSS positioning automatically. Four annotation types are supported:

| Type        | Visual                             |
| ----------- | ---------------------------------- |
| `highlight` | Semi-transparent colored rectangle |
| `underline` | Colored bottom border              |
| `comment`   | Small circular marker              |
| `pin`       | Rotated teardrop marker            |

Each annotation accepts an optional `color` CSS value to override the default theme color, and a `label` string shown as a tooltip on hover. Annotations are keyboard-accessible (focusable and activatable with Enter/Space).

### Search (Ctrl+F / Cmd+F)

Pressing Ctrl+F (or Cmd+F on macOS) opens a search bar that finds text across all pages. Matches are highlighted in the text layer, and the current match is visually distinguished. Navigation between matches:

- **Enter** — next match
- **Shift+Enter** — previous match
- **Escape** — close search bar

The search bar shows a match counter (e.g. "3 of 12"). The toolbar includes a search button as an alternative to the keyboard shortcut.

### Toolbar

The built-in toolbar provides:

- **Page navigation** — previous/next buttons and a page number input
- **Zoom controls** — zoom in/out in 25% steps (range: 25%–500%)
- **Rotate controls** — rotate all pages left (counter-clockwise) or right (clockwise) in 90° increments
- **Sidebar toggle** — open/close the sidebar panel
- **Search button** — opens the search bar
- **Download button** — downloads the PDF (hidden by default, enable with `enableDownload`)

### Lazy page rendering

Pages are rendered lazily by the pdf.js `PDFViewer` — only pages in or near the viewport are mounted. This keeps memory usage and render cost low for large documents.

### High-DPI rendering

The canvas renderer accounts for `window.devicePixelRatio` to produce sharp text on Retina and other high-DPI displays.

## Architecture: three tiers

The PDF viewer is designed as a three-tier API so you can choose the right level of abstraction:

1. **Components** (`PdfViewer` / `BasePdfViewer`) — Drop-in viewers with full UI out of the box.
2. **Building block components** — Assemble a custom layout using `PdfViewerContent`, `PdfViewerToolbar`, etc.
3. **Hooks** — Build entirely custom components. The hooks do all the heavy lifting.

```
Tier 1: PdfViewer / BasePdfViewer          ← full viewer, zero assembly
Tier 2: Building block components               ← custom layout, standard parts
Tier 3: usePdfViewerState / usePdfViewerCore    ← custom everything
         └── Primitive hooks                    ← maximum control
```

## Building blocks

All building blocks are exported from `@osdk/react-components/experimental` for composing custom PDF viewer layouts. Use `PdfViewerContent` as the foundation and add whichever chrome you need.

| Component                  | Description                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| `PdfViewerContent`         | Core PDF renderer (scroll area + annotations). No toolbar/sidebar. |
| `PdfViewerToolbar`         | Page navigation, zoom, rotation, search, and download controls     |
| `PdfViewerSearchBar`       | Search input with match count and prev/next navigation             |
| `PdfViewerSidebar`         | Thumbnail sidebar showing page previews                            |
| `PdfViewerOutlineSidebar`  | Document outline sidebar (bookmarks or extracted headings)         |
| `PdfViewerAnnotationLayer` | Annotation overlay for a single PDF page                           |

### Example: content-only viewer

```tsx
import { PdfViewerContent } from "@osdk/react-components/experimental";

<PdfViewerContent
  src="https://example.com/document.pdf"
  initialScale={1.5}
  onPageChange={(page) => console.log("Page:", page)}
  onScaleChange={(scale) => console.log("Scale:", scale)}
/>;
```

## Hooks

The hooks are the backbone of the PDF viewer. They handle all state management, pdfjs initialization, event synchronization, and feature logic — so you can build custom components without re-implementing any of it.

### Composition hooks

These compose the primitive hooks and manage all UI state for you.

| Hook                | Description                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `usePdfViewerState` | Full-featured hook. Includes everything from `usePdfViewerCore` plus zoom helpers, rotation, sidebar, search, outline, download, and keyboard shortcuts. |
| `usePdfViewerCore`  | Minimal hook to render and navigate a PDF. Handles document loading, pdfjs viewer init, scale/page sync, and annotation portals.                         |

### Primitive hooks

For maximum control, use the primitive hooks directly.

| Hook                      | Description                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `usePdfDocument`          | Loads a `PDFDocumentProxy` from a URL or `ArrayBuffer` using pdf.js. Manages the web worker lifecycle.                |
| `usePdfViewer`            | Initializes the pdfjs `PDFViewer`, `EventBus`, `PDFLinkService`, and `PDFFindController`.                             |
| `usePdfViewerSync`        | Bidirectional sync between React state and the pdfjs viewer (scale + page). Returns `scrollToPage`.                   |
| `usePdfViewerSearch`      | Full-text search across the PDF. Manages query, match count, navigation, and the search open/close state.             |
| `usePdfAnnotationPortals` | Listens for page render events and provides portal targets for overlaying React annotation components on each page.   |
| `usePdfOutline`           | Extracts outline items from a PDF document. Uses embedded bookmarks when available, falls back to heading extraction. |

### Example: custom viewer with `usePdfViewerState`

```tsx
import {
  PdfViewerAnnotationLayer,
  PdfViewerSearchBar,
  PdfViewerToolbar,
  usePdfViewerState,
} from "@osdk/react-components/experimental";
import { createPortal } from "react-dom";

function MyCustomViewer({ src }: { src: string }) {
  const viewer = usePdfViewerState({ src, initialScale: 1.0 });

  if (viewer.loading) return <div>Loading...</div>;
  if (viewer.error) return <div>Error: {viewer.error.message}</div>;

  return (
    <div>
      <PdfViewerToolbar
        currentPage={viewer.currentPage}
        numPages={viewer.numPages}
        scale={viewer.scale}
        sidebarOpen={viewer.sidebarOpen}
        onPageChange={viewer.scrollToPage}
        onScaleChange={viewer.setScale}
        onSearchOpen={viewer.search.openSearch}
        onSidebarToggle={viewer.toggleSidebar}
        onRotateLeft={viewer.rotateLeft}
        onRotateRight={viewer.rotateRight}
      />
      {viewer.search.isSearchOpen && (
        <PdfViewerSearchBar
          query={viewer.search.query}
          totalMatches={viewer.search.totalMatches}
          currentMatchIndex={viewer.search.currentMatchIndex}
          onQueryChange={viewer.search.setQuery}
          onNext={viewer.search.nextMatch}
          onPrev={viewer.search.prevMatch}
          onClose={viewer.search.closeSearch}
        />
      )}
      <div ref={viewer.containerRef}>
        <div ref={viewer.viewerRef} className="pdfViewer" />
      </div>
    </div>
  );
}
```

### Example: minimal viewer with `usePdfViewerCore`

```tsx
import { usePdfViewerCore } from "@osdk/react-components/experimental";

function MinimalViewer({ src }: { src: string }) {
  const { containerRef, viewerRef, loading, error, currentPage, numPages } =
    usePdfViewerCore({ src });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <span>Page {currentPage} of {numPages}</span>
      <div ref={containerRef} style={{ height: "80vh", overflow: "auto" }}>
        <div ref={viewerRef} className="pdfViewer" />
      </div>
    </div>
  );
}
```

## Types

| Type                       | Description                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| `PdfViewerProps`           | Props for `BasePdfViewer`                                                     |
| `PdfViewerMediaProps`      | Props for `PdfViewer` (extends `PdfViewerProps`, replaces `src` with `media`) |
| `PdfViewerContentProps`    | Props for `PdfViewerContent`                                                  |
| `UsePdfViewerStateOptions` | Options for `usePdfViewerState`                                               |
| `UsePdfViewerStateResult`  | Return type of `usePdfViewerState`                                            |
| `UsePdfViewerCoreOptions`  | Options for `usePdfViewerCore`                                                |
| `UsePdfViewerCoreResult`   | Return type of `usePdfViewerCore`                                             |
| `UsePdfViewerResult`       | Return type of `usePdfViewer`                                                 |
| `UsePdfViewerSearchResult` | Return type of `usePdfViewerSearch`                                           |
| `AnnotationPortalTarget`   | Portal target info returned by `usePdfAnnotationPortals`                      |
| `PdfAnnotation`            | Annotation with `id`, `type`, `page`, `rect`, optional `label` and `color`    |
| `AnnotationType`           | `"highlight" \| "underline" \| "comment" \| "pin"`                            |
| `SidebarMode`              | `"thumbnails" \| "outline"`                                                   |
| `OutlineItem`              | Outline entry with `title`, `depth`, `pageNumber`, `bold`, `italic`           |

## Theming

All colors and sizes are driven by CSS custom properties included in `@osdk/react-components/styles.css`. Override them to match your application theme:

```css
:root {
  --osdk-pdf-viewer-toolbar-bg: #f5f5f5;
  --osdk-pdf-viewer-toolbar-border: #e0e0e0;
  --osdk-pdf-viewer-search-highlight: rgba(255, 200, 0, 0.4);
  --osdk-pdf-viewer-search-selected: rgba(255, 150, 0, 0.6);
  --osdk-pdf-viewer-annotation-highlight: rgba(255, 235, 59, 0.4);
  --osdk-pdf-viewer-annotation-underline: #1976d2;
  --osdk-pdf-viewer-annotation-comment: rgba(76, 175, 80, 0.6);
  --osdk-pdf-viewer-annotation-pin: #e53935;
}
```
