# VideoViewer

A React component for rendering video using the browser's native `<video>` element with standard playback controls.

## Import

```tsx
import {
  BaseVideoViewer,
  VideoViewer,
} from "@osdk/react-components/experimental/video-viewer";
```

- **`VideoViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, handles fetching the video contents, and renders with native browser controls.
- **`BaseVideoViewer`** — Lower-level component that accepts a URL string directly. Use this when you already have the video source.

## Usage

### With OSDK Media

```tsx
import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";

<VideoViewer media={training.video} />;
```

### With a URL

```tsx
import { BaseVideoViewer } from "@osdk/react-components/experimental/video-viewer";

<BaseVideoViewer src="https://example.com/video.mp4" mimeType="video/mp4" />;
```

## Props

### BaseVideoViewerProps

| Prop        | Type         | Required | Description                           |
| ----------- | ------------ | -------- | ------------------------------------- |
| `src`       | `string`     | Yes      | Object URL pointing to the video      |
| `mimeType`  | `string`     | No       | MIME type for the `<source>` element  |
| `className` | `string`     | No       | CSS class applied to the root element |
| `onError`   | `() => void` | No       | Callback when the video fails to load |

### VideoViewerMediaProps

| Prop        | Type         | Required | Description                                             |
| ----------- | ------------ | -------- | ------------------------------------------------------- |
| `media`     | `Media`      | Yes      | The OSDK Media object to fetch video from               |
| `mimeType`  | `string`     | No       | Override MIME type (auto-detected from media reference) |
| `className` | `string`     | No       | CSS class applied to the root element                   |
| `onError`   | `() => void` | No       | Callback when the video fails to load                   |

## Features

- Native browser video controls (play, pause, seek, volume, fullscreen)
- Automatic MIME type detection from the OSDK Media reference
- Loading and error states while fetching video contents

## Theming

```css
:root {
  --osdk-video-viewer-bg: var(--osdk-background-primary);
  --osdk-video-viewer-border: var(--osdk-surface-border);
}
```
