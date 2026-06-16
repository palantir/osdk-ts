# ImageViewer

A React component for rendering common image formats. Provides both an OSDK Media wrapper and a base component for direct use.

## Import

```tsx
import {
  BaseImageViewer,
  ImageViewer,
} from "@osdk/react-components/experimental/image-viewer";
```

- **`ImageViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, handles fetching the image contents, and renders via a native `<img>` element.
- **`BaseImageViewer`** — Lower-level component that accepts a URL string directly. Use this when you already have the image source.

## Usage

### With OSDK Media

```tsx
import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={product.photo} alt="Product photo" />;
```

### With a URL

```tsx
import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src="https://example.com/photo.png" alt="Example" />;
```

## Props

### BaseImageViewerProps

| Prop        | Type         | Required | Description                           |
| ----------- | ------------ | -------- | ------------------------------------- |
| `src`       | `string`     | Yes      | Object URL or data URL for the image  |
| `alt`       | `string`     | No       | Alt text for accessibility            |
| `className` | `string`     | No       | CSS class applied to the root element |
| `onError`   | `() => void` | No       | Callback when the image fails to load |

### ImageViewerMediaProps

| Prop        | Type         | Required | Description                               |
| ----------- | ------------ | -------- | ----------------------------------------- |
| `media`     | `Media`      | Yes      | The OSDK Media object to fetch image from |
| `alt`       | `string`     | No       | Alt text for accessibility                |
| `className` | `string`     | No       | CSS class applied to the root element     |
| `onError`   | `() => void` | No       | Callback when the image fails to load     |

## Supported formats

PNG, JPEG, GIF, SVG, WebP, and BMP — any format supported by the browser's native `<img>` element.

## Theming

```css
:root {
  --osdk-image-viewer-bg: var(--osdk-background-primary);
  --osdk-image-viewer-border: var(--osdk-surface-border);
}
```
