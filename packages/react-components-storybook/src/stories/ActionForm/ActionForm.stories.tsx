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
import { useCallback, useState } from "react";
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

export const Default: Story = {
  args: {
    actionDefinition: StoryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `import { ActionForm } from "@osdk/react-components/experimental";
import { SubmitOrder } from "./ontology";

<ActionForm actionDefinition={SubmitOrder} />`,
      },
    },
  },
  render: (args) => <ActionForm {...args} />,
};

export const WithCustomTitle: Story = {
  args: {
    actionDefinition: StoryAction,
    formTitle: "Place New Order",
  },
  parameters: {
    docs: {
      source: {
        code: `<ActionForm
  actionDefinition={SubmitOrder}
  formTitle="Place New Order"
/>`,
      },
    },
  },
  render: (args) => <ActionForm {...args} />,
};

// fieldComponentProps uses {} to satisfy the widened union type — the
// validate callback on FormFieldDefinition is contravariant in the value type,
// which prevents per-key typed definitions from being collected into a single array.
// Rich fieldComponentProps (rows, min/max, options) are shown in docs.source.code.
const customFieldDefinitions: ReadonlyArray<
  FormFieldDefinition<typeof StoryAction>
> = [
  {
    fieldKey: "name",
    label: "Product Name",
    fieldComponent: "TEXT_AREA",
    helperText: "Enter a detailed product name",
    helperTextPlacement: "bottom",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "price",
    label: "Unit Price ($)",
    fieldComponent: "NUMBER_INPUT",
    fieldComponentProps: {},
  },
  {
    fieldKey: "quantity",
    label: "Order Quantity",
    fieldComponent: "NUMBER_INPUT",
    isRequired: true,
    helperText: "Maximum 1000 units per order",
    fieldComponentProps: {},
  },
  {
    fieldKey: "isActive",
    label: "Active Order",
    fieldComponent: "DROPDOWN",
    fieldComponentProps: {},
  },
];

export const WithCustomFieldDefinitions: Story = {
  args: {
    actionDefinition: StoryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `const customFieldDefinitions = [
  {
    fieldKey: "name",
    label: "Product Name",
    fieldComponent: "TEXT_AREA",
    helperText: "Enter a detailed product name",
    helperTextPlacement: "bottom",
    isRequired: true,
    fieldComponentProps: {
      rows: 2,
      placeholder: "e.g. Premium Widget",
    },
  },
  {
    fieldKey: "price",
    label: "Unit Price ($)",
    fieldComponent: "NUMBER_INPUT",
    fieldComponentProps: { min: 0, step: 0.01, placeholder: "0.00" },
  },
  {
    fieldKey: "quantity",
    label: "Order Quantity",
    fieldComponent: "NUMBER_INPUT",
    isRequired: true,
    helperText: "Maximum 1000 units per order",
    fieldComponentProps: { min: 1, max: 1000, step: 1 },
  },
  {
    fieldKey: "isActive",
    label: "Active Order",
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
  actionDefinition={SubmitOrder}
  formFieldDefinitions={customFieldDefinitions}
/>`,
      },
    },
  },
  render: (args) => (
    <ActionForm {...args} formFieldDefinitions={customFieldDefinitions} />
  ),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [formState, setFormState] = useState({
  name: "Sample Product",
  quantity: 10,
});

return (
  <div>
    <div>
      <strong>Current State:</strong>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
    <ActionForm
      actionDefinition={SubmitOrder}
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
      name: "Sample Product",
      quantity: 10,
    });

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <strong>Current Form State:</strong>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "12px",
              borderRadius: "4px",
              fontSize: "13px",
              maxHeight: "200px",
              overflow: "auto",
            }}
          >
            {JSON.stringify(formState, null, 2)}
          </pre>
        </div>
        <ActionForm
          actionDefinition={StoryAction}
          formState={formState}
          onFormStateChange={setFormState}
        />
      </div>
    );
  },
};

export const WithSubmitHandler: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [status, setStatus] = useState("idle");

return (
  <div>
    {status !== "idle" && (
      <div style={{ marginBottom: "16px", padding: "8px", borderRadius: "4px" }}>
        {status}
      </div>
    )}
    <ActionForm
      actionDefinition={SubmitOrder}
      onSubmit={async (formState, applyAction) => {
        setStatus("Submitting...");
        return applyAction(formState);
      }}
      onSuccess={(results) => {
        setStatus("Order submitted successfully!");
      }}
      onError={(error) => {
        setStatus(\`Error: \${error.type}\`);
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
    >(
      { type: "idle" },
    );

    const handleSuccess = useCallback(() => {
      setStatus({ type: "success" });
    }, []);

    const handleError = useCallback(
      (error: FormError) => {
        setStatus({ type: "error", message: error.type });
      },
      [],
    );

    return (
      <div>
        {status.type !== "idle" && (
          <div
            style={{
              marginBottom: "16px",
              padding: "12px",
              borderRadius: "4px",
              background: status.type === "success"
                ? "#d4edda"
                : status.type === "error"
                ? "#f8d7da"
                : "#fff3cd",
              color: status.type === "success"
                ? "#155724"
                : status.type === "error"
                ? "#721c24"
                : "#856404",
            }}
          >
            {status.type === "submitting" && "Submitting order..."}
            {status.type === "success" && "Order submitted successfully!"}
            {status.type === "error" && `Error: ${status.message}`}
          </div>
        )}
        <ActionForm
          actionDefinition={StoryAction}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    );
  },
};
