---
title: ObjectTable
description: An OSDK-aware data table for ontology objects. Renders rows from an object type, ObjectSet, or interface, with built-in column configuration, selection, sorting, pinning, resizing, and inline editing.
toc_inline: true
---

> **Beta** — exported from `@osdk/react-components/experimental/object-table`.

## Usage

ObjectTable fetches its own data. Wrap your app in `OsdkProvider` and import the package styles once (see [Prerequisites](./Prerequisites.md) for the `@layer` order), then pass an object type — columns, sorting, filtering, and selection are wired up out of the box.

> **Note** — `@my/osdk` is a placeholder for **your generated SDK package** (e.g. `@your-app/sdk`). Replace it with the actual package name in your project.

```tsx
import { Office } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function OfficesPage() {
  return <ObjectTable objectType={Office} />;
}
```

Opt into row selection with `selectionMode`:

```tsx
<ObjectTable objectType={Office} selectionMode="multiple" />
```

## Props

### Core

| Name            | Type      | Description                                                                                                                                                                                                                                            |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `objectType`    | `Q`       | **Required.** The OSDK object type to display.                                                                                                                                                                                                         |
| `className`     | `string`  | CSS class for custom styling.                                                                                                                                                                                                                          |
| `rowHeight`     | `number`  | Height of each row in pixels. Defaults to `40`.                                                                                                                                                                                                        |
| `streamUpdates` | `boolean` | When `true`, subscribes via websocket so the table updates as matching objects change in Foundry. Cannot be combined with `pivotTo` or `withProperties` — those queries still fetch normally but won't receive real-time updates. Defaults to `false`. |

### Column management

| Name                        | Type                           | Description                                                |
| --------------------------- | ------------------------------ | ---------------------------------------------------------- |
| `columnDefinitions`         | `Array<ColumnDefinition>`      | Ordered list of columns. If omitted, shows all properties. |
| `onColumnVisibilityChanged` | `(newStates) => void`          | Called when column visibility changes.                     |
| `onColumnsPinnedChanged`    | `(newStates) => void`          | Called when column pinning changes.                        |
| `onColumnResize`            | `(columnId, newWidth) => void` | Called when a column is resized.                           |

### Filtering

> The table filtering UI is not yet supported. You can still pass `filter` to programmatically filter the displayed objects.

| Name              | Type                   | Description                                                                           |
| ----------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| `enableFiltering` | `boolean`              | Whether filtering menu items are shown in the column header menu. Defaults to `true`. |
| `filter`          | `WhereClause<Q, RDPs>` | Current where-clause filter (controlled mode).                                        |
| `onFilterChanged` | `(newWhere) => void`   | Required when `filter` is provided.                                                   |

### Sorting

| Name               | Type                           | Description                                               |
| ------------------ | ------------------------------ | --------------------------------------------------------- |
| `enableOrdering`   | `boolean`                      | Whether sorting menu items are shown. Defaults to `true`. |
| `defaultOrderBy`   | `Array<{property, direction}>` | Initial sort order (uncontrolled).                        |
| `orderBy`          | `Array<{property, direction}>` | Current sort order (controlled).                          |
| `onOrderByChanged` | `(newOrderBy) => void`         | Required when `orderBy` is provided.                      |

### Column features

| Name                   | Type      | Description                                                         |
| ---------------------- | --------- | ------------------------------------------------------------------- |
| `enableColumnPinning`  | `boolean` | Whether pinning menu items are shown. Defaults to `true`.           |
| `enableColumnResizing` | `boolean` | Whether the resize menu item is shown. Defaults to `true`.          |
| `enableColumnConfig`   | `boolean` | Whether the column configuration item is shown. Defaults to `true`. |

Hide any header-menu item by setting the matching `enable…` prop to `false`.

### Row selection

| Name                    | Type                                     | Description                                                                                                                               |
| ----------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `selectionMode`         | `"single" \| "multiple" \| "none"`       | Selection mode. `"multiple"` shows checkboxes. Defaults to `"none"`.                                                                      |
| `selectedRows`          | `PrimaryKeyType<Q>[]`                    | Selected rows (controlled mode).                                                                                                          |
| `isAllSelected`         | `boolean`                                | Indicates all rows are selected (controlled mode only).                                                                                   |
| `onRowSelectionChanged` | `(change: RowSelectionChange) => void`   | **Preferred.** Fires with `{ selectedRows, isSelectAll, objectSet }`. `objectSet` is the full underlying set when "select all" is active. |
| `onRowSelection`        | `(selectedRowIds, isSelectAll?) => void` | **Deprecated** — use `onRowSelectionChanged`. Still fires for backwards compatibility.                                                    |

### Interactions

| Name                    | Type                                               | Description                                                                                     |
| ----------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `onRowClick`            | `(object) => void`                                 | Called when a row is clicked.                                                                   |
| `renderCellContextMenu` | `(row, cellValue) => ReactNode`                    | Custom context menu for right-click on cells.                                                   |
| `renderEmptyState`      | `() => ReactNode`                                  | Render override for the empty state. Defaults to a "No Data" indicator.                         |
| `getRowAttributes`      | `(rowData) => Record<string, string \| undefined>` | Extra HTML attributes (typically `data-*`) applied to each `<tr>`, for conditional row styling. |
| `tableRef`              | `React.Ref<ObjectTableHandle>`                     | Imperative handle for programmatic actions such as exporting data via `getSnapshot()`.          |

### Cell editing

> Enables inline editing with validation and bulk submission. Editable cells support text inputs, number inputs, dropdowns, and date pickers.

| Name                 | Type                                          | Description                                                                                                        |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `editMode`           | `"always" \| "manual"`                        | `"always"`: table is always in edit mode. `"manual"` (default): user toggles edit mode on/off.                     |
| `onCellValueChanged` | `(info: CellEditInfo) => void`                | Called when a cell value is edited. `info` carries `rowId`, `columnId`, `newValue`, `oldValue`, `originalRowData`. |
| `onSubmitEdits`      | `(edits: CellEditInfo[]) => Promise<boolean>` | When provided, shows a "Submit Edits" button. Return `true` on success.                                            |
| `showEditFooter`     | `boolean`                                     | Whether to render the bottom edit footer. Defaults to `true`.                                                      |

### Column definitions

Each entry in `columnDefinitions` describes one column:

```typescript
type ColumnDefinition<Q, RDPs, FunctionColumns> = {
  locator: ColumnDefinitionLocator<Q, RDPs, FunctionColumns>;
  isVisible?: boolean; // default: true
  pinned?: "left" | "right" | "none"; // default: "none"
  width?: number; // Fixed width in pixels
  minWidth?: number;
  maxWidth?: number;
  resizable?: boolean;
  orderable?: boolean;
  filterable?: boolean;
  editable?: boolean | ((rowData) => boolean); // Pass a function to gate editing per row
  editFieldConfig?: EditFieldConfig; // Editor component config (e.g. dropdown)
  validateEdit?: (value: unknown) => Promise<string | undefined>;
  renderCell?: (object, locator) => React.ReactNode;
  columnName?: string; // Header text; falls back to the property displayName
  renderHeader?: () => React.ReactNode; // Takes precedence over columnName in the header
};
```

**Locator types** — `{ type, id, … }` selects what the column shows:

| `type`       | Shows                                                          | Extra fields                                                                        |
| ------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `"property"` | A property of the object type.                                 | `id` — a valid property key.                                                        |
| `"rdp"`      | A runtime-derived property.                                    | `id`, `creator` — a `DerivedProperty.creator(...)`.                                 |
| `"function"` | Values computed by an OSDK function (query), keyed per object. | `queryDefinition`, `getFunctionParams`, `getKey`, `getValue?`, `dedupeIntervalMs?`. |
| `"custom"`   | Anything you render via `renderHeader` / `renderCell`.         | `id`.                                                                               |

**`editFieldConfig`** — when `editable` is truthy, columns default to a text or number input (auto-detected from the property type). Provide `editFieldConfig` to choose a different editor:

| `fieldComponent` | Renders                                                       |
| ---------------- | ------------------------------------------------------------- |
| `"DROPDOWN"`     | `Select` (default) or `Combobox` (when `isSearchable: true`). |
| `"DATE_PICKER"`  | `DatetimePicker`.                                             |

`getFieldComponentProps(rowData)` returns the props passed to the editor, so configuration can vary per row. Dropdown props include `items` (required), `isSearchable`, `placeholder`, `itemToStringLabel`, `itemToKey`, `isItemEqual`, and `isMultiple`.

## Styling

The ObjectTable emits a stable set of `data-*` attributes on its rendered DOM and exposes every visual property through `--osdk-table-*` CSS variables. Together they let you override appearance via the table's `className` (or any ancestor) without forking the component.

> **Class names are internal.** ObjectTable uses CSS Modules, so its class names are hashed at build time and are **not** part of the public API. Style states and elements by targeting the documented `data-*` attributes and CSS variables below — the only consumer-facing class name is the one you pass via the `className` prop. Token defaults live in `src/tokens/component-tokens/table.css`; the `--osdk-*` values they reference are defined in `src/tokens/base-tokens/base.css`.

| Element                | Data attributes                                                                                                                                                            | CSS variables                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<thead>` (header row) | `data-resizing` — `true` \| `false`; set while a column is being resized.                                                                                                  | `--osdk-table-header-height`<br /> `--osdk-table-header-bg`<br /> `--osdk-table-header-fontWeight`<br /> `--osdk-table-header-fontSize`<br /> `--osdk-table-header-color`<br /> `--osdk-table-header-divider`<br /> `--osdk-table-resizer-color-hover`<br /> `--osdk-table-resizer-color-active`                                                                               |
| `<th>` (header cell)   | `data-pinned` — `left` \| `right` \| `false`.                                                                                                                              | `--osdk-table-pinned-column-border`<br /> `--osdk-table-header-menu-padding`<br /> `--osdk-table-header-menu-bg`<br /> `--osdk-table-header-menu-bg-hover`<br /> `--osdk-table-header-menu-bg-active`<br /> `--osdk-table-header-menu-border`<br /> `--osdk-table-header-menu-color`<br /> `--osdk-table-header-menu-color-active`<br /> `--osdk-table-header-menu-icon-color` |
| `<tr>` (body row)      | `data-selected` — `true` \| `false`<br /> `data-focused` — `true` \| `false`<br /> `data-row-parity` — `even` \| `odd`<br />plus any custom attrs from `getRowAttributes`. | `--osdk-table-row-bg-default`<br /> `--osdk-table-row-bg-alternate`<br /> `--osdk-table-row-bg-hover`<br /> `--osdk-table-row-bg-active`<br /> `--osdk-table-row-border-color-hover`<br /> `--osdk-table-row-border-color-active`<br /> `--osdk-table-row-divider`                                                                                                             |
| `<td>` (body cell)     | `data-pinned` — `left` \| `right` \| `false`<br /> `data-editable` — `true` \| (absent).                                                                                   | `--osdk-table-cell-padding`<br /> `--osdk-table-cell-fontSize`<br /> `--osdk-table-cell-color`<br /> `--osdk-table-cell-divider`<br /> `--osdk-table-cell-editable-border`<br /> `--osdk-table-cell-edited-border`<br /> `--osdk-table-cell-edited-border-error`<br /> `--osdk-table-cell-input-bg`                                                                            |
| Edit footer container  | —                                                                                                                                                                          | `--osdk-table-edit-container-padding`<br /> `--osdk-table-edit-container-min-height`                                                                                                                                                                                                                                                                                           |
| Column config dialog   | —                                                                                                                                                                          | `--osdk-table-column-config-dialog-min-width`<br /> `--osdk-table-column-config-dialog-min-height`<br /> `--osdk-table-column-config-visible-columns-bg`                                                                                                                                                                                                                       |
| Skeleton loading rows  | —                                                                                                                                                                          | `--osdk-table-skeleton-color-from`<br /> `--osdk-table-skeleton-color-to`                                                                                                                                                                                                                                                                                                      |
| Shared border tokens   | —                                                                                                                                                                          | `--osdk-table-border`<br /> `--osdk-table-border-color`<br /> `--osdk-table-border-width`                                                                                                                                                                                                                                                                                      |

CSS variables cascade, so overriding one on a parent affects every nested row or cell. Scope overrides under the table's `className` so other tables on the page are unaffected:

```tsx
<ObjectTable objectType={Employee} className="my-table" />
```

```css
/* Brand the header and tint editable cells. */
.my-table {
  --osdk-table-header-bg: #1e40af;
  --osdk-table-header-color: #ffffff;
}

.my-table td[data-editable="true"] {
  --osdk-table-cell-bg: #fffbeb;
}
```

For conditional row styling, attach custom attributes with `getRowAttributes` and target them with attribute selectors. Override **both** `--osdk-table-row-bg-default` and `--osdk-table-row-bg-alternate` so the rule wins regardless of zebra parity:

```css
.my-table tr[data-status="Inactive"] {
  --osdk-table-row-bg-default: #f3f4f6;
  --osdk-table-row-bg-alternate: #f3f4f6;
}
```

The table reserves `data-selected`, `data-focused`, `data-row-parity`, and `data-pinned` on rows and cells — don't return those names from `getRowAttributes`.

See [CSSVariables.md](./CSSVariables.md) for the canonical reference of every `--osdk-table-*` token.
