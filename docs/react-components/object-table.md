---
sidebar_position: 1
---

# ObjectTable

A high-performance table component for displaying collections of OSDK objects with built-in sorting, filtering, pagination, row selection, and custom rendering capabilities. Built on TanStack Table for robust table functionality.

:::info Stability
Experimental - Available from `@osdk/react-components/experimental`
:::

## Basic Usage

```tsx
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental";

function EmployeeList() {
  return (
    <div style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} />
    </div>
  );
}
```

## Key Features

- **Automatic data loading** - Fetches and displays object data from the server
- **Server-side sorting** - Sort by any property with single or multi-column support
- **Filtering** - Apply where clauses to filter displayed data
- **Pagination** - Built-in infinite scroll with configurable page size
- **Row selection** - Single or multiple row selection with checkmarks
- **Column customization** - Control visibility, width, pinning, and rendering
- **Runtime-derived properties (RDPs)** - Display computed properties from related objects
- **Custom cell rendering** - Full control over cell display
- **Context menus** - Right-click context menu support
- **Responsive resizing** - User-resizable columns

## Props

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | `ObjectOrInterfaceDefinition` | Yes | The OSDK object type to display |
| `columnDefinitions` | `ColumnDefinition[]` | No | Ordered list of columns to display. If not provided, all properties are shown |
| `filter` | `WhereClause<Q>` | No | Where clause to filter objects (controlled mode) |
| `onFilterChanged` | `(newWhere) => void` | No | Called when filter changes (required if filter is controlled) |
| `orderBy` | `{ property, direction }[]` | No | Current sort order (controlled mode) |
| `defaultOrderBy` | `{ property, direction }[]` | No | Initial sort order (uncontrolled mode) |
| `onOrderByChanged` | `(newOrderBy) => void` | No | Called when sort changes (required if orderBy is controlled) |
| `selectionMode` | `"none" \| "single" \| "multiple"` | No | Row selection mode (default: "none") |
| `selectedRows` | `PrimaryKeyType[]` | No | Currently selected row primary keys (controlled mode) |
| `onRowSelection` | `(selectedRowIds) => void` | No | Called when selection changes (required if selectedRows is controlled) |
| `onRowClick` | `(object) => void` | No | Called when a row is clicked |
| `onColumnsPinnedChanged` | `(newStates) => void` | No | Called when columns are pinned/unpinned |
| `onColumnVisibilityChanged` | `(newStates) => void` | No | Called when column visibility changes |
| `renderCellContextMenu` | `(row, cellValue) => ReactNode` | No | Custom right-click context menu for cells |
| `rowHeight` | `number` | No | Height of each row in pixels (default: 40) |
| `className` | `string` | No | CSS class for the table container |

## Column Definition

Each column definition controls how a property or computed value is displayed:

```ts
type ColumnDefinition = {
  locator: ColumnDefinitionLocator; // What to display (property, rdp, or function)
  isVisible?: boolean;               // Show/hide column (default: true)
  pinned?: "left" | "right" | "none"; // Pin column to side (default: "none")
  width?: number;                    // Column width in pixels
  minWidth?: number;                 // Minimum width
  maxWidth?: number;                 // Maximum width
  resizable?: boolean;               // Allow user resizing
  orderable?: boolean;               // Enable sorting
  filterable?: boolean;              // Enable filtering
  renderCell?: (object, locator) => ReactNode; // Custom cell renderer
  renderHeader?: () => ReactNode;    // Custom header renderer
};
```

### Column Locators

Locators specify what data to display in a column:

```ts
// Property column - displays a base property
{
  type: "property";
  id: PropertyKeys<Q>; // e.g., "fullName", "startDate"
}

// Runtime-derived property (RDP) - computed from related objects
{
  type: "rdp";
  id: string; // Custom property name
  creator: DerivedProperty.Creator<Q, PropertyDef>; // How to compute the value
}

// Function column - executes a query for each row
{
  type: "function";
  id: string; // Function identifier
}
```

## Examples

### Display Specific Columns

```tsx
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental";

function EmployeeTable() {
  return (
    <div style={{ height: "600px" }}>
      <ObjectTable
        objectType={Employee}
        columnDefinitions={[
          { locator: { type: "property", id: "fullName" } },
          { locator: { type: "property", id: "class" } },
          { locator: { type: "property", id: "office" } },
          { locator: { type: "property", id: "startDate" } },
        ]}
      />
    </div>
  );
}
```

### Custom Column Rendering

Customize how cells and headers are displayed:

```tsx
import type { Osdk } from "@osdk/api";
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental";

function EmployeeTableCustom() {
  return (
    <div style={{ height: "600px" }}>
      <ObjectTable
        objectType={Employee}
        columnDefinitions={[
          {
            locator: { type: "property", id: "fullName" },
            pinned: "left",
            renderHeader: () => <div style={{ color: "blue" }}>Name</div>,
          },
          {
            locator: { type: "property", id: "startDate" },
            width: 300,
            renderHeader: () => "Start Date",
            renderCell: (object: Osdk.Instance<Employee>) => {
              return object.startDate
                ? new Date(object.startDate).toLocaleDateString()
                : "Not available";
            },
          },
        ]}
      />
    </div>
  );
}
```

### Runtime-Derived Properties (RDPs)

Display computed properties by traversing relationships:

```tsx
import type { DerivedProperty, Osdk } from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@my/osdk";

type RDPs = {
  managerName: "string";
};

const columnDefinitions: Array<ColumnDefinition<Employee, RDPs>> = [
  {
    locator: { type: "property", id: "fullName" },
  },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object: Osdk.Instance<Employee>) => {
      if ("managerName" in object) {
        return object["managerName"] as string;
      }
      return "No Manager";
    },
  },
];

function EmployeeTableWithRDPs() {
  return (
    <div style={{ height: "600px" }}>
      <ObjectTable<Employee, RDPs>
        objectType={Employee}
        columnDefinitions={columnDefinitions}
      />
    </div>
  );
}
```

### Row Selection

Enable single or multiple row selection:

```tsx
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental";
import { useState } from "react";

function EmployeeTableWithSelection() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <div>
      <div>Selected: {selectedIds.length} employees</div>
      <div style={{ height: "600px" }}>
        <ObjectTable
          objectType={Employee}
          selectionMode="multiple"
          selectedRows={selectedIds}
          onRowSelection={setSelectedIds}
        />
      </div>
    </div>
  );
}
```

### Controlled Sorting

Control the sort order externally:

```tsx
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental";
import { useState } from "react";

function EmployeeTableControlledSort() {
  const [orderBy, setOrderBy] = useState([
    { property: "startDate" as const, direction: "desc" as const },
  ]);

  return (
    <div>
      <button onClick={() => setOrderBy([{ property: "fullName", direction: "asc" }])}>
        Sort by Name
      </button>
      <button onClick={() => setOrderBy([{ property: "startDate", direction: "desc" }])}>
        Sort by Start Date
      </button>

      <div style={{ height: "600px" }}>
        <ObjectTable
          objectType={Employee}
          orderBy={orderBy}
          onOrderByChanged={setOrderBy}
        />
      </div>
    </div>
  );
}
```

### Context Menu

Add right-click context menus to cells:

```tsx
import type { Osdk } from "@osdk/api";
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental";
import { useCallback } from "react";

function EmployeeTableWithContextMenu() {
  const renderCellContextMenu = useCallback(
    (_: Osdk.Instance<Employee>, cellValue: unknown) => {
      return (
        <div
          style={{
            background: "white",
            padding: 8,
            border: "1px solid #d1d5db",
            boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
            fontSize: 13,
          }}
        >
          <div>Copy: {cellValue ? cellValue.toString() : "No Value"}</div>
        </div>
      );
    },
    [],
  );

  return (
    <div style={{ height: "600px" }}>
      <ObjectTable
        objectType={Employee}
        renderCellContextMenu={renderCellContextMenu}
      />
    </div>
  );
}
```

## Advanced Usage

### Uncontrolled Default Sorting

Set an initial sort order without controlling it:

```tsx
<ObjectTable
  objectType={Employee}
  defaultOrderBy={[
    { property: "startDate", direction: "desc" },
  ]}
/>
```

Users can change the sort order, but you don't need to manage state.

### Controlled vs Uncontrolled Mode

ObjectTable supports both controlled and uncontrolled modes for sorting, filtering, and selection:

**Uncontrolled** - Component manages its own state:
```tsx
<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{ property: "fullName", direction: "asc" }]}
  selectionMode="multiple"
/>
```

**Controlled** - You manage the state:
```tsx
<ObjectTable
  objectType={Employee}
  orderBy={orderBy}
  onOrderByChanged={setOrderBy}
  selectedRows={selectedIds}
  onRowSelection={setSelectedIds}
/>
```

### Hidden Columns

Hide columns while keeping them in the definition:

```tsx
<ObjectTable
  objectType={Employee}
  columnDefinitions={[
    { locator: { type: "property", id: "fullName" } },
    { locator: { type: "property", id: "ssn" }, isVisible: false },
  ]}
/>
```

### Pinned Columns

Pin columns to the left or right side:

```tsx
<ObjectTable
  objectType={Employee}
  columnDefinitions={[
    { locator: { type: "property", id: "fullName" }, pinned: "left" },
    { locator: { type: "property", id: "department" } },
    { locator: { type: "property", id: "actions" }, pinned: "right" },
  ]}
/>
```

## Best Practices

:::tip Height is Required
Always provide a fixed height to the table container. The table uses virtualization for performance and needs a defined height to render properly.

```tsx
<div style={{ height: "600px" }}>
  <ObjectTable objectType={Employee} />
</div>
```
:::

:::tip Use OsdkProvider2
ObjectTable requires `OsdkProvider2` from `@osdk/react/experimental` in your component tree to access the OSDK client and cache.

```tsx
import { OsdkProvider2 } from "@osdk/react/experimental";
import { client } from "./client";

function App() {
  return (
    <OsdkProvider2 client={client}>
      <ObjectTable objectType={Employee} />
    </OsdkProvider2>
  );
}
```
:::

:::tip Column Definitions Order
The order of column definitions determines the display order. Place important columns first or pin them.
:::

:::warning RDP Performance
Runtime-derived properties (RDPs) require additional server queries. Use them judiciously and only for essential computed values.
:::

:::warning
Don't conditionally call hooks inside renderCell or renderHeader. These functions are called during render and must follow React's rules of hooks.
:::

## Troubleshooting

### Table Not Displaying

**Problem:** Table renders but shows no data or appears blank

**Solution:** Ensure the container has a fixed height:

```tsx
// Bad - no height
<div>
  <ObjectTable objectType={Employee} />
</div>

// Good - explicit height
<div style={{ height: "600px" }}>
  <ObjectTable objectType={Employee} />
</div>
```

### OsdkProvider2 Not Found

**Problem:** Error about missing provider or client

**Solution:** Wrap your app with `OsdkProvider2`:

```tsx
import { OsdkProvider2 } from "@osdk/react/experimental";
import { client } from "./foundryClient";

function App() {
  return (
    <OsdkProvider2 client={client}>
      <YourComponents />
    </OsdkProvider2>
  );
}
```

### RDP Values Not Showing

**Problem:** Runtime-derived properties show "No Value" or undefined

**Solution:** Ensure your renderCell function correctly checks for the RDP property:

```tsx
renderCell: (object: Osdk.Instance<Employee>) => {
  if ("managerName" in object) {
    return object["managerName"] as string;
  }
  return "No Manager";
}
```

### Controlled Sorting Not Working

**Problem:** Clicking column headers doesn't change sort

**Solution:** Provide both `orderBy` and `onOrderByChanged` props:

```tsx
const [orderBy, setOrderBy] = useState([...]);

<ObjectTable
  objectType={Employee}
  orderBy={orderBy}
  onOrderByChanged={setOrderBy} // Required for controlled mode
/>
```

## Theming

ObjectTable and other OSDK React components are fully themeable using CSS custom properties (CSS variables), similar to [shadcn/ui's theming approach](https://ui.shadcn.com/docs/theming).

:::tip Interactive Demo
Try the [live theming demo](/docs-example) with 6 refined preset themes including Default, Ocean, Forest, Sunset, Midnight, and Violet. The theme selector in the top bar lets you switch themes globally across all components. Themes use Blueprint's oklch color space with reduced saturation for sophisticated, professional interfaces.
:::

### Theme Variables

The components use a two-level token system:

1. **Blueprint Level 1 tokens** - Base design tokens from `@osdk/react-components-styles`
2. **OSDK Level 2 tokens** - Component-specific tokens that reference Level 1 tokens

### Customizing the Theme

Override CSS variables in your stylesheet to customize component appearance:

```css
/* Custom theme overrides */
@layer custom.theme {
  :root {
    /* Table colors */
    --osdk-table-header-bg: #f8f9fa;
    --osdk-table-row-bg-default: #ffffff;
    --osdk-table-row-bg-alternate: #f9fafb;
    --osdk-table-row-bg-hover: #f3f4f6;
    --osdk-table-row-bg-active: #dbeafe;

    /* Table typography */
    --osdk-table-header-fontSize: 14px;
    --osdk-table-header-fontWeight: 600;
    --osdk-table-cell-fontSize: 14px;
    --osdk-table-cell-color: #1f2937;

    /* Table spacing and borders */
    --osdk-table-cell-padding: 12px 16px;
    --osdk-table-border-width: 1px;
    --osdk-table-border: 1px solid #e5e7eb;

    /* Surface tokens (affects all components) */
    --osdk-surface-border-radius: 8px;
    --osdk-surface-spacing: 8px;

    /* Intent colors (buttons, interactive elements) */
    --osdk-intent-primary-rest: #3b82f6;
    --osdk-intent-primary-hover: #2563eb;
    --osdk-intent-primary-active: #1d4ed8;
  }
}
```

### CSS Layer Setup

The theming system uses CSS layers for proper specificity. Your `index.css` should follow this structure:

```css
/* Define layer order */
@layer tailwind, osdk.components, osdk.tokens, custom.theme;

/* Import OSDK component styles */
@import "@osdk/react-components/styles.css" layer(osdk.components);

/* Import OSDK tokens (Blueprint Level 1 + OSDK Level 2) */
@import "@osdk/react-components-styles" layer(osdk.tokens);

/* Tailwind (optional) */
@layer tailwind {
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
}

/* Your custom theme overrides */
@layer custom.theme {
  :root {
    /* Your custom variables here */
  }
}
```

### Available Theme Variables

Key CSS variables you can customize:

**Table Structure:**
- `--osdk-table-border` - Border around table
- `--osdk-table-border-width` - Border thickness
- `--osdk-table-cell-divider` - Divider between cells
- `--osdk-table-row-divider` - Divider between rows
- `--osdk-table-pinned-column-border` - Border on pinned columns

**Table Colors:**
- `--osdk-table-header-bg` - Header background
- `--osdk-table-header-color` - Header text color
- `--osdk-table-row-bg-default` - Default row background
- `--osdk-table-row-bg-alternate` - Alternate row background (zebra striping)
- `--osdk-table-row-bg-hover` - Row hover background
- `--osdk-table-row-bg-active` - Selected row background
- `--osdk-table-cell-color` - Cell text color

**Typography:**
- `--osdk-table-header-fontSize` - Header font size
- `--osdk-table-header-fontWeight` - Header font weight
- `--osdk-table-cell-fontSize` - Cell font size
- `--osdk-typography-color-default-rest` - Default text color
- `--osdk-typography-color-muted` - Muted text color

**Interactive Elements:**
- `--osdk-intent-primary-rest` - Primary button/element color
- `--osdk-intent-primary-hover` - Primary hover color
- `--osdk-intent-primary-active` - Primary active color
- `--osdk-intent-primary-foreground` - Primary text color

**Surface & Layout:**
- `--osdk-surface-border-radius` - Border radius for all components
- `--osdk-surface-spacing` - Standard spacing unit
- `--osdk-surface-border-color-default` - Default border color
- `--osdk-surface-background-color-default` - Default background
- `--osdk-surface-shadow-2` - Shadow for elevated elements

### Dark Mode Example

Create a dark theme by overriding variables:

```css
@layer custom.theme {
  [data-theme="dark"] {
    /* Table colors */
    --osdk-table-header-bg: #1f2937;
    --osdk-table-row-bg-default: #111827;
    --osdk-table-row-bg-alternate: #1f2937;
    --osdk-table-row-bg-hover: #374151;
    --osdk-table-row-bg-active: #1e40af;

    /* Text colors */
    --osdk-table-header-color: #f9fafb;
    --osdk-table-cell-color: #e5e7eb;
    --osdk-typography-color-default-rest: #f9fafb;
    --osdk-typography-color-muted: #9ca3af;

    /* Borders */
    --osdk-table-border: 1px solid #374151;
    --osdk-surface-border-color-default: #374151;

    /* Backgrounds */
    --osdk-surface-background-color-default: #1f2937;
    --osdk-surface-background-color-default-hover: #374151;
  }
}
```

Then toggle dark mode by setting the `data-theme` attribute:

```tsx
<div data-theme="dark">
  <ObjectTable objectType={Employee} />
</div>
```

:::tip Best Practice
Use the `custom.theme` layer for your overrides to ensure they have the correct specificity and won't be overridden by component styles.
:::

:::note Token Reference
For a complete list of available CSS variables, see the `@osdk/react-components-styles` package or inspect the computed styles in your browser's DevTools.
:::

## Related

- [useOsdkObjects](../react/querying-data.md#useosdkobjects) - The underlying hook used to fetch data
- [@osdk/react Getting Started](../react/getting-started.md) - Setup guide for OSDK React
- [Advanced Queries](../react/advanced-queries.md) - Learn about derived properties and complex queries
