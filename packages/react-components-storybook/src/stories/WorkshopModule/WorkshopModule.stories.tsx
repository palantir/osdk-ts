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

import type { BaseWorkshopModuleProps } from "@osdk/react-components/experimental/workshop-module";
import { BaseWorkshopModule } from "@osdk/react-components/experimental/workshop-module";
import type { Meta, StoryObj } from "@storybook/react-vite";

function isFoundryUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

const meta: Meta<BaseWorkshopModuleProps> = {
  title: "Components/WorkshopModule",
  component: BaseWorkshopModule,
  args: {
    foundryUrl: "",
    moduleRid: "ri.workshop.main.module.example",
    moduleVersion: "published",
    title: "Workshop module preview",
  },
  render: (args: BaseWorkshopModuleProps) => (
    <div style={{ height: "24rem" }}>
      {isFoundryUrl(args.foundryUrl) ? (
        <BaseWorkshopModule key={args.defaultTheme} {...args} />
      ) : (
        <p>
          Set foundryUrl to your Foundry URL and moduleRid to a module you can
          access in the controls below. Rendering requires a signed-in Foundry
          session.
        </p>
      )}
    </div>
  ),
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version.",
      },
    },
  },
  argTypes: {
    foundryUrl: {
      control: "text",
      description: "Your Foundry base URL. Leave blank to disable the iframe.",
    },
    moduleRid: {
      control: "text",
      description: "RID of a Workshop module you can access.",
    },
    moduleVersion: {
      control: "select",
      options: ["latest", "published"],
      description:
        "latest for the latest saved version, or published for the published version. Defaults to published.",
    },
    title: { control: "text" },
    defaultTheme: {
      control: "select",
      options: [undefined, "light", "dark", "system"],
      description:
        "Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme.",
    },
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
        code: `<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`,
      },
    },
  },
};
