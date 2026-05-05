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
import type {
  FormFieldDefinitionForAction,
  FormState,
} from "@osdk/react-components/experimental";
import { ActionForm } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
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
    displayName: "Update employee";
    status: "ACTIVE";
    rid: string;
  };
}

const actionDefinition = updateEmployeeStoryAction
  .actionDefinition as unknown as UpdateEmployeeStoryAction;

const actionFormDefaultValueFields: ReadonlyArray<
  FormFieldDefinitionForAction<UpdateEmployeeStoryAction>
> = [
  {
    fieldKey: "fullName",
    label: "Full name",
    fieldComponent: "TEXT_INPUT",
    defaultValue: "Grace Hopper",
    fieldComponentProps: {},
  },
  {
    fieldKey: "yearsExperience",
    label: "Years of experience",
    fieldComponent: "NUMBER_INPUT",
    defaultValue: 42,
    fieldComponentProps: {
      min: 0,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "RADIO_BUTTONS",
    defaultValue: true,
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
];

const actionFormOverrideFields: ReadonlyArray<
  FormFieldDefinitionForAction<UpdateEmployeeStoryAction>
> = [
  {
    fieldKey: "fullName",
    label: "Employee legal name",
    fieldComponent: "TEXT_INPUT",
    helperText: "Use the name that should appear in HR records.",
    fieldComponentProps: {
      placeholder: "Ada Lovelace",
      minLength: 2,
    },
  },
  {
    fieldKey: "yearsExperience",
    label: "Relevant experience",
    fieldComponent: "NUMBER_INPUT",
    helperText: "Whole years only.",
    fieldComponentProps: {
      min: 0,
      max: 80,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "SWITCH",
    helperText: "Turn on when the employee is not assigned to an office.",
    fieldComponentProps: {},
  },
];

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
          "ActionForm fetches action metadata through @osdk/react and renders a submit-ready BaseForm. These stories exercise the same metadata and action hooks used by applications.",
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

export const WithDefaultValues: Story = {
  render: () => (
    <ActionForm
      actionDefinition={actionDefinition}
      formFieldDefinitions={actionFormDefaultValueFields}
      onSuccess={handleSuccess}
      onError={errorSpy}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `const fields = [
  {
    fieldKey: "fullName",
    label: "Full name",
    fieldComponent: "TEXT_INPUT",
    defaultValue: "Grace Hopper",
    fieldComponentProps: {},
  },
  {
    fieldKey: "yearsExperience",
    label: "Years of experience",
    fieldComponent: "NUMBER_INPUT",
    defaultValue: 42,
    fieldComponentProps: { min: 0 },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "RADIO_BUTTONS",
    defaultValue: true,
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
] satisfies Array<FormFieldDefinitionForAction<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>`,
      },
    },
  },
};

export const WithFieldOverrides: Story = {
  render: () => (
    <ActionForm
      actionDefinition={actionDefinition}
      formFieldDefinitions={actionFormOverrideFields}
      onSuccess={handleSuccess}
      onError={errorSpy}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `const fields = [
  {
    fieldKey: "fullName",
    label: "Employee legal name",
    fieldComponent: "TEXT_INPUT",
    helperText: "Use the name that should appear in HR records.",
    fieldComponentProps: {
      placeholder: "Ada Lovelace",
      minLength: 2,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "SWITCH",
    helperText: "Turn on when the employee is not assigned to an office.",
    fieldComponentProps: {},
  },
] satisfies Array<FormFieldDefinitionForAction<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>`,
      },
    },
  },
};

export const ControlledFormState: Story = {
  render: () => <ControlledActionFormStory />,
  parameters: {
    docs: {
      source: {
        code: `const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`,
      },
    },
  },
};

function ControlledActionFormStory(): React.ReactElement {
  const [formState, setFormState] = useState<
    FormState<UpdateEmployeeStoryAction>
  >({
    fullName: "Ada Lovelace",
    yearsExperience: 5,
    isRemote: true,
  });

  return (
    <>
      <div className="osdkFormStorySpacing">
        <strong>Current Form State:</strong>
        <pre className="osdkCodeOutput">
          {JSON.stringify(formState, null, 2)}
        </pre>
      </div>
      <ActionForm
        actionDefinition={actionDefinition}
        formState={formState}
        onFormStateChange={setFormState}
        onSuccess={handleSuccess}
        onError={errorSpy}
      />
    </>
  );
}
