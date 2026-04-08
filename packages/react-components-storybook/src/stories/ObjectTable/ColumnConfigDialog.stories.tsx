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

import type { ColumnConfigDialogProps } from "@osdk/react-components/experimental";
import { ColumnConfigDialog } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import { fn } from "storybook/test";

const SAMPLE_COLUMNS: ColumnConfigDialogProps["columnOptions"] = [
  { id: "fullName", name: "Full Name" },
  { id: "email", name: "Email" },
  { id: "jobTitle", name: "Job Title" },
  { id: "department", name: "Department" },
  { id: "startDate", name: "Start Date" },
  { id: "location", name: "Location" },
];

const DEFAULT_VISIBILITY: Record<string, boolean> = {
  fullName: true,
  email: true,
  jobTitle: true,
  department: true,
  startDate: false,
  location: false,
};

const DEFAULT_COLUMN_ORDER = ["fullName", "email", "jobTitle", "department"];

const meta: Meta<ColumnConfigDialogProps> = {
  title: "Components/ObjectTable/Building Blocks/ColumnConfigDialog",
  component: ColumnConfigDialog,
  args: {
    isOpen: true,
    onClose: fn(),
    columnOptions: SAMPLE_COLUMNS,
    currentVisibility: DEFAULT_VISIBILITY,
    currentColumnOrder: DEFAULT_COLUMN_ORDER,
    onApply: fn(),
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
    columnOptions: {
      description: "Available columns to configure",
      control: false,
    },
    currentVisibility: {
      description: "Current visibility state of each column",
      control: false,
    },
    currentColumnOrder: {
      description: "Current order of visible columns",
      control: false,
    },
    onApply: {
      description:
        "Called with the new column configuration when the user clicks Apply",
      control: false,
      table: { category: "Events" },
    },
    isValidConfig: {
      description:
        "Optional validation function. When provided, the Apply button is disabled if this returns false.",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `import { ColumnConfigDialog } from "@osdk/react-components/experimental";

const [isOpen, setIsOpen] = useState(false);

<ColumnConfigDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name" },
    { id: "email", name: "Email" },
    { id: "jobTitle", name: "Job Title" },
    { id: "department", name: "Department" },
  ]}
  currentVisibility={{ fullName: true, email: true, jobTitle: true, department: true }}
  currentColumnOrder={["fullName", "email", "jobTitle", "department"]}
  onApply={(columns) => console.log("Applied:", columns)}
/>`,
      },
    },
  },
};

export const AllColumnsVisible: Story = {
  args: {
    currentVisibility: {
      fullName: true,
      email: true,
      jobTitle: true,
      department: true,
      startDate: true,
      location: true,
    },
    currentColumnOrder: [
      "fullName",
      "email",
      "jobTitle",
      "department",
      "startDate",
      "location",
    ],
  },
};

export const SingleColumnVisible: Story = {
  args: {
    currentVisibility: {
      fullName: true,
      email: false,
      jobTitle: false,
      department: false,
      startDate: false,
      location: false,
    },
    currentColumnOrder: ["fullName"],
  },
};

function WithValidationStory() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleOpen = useCallback(() => setIsOpen(true), []);

  const isValidConfig = useCallback(
    (columns: Array<{ columnId: string; isVisible: boolean }>) => {
      const visibleCount = columns.filter((c) => c.isVisible).length;
      return visibleCount >= 2;
    },
    [],
  );

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        style={{
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Open Column Config
      </button>
      <ColumnConfigDialog
        isOpen={isOpen}
        onClose={handleClose}
        columnOptions={SAMPLE_COLUMNS}
        currentVisibility={DEFAULT_VISIBILITY}
        currentColumnOrder={DEFAULT_COLUMN_ORDER}
        onApply={fn()}
        isValidConfig={isValidConfig}
      />
    </div>
  );
}

export const WithValidation: Story = {
  args: {
    isOpen: undefined as unknown as boolean,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The Apply button is disabled when fewer than 2 columns are visible.",
      },
      source: {
        code: `const isValidConfig = (columns) => {
  const visibleCount = columns.filter(c => c.isVisible).length;
  return visibleCount >= 2;
};

<ColumnConfigDialog
  isOpen={isOpen}
  onClose={handleClose}
  columnOptions={columnOptions}
  currentVisibility={visibility}
  currentColumnOrder={order}
  onApply={handleApply}
  isValidConfig={isValidConfig}
/>`,
      },
    },
  },
  render: () => <WithValidationStory />,
};
