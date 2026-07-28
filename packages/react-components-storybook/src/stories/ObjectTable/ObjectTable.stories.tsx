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
import { expect, screen, userEvent, within } from "storybook/test";

import { Employee } from "../../types/Employee.js";
import {
  defaultEmployeeColumns,
  objectTableMeta,
  openHeaderMenu,
  TARGET_DATA,
} from "./objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "./objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);

    await openHeaderMenu(canvas, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Sort ascending" })
    ).toBeInTheDocument();
    await expect(
      screen.getByRole("menuitem", { name: "Sort descending" })
    ).toBeInTheDocument();
    await expect(
      screen.getByRole("menuitem", { name: "Pin column" })
    ).toBeInTheDocument();
    await expect(
      screen.getByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  },
};
