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

import type { ContextItemPillProps } from "@osdk/react-components/experimental/context-item-pill";
import { ContextItemPill } from "@osdk/react-components/experimental/context-item-pill";
import type { Meta, StoryObj } from "@storybook/react-vite";

const SAMPLE_DATA = {
  primaryKey: "emp-001",
  properties: {
    firstName: "Ada",
    lastName: "Lovelace",
    department: "Analytical Engines",
    primaryOfficeId: "lon-1",
  },
  links: ["manager", "reports", "office"],
};

const meta: Meta<ContextItemPillProps> = {
  title: "Experimental/ContextItemPill",
  tags: ["experimental"],
  component: ContextItemPill,
  args: {
    label: "employees",
    dialogTitle: "employees context item",
    data: SAMPLE_DATA,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    label: {
      description: "Primary label shown in the pill.",
      control: "text",
    },
    secondaryText: {
      description:
        "Optional secondary text rendered to the right of the label.",
      control: "text",
    },
    dialogTitle: {
      description: "Title shown in the inspector dialog.",
      control: "text",
    },
    loadedLabel: {
      description: "Label for the loaded badge. Defaults to 'Loaded'.",
      control: "text",
    },
    showLoadedBadge: {
      description: "Whether to show the loaded badge. Defaults to true.",
      control: "boolean",
    },
    className: {
      description: "Additional CSS class for the root element.",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSecondaryText: Story = {
  args: {
    secondaryText: "9 properties",
  },
};

export const HiddenLoadedBadge: Story = {
  args: {
    showLoadedBadge: false,
  },
};

export const CustomLoadedLabel: Story = {
  args: {
    loadedLabel: "Ready",
  },
};

export const CustomDialogContent: Story = {
  args: {
    dialogTitle: "Custom dialog content",
    dialogContent: (
      <div style={{ padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Ada Lovelace</h3>
        <p>
          Custom rendering wins over the default JSON view when{" "}
          <code>dialogContent</code> is provided.
        </p>
      </div>
    ),
  },
};
