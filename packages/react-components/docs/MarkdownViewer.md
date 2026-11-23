# MarkdownViewer

`MarkdownViewer` renders Markdown from an OSDK `Media` object, and `BaseMarkdownViewer` renders a Markdown string you provide.

Rendering uses [react-markdown](https://github.com/remarkjs/react-markdown) and supports headings, code blocks, tables, links, images, blockquotes, and lists, all themeable through CSS custom properties.

## Import

```tsx
import {
  BaseMarkdownViewer,
  MarkdownViewer,
} from "@osdk/react-components/markdown-viewer";
```

- **`MarkdownViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, handles fetching the markdown text, and renders via `BaseMarkdownViewer`.
- **`BaseMarkdownViewer`** — Lower-level component that accepts a markdown string directly.

## Usage

### With OSDK Media

```tsx
import { MarkdownViewer } from "@osdk/react-components/markdown-viewer";

<MarkdownViewer media={document.readme} />;
```

### With a string

```tsx
import { BaseMarkdownViewer } from "@osdk/react-components/markdown-viewer";

<BaseMarkdownViewer content="# Hello World\n\nThis is **bold** text." />;
```

## Props

### BaseMarkdownViewerProps

| Prop        | Type     | Required | Description                           |
| ----------- | -------- | -------- | ------------------------------------- |
| `content`   | `string` | Yes      | Markdown text to render               |
| `className` | `string` | No       | CSS class applied to the root element |

### MarkdownViewerProps

| Prop        | Type     | Required | Description                                  |
| ----------- | -------- | -------- | -------------------------------------------- |
| `media`     | `Media`  | Yes      | The OSDK Media object to fetch markdown from |
| `className` | `string` | No       | CSS class applied to the root element        |

## Features

### Supported markdown elements

- Headings (h1–h6)
- Paragraphs and line breaks
- **Bold**, _italic_, and ~~strikethrough~~ text
- Links and images
- Inline `code` and fenced code blocks
- Blockquotes
- Ordered and unordered lists
- Tables
- Horizontal rules

## Theming

All colors and sizes are driven by CSS custom properties defined in [CSS Variables](./CSSVariables.md#markdown-viewer). Override them to match your application theme:

```css
:root {
  --osdk-markdown-viewer-bg: #ffffff;
  --osdk-markdown-viewer-border: 1px solid #e0e0e0;
  --osdk-markdown-viewer-padding: 24px;
  --osdk-markdown-viewer-line-height: 1.6;
  --osdk-markdown-viewer-heading-margin-top: 1.5em;
  --osdk-markdown-viewer-heading-margin-bottom: 0.5em;
  --osdk-markdown-viewer-paragraph-spacing: 1em;
  --osdk-markdown-viewer-code-bg: #f5f5f5;
  --osdk-markdown-viewer-table-border: #e0e0e0;
}
```
