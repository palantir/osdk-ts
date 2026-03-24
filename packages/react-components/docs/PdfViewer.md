# PdfViewer

A React component for rendering PDF documents with text selection, custom annotations, and in-document search.

## Usage

```tsx
import { PdfViewer } from "@osdk/react-components";

// Basic usage with a URL
<PdfViewer src="https://example.com/document.pdf" />

// With ArrayBuffer (e.g. from a file input or fetch)
<PdfViewer src={arrayBuffer} />

// With annotations and interaction
<PdfViewer
  src="https://example.com/document.pdf"
  initialPage={3}
  initialScale={1.5}
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
    4: [
      {
        id: "note-1",
        type: "comment",
        page: 4,
        rect: { x: 400, y: 300, width: 16, height: 16 },
        label: "Review this section",
      },
    ],
  }}
  onAnnotationClick={(annotation) => console.log("Clicked:", annotation.id)}
/>
```

## Props

| Prop                | Type                                  | Default | Description                              |
| ------------------- | ------------------------------------- | ------- | ---------------------------------------- |
| `src`               | `string \| ArrayBuffer`               | —       | PDF source URL or binary data (required) |
| `annotations`       | `Record<number, PdfAnnotation[]>`     | `{}`    | Annotations keyed by page number         |
| `onAnnotationClick` | `(annotation: PdfAnnotation) => void` | —       | Callback when an annotation is clicked   |
| `initialPage`       | `number`                              | `1`     | Page to display on first render          |
| `initialScale`      | `number`                              | `1.0`   | Initial zoom level                       |
| `downloadEnabled`   | `boolean`                             | `false` | Whether the download button is shown in the toolbar |
| `className`         | `string`                              | —       | CSS class applied to the root element    |

## Features

### Text selection and copy

The component renders an invisible text layer on top of each PDF page using the pdf.js `TextLayer` API. This enables native browser text selection — users can click and drag to select text, then copy it with Ctrl+C / Cmd+C. The text layer is positioned to match the rendered canvas exactly.

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

Pressing Ctrl+F (or Cmd+F on macOS) opens a search bar that finds text across all rendered pages. Matches are highlighted in the text layer, and the current match is visually distinguished. Navigation between matches:

- **Enter** — next match
- **Shift+Enter** — previous match
- **Escape** — close search bar

The search bar also shows a match counter (e.g. "3 of 12"). The toolbar includes a search button as an alternative to the keyboard shortcut.

### Virtualized scrolling

Pages are virtualized with `@tanstack/react-virtual` so only visible pages (plus a small buffer) are mounted in the DOM. This keeps memory usage and render cost low for large documents.

### Toolbar

The built-in toolbar provides:

- **Page navigation** — previous/next buttons and a page number input
- **Zoom controls** — zoom in/out in 25% steps (range: 25%–500%)
- **Rotate controls** — rotate all pages left (counter-clockwise) or right (clockwise) in 90° increments
- **Search button** — opens the search bar
- **Download button** — downloads the PDF (hidden by default, enable with `downloadEnabled`)

### High-DPI rendering

The canvas renderer accounts for `window.devicePixelRatio` to produce sharp text on Retina and other high-DPI displays.

## Component architecture

```
PdfViewer
├── PdfViewerToolbar        — page nav, zoom, search button
├── PdfViewerSearchBar      — search input, match count, prev/next
└── (virtualized scroll container)
    └── PdfViewerPage       — one per visible page
        ├── <canvas>        — rendered PDF page
        ├── <div>           — text layer (invisible, selectable spans)
        └── PdfViewerAnnotationLayer
            └── AnnotationItem  — one per annotation on this page
```

### Hooks

| Hook             | Purpose                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| `usePdfDocument` | Loads a `PDFDocumentProxy` from a URL or `ArrayBuffer` using pdf.js. Manages the web worker lifecycle. |
| `usePdfSearch`   | Manages search state, text layer registration, match highlighting, and navigation between matches.     |

## Theming

All colors and sizes are driven by CSS custom properties defined in `@osdk/react-components-styles`. Override them to match your application theme:

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
