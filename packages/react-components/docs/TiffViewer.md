# TiffRenderer

A React component for rendering TIFF images from raw byte arrays.

## Import

```tsx
import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";
```

## Usage

```tsx
import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} />;
```

## Props

### `TiffRendererProps`

| Prop      | Type         | Default     | Description                         |
| --------- | ------------ | ----------- | ----------------------------------- |
| `content` | `Uint8Array` | (required)  | TIFF bytes to render                |
| `onError` | `() => void` | `undefined` | Callback fired when rendering fails |

## Features

- Decodes and renders TIFF images onto a `<canvas>` element using the `utif` library
- Handles multi-page TIFF files (renders the first page)
- Size validation — rejects images exceeding 25 MB
- Error handling with user-friendly messages for corrupted or oversized files
