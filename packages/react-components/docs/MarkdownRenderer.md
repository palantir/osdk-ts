# MarkdownRenderer

A React component for rendering markdown content using [react-markdown](https://github.com/remarkjs/react-markdown). Supports headings, code blocks, tables, links, images, blockquotes, and lists with themeable styling via CSS custom properties.

## Import

```tsx
import { MarkdownRenderer } from "@osdk/react-components/experimental";
```

## Usage

```tsx
import { MarkdownRenderer } from "@osdk/react-components/experimental";

<MarkdownRenderer content="# Hello World\n\nThis is **bold** text." />;
```

## Props

### MarkdownRendererProps

| Prop        | Type     | Required | Description                           |
| ----------- | -------- | -------- | ------------------------------------- |
| `content`   | `string` | Yes      | Markdown text to render               |
| `className` | `string` | No       | CSS class applied to the root element |

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

All colors and sizes are driven by CSS custom properties defined in `./CSSVariables.md`. Override them to match your application theme:

```css
:root {
  --osdk-markdown-renderer-bg: #ffffff;
  --osdk-markdown-renderer-border: 1px solid #e0e0e0;
  --osdk-markdown-renderer-padding: 24px;
  --osdk-markdown-renderer-line-height: 1.6;
  --osdk-markdown-renderer-heading-margin-top: 1.5em;
  --osdk-markdown-renderer-heading-margin-bottom: 0.5em;
  --osdk-markdown-renderer-paragraph-spacing: 1em;
  --osdk-markdown-renderer-code-bg: #f5f5f5;
  --osdk-markdown-renderer-table-border: #e0e0e0;
}
```
