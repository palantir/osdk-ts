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

import type { MultiColumnSortDialogProps } from "@osdk/react-components/experimental";
import { MultiColumnSortDialog } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const SAMPLE_COLUMNS: MultiColumnSortDialogProps["columnOptions"] = [
  { id: "fullName", name: "Full Name", canSort: true },
  { id: "email", name: "Email", canSort: true },
  { id: "jobTitle", name: "Job Title", canSort: true },
  { id: "department", name: "Department", canSort: true },
  { id: "startDate", name: "Start Date", canSort: true },
  { id: "location", name: "Location", canSort: false },
];

const meta: Meta<MultiColumnSortDialogProps> = {
  title: "Experimental/ObjectTable/Building Blocks/MultiColumnSortDialog",
  component: MultiColumnSortDialog,
  args: {
    isOpen: true,
    onClose: fn(),
    onApply: fn(),
    columnOptions: SAMPLE_COLUMNS,
    currentSorting: [
      { id: "fullName", desc: false },
      { id: "department", desc: true },
    ],
  },
  argTypes: {
    isOpen: {
      description: "Whether the dialog is open",
      control: "boolean",
    },
    onClose: {
      description: "Called when the dialog is closed",
      control: false,
      table: { category: "Events" },
    },
    onApply: {
      description:
        "Called with the new sorting state when the user clicks Apply",
      control: false,
      table: { category: "Events" },
    },
    columnOptions: {
      description:
        "Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",
      control: false,
    },
    currentSorting: {
      description: "Current sorting state from TanStack Table",
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { MultiColumnSortDialog } from "@osdk/react-components/experimental";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>`,
      },
    },
  },
};
