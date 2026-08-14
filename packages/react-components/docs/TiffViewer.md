# TiffViewer

A React component for rendering TIFF images from raw byte arrays. Also provides an OSDK Media wrapper for fetching TIFF contents directly from Foundry.

## Import

```tsx
import {
  BaseTiffViewer,
  TiffViewer,
} from "@osdk/react-components/experimental/tiff-renderer";
```

- **`TiffViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, handles fetching the TIFF contents, and renders via `BaseTiffViewer`.
- **`BaseTiffViewer`** — Lower-level component that accepts raw `Uint8Array` bytes directly.

## Usage

### With OSDK Media

```tsx
import { TiffViewer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffViewer media={scan.tiffImage} />;
```

### With raw bytes

```tsx
import { BaseTiffViewer } from "@osdk/react-components/experimental/tiff-renderer";

<BaseTiffViewer src={tiffBytes} />;
```

## Props

### `BaseTiffViewerProps`

| Prop        | Type         | Default     | Description                           |
| ----------- | ------------ | ----------- | ------------------------------------- |
| `src`       | `Uint8Array` | `undefined` | TIFF bytes to render                  |
| `content`   | `Uint8Array` | `undefined` | **Deprecated** — rename to `src`      |
| `className` | `string`     | `undefined` | CSS class applied to the root element |
| `onError`   | `() => void` | `undefined` | Callback fired when rendering fails   |

### `TiffViewerProps`

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
