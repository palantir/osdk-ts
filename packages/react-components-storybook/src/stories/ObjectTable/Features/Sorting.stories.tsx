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
import { expect, fn, waitFor, within } from "storybook/test";

import { Employee } from "../../../types/Employee.js";
import {
  clickHeaderMenuItem,
  defaultEmployeeColumns,
  getColumnHeader,
  objectTableMeta,
  openHeaderMenu,
  sortDirectionOf,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Sorting",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDefaultSorting: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    defaultOrderBy: [
      {
        property: "fullName",
        direction: "desc",
      },
    ],
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
  // `defaultOrderBy` seeds a descending sort on fullName. The header menu can
  // flip it to ascending and back to the default descending state.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await getColumnHeader(canvas, "fullName");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "fullName")).toBe("desc")
    );

    // Switch to ascending.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "fullName")).toBe("asc")
    );

    // Sorting descending again returns to the default sort state.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() =>
      expect(sortDirectionOf(canvas, "fullName")).toBe("desc")
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
      args.orderBy ?? [{ property: "fullName", direction: "asc" }]
    );
    const handleOrderByChanged = useCallback(
      (newOrderBy: any) => {
        args.onOrderByChanged?.(newOrderBy);
        setOrderBy(newOrderBy);
      },
      [args]
    );

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <strong>Current Sort:</strong>{" "}
          {orderBy.map((o: any, i: number) => (
            <span key={i}>
              {o.property} ({o.direction}){i < orderBy.length - 1 && ", "}
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
  // Sorting is controlled: the header menu drives `onOrderByChanged`, and the
  // caller's banner reflects the new order.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Seeded controlled state shows fullName ascending.
    await getColumnHeader(canvas, "fullName");
    await expect(canvas.getByText("fullName (asc)")).toBeInTheDocument();

    // Sort descending through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");

    await waitFor(() => expect(args.onOrderByChanged).toHaveBeenCalled());
    await waitFor(() =>
      expect(canvas.getByText("fullName (desc)")).toBeInTheDocument()
    );

    // Restore the seeded ascending sort so the story ends as it started.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() =>
      expect(canvas.getByText("fullName (asc)")).toBeInTheDocument()
    );
  },
};
