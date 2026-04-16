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
  FormError,
  FormFieldDefinition,
  FormState,
} from "@osdk/react-components/experimental";
import { ActionForm } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import classnames from "classnames";
import { useCallback, useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { StoryAction } from "../../types/StoryAction.js";

/**
 * Flattened (non-union) props type for Storybook Meta.
 *
 * ActionFormProps is a discriminated union (controlled vs uncontrolled),
 * which causes `Meta<ActionFormProps>` to resolve `args` to `never`.
 * This type covers the uncontrolled variant used by most stories.
 */
interface ActionFormStoryProps {
  actionDefinition: typeof StoryAction;
  formTitle?: string;
  isSubmitDisabled?: boolean;
}

const meta: Meta<ActionFormStoryProps> = {
  title: "Components/ActionForm",
  component: ActionForm,
  args: {
    actionDefinition: StoryAction,
  },
  render: (args) => (
    <div className="osdkFormCard">
      <ActionForm {...args} />
    </div>
  ),
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    actionDefinition: {
      description: "The action definition to render the form for.",
      control: false,
    },
    formTitle: {
      description:
        "Override the form title. Defaults to the action's displayName from metadata.",
      control: "text",
    },
    isSubmitDisabled: {
      description: "Whether the submit button is disabled.",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

type SubmitResult =
  | { type: "idle" }
  | { type: "success"; data: Record<string, unknown> }
  | { type: "error"; data: Record<string, unknown>; message: string };

const IDLE_RESULT: SubmitResult = { type: "idle" };

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { ActionForm } from "@osdk/react-components/experimental";
import { ModifyEmployee } from "./ontology";

<ActionForm
  actionDefinition={ModifyEmployee}
  onSubmit={async (formState, applyAction) => {
    await applyAction(formState);
    console.log("Submitted:", formState);
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [result, setResult] = useState<SubmitResult>(IDLE_RESULT);

    return (
      <div className="osdkFormStoryLayout">
        <div className="osdkFormCard">
          <ActionForm
            {...args}
            onSubmit={async (formState, applyAction) => {
              const data = formState as Record<string, unknown>;
              // applyAction accepts FormState values at runtime; the
              // ActionParameters<Q> type resolves to metadata shape which
              // is a known mismatch in the API types.
              const apply = applyAction as (state: unknown) => Promise<unknown>;
              try {
                await apply(formState);
                setResult({ type: "success", data });
              } catch (e) {
                const message = e instanceof Error
                  ? e.message
                  : "Action failed";
                setResult({ type: "error", data, message });
              }
            }}
          />
        </div>
        <div className="osdkFormStoryResultPanel">
          {result.type === "idle" && (
            <div className="osdkFormStoryResultEmpty">
              Submit the form to see the result here.
            </div>
          )}
          {result.type !== "idle" && (
            <>
              <div
                className={classnames("osdkSubmitBanner", {
                  osdkSubmitBannerError: result.type === "error",
                  osdkSubmitBannerSuccess: result.type === "success",
                })}
              >
                {result.type === "success" && "Action applied successfully"}
                {result.type === "error" && result.message}
              </div>
              <h4 className="osdkSubmitResultHeading">Submitted Data</h4>
              <pre className="osdkCodeOutput">
                {JSON.stringify(result.data, fileReplacer, 2)}
              </pre>
            </>
          )}
        </div>
      </div>
    );
  },
};

export const WithCustomTitle: Story = {
  args: {
    formTitle: "Update Employee Profile",
  },
  parameters: {
    docs: {
      source: {
        code: `<ActionForm
  actionDefinition={ModifyEmployee}
  formTitle="Update Employee Profile"
/>`,
      },
    },
  },
};

// fieldComponentProps uses {} to satisfy the widened union type — the
// validate callback on FormFieldDefinition is contravariant in the value type,
// which prevents per-key typed definitions from being collected into a single array.
// Rich fieldComponentProps (rows, min/max, options) are shown in docs.source.code.
const customFieldDefinitions: ReadonlyArray<
  FormFieldDefinition<typeof StoryAction>
> = [
  {
    fieldKey: "fullName",
    label: "Full Name",
    fieldComponent: "TEXT_INPUT",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "employeeNumber",
    label: "Employee Number",
    fieldComponent: "NUMBER_INPUT",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "department",
    label: "Department",
    fieldComponent: "TEXT_INPUT",
    helperText: "e.g. Engineering, Marketing, Sales",
    helperTextPlacement: "bottom",
    fieldComponentProps: {},
  },
  {
    fieldKey: "isActive",
    label: "Active Employee",
    fieldComponent: "DROPDOWN",
    fieldComponentProps: {
      items: [true, false],
      itemToStringLabel: (v: unknown) => (v === true ? "Yes" : "No"),
    },
  },
];

export const WithCustomFieldDefinitions: Story = {
  parameters: {
    docs: {
      source: {
        code: `const customFieldDefinitions = [
  {
    fieldKey: "fullName",
    label: "Full Name",
    fieldComponent: "TEXT_INPUT",
    isRequired: true,
    fieldComponentProps: { placeholder: "e.g. Jane Doe" },
  },
  {
    fieldKey: "employeeNumber",
    label: "Employee Number",
    fieldComponent: "NUMBER_INPUT",
    isRequired: true,
    fieldComponentProps: { min: 1, step: 1 },
  },
  {
    fieldKey: "department",
    label: "Department",
    fieldComponent: "TEXT_INPUT",
    helperText: "e.g. Engineering, Marketing, Sales",
    helperTextPlacement: "bottom",
    fieldComponentProps: {},
  },
  {
    fieldKey: "isActive",
    label: "Active Employee",
    fieldComponent: "RADIO_BUTTONS",
    fieldComponentProps: {
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  },
];

<ActionForm
  actionDefinition={ModifyEmployee}
  formFieldDefinitions={customFieldDefinitions}
/>`,
      },
    },
  },
  render: (args) => (
    <div className="osdkFormCard">
      <ActionForm {...args} formFieldDefinitions={customFieldDefinitions} />
    </div>
  ),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [formState, setFormState] = useState({
  fullName: "Jane Doe",
  employeeNumber: 12345,
});

return (
  <div>
    <div>
      <strong>Current State:</strong>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
    <ActionForm
      actionDefinition={ModifyEmployee}
      formState={formState}
      onFormStateChange={setFormState}
    />
  </div>
);`,
      },
    },
  },
  render: () => {
    type StoryFormState = FormState<typeof StoryAction>;

    const [formState, setFormState] = useState<StoryFormState>({
      fullName: "Jane Doe",
      employeeNumber: 12345,
    });

    return (
      <div className="osdkFormCard">
        <div className="osdkFormStorySpacing">
          <strong>Current Form State:</strong>
          <pre className="osdkCodeOutput">
            {JSON.stringify(formState, null, 2)}
          </pre>
        </div>
        <div className="osdkFormCard">
          <ActionForm
            actionDefinition={StoryAction}
            formState={formState}
            onFormStateChange={setFormState}
          />
        </div>
      </div>
    );
  },
};

export const WithSubmitHandler: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [status, setStatus] = useState({ type: "idle" });

return (
  <div>
    {status.type !== "idle" && (
      <div>{status.type === "success" ? "Employee updated!" : status.message}</div>
    )}
    <ActionForm
      actionDefinition={ModifyEmployee}
      onSuccess={() => {
        setStatus({ type: "success" });
      }}
      onError={(error) => {
        setStatus({ type: "error", message: error.type });
      }}
    />
  </div>
);`,
      },
    },
  },
  render: () => {
    const [status, setStatus] = useState<
      | { type: "idle" }
      | { type: "submitting" }
      | { type: "success" }
      | { type: "error"; message: string }
    >({ type: "idle" });

    const handleSuccess = useCallback(() => {
      setStatus({ type: "success" });
    }, []);

    const handleError = useCallback((error: FormError) => {
      setStatus({ type: "error", message: error.type });
    }, []);

    const bannerClass = classnames("osdkSubmitBanner", {
      osdkSubmitBannerError: status.type === "error",
      osdkSubmitBannerSuccess: status.type === "success",
    });

    return (
      <div className="osdkFormCard">
        {status.type !== "idle" && (
          <div className={classnames(bannerClass, "osdkFormStorySpacing")}>
            {status.type === "submitting" && "Updating employee..."}
            {status.type === "success" && "Employee updated successfully!"}
            {status.type === "error" && `Error: ${status.message}`}
          </div>
        )}
        <div className="osdkFormCard">
          <ActionForm
            actionDefinition={StoryAction}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </div>
      </div>
    );
  },
};

export const WithValidation: Story = {
  parameters: {
    docs: {
      source: {
        code: `// ActionForm auto-generates validation from metadata:
// - Required fields show "This field is required" on blur
// - Submit button shows error summary tooltip when invalid
// In this example, "fullName" and "employeeNumber" are required parameters.

<ActionForm actionDefinition={ModifyEmployee} />`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Focus and blur the required "Full Name" field to trigger validation.
    const nameInput = canvas.getByLabelText("Full Name");
    await userEvent.click(nameInput);
    await userEvent.tab();

    await expect(canvas.getByText("This field is required")).toBeVisible();

    // Typing a value should clear the error.
    await userEvent.click(nameInput);
    await userEvent.type(nameInput, "Widget");
    await userEvent.tab();

    await expect(
      canvas.queryByText("This field is required"),
    ).not.toBeInTheDocument();
  },
};

function fileReplacer(_key: string, value: unknown): unknown {
  if (value instanceof File) {
    return value.name;
  }
  if (Array.isArray(value) && value.every((v) => v instanceof File)) {
    return value.map((f) => f.name);
  }
  return value;
}
