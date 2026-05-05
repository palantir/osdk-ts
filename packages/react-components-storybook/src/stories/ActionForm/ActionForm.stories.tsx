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

import type { ActionDefinition, ActionEditResponse } from "@osdk/api";
import { ActionForm } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { updateEmployeeStoryAction } from "../../mocks/fauxFoundry.js";

interface UpdateEmployeeStoryAction extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      fullName: { type: "string" };
      yearsExperience: { type: "integer" };
      isRemote: { type: "boolean" };
    };
    type: "action";
    apiName: "updateEmployeeStoryAction";
    status: "ACTIVE";
    rid: string;
  };
}

const actionDefinition = updateEmployeeStoryAction
  .actionDefinition as unknown as UpdateEmployeeStoryAction;

const successSpy = fn().mockName("onSuccess");
const errorSpy = fn().mockName("onError");

function handleSuccess(result: ActionEditResponse | undefined): void {
  successSpy(result);
}

const meta = {
  title: "Experimental/ActionForm",
  component: ActionForm,
  decorators: [
    (Story) => (
      <div className="osdkFormCard">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "ActionForm fetches action metadata through @osdk/react and renders a submit-ready BaseForm. These stories use MSW to mock OSDK network requests.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ActionForm
      actionDefinition={actionDefinition}
      onSuccess={handleSuccess}
      onError={errorSpy}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `import { ActionForm } from "@osdk/react-components/experimental";

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(result) => console.log("Applied:", result)}
/>`,
      },
    },
  },
};

export const WithoutTitle: Story = {
  render: () => (
    <ActionForm
      actionDefinition={actionDefinition}
      formTitle={null}
      onSuccess={handleSuccess}
      onError={errorSpy}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formTitle={null}
/>`,
      },
    },
  },
};
