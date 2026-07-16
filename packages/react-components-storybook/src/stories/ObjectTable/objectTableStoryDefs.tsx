/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NonIdealState } from "@blueprintjs/core";
import type {
  DerivedProperty,
  ObjectSet,
  Osdk,
  QueryDefinition,
  WhereClause,
} from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type {
  CellEditInfo,
  ColumnDefinition,
  ObjectTableProps,
} from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import {
  expect,
  fireEvent,
  fn,
  screen,
  userEvent,
  waitFor,
  within,
} from "storybook/test";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";
import { WorkerInterface } from "../../types/WorkerInterface.js";
import {
  ObjectTableInBaseUIDialog,
  ObjectTableInBlueprintDialog,
  ObjectTableInBlueprintDrawer,
} from "./overlays/ObjectTableOverlayStories.js";

// Create a concrete type for Storybook to parse more easily
type EmployeeTableProps = ObjectTableProps<typeof Employee>;

const meta: Meta<EmployeeTableProps> = {
  title: "Components/ObjectTable/Features",
  component: ObjectTable,
  tags: ["beta"],
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    objectType: {
      description: "The object or interface type of the object",
      control: false,
    },
    columnDefinitions: {
      description:
        "Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",
      control: false,
    },
    filter: {
      description:
        "The current where clause to filter the objects in the table. If provided, the filter is controlled.",
      control: false,
    },
    enableOrdering: {
      description: "Whether the table is sortable by the user.",
      control: "boolean",
      defaultValue: true,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    enableColumnPinning: {
      description: "Whether columns can be pinned by the user.",
      control: "boolean",
      defaultValue: true,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    enableColumnResizing: {
      description: "Whether columns can be resized by the user.",
      control: "boolean",
      defaultValue: true,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    enableColumnConfig: {
      description:
        "Whether the column configuration dialog for column visibility and ordering is available to the user.",
      control: "boolean",
      defaultValue: true,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    editMode: {
      description:
        "Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",
      control: "select",
      options: ["manual", "always"],
      defaultValue: "manual",
      table: {
        defaultValue: { summary: "manual" },
      },
    },
    showEditFooter: {
      description:
        "Whether to render the bottom edit footer. Defaults to `true`. Ignored when `editMode` is manual or `onSubmitEdits` is provided — the footer is always shown in that case.",
      control: "boolean",
      defaultValue: true,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    defaultOrderBy: {
      description:
        "The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",
      control: false,
    },
    orderBy: {
      description:
        "The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",
      control: false,
    },
    onOrderByChanged: {
      description:
        "Called when the order by clause is changed. Required when sorting is controlled.",
      control: false,
      table: {
        category: "Events",
      },
    },
    onColumnVisibilityChanged: {
      description:
        "Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",
      control: false,
      table: {
        category: "Events",
      },
    },
    onColumnsPinnedChanged: {
      description:
        "Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",
      control: false,
      table: {
        category: "Events",
      },
    },
    onColumnResize: {
      description:
        "Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",
      control: false,
      table: {
        category: "Events",
      },
    },
    onRowClick: {
      description: "Called when a row is clicked.",
      control: false,
      table: {
        category: "Events",
      },
    },
    onColumnHeaderClick: {
      description:
        "Called when a column header is clicked. Parameters: columnId - The ID of the clicked column.",
      control: false,
      table: {
        category: "Events",
      },
    },
    selectionMode: {
      description:
        "Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",
      control: { type: "select" },
      options: ["single", "multiple", "none"],
      defaultValue: "none",
      table: {
        defaultValue: { summary: "none" },
      },
    },
    selectedRows: {
      description:
        "The currently selected rows in the table. If provided, the row selection is controlled.",
      control: false,
    },
    onRowSelectionChanged: {
      description:
        "Called when the row selection changes, with a RowSelectionChange payload (selectedRows, isSelectAll, derived objectSet).",
      control: false,
      table: {
        category: "Events",
      },
    },
    focusedRow: {
      description:
        "The primary key of the row to render as visually focused. When provided, focus is controlled.",
      control: false,
    },
    onFocusedRowChanged: {
      description:
        "Called when the focused row changes — fires in both controlled and uncontrolled modes so callers can observe focus without taking it over.",
      control: false,
      table: {
        category: "Events",
      },
    },
    renderCellContextMenu: {
      description:
        "If provided, will render this context menu when right clicking on a cell",
      control: false,
      table: {
        category: "Advanced",
      },
    },
    rowHeight: {
      description: "The height of each row in pixels.",
      control: "number",
      defaultValue: 40,
      table: {
        defaultValue: { summary: "40" },
      },
    },
    className: {
      description: "Additional CSS class name for the table",
      control: "text",
    },
  } as Meta<EmployeeTableProps>["argTypes"],
};

// Re-exported by the per-group Features/*.stories.tsx files; this module is
// not itself indexed as a story file (no `*.stories` filename).
export const objectTableMeta = meta;
type Story = StoryObj<typeof meta>;

// Used by stories that don't define their own columnDefinitions.
const defaultEmployeeColumns: ColumnDefinition<Employee>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "emailPrimaryWork" } },
  { locator: { type: "property", id: "jobProfile" } },
  { locator: { type: "property", id: "jobTitle" } },
  { locator: { type: "property", id: "department" } },
  { locator: { type: "property", id: "businessTitle" } },
  { locator: { type: "property", id: "businessArea" } },
  { locator: { type: "property", id: "team" } },
  { locator: { type: "property", id: "workerType" } },
  { locator: { type: "property", id: "locationName" } },
  { locator: { type: "property", id: "locationCity" } },
  { locator: { type: "property", id: "locationCountry" } },
  { locator: { type: "property", id: "locationRegion" } },
  { locator: { type: "property", id: "locationType" } },
  { locator: { type: "property", id: "firstFullTimeStartDate" } },
  { locator: { type: "property", id: "firstInternStartDate" } },
  { locator: { type: "property", id: "employeeNumber" } },
  { locator: { type: "property", id: "adUsername" } },
  { locator: { type: "property", id: "primaryOfficeId" } },
  { locator: { type: "property", id: "preferredNameFirst" } },
  { locator: { type: "property", id: "preferredNameLast" } },
  { locator: { type: "property", id: "leadEmployeeNumber" } },
  { locator: { type: "property", id: "mentorEmployeeNumber" } },
];

const editableColumnDefinitions: ColumnDefinition<Employee>[] = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
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
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
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
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <div>
          {object.firstInternStartDate
            ? new Date(object.firstInternStartDate).toISOString()
            : "No value"}
        </div>
      );
    },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object: Osdk.Instance<Employee>) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) => {
          if (item == null) {
            return "No Value";
          }
          return item ? "Yes" : "No";
        },
      }),
    },
  },
];

// Query definition for the function-backed column
const getEmployeeSeniority: QueryDefinition<Employee> = {
  type: "query",
  apiName: "getEmployeeSeniority",
  version: "1.0.0",
  osdkMetadata: undefined as never,
};

type SeniorityFunctions = {
  seniority: typeof getEmployeeSeniority;
};

// Define column definitions similar to the e2e example
type RDPs = {
  managerName: "string";
};

const columnDefinitions: ColumnDefinition<
  Employee,
  RDPs,
  SeniorityFunctions
>[] = [
  {
    locator: {
      type: "property",
      id: "fullName",
    },
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
        return <span>{object.managerName as string}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
  {
    locator: {
      type: "function",
      id: "seniority",
      queryDefinition: getEmployeeSeniority,
      getFunctionParams: (objectSet: ObjectSet<Employee>) =>
        ({ employees: objectSet }) as never,
      getKey: (object: Osdk.Instance<Employee>) => String(object.$primaryKey),
      getValue: (cellData?: unknown) => cellData,
    },
    renderHeader: () => "Seniority",
    width: 120,
  },
];

// ===========================================================================
// Shared interaction-test helpers
// ===========================================================================

const TARGET_DATA = "Ahmed Williams";

type Canvas = ReturnType<typeof within>;

/** Accessible name of the chevron button that opens a column's header menu. */
const headerMenuName = (columnId: string): string =>
  `Open header menu for column with id=${columnId}`;

/** Resolve a column's `<th>` via its header-menu trigger button. */
async function getColumnHeader(
  root: Canvas,
  columnId: string
): Promise<HTMLElement> {
  const trigger = await root.findByRole("button", {
    name: headerMenuName(columnId),
  });
  const th = trigger.closest("th");
  if (th == null) {
    throw new Error(`Could not find <th> for column "${columnId}"`);
  }
  return th;
}

async function openHeaderMenu(root: Canvas, columnId: string): Promise<void> {
  await userEvent.click(
    await root.findByRole("button", { name: headerMenuName(columnId) })
  );
}

async function clickHeaderMenuItem(label: string): Promise<void> {
  await userEvent.click(await screen.findByRole("menuitem", { name: label }));
}

function getSortDirection(th: HTMLElement): "asc" | "desc" | "none" {
  if (th.querySelector('[data-icon="sort-alphabetical-desc"]') != null) {
    return "desc";
  }
  if (th.querySelector('[data-icon="sort-alphabetical"]') != null) {
    return "asc";
  }
  return "none";
}

function sortDirectionOf(
  root: Canvas,
  columnId: string
): "asc" | "desc" | "none" {
  const trigger = root.queryByRole("button", {
    name: headerMenuName(columnId),
  });
  const th = trigger?.closest("th");
  return th != null ? getSortDirection(th) : "none";
}

/** The resize handle is the trailing `<div>` child of each header `<th>`. */
function getResizeHandle(th: HTMLElement): HTMLElement {
  const children = th.querySelectorAll(":scope > div");
  const handle = children[children.length - 1];
  if (!(handle instanceof HTMLElement)) {
    throw new Error("Could not find column resize handle");
  }
  return handle;
}

/**
 * Simulate dragging a column's resize handle horizontally by `deltaX` px.
 * Uses real pointer events (userEvent) so TanStack's document-level
 * mousemove/mouseup listeners fire in the browser test runner.
 */
async function dragResizeHandle(
  th: HTMLElement,
  deltaX: number
): Promise<void> {
  const handle = getResizeHandle(th);
  const rect = handle.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  await userEvent.pointer([
    { keys: "[MouseLeft>]", target: handle, coords: { x: startX, y } },
    { coords: { x: startX + deltaX, y } },
    { keys: "[/MouseLeft]", coords: { x: startX + deltaX, y } },
  ]);
}

function getHeaderWidth(th: HTMLElement): number {
  return Number.parseFloat(th.style.width);
}

function rowContaining(cell: HTMLElement): HTMLElement {
  const tr = cell.closest("tr");
  if (tr == null) {
    throw new Error("Cell is not inside a row");
  }
  return tr;
}

/**
 * Locate the per-row selection checkboxes. Returned as a thunk because
 * toggling selection re-renders the rows, and any checkbox refs captured
 * earlier could go stale.
 */
const findRowCheckboxes =
  (root: Canvas): (() => Promise<HTMLElement[]>) =>
  () =>
    root.findAllByRole("checkbox", { name: /Select row/u });

const findSelectAllCheckbox = (root: Canvas): Promise<HTMLElement> =>
  root.findByRole("checkbox", { name: /Select all rows/u });

const findDeselectAllCheckbox = (root: Canvas): Promise<HTMLElement> =>
  root.findByRole("checkbox", { name: /Deselect all rows/u });

export const Default: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Minimal setup showing Employee data with default column definitions.",
      },
      source: {
        code: `<ObjectTable objectType={Employee} />`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);

    await openHeaderMenu(canvas, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Sort ascending" })
    ).toBeInTheDocument();
    await expect(
      screen.getByRole("menuitem", { name: "Sort descending" })
    ).toBeInTheDocument();
    await expect(
      screen.getByRole("menuitem", { name: "Pin column" })
    ).toBeInTheDocument();
    await expect(
      screen.getByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  },
};

export const WithObjectSet: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      source: {
        code: `
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`,
      },
    },
  },
  render: (args) => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager",
    });

    return (
      <div className="object-table-container" style={{ height: "600px" }}>
        <ObjectTable
          {...args}
          objectType={Employee}
          objectSet={employeeObjectSet}
        />
      </div>
    );
  },
  // The object set is filtered to `jobProfile: "Marketing Manager"`
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(
      canvas.getAllByText("Marketing Manager").length
    ).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  },
};

export const WithInterfaceType: Story = {
  args: {
    objectType: WorkerInterface as unknown as typeof Employee,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass an interface type instead of an object type. The table shows the interface's " +
          "properties (email, name, employeeNumber) and any object implementing the interface " +
          "will be displayed.",
      },
      source: {
        code: `import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  },
};

export const WithDerivedPropertyOrderingAndFilter: Story = {
  render: () => {
    type RDPs = { managerName: "string" };

    const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
      { locator: { type: "property", id: "fullName" } },
      { locator: { type: "property", id: "department" } },
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
            return <span>{object.managerName as string}</span>;
          }
          return <span style={{ color: "#999" }}>No Manager</span>;
        },
      },
    ];

    const filter: WhereClause<Employee, RDPs> = {
      managerName: { $in: [TARGET_DATA, "Fatima Zhang"] },
    };

    return (
      <div className="object-table-container" style={{ height: "600px" }}>
        <ObjectTable
          objectType={Employee}
          columnDefinitions={columnDefinitions}
          defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
          filter={filter}
        />
      </div>
    );
  },
  // The derived "Manager" column is sortable through the header menu, and
  // `defaultOrderBy` seeds it ascending.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Header for the RDP column renders once the filtered rows load.
    await canvas.findByText("Manager");
    await waitFor(() =>
      expect(canvas.getAllByRole("row").length).toBeGreaterThan(1)
    );

    // defaultOrderBy seeds an ascending sort on the derived managerName column.
    await getColumnHeader(canvas, "managerName");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "managerName")).toBe("asc")
    );

    // Sorting an RDP column flips direction through the same header menu.
    await openHeaderMenu(canvas, "managerName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "managerName")).toBe("desc")
    );

    // Restore the seeded ascending sort so the story ends as it started.
    await openHeaderMenu(canvas, "managerName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "managerName")).toBe("asc")
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Combines derived property columns with `defaultOrderBy` and `filter`. " +
          "Demonstrates sorting by an RDP (managerName) and filtering the derived property.",
      },
      source: {
        code: `type RDPs = { managerName: "string" };

const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

const filter: WhereClause<Employee, RDPs> = {
  managerName: { $in: [TARGET_DATA, "Fatima Zhang"] },
};

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
  filter={filter}
/>`,
      },
    },
  },
};

export const WithFunctionColumn: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      { locator: { type: "property", id: "fullName" } },
      { locator: { type: "property", id: "department" } },
      {
        locator: {
          type: "function",
          id: "seniority",
          queryDefinition: getEmployeeSeniority,
          getFunctionParams: (objectSet: ObjectSet<Employee>) =>
            ({ employees: objectSet }) as never,
          getKey: (object: Osdk.Instance<Employee>) =>
            String(object.$primaryKey),
          getValue: (cellData?: unknown) => cellData,
        },
        renderHeader: () => "Seniority",
        width: 120,
      },
    ] as ColumnDefinition<Employee>[],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use function-backed columns to display computed values from a Foundry query. " +
          "The 'Seniority' column calls `getEmployeeSeniority` with the current object set " +
          "and maps each result back to the corresponding row.",
      },
      source: {
        code: `import { getEmployeeSeniority } from "./ontology/queries";

type SeniorityFunctions = { seniority: typeof getEmployeeSeniority };

const columnDefinitions: ColumnDefinition<Employee, {}, SeniorityFunctions>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "function",
      id: "seniority",
      queryDefinition: getEmployeeSeniority,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (object) => String(object.$primaryKey),
      getValue: (cellData) => cellData,
    },
    renderHeader: () => "Seniority",
    width: 120,
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // The "Seniority" function column resolves server-computed values (the mocked
  // query returns Senior/Mid/Junior/Unknown) and maps them back to each row.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText("Seniority");

    // At least one row should resolve a computed seniority value.
    await waitFor(() =>
      expect(
        canvas.getAllByText(/^(Senior|Mid|Junior|Unknown)$/u).length
      ).toBeGreaterThan(0)
    );
  },
};

export const SingleSelection: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "single",
    onRowSelectionChanged: fn(),
  },
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable objectType={Employee} selectionMode="single" />`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // In "single" mode each row gets a checkbox but there is no header
  // "select all", and selecting a new row replaces the previous selection.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Re-query fresh each time: toggling selection re-renders the rows.
    const rowCheckboxes = findRowCheckboxes(canvas);

    await rowCheckboxes();

    // No top-level "Select all rows" checkbox in single-selection mode.
    await expect(
      canvas.queryByRole("checkbox", { name: /Select all rows/u })
    ).not.toBeInTheDocument();

    // Selecting the first row checks it and notifies the consumer.
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());
    await expect((await rowCheckboxes())[0]).toBeChecked();

    // Selecting a second row moves the selection — the first row clears.
    await userEvent.click((await rowCheckboxes())[1]);
    await expect((await rowCheckboxes())[1]).toBeChecked();
    await expect((await rowCheckboxes())[0]).not.toBeChecked();

    // Clicking the selected row again clears it
    await userEvent.click((await rowCheckboxes())[1]);
    await expect((await rowCheckboxes())[1]).not.toBeChecked();
  },
};

export const MultipleSelection: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple",
    onRowSelectionChanged: fn(),
  },
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable objectType={Employee} selectionMode="multiple" />`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const rowCheckboxes = findRowCheckboxes(canvas);

    const [firstRow, secondRow] = await rowCheckboxes();

    // Selecting one row checks it and notifies the consumer.
    await userEvent.click(firstRow);
    await expect(firstRow).toBeChecked();
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());

    // In "multiple" mode a second row can be selected without clearing the
    // first — both stay checked.
    await userEvent.click(secondRow);
    await expect(firstRow).toBeChecked();
    await expect(secondRow).toBeChecked();

    // The header checkbox toggles every row. Once rows are selected its label
    // flips to "Deselect all rows", so clicking it clears the selection.
    await userEvent.click(await findDeselectAllCheckbox(canvas));
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).not.toBeChecked();
    }

    // With nothing selected the header label flips back to "Select all rows".
    // Clicking it now selects every row.
    await userEvent.click(await findSelectAllCheckbox(canvas));
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).toBeChecked();
    }

    // Everything is selected, so the header label is "Deselect all rows" again.
    // Clicking it clears the entire selection.
    await userEvent.click(await findDeselectAllCheckbox(canvas));
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).not.toBeChecked();
    }
  },
};

export const WithContextMenu: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    renderCellContextMenu: (_: any, cellValue: unknown) => {
      return (
        <div
          style={{
            background: "white",
            padding: 8,
            border: "1px solid #d1d5db",
            boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
            fontSize: 13,
            borderRadius: 4,
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
          <div>{cellValue ? String(cellValue) : "No Value"}</div>
        </div>
      );
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => (
    <div
      style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
      <div>{cellValue ? String(cellValue) : "No Value"}</div>
    </div>
  )}
/>`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <div style={{ padding: "12px" }}>Right click on any cell</div>
      <ObjectTable {...args} />
    </div>
  ),
  // Right-clicking a cell opens the custom context menu (portalled to body),
  // and clicking elsewhere dismisses it.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);

    // Right-click a cell to open the custom context menu.
    void fireEvent.contextMenu(canvas.getByText(TARGET_DATA));
    await expect(await screen.findByText("Cell Value:")).toBeInTheDocument();

    // Clicking outside the menu closes it.
    await userEvent.click(canvas.getByText("Right click on any cell"));
    await waitFor(() =>
      expect(screen.queryByText("Cell Value:")).not.toBeInTheDocument()
    );
  },
};

export const CustomColumnWidths: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150,
    })) as any,
    onColumnResize: fn(),
  },
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // Columns render at their configured widths; dragging the resize handle
  // changes a column's width (firing onColumnResize), and a double-click on the
  // handle resets it back to the configured width (firing onColumnResize null).
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // `getColumnHeader` resolves once the real (non-loading) header renders.
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    await expect(getHeaderWidth(fullNameHeader)).toBe(250);

    // Drag the resize handle to widen the column.
    await dragResizeHandle(fullNameHeader, 120);
    await waitFor(() =>
      expect(getHeaderWidth(fullNameHeader)).toBeGreaterThan(250)
    );
    await expect(args.onColumnResize).toHaveBeenCalledWith(
      "fullName",
      expect.any(Number)
    );

    // Double-clicking the handle resets the column to its configured width.
    (args.onColumnResize as ReturnType<typeof fn>).mockClear();
    await userEvent.dblClick(getResizeHandle(fullNameHeader));
    await waitFor(() => expect(getHeaderWidth(fullNameHeader)).toBe(250));
    await expect(args.onColumnResize).toHaveBeenCalledWith("fullName", null);
  },
};

export const WithDefaultSorting: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    defaultOrderBy: [
      {
        property: "fullName",
        direction: "desc",
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // `defaultOrderBy` seeds a descending sort on fullName. The header menu can
  // flip it to ascending and back to the default descending state.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await getColumnHeader(canvas, "fullName");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "fullName")).toBe("desc")
    );

    // Switch to ascending.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "fullName")).toBe("asc")
    );

    // Sorting descending again returns to the default sort state.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "fullName")).toBe("desc")
    );
  },
};

export const WithDefaultColumnPinning: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      {
        locator: { type: "property", id: "fullName" },
        pinned: "left",
      },
      {
        locator: { type: "property", id: "emailPrimaryWork" },
      },
      {
        locator: { type: "property", id: "jobTitle" },
      },
      {
        locator: { type: "property", id: "department" },
        pinned: "right",
      },
      {
        locator: { type: "property", id: "firstFullTimeStartDate" },
      },
    ],
    onColumnsPinnedChanged: fn(),
  },
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    pinned: "left",
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
  },
  {
    locator: { type: "property", id: "department" },
    pinned: "right",
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // fullName is pinned left and department pinned right by default. Unpinning a
  // column and re-pinning it through the header menu returns it to its pinned
  // state, firing onColumnsPinnedChanged each time.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    const departmentHeader = await getColumnHeader(canvas, "department");
    await expect(fullNameHeader).toHaveAttribute("data-pinned", "left");
    await expect(departmentHeader).toHaveAttribute("data-pinned", "right");

    // Unpin fullName via its header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Unpin Column");
    await waitFor(() =>
      expect(fullNameHeader).toHaveAttribute("data-pinned", "false")
    );
    await expect(args.onColumnsPinnedChanged).toHaveBeenCalled();

    // Re-pin it to restore the default left-pinned state.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Pin column");
    await waitFor(() =>
      expect(fullNameHeader).toHaveAttribute("data-pinned", "left")
    );
  },
};

export const WithCustomColumn: Story = {
  parameters: {
    docs: {
      source: {
        code: `const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    `,
      },
    },
  },
  args: {
    objectType: Employee,
    columnDefinitions: [
      ...(columnDefinitions.slice(0, 3) as ColumnDefinition<Employee>[]),
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  background: "white",
                  cursor: "pointer",
                }}
                onClick={() => alert(`View ${object.fullName}`)}
              >
                View
              </button>
              <button
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  background: "white",
                  cursor: "pointer",
                }}
                onClick={() => alert(`Edit ${object.fullName}`)}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ],
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // The custom "Actions" column renders View/Edit buttons in every row.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for rows (and their action buttons) to render.
    await expect(
      (await canvas.findAllByRole("button", { name: "View" })).length
    ).toBeGreaterThan(0);
    await expect(canvas.getByText("Actions")).toBeInTheDocument();
    await expect(
      canvas.getAllByRole("button", { name: "Edit" }).length
    ).toBeGreaterThan(0);
  },
};

export const EventListeners: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    orderBy: [{ property: "fullName", direction: "asc" }] as any,
    onRowClick: fn(),
    onColumnHeaderClick: fn(),
    onRowSelectionChanged: fn(),
    onOrderByChanged: fn(),
    onColumnVisibilityChanged: fn(),
    onColumnsPinnedChanged: fn(),
    onColumnResize: fn(),
    onFocusedRowChanged: fn(),
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable
  objectType={Employee}
  columnDefinitions={defaultEmployeeColumns}
  selectionMode="multiple"
  onRowClick={(employee) => {
    console.log("Row clicked:", employee);
  }}
  onFocusedRowChanged={(employee) => {
    console.log("Row focused:", employee);
  }}
  onColumnHeaderClick={(columnId) => {
    console.log("Column header clicked:", columnId);
  }}
  onRowSelectionChanged={(change) => {
    console.log("Selection changed:", change.selectedRows, change.isSelectAll);
    console.log("Derived objectSet:", change.objectSet);
  }}
  onOrderByChanged={(orderBy) => {
    console.log("Sort changed:", orderBy);
  }}
  onColumnVisibilityChanged={(visibilityState) => {
    console.log("Column visibility changed:", visibilityState);
  }}
  onColumnsPinnedChanged={(pinnedState) => {
    console.log("Pinned columns changed:", pinnedState);
  }}
  onColumnResize={(columnId, newWidth) => {
    console.log("Column resized:", columnId, newWidth);
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [clickedRow, setClickedRow] = useState<any>(null);
    const [clickedColumn, setClickedColumn] = useState<string | null>(null);
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const [orderBy, setOrderBy] = useState<any>([
      {
        property: "fullName",
        direction: "asc",
      },
    ]);
    const [lastEvent, setLastEvent] = useState<string>("");

    const handleRowClick = useCallback(
      (employee: any) => {
        args.onRowClick?.(employee);
        setClickedRow(employee);
        setLastEvent("onRowClick");
      },
      [args]
    );

    const handleColumnHeaderClick = useCallback(
      (columnId: string) => {
        args.onColumnHeaderClick?.(columnId);
        setClickedColumn(columnId);
        setLastEvent("onColumnHeaderClick");
      },
      [args]
    );

    const handleRowSelectionChanged = useCallback(
      (change: any) => {
        args.onRowSelectionChanged?.(change);
        setSelectedRows(change.selectedRows.map((r: any) => r.$primaryKey));
        setIsSelectAll(change.isSelectAll);
        setLastEvent("onRowSelectionChanged");
      },
      [args]
    );

    const handleOrderByChanged = useCallback(
      (newOrderBy: any) => {
        args.onOrderByChanged?.(newOrderBy);
        setOrderBy(newOrderBy);
        setLastEvent("onOrderByChanged");
      },
      [args]
    );

    const handleColumnVisibilityChanged = useCallback(
      (visibilityState: any) => {
        args.onColumnVisibilityChanged?.(visibilityState);
        setLastEvent("onColumnVisibilityChanged");
      },
      [args]
    );

    const handleColumnsPinnedChanged = useCallback(
      (pinnedState: any) => {
        args.onColumnsPinnedChanged?.(pinnedState);
        setLastEvent("onColumnsPinnedChanged");
      },
      [args]
    );

    const handleColumnResize = useCallback(
      (columnId: string, newWidth: number | null) => {
        args.onColumnResize?.(columnId, newWidth);
        setLastEvent(`onColumnResize (${columnId})`);
      },
      [args]
    );

    return (
      <div>
        <div
          style={{
            marginBottom: "16px",
            padding: "12px",
            backgroundColor: "#f0f9ff",
            borderRadius: "4px",
            border: "1px solid #bfdbfe",
          }}
        >
          <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
            Event Monitor:
          </div>
          <div style={{ marginBottom: "8px", fontSize: "12px" }}>
            <strong>Last event:</strong> {lastEvent || "None"}
          </div>
          <div style={{ marginBottom: "8px", fontSize: "12px" }}>
            <strong>Row clicked:</strong>{" "}
            {clickedRow ? <code>{clickedRow.fullName}</code> : "None"}
          </div>
          <div style={{ marginBottom: "8px", fontSize: "12px" }}>
            <strong>Column clicked:</strong>{" "}
            {clickedColumn ? <code>{clickedColumn}</code> : "None"}
          </div>
          <div style={{ marginBottom: "8px", fontSize: "12px" }}>
            <strong>Selected rows:</strong>{" "}
            {isSelectAll ? "All employees" : `${selectedRows.length} employees`}
          </div>
          <div style={{ fontSize: "12px" }}>
            <strong>Current sort:</strong>{" "}
            {orderBy?.[0]
              ? `${orderBy[0].property} (${orderBy[0].direction})`
              : "None"}
          </div>
        </div>
        <div className="object-table-container" style={{ height: "600px" }}>
          <ObjectTable
            {...args}
            selectedRows={selectedRows}
            orderBy={orderBy}
            onRowClick={handleRowClick}
            onColumnHeaderClick={handleColumnHeaderClick}
            onRowSelectionChanged={handleRowSelectionChanged}
            onOrderByChanged={handleOrderByChanged}
            onColumnVisibilityChanged={handleColumnVisibilityChanged}
            onColumnsPinnedChanged={handleColumnsPinnedChanged}
            onColumnResize={handleColumnResize}
          />
        </div>
      </div>
    );
  },
  // Exercises every event listener exposed by ObjectTable and asserts each spy fires
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const rowCheckboxes = findRowCheckboxes(canvas);

    await canvas.findByText(TARGET_DATA);

    // onRowClick + onFocusedRowChanged: clicking a row body fires both.
    await userEvent.click(canvas.getByText(TARGET_DATA));
    await waitFor(() => expect(args.onRowClick).toHaveBeenCalled());
    await expect(args.onFocusedRowChanged).toHaveBeenCalled();

    // onColumnHeaderClick: clicking the header label (not the menu chevron).
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    await userEvent.click(within(fullNameHeader).getByText("Name"));
    await waitFor(() =>
      expect(args.onColumnHeaderClick).toHaveBeenCalledWith("fullName")
    );

    // onRowSelectionChanged: toggling a row checkbox (selectionMode "multiple").
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());

    // onOrderByChanged: sorting through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(args.onOrderByChanged).toHaveBeenCalled());

    // onColumnsPinnedChanged: pinning through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Pin column");
    await waitFor(() => expect(args.onColumnsPinnedChanged).toHaveBeenCalled());

    // onColumnResize: dragging the resize handle (re-resolve the header, since
    // the earlier sort/pin re-renders may have replaced the node).
    await dragResizeHandle(await getColumnHeader(canvas, "fullName"), 100);
    await waitFor(() => expect(args.onColumnResize).toHaveBeenCalled());

    // onColumnVisibilityChanged: removing a column via the config dialog.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Configure Columns");
    const removeButtons = await screen.findAllByRole("button", {
      name: /^Remove /u,
    });
    await userEvent.click(removeButtons[0]);
    await userEvent.click(await screen.findByRole("button", { name: "Apply" }));
    await waitFor(() =>
      expect(args.onColumnVisibilityChanged).toHaveBeenCalled()
    );

    // Reset the row selection so the story does not end with a checked row.
    await userEvent.click(await findDeselectAllCheckbox(canvas));
    await waitFor(async () => {
      for (const checkbox of await rowCheckboxes()) {
        expect(checkbox).not.toBeChecked();
      }
    });
  },
};

export const ControlledSorting: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    orderBy: [{ property: "fullName", direction: "asc" }] as any,
    onOrderByChanged: fn(),
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: `const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`,
      },
    },
  },
  render: (args) => {
    const [orderBy, setOrderBy] = useState<any>(
      args.orderBy ?? [{ property: "fullName", direction: "asc" }]
    );
    const handleOrderByChanged = useCallback(
      (newOrderBy: any) => {
        args.onOrderByChanged?.(newOrderBy);
        setOrderBy(newOrderBy);
      },
      [args]
    );

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <strong>Current Sort:</strong>{" "}
          {orderBy.map((o: any, i: number) => (
            <span key={i}>
              {o.property} ({o.direction}){i < orderBy.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="object-table-container" style={{ height: "600px" }}>
          <ObjectTable
            {...args}
            orderBy={orderBy}
            onOrderByChanged={handleOrderByChanged}
          />
        </div>
      </div>
    );
  },
  // Sorting is controlled: the header menu drives `onOrderByChanged`, and the
  // caller's banner reflects the new order.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Seeded controlled state shows fullName ascending.
    await getColumnHeader(canvas, "fullName");
    await expect(canvas.getByText("fullName (asc)")).toBeInTheDocument();

    // Sort descending through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");

    await waitFor(() => expect(args.onOrderByChanged).toHaveBeenCalled());
    await waitFor(() =>
      expect(canvas.getByText("fullName (desc)")).toBeInTheDocument()
    );

    // Restore the seeded ascending sort so the story ends as it started.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() =>
      expect(canvas.getByText("fullName (asc)")).toBeInTheDocument()
    );
  },
};

export const ControlledSelection: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    onRowSelectionChanged: fn(),
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: `const [selectedRows, setSelectedRows] = useState<any[]>([]);
const [isSelectAll, setIsSelectAll] = useState(false);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    isAllSelected={isSelectAll}
    onRowSelectionChanged={(change) => {
      setSelectedRows(change.selectedRows.map((r) => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
    }}
  />
);`,
      },
    },
  },
  render: (args) => {
    const [selectedRows, setSelectedRows] = useState<any[]>(
      args.selectedRows ?? []
    );
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelectionChanged = useCallback(
      (change: {
        selectedRows: Array<{ $primaryKey: any }>;
        isSelectAll: boolean;
      }) => {
        args.onRowSelectionChanged?.(change as any);
        setSelectedRows(change.selectedRows.map((r) => r.$primaryKey));
        setIsSelectAll(change.isSelectAll);
      },
      [args]
    );

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <strong>Selected:</strong>{" "}
          {isSelectAll ? "All Employees" : `${selectedRows.length} employees`}
          {selectedRows.length > 0 && (
            <button
              style={{
                marginLeft: "16px",
                padding: "4px 8px",
                fontSize: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                background: "white",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedRows([]);
                setIsSelectAll(false);
              }}
            >
              Clear Selection
            </button>
          )}
        </div>
        <div className="object-table-container" style={{ height: "600px" }}>
          <ObjectTable
            {...args}
            selectedRows={selectedRows}
            isAllSelected={isSelectAll}
            onRowSelectionChanged={handleRowSelectionChanged}
          />
        </div>
      </div>
    );
  },
  // Selection is controlled: the caller's banner tracks the selected count and a
  // "Clear Selection" button resets it.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const rowCheckboxes = findRowCheckboxes(canvas);

    await rowCheckboxes();

    // Select two rows; the controlled banner counts them.
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());
    await waitFor(() =>
      expect(canvas.getByText("1 employees")).toBeInTheDocument()
    );

    await userEvent.click((await rowCheckboxes())[1]);
    await waitFor(() =>
      expect(canvas.getByText("2 employees")).toBeInTheDocument()
    );

    // Clearing resets the controlled selection back to zero.
    await userEvent.click(
      canvas.getByRole("button", { name: "Clear Selection" })
    );
    await waitFor(() =>
      expect(canvas.getByText("0 employees")).toBeInTheDocument()
    );
    await expect(
      canvas.queryByRole("button", { name: "Clear Selection" })
    ).not.toBeInTheDocument();
  },
};

export const ControlledFocusedRow: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    onFocusedRowChanged: fn(),
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the `focusedRow` / `onFocusedRowChanged` API. Click any row to focus it; " +
          "the focused employee is shown in the banner above and persists until cleared by the caller. " +
          "Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing.",
      },
      source: {
        code: `const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

return (
  <>
    <div>
      Focused employee: {focusedRow?.fullName ?? "none"}
      <button
        onClick={() => setFocusedRow(null)}
        disabled={focusedRow == null}
      >
        Clear focus
      </button>
    </div>
    <ObjectTable
      objectType={Employee}
      focusedRow={focusedRow?.$primaryKey ?? null}
      onFocusedRowChanged={setFocusedRow}
    />
  </>
);`,
      },
    },
  },
  render: (args) => {
    // `focusedRow` (the prop) is now a primary key, but the
    // `onFocusedRowChanged` callback still delivers the full row, so the
    // banner keeps a full object in state and passes its key back down.
    type FocusedEmployee = NonNullable<
      Parameters<NonNullable<EmployeeTableProps["onFocusedRowChanged"]>>[0]
    >;
    const [focusedRow, setFocusedRow] = useState<FocusedEmployee | null>(null);

    const handleFocusedRowChanged = useCallback(
      (row: FocusedEmployee | null) => {
        args.onFocusedRowChanged?.(row);
        setFocusedRow(row);
      },
      [args]
    );

    return (
      <div>
        <div
          style={{
            marginBottom: "16px",
            padding: "12px",
            backgroundColor: "#f0f9ff",
            borderRadius: "4px",
            border: "1px solid #bfdbfe",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span>
            <strong>Focused employee:</strong>{" "}
            {focusedRow == null
              ? "none"
              : `${focusedRow.fullName} (#${focusedRow.employeeNumber})`}
          </span>
          <button
            type="button"
            style={{
              padding: "4px 8px",
              fontSize: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              background: "white",
              cursor: focusedRow == null ? "not-allowed" : "pointer",
            }}
            onClick={() => setFocusedRow(null)}
            disabled={focusedRow == null}
          >
            Clear focus
          </button>
        </div>
        <div className="object-table-container" style={{ height: "600px" }}>
          <ObjectTable
            {...args}
            focusedRow={focusedRow?.$primaryKey ?? null}
            onFocusedRowChanged={handleFocusedRowChanged}
          />
        </div>
      </div>
    );
  },
  // Focus is controlled: clicking a row focuses it (data-focused + banner),
  // clicking outside fires onFocusedRowChanged(null) so the caller clears it,
  // and the explicit "Clear focus" button also resets it.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);

    // Clicking a row focuses it (state update + re-render is async).
    await userEvent.click(canvas.getByText(TARGET_DATA));
    await waitFor(() => expect(args.onFocusedRowChanged).toHaveBeenCalled());
    await waitFor(() =>
      expect(canvas.getByText(/Ahmed Williams \(#\d+\)/u)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute(
        "data-focused",
        "true"
      )
    );

    // Clicking outside the table clears focus via onFocusedRowChanged(null).
    await userEvent.click(canvas.getByText(/Focused employee:/u));
    await waitFor(() =>
      expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute(
        "data-focused",
        "false"
      )
    );

    // Re-focus, then the explicit "Clear focus" button also resets it.
    await userEvent.click(canvas.getByText(TARGET_DATA));
    await waitFor(() =>
      expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute(
        "data-focused",
        "true"
      )
    );
    await userEvent.click(canvas.getByRole("button", { name: "Clear focus" }));
    await waitFor(() =>
      expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute(
        "data-focused",
        "false"
      )
    );
  },
};

export const DisableAllHeaderMenuFeatures: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    enableOrdering: false,
    enableColumnPinning: false,
    enableColumnResizing: false,
    enableColumnConfig: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // With ordering, pinning, resizing and column config all disabled, the header
  // menu has no items, so its chevron trigger is never rendered.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);

    await expect(
      canvas.queryByRole("button", { name: /Open header menu/iu })
    ).not.toBeInTheDocument();
  },
};

export const HeaderMenuInsideBlueprintDrawer: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. " +
          "Open the drawer and click any column header chevron; the menu should appear above the drawer.",
      },
      source: {
        code: `<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`,
      },
    },
  },
  render: (args) => <ObjectTableInBlueprintDrawer tableProps={args} />,
  // The drawer opens by default. The header menu must portal *above* the drawer
  // and stay interactive. The drawer renders to document.body, so query `screen`.
  play: async () => {
    await screen.findByText(TARGET_DATA);

    await openHeaderMenu(screen, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
  },
};

export const HeaderMenuInsideBlueprintDialog: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. " +
          "Open the dialog and click any column header chevron; the menu should appear above the dialog.",
      },
      source: {
        code: `<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`,
      },
    },
  },
  render: (args) => <ObjectTableInBlueprintDialog tableProps={args} />,
  // The dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText(TARGET_DATA);

    await openHeaderMenu(screen, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
  },
};

export const HeaderMenuInsideBaseUIDialog: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. " +
          "Open the dialog and click any column header chevron; the menu should appear above the dialog.",
      },
      source: {
        code: `<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`,
      },
    },
  },
  render: (args) => <ObjectTableInBaseUIDialog tableProps={args} />,
  // The Base UI dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText(TARGET_DATA);

    await openHeaderMenu(screen, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
  },
};

export const CustomRowHeight: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    rowHeight: 56,
  },
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable objectType={Employee} rowHeight={56} />`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // `rowHeight` is applied to each rendered row.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);

    await expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveStyle({
      height: "56px",
    });
  },
};

export const WithCustomRenderers: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      {
        locator: { type: "property", id: "fullName" },
        renderHeader: () => (
          <a
            href="#"
            className="header-link"
            onClick={(e) => {
              e.preventDefault();
              alert("Employee Name column clicked!");
            }}
          >
            Employee Name
          </a>
        ),
      },
      {
        locator: { type: "property", id: "emailPrimaryWork" },
      },
      {
        locator: { type: "property", id: "jobTitle" },
        renderHeader: () => "Job Title",
      },
      {
        locator: {
          type: "custom",
          id: "employment-status",
        },
        renderHeader: () => "Employment Status",
        renderCell: (employee: any) => {
          const startDate = employee.firstFullTimeStartDate;
          const isActive = startDate && new Date(startDate) <= new Date();

          return (
            <span className={`status-tag ${isActive ? "active" : "inactive"}`}>
              {isActive ? "Active" : "Inactive"}
            </span>
          );
        },
        width: 140,
      },
      {
        locator: { type: "property", id: "department" },
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
  // Custom `renderHeader` produces a link header, and a custom `renderCell`
  // produces Active/Inactive status tags. (The header link calls window.alert
  // on click, which would block the test runner, so we only assert it renders.)
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);

    await expect(
      canvas.getByRole("link", { name: "Employee Name" })
    ).toBeInTheDocument();
    await expect(canvas.getByText("Employment Status")).toBeInTheDocument();
    await expect(
      canvas.getAllByText(/^(Active|Inactive)$/u).length
    ).toBeGreaterThan(0);
  },
};

export const EditableTable: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: editableColumnDefinitions,
    editMode: "manual" as const,
    onCellValueChanged: fn(),
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
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
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
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
  // Example where the field is inferred from datatype
  {
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
  />
);`,
      },
    },
  },
  render: (args) => {
    const [lastEdit, setLastEdit] = useState<
      CellEditInfo<Osdk.Instance<typeof Employee>> | undefined
    >();
    const handleCellValueChanged = useCallback(
      (editInfo: CellEditInfo<Osdk.Instance<typeof Employee>>) => {
        args.onCellValueChanged?.(editInfo as any);
        setLastEdit(editInfo);
      },
      [args]
    );

    return (
      <div className="object-table-container" style={{ height: "600px" }}>
        <div
          style={{
            padding: "12px",
            backgroundColor: "#fff3cd",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        >
          Try changing showEditFooter to false to hide the edit footer bar.
          Change edit mode to "manual" to enable inline editing with an Edit
          Table button.
        </div>
        {lastEdit != null && (
          <div
            style={{
              padding: "12px",
              backgroundColor: "#d1ecf1",
              marginBottom: "8px",
              borderRadius: "4px",
              fontFamily: "monospace",
              fontSize: "13px",
            }}
          >
            <strong>Last cell edit:</strong> Column "{lastEdit.columnId}"
            changed from "{String(lastEdit.oldValue)}" to "
            {String(lastEdit.newValue)}"
          </div>
        )}
        <ObjectTable {...args} onCellValueChanged={handleCellValueChanged} />
      </div>
    );
  },
  // Manual edit mode: enter edit mode, then edit a text cell, a dropdown cell
  // and a date cell (each firing onCellValueChanged), and finally Cancel out.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Display mode first — the fullName cell shows plain text.
    await canvas.findByText(TARGET_DATA);

    // Enter edit mode; cells become editable inputs.
    await userEvent.click(canvas.getByRole("button", { name: "Edit Table" }));

    // First data row (header row is index 0). Cells follow column order.
    const firstRow = canvas.getAllByRole("row")[1];
    const cellsOf = () => within(firstRow).getAllByRole("cell");

    // Text edit (fullName, column 0). Typing then tabbing away commits the edit.
    const nameInput = within(cellsOf()[0]).getByRole("textbox");
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Ahmed Williamson");
    await userEvent.tab();
    await waitFor(() =>
      expect(args.onCellValueChanged).toHaveBeenCalledWith(
        expect.objectContaining({
          columnId: "fullName",
          newValue: "Ahmed Williamson",
        })
      )
    );

    // Dropdown edit (department, column 3) — visible once the row is focused.
    const departmentCombobox = await within(cellsOf()[3]).findByRole(
      "combobox"
    );
    await userEvent.click(departmentCombobox);
    await userEvent.click(
      await screen.findByRole("option", { name: "Engineering" })
    );
    await waitFor(() =>
      expect(args.onCellValueChanged).toHaveBeenCalledWith(
        expect.objectContaining({
          columnId: "department",
          newValue: "Engineering",
        })
      )
    );

    // Date edit (firstFullTimeStartDate, column 5) — focusing opens the
    // calendar, then "Today" commits a new value.
    const dateInput = within(cellsOf()[5]).getByRole("combobox");
    await userEvent.click(dateInput);
    await userEvent.click(await screen.findByRole("button", { name: "Today" }));
    await waitFor(() =>
      expect(args.onCellValueChanged).toHaveBeenCalledWith(
        expect.objectContaining({ columnId: "firstFullTimeStartDate" })
      )
    );

    // Cancel exits edit mode; the "Edit Table" button returns.
    await userEvent.click(canvas.getByRole("button", { name: "Cancel" }));
    await expect(
      await canvas.findByRole("button", { name: "Edit Table" })
    ).toBeInTheDocument();
  },
};

export const WithSubmitEditsButton: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: editableColumnDefinitions,
    editMode: "manual",
    onSubmitEdits: fn(
      async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      }
    ),
  } as any,
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
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
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
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
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
    renderCell: (object) => (
      <div>
        {object.firstInternStartDate
          ? new Date(object.firstInternStartDate).toISOString()
          : "No value"}
      </div>
    ),
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
    onCellValueChanged={(info) => {
      console.log("Cell value changed:", info);
    }}
    onSubmitEdits={async (edits) => {
      // Call your API or action here
      await submitEmployeeUpdates(edits);
      // Return true to indicate success and clear edits
      return true;
    }}
  />
);`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} objectType={Employee} />
    </div>
  ),
  // Editing enables "Submit Edits"; submitting calls onSubmitEdits and, on
  // success, clears edits and exits edit mode (the async mock resolves true).
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);
    await userEvent.click(canvas.getByRole("button", { name: "Edit Table" }));

    const firstRow = canvas.getAllByRole("row")[1];
    const firstCell = within(firstRow).getAllByRole("cell")[0];
    const nameInput = within(firstCell).getByRole("textbox");
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Ahmed Williamson");
    await userEvent.tab();

    // The Submit Edits button enables once there is a pending edit.
    const submit = canvas.getByRole("button", { name: "Submit Edits" });
    await waitFor(() => expect(submit).toBeEnabled());

    await userEvent.click(submit);
    await waitFor(() => expect(args.onSubmitEdits).toHaveBeenCalled());

    // After the async submit resolves successfully, edit mode exits.
    await waitFor(
      () =>
        expect(
          canvas.getByRole("button", { name: "Edit Table" })
        ).toBeInTheDocument(),
      { timeout: 5000 }
    );
  },
};

export const EditableWithValidation: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      {
        locator: { type: "property", id: "fullName" },
        editable: true,
        // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
        validateEdit: async (value: unknown) => {
          const str = String(value ?? "");
          return str.trim().length >= 2
            ? undefined
            : "Name must be at least 2 characters long";
        },
      },
      {
        locator: { type: "property", id: "emailPrimaryWork" },
        editable: true,
        // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
        validateEdit: async (value: unknown) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
          return emailRegex.test(String(value ?? ""))
            ? undefined
            : "Please enter a valid email address";
        },
      },
      {
        locator: { type: "property", id: "employeeNumber" },
        editable: true,
        // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
        validateEdit: async (value: unknown) => {
          return Number(value) > 0
            ? undefined
            : "Employee number must be positive";
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
            isSearchable: true,
            placeholder: "Search job titles…",
          }),
        },
        // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
        validateEdit: async (value: unknown) => {
          return value ? undefined : "Job title is required";
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
        locator: { type: "property", id: "firstFullTimeStartDate" },
        editable: true,
        editFieldConfig: {
          fieldComponent: "DATE_PICKER",
          getFieldComponentProps: () => ({
            showTime: false,
            placeholder: "Select date...",
          }),
        },
        // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
        validateEdit: async (value: unknown) => {
          if (!value || isNaN(Date.parse(value as string))) {
            return "Please enter a valid date";
          }
          const date = new Date(value as string);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (date < today) {
            return "Date cannot be before today";
          }
          return undefined;
        },
      },
    ],
    editMode: "always",
    onSubmitEdits: fn(
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
      async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
        return true;
      }
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
    validateEdit: async (value: string) => {
      return value.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
    },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value: string) => {
      const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
      return emailRegex.test(value) ? undefined : "Please enter a valid email address";
    },
  },
  {
    locator: { type: "property", id: "employeeNumber" },
    editable: true,
    validateEdit: async (value: number) => {
      return value > 0 ? undefined : "Employee number must be positive";
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
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
    validateEdit: async (value: unknown) => {
      return value ? undefined : "Job title is required";
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
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
    onSubmitEdits={async (edits) => {
      return true;
    }}
  />
);`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#fff3cd",
          marginBottom: "8px",
          borderRadius: "4px",
        }}
      >
        Try editing cells with invalid values to see validation in action:
        <ul style={{ margin: "8px 0 0 20px" }}>
          <li>Name must be at least 2 characters</li>
          <li>Email must be a valid format</li>
          <li>Employee number must be positive</li>
          <li>Job title is required</li>
          <li>Start date is required</li>
        </ul>
      </div>
      <ObjectTable {...args} objectType={Employee} />
    </div>
  ),
  // editMode "always": entering an invalid value surfaces a validation error and
  // disables Submit Edits; correcting the value clears the error and re-enables.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Cells are editable immediately; fullName is pre-filled with the value.
    const nameInput = await canvas.findByDisplayValue(TARGET_DATA);

    // Too-short name fails validation (min 2 chars).
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "a");
    await userEvent.tab();

    await waitFor(() =>
      expect(canvas.getByText("Validation error")).toBeInTheDocument()
    );
    await expect(
      canvas.getByRole("button", { name: "Submit Edits" })
    ).toBeDisabled();

    // Correcting the value clears the error and re-enables Submit Edits.
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Valid Name");
    await userEvent.tab();

    await waitFor(() =>
      expect(canvas.queryByText("Validation error")).not.toBeInTheDocument()
    );
    await expect(
      canvas.getByRole("button", { name: "Submit Edits" })
    ).toBeEnabled();

    // Restore the original value
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, TARGET_DATA);
    await userEvent.tab();
    await waitFor(() =>
      expect(canvas.getByDisplayValue(TARGET_DATA)).toBeInTheDocument()
    );
  },
};

export const PerRowEditableAndFieldConfig: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      { locator: { type: "property", id: "fullName" } },
      {
        locator: { type: "property", id: "jobTitle" },
        editable: (rowData: Osdk.Instance<Employee>) => {
          const jobTitle = rowData.jobTitle ?? "";
          return jobTitle === "Senior Product Manager";
        },
      },
      {
        locator: { type: "property", id: "department" },
        editable: true,
        editFieldConfig: {
          fieldComponent: "DROPDOWN",
          getFieldComponentProps: (employee: Osdk.Instance<Employee>) => ({
            items:
              employee.department === "Operations"
                ? ["Sales", "Marketing"]
                : ["Sales", "Marketing", "Finance", "Human Resources"],
          }),
        },
      },
    ],
    editMode: "always" as const,
    onCellValueChanged: fn(),
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. " +
          "jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows",
      },
      source: {
        code: `const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "property", id: "jobTitle" },
    // Only allow editing for Senior Product Manager
    editable: (rowData) => {
      const jobTitle = String(rowData.jobTitle ?? "");
      return jobTitle === "Senior Product Manager";
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      // Dropdown items depend on the row's current department
      getFieldComponentProps: (employee) => ({
        items: employee.department === "Engineering"
          ? ["Engineering", "Product", "Design"]
          : ["Sales", "Marketing", "Finance", "Human Resources"],
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
  />
);`,
      },
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#fff3cd",
          marginBottom: "8px",
          borderRadius: "4px",
        }}
      >
        JobTitle is only editable for "Senior Product Manager" rows. Department
        dropdown shows only 2 options for Operations rows.
      </div>
      <ObjectTable {...args} />
    </div>
  ),
  // Per-row config: jobTitle is only editable for "Senior Product Manager" rows,
  // and the department dropdown offers a restricted item list for Operations
  // rows (2 options) versus other rows (4, including "Finance").
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);

    // jobTitle (column 1) is editable only for the Senior Product Manager.
    const editableCell = within(
      rowContaining(canvas.getByText("Margaret Jackson"))
    ).getAllByRole("cell");
    await expect(editableCell[1]).toHaveAttribute("data-editable", "true");

    const nonEditableCell = within(
      rowContaining(canvas.getByText(TARGET_DATA))
    ).getAllByRole("cell");
    await expect(nonEditableCell[1]).not.toHaveAttribute("data-editable");

    // Operations row department dropdown shows only 2 options.
    const opRow = rowContaining(canvas.getByText("William Liu"));
    await userEvent.click(canvas.getByText("William Liu"));
    void fireEvent.click(await within(opRow).findByRole("combobox"));
    await expect(await screen.findAllByRole("option")).toHaveLength(2);
    await expect(
      screen.queryByRole("option", { name: "Finance" })
    ).not.toBeInTheDocument();
    await userEvent.keyboard("{Escape}");

    // Non-Operations row: the list includes "Finance".
    const ahmedRow = rowContaining(canvas.getByText(TARGET_DATA));
    await userEvent.click(canvas.getByText(TARGET_DATA));
    void fireEvent.click(await within(ahmedRow).findByRole("combobox"));
    await expect(
      await screen.findByRole("option", { name: "Finance" })
    ).toBeInTheDocument();

    // Close the dropdown so the story ends with no popup open.
    await userEvent.keyboard("{Escape}");
    await waitFor(() =>
      expect(
        screen.queryByRole("option", { name: "Finance" })
      ).not.toBeInTheDocument()
    );
  },
};

export const RowAttributesForStyling: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      { locator: { type: "property", id: "fullName" } },
      { locator: { type: "property", id: "jobTitle" } },
      { locator: { type: "property", id: "department" } },
      { locator: { type: "property", id: "locationCity" } },
    ],
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates using `getRowAttributes` to set data attributes on rows and a `className` on the table to scope CSS overrides via the data attribute selector. " +
          'New York employees get a light blue background through the `[data-highlight-row="true"]` CSS selector scoped under the table\'s className.',
      },
      source: {
        code: `/* CSS (imported stylesheet):
.customTableStyling {
  tr[data-highlight-row="true"] {
    --osdk-table-row-bg-default: #f0f8ff;
    --osdk-table-row-bg-alternate: #e8f4ff;
    --osdk-table-row-bg-hover: #e0f0ff;
  }
}
*/

const getRowAttributes = useCallback((rowData) => ({
  "data-highlight-row": rowData.locationCity === "New York" ? "true" : undefined,
}), []);

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    getRowAttributes={getRowAttributes}
    className="customTableStyling"
  />
);`,
      },
    },
  },
  render: (args) => {
    const getRowAttributes = useCallback(
      (rowData: Osdk.Instance<typeof Employee>) => ({
        "data-highlight-row":
          rowData.locationCity === "New York" ? "true" : undefined,
      }),
      []
    );

    return (
      <div className="object-table-container" style={{ height: "600px" }}>
        <div
          style={{
            padding: "12px",
            backgroundColor: "#fff3cd",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        >
          <strong>Row attributes + className for CSS override:</strong> New York
          employees have a light blue background via{" "}
          <code>tr[data-highlight-row="true"]</code> scoped under{" "}
          <code>.customTableStyling</code>.
        </div>
        <ObjectTable
          {...args}
          getRowAttributes={getRowAttributes}
          className="customTableStyling"
        />
      </div>
    );
  },
  // `getRowAttributes` sets data-highlight-row="true" only on New York rows.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_DATA);

    // New York employees carry the highlight attribute...
    await expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute(
      "data-highlight-row",
      "true"
    );

    // ...while non–New York employees do not.
    await expect(
      rowContaining(canvas.getByText("Charlotte Weber"))
    ).not.toHaveAttribute("data-highlight-row");
  },
};

export const CustomEmptyState: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    renderEmptyState: () => (
      <NonIdealState icon="folder-close" title="No saved views found." />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint `NonIdealState`).",
      },
      source: {
        code: `
import { NonIdealState } from "@blueprintjs/core";

const emptyObjectSet = client(Employee).where({
  jobProfile: "Nonexistent Role",
});

return (
  <ObjectTable
    objectType={Employee}
    objectSet={emptyObjectSet}
    renderEmptyState={() => (
      <NonIdealState
        icon="folder-close"
        title="No saved views found."
      />
    )}
  />
);
`,
      },
    },
  },
  render: (args) => {
    const client = useOsdkClient();
    const emptyObjectSet = client(Employee).where({
      jobProfile: "Nonexistent Role",
    });

    return (
      <div className="object-table-container" style={{ height: "600px" }}>
        <ObjectTable {...args} objectSet={emptyObjectSet} />
      </div>
    );
  },
  // The object set matches no objects, so the custom empty state renders.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      await canvas.findByText("No saved views found.")
    ).toBeInTheDocument();
    await expect(canvas.queryByText(TARGET_DATA)).not.toBeInTheDocument();
  },
};
