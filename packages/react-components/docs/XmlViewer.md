# XmlViewer

A React component for displaying XML content in a styled `<pre><code>` block with monospace font.

## Import

```tsx
import {
  BaseXmlViewer,
  XmlViewer,
} from "@osdk/react-components/experimental/xml-viewer";
```

- **`XmlViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, fetches the XML text, and renders it.
- **`BaseXmlViewer`** — Lower-level component that accepts an XML string directly.

## Usage

### With OSDK Media

```tsx
import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<XmlViewer media={config.xmlFile} />;
```

### With a string

```tsx
import { BaseXmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<BaseXmlViewer content='<?xml version="1.0"?><root><item>Hello</item></root>' />;
```

## Props

### BaseXmlViewerProps

| Prop        | Type     | Required | Description                           |
| ----------- | -------- | -------- | ------------------------------------- |
| `content`   | `string` | Yes      | XML text to render                    |
| `className` | `string` | No       | CSS class applied to the root element |

### XmlViewerMediaProps

| Prop        | Type     | Required | Description                             |
| ----------- | -------- | -------- | --------------------------------------- |
| `media`     | `Media`  | Yes      | The OSDK Media object to fetch XML from |
| `className` | `string` | No       | CSS class applied to the root element   |

## Theming

```css
:root {
  --osdk-xml-viewer-bg: var(--osdk-background-primary);
  --osdk-xml-viewer-border: var(--osdk-surface-border);
  --osdk-xml-viewer-font-family: monospace;
  --osdk-xml-viewer-font-size: var(--osdk-typography-size-body-small);
  --osdk-xml-viewer-line-height: 1.5;
}
```
