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

import type { DerivedProperty, Osdk } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental";
import type {
  CellEditInfo,
  ColumnDefinition,
  ObjectTableProps,
} from "@osdk/react-components/experimental";
import { useOsdkClient } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

// Create a concrete type for Storybook to parse more easily
type EmployeeTableProps = ObjectTableProps<typeof Employee>;

const meta: Meta<EmployeeTableProps> = {
  title: "Components/ObjectTable",
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

// Define column definitions similar to the e2e example
type RDPs = {
  managerName: "string";
};

const columnDefinitions: ColumnDefinition<Employee, RDPs, {}>[] = [
  {
    locator: {
      type: "property",
      id: "fullName",
    },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    renderHeader: () => "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
  },
  {
    locator: { type: "property", id: "department" },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 200,
    renderHeader: () => "Start Date",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <div>
          {object.firstFullTimeStartDate
            ? new Date(object.firstFullTimeStartDate).toLocaleDateString()
            : "No date"}
        </div>
      );
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
];

export const Default: Story = {
  args: {
    objectType: Employee,
  },
  parameters: {
    docs: {
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

export const WithColumnDefinitions: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions as ColumnDefinition<Employee>[],
  },
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    renderHeader: () => "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
  },
  {
    locator: { type: "property", id: "department" },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 200,
    renderHeader: () => "Start Date",
    renderCell: (object) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toLocaleDateString()
            : "No date"}
        </div>
      );
    },
  },
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
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
};

export const WithDefaultSorting: Story = {
  args: {
    objectType: Employee,
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
    ...columnDefinitions,
   {
      locator: { type: "property", id: "fullName" },
      pinned: "left",
    },
    {
      locator: { type: "property", id: "department" },
      pinned: "right",
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

export const WithRowClickHandler: Story = {
  args: {
    objectType: Employee,
    onRowClick: (employee: any) => {
      alert(`Clicked on ${employee.fullName}`);
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\`Clicked on \${employee["fullName"]}\`);
  }}
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

export const ControlledSorting: Story = {
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
  render: () => {
    const [orderBy, setOrderBy] = useState<any>([
      { property: "fullName", direction: "asc" },
    ]);

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
            objectType={Employee}
            orderBy={orderBy}
            onOrderByChanged={setOrderBy}
          />
        </div>
      </div>
    );
  },
};

export const ControlledSelection: Story = {
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
  render: () => {
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelection = useCallback(
      (
        selectedRows: any[],
        isSelectAll?: boolean,
      ) => {
        setSelectedRows(selectedRows);
        if (isSelectAll !== undefined) {
          setIsSelectAll(isSelectAll);
        }
      },
      [],
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
            objectType={Employee}
            selectionMode="multiple"
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
      },
      {
        locator: { type: "property", id: "department" },
        editable: false, // Read-only column
      },
    ],
    editMode: "manual",
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
  {
    locator: { type: "property", id: "department" },
    editable: false, // Read-only column
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
        Try changing edit mode to "always" to enable inline editing without
        needing to toggle edit mode on.
      </div>
      <ObjectTable {...args} objectType={Employee} />
    </div>
  ),
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
    onSubmitEdits: async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Successfully submitted ${edits.length} edits`);
      return true;
    },
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
    ],
    editMode: "always",
    onSubmitEdits: async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      return true;
    },
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
];

return (
  <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions}
    editMode="always" // Always in edit mode
    // Submit Edits button disabled when there are validation errors
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
        </ul>
      </div>
      <ObjectTable {...args} objectType={Employee} />
    </div>
  ),
};
