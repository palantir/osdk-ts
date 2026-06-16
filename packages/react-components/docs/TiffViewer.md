# TiffRenderer

A React component for rendering TIFF images from raw byte arrays. Also provides an OSDK Media wrapper for fetching TIFF contents directly from Foundry.

## Import

```tsx
import {
  TiffRenderer,
  TiffViewerMedia,
} from "@osdk/react-components/experimental/tiff-renderer";
```

- **`TiffViewerMedia`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, handles fetching the TIFF contents, and renders via `TiffRenderer`.
- **`TiffRenderer`** — Lower-level component that accepts raw `Uint8Array` bytes directly.

## Usage

### With OSDK Media

```tsx
import { TiffViewerMedia } from "@osdk/react-components/experimental/tiff-renderer";

<TiffViewerMedia media={scan.tiffImage} />;
```

### With raw bytes

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

### `TiffViewerMediaProps`

| Prop        | Type         | Default     | Description                              |
| ----------- | ------------ | ----------- | ---------------------------------------- |
| `media`     | `Media`      | (required)  | The OSDK Media object to fetch TIFF from |
| `className` | `string`     | `undefined` | CSS class applied to the root element    |
| `onError`   | `() => void` | `undefined` | Callback fired when rendering fails      |

## Features

- Decodes and renders TIFF images onto a `<canvas>` element using the `utif` library
- Handles multi-page TIFF files (renders the first page)
- Size validation — rejects images exceeding 25 MB
- Error handling with user-friendly messages for corrupted or oversized files
