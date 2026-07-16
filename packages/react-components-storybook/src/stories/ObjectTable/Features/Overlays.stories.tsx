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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, screen, userEvent } from "storybook/test";

import { Employee } from "../../../types/Employee.js";
import {
  defaultEmployeeColumns,
  objectTableMeta,
  openHeaderMenu,
  TARGET_DATA,
} from "../objectTableStoryHelpers.js";
import type { EmployeeTableProps } from "../objectTableStoryHelpers.js";
import {
  ObjectTableInBaseUIDialog,
  ObjectTableInBlueprintDialog,
  ObjectTableInBlueprintDrawer,
} from "../overlays/ObjectTableOverlayStories.js";

const meta: Meta<EmployeeTableProps> = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Overlays",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderMenuInsideBlueprintDrawer: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. " +
          "Open the drawer and click any column header chevron; the menu should appear above the drawer.",
      },
      source: {
        code: `<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`,
      },
    },
  },
  render: (args) => <ObjectTableInBlueprintDrawer tableProps={args} />,
  // The drawer opens by default. The header menu must portal *above* the drawer
  // and stay interactive. The drawer renders to document.body, so query `screen`.
  play: async () => {
    await screen.findByText(TARGET_DATA);

    await openHeaderMenu(screen, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
  },
};

export const HeaderMenuInsideBlueprintDialog: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. " +
          "Open the dialog and click any column header chevron; the menu should appear above the dialog.",
      },
      source: {
        code: `<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`,
      },
    },
  },
  render: (args) => <ObjectTableInBlueprintDialog tableProps={args} />,
  // The dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText(TARGET_DATA);

    await openHeaderMenu(screen, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
  },
};

export const HeaderMenuInsideBaseUIDialog: Story = {
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. " +
          "Open the dialog and click any column header chevron; the menu should appear above the dialog.",
      },
      source: {
        code: `<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`,
      },
    },
  },
  render: (args) => <ObjectTableInBaseUIDialog tableProps={args} />,
  // The Base UI dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText(TARGET_DATA);

    await openHeaderMenu(screen, "fullName");
    await expect(
      await screen.findByRole("menuitem", { name: "Configure Columns" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
  },
};
