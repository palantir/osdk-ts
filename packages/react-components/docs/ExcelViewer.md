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
- **`BaseExcelViewer`** — Lower-level component that accepts a pre-parsed `ParsedSpreadsheet` object.

## Usage

### With OSDK Media

```tsx
import { ExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<ExcelViewer media={report.spreadsheet} />;
```

### With parsed data

```tsx
import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<BaseExcelViewer
  spreadsheet={{
    sheets: [
      {
        name: "Sheet1",
        rows: [
          ["Name", "Age", "City"],
          ["Alice", "30", "New York"],
          ["Bob", "25", "London"],
        ],
      },
    ],
  }}
/>;
```

## Props

### BaseExcelViewerProps

| Prop          | Type                | Required | Description                           |
| ------------- | ------------------- | -------- | ------------------------------------- |
| `spreadsheet` | `ParsedSpreadsheet` | Yes      | Parsed spreadsheet data               |
| `className`   | `string`            | No       | CSS class applied to the root element |

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
