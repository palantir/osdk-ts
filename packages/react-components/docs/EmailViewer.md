<!-- cspell:words sandboxing -->

# EmailViewer

A React component for rendering email (.eml) files. Parses email content using [postal-mime](https://github.com/nicktomlin/postal-mime) and displays headers and body with security sandboxing.

## Import

```tsx
import {
  BaseEmailViewer,
  EmailViewer,
} from "@osdk/react-components/experimental/email-viewer";
```

- **`EmailViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, parses the .eml contents, and renders the email.
- **`BaseEmailViewer`** — Lower-level component that accepts raw .eml bytes and parses them.

## Usage

### With OSDK Media

```tsx
import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={ticket.emailAttachment} />;
```

### With raw bytes

```tsx
import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

// content is raw .eml bytes (e.g. from media.fetchContents())
<BaseEmailViewer content={emlBytes} />;
```

## Headless usage

`useEmailViewerState` takes the raw .eml bytes, parses them (asynchronously), and derives the body mode and formatted addresses — so you can build a fully custom email UI on top of it, the same way `usePdfViewerState` works. Fetch the bytes yourself (e.g. `media.fetchContents()`) and hand them to the hook.

`useEmailViewerState({ content })` returns:

| Field           | Description                                               |
| --------------- | --------------------------------------------------------- |
| `loading`       | Whether the email is still being parsed                   |
| `error`         | Error thrown while parsing the bytes, if any              |
| `email`         | The parsed email, or `undefined` while loading / on error |
| `bodyMode`      | Which body to render: `"html" \| "text" \| "empty"`       |
| `formattedFrom` | Formatted sender address, or `undefined` when absent      |
| `formattedTo`   | Comma-separated formatted recipient addresses             |
| `formattedCc`   | Comma-separated formatted CC addresses                    |

```tsx
import { useEmailViewerState } from "@osdk/react-components/experimental/email-viewer";

function CustomEmail({ content }: { content: ArrayBuffer }) {
  const { loading, error, email, bodyMode, formattedFrom } =
    useEmailViewerState({ content });
  if (loading) return <div>Loading…</div>;
  if (error != null) return <div>Failed: {error.message}</div>;
  // …render your own header from `formattedFrom` (and `formattedTo`/`formattedCc`)
  // and switch the body on `bodyMode` (reading `email.html` / `email.text`).
}

// Fetch the bytes in your component, then pass them in:
const content = await media.fetchContents().then((r) => r.arrayBuffer());
```

A complete, runnable version lives in the `e2e.sandbox.peopleapp` app under the "Media Viewers" tab (`src/app/media-viewers/`).

## Props

### BaseEmailViewerProps

| Prop        | Type          | Required | Description                           |
| ----------- | ------------- | -------- | ------------------------------------- |
| `content`   | `ArrayBuffer` | Yes      | Raw .eml bytes to parse and display   |
| `className` | `string`      | No       | CSS class applied to the root element |

### EmailViewerMediaProps

| Prop        | Type     | Required | Description                             |
| ----------- | -------- | -------- | --------------------------------------- |
| `media`     | `Media`  | Yes      | The OSDK Media object to fetch EML from |
| `className` | `string` | No       | CSS class applied to the root element   |

### ParsedEmail

| Field     | Type                        | Description         |
| --------- | --------------------------- | ------------------- |
| `subject` | `string \| undefined`       | Email subject line  |
| `from`    | `EmailAddress \| undefined` | Sender address      |
| `to`      | `readonly EmailAddress[]`   | Recipient addresses |
| `cc`      | `readonly EmailAddress[]`   | CC addresses        |
| `date`    | `string \| undefined`       | Date string         |
| `html`    | `string \| undefined`       | HTML body           |
| `text`    | `string \| undefined`       | Plain text body     |

## Security

HTML email bodies are rendered inside a sandboxed `<iframe>` with `sandbox="allow-same-origin"`. This prevents script execution, form submissions, and popups from the email content.

## Theming

```css
:root {
  --osdk-email-viewer-bg: var(--osdk-background-primary);
  --osdk-email-viewer-border: var(--osdk-surface-border);
  --osdk-email-viewer-header-bg: var(--osdk-background-secondary);
  --osdk-email-viewer-header-border: var(--osdk-surface-border);
}
```
