---
"@osdk/react-components": minor
---

Remove DocxViewer. `.docx` files now fall through to the DocumentViewer unsupported-file state. The `docx-preview` dependency, `DocxViewer`/`BaseDocxViewer` exports, `./experimental/docx-viewer` entrypoint, `ViewerType.Docx`, and `docxViewerProps` on `DocumentViewer` are removed. Removed primarily because rendering untrusted `.docx` directly in the browser via `docx-preview` parses arbitrary attacker-controlled Office Open XML in the host page; we'd rather route DOCX through a server-side decode pipeline (e.g. MIO transform → PDF) than ship a client-side parser as an attack surface. Consumers should pre-convert DOCX to PDF and use `PdfViewer`, or supply their own viewer.
