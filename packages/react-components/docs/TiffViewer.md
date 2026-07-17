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

## Headless usage

`useTiffRenderer` exposes the decode logic (size guard, UTIF decode, result state) so you can build a fully custom TIFF UI on top of it, the same way `usePdfViewerState` works. Fetch the bytes yourself (e.g. `media.fetchContents()`) and hand them to the hook.

`useTiffRenderer({ content })` returns `result` — a `TiffDecodeResult`, which is either `{ status: "ok", data }` (with `width`, `height`, and RGBA `content`) or `{ status: "error", message }`.

```tsx
import { useTiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

function CustomTiff({ content }: { content: Uint8Array }) {
  const { result } = useTiffRenderer({ content });
  if (result.status === "error") return <div>{result.message}</div>;
  // …draw `result.data` (width/height/RGBA content) onto your own <canvas>.
}

// Fetch the bytes in your component, then pass them in:
const content = new Uint8Array(
  await media.fetchContents().then((r) => r.arrayBuffer())
);
```

A complete, runnable version lives in the `e2e.sandbox.peopleapp` app under the "Media Viewers" tab (`src/app/media-viewers/`).

## Features

- Decodes and renders TIFF images onto a `<canvas>` element using the `utif` library
- Handles multi-page TIFF files (renders the first page)
- Size validation — rejects images exceeding 25 MB
- Error handling with user-friendly messages for corrupted or oversized files
