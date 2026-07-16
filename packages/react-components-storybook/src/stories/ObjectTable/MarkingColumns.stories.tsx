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
import type { ObjectTableProps } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

type EmployeeTableProps = ObjectTableProps<typeof Employee>;

const meta: Meta<EmployeeTableProps> = {
  title: "Components/ObjectTable/Features",
  component: ObjectTable,
  tags: ["beta"],
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    docs: {
      description: {
        component:
          "Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY).",
      },
    },
  },
};

export default meta;

export const MarkingColumns: StoryObj<EmployeeTableProps> = {
  args: {
    objectType: Employee,
    columnDefinitions: [
      { locator: { type: "property", id: "fullName" } },
      { locator: { type: "property", id: "department" } },
      { locator: { type: "property", id: "classificationMarking" } },
      { locator: { type: "property", id: "clearanceMarking" } },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`,
      },
    },
  },
  render: (args) => (
    <div style={{ height: 480 }}>
      <ObjectTable {...args} />
    </div>
  ),
};
