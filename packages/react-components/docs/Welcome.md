# OSDK React Components

`@osdk/react-components` provides Ontology-aware React components that take OSDK types and handle data loading, caching, and state for you.

The components are built on [`@osdk/react`](https://palantir.github.io/osdk-ts/react/objects) and use its hooks internally. Use `@osdk/react` when you need low-level data hooks, and `@osdk/react-components` when you want ready-made UI for tables, forms, filters, and media.

## Components

Each component has its own import path.

| Component                                     | Import path                                 | Description                                                                     |
| --------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------- |
| [`ObjectTable`](./ObjectTable.md)             | `@osdk/react-components/object-table`       | Table of objects with sorting, selection, pinning, resizing, and inline editing |
| [`FilterList`](./FilterList.md)               | `@osdk/react-components/filter-list`        | Filter panel with value lists, ranges, keyword search, and more                 |
| [`ActionForm`](./ActionForm.md)               | `@osdk/react-components/action-form`        | Form generated from an action definition that validates and applies the action  |
| [`DocumentViewer`](./DocumentViewer.md)       | `@osdk/react-components/document-viewer`    | Picks the right viewer for a `Media` object from its MIME type                  |
| [`PdfViewer`](./PdfViewer.md)                 | `@osdk/react-components/pdf-viewer`         | PDF viewer with text selection, annotations, sidebar navigation, and search     |
| [`ImageViewer`](./ImageViewer.md)             | `@osdk/react-components/image-viewer`       | Common image formats                                                            |
| [`TiffViewer`](./TiffViewer.md)               | `@osdk/react-components/tiff-viewer`        | TIFF images                                                                     |
| [`VideoViewer`](./VideoViewer.md)             | `@osdk/react-components/video-viewer`       | Video with native playback controls                                             |
| [`MarkdownViewer`](./MarkdownViewer.md)       | `@osdk/react-components/markdown-viewer`    | Rendered Markdown                                                               |
| [`SpreadsheetViewer`](./SpreadsheetViewer.md) | `@osdk/react-components/spreadsheet-viewer` | `.xlsx` spreadsheets with a tab per sheet                                       |
| [`EmailViewer`](./EmailViewer.md)             | `@osdk/react-components/email-viewer`       | `.eml` email headers and body                                                   |
| [`XmlViewer`](./XmlViewer.md)                 | `@osdk/react-components/xml-viewer`         | XML content in a monospace block                                                |

### Experimental

Experimental components live under `@osdk/react-components/experimental/*`. Their APIs can change in any release.

| Component                                     | Import path                                          | Description                                             |
| --------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| [`AipAgentChat`](./AipAgentChat.md)           | `@osdk/react-components/experimental/aip-agent-chat` | AI chat backed by a Foundry language model              |
| [`CbacPicker`](./CbacPicker.md)               | `@osdk/react-components/experimental/cbac-picker`    | Picker for classification-based access control markings |
| [`OsdkThemeProvider`](./OsdkThemeProvider.md) | `@osdk/react-components/experimental/theme`          | Light and dark theme for OSDK components                |

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

Components need an `OsdkProvider` above them and the package styles imported into a CSS layer. See [Prerequisites](./Prerequisites.md) for the full setup.
