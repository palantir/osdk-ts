---
"@osdk/react-components": minor
---

Expose headless hooks for the Excel, Email, and TIFF document-viewer renderers (`useExcelViewerState`, `useEmailViewerState`, `useTiffRenderer`) so consumers can build their own UI on the same logic, matching the existing PdfViewer pattern. Each hook takes the raw media bytes and parses/decodes them internally, and `BaseExcelViewer` / `BaseEmailViewer` now accept `content` (raw bytes) instead of pre-parsed data.
