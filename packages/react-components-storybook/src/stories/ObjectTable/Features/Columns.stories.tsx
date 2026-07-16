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

import type { DerivedProperty, ObjectSet, Osdk, WhereClause } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, waitFor, within } from "storybook/test";

import { Employee } from "../../../types/Employee.js";
import {
  clickHeaderMenuItem,
  columnDefinitions,
  getColumnHeader,
  getEmployeeSeniority,
  objectTableMeta,
  openHeaderMenu,
  sortDirectionOf,
  TARGET_DATA,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Columns",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
