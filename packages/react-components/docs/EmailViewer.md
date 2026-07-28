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
- **`BaseEmailViewer`** — Lower-level component that accepts a pre-parsed `ParsedEmail` object.

## Usage

### With OSDK Media

```tsx
import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={ticket.emailAttachment} />;
```

### With parsed email data

```tsx
import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer
  email={{
    subject: "Hello",
    from: { name: "Alice", address: "alice@example.com" },
    to: [{ name: "Bob", address: "bob@example.com" }],
    cc: [],
    date: "2026-01-15T10:30:00Z",
    html: "<p>Hello Bob!</p>",
    text: "Hello Bob!",
  }}
/>;
```

## Props

### BaseEmailViewerProps

| Prop        | Type          | Required | Description                           |
| ----------- | ------------- | -------- | ------------------------------------- |
| `email`     | `ParsedEmail` | Yes      | Parsed email data                     |
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
