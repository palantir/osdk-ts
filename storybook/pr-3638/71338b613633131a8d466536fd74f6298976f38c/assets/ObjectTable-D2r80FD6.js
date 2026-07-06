import{j as e}from"./iframe-B79O0zQM.js";import{useMDXComponents as r}from"./index-BA85e0i_.js";import{b as i,c as l}from"./blocks-DBPf5Zmz.js";import"./preload-helper-CIltFqCT.js";import"./index-38KKGp5R.js";import"./index-8YydoI3z.js";import"./index-Df9A7Mki.js";const a=`# ObjectTable

A comprehensive guide for using the ObjectTable component from \`@osdk/react-components\`.

## Prerequisites

Before using ObjectTable, make sure you have completed the library setup described in [Prerequisites](./Prerequisites.md), including:

- Installing the required dependencies
- Wrapping your app with \`OsdkProvider\`
- Adding the CSS imports and configuring \`@layer\` order

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

\`\`\`typescript
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type {
  ColumnDefinition,
  EditFieldConfig,
} from "@osdk/react-components/experimental/object-table";
\`\`\`

## Basic Usage

:::note About \`@my/osdk\`
\`@my/osdk\` is a placeholder for **your generated SDK package** (e.g. \`@your-app/sdk\`). Replace it with the actual package name in your project.
:::

### Minimal Example

The simplest way to use ObjectTable is with just an object type:

\`\`\`typescript
import { Office } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function OfficesPage() {
  return (
    <ObjectTable
      objectType={Office}
    />
  );
}
\`\`\`

This displays all properties of the Office object type in a table with default settings.

### With Selection

Add selection mode to enable row selection:

\`\`\`typescript
<ObjectTable
  objectType={Office}
  selectionMode="single" // or "multiple" or "none" (default)
/>;
\`\`\`

## Props Reference

### Core Props

| Prop            | Type      | Required | Default | Description                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | --------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`objectType\`    | \`Q\`       | ✅       | -       | The OSDK object type to display                                                                                                                                                                                                                                                                                                                                                     |
| \`className\`     | \`string\`  | ❌       | -       | CSS class for custom styling                                                                                                                                                                                                                                                                                                                                                        |
| \`rowHeight\`     | \`number\`  | ❌       | \`40\`    | Height of each row in pixels                                                                                                                                                                                                                                                                                                                                                        |
| \`streamUpdates\` | \`boolean\` | ❌       | \`false\` | When \`true\`, subscribes via websocket so the table automatically updates as matching objects are added, updated, or removed in Foundry. Cannot be used together with \`pivotTo\` or \`withProperties\` — the server does not support websocket subscriptions for link-traversal or derived-property queries, so those queries still fetch normally but won't receive real-time updates. |

### Column Management

| Prop                        | Type                           | Default | Description                                               |
| --------------------------- | ------------------------------ | ------- | --------------------------------------------------------- |
| \`columnDefinitions\`         | \`Array<ColumnDefinition>\`      | -       | Ordered list of columns. If omitted, shows all properties |
| \`onColumnVisibilityChanged\` | \`(newStates) => void\`          | -       | Called when column visibility changes                     |
| \`onColumnsPinnedChanged\`    | \`(newStates) => void\`          | -       | Called when column pinning changes                        |
| \`onColumnResize\`            | \`(columnId, newWidth) => void\` | -       | Called when a column is resized                           |

### Filtering

> **Note:** The table filtering UI is not yet supported. However, you can still pass a \`filter\` prop to programmatically filter the objects displayed in the table.

| Prop              | Type                   | Default | Description                                                      |
| ----------------- | ---------------------- | ------- | ---------------------------------------------------------------- |
| \`enableFiltering\` | \`boolean\`              | \`true\`  | Whether filtering menu items are shown in the column header menu |
| \`filter\`          | \`WhereClause<Q, RDPs>\` | -       | Current where clause filter (controlled mode)                    |
| \`onFilterChanged\` | \`(newWhere) => void\`   | -       | Required when \`filter\` is provided                               |

### Sorting

| Prop               | Type                           | Default | Description                          |
| ------------------ | ------------------------------ | ------- | ------------------------------------ |
| \`enableOrdering\`   | \`boolean\`                      | \`true\`  | Whether sorting menu items are shown |
| \`defaultOrderBy\`   | \`Array<{property, direction}>\` | -       | Initial sort order (uncontrolled)    |
| \`orderBy\`          | \`Array<{property, direction}>\` | -       | Current sort order (controlled)      |
| \`onOrderByChanged\` | \`(newOrderBy) => void\`         | -       | Required when \`orderBy\` is provided  |

### Column Features

| Prop                   | Type      | Default | Description                                     |
| ---------------------- | --------- | ------- | ----------------------------------------------- |
| \`enableOrdering\`       | \`boolean\` | \`true\`  | Whether sorting menu items are shown            |
| \`enableColumnPinning\`  | \`boolean\` | \`true\`  | Whether pinning menu items are shown            |
| \`enableColumnResizing\` | \`boolean\` | \`true\`  | Whether resize menu item is shown               |
| \`enableColumnConfig\`   | \`boolean\` | \`true\`  | Whether column configuration menu item is shown |

#### Hiding Header Menu Items

Each column header has a menu with items for sorting, filtering, pinning, resizing, and column configuration. You can hide specific menu items by setting the corresponding \`enable...\` prop to \`false\`:

\`\`\`typescript
<ObjectTable
  objectType={Employee}
  enableFiltering={false} // Hides "Filter" menu items from column headers
  enableOrdering={false} // Hides "Sort" menu items from column headers
  enableColumnPinning={false} // Hides "Pin" menu items from column headers
  enableColumnResizing={false} // Hides "Resize" menu item from column headers
  enableColumnConfig={false} // Hides "Column configuration" menu item from column headers
/>;
\`\`\`

### Row Selection

| Prop                    | Type                                     | Default  | Description                                                                                                                                                                                                 |
| ----------------------- | ---------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`selectionMode\`         | \`"single" \\| "multiple" \\| "none"\`       | \`"none"\` | Selection mode. "multiple" shows checkboxes                                                                                                                                                                 |
| \`selectedRows\`          | \`PrimaryKeyType<Q>[]\`                    | -        | Selected rows (controlled mode)                                                                                                                                                                             |
| \`isAllSelected\`         | \`boolean\`                                | -        | Indicates all rows are selected (controlled mode only)                                                                                                                                                      |
| \`onRowSelectionChanged\` | \`(change: RowSelectionChange) => void\`   | -        | **Preferred.** Fires with \`{ selectedRows, isSelectAll, objectSet }\`. The \`objectSet\` is the underlying set when "select all" is active, otherwise narrowed by \`$primaryKey\`. See [example](#row-selection) |
| \`onRowSelection\`        | \`(selectedRowIds, isSelectAll?) => void\` | -        | **Deprecated** — use \`onRowSelectionChanged\`. Still fires for backwards compatibility. Refires with the expanded id list after "select all" + scroll                                                        |

### Interactions

| Prop                    | Type                                               | Description                                                                                                                          |
| ----------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| \`onRowClick\`            | \`(object) => void\`                                 | Called when a row is clicked                                                                                                         |
| \`renderCellContextMenu\` | \`(row, cellValue) => ReactNode\`                    | Custom context menu for right-click on cells                                                                                         |
| \`renderEmptyState\`      | \`() => ReactNode\`                                  | Render override for the empty state. Called when the table has no rows and no error. Defaults to a "No Data" indicator               |
| \`getRowAttributes\`      | \`(rowData) => Record<string, string \\| undefined>\` | Extra HTML attributes (typically \`data-*\`) applied to each \`<tr>\`. See [Row Attributes](#row-attributes-and-conditional-row-styling) |
| \`tableRef\`              | \`React.Ref<ObjectTableHandle>\`                     | Imperative handle for programmatic actions such as exporting data. See [Exporting Data](#exporting-data)                             |

### Cell Editing

> The editable feature allows inline editing with validation and bulk submission capabilities. Editable cells support text inputs, number inputs, and dropdown selectors.

| Prop                 | Type                                          | Description                                                                                                                                                                     |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`editMode\`           | \`"always" \\| "manual"\`                        | Controls edit mode behavior. "always": Table is always in edit mode. "manual": User toggles edit mode on/off. Default: "manual"                                                 |
| \`onCellValueChanged\` | \`(info: CellEditInfo) => void\`                | Called when a cell value is edited. The info object contains rowId, columnId, newValue, oldValue, and originalRowData                                                           |
| \`onSubmitEdits\`      | \`(edits: CellEditInfo[]) => Promise<boolean>\` | When provided, shows a "Submit Edits" button in the edit footer. Return true on success                                                                                         |
| \`showEditFooter\`     | \`boolean\`                                     | Whether to render the bottom edit footer (Edit Table / Cancel / Submit Edits). Defaults to \`true\`. When \`false\`, the "Edit Table" and "Submit Edits" buttons will not be shown. |

## Column Definitions

### Column Definition Structure

\`\`\`typescript
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
  editable?: boolean | ((rowData) => boolean); // Allow inline editing for this column. Pass a function to make it conditional per row
  editFieldConfig?: EditFieldConfig; // Optional editor component config (e.g. dropdown)
  validateEdit?: (value: unknown) => Promise<string | undefined>; // Custom validation function for cell edits
  renderCell?: (object, locator) => React.ReactNode; // Custom cell renderer
  columnName?: string; // Custom column name for the header
  renderHeader?: () => React.ReactNode; // Custom header renderer (takes precedence over columnName)
};
\`\`\`

#### \`editable\`

\`editable\` accepts either a boolean or a function \`(rowData) => boolean\`:

- \`editable: true\` — every cell in the column is editable.
- \`editable: (rowData) => boolean\` — configurable per row. The function receives the row's data and returns whether the cell should be editable.

\`\`\`typescript
{
  locator: { type: "property", id: "salary" },
  // Only editable for active employees
  editable: (employee) => employee.status === "Active",
}
\`\`\`

When \`editable\` is a function, the column is still considered "potentially editable" at the table level — the bottom edit-mode bar is shown so users can enter and exit edit mode. The per-row predicate decides whether each cell renders the editor or the read-only value.

#### \`editFieldConfig\`

When \`editable\` is truthy, columns default to a text or number input (auto-detected from the property type). Use \`editFieldConfig\` to specify a different editor component.

**Supported editor components:**

| \`fieldComponent\` | Description                              | Renders                                                      |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------ |
| \`"DROPDOWN"\`     | A select dropdown or searchable combobox | \`Select\` (default) or \`Combobox\` (when \`isSearchable: true\`) |
| \`"DATE_PICKER"\`  | A date or datetime picker                | \`DatetimePicker\`                                             |

Without \`editFieldConfig\`, editable columns use a text input for string properties and a number input for numeric properties (\`double\`, \`integer\`, \`long\`, \`float\`, \`decimal\`, \`byte\`, \`short\`).

\`getFieldComponentProps\` receives the row's data and returns the props passed to the field component, so editor configuration can vary per row (e.g. dropdown items computed from the row's state).

\`\`\`typescript
{
  locator: { type: "property", id: "department" },
  editable: true,
  editFieldConfig: {
    fieldComponent: "DROPDOWN",
    getFieldComponentProps: (employee) => ({
      // Allow the user to pick from departments compatible with the
      // employee's role
      items: getCompatibleDepartments(employee.role),
    }),
  },
}
\`\`\`

**Dropdown \`fieldComponentProps\` (returned from \`getFieldComponentProps\`):**

| Prop                | Type                      | Default        | Description                                              |
| ------------------- | ------------------------- | -------------- | -------------------------------------------------------- |
| \`items\`             | \`V[]\`                     | (required)     | Available items for the dropdown                         |
| \`isSearchable\`      | \`boolean\`                 | \`false\`        | Renders a searchable combobox instead of a select        |
| \`placeholder\`       | \`string\`                  | -              | Placeholder text when no value is selected               |
| \`itemToStringLabel\` | \`(item: V) => string\`     | \`String(item)\` | Converts an item to a display string                     |
| \`itemToKey\`         | \`(item: V) => string\`     | -              | Returns a unique key for each item (used as React \`key\`) |
| \`isItemEqual\`       | \`(a: V, b: V) => boolean\` | \`Object.is\`    | Custom equality check (required when items are objects)  |
| \`isMultiple\`        | \`boolean\`                 | \`false\`        | Whether multiple values can be selected                  |

#### \`columnName\` vs \`renderHeader\`

- **\`columnName\`**: If provided, this string is used as the column header text. If not provided, property columns default to the property's \`displayName\`, and other column types default to the \`id\`.
- **\`renderHeader\`**: If provided, this function renders the header component. When both \`columnName\` and \`renderHeader\` are provided, \`renderHeader\` takes precedence in the table header, but \`columnName\` is still used in other places where the column name is displayed (e.g., the column configuration dialog, multi-sort dialog).

### Column Locator Types

#### 1. Property Column

Displays a property from the object type:

\`\`\`typescript
{
  type: "property",
  id: "propertyName"  // Must be a valid property key
}
\`\`\`

#### 2. Derived Property (RDP) Column

Displays a computed property:

\`\`\`typescript
{
  type: "rdp",
  id: "customPropertyName",
  creator: DerivedProperty.creator(/* ... */)
}
\`\`\`

#### 3. Function Column

Displays values computed by an OSDK function (query). This is equivalent to Workshop's [function-backed columns](https://www.palantir.com/docs/foundry/workshop/widgets-object-table/#function-backed-columns). The function must accept an ObjectSet parameter and return a map of results keyed per object.

\`\`\`typescript
{
  type: "function",
  id: "columnKey",                // Key in your FunctionColumns type map
  queryDefinition: myQuery,       // The OSDK query definition to execute
  getFunctionParams: (objectSet) => ({ objectSetKey: objectSet }),
  getKey: (object) => \`\${object.$objectType}:\${object.$primaryKey}\`, // The key to index the value of an object
  getValue: (cellData) => cellData?.status,  // Getter to extract the value from the raw data
  dedupeIntervalMs: 5 * 60 * 1_000, // The stale time of your data, if multiple requests happen within this interval, no new network call will be made
}
\`\`\`

| Property            | Type                     | Required | Description                                                                                                                                                                   |
| ------------------- | ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`type\`              | \`"function"\`             | Yes      | Identifies this as a function column                                                                                                                                          |
| \`id\`                | \`keyof FunctionColumns\`  | Yes      | Key in the FunctionColumns type map                                                                                                                                           |
| \`queryDefinition\`   | \`QueryDefinition\`        | Yes      | The OSDK query definition to execute                                                                                                                                          |
| \`getFunctionParams\` | \`(objectSet) => params\`  | Yes      | Computes function parameters from the current ObjectSet                                                                                                                       |
| \`getKey\`            | \`(object) => string\`     | Yes      | Generates a lookup key for each object in the result map                                                                                                                      |
| \`getValue\`          | \`(cellData?) => unknown\` | No       | Extracts a display value from the raw function result per object. \`cellData\` is \`undefined\` when the object has no result (e.g., loading or missing from the function output) |
| \`dedupeIntervalMs\`  | \`number\`                 | No       | Minimum time (ms) between re-fetches of the same function with the same parameters. Defaults to \`300_000\` (5 minutes)                                                         |

#### 4. Custom Column

Displays header and cell with the provided custom renderers.

\`\`\`typescript
{
  type: "custom",
  id: "columnName"
}
\`\`\`

## Examples

### Example 1: Basic Table with Custom Column Definitions

\`\`\`typescript
import { Employee } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

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

function EmployeesTable() {
  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
\`\`\`

### Example 2: Table with Multiple Selection

\`\`\`typescript
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function EmployeesTable() {
  return (
    <ObjectTable
      objectType={Employee}
      selectionMode="multiple"
    />
  );
}
\`\`\`

### Example 3: Table with Default Sorting

\`\`\`typescript
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

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
\`\`\`

### Example 4: Custom Cell Rendering

\`\`\`typescript
import { Employee } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

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

function EmployeesTable() {
  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
\`\`\`

### Example 5: Custom Header Rendering

\`\`\`typescript
import { Employee } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

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

function EmployeesTable() {
  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
\`\`\`

### Example 6: Hidden Columns

Use \`isVisible: false\` to define columns that are hidden by default but can be toggled visible by the user:

\`\`\`typescript
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
\`\`\`

### Example 7: Context Menu on Cell Right-Click

\`\`\`typescript
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

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
\`\`\`

### Example 8: Row Click Handler

\`\`\`typescript
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { useRouter } from "next/router";

function EmployeesTable() {
  const router = useRouter();

  const handleRowClick = (employee: Employee) => {
    router.push(\`/employees/\${employee.$primaryKey}\`);
  };

  return (
    <ObjectTable
      objectType={Employee}
      onRowClick={handleRowClick}
    />
  );
}
\`\`\`

### Example 9: Filtering on Object Properties and Derived Properties (RDPs)

You can filter by object properties and derived properties by including them in the \`WhereClause\`:

\`\`\`typescript
import { Employee } from "@my/osdk";
import { DerivedProperty } from "@osdk/client";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

type RDPs = {
  managerName: string | undefined;
};

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

function EmployeesWithManagerTable() {
  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      filter={{
        fullName: { $containsAnyTerm: "Paul" },
        managerName: { $eq: "Jane Smith" },
      }}
    />
  );
}
\`\`\`

### Example 10: Controlled Sorting

\`\`\`typescript
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
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
\`\`\`

### Example 11: Controlled Row Selection

\`\`\`typescript
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { useState } from "react";

function EmployeesTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleRowSelection = (
    selectedRowIds: string[],
    isSelectAll?: boolean,
  ) => {
    if (isSelectAll) {
      if (selectedRowIds.length === 0) {
        setIsAllSelected(false);
        setSelectedRows([]);
      } else {
        setIsAllSelected(true);
        setSelectedRows([]);
      }
    } else {
      setIsAllSelected(false);
      setSelectedRows(selectedRowIds);
    }
  };

  return (
    <div>
      <div>Selected: {selectedRows.length} employees</div>
      <ObjectTable
        objectType={Employee}
        selectionMode="multiple"
        selectedRows={selectedRows}
        isAllSelected={isAllSelected}
        onRowSelection={handleRowSelection}
      />
    </div>
  );
}
\`\`\`

**Key points about select all behavior:**

- The \`isSelectAll\` parameter in \`onRowSelection\` indicates whether the change was triggered by the "select all" checkbox
- When \`isAllSelected\` is \`true\`, the table shows all rows as selected regardless of the \`selectedRows\` array content
- This allows efficient handling of "select all" without loading all object IDs
- Individual row selections automatically set \`isAllSelected\` to \`false\`
- After "select all", new rows loaded via scroll (\`fetchMore\`) stay visually checked and \`onRowSelection\` refires with the expanded id list so controlled callers stay in sync

### Listening to selection changes

\`onRowSelectionChanged\` is the preferred callback. It fires with a single payload covering everything you usually need:

\`\`\`typescript
<ObjectTable
  objectType={Employee}
  selectionMode="multiple"
  onRowSelectionChanged={({
    selectedRows,
    isSelectAll,
    objectSet,
  }) => {
    // selectedRows:   loaded row instances currently selected.
    //                 Pages not yet fetched are absent when isSelectAll.
    //                 Use selectedRows.map(r => r.$primaryKey) if you
    //                 need the primary keys.
    // isSelectAll:    true only when the user invoked "select all" (or
    //                 controlled isAllSelected={true}) — NOT just because
    //                 every visible row happens to be checked
    // objectSet:      ObjectSet covering the selection. Full underlying
    //                 set when isSelectAll; otherwise narrowed by
    //                 $primaryKey. \`undefined\` for interface types
    //                 without a resolvable primaryKeyApiName on partial
    //                 or empty selections.
    if (objectSet) {
      void applySomeBulkAction({ targets: objectSet });
    }
  }}
/>;
\`\`\`

#### Migrating from \`onRowSelection\`

The legacy \`onRowSelection(selectedRowIds, isSelectAll?)\` callback is deprecated but still fires for backwards compatibility. The equivalents in \`onRowSelectionChanged\` are:

| Legacy parameter           | New payload field                      |
| -------------------------- | -------------------------------------- |
| \`selectedRowIds\`           | \`selectedRows.map(r => r.$primaryKey)\` |
| \`isSelectAll\` (second arg) | \`isSelectAll\`                          |
| _(not previously exposed)_ | \`selectedRows\`                         |
| _(not previously exposed)_ | \`objectSet\`                            |

### Example 12: Custom Column Type

In a custom column type, you can render anything in the column by passing in renderHeader and renderCell props.

\`\`\`typescript
import { Employee } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: {
      type: "custom",
      id: "Custom Column",
    },
    renderHeader: () => "Custom",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <button onClick={() => alert(\`Clicked \${object["$title"]}\`)}>
          Click me
        </button>
      );
    },
    orderable: false,
  },
];

function EmployeesTable() {
  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
\`\`\`

### Example 13: Editable Table

Enable inline editing with validation, dropdown selectors, and bulk submission:

\`\`\`typescript
import { Employee, updateMultipleEmployees } from "@my/osdk";
import { useOsdkAction } from "@osdk/react";
import {
  type CellEditInfo,
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true, // Default text input
  },
  {
    locator: { type: "property", id: "email" },
    editable: true,
    validateEdit: async (value) => {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(value as string)
        ? undefined
        : "Please enter a valid email address";
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true, // Renders a searchable combobox
        placeholder: "Search job titles…",
      }),
    },
  },
];

function EditableEmployeesTable() {
  const { applyAction } = useOsdkAction(updateMultipleEmployees);

  const handleCellValueChanged = (
    info: CellEditInfo<Employee>,
  ) => {
    console.log("Cell edited:", {
      rowId: info.rowId,
      columnId: info.columnId,
      oldValue: info.oldValue,
      newValue: info.newValue,
      originalRowData: info.originalRowData,
    });
  };

  // When onSubmitEdits is provided, a "Submit Edits" button appears in the table
  const handleSubmitEdits = async (edits: CellEditInfo<Employee>[]) => {
    try {
      // Transform edits array into format expected by your action
      const updates = edits.map(edit => ({
        employeeId: edit.rowId,
        field: edit.columnId,
        value: edit.newValue,
      }));

      await applyAction({ updates });

      // Return true to indicate successful submission
      return true;
    } catch (error) {
      console.error("Failed to save edits:", error);
      // Return false or throw to indicate failure
      return false;
    }
  };

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      editMode="manual" // User can toggle edit mode on/off
      onCellValueChanged={handleCellValueChanged}
      onSubmitEdits={handleSubmitEdits} // Shows "Submit Edits" button
    />
  );
}
\`\`\`

#### Key features of editable tables:

1. **Edit Modes**:
   - \`manual\` (default): User clicks "Edit Table" button to enter edit mode
   - \`always\`: Table is always in edit mode

2. **Editor Components**:
   - **Text input** (default): For string properties
   - **Number input** (auto-detected): For numeric properties (\`double\`, \`integer\`, \`long\`, \`float\`, \`decimal\`, \`byte\`, \`short\`)
   - **Dropdown (Select)**: Fixed list of options via \`editFieldConfig\` with \`fieldComponent: "DROPDOWN"\`
   - **Dropdown (Combobox)**: Searchable list via \`isSearchable: true\` in \`fieldComponentProps\`

3. **Validation**:
   - Use \`validateEdit\` on columns for async validation
   - Validation errors are shown with an error icon and tooltip
   - Works with all editor types including dropdowns

4. **Edit State Management**:
   - Edits are tracked locally until submitted
   - Modified cells are visually highlighted
   - "Cancel" button discards all pending edits

5. **Bulk Submission**:
   - When \`onSubmitEdits\` is provided, a "Submit Edits" button appears
   - All edits are submitted together
   - Return \`true\` from \`onSubmitEdits\` to clear edits after successful submission

#### Per-Row Configuration for Editable and FieldComponentProps

Pass a function to \`editable\` to gate editing per row, and a \`getFieldComponentProps\` function to compute editor props from the row's data:

\`\`\`typescript
import { Employee } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "salary" },
    // Only editable for active employees
    editable: (employee) => employee.status === "Active",
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      // Items depend on the employee's role
      getFieldComponentProps: (employee) => ({
        items: getCompatibleDepartments(employee.role),
      }),
    },
  },
];
\`\`\`

### Example 14: Custom Column Configuration Dialog

Use the \`ColumnConfigDialog\` component to create a custom column configuration experience:

\`\`\`typescript
import { Employee } from "@my/osdk";
import {
  ColumnConfigDialog,
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";
import { useCallback, useMemo, useState } from "react";

const initialColumnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    columnName: "Full Name",
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    columnName: "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    columnName: "Job Title",
  },
  {
    locator: { type: "property", id: "department" },
    columnName: "Department",
  },
  {
    locator: { type: "property", id: "businessTitle" },
    columnName: "Business Title",
    isVisible: false, // Hidden by default
  },
];

function EmployeesTable() {
  const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
  const [columnDefinitions, setColumnDefinitions] = useState(
    initialColumnDefinitions,
  );

  // Build column options for the dialog
  const columnOptions = useMemo(
    () =>
      initialColumnDefinitions.map((colDef) => ({
        id: colDef.locator.id,
        name: colDef.columnName || colDef.locator.id,
      })),
    [],
  );

  // Track current visibility state
  const currentVisibility = useMemo(() => {
    const visibility: Record<string, boolean> = {};
    initialColumnDefinitions.forEach((colDef) => {
      visibility[colDef.locator.id] = columnDefinitions.some(
        (def) => def.locator.id === colDef.locator.id,
      );
    });
    return visibility;
  }, [columnDefinitions]);

  // Track current column order
  const currentColumnOrder = useMemo(
    () => columnDefinitions.map((colDef) => colDef.locator.id),
    [columnDefinitions],
  );

  const handleApplyColumnConfig = useCallback(
    (columns: Array<{ columnId: string; isVisible: boolean }>) => {
      const newColumnDefinitions: Array<ColumnDefinition<typeof Employee>> = [];

      // Apply the new visibility and order
      columns.forEach(({ columnId, isVisible }) => {
        if (isVisible) {
          const colDef = initialColumnDefinitions.find(
            (def) => def.locator.id === columnId,
          );
          if (colDef) {
            newColumnDefinitions.push(colDef);
          }
        }
      });

      setColumnDefinitions(newColumnDefinitions);
      setIsColumnConfigOpen(false);
    },
    [],
  );

  return (
    <>
      <div style={{ marginBottom: "16px" }}>
        <button
          onClick={() => setIsColumnConfigOpen(true)}
        >
          Configure Columns
        </button>
      </div>

      <ObjectTable
        objectType={Employee}
        columnDefinitions={columnDefinitions}
        enableColumnConfig={false} // Disable built-in config since we're using custom
      />

      <ColumnConfigDialog
        isOpen={isColumnConfigOpen}
        onClose={() => setIsColumnConfigOpen(false)}
        columnOptions={columnOptions}
        currentVisibility={currentVisibility}
        currentColumnOrder={currentColumnOrder}
        onApply={handleApplyColumnConfig}
      />
    </>
  );
}
\`\`\`

This example demonstrates:

- Using the \`ColumnConfigDialog\` component for custom column management
- Tracking column visibility and order in component state
- Providing a custom button to open the dialog
- Disabling the built-in column configuration to avoid conflicts
- Managing hidden columns that can be toggled visible by users

### Example 15: Function-Backed Columns

Display values computed by OSDK functions (queries) alongside regular property columns. Function columns automatically handle loading states, caching, and deduplication.

\`\`\`typescript
import { Employee, getEmployeeMetrics } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

// Define a type map for your function columns
type EmployeeFunctionColumns = {
  metrics: typeof getEmployeeMetrics;
};

const columnDefinitions: Array<
  ColumnDefinition<
    typeof Employee,
    Record<string, never>,
    EmployeeFunctionColumns
  >
> = [
  {
    locator: { type: "property", id: "fullName" },
    pinned: "left",
    width: 200,
  },
  {
    locator: { type: "property", id: "department" },
  },
  {
    locator: {
      type: "function",
      id: "metrics",
      queryDefinition: getEmployeeMetrics,
      // Pass the current object set as a parameter to the function
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      // Generate a unique key for each object to look up its result
      getKey: (employee) => \`\${employee.$objectType}:\${employee.$primaryKey}\`,
      // Extract the specific value to display from the function result
      getValue: (cellData) =>
        (cellData as { score: number } | undefined)?.score,
      // Cache results for 1 minute instead of the default 5
      dedupeIntervalMs: 60_000,
    },
    columnName: "Performance Score",
  },
];

function EmployeesWithMetricsTable() {
  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
\`\`\`

Multiple function columns sharing the same \`queryDefinition\` are automatically deduplicated into a single API call. Use different \`getValue\` functions to extract different fields from the same result:

\`\`\`typescript
const columnDefinitions: Array<
  ColumnDefinition<
    typeof Employee,
    Record<string, never>,
    EmployeeFunctionColumns
  >
> = [
  {
    locator: {
      type: "function",
      id: "metrics",
      queryDefinition: getEmployeeMetrics,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (emp) => \`\${emp.$objectType}:\${emp.$primaryKey}\`,
      getValue: (cellData) => (cellData as { score: number })?.score,
    },
    columnName: "Score",
  },
  {
    locator: {
      type: "function",
      id: "metrics",
      queryDefinition: getEmployeeMetrics,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (emp) => \`\${emp.$objectType}:\${emp.$primaryKey}\`,
      getValue: (cellData) => (cellData as { rank: string })?.rank,
    },
    columnName: "Rank",
  },
];
\`\`\`

### Column Pinning

Pin columns to the left or right side of the table:

\`\`\`typescript
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
\`\`\`

### Column Resizing

Control whether columns can be resized:

\`\`\`typescript
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    resizable: true,
    minWidth: 150,
    maxWidth: 500,
  },
];
\`\`\`

Listen to resize events:

\`\`\`typescript
<ObjectTable
  objectType={Employee}
  onColumnResize={(columnId, newWidth) => {
    console.log(\`Column \${columnId} resized to \${newWidth}px\`);
  }}
/>;
\`\`\`

### Disable Filtering or Sorting

Disable filtering or sorting globally:

\`\`\`typescript
<ObjectTable
  objectType={Employee}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
  enableOrdering={false}
/>;
\`\`\`

Or per column:

\`\`\`typescript
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    orderable: false,
    filterable: false,
  },
];
\`\`\`

### Custom Row Height

Adjust row height for better readability:

\`\`\`typescript
<ObjectTable
  objectType={Employee}
  rowHeight={56} // Larger rows for more content
/>;
\`\`\`

### Row Attributes and Conditional Row Styling

Use \`getRowAttributes\` to apply custom HTML attributes (typically \`data-*\` attributes) to each \`<tr>\` element. This is the recommended pattern for conditional row styling — for example, changing a row's background color based on the underlying object's state.

\`\`\`tsx
import { Employee } from "@my/osdk";
import type { Osdk } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { useCallback } from "react";

function EmployeesTable() {
  const getRowAttributes = useCallback(
    (employee: Osdk.Instance<typeof Employee>) => ({
      "data-status": employee.status,
      "data-overdue": employee.daysOverdue > 0 ? "true" : undefined,
    }),
    []
  );

  return (
    <ObjectTable
      objectType={Employee}
      className="employees-table"
      getRowAttributes={getRowAttributes}
    />
  );
}
\`\`\`

Entries whose value is \`undefined\` are skipped, so you can include attributes conditionally without emitting empty values.

Then drive your row styling in CSS using attribute selectors. Row background colors come from \`--osdk-table-row-bg-default\` (and \`--osdk-table-row-bg-alternate\` for odd zebra rows) — overriding both on a \`<tr>\` for matching rows takes precedence:

\`\`\`css
.employees-table tr[data-status="Inactive"] {
  --osdk-table-row-bg-default: #f3f4f6;
  --osdk-table-row-bg-alternate: #f3f4f6;
  color: #6b7280;
}

.employees-table tr[data-overdue="true"] {
  --osdk-table-row-bg-default: #fef2f2;
  --osdk-table-row-bg-alternate: #fef2f2;
}

.employees-table tr[data-status="Active"][data-overdue="true"] {
  --osdk-table-row-bg-default: #fffbeb;
  --osdk-table-row-bg-alternate: #fffbeb;
}
\`\`\`

Notes:

- Combine multiple attribute selectors to express priority (the most specific selector wins, per normal CSS rules).
- The table sets its own attributes (\`data-selected\`, \`data-focused\`, \`data-row-parity\`, \`data-pinned\`) on rows and cells. Avoid using these names in \`getRowAttributes\` since they would override the built-in behavior.

### Loading and Empty States

The ObjectTable automatically handles:

- **Loading state**: Shows skeleton rows while data is loading
- **Empty state**: Shows appropriate message when no data matches filters
- **Error state**: Displays error messages if data fetching fails

No additional configuration needed - these states are built-in!

### Infinite Scrolling

The ObjectTable automatically implements infinite scroll pagination, with page size of 50. As users scroll down, more data is loaded seamlessly. No configuration required!

## Exporting Data

Pass a \`tableRef\` to obtain an \`ObjectTableHandle<Q, RDPs>\`. Its \`getSnapshot()\` method loads **all** matching rows and returns a format-agnostic snapshot of the table's columns, rows, and total match count, so you can export to CSV, Excel, JSON, the clipboard, or anywhere else. When the total row count exceeds \`rowLimit\` (default \`10_000\`), the returned promise rejects (with a string error message); otherwise every matching row is loaded.

The snapshot reflects the table's current column visibility, ordering, and pinning. Property, derived-property, and function-backed columns are all included. Custom-rendered columns have no underlying value and are omitted. Each row exposes a \`getValue(columnId)\` accessor; cells are the raw value, or the thrown \`Error\` instance if a function-backed cell failed to load (the promise still resolves with the rest of the snapshot).

The snapshot also carries \`totalCount\` — the number of objects matching the underlying object set as reported by the API, encoded as a string (or \`undefined\` when no count was provided). It may exceed the number of loaded rows, so it's handy for surfacing "exported N of M".

\`\`\`typescript
import type { Employee } from "@my/osdk";
import {
  ObjectTable,
  type ObjectTableHandle,
} from "@osdk/react-components/experimental";
import { useRef } from "react";

type RDPs = Record<string, never>;

function EmployeeTableWithDownload() {
  const tableRef = useRef<ObjectTableHandle<Employee, RDPs>>(null);

  const downloadCsv = async () => {
    const handle = tableRef.current;
    if (handle == null) return;

    const { columns, rows, totalCount } = await handle.getSnapshot();
    console.log(\`Exporting \${rows.length} of \${totalCount ?? "?"} rows\`);

    const escape = (value: unknown) => {
      // Failed function-backed cells surface as the thrown Error instance —
      // render a marker so a failure is distinguishable from an empty cell.
      const text = value == null
        ? ""
        : value instanceof Error
        ? "#ERROR"
        : String(value);
      return /[",\\n]/.test(text) ? \`"\${text.replace(/"/g, "\\"\\"")}"\` : text;
    };
    const csv = [
      columns.map((column) => escape(column.name)).join(","),
      ...rows.map((row) =>
        columns.map((column) => escape(row.getValue(column.id))).join(",")
      ),
    ].join("\\n");

    // Prepend a UTF-8 BOM so spreadsheet apps detect the encoding.
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "employees.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <button onClick={downloadCsv}>Download CSV</button>
      <ObjectTable objectType={Employee} tableRef={tableRef} />
    </>
  );
}
\`\`\`

\`getSnapshot()\` accepts an optional \`{ rowLimit }\` that bounds the snapshot size — when the total row count exceeds it, the promise rejects with a string error message. \`row.getValue(columnId)\` returns the raw cell value (or the thrown \`Error\` instance for failed function-backed cells, or \`undefined\` for unknown column ids) — your formatter handles the rest.

## TypeScript Tips

### Type-Safe Column Definitions

Use TypeScript generics to ensure type safety:

\`\`\`typescript
import { Employee } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

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
\`\`\`

### Inferring Types from Object Type

Let TypeScript infer types from your OSDK object type:

\`\`\`typescript
import { Employee } from "@my/osdk";
import type { PropertyKeys } from "@osdk/client";

// PropertyKeys gives you all valid property names
type EmployeeProps = PropertyKeys<typeof Employee>;
\`\`\`

## Troubleshooting

### Table not displaying data

- Ensure your OSDK client is properly configured
- Check that the object type is imported correctly
- Verify network requests in browser DevTools

### Type errors with columnDefinitions

- Ensure you're using the correct type parameters: \`ColumnDefinition<typeof YourObjectType, RDPs, FunctionColumns>\`
- Property IDs must exactly match property names from your object type

### Selection not working

- Ensure \`selectionMode\` is set to "single" or "multiple"
- For controlled mode, provide both \`selectedRows\` and \`onRowSelection\`

### Custom rendering not appearing

- Ensure \`renderCell\` returns valid React elements
- Check browser console for errors in your render function

### Table has no styling or looks broken

- Ensure you've imported \`@osdk/react-components/styles.css\` in your main CSS file
- Check that the CSS import is in the correct location (application entry point)
- Check browser DevTools to confirm CSS custom properties are loaded

## Theming

The ObjectTable emits a stable set of \`data-*\` attributes on its rendered DOM, and exposes every visual property through \`--osdk-table-*\` CSS variables. Together they let you override appearance via the table's \`className\` (or any parent wrapper) without forking the component or relying on internal class names. See [Prerequisites › Token scopes](./Prerequisites.md#token-scopes) for the underlying \`--osdk-*\` / \`--bp-*\` token model.

The sub-sections below list the attributes and variables available on each rendered element, followed by [override examples](#override-examples). CSS variables cascade, so you can override them on a parent element to affect every nested cell or row.

### \`<thead>\` — Table header row container

**Data attributes**

| Attribute       | Values            | Meaning                                           |
| --------------- | ----------------- | ------------------------------------------------- |
| \`data-resizing\` | \`true\` \\| \`false\` | Set while the user is actively resizing a column. |

**CSS variables**

| Variable                            | Default                                  | Description                            |
| ----------------------------------- | ---------------------------------------- | -------------------------------------- |
| \`--osdk-table-header-height\`        | \`50px\`                                   | Header row height.                     |
| \`--osdk-table-header-bg\`            | \`var(--osdk-background-secondary)\`       | Header background color.               |
| \`--osdk-table-header-fontWeight\`    | \`var(--osdk-typography-weight-bold)\`     | Header text weight.                    |
| \`--osdk-table-header-fontSize\`      | \`var(--osdk-typography-size-body-small)\` | Header text size.                      |
| \`--osdk-table-header-color\`         | \`var(--osdk-typography-color-muted)\`     | Header text color.                     |
| \`--osdk-table-header-divider\`       | \`var(--osdk-table-border)\`               | Vertical divider between header cells. |
| \`--osdk-table-resizer-color-hover\`  | \`var(--osdk-custom-color-primary-1)\`     | Resize handle hover color.             |
| \`--osdk-table-resizer-color-active\` | \`var(--osdk-intent-primary-rest)\`        | Resize handle active color.            |

### \`<th>\` — Header cell

**Data attributes**

| Attribute     | Values                       | Meaning               |
| ------------- | ---------------------------- | --------------------- |
| \`data-pinned\` | \`left\` \\| \`right\` \\| \`false\` | Column pinning state. |

**CSS variables**

| Variable                                | Default                                                                  | Description                    |
| --------------------------------------- | ------------------------------------------------------------------------ | ------------------------------ |
| \`--osdk-table-pinned-column-border\`     | \`var(--osdk-table-border)\`                                               | Border for pinned columns.     |
| \`--osdk-table-header-menu-padding\`      | \`calc(var(--osdk-surface-spacing) * 0.25)\`                               | Menu button padding.           |
| \`--osdk-table-header-menu-bg\`           | \`var(--osdk-custom-color-light-gray-2)\`                                  | Menu button background.        |
| \`--osdk-table-header-menu-border\`       | \`var(--osdk-surface-border-width) solid var(--osdk-custom-color-gray-4)\` | Menu button border.            |
| \`--osdk-table-header-menu-color\`        | \`var(--osdk-typography-color-muted)\`                                     | Menu icon color.               |
| \`--osdk-table-header-menu-color-active\` | \`var(--osdk-typography-color-default-rest)\`                              | Menu icon color when active.   |
| \`--osdk-table-header-menu-icon-color\`   | \`var(--osdk-table-header-menu-color)\`                                    | Menu chevron color.            |
| \`--osdk-table-header-menu-bg-hover\`     | \`var(--osdk-custom-color-gray-1)\`                                        | Menu button hover background.  |
| \`--osdk-table-header-menu-bg-active\`    | \`var(--osdk-custom-color-gray-2)\`                                        | Menu button active background. |

### \`<tr>\` — Body row

**Data attributes**

| Attribute         | Values            | Meaning                                                 |
| ----------------- | ----------------- | ------------------------------------------------------- |
| \`data-selected\`   | \`true\` \\| \`false\` | Whether the row is selected.                            |
| \`data-focused\`    | \`true\` \\| \`false\` | Whether the row currently has focus (last-clicked row). |
| \`data-row-parity\` | \`even\` \\| \`odd\`   | Row index parity, for striping.                         |

You can also attach custom \`data-*\` attributes per row with the \`getRowAttributes\` prop — see [Row Attributes and Conditional Row Styling](#row-attributes-and-conditional-row-styling).

**CSS variables**

| Variable                               | Default                                                                                    | Description                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------- |
| \`--osdk-table-row-bg-default\`          | \`var(--osdk-background-primary)\`                                                           | Default row background.          |
| \`--osdk-table-row-bg-alternate\`        | \`var(--osdk-background-tertiary)\`                                                          | Alternate (odd) row background.  |
| \`--osdk-table-row-bg-hover\`            | \`color-mix(in srgb, var(--osdk-intent-primary-hover) 10%, var(--osdk-background-primary))\` | Row hover background.            |
| \`--osdk-table-row-bg-active\`           | \`color-mix(in srgb, var(--osdk-intent-primary-hover) 10%, var(--osdk-background-primary))\` | Active/selected row background.  |
| \`--osdk-table-row-border-color-hover\`  | \`var(--osdk-intent-primary-rest)\`                                                          | Border color for hovered rows.   |
| \`--osdk-table-row-border-color-active\` | \`var(--osdk-intent-primary-rest)\`                                                          | Border color for selected rows.  |
| \`--osdk-table-row-divider\`             | \`var(--osdk-table-border)\`                                                                 | Horizontal divider between rows. |

### \`<td>\` — Body cell

**Data attributes**

| Attribute       | Values                       | Meaning                                                |
| --------------- | ---------------------------- | ------------------------------------------------------ |
| \`data-pinned\`   | \`left\` \\| \`right\` \\| \`false\` | Mirrors the column's pinning state.                    |
| \`data-editable\` | \`true\` \\| (absent)           | Present when the cell is editable in the current mode. |

**CSS variables**

| Variable                                | Default                                                                          | Description                                   |
| --------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| \`--osdk-table-cell-padding\`             | \`0 calc(var(--osdk-surface-spacing) * 2)\`                                        | Cell padding.                                 |
| \`--osdk-table-cell-fontSize\`            | \`var(--osdk-typography-size-body-medium)\`                                        | Cell text size.                               |
| \`--osdk-table-cell-color\`               | \`var(--osdk-typography-color-default-rest)\`                                      | Cell text color.                              |
| \`--osdk-table-cell-bg\`                  | \`inherit\`                                                                        | Cell background color.                        |
| \`--osdk-table-cell-divider\`             | \`var(--osdk-table-border-width) solid transparent\`                               | Vertical divider between row cells.           |
| \`--osdk-table-cell-editable-border\`     | \`var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-strong)\` | Border for editable cells in edit mode.       |
| \`--osdk-table-cell-edited-border\`       | \`var(--osdk-surface-border-width) solid var(--osdk-intent-primary-rest)\`         | Border for edited cells with pending changes. |
| \`--osdk-table-cell-edited-border-error\` | \`var(--osdk-surface-border-width) solid var(--osdk-intent-danger-rest)\`          | Border for cells with validation errors.      |
| \`--osdk-table-cell-input-bg\`            | \`var(--osdk-background-primary)\`                                                 | Background for editable inputs.               |

Scope \`--osdk-table-cell-*\` overrides with \`td[data-editable]\` to target only editable cells.

### Edit footer container

Rendered when \`editMode\` is \`manual\` or when \`onSubmitEdits\` is provided.

| Variable                                 | Default                                                                       | Description                                     |
| ---------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| \`--osdk-table-edit-container-padding\`    | \`calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 4)\` | Padding for the edit controls container.        |
| \`--osdk-table-edit-container-min-height\` | \`calc(var(--osdk-surface-spacing) * 12)\`                                      | Minimum height for the edit controls container. |

### Column config dialog

Rendered when \`enableColumnConfig\` is \`true\` and the user opens the dialog.

| Variable                                        | Default                            | Description                                  |
| ----------------------------------------------- | ---------------------------------- | -------------------------------------------- |
| \`--osdk-table-column-config-dialog-min-width\`   | \`800px\`                            | Minimum width for the column config dialog.  |
| \`--osdk-table-column-config-dialog-min-height\`  | \`400px\`                            | Minimum height for the column config dialog. |
| \`--osdk-table-column-config-visible-columns-bg\` | \`var(--osdk-background-secondary)\` | Background for the visible columns section.  |

### Skeleton loading rows

Shown while data is loading.

| Variable                           | Default                                | Description                     |
| ---------------------------------- | -------------------------------------- | ------------------------------- |
| \`--osdk-table-skeleton-color-from\` | \`var(--osdk-background-skeleton-from)\` | Skeleton animation start color. |
| \`--osdk-table-skeleton-color-to\`   | \`var(--osdk-background-skeleton-to)\`   | Skeleton animation end color.   |

### Shared border tokens

These feed into the per-element border variables above.

| Variable                    | Default                                                               | Description                          |
| --------------------------- | --------------------------------------------------------------------- | ------------------------------------ |
| \`--osdk-table-border-color\` | \`var(--osdk-surface-border-color-default)\`                            | Base color for all table borders.    |
| \`--osdk-table-border-width\` | \`var(--osdk-surface-border-width)\`                                    | Base width for all table borders.    |
| \`--osdk-table-border\`       | \`var(--osdk-table-border-width) solid var(--osdk-table-border-color)\` | Base table border (outermost edges). |

See [CSSVariables.md](./CSSVariables.md) for the canonical reference of every \`--osdk-table-*\` token.

### Override examples

Each example below scopes overrides under a \`className\` passed to \`<ObjectTable className="my-table" />\` so other tables on the page are unaffected. Drop the class selector to apply globally via \`:root\` in the \`user.theme\` layer.

#### Editable cell background

Use the \`data-editable\` attribute that the table sets on every editable \`<td>\` to highlight only the cells the user can actually change. Pair it with \`--osdk-table-cell-editable-border\` to outline the cell in edit mode and \`--osdk-table-cell-edited-border\` to mark cells with pending changes.

\`\`\`tsx
<ObjectTable
  objectType={Employee}
  columnDefinitions={editableColumns}
  editMode="manual"
  className="my-table"
/>
\`\`\`

\`\`\`css
/* Editable cells get a soft yellow background to signal they're interactive. */
.my-table td[data-editable="true"] {
  --osdk-table-cell-bg: #fffbeb;
}
\`\`\`

#### Row attributes for conditional row styling

Attach custom \`data-*\` attributes per row with the \`getRowAttributes\` prop and drive row styling in CSS using attribute selectors. Row background comes from \`--osdk-table-row-bg-default\` and \`--osdk-table-row-bg-alternate\` — overriding both ensures the override wins regardless of zebra parity.

\`\`\`tsx
import { useCallback } from "react";

const getRowAttributes = useCallback(
  (employee: Osdk.Instance<typeof Employee>) => ({
    "data-status": employee.status,
    "data-overdue": employee.daysOverdue > 0 ? "true" : undefined,
  }),
  []
);

<ObjectTable
  objectType={Employee}
  className="my-table"
  getRowAttributes={getRowAttributes}
/>;
\`\`\`

\`\`\`css
.my-table tr[data-status="Inactive"] {
  --osdk-table-row-bg-default: #f3f4f6;
  --osdk-table-row-bg-alternate: #f3f4f6;
  color: #6b7280;
}

.my-table tr[data-overdue="true"] {
  --osdk-table-row-bg-default: #fef2f2;
  --osdk-table-row-bg-alternate: #fef2f2;
}

/* Combine selectors to express priority — most specific wins. */
.my-table tr[data-status="Active"][data-overdue="true"] {
  --osdk-table-row-bg-default: #fffbeb;
  --osdk-table-row-bg-alternate: #fffbeb;
}
\`\`\`

Notes:

- Entries whose value is \`undefined\` are skipped, so attributes can be conditional without emitting empty values.
- The table reserves \`data-selected\`, \`data-focused\`, \`data-row-parity\`, and \`data-pinned\` on rows and cells — don't return those names from \`getRowAttributes\`.

See [Row Attributes and Conditional Row Styling](#row-attributes-and-conditional-row-styling) for the full pattern walkthrough.

#### Scoped overrides for a specific table

\`\`\`tsx
<ObjectTable objectType={Employee} className="custom-employee-table" />
\`\`\`

\`\`\`css
.custom-employee-table {
  --osdk-table-header-bg: #1e40af;
  --osdk-table-header-color: #ffffff;
  --osdk-table-row-bg-hover: #dbeafe;
}
\`\`\`

#### Compact density

\`\`\`tsx
<ObjectTable objectType={Employee} className="compact-table" rowHeight={32} />
\`\`\`

\`\`\`css
.compact-table {
  --osdk-table-header-height: 36px;
  --osdk-table-cell-padding: 0 8px;
}
\`\`\`

## Additional Resources

- [ObjectTable API Reference](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/src/object-table/ObjectTableApi.ts)
- [ObjectTable Implementation](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/src/object-table/ObjectTable.tsx)
- [PeopleApp Examples](https://github.com/palantir/osdk-ts/blob/main/packages/e2e.sandbox.peopleapp/src/app/employees/EmployeesTable.tsx)
- [@osdk/react Documentation](https://github.com/palantir/osdk-ts/blob/main/docs/react/getting-started.md)
`;function o(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Components/ObjectTable/Docs",tags:["beta"]}),`
`,e.jsx(l,{children:a})]})}function y(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{y as default};
