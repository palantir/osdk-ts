import type { Osdk } from "@osdk/api";
import {
  ColumnConfigDialog,
  ObjectTable,
} from "@osdk/react-components/experimental";
import type {
  ColumnDefinition,
  ObjectTableProps,
} from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useMemo, useState } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

// Setup MSW handlers
const handlers = [...fauxFoundry.handlers];

// Create a concrete type for Storybook to parse more easily
type EmployeeTableProps = ObjectTableProps<typeof Employee>;

const meta: Meta<EmployeeTableProps> = {
  title: "Components/ObjectTable",
  component: ObjectTable,
  parameters: {
    msw: {
      handlers,
    },
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="story-container">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    objectType: {
      description: "The object type of the object",
      control: false, // Required prop set in stories
    },
    columnDefinitions: {
      description:
        "Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",
      control: "object",
    },
    enableFiltering: {
      description: "Whether the table is filterable by the user.",
      control: "boolean",
      defaultValue: true,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    filter: {
      description:
        "The current where clause to filter the objects in the table. If provided, the filter is controlled.",
      control: "object",
    },
    onFilterChanged: {
      description:
        "Called when the where clause is changed. Required when filter is controlled.",
      control: false,
      table: {
        category: "Events",
      },
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
    defaultOrderBy: {
      description:
        "The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",
      control: "object",
    },
    orderBy: {
      description:
        "The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",
      control: "object",
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
      control: "object",
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
  },
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
    renderHeader: () => <div style={{ fontWeight: "bold" }}>Employee Name</div>,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    renderHeader: () => "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: { type: "property", id: "department" },
    renderHeader: () => "Department",
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 200,
    renderHeader: () => "Start Date",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toLocaleDateString()
            : "No date"}
        </div>
      );
    },
  },
  // TODO: Not working yet, need to fix mock
  // {
  //   locator: {
  //     type: "rdp",
  //     id: "managerName",
  //     creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
  //       baseObjectSet.pivotTo("lead").selectProperty("fullName"),
  //   },
  //   renderHeader: () => "Manager",
  //   renderCell: (object: Osdk.Instance<Employee>) => {
  //     if ("managerName" in object) {
  //       return <span>{object["managerName"] as string}</span>;
  //     }
  //     return <span style={{ color: "#999" }}>No Manager</span>;
  //   },
  // },
];

export const Default: Story = {
  args: {
    objectType: Employee,
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const WithCustomColumnDefinitions: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions as any,
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const SingleSelection: Story = {
  args: {
    objectType: Employee,
    selectionMode: "single",
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const MultipleSelection: Story = {
  args: {
    objectType: Employee,
    selectionMode: "multiple",
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
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
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
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
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const WithDefaultSorting: Story = {
  args: {
    objectType: Employee,
    defaultOrderBy: [{
      property: "firstFullTimeStartDate",
      direction: "desc",
    }],
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
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
        renderHeader: () => (
          <div style={{ fontWeight: "bold" }}>Employee Name</div>
        ),
      },
      {
        locator: { type: "property", id: "emailPrimaryWork" },
        renderHeader: () => "Email",
      },
      {
        locator: { type: "property", id: "jobTitle" },
        renderHeader: () => "Job Title",
      },
      {
        locator: { type: "property", id: "department" },
        pinned: "right",
        renderHeader: () => "Department",
      },
      {
        locator: { type: "property", id: "firstFullTimeStartDate" },
        renderHeader: () => "Start Date",
      },
    ] as any,
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const WithHiddenColumns: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      ...columnDefinitions.slice(0, 3),
      {
        locator: { type: "property", id: "businessTitle" },
        isVisible: false,
        renderHeader: () => "Business Title",
      },
      {
        locator: { type: "property", id: "locationCity" },
        isVisible: false,
        renderHeader: () => "City",
      },
    ] as any,
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const WithCustomColumn: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      ...columnDefinitions.slice(0, 3),
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
                onClick={() => alert(`View ${object["fullName"]}`)}
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
                onClick={() => alert(`Edit ${object["fullName"]}`)}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ] as any,
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const WithRowClickHandler: Story = {
  args: {
    objectType: Employee,
    onRowClick: (employee: any) => {
      alert(`Clicked on ${employee["fullName"]}`);
    },
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
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

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <strong>Selected:</strong> {selectedRows.length} employees
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
              onClick={() => setSelectedRows([])}
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
            onRowSelection={setSelectedRows}
          />
        </div>
      </div>
    );
  },
};

export const DisabledFeatures: Story = {
  args: {
    objectType: Employee,
    enableFiltering: false,
    enableOrdering: false,
    enableColumnPinning: false,
    enableColumnResizing: false,
    enableColumnConfig: false,
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const CustomRowHeight: Story = {
  args: {
    objectType: Employee,
    rowHeight: 56,
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
  ),
};

export const WithColumnConfigDialog: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
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
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
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
);`,
      },
    },
  },
  render: () => {
    const initialColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> =
      [
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
      ];

    const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
    const [columnDefinitions, setColumnDefinitions] = useState<
      Array<ColumnDefinition<Employee, {}, {}>>
    >(initialColumnDefinitions);

    const columnOptions = useMemo(
      () =>
        initialColumnDefinitions.map((colDef) => ({
          id: colDef.locator.id,
          name: colDef.columnName || colDef.locator.id,
        })),
      [],
    );

    const currentVisibility = useMemo(() => {
      const visibility: Record<string, boolean> = {};
      initialColumnDefinitions.forEach(colDef => {
        visibility[colDef.locator.id] = columnDefinitions.some(
          def => def.locator.id === colDef.locator.id,
        );
      });
      return visibility;
    }, [columnDefinitions]);

    const currentColumnOrder = useMemo(
      () => columnDefinitions.map(colDef => colDef.locator.id),
      [columnDefinitions],
    );

    const handleApplyColumnConfig = useCallback(
      (columns: Array<{ columnId: string; isVisible: boolean }>) => {
        const newColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> =
          [];
        columns.forEach(({ columnId, isVisible }) => {
          if (isVisible) {
            const colDef = initialColumnDefinitions.find(def =>
              def.locator.id === columnId
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
      <div
        style={{ height: "600px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ padding: "8px 0", marginBottom: 8 }}>
          <button
            onClick={() => setIsColumnConfigOpen(true)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Configure Columns
          </button>
        </div>
        <ObjectTable
          objectType={Employee}
          columnDefinitions={columnDefinitions as any}
          enableColumnConfig={false}
        />
        <ColumnConfigDialog
          isOpen={isColumnConfigOpen}
          onClose={() => setIsColumnConfigOpen(false)}
          columnOptions={columnOptions}
          currentVisibility={currentVisibility}
          currentColumnOrder={currentColumnOrder}
          onApply={handleApplyColumnConfig}
        />
      </div>
    );
  },
};
