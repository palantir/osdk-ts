import type { DerivedProperty, Osdk } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { $ } from "../../mocks/mockClient.js";
import { Employee } from "../../types/Employee.js";

// Setup MSW handlers
const handlers = [...fauxFoundry.handlers];

const meta: Meta<typeof ObjectTable> = {
  title: "Components/ObjectTable",
  component: ObjectTable,
  parameters: {
    msw: {
      handlers,
    },
  },
  decorators: [
    (Story) => (
      <div className="story-container">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ObjectTable>;

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
    pinned: "left",
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
    objectSet: $(Employee as any),
    objectType: Employee as any,
    columnDefinitions,
    selectionMode: "multiple",
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
};

export const SingleSelection: Story = {
  args: {
    objectSet: $(Employee as any),
    objectType: Employee as any,
    columnDefinitions,
    selectionMode: "single",
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
};

export const NoSelection: Story = {
  args: {
    objectSet: $(Employee as any),
    objectType: Employee as any,
    columnDefinitions,
    selectionMode: "none",
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
};

export const WithContextMenu: Story = {
  args: {
    objectSet: $(Employee as any),
    objectType: Employee as any,
    columnDefinitions,
    selectionMode: "multiple",
    renderCellContextMenu: (_: Osdk.Instance<Employee>, cellValue: unknown) => {
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
      <ObjectTable {...args} />
    </div>
  ),
};

export const CustomColumnWidths: Story = {
  args: {
    objectSet: $(Employee as any),
    objectType: Employee as any,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150,
    })),
    selectionMode: "multiple",
  },
  render: (args) => (
    <div className="object-table-container" style={{ height: "600px" }}>
      <ObjectTable {...args} />
    </div>
  ),
};
