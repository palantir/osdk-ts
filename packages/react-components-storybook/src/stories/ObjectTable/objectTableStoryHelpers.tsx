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

import type {
  DerivedProperty,
  ObjectSet,
  Osdk,
  QueryDefinition,
} from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type {
  ColumnDefinition,
  ObjectTableProps,
} from "@osdk/react-components/experimental/object-table";
import type { Meta } from "@storybook/react-vite";
import { screen, type within, userEvent } from "storybook/test";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import type { Employee } from "../../types/Employee.js";

// Create a concrete type for Storybook to parse more easily
export type EmployeeTableProps = ObjectTableProps<typeof Employee>;

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

// Used by stories that don't define their own columnDefinitions.
export const defaultEmployeeColumns: ColumnDefinition<Employee>[] = [
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

export const editableColumnDefinitions: ColumnDefinition<Employee>[] = [
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
export const getEmployeeSeniority: QueryDefinition<Employee> = {
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

export const columnDefinitions: ColumnDefinition<
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

export const TARGET_DATA = "Ahmed Williams";

type Canvas = ReturnType<typeof within>;

/** Accessible name of the chevron button that opens a column's header menu. */
const headerMenuName = (columnId: string): string =>
  `Open header menu for column with id=${columnId}`;

/** Resolve a column's `<th>` via its header-menu trigger button. */
export async function getColumnHeader(
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

export async function openHeaderMenu(
  root: Canvas,
  columnId: string
): Promise<void> {
  await userEvent.click(
    await root.findByRole("button", { name: headerMenuName(columnId) })
  );
}

export async function clickHeaderMenuItem(label: string): Promise<void> {
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

export function sortDirectionOf(
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
export function getResizeHandle(th: HTMLElement): HTMLElement {
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
export async function dragResizeHandle(
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

export function getHeaderWidth(th: HTMLElement): number {
  return Number.parseFloat(th.style.width);
}

export function rowContaining(cell: HTMLElement): HTMLElement {
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
export const findRowCheckboxes =
  (root: Canvas): (() => Promise<HTMLElement[]>) =>
  () =>
    root.findAllByRole("checkbox", { name: /Select row/u });

export const findSelectAllCheckbox = (root: Canvas): Promise<HTMLElement> =>
  root.findByRole("checkbox", { name: /Select all rows/u });

export const findDeselectAllCheckbox = (root: Canvas): Promise<HTMLElement> =>
  root.findByRole("checkbox", { name: /Deselect all rows/u });
