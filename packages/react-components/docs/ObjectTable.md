# ObjectTable

A comprehensive guide for using the ObjectTable component from `@osdk/react-components`.

## Prerequisites

Before using ObjectTable, make sure you have completed the library setup described in the [README](../README.md#installation).

## Table of Contents

- [Basic Usage](#basic-usage)
- [Props Reference](#props-reference)
- [Column Definitions](#column-definitions)
- [Examples](#examples)
- [Advanced Features](#advanced-features)
- [TypeScript Tips](#typescript-tips)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Theming](#theming)

## Import

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
```

## Basic Usage

### Minimal Example

The simplest way to use ObjectTable is with just an object type:

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import { Office } from "@YourApp/sdk";

function OfficesPage() {
  return (
    <ObjectTable
      objectType={Office}
    />
  );
}
```

This displays all properties of the Office object type in a table with default settings.

### With Selection

Add selection mode to enable row selection:

```typescript
<ObjectTable
  objectType={Office}
  selectionMode="single" // or "multiple" or "none" (default)
/>;
```

## Props Reference

### Core Props

| Prop         | Type     | Required | Default | Description                     |
| ------------ | -------- | -------- | ------- | ------------------------------- |
| `objectType` | `Q`      | ✅       | -       | The OSDK object type to display |
| `className`  | `string` | ❌       | -       | CSS class for custom styling    |
| `rowHeight`  | `number` | ❌       | `40`    | Height of each row in pixels    |

### Column Management

| Prop                        | Type                           | Default | Description                                               |
| --------------------------- | ------------------------------ | ------- | --------------------------------------------------------- |
| `columnDefinitions`         | `Array<ColumnDefinition>`      | -       | Ordered list of columns. If omitted, shows all properties |
| `onColumnVisibilityChanged` | `(newStates) => void`          | -       | Called when column visibility changes                     |
| `onColumnsPinnedChanged`    | `(newStates) => void`          | -       | Called when column pinning changes                        |
| `onColumnResize`            | `(columnId, newWidth) => void` | -       | Called when a column is resized                           |

### Filtering

| Prop              | Type                 | Default | Description                        |
| ----------------- | -------------------- | ------- | ---------------------------------- |
| `filterable`      | `boolean`            | `true`  | Whether users can filter the table |
| `filter`          | `WhereClause<Q>`     | -       | Current filter (controlled mode)   |
| `onFilterChanged` | `(newWhere) => void` | -       | Required when `filter` is provided |

### Sorting

| Prop               | Type                           | Default | Description                         |
| ------------------ | ------------------------------ | ------- | ----------------------------------- |
| `orderable`        | `boolean`                      | `true`  | Whether users can sort columns      |
| `defaultOrderBy`   | `Array<{property, direction}>` | -       | Initial sort order (uncontrolled)   |
| `orderBy`          | `Array<{property, direction}>` | -       | Current sort order (controlled)     |
| `onOrderByChanged` | `(newOrderBy) => void`         | -       | Required when `orderBy` is provided |

### Row Selection

| Prop             | Type                               | Default  | Description                                 |
| ---------------- | ---------------------------------- | -------- | ------------------------------------------- |
| `selectionMode`  | `"single" \| "multiple" \| "none"` | `"none"` | Selection mode. "multiple" shows checkboxes |
| `selectedRows`   | `PrimaryKeyType<Q>[]`              | -        | Selected rows (controlled mode)             |
| `onRowSelection` | `(selectedRowIds) => void`         | -        | Required when `selectedRows` is provided    |

### Interactions

| Prop                    | Type                            | Description                                  |
| ----------------------- | ------------------------------- | -------------------------------------------- |
| `onRowClick`            | `(object) => void`              | Called when a row is clicked                 |
| `renderCellContextMenu` | `(row, cellValue) => ReactNode` | Custom context menu for right-click on cells |

## Column Definitions

### Column Definition Structure

```typescript
type ColumnDefinition<Q, RDPs, FunctionColumns> = {
  locator: ColumnDefinitionLocator<Q, RDPs, FunctionColumns>;
  isVisible?: boolean; // default: true
  pinned?: "left" | "right" | "none"; // default: "none"
  width?: number; // Fixed width in pixels
  minWidth?: number; // Minimum width
  maxWidth?: number; // Maximum width
  resizable?: boolean; // Allow column resizing
  orderable?: boolean; // Allow column sorting
  filterable?: boolean; // Allow column filtering
  renderCell?: (object, locator) => React.ReactNode; // Custom cell renderer
  renderHeader?: () => React.ReactNode; // Custom header renderer
};
```

### Column Locator Types

#### 1. Property Column

Displays a property from the object type:

```typescript
{
  type: "property",
  id: "propertyName"  // Must be a valid property key
}
```

#### 2. Derived Property (RDP) Column

Displays a computed property:

```typescript
{
  type: "rdp",
  id: "customPropertyName",
  creator: DerivedProperty.creator(/* ... */)
}
```

#### 3. Function Column

Displays custom computed values:

```typescript
{
  type: "function",
  id: "functionName"  // Must match a key in FunctionColumns type
}
```

## Examples

### Example 1: Basic Table with Custom Columns

```typescript
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

function EmployeesTable() {
  const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
    {
      locator: { type: "property", id: "fullName" },
      pinned: "left",
      width: 200,
    },
    {
      locator: { type: "property", id: "email" },
      width: 250,
    },
    {
      locator: { type: "property", id: "jobTitle" },
    },
    {
      locator: { type: "property", id: "department" },
    },
  ];

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
```

### Example 2: Table with Multiple Selection

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

function EmployeesTable() {
  return (
    <ObjectTable
      objectType={Employee}
      selectionMode="multiple"
    />
  );
}
```

### Example 3: Table with Default Sorting

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

function EmployeesTable() {
  return (
    <ObjectTable
      objectType={Employee}
      defaultOrderBy={[{
        property: "firstFullTimeStartDate",
        direction: "desc",
      }]}
    />
  );
}
```

### Example 4: Custom Cell Rendering

```typescript
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

function EmployeesTable() {
  const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
    {
      locator: { type: "property", id: "fullName" },
      renderCell: (employee) => (
        <strong style={{ color: "blue" }}>
          {employee.fullName}
        </strong>
      ),
    },
    {
      locator: { type: "property", id: "firstFullTimeStartDate" },
      renderCell: (employee) => {
        const date = employee.firstFullTimeStartDate;
        return date ? new Date(date).toLocaleDateString() : "-";
      },
    },
  ];

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
```

### Example 5: Custom Header Rendering

```typescript
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

function EmployeesTable() {
  const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
    {
      locator: { type: "property", id: "fullName" },
      renderHeader: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>👤</span>
          <span>Employee Name</span>
        </div>
      ),
    },
  ];

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
```

### Example 6: Hidden Columns

Use `isVisible: false` to define columns that are hidden by default but can be toggled visible by the user:

```typescript
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
  },
  {
    locator: { type: "property", id: "email" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false, // Hidden by default
  },
];
```

### Example 7: Context Menu on Cell Right-Click

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

function EmployeesTable() {
  const renderCellContextMenu = (employee: Employee, cellValue: unknown) => (
    <div
      style={{
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "8px",
      }}
    >
      <div onClick={() => console.log("View", employee.fullName)}>
        View Details
      </div>
      <div onClick={() => console.log("Edit", employee.fullName)}>
        Edit Employee
      </div>
      <div onClick={() => navigator.clipboard.writeText(String(cellValue))}>
        Copy Value
      </div>
    </div>
  );

  return (
    <ObjectTable
      objectType={Employee}
      renderCellContextMenu={renderCellContextMenu}
    />
  );
}
```

### Example 8: Row Click Handler

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";
import { useRouter } from "next/router";

function EmployeesTable() {
  const router = useRouter();

  const handleRowClick = (employee: Employee) => {
    router.push(`/employees/${employee.$primaryKey}`);
  };

  return (
    <ObjectTable
      objectType={Employee}
      onRowClick={handleRowClick}
    />
  );
}
```

### Example 9: Derived Property (RDP) Column

```typescript
import { DerivedProperty } from "@osdk/client";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

type RDPs = {
  managerName: string | undefined;
};

function EmployeesTable() {
  const columnDefinitions: Array<ColumnDefinition<typeof Employee, RDPs>> = [
    {
      locator: { type: "property", id: "fullName" },
    },
    {
      locator: {
        type: "rdp",
        id: "managerName",
        creator: DerivedProperty.creator<typeof Employee, string | undefined>(
          (base) =>
            base.lead.select({
              fullName: true,
            }),
          (pivot) => pivot?.fullName,
        ),
      },
      renderHeader: () => <span>Manager</span>,
    },
  ];

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
```

### Example 10: Controlled Sorting

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";
import { useState } from "react";

function EmployeesTable() {
  const [orderBy, setOrderBy] = useState<
    Array<{
      property: keyof Employee;
      direction: "asc" | "desc";
    }>
  >([
    { property: "fullName", direction: "asc" },
  ]);

  return (
    <ObjectTable
      objectType={Employee}
      orderBy={orderBy}
      onOrderByChanged={setOrderBy}
    />
  );
}
```

### Example 11: Controlled Row Selection

```typescript
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";
import { useState } from "react";

function EmployeesTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  return (
    <div>
      <div>Selected: {selectedRows.length} employees</div>
      <ObjectTable
        objectType={Employee}
        selectionMode="multiple"
        selectedRows={selectedRows}
        onRowSelection={setSelectedRows}
      />
    </div>
  );
}
```

### Example 12: Complete Example from PeopleApp

This is a real-world example from the OSDK test application:

```typescript
import { DerivedProperty } from "@osdk/client";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

type RDPs = {
  managerName: string | undefined;
};

function EmployeesTable() {
  const columnDefinitions: Array<ColumnDefinition<typeof Employee, RDPs>> = [
    {
      locator: { type: "property", id: "fullName" },
      renderHeader: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>👤</span>
          <span>Full Name</span>
        </div>
      ),
      pinned: "left",
    },
    {
      locator: { type: "property", id: "jobTitle" },
      isVisible: false,
    },
    {
      locator: { type: "property", id: "firstFullTimeStartDate" },
      width: 180,
      renderCell: (employee) => {
        const date = employee.firstFullTimeStartDate;
        if (!date) return "-";
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      },
    },
    {
      locator: {
        type: "rdp",
        id: "managerName",
        creator: DerivedProperty.creator<typeof Employee, string | undefined>(
          (base) =>
            base.lead.select({
              fullName: true,
            }),
          (pivot) => pivot?.fullName,
        ),
      },
      renderHeader: () => <span>Manager</span>,
    },
  ];

  const renderCellContextMenu = (employee: Employee, cellValue: unknown) => (
    <div
      style={{
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <div
        onClick={() => console.log("View", employee.fullName)}
        style={{ cursor: "pointer", padding: "4px 8px" }}
      >
        View Details
      </div>
      <div
        onClick={() => navigator.clipboard.writeText(String(cellValue))}
        style={{ cursor: "pointer", padding: "4px 8px" }}
      >
        Copy Value
      </div>
    </div>
  );

  return (
    <ObjectTable<typeof Employee, RDPs>
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      selectionMode="multiple"
      renderCellContextMenu={renderCellContextMenu}
      defaultOrderBy={[{
        property: "firstFullTimeStartDate",
        direction: "desc",
      }]}
    />
  );
}
```

## Advanced Features

### Column Pinning

Pin columns to the left or right side of the table:

```typescript
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    pinned: "left", // Stays visible when scrolling horizontally
  },
  {
    locator: { type: "property", id: "email" },
    pinned: "right",
  },
];
```

### Column Resizing

Control whether columns can be resized:

```typescript
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    resizable: true,
    minWidth: 150,
    maxWidth: 500,
  },
];
```

Listen to resize events:

```typescript
<ObjectTable
  objectType={Employee}
  onColumnResize={(columnId, newWidth) => {
    console.log(`Column ${columnId} resized to ${newWidth}px`);
  }}
/>;
```

### Disable Filtering or Sorting

Disable filtering or sorting globally:

```typescript
<ObjectTable
  objectType={Employee}
  filterable={false}
  orderable={false}
/>;
```

Or per column:

```typescript
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    orderable: false,
    filterable: false,
  },
];
```

### Custom Row Height

Adjust row height for better readability:

```typescript
<ObjectTable
  objectType={Employee}
  rowHeight={56} // Larger rows for more content
/>;
```

### Loading and Empty States

The ObjectTable automatically handles:

- **Loading state**: Shows skeleton rows while data is loading
- **Empty state**: Shows appropriate message when no data matches filters
- **Error state**: Displays error messages if data fetching fails

No additional configuration needed - these states are built-in!

### Infinite Scrolling

The ObjectTable automatically implements infinite scroll pagination. As users scroll down, more data is loaded seamlessly. No configuration required!

## TypeScript Tips

### Type-Safe Column Definitions

Use TypeScript generics to ensure type safety:

```typescript
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";

type RDPs = {
  managerName: string | undefined;
  yearsOfService: number;
};

const columnDefinitions: Array<ColumnDefinition<typeof Employee, RDPs>> = [
  // TypeScript will validate property names and types
  {
    locator: { type: "property", id: "fullName" }, // ✅ Valid
  },
  {
    locator: { type: "property", id: "invalidProp" }, // ❌ Type error
  },
];
```

### Inferring Types from Object Type

Let TypeScript infer types from your OSDK object type:

```typescript
import type { PropertyKeys } from "@osdk/client";
import { Employee } from "@YourApp/sdk";

// PropertyKeys gives you all valid property names
type EmployeeProps = PropertyKeys<typeof Employee>;
```

## Best Practices

1. **Define columns explicitly** - Use `columnDefinitions` to control column order and visibility rather than relying on defaults
2. **Pin important columns** - Pin key identifier columns (like name or ID) to the left for better UX
3. **Set reasonable widths** - Define `minWidth` and `maxWidth` to prevent columns from becoming too narrow or wide
4. **Use controlled state when needed** - Use controlled sorting/filtering when you need to sync with URL params or external state
5. **Custom cell renderers for formatting** - Use `renderCell` for dates, numbers, or complex content rather than displaying raw values
6. **Provide context menus** - Enhance UX by providing relevant actions via `renderCellContextMenu`
7. **Handle row clicks thoughtfully** - Use `onRowClick` for navigation but avoid if you have selection enabled to prevent conflicts

## Troubleshooting

### Table not displaying data

- Ensure your OSDK client is properly configured
- Check that the object type is imported correctly
- Verify network requests in browser DevTools

### Type errors with columnDefinitions

- Ensure you're using the correct type parameters: `ColumnDefinition<typeof YourObjectType, RDPs, FunctionColumns>`
- Property IDs must exactly match property names from your object type

### Selection not working

- Ensure `selectionMode` is set to "single" or "multiple"
- For controlled mode, provide both `selectedRows` and `onRowSelection`

### Custom rendering not appearing

- Ensure `renderCell` returns valid React elements
- Check browser console for errors in your render function

### Table has no styling or looks broken

- Ensure you've imported `@osdk/react-components-styles` in your main CSS file
- Check that the CSS import is in the correct location (application entry point)
- Verify the CSS layer syntax is correct: `@layer osdk.tokens;` must come before the import
- Check browser DevTools to confirm CSS custom properties are loaded

## Theming

The ObjectTable (and all OSDK components) can be themed using CSS custom properties from the `@osdk/react-components-styles` package.

### Understanding Token Scopes

**OSDK Tokens (`--osdk-*`)**

- All tokens used in OSDK components are prefixed with `--osdk-`
- Any Blueprint token used in OSDK components is mapped to an `--osdk-*` token
- Override these to theme **OSDK components only**
- Safe to customize without affecting other Blueprint components in your app

**Blueprint Tokens (`--bp-*`)**

- Core design tokens from Blueprint design system
- Override these to theme **both Blueprint and OSDK components**
- Use this for consistent theming across your entire application

### Customization Strategies

#### 1. Override OSDK Tokens Only

Change OSDK component styling without affecting other Blueprint components in your app:

```css
@layer osdk.tokens, user.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

@layer user.theme {
  :root {
    /* Only affects OSDK table headers */
    --osdk-table-header-bg: #f0f0f0;
    --osdk-table-border-color: #e0e0e0;
    --osdk-table-row-hover-bg: #f9fafb;

    /* Only affects OSDK components using primary intent */
    --osdk-intent-primary-rest: #2563eb;
    --osdk-intent-primary-hover: #1d4ed8;
  }
}
```

#### 2. Override Blueprint Tokens

Change both Blueprint and OSDK components for consistent theming:

```css
@layer osdk.tokens, user.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

@layer user.theme {
  :root {
    /* Affects ALL components (Blueprint + OSDK) using primary intent */
    --bp-intent-primary-rest: #2563eb;
    --bp-intent-primary-hover: #1d4ed8;
    --bp-intent-primary-active: #1e40af;

    /* Affects all spacing and borders across the design system */
    --bp-surface-spacing: 8px;
    --bp-surface-border-radius: 8px;
  }
}
```

#### 3. Scoped Overrides for Specific Tables

Apply custom styles to specific ObjectTable instances using the `className` prop:

```typescript
// Component
<ObjectTable
  objectType={Employee}
  className="custom-employee-table"
/>;
```

```css
/* Styles */
.custom-employee-table {
  --osdk-table-header-bg: #1e40af;
  --osdk-table-header-text-color: white;
  --osdk-table-row-hover-bg: #dbeafe;
}
```

### Common Theming Examples

#### Dark Mode

```css
@layer user.theme {
  [data-theme="dark"] {
    --osdk-table-header-bg: #1f2937;
    --osdk-table-border-color: #374151;
    --osdk-table-row-hover-bg: #374151;
    --osdk-surface-bg: #111827;
    --osdk-text-primary: #f9fafb;
  }
}
```

#### Compact Table

```css
.compact-table {
  --osdk-surface-spacing: 4px;
  --osdk-table-cell-padding: 8px;
}
```

```typescript
<ObjectTable
  objectType={Employee}
  className="compact-table"
  rowHeight={32}
/>;
```

#### Custom Brand Colors

```css
@layer user.theme {
  :root {
    /* Use your brand's primary color */
    --bp-intent-primary-rest: #7c3aed;
    --bp-intent-primary-hover: #6d28d9;
    --bp-intent-primary-active: #5b21b6;
  }
}
```

### Available CSS Variables

For a complete reference of all available CSS tokens for theming, see:

- [@osdk/react-components-styles CSS Variables Documentation](../../react-components-styles/CSS_VARIABLES.md)
- [@osdk/react-components-styles README](../../react-components-styles/README.md)

### Accessibility Note

When overriding theme tokens, ensure your custom colors meet accessibility standards:

- **Color contrast ratios** (WCAG AA): 4.5:1 for normal text, 3:1 for large text
- **Readable text** on all background colors
- **Clear visual distinction** between interactive states (rest, hover, active, disabled)

The default tokens are designed to meet WCAG AA standards.

## Additional Resources

- [ObjectTable API Reference](../src/object-table/ObjectTableApi.ts)
- [ObjectTable Implementation](../src/object-table/ObjectTable.tsx)
- [PeopleApp Examples](../../e2e.sandbox.peopleapp/src/app/employees/EmployeesTable.tsx)
- [@osdk/react Documentation](../../docs/react/getting-started.md)
