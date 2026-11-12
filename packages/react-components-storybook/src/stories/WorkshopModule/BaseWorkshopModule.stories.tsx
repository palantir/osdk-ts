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

import type {
  BaseWorkshopModuleProps,
  WorkshopVariableValues,
} from "@osdk/react-components/experimental/workshop-module";
import { BaseWorkshopModule } from "@osdk/react-components/experimental/workshop-module";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback } from "react";
import { useArgs } from "storybook/preview-api";

function isFoundryUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

const meta: Meta<BaseWorkshopModuleProps> = {
  title: "Components/WorkshopModule/Building Blocks/BaseWorkshopModule",
  component: BaseWorkshopModule,
  args: {
    foundryUrl: "",
    moduleRid: "ri.workshop.main.module.example",
    moduleVersion: "published",
    title: "Workshop module preview",
  },
  render: function Render(args: BaseWorkshopModuleProps) {
    const [, updateArgs] = useArgs<BaseWorkshopModuleProps>();
    const onVariablesChanged = useCallback(
      (changes: WorkshopVariableValues) => {
        updateArgs({ variables: { ...args.variables, ...changes } });
      },
      [args.variables, updateArgs],
    );

    return (
      <div style={{ height: "24rem" }}>
        {isFoundryUrl(args.foundryUrl) ? (
          <BaseWorkshopModule
            key={args.defaultTheme}
            {...args}
            onVariablesChanged={onVariablesChanged}
          />
        ) : (
          <p>
            Set foundryUrl to your Foundry URL and moduleRid to a module you can
            access in the controls below. Rendering requires a signed-in Foundry
            session.
          </p>
        )}
      </div>
    );
  },
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
    variables: {
      control: "object",
      description:
        "Variable values keyed by module-interface external ID. Workshop edits update these controls.",
    },
    onVariablesChanged: { control: false },
    branchRid: {
      control: "text",
      description:
        "Global branch RID. Leave blank to use main. Changing the branch reloads the module.",
    },
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

export const Variables: Story = {
  args: {
    variables: { count: 25, searchText: "Ada", includeArchived: false },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the external IDs of your module's scalar interface variables. Inputs update live, and Workshop edits are merged into the variables control. Requires a Foundry deployment with the Workshop embed integration.",
      },
      source: {
        code: `const [variables, setVariables] = useState<WorkshopVariableValues>({ count: 25 });

<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`,
      },
    },
  },
};

export const Arrays: Story = {
  args: {
    variables: {
      selectedNames: ["Ada", "Grace"],
      thresholds: [10, 25],
      enabledFlags: [true, false],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Arrays replace the whole list. Use [] for an empty list and null to clear the variable. Requires a Foundry deployment with list-variable support in the Workshop embed integration.",
      },
      source: {
        code: `type ModuleVariables = { selectedNames: readonly string[] };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  selectedNames: ["Ada", "Grace"],
});

<BaseWorkshopModule<ModuleVariables>
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`,
      },
    },
  },
};

export const ObjectSets: Story = {
  args: {
    variables: {
      employees: {
        objectSetRid: "ri.object-set.main.temporary-object-set.example",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Supply an object-set RID that Workshop's signed-in user can access. Workshop edits return the same reference shape; null clears the variable. Requires object-set support in the Workshop embed integration.",
      },
      source: {
        code: `import type { WorkshopObjectSetValue, WorkshopVariableValues } from "@osdk/react-components/experimental/workshop-module";

type ModuleVariables = { employees: WorkshopObjectSetValue };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  employees: { objectSetRid: "ri.object-set.main.temporary-object-set.example" },
});

<BaseWorkshopModule<ModuleVariables>
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`,
      },
    },
  },
};
