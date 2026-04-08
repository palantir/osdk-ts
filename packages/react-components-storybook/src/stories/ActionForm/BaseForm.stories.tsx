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

import type { RendererFieldDefinition } from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";

/**
 * Flattened (non-union) props type for Storybook Meta.
 *
 * BaseFormProps is a discriminated union (controlled vs uncontrolled),
 * which causes `Meta<BaseFormProps>` to resolve `args` to `never`.
 * This type covers the uncontrolled variant used by most stories.
 */
interface BaseFormStoryProps {
  formTitle?: string;
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition>;
  onSubmit: (formState: Record<string, unknown>) => void;
  isSubmitDisabled?: boolean;
  isPending?: boolean;
  isLoading?: boolean;
  className?: string;
}

const DROPDOWN_ITEMS = ["Low", "Medium", "High"];

const fieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
    },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: {
      placeholder: "Enter a description",
      rows: 3,
    },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: {
      min: 0,
      max: 1000,
      step: 1,
      placeholder: "0",
    },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: DROPDOWN_ITEMS,
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      placeholder: "Select a date",
    },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: {
      accept: ".pdf,.doc,.docx",
    },
  },
  {
    fieldKey: "notes",
    fieldComponent: "CUSTOM",
    label: "Notes",
    fieldComponentProps: {
      customRenderer: (props) => (
        <textarea
          value={props.value != null ? String(props.value) : ""}
          onChange={(e) => props.onChange?.(e.target.value)}
          style={{
            width: "100%",
            minHeight: "60px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontFamily: "inherit",
          }}
          placeholder="Custom rendered notes field"
        />
      ),
    },
  },
];

const EMPTY_FIELD_DEFINITIONS: ReadonlyArray<RendererFieldDefinition> = [];

function handleSubmit(formState: Record<string, unknown>): void {
  // eslint-disable-next-line no-console
  console.log("Form submitted:", formState);
}

const meta: Meta<BaseFormStoryProps> = {
  title: "Components/ActionForm/Building Blocks/BaseForm",
  component: BaseForm,
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    formTitle: {
      description: "Optional title displayed at the top of the form.",
      control: "text",
    },
    fieldDefinitions: {
      description:
        "Ordered list of field definitions to render. Each definition specifies the field component type and its props.",
      control: false,
    },
    onSubmit: {
      description:
        "Called when the form is submitted. Receives the current form state.",
      control: false,
      table: {
        category: "Events",
      },
    },
    isSubmitDisabled: {
      description: "Whether the submit button is disabled.",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isPending: {
      description:
        "Whether the form is in a pending state. Shows \"Submitting\u2026\" and disables the button.",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isLoading: {
      description:
        "Whether the form is loading. Shows a loading message when true and no field definitions are provided.",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    className: {
      description: "Additional CSS class name for the form.",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `import { BaseForm } from "@osdk/react-components/experimental";

const fieldDefinitions = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Enter a description", rows: 3 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: { min: 0, max: 1000, step: 1 },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  },
  {
    fieldKey: "notes",
    fieldComponent: "CUSTOM",
    label: "Notes",
    fieldComponentProps: {
      customRenderer: (props) => (
        <textarea
          value={props.value ?? ""}
          onChange={(e) => props.onChange?.(e.target.value)}
          placeholder="Custom rendered notes field"
        />
      ),
    },
  },
];

<BaseForm
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
  render: (args) => <BaseForm {...args} />,
};

export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [formState, setFormState] = useState({});

const handleFieldValueChange = (fieldKey, value) => {
  setFormState((prev) => ({ ...prev, [fieldKey]: value }));
};

return (
  <div>
    <div>
      <strong>Current State:</strong>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
    <BaseForm
      fieldDefinitions={fieldDefinitions}
      formState={formState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={(state) => console.log("Submitted:", state)}
    />
  </div>
);`,
      },
    },
  },
  render: () => {
    const [formState, setFormState] = useState<Record<string, unknown>>({});

    const handleFieldValueChange = useCallback(
      (fieldKey: string, value: unknown) => {
        setFormState((prev) => ({ ...prev, [fieldKey]: value }));
      },
      [],
    );

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
            {JSON.stringify(
              formState,
              (_key, value) =>
                value instanceof File ? `File: ${value.name}` : value,
              2,
            )}
          </pre>
        </div>
        <BaseForm
          fieldDefinitions={fieldDefinitions}
          formState={formState}
          onFieldValueChange={handleFieldValueChange}
          onSubmit={handleSubmit}
        />
      </div>
    );
  },
};

export const WithCustomTitle: Story = {
  args: {
    formTitle: "Create New Order",
    fieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  formTitle="Create New Order"
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
  render: (args) => <BaseForm {...args} />,
};

export const Loading: Story = {
  args: {
    fieldDefinitions: EMPTY_FIELD_DEFINITIONS,
    isLoading: true,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  fieldDefinitions={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
  render: (args) => <BaseForm {...args} />,
};

export const SubmitDisabled: Story = {
  args: {
    fieldDefinitions,
    isSubmitDisabled: true,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  fieldDefinitions={fieldDefinitions}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
  render: (args) => <BaseForm {...args} />,
};

export const Pending: Story = {
  args: {
    fieldDefinitions,
    isPending: true,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  fieldDefinitions={fieldDefinitions}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
  render: (args) => <BaseForm {...args} />,
};
