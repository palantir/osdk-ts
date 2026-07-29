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
  clickHeaderMenuItem,
  defaultEmployeeColumns,
  dragResizeHandle,
  findDeselectAllCheckbox,
  findRowCheckboxes,
  getColumnHeader,
  objectTableMeta,
  openHeaderMenu,
  TARGET_DATA,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Interactions & events",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
