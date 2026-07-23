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
import type { Osdk } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";

import { Employee } from "../../../types/Employee.js";
import {
  columnDefinitions,
  defaultEmployeeColumns,
  dragResizeHandle,
  getColumnHeader,
  getHeaderWidth,
  getResizeHandle,
  objectTableMeta,
  rowContaining,
  TARGET_DATA,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Display & states",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
