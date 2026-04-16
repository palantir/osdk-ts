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

const FORM_MAX_WIDTH = 480;
const FORM_CARD_STYLE = { maxWidth: FORM_MAX_WIDTH, width: "100%" } as const;

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

const ACTION_DEFINITION_SUMMARY = {
  apiName: "submitOrder",
  displayName: "Submit Order",
  parameters: {
    name: { type: "string", required: true },
    quantity: { type: "integer", required: true },
    price: { type: "double", required: false },
    isActive: { type: "boolean", required: false },
    startDate: { type: "timestamp", required: false },
    document: { type: "attachment", required: false },
  },
};

type SubmitResult =
  | { type: "idle" }
  | { type: "success"; data: Record<string, unknown> }
  | { type: "error"; data: Record<string, unknown>; message: string };

const IDLE_RESULT: SubmitResult = { type: "idle" };

export const Default: Story = {
  args: {
    actionDefinition: StoryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `import { ActionForm } from "@osdk/react-components/experimental";
import { SubmitOrder } from "./ontology";

<ActionForm
  actionDefinition={SubmitOrder}
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
        <div
          className="osdkFormCard"
          style={FORM_CARD_STYLE}
        >
          <ActionForm
            {...args}
            onSubmit={async (formState, applyAction) => {
              const data = formState as Record<string, unknown>;
              // applyAction accepts FormState values at runtime; the
              // ActionParameters<Q> type resolves to metadata shape which
              // is a known mismatch in the API types.
              const apply = applyAction as (
                state: unknown,
              ) => Promise<unknown>;
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
                className={result.type === "error"
                  ? "osdkSubmitBanner osdkSubmitBannerError"
                  : "osdkSubmitBanner osdkSubmitBannerSuccess"}
              >
                {result.type === "success" && "Action applied successfully"}
                {result.type === "error" && result.message}
              </div>
              <h4 className="osdkSubmitResultHeading">Action Definition</h4>
              <pre className="osdkCodeOutput">
                {JSON.stringify(ACTION_DEFINITION_SUMMARY, null, 2)}
              </pre>
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
  render: (args) => (
    <div
      className="osdkFormCard"
      style={FORM_CARD_STYLE}
    >
      <ActionForm {...args} />
    </div>
  ),
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
    <div
      className="osdkFormCard"
      style={FORM_CARD_STYLE}
    >
      <ActionForm {...args} formFieldDefinitions={customFieldDefinitions} />
    </div>
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
      <div style={FORM_CARD_STYLE}>
        <div style={{ marginBottom: "16px" }}>
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

    const bannerClass = status.type === "error"
      ? "osdkSubmitBanner osdkSubmitBannerError"
      : "osdkSubmitBanner osdkSubmitBannerSuccess";

    return (
      <div style={FORM_CARD_STYLE}>
        {status.type !== "idle" && (
          <div className={bannerClass} style={{ marginBottom: "16px" }}>
            {status.type === "submitting" && "Submitting order..."}
            {status.type === "success" && "Order submitted successfully!"}
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
  args: {
    actionDefinition: StoryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `// ActionForm auto-generates validation from metadata:
// - Required fields show "This field is required" on blur
// - Submit button shows error summary tooltip when invalid
// In this example, "name" and "quantity" are required parameters.

<ActionForm actionDefinition={SubmitOrder} />`,
      },
    },
  },
  render: (args) => (
    <div
      className="osdkFormCard"
      style={FORM_CARD_STYLE}
    >
      <ActionForm {...args} />
    </div>
  ),
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
