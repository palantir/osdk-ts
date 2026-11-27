# OSDK React Components

Source: https://palantir.github.io/osdk-ts/components

> @osdk/react-components provides Ontology-aware React components that take OSDK types and handle data loading, caching, and state for you.

The components are built on [`@osdk/react`](https://palantir.github.io/osdk-ts/react/objects) and use its hooks internally. Use `@osdk/react` when you need low-level data hooks, and `@osdk/react-components` when you want ready-made UI for tables, forms, filters, and media.

## Components

Each component has its own import path.

| Component                                     | Import path                                 | Description                                                                     |
| --------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------- |
| [`ObjectTable`](https://palantir.github.io/osdk-ts/components/object-table.md)             | `@osdk/react-components/object-table`       | Table of objects with sorting, selection, pinning, resizing, and inline editing |
| [`FilterList`](https://palantir.github.io/osdk-ts/components/filter-list.md)               | `@osdk/react-components/filter-list`        | Filter panel with value lists, ranges, keyword search, and more                 |
| [`ActionForm`](https://palantir.github.io/osdk-ts/components/action-form.md)               | `@osdk/react-components/action-form`        | Form generated from an action definition that validates and applies the action  |
| [`DocumentViewer`](https://palantir.github.io/osdk-ts/components/document-viewer.md)       | `@osdk/react-components/document-viewer`    | Picks the right viewer for a `Media` object from its MIME type                  |
| [`PdfViewer`](https://palantir.github.io/osdk-ts/components/pdf-viewer.md)                 | `@osdk/react-components/pdf-viewer`         | PDF viewer with text selection, annotations, sidebar navigation, and search     |
| [`ImageViewer`](https://palantir.github.io/osdk-ts/components/image-viewer.md)             | `@osdk/react-components/image-viewer`       | Common image formats                                                            |
| [`TiffViewer`](https://palantir.github.io/osdk-ts/components/tiff-viewer.md)               | `@osdk/react-components/tiff-viewer`        | TIFF images                                                                     |
| [`VideoViewer`](https://palantir.github.io/osdk-ts/components/video-viewer.md)             | `@osdk/react-components/video-viewer`       | Video with native playback controls                                             |
| [`MarkdownViewer`](https://palantir.github.io/osdk-ts/components/markdown-viewer.md)       | `@osdk/react-components/markdown-viewer`    | Rendered Markdown                                                               |
| [`SpreadsheetViewer`](https://palantir.github.io/osdk-ts/components/spreadsheet-viewer.md) | `@osdk/react-components/spreadsheet-viewer` | `.xlsx` spreadsheets with a tab per sheet                                       |
| [`EmailViewer`](https://palantir.github.io/osdk-ts/components/email-viewer.md)             | `@osdk/react-components/email-viewer`       | `.eml` email headers and body                                                   |
| [`XmlViewer`](https://palantir.github.io/osdk-ts/components/xml-viewer.md)                 | `@osdk/react-components/xml-viewer`         | XML content in a monospace block                                                |

### Experimental

Experimental components live under `@osdk/react-components/experimental/*`. Their APIs can change in any release.

| Component                                     | Import path                                           | Description                                             |
| --------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| [`AipAgentChat`](https://palantir.github.io/osdk-ts/components/aip-agent-chat.md)           | `@osdk/react-components/experimental/aip-agent-chat`  | AI chat backed by a Foundry language model              |
| [`CbacPicker`](https://palantir.github.io/osdk-ts/components/cbac-picker.md)               | `@osdk/react-components/experimental/cbac-picker`     | Picker for classification-based access control markings |
| [`OsdkThemeProvider`](https://palantir.github.io/osdk-ts/components/osdk-theme-provider.md) | `@osdk/react-components/experimental/theme`           | Light and dark theme for OSDK components                |
| [`WorkshopModule`](https://palantir.github.io/osdk-ts/components/workshop-module.md)       | `@osdk/react-components/experimental/workshop-module` | Embeds a Workshop module                                |

## Quick start

```bash
npm install @osdk/react-components @osdk/react @osdk/client @osdk/api @osdk/oauth react react-dom classnames
```

```tsx
import { Employee } from "@my-app/sdk";
import { ObjectTable } from "@osdk/react-components/object-table";

function EmployeeDirectory() {
  return <ObjectTable objectType={Employee} />;
}
```

Components need an `OsdkProvider` above them and the package styles imported into a CSS layer. See [Prerequisites](https://palantir.github.io/osdk-ts/components/prerequisites.md) for the full setup.