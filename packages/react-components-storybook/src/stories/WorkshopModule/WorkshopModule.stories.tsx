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

import { WorkshopModule } from "@osdk/react-components/experimental/workshop-module";
import type { Meta, StoryObj } from "@storybook/react-vite";

import type { WorkshopModuleStoryProps } from "./WorkshopModuleStory.js";
import { WorkshopModuleStory } from "./WorkshopModuleStory.js";

const meta: Meta<WorkshopModuleStoryProps> = {
  title: "Components/WorkshopModule",
  component: WorkshopModule,
  args: {
    foundryUrl: "",
    theme: "light",
    moduleRid: "ri.workshop.main.module.example",
    moduleVersion: "published",
    title: "Workshop module preview",
  },
  render: (args) => <WorkshopModuleStory {...args} />,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "WorkshopModule reads the Foundry URL from OsdkProvider and inherits the initial theme from OsdkThemeProvider. The Provider controls configure this story's providers. No iframe loads until you supply a Foundry URL; rendering requires a signed-in Foundry session. For explicit foundryUrl and defaultTheme props, see Building Blocks / BaseWorkshopModule.",
      },
    },
  },
  argTypes: {
    foundryUrl: {
      name: "Provider Foundry URL",
      control: "text",
      description:
        "Base URL for the client passed to OsdkProvider. Leave blank to disable the iframe.",
      table: { category: "Provider" },
    },
    theme: {
      name: "Provider theme",
      control: "select",
      options: ["light", "dark", "system"],
      description:
        "Theme supplied by OsdkThemeProvider. Changing this control remounts the module to apply its new initial theme.",
      table: { category: "Provider" },
    },
    moduleRid: {
      control: "text",
      description: "RID of a Workshop module you can access.",
    },
    moduleVersion: {
      control: "select",
      options: ["latest", "published"],
    },
    title: { control: "text" },
    className: { control: "text" },
    style: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<OsdkProvider client={client}>
  <OsdkThemeProvider theme="light">
    <WorkshopModule
      moduleRid="ri.workshop.main.module.example"
      style={{ height: "24rem" }}
    />
  </OsdkThemeProvider>
</OsdkProvider>`,
      },
    },
  },
};
