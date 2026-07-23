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

import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";

import { Employee } from "../../../types/Employee.js";
import {
  defaultEmployeeColumns,
  findDeselectAllCheckbox,
  findRowCheckboxes,
  findSelectAllCheckbox,
  objectTableMeta,
  rowContaining,
  TARGET_DATA,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Selection & focus",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
