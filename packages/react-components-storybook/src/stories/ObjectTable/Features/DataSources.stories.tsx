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

import { useOsdkClient } from "@osdk/react";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

import { Employee } from "../../../types/Employee.js";
import { WorkerInterface } from "../../../types/WorkerInterface.js";
import {
  defaultEmployeeColumns,
  objectTableMeta,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Data Sources",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithObjectSet: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
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
  // The object set is filtered to `jobProfile: "Marketing Manager"`
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(
      canvas.getAllByText("Marketing Manager").length,
    ).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  },
};

// TODO: Add the `name` and `email` columns back once interface property
// mapping is applied to the rows the table receives.
const workerInterfaceColumns: ColumnDefinition<WorkerInterface>[] = [
  { locator: { type: "property", id: "employeeNumber" } },
];

const TARGET_EMPLOYEE_NUMBER = "657495071";

export const WithInterfaceType: Story = {
  args: {
    objectType: WorkerInterface as unknown as typeof Employee,
    columnDefinitions:
      workerInterfaceColumns as unknown as ColumnDefinition<Employee>[],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass an interface type instead of an object type. Any object implementing the " +
          "interface is displayed.",
      },
      source: {
        code: `import { WorkerInterface } from "./types/WorkerInterface";

const columnDefinitions: ColumnDefinition<WorkerInterface>[] = [
  { locator: { type: "property", id: "employeeNumber" } },
];

<ObjectTable
  objectType={WorkerInterface}
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(TARGET_EMPLOYEE_NUMBER);

    await expect(canvas.getByText("Employee Number")).toBeInTheDocument();
  },
};
