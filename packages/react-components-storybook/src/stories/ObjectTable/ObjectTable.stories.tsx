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
import { fn } from "storybook/test";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";
import { WorkerInterface } from "../../types/WorkerInterface.js";

// Create a concrete type for Storybook to parse more easily
type EmployeeTableProps = ObjectTableProps<typeof Employee>;

const meta: Meta<EmployeeTableProps> = {
  title: "Experimental/ObjectTable/Features",
  tags: ["experimental"],
  component: ObjectTable,
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
    onRowSelection: {
      description:
        "Called when the row selection changes. Required when row selection is controlled.",
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

export default meta;
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
};

export const WithInterfaceType: Story = {
  args: {
    objectType: WorkerInterface as unknown as typeof Employee,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass an interface type instead of an object type. The table shows the interface's "
          + "properties (email, name, employeeNumber) and any object implementing the interface "
          + "will be displayed.",
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
      managerName: { $in: ["Ahmed Williams", "Fatima Zhang"] },
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
  parameters: {
    docs: {
      description: {
        story:
          "Combines derived property columns with `defaultOrderBy` and `filter`. "
          + "Demonstrates sorting by an RDP (managerName) and filtering the derived property.",
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
  managerName: { $in: ["Ahmed Williams", "Fatima Zhang"] },
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
          "Use function-backed columns to display computed values from a Foundry query. "
          + "The 'Seniority' column calls `getEmployeeSeniority` with the current object set "
          + "and maps each result back to the corresponding row.",
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
};

export const SingleSelection: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "single",
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
};

export const MultipleSelection: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple",
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
};

export const CustomColumnWidths: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150,
    })) as any,
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
};

export const WithDefaultSorting: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    defaultOrderBy: [{
      property: "fullName",
      direction: "desc",
    }],
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
    onRowSelection: fn(),
    onOrderByChanged: fn(),
    onColumnVisibilityChanged: fn(),
    onColumnsPinnedChanged: fn(),
    onColumnResize: fn(),
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
  onColumnHeaderClick={(columnId) => {
    console.log("Column header clicked:", columnId);
  }}
  onRowSelection={(selectedRows, isSelectAll) => {
    console.log("Row selection changed:", selectedRows, isSelectAll);
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
    const [orderBy, setOrderBy] = useState<any>([{
      property: "fullName",
      direction: "asc",
    }]);
    const [lastEvent, setLastEvent] = useState<string>("");

    const handleRowClick = useCallback((employee: any) => {
      args.onRowClick?.(employee);
      setClickedRow(employee);
      setLastEvent("onRowClick");
    }, [args]);

    const handleColumnHeaderClick = useCallback((columnId: string) => {
      args.onColumnHeaderClick?.(columnId);
      setClickedColumn(columnId);
      setLastEvent("onColumnHeaderClick");
    }, [args]);

    const handleRowSelection = useCallback(
      (newSelectedRows: any[], newIsSelectAll?: boolean) => {
        args.onRowSelection?.(newSelectedRows, newIsSelectAll);
        setSelectedRows(newSelectedRows);
        if (newIsSelectAll !== undefined) {
          setIsSelectAll(newIsSelectAll);
        }
        setLastEvent("onRowSelection");
      },
      [args],
    );

    const handleOrderByChanged = useCallback(
      (newOrderBy: any) => {
        args.onOrderByChanged?.(newOrderBy);
        setOrderBy(newOrderBy);
        setLastEvent("onOrderByChanged");
      },
      [args],
    );

    const handleColumnVisibilityChanged = useCallback(
      (visibilityState: any) => {
        args.onColumnVisibilityChanged?.(visibilityState);
        setLastEvent("onColumnVisibilityChanged");
      },
      [args],
    );

    const handleColumnsPinnedChanged = useCallback(
      (pinnedState: any) => {
        args.onColumnsPinnedChanged?.(pinnedState);
        setLastEvent("onColumnsPinnedChanged");
      },
      [args],
    );

    const handleColumnResize = useCallback(
      (columnId: string, newWidth: number | null) => {
        args.onColumnResize?.(columnId, newWidth);
        setLastEvent(`onColumnResize (${columnId})`);
      },
      [args],
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
            <strong>Current sort:</strong> {orderBy?.[0]
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
            onRowSelection={handleRowSelection}
            onOrderByChanged={handleOrderByChanged}
            onColumnVisibilityChanged={handleColumnVisibilityChanged}
            onColumnsPinnedChanged={handleColumnsPinnedChanged}
            onColumnResize={handleColumnResize}
          />
        </div>
      </div>
    );
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
      args.orderBy ?? [
        { property: "fullName", direction: "asc" },
      ],
    );
    const handleOrderByChanged = useCallback((newOrderBy: any) => {
      args.onOrderByChanged?.(newOrderBy);
      setOrderBy(newOrderBy);
    }, [args]);

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <strong>Current Sort:</strong>{" "}
          {orderBy.map((o: any, i: number) => (
            <span key={i}>
              {o.property} ({o.direction})
              {i < orderBy.length - 1 && ", "}
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
};

export const ControlledSelection: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    onRowSelection: fn(),
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: `const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);`,
      },
    },
  },
  render: (args) => {
    const [selectedRows, setSelectedRows] = useState<any[]>(
      args.selectedRows ?? [],
    );
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelection = useCallback(
      (
        newSelectedRows: any[],
        newIsSelectAll?: boolean,
      ) => {
        args.onRowSelection?.(newSelectedRows, newIsSelectAll);
        setSelectedRows(newSelectedRows);
        if (newIsSelectAll !== undefined) {
          setIsSelectAll(newIsSelectAll);
        }
      },
      [args],
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
            onRowSelection={handleRowSelection}
          />
        </div>
      </div>
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
};

export const EditableTable: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
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
    ],
    editMode: "always" as const,
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
      [args],
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
            <strong>Last cell edit:</strong>{" "}
            Column "{lastEdit.columnId}" changed from "{String(
              lastEdit.oldValue,
            )}" to "
            {String(lastEdit.newValue)}"
          </div>
        )}
        <ObjectTable
          {...args}
          onCellValueChanged={handleCellValueChanged}
        />
      </div>
    );
  },
};

export const WithSubmitEditsButton: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
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
      },
    ],
    editMode: "manual",
    onSubmitEdits: fn(
      async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return true;
      },
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
};

export const EditableWithValidation: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      {
        locator: { type: "property", id: "fullName" },
        editable: true,
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
        validateEdit: async (value: unknown) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(String(value ?? ""))
            ? undefined
            : "Please enter a valid email address";
        },
      },
      {
        locator: { type: "property", id: "employeeNumber" },
        editable: true,
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
      async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
        return true;
      },
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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
};

export const PerRowEditableAndFieldConfig: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      { locator: { type: "property", id: "fullName" } },
      {
        locator: { type: "property", id: "jobTitle" },
        editable: (rowData) => {
          const jobTitle = rowData.jobTitle ?? "";
          return jobTitle === "Senior Product Manager";
        },
      },
      {
        locator: { type: "property", id: "department" },
        editable: true,
        editFieldConfig: {
          fieldComponent: "DROPDOWN",
          getFieldComponentProps: (employee) => ({
            items: employee.department === "Operations"
              ? [
                "Sales",
                "Marketing",
              ]
              : [
                "Sales",
                "Marketing",
                "Finance",
                "Human Resources",
              ],
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
          "Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. "
          + "jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows",
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
          "Demonstrates using `getRowAttributes` to set data attributes on rows and a `className` on the table to scope CSS overrides via the data attribute selector. "
          + "New York employees get a light blue background through the `[data-highlight-row=\"true\"]` CSS selector scoped under the table's className.",
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
        "data-highlight-row": rowData.locationCity === "New York"
          ? "true"
          : undefined,
      }),
      [],
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
          <strong>Row attributes + className for CSS override:</strong>{" "}
          New York employees have a light blue background via{" "}
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
};
