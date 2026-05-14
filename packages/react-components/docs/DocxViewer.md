# DocxViewer

A React component for rendering Microsoft Word (.docx) documents using [docx-preview](https://github.com/VolodymyrBaydalka/docxjs). Preserves formatting, tables, and images.

## Import

```tsx
import {
  BaseDocxViewer,
  DocxViewer,
} from "@osdk/react-components/experimental/docx-viewer";
```

- **`DocxViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, handles fetching the DOCX contents, and renders via `docx-preview`.
- **`BaseDocxViewer`** — Lower-level component that accepts an `ArrayBuffer` directly.

## Usage

### With OSDK Media

```tsx
import { DocxViewer } from "@osdk/react-components/experimental/docx-viewer";

<DocxViewer media={document.wordFile} />;
```

### With an ArrayBuffer

```tsx
import { BaseDocxViewer } from "@osdk/react-components/experimental/docx-viewer";

<BaseDocxViewer src={arrayBuffer} />;
```

## Props

### BaseDocxViewerProps

| Prop        | Type          | Required | Description                           |
| ----------- | ------------- | -------- | ------------------------------------- |
| `src`       | `ArrayBuffer` | Yes      | DOCX file contents                    |
| `className` | `string`      | No       | CSS class applied to the root element |
| `onError`   | `() => void`  | No       | Callback when rendering fails         |

### DocxViewerMediaProps

| Prop        | Type         | Required | Description                              |
| ----------- | ------------ | -------- | ---------------------------------------- |
| `media`     | `Media`      | Yes      | The OSDK Media object to fetch DOCX from |
| `className` | `string`     | No       | CSS class applied to the root element    |
| `onError`   | `() => void` | No       | Callback when rendering fails            |

## Theming

```css
:root {
  --osdk-docx-viewer-bg: var(--osdk-background-primary);
  --osdk-docx-viewer-border: var(--osdk-surface-border);
}
```
