# SpreadsheetViewer

A React component for rendering spreadsheets (.xlsx) as styled HTML tables with sheet tab navigation. Uses [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs) for parsing.

## Import

```tsx
import {
  BaseSpreadsheetViewer,
  SpreadsheetViewer,
} from "@osdk/react-components/experimental/spreadsheet-viewer";
```

- **`SpreadsheetViewer`** — Primary component for OSDK usage. Accepts an OSDK `Media` object, parses the spreadsheet, and renders it.
- **`BaseSpreadsheetViewer`** — Lower-level component that accepts a pre-parsed `ParsedSpreadsheet` object.

## Usage

### With OSDK Media

```tsx
import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={report.spreadsheet} />;
```

### With parsed data

```tsx
import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer
  content={{
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

### BaseSpreadsheetViewerProps

| Prop          | Type                | Required | Description                           |
| ------------- | ------------------- | -------- | ------------------------------------- |
| `content`     | `ParsedSpreadsheet` | No       | The parsed spreadsheet to render      |
| `spreadsheet` | `ParsedSpreadsheet` | No       | **Deprecated** — rename to `content`  |
| `className`   | `string`            | No       | CSS class applied to the root element |

### SpreadsheetViewerProps

| Prop        | Type     | Required | Description                                         |
| ----------- | -------- | -------- | --------------------------------------------------- |
| `media`     | `Media`  | Yes      | The OSDK Media object to fetch the spreadsheet from |
| `className` | `string` | No       | CSS class applied to the root element               |

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
  --osdk-spreadsheet-viewer-bg: var(--osdk-background-primary);
  --osdk-spreadsheet-viewer-border: var(--osdk-surface-border);
  --osdk-spreadsheet-viewer-header-bg: var(--osdk-background-secondary);
  --osdk-spreadsheet-viewer-cell-border: var(
    --osdk-surface-border-color-default
  );
  --osdk-spreadsheet-viewer-tab-bg: var(--osdk-background-secondary);
  --osdk-spreadsheet-viewer-tab-active-bg: var(--osdk-background-primary);
  --osdk-spreadsheet-viewer-tab-border: var(--osdk-surface-border);
}
```
