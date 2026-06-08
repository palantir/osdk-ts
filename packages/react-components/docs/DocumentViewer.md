<!-- cspell:words openxmlformats officedocument spreadsheetml -->

# DocumentViewer

A React component that automatically selects the correct viewer for an OSDK `Media` object based on its MIME type. Supports PDF, TIFF, common image formats, video, and markdown.

## Import

```tsx
import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";
```

## Usage

### Basic

```tsx
import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />;
```

### With viewer-specific props

```tsx
<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
  imageViewerProps={{
    alt: "Product photo",
  }}
/>;
```

### With MIME type override

```tsx
<DocumentViewer
  media={myMedia}
  mimeTypeOverride="application/pdf"
/>;
```

## Props

### DocumentViewerProps

| Prop                    | Type                                                 | Required | Description                                                 |
| ----------------------- | ---------------------------------------------------- | -------- | ----------------------------------------------------------- |
| `media`                 | `Media`                                              | Yes      | The OSDK Media object to render                             |
| `className`             | `string`                                             | No       | CSS class applied to the root element                       |
| `mimeTypeOverride`      | `string`                                             | No       | Override the auto-detected MIME type                        |
| `pdfViewerProps`        | `Partial<Omit<PdfViewerProps, "src">>`               | No       | Props forwarded to BasePdfViewer when rendering PDF         |
| `imageViewerProps`      | `Partial<Omit<BaseImageViewerProps, "src">>`         | No       | Props forwarded to BaseImageViewer when rendering images    |
| `videoViewerProps`      | `Partial<Omit<BaseVideoViewerProps, "src">>`         | No       | Props forwarded to BaseVideoViewer when rendering video     |
| `tiffRendererProps`     | `Partial<Omit<TiffRendererProps, "content">>`        | No       | Props forwarded to TiffRenderer when rendering TIFF         |
| `markdownRendererProps` | `Partial<Omit<MarkdownRendererProps, "content">>`    | No       | Props forwarded to MarkdownRenderer when rendering markdown |
| `excelViewerProps`      | `Partial<Omit<BaseExcelViewerProps, "spreadsheet">>` | No       | Props forwarded to BaseExcelViewer when rendering Excel     |
| `emailViewerProps`      | `Partial<Omit<BaseEmailViewerProps, "email">>`       | No       | Props forwarded to BaseEmailViewer when rendering EML       |
| `xmlViewerProps`        | `Partial<Omit<BaseXmlViewerProps, "content">>`       | No       | Props forwarded to BaseXmlViewer when rendering XML         |

## Supported MIME types

| MIME type                                                                          | Viewer           |
| ---------------------------------------------------------------------------------- | ---------------- |
| `application/pdf`                                                                  | PdfViewer        |
| `image/tiff`                                                                       | TiffRenderer     |
| `image/png`, `image/jpeg`, `image/gif`, `image/svg+xml`, `image/webp`, `image/bmp` | ImageViewer      |
| `video/*`                                                                          | VideoViewer      |
| `text/markdown`, `text/x-markdown`                                                 | MarkdownRenderer |
| `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`                | ExcelViewer      |
| `message/rfc822`                                                                   | EmailViewer      |
| `application/xml`, `text/xml`                                                      | XmlViewer        |

Unsupported MIME types — including `.doc`/`.docx` Microsoft Word documents — display a fallback message.

## Theming

The root container is styled with CSS custom properties:

```css
:root {
  --osdk-document-viewer-bg: var(--osdk-background-primary);
  --osdk-document-viewer-border: var(--osdk-surface-border);
}
```

Individual viewer theming is documented in each viewer's respective docs.
