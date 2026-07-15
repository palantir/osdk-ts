# ExcelViewer

A React component for rendering Excel (.xlsx) spreadsheets as styled HTML tables with sheet tab navigation. Uses [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs) for parsing.

## Import

```tsx
import {
  BaseExcelViewer,
  ExcelViewer,
} from "@osdk/react-components/experimental/excel-viewer";
```

- **`ExcelViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, parses the spreadsheet, and renders it.
- **`BaseExcelViewer`** — Lower-level component that accepts raw .xlsx bytes and parses them.

## Usage

### With OSDK Media

```tsx
import { ExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<ExcelViewer media={report.spreadsheet} />;
```

### With raw bytes

```tsx
import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

// content is raw .xlsx bytes (e.g. from media.fetchContents())
<BaseExcelViewer content={xlsxBytes} />;
```

## Headless usage

`useExcelViewerState` takes the raw .xlsx bytes, parses them, and owns the active-sheet selection — so you can build a fully custom spreadsheet UI on top of it, the same way `usePdfViewerState` works. Fetch the bytes yourself (e.g. `media.fetchContents()`) and hand them to the hook.

`useExcelViewerState({ content })` returns:

| Field              | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `error`            | Error thrown while parsing the bytes, if any                     |
| `sheets`           | All sheets in the workbook                                       |
| `activeSheetIndex` | Index of the active sheet, clamped to the available range        |
| `activeSheet`      | The active sheet, or `undefined` when the workbook has no sheets |
| `selectSheet`      | `(index: number) => void` — select a sheet                       |

```tsx
import { useExcelViewerState } from "@osdk/react-components/experimental/excel-viewer";

function CustomSpreadsheet({ content }: { content: ArrayBuffer }) {
  const { error, sheets, activeSheetIndex, activeSheet, selectSheet } =
    useExcelViewerState({ content });
  if (error != null) return <div>Failed: {error.message}</div>;
  // …render your own tabs from `sheets`/`activeSheetIndex`/`selectSheet`
  // and your own grid from `activeSheet`.
}

// Fetch the bytes in your component, then pass them in:
const content = await media.fetchContents().then((r) => r.arrayBuffer());
```

A complete, runnable version lives in the `e2e.sandbox.peopleapp` app under the "Media Viewers" tab (`src/app/media-viewers/`).

## Props

### BaseExcelViewerProps

| Prop        | Type          | Required | Description                           |
| ----------- | ------------- | -------- | ------------------------------------- |
| `content`   | `ArrayBuffer` | Yes      | Raw .xlsx bytes to parse and display  |
| `className` | `string`      | No       | CSS class applied to the root element |

### ExcelViewerMediaProps

| Prop        | Type     | Required | Description                               |
| ----------- | -------- | -------- | ----------------------------------------- |
| `media`     | `Media`  | Yes      | The OSDK Media object to fetch Excel from |
| `className` | `string` | No       | CSS class applied to the root element     |

### ParsedSpreadsheet

| Field    | Type                   | Description         |
| -------- | ---------------------- | ------------------- |
| `sheets` | `readonly SheetData[]` | All workbook sheets |

### SheetData

| Field  | Type                             | Description                    |
| ------ | -------------------------------- | ------------------------------ |
| `name` | `string`                         | Sheet name                     |
| `rows` | `readonly (readonly string[])[]` | Rows of cell values as strings |

## Features

- Renders spreadsheet data as a styled HTML table
- Sheet tab navigation at the bottom for multi-sheet workbooks
- Sticky header row
- First row treated as column headers

## Theming

```css
:root {
  --osdk-excel-viewer-bg: var(--osdk-background-primary);
  --osdk-excel-viewer-border: var(--osdk-surface-border);
  --osdk-excel-viewer-header-bg: var(--osdk-background-secondary);
  --osdk-excel-viewer-cell-border: var(--osdk-surface-border-color-default);
  --osdk-excel-viewer-tab-bg: var(--osdk-background-secondary);
  --osdk-excel-viewer-tab-active-bg: var(--osdk-background-primary);
  --osdk-excel-viewer-tab-border: var(--osdk-surface-border);
}
```
