# GA Readiness Audit — DocumentViewer

Read-only audit against `packages/react-components/CONTRIBUTING.md` and `CLAUDE.md`.

---

## Artifact 1 — Feature inventory

Derived from `src/document-viewer/DocumentViewerApi.ts` + `DocumentViewer.tsx`.

DocumentViewer is a **format-detecting dispatcher**: it takes an OSDK `Media` object, detects the MIME type, and renders the appropriate sub-viewer (each an OSDK-layer sibling component). It has no interaction/state logic of its own.

- **Document source** — `media: Media` (only required prop; OSDK Media object).
- **MIME detection & dispatch** — auto-detects MIME from `media.getMediaReference().mimeType` and routes to one of 8 viewers via a `ViewerType` enum switch (`DocumentViewer.tsx:61-93`):
  - PDF → `PdfViewer`
  - TIFF → `TiffViewerMedia` (single-page) or `TiffDocumentViewer` (multi-page, when `enableTiffToPdf`)
  - image (png/jpeg/gif/svg+xml/webp/bmp) → `ImageViewer`
  - `video/*` → `VideoViewer`
  - markdown (text/markdown, text/x-markdown) → `MarkdownViewerMedia`
  - Excel (xlsx) → `ExcelViewer`
  - email (message/rfc822) → `EmailViewer`
  - XML (application/xml, text/xml) → `XmlViewer`
  - Unsupported → fallback message.
- **MIME override** — `mimeTypeOverride?: string` bypasses auto-detection.
- **Filename hint** — `fileName?: string` disambiguates TIFF (`.tif`/`.tiff`) when MIME is ambiguous (`application/octet-stream`).
- **Multi-page TIFF → PDF** — `enableTiffToPdf?: boolean` (default `false`): fetches TIFF bytes, counts pages via `utif`, and for multi-page converts to PDF via the experimental MIO `transformAndWait` API, falling back to the TIFF renderer on failure (`hooks/useTiffToPdf.ts`).
- **Per-viewer prop pass-through** — 8 optional prop bags (`pdfViewerProps`, `imageViewerProps`, `videoViewerProps`, `tiffRendererProps`, `markdownRendererProps`, `excelViewerProps`, `emailViewerProps`, `xmlViewerProps`) forwarded to the matching viewer.
- **Styling hook** — `className?: string` merged onto the root container.
- **Loading state** — "Converting document…" spinner while TIFF→PDF conversion runs.

---

## Artifact 2 — Outstanding tasks to GA

### A. Exports

**[REQUIRED]**
- [ ] **No base / OSDK-agnostic layer exists for DocumentViewer.** The component's only entry point takes `media: Media` (`DocumentViewerApi.ts:42`), an OSDK type — there is no `BaseDocumentViewer` that dispatches on a primitive input (e.g. `{ src | blob, mimeType, fileName }`). Every *sub*-viewer ships a base (`BasePdfViewer`, `BaseImageViewer`, `BaseVideoViewer`, `BaseEmailViewer`, `BaseExcelViewer`, `BaseXmlViewer` — confirmed exported from their `src/public/experimental/*.ts`), but the dispatcher itself does not, so a consumer who fetches media outside OSDK cannot reuse the format-detection + dispatch logic. Decide: add a base dispatcher, or explicitly document that the dispatch layer is OSDK-only by design (the sub-viewer bases cover the non-OSDK path).

_✅ No forbidden exports — `src/public/experimental/document-viewer.ts` exports only `DocumentViewer`, `DocumentViewerProps`, and `ViewerType`. No `src/base-components/` primitives leaked._

**Nice-to-have (non-blocking)**
- [ ] `useTiffToPdf` (`hooks/useTiffToPdf.ts`) is not exported. It is a reusable building block (multi-page detection + MIO transform) but tightly coupled to this component — exporting is optional.
- [ ] **[design question] Composition shape: single `DocumentViewer` dispatcher vs the family of sibling `*-viewer` exports.** Pattern today: one OSDK dispatcher plus 8 independently-exported OSDK viewers, each with its own base + tokens + docs + stories. Tension: the dispatcher duplicates each viewer's public surface as a `*ViewerProps` bag (9 pass-through props), and the two layers must be kept in sync; consumers must learn both. Candidate resolutions (do NOT pick one here): (a) keep DocumentViewer as the single public entry point and de-emphasize/hide the individual viewers; (b) treat the individual `*-viewer` components as the public surface and position DocumentViewer as a thin convenience wrapper. Flagging only.

### B. API

**[REQUIRED]**
- [ ] **Not exercised in any sandbox app.** `DocumentViewer` (and every sibling viewer) has zero usages in `packages/e2e.sandbox.peopleapp` or `e2e.sandbox.officenetwork` (grep across both `src/` trees returns nothing). CONTRIBUTING step 11 makes a live peopleapp example part of the MVP definition of done. Because it is never mounted against real Foundry `Media`, the "types resolve without casts in a consumer" guarantee is **unverified end-to-end** — add a real example wiring `media` from an ontology object and confirm no `as`/`any` is needed for `media` or the 9 pass-through prop bags.

_✅ No `@deprecated` props. ✅ No dead API — every public prop is live: all 8 `*ViewerProps` are spread into their viewer, `mimeTypeOverride`/`fileName` feed `getViewerType`, `enableTiffToPdf` drives `TiffDocumentViewer`, `className` merges onto root. No declared-but-never-invoked callbacks (component exposes no callbacks)._

**Nice-to-have (non-blocking)**
- [ ] The 9 parallel `*ViewerProps` bags are a somewhat clunky surface (one per format). Consider whether a single discriminated `viewerProps` or per-format defaults would read better. Non-blocking.

### C. Features

**[REQUIRED]**
- [ ] **Hardcoded "Unsupported file type:" message with no override prop** (`DocumentViewer.tsx:198`). Add an override (e.g. `renderUnsupported` slot or `unsupportedMessage` prop). A hardcoded default is fine, but there must be an override path.
- [ ] **Hardcoded "Converting document…" loading message with no override prop** (`TiffDocumentViewer.tsx:52`). Add an override path.

_✅ Dark mode — no hardcoded hex/rgb/rgba anywhere in `src/document-viewer/` (`.module.css` + `.tsx`); all colors resolve through `--osdk-*` tokens. ✅ No `aria-label` literals to override (none present)._

**Nice-to-have (non-blocking)**
- [ ] No TODO/FIXME/HACK found (the `$createPdf` grep hit is a false positive). No broken states observed.
- [ ] Code quality: the TIFF→PDF path swallows conversion failures with `console.warn` and silently falls back (`useTiffToPdf.ts:123-137`) — `error` is captured in the hook result but never surfaced to the user. Acceptable as graceful degradation; consider surfacing.

### D. Styling

**[REQUIRED]**
- [ ] ✅ **Styling — no blocking tasks.** All `--osdk`/`--bp` token *mappings* live in `src/tokens/component-tokens/document-viewer.css` (`--osdk-document-viewer-bg`, `--osdk-document-viewer-border`). `DocumentViewer.module.css` only *consumes* tokens (`var(--osdk-document-viewer-bg)`, `var(--osdk-surface-*)`, `var(--osdk-typography-*)`); no mapping is defined inline in the CSS module or the tsx.

**Nice-to-have (non-blocking)**
- [ ] Single consistent token file — satisfied (one file, two tokens).
- [ ] No unused tokens — both declared tokens are used in `.module.css`.
- [ ] No `calc(--token * 1)` no-op wrappers found.

### E. Documentation

**[REQUIRED]**
- [ ] **`fileName` prop undocumented** — missing from the Props table in `docs/DocumentViewer.md` (table `:48-60` stops at `xmlViewerProps`). Prop exists at `DocumentViewerApi.ts:80`.
- [ ] **`enableTiffToPdf` prop undocumented** — missing from the same Props table. Prop exists at `DocumentViewerApi.ts:83`.
- [ ] **`ViewerType` enum undocumented** — it is a public export (`document-viewer.ts:25`) but appears nowhere in `docs/DocumentViewer.md`.
- [ ] **Stale coverage in docs prose** — intro (`DocumentViewer.md:5`) claims support for only "PDF, TIFF, common image formats, video, and markdown", omitting Excel, Email, and XML (all supported and in the MIME table). Reconcile.
- [ ] **Storybook code panel missing on most stories** — only `Pdf`, `TiffWithPdfConversion`, `WithMimeTypeOverride`, `WithPdfViewerProps` set `docs.source.code`. `Image`, `Markdown`, `Video`, `Email`, `Excel`, `Xml`, `Tiff` have no explicit snippet (rely on auto-source). Add a Code-panel snippet per the GA story requirement.

_✅ Storybook Overview page exists (`DocumentViewer.mdx` embeds `docs/DocumentViewer.md`). ✅ Default story (`Pdf`, minimal props) present. ✅ One story per supported document type (Pdf, Image, Markdown, Video, Email, Excel, Xml, Tiff, + TiffWithPdfConversion) — every format in the inventory has a story. ✅ Both CSS tokens documented in the Theming section. ✅ No data-attributes to document (none emitted). Base-component story N/A (no base layer — see A)._

**Nice-to-have / conflict notes (non-blocking)**
- [ ] **Conflict with CONTRIBUTING Storybook rules.** `DocumentViewer.stories.tsx:185` uses `title: "Components/DocumentViewer"` and manually sets `tags: ["beta"]` (`:187`). CONTRIBUTING/CLAUDE require `title: "Beta/<Name>"` and say the `beta` tag is injected automatically — "do **not** add `tags: ["beta"]` manually". The mdx (`title: "Components/DocumentViewer/Docs"`) has the same deviation. Not a GA criterion E blocker, flagged as a docs-convention conflict.

---

## Summary verdict

**Not ready (7 blocking items).**

Blocking [REQUIRED] count by category: A=1, B=1, C=2, E=3.

**Single biggest blocker:** DocumentViewer is **not integrated into any sandbox app** (B) — CONTRIBUTING makes a live peopleapp example part of the MVP definition of done, and without it the core GA guarantee (types resolve in a real consumer without casts) is unverified. Close behind: the two hardcoded user-facing strings with no override path (C), and the undocumented public props/enum (E), all of which are small, well-scoped fixes.
