import{j as e}from"./iframe-BI4mv9kr.js";import{useMDXComponents as a}from"./index-C7uzMnSB.js";import{c as i,e as p,b as d}from"./blocks-DNsNg3Yk.js";import{Default as m}from"./ObjectTable.stories-CjTandPF.js";import{WithObjectSet as u,WithInterfaceType as y}from"./DataSources.stories-DkIt7nws.js";import{WithDefaultColumnPinning as b,WithDerivedPropertyOrderingAndFilter as h,WithFunctionColumn as f,WithCustomColumn as g,WithCustomRenderers as w}from"./Columns.stories-0V7v8zXQ.js";import{WithDefaultSorting as j,ControlledSorting as k}from"./Sorting.stories-DARozFrb.js";import{SingleSelection as C,MultipleSelection as x,ControlledSelection as O,ControlledFocusedRow as T}from"./Selection.stories-B4zSN45k.js";import{EditableTable as E,EditableWithValidation as D,WithSubmitEditsButton as v,PerRowEditableAndFieldConfig as S}from"./Editing.stories-CIQXIsL-.js";import{WithContextMenu as R,EventListeners as A}from"./Interactions.stories-CmTJW_9s.js";import{CustomColumnWidths as P,CustomRowHeight as M,CustomEmptyState as F,RowAttributesForStyling as W,DisableAllHeaderMenuFeatures as N}from"./Display.stories-CLX_RC6I.js";import{MarkingColumns as B}from"./MarkingColumns.stories-FbEbBMOl.js";import{WithConfigureColumnsButton as I}from"./WithConfigureColumnsButton.stories-C-mHCtqR.js";import{WithLoadedDataDownload as V}from"./WithLoadedDataDownload.stories-DF_nyx_-.js";import"./preload-helper-Dt0Twvmj.js";import"./index-B9DuMdAz.js";import"./index-BOmc3ycU.js";import"./index-BaUGSAz-.js";import"./objectTableStoryDefs-C1346l3c.js";import"./object-table-DiWnZqrg.js";import"./Table-Bww8DLMw.js";import"./index-DBuQd2cE.js";import"./Dialog-O-XLZE2r.js";import"./cross-IOYA3BMD.js";import"./svgIconContainer-DXKz2g6i.js";import"./useBaseUiId-dZrnpRDf.js";import"./InternalBackdrop-DiHpgcCt.js";import"./composite-DSqZameO.js";import"./useEventCallback-DmrPnDiN.js";import"./SkeletonBar-CZVTRQ_c.js";import"./LoadingCell-CoWc94XM.js";import"./ColumnConfigDialog-CgDTQ8Sm.js";import"./DraggableList-DcLwxH19.js";import"./search-COytg_IS.js";import"./Input-CoUXyPMe.js";import"./useControlled-Dw2VLJ3p.js";import"./Button-D3Zu-C0a.js";import"./small-cross-DnF7t-Cn.js";import"./ActionButton-RCbtLJtB.js";import"./Checkbox-DgNMfB3U.js";import"./useValueChanged-CZY6Khxy.js";import"./CollapsiblePanel-D4vzANls.js";import"./MultiColumnSortDialog-B1smqcM1.js";import"./MenuTrigger-B63KZ9fQ.js";import"./CompositeItem-CtYZ0HZn.js";import"./ToolbarRootContext-CPvJTDaT.js";import"./getDisabledMountTransitionStyles-CLmOlF5D.js";import"./getPseudoElementBounds-BlKODG9i.js";import"./chevron-down-DdrZvlkD.js";import"./index-BusFLKiz.js";import"./error-B3oUAsIz.js";import"./BaseCbacBanner-CCoHgrU_.js";import"./makeExternalStore-D35xftiO.js";import"./Tooltip-DEgrlHyh.js";import"./PopoverPopup-C2vYVp_K.js";import"./toNumber-Dok99jHq.js";import"./useOsdkClient-Pn41qJKN.js";import"./tick-BXhWxouM.js";import"./DropdownField-DHja99mO.js";import"./withOsdkMetrics-DPBuA6d7.js";import"./Employee-BAk2o20h.js";import"./dialog-Ce7zoMAd.js";import"./iconLoader-D36nzMjV.js";const H=`### Basic table

Pass an object type and ObjectTable fetches rows, infers columns from the type's properties, and wires up sorting and the column-header menu out of the box.

\`\`\`tsx
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function EmployeesTable() {
  return <ObjectTable objectType={Employee} />;
}
\`\`\`

[Open the "default" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable--default)
`,$=`### From an ObjectSet

Pass an \`objectSet\` to drive the table from a pre-filtered or derived set instead of the whole object type.

\`\`\`tsx
import { Employee } from "@my/osdk";
import { useOsdkClient } from "@osdk/react";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function MarketingTable() {
  const client = useOsdkClient();
  const marketing = client(Employee).where({ jobProfile: "Marketing Manager" });
  return <ObjectTable objectType={Employee} objectSet={marketing} />;
}
\`\`\`

[Open the "with object set" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-data-sources--with-object-set)
`,q=`### Interface types

Pass an interface type instead of an object type. The table shows the interface's properties, and any object implementing the interface is displayed.

\`\`\`tsx
import { WorkerInterface } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function WorkersTable() {
  return <ObjectTable objectType={WorkerInterface} />;
}
\`\`\`

[Open the "with interface type" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-data-sources--with-interface-type)
`,K=`### Column pinning

Pin columns to the left or right edge so they stay visible while the rest of the table scrolls horizontally.

\`\`\`tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" }, pinned: "left" },
  { locator: { type: "property", id: "emailPrimaryWork" } },
  { locator: { type: "property", id: "department" }, pinned: "right" },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
\`\`\`

[Open the "with default column pinning" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-default-column-pinning)
`,z=`### Derived-property (RDP) columns

Add columns backed by runtime-derived properties with \`type: "rdp"\`. RDP columns can be sorted like any other column.

\`\`\`tsx
import { Employee } from "@my/osdk";
import { DerivedProperty } from "@osdk/client";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

type RDPs = { managerName: string | undefined };

const columnDefinitions: Array<ColumnDefinition<typeof Employee, RDPs>> = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: DerivedProperty.creator<typeof Employee, string | undefined>(
        (base) => base.lead.select({ fullName: true }),
        (pivot) => pivot?.fullName
      ),
    },
    renderHeader: () => "Manager",
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
/>;
\`\`\`

[Open the "with derived property ordering and filter" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-derived-property-ordering-and-filter)
`,L=`### Function-backed columns

Display values computed by an OSDK function (query) with \`type: "function"\`. The table calls the query with the current object set and maps each result back to its row, with loading, caching, and dedupe handled for you.

\`\`\`tsx
import { Employee, getEmployeeMetrics } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

type EmployeeFunctionColumns = { metrics: typeof getEmployeeMetrics };

const columnDefinitions: Array<
  ColumnDefinition<
    typeof Employee,
    Record<string, never>,
    EmployeeFunctionColumns
  >
> = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: {
      type: "function",
      id: "metrics",
      queryDefinition: getEmployeeMetrics,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (employee) => \`\${employee.$objectType}:\${employee.$primaryKey}\`,
      getValue: (cellData) =>
        (cellData as { score: number } | undefined)?.score,
    },
    columnName: "Performance score",
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
\`\`\`

[Open the "with function column" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-function-column)
`,U=`### Custom column type

Render anything in a column with \`type: "custom"\` by supplying \`renderHeader\` and \`renderCell\`. Custom columns have no underlying value, so disable ordering.

\`\`\`tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "custom", id: "actions" },
    renderHeader: () => "Actions",
    renderCell: (employee) => (
      <button onClick={() => alert(\`View \${employee.$title}\`)}>View</button>
    ),
    orderable: false,
    width: 120,
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
\`\`\`

[Open the "with custom column" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-custom-column)
`,X=`### Custom cell & header renderers

Use \`renderCell\` and \`renderHeader\` on a property column to override only its display while keeping the underlying value (so sorting and editing still work).

\`\`\`tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => <strong>Employee name</strong>,
    renderCell: (employee) => <strong>{employee.fullName}</strong>,
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    renderCell: (employee) => {
      const date = employee.firstFullTimeStartDate;
      return date ? new Date(date).toLocaleDateString() : "—";
    },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
\`\`\`

[Open the "with custom renderers" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-custom-renderers)
`,_=`### Default sorting

Seed an initial sort with \`defaultOrderBy\`. Sorting stays uncontrolled — the user can re-sort from the column header menu.

\`\`\`tsx
<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{ property: "fullName", direction: "desc" }]}
/>
\`\`\`

[Open the "with default sorting" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-sorting--with-default-sorting)
`,J=`### Controlled sorting

Own the sort state by passing \`orderBy\` and \`onOrderByChanged\`. The table renders exactly what you pass.

\`\`\`tsx
import { useState } from "react";

function EmployeesTable() {
  const [orderBy, setOrderBy] = useState([
    { property: "fullName", direction: "asc" } as const,
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

[Open the "controlled sorting" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-sorting--controlled-sorting)
`,G=`### Single selection

Set \`selectionMode="single"\` to let the user select one row at a time.

\`\`\`tsx
<ObjectTable objectType={Employee} selectionMode="single" />
\`\`\`

[Open the "single selection" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-selection-focus--single-selection)
`,Q=`### Multiple selection

Set \`selectionMode="multiple"\` to show per-row checkboxes plus a header select-all. Observe changes with \`onRowSelectionChanged\`.

\`\`\`tsx
<ObjectTable
  objectType={Employee}
  selectionMode="multiple"
  onRowSelectionChanged={({ selectedRows, isSelectAll, objectSet }) => {
    // selectedRows: loaded, selected row instances
    // isSelectAll:  true only when the user invoked "select all"
    // objectSet:    covers the selection, including unloaded rows on select-all
    if (objectSet) void applyBulkAction({ targets: objectSet });
  }}
/>
\`\`\`

[Open the "multiple selection" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-selection-focus--multiple-selection)
`,Y=`### Controlled selection

Own the selection by passing \`selectedRows\` (and \`isAllSelected\`) together with \`onRowSelectionChanged\`.

\`\`\`tsx
import { useState } from "react";

function EmployeesTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  return (
    <ObjectTable
      objectType={Employee}
      selectionMode="multiple"
      selectedRows={selectedRows}
      isAllSelected={isAllSelected}
      onRowSelectionChanged={(change) => {
        setSelectedRows(change.selectedRows.map((r) => r.$primaryKey));
        setIsAllSelected(change.isSelectAll);
      }}
    />
  );
}
\`\`\`

[Open the "controlled selection" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-selection-focus--controlled-selection)
`,Z=`### Controlled focused row

Highlight the "last interacted" row with \`focusedRow\` (a primary key) and observe changes via \`onFocusedRowChanged\`. When controlled, outside clicks don't auto-clear — the caller owns clearing.

\`\`\`tsx
import type { Osdk } from "@osdk/api";
import { useState } from "react";

function EmployeesTable() {
  const [focused, setFocused] = useState<Osdk.Instance<typeof Employee> | null>(
    null
  );

  return (
    <ObjectTable
      objectType={Employee}
      focusedRow={focused?.$primaryKey ?? null}
      onFocusedRowChanged={setFocused}
    />
  );
}
\`\`\`

[Open the "controlled focused row" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-selection-focus--controlled-focused-row)
`,ee=`### Editable table

Mark columns \`editable\` to enable inline editing. The editor is auto-detected from the property type, or set \`editFieldConfig\` for a dropdown or date picker. \`editMode\` controls whether editing is always on or toggled with an "Edit Table" button.

\`\`\`tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" }, editable: true },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: ["Engineering", "Product", "Design", "Sales"],
      }),
    },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({ showTime: false }),
    },
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  editMode="manual"
  onCellValueChanged={(info) => console.log(info)}
/>;
\`\`\`

[Open the "editable table" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--editable-table)
`,te=`### Edit validation

Add \`validateEdit\` to a column to validate a cell asynchronously. Returning a string shows an error icon and tooltip; returning \`undefined\` accepts the value.

\`\`\`tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value) =>
      /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(String(value ?? ""))
        ? undefined
        : "Please enter a valid email address",
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  editMode="manual"
/>;
\`\`\`

[Open the "editable with validation" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--editable-with-validation)
`,ne=`### Submit edits

Provide \`onSubmitEdits\` to show a "Submit Edits" button in the edit footer. All pending edits are submitted together; return \`true\` to clear them on success.

\`\`\`tsx
import { updateMultipleEmployees } from "@my/osdk";
import { useOsdkAction } from "@osdk/react";

function EditableEmployeesTable() {
  const { applyAction } = useOsdkAction(updateMultipleEmployees);

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={editableColumns}
      editMode="manual"
      onSubmitEdits={async (edits) => {
        await applyAction({
          updates: edits.map((e) => ({
            employeeId: e.rowId,
            field: e.columnId,
            value: e.newValue,
          })),
        });
        return true;
      }}
    />
  );
}
\`\`\`

[Open the "with submit edits button" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--with-submit-edits-button)
`,oe=`### Per-row editable & field config

Pass a function to \`editable\` to gate editing per row, and a \`getFieldComponentProps\` function to compute editor props from the row's data.

\`\`\`tsx
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

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  editMode="manual"
/>;
\`\`\`

[Open the "per row editable and field config" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--per-row-editable-and-field-config)
`,se=`### Cell context menu

Provide \`renderCellContextMenu\` to render a custom menu when the user right-clicks a cell. It receives the row object and the cell value.

\`\`\`tsx
<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(employee, cellValue) => (
    <div className="my-context-menu">
      <div onClick={() => navigator.clipboard.writeText(String(cellValue))}>
        Copy value
      </div>
      <div onClick={() => console.log("View", employee.fullName)}>View</div>
    </div>
  )}
/>
\`\`\`

[Open the "with context menu" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-interactions-events--with-context-menu)
`,re=`### Event listeners

Layer side effects (analytics, navigation, telemetry) on top of the table's default behavior with non-controlling \`on*\` listeners — the defaults still run.

\`\`\`tsx
<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => router.push(\`/employees/\${employee.$primaryKey}\`)}
  onColumnHeaderClick={(columnId) => console.log("header", columnId)}
  onOrderByChanged={(orderBy) => console.log("sort", orderBy)}
  onColumnVisibilityChanged={(states) => console.log("visibility", states)}
  onColumnsPinnedChanged={(states) => console.log("pinned", states)}
  onColumnResize={(columnId, newWidth) =>
    console.log("resize", columnId, newWidth)
  }
/>
\`\`\`

[Open the "event listeners" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-interactions-events--event-listeners)
`,ie=`### Custom column widths

Set \`width\` (and optionally \`minWidth\` / \`maxWidth\`) per column to control sizing.

\`\`\`tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  {
    locator: { type: "property", id: "department" },
    width: 300,
    minWidth: 150,
  },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
\`\`\`

[Open the "custom column widths" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--custom-column-widths)
`,le=`### Custom row height

Adjust \`rowHeight\` (pixels) for denser or roomier rows.

\`\`\`tsx
<ObjectTable objectType={Employee} rowHeight={56} />
\`\`\`

[Open the "custom row height" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--custom-row-height)
`,ae=`### Custom empty state

Override the default "No Data" indicator with \`renderEmptyState\`, shown when the table has no rows and no error.

\`\`\`tsx
<ObjectTable
  objectType={Employee}
  renderEmptyState={() => (
    <div className="empty">No employees match your filters.</div>
  )}
/>
\`\`\`

[Open the "custom empty state" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--custom-empty-state)
`,ce=`### Row attributes & conditional row styling

Return extra \`data-*\` attributes per row from \`getRowAttributes\`, then style rows with attribute selectors. Override both row-background variables so the rule wins regardless of zebra parity.

\`\`\`tsx
const getRowAttributes = useCallback(
  (employee: Osdk.Instance<typeof Employee>) => ({
    "data-status": employee.status,
    "data-overdue": employee.daysOverdue > 0 ? "true" : undefined,
  }),
  []
);

<ObjectTable
  objectType={Employee}
  className="employees-table"
  getRowAttributes={getRowAttributes}
/>;
\`\`\`

\`\`\`css
.employees-table tr[data-status="Inactive"] {
  --osdk-table-row-bg-default: #f3f4f6;
  --osdk-table-row-bg-alternate: #f3f4f6;
}
\`\`\`

[Open the "row attributes for styling" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--row-attributes-for-styling)
`,pe=`### Disable header-menu features

Turn off individual column-header menu items with the \`enable*\` flags (all default to \`true\`).

\`\`\`tsx
<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>
\`\`\`

[Open the "disable all header menu features" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--disable-all-header-menu-features)
`,de=`### Marking columns

Columns backed by marking properties render automatically: CBAC markings render via a banner, and mandatory markings render one pill per marking on the row. No extra configuration is required — include the marking property as a column.

\`\`\`tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "classification" } }, // a marking property
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
\`\`\`

[Open the "marking columns" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-advanced--marking-columns)
`,me=`### Column configuration dialog

Use the exported \`ColumnConfigDialog\` to build a custom column show/hide and ordering experience, disabling the built-in one with \`enableColumnConfig={false}\`.

\`\`\`tsx
import {
  ColumnConfigDialog,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

<>
  <button onClick={() => setOpen(true)}>Configure columns</button>
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    enableColumnConfig={false}
  />
  <ColumnConfigDialog
    isOpen={open}
    onClose={() => setOpen(false)}
    columnOptions={columnOptions}
    currentVisibility={currentVisibility}
    currentColumnOrder={currentColumnOrder}
    onApply={handleApply}
  />
</>;
\`\`\`

[Open the "with configure columns button" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-advanced--with-configure-columns-button)
`,ue=`### Exporting data

Pass a \`tableRef\` and call \`getSnapshot()\` to load every matching row and get a format-agnostic snapshot of columns, rows, and total count — then export to CSV, Excel, JSON, or anywhere.

\`\`\`tsx
import {
  ObjectTable,
  type ObjectTableHandle,
} from "@osdk/react-components/experimental/object-table";
import { useRef } from "react";

function EmployeeTableWithDownload() {
  const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);

  const downloadCsv = async () => {
    const { columns, rows, totalCount } = await tableRef.current!.getSnapshot();
    console.log(\`Exporting \${rows.length} of \${totalCount ?? "?"} rows\`);
    const csv = [
      columns.map((c) => c.name).join(","),
      ...rows.map((r) =>
        columns.map((c) => String(r.getValue(c.id) ?? "")).join(",")
      ),
    ].join("\\n");
    // ...turn \`csv\` into a download
  };

  return (
    <>
      <button onClick={downloadCsv}>Download CSV</button>
      <ObjectTable objectType={Employee} tableRef={tableRef} />
    </>
  );
}
\`\`\`

[Open the "with loaded data download" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-advanced--with-loaded-data-download)
`,ye="### Streaming updates\n\nSet `streamUpdates` to subscribe via websocket so the table updates automatically as matching objects are added, updated, or removed in Foundry. Cannot be combined with `pivotTo` or `withProperties` — those queries still fetch normally but won't receive real-time updates.\n\n```tsx\n<ObjectTable objectType={Employee} streamUpdates />\n```\n",t=({raw:o,story:n})=>{const s=o.indexOf("\n```"),c=s===-1?o:o.slice(0,s),r=s===-1?"":o.slice(s+1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:c}),n?e.jsx(p,{of:n,sourceState:"none"}):null,r?e.jsx(i,{children:r}):null]})};function l(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...a(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,e.jsx(d,{title:"Components/ObjectTable/Examples",tags:["beta"]}),`
`,`
`,e.jsx(n.h1,{id:"objecttable-examples",children:"ObjectTable examples"}),`
`,e.jsxs(n.p,{children:[`A catalog of ObjectTable features. Each example below is a self-contained chunk
in `,e.jsx(n.code,{children:"docs/object-table/examples/"}),` — the same chunks compose the published
`,e.jsx(n.a,{href:"https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ObjectTableExamples.md",rel:"nofollow",children:"ObjectTableExamples.md"}),`.
Use the link under each demo to open the full story in isolation.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Examples use ",e.jsx(n.code,{children:"@my/osdk"})," as a placeholder for your generated SDK package."]}),`
`]}),`
`,e.jsx(n.h2,{id:"data-sources",children:"Data sources"}),`
`,e.jsx(t,{raw:H,story:m}),`
`,e.jsx(t,{raw:$,story:u}),`
`,e.jsx(t,{raw:q,story:y}),`
`,e.jsx(n.h2,{id:"columns",children:"Columns"}),`
`,e.jsx(t,{raw:K,story:b}),`
`,e.jsx(t,{raw:z,story:h}),`
`,e.jsx(t,{raw:L,story:f}),`
`,e.jsx(t,{raw:U,story:g}),`
`,e.jsx(t,{raw:X,story:w}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsx(t,{raw:_,story:j}),`
`,e.jsx(t,{raw:J,story:k}),`
`,e.jsx(n.h2,{id:"selection--focus",children:"Selection & focus"}),`
`,e.jsx(t,{raw:G,story:C}),`
`,e.jsx(t,{raw:Q,story:x}),`
`,e.jsx(t,{raw:Y,story:O}),`
`,e.jsx(t,{raw:Z,story:T}),`
`,e.jsx(n.h2,{id:"editing",children:"Editing"}),`
`,e.jsx(t,{raw:ee,story:E}),`
`,e.jsx(t,{raw:te,story:D}),`
`,e.jsx(t,{raw:ne,story:v}),`
`,e.jsx(t,{raw:oe,story:S}),`
`,e.jsx(n.h2,{id:"interactions--events",children:"Interactions & events"}),`
`,e.jsx(t,{raw:se,story:R}),`
`,e.jsx(t,{raw:re,story:A}),`
`,e.jsx(n.h2,{id:"display--states",children:"Display & states"}),`
`,e.jsx(t,{raw:ie,story:P}),`
`,e.jsx(t,{raw:le,story:M}),`
`,e.jsx(t,{raw:ae,story:F}),`
`,e.jsx(t,{raw:ce,story:W}),`
`,e.jsx(t,{raw:pe,story:N}),`
`,e.jsx(n.h2,{id:"advanced",children:"Advanced"}),`
`,e.jsx(t,{raw:de,story:B}),`
`,e.jsx(t,{raw:me,story:I}),`
`,e.jsx(t,{raw:ue,story:V}),`
`,e.jsx(t,{raw:ye})]})}function Ot(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{t as Example,Ot as default};
