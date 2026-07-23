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

import type { Osdk } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { CellEditInfo } from "@osdk/react-components/experimental/object-table";
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

import { Employee } from "../../../types/Employee.js";
import {
  editableColumnDefinitions,
  objectTableMeta,
  rowContaining,
  TARGET_DATA,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Editing",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
