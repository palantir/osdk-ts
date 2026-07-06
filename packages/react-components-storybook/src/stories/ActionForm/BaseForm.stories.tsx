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

import { Button, Dialog } from "@blueprintjs/core";
import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import type {
  BaseFormFieldProps,
  FormContentItem,
  RendererFieldDefinition,
} from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import { useOsdkClient } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useMemo, useState } from "react";
import { fn } from "storybook/test";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";
import {
  FormStoryLayout,
  type StorySubmissionSnapshot,
  SubmissionOutputPanel,
} from "./SubmissionOutputPanel.js";
import {
  THEMED_SLIDER_DEFAULT_VALUE,
  ThemedSliderField,
} from "./ThemedSliderField.js";

/**
 * Flattened (non-union) props type for Storybook Meta.
 *
 * BaseFormProps is a discriminated union (controlled vs uncontrolled),
 * which causes `Meta<BaseFormProps>` to resolve `args` to `never`.
 * This type covers the uncontrolled variant used by most stories.
 */
interface BaseFormStoryProps {
  formTitle?: string;
  formContent: ReadonlyArray<FormContentItem>;
  onSubmit: (formState: Record<string, unknown>) => Promise<void> | void;
  isSubmitDisabled?: boolean;
  isPending?: boolean;
  isLoading?: boolean;
  className?: string;
  submitButtonText?: string;
  submitButtonVariant?: "primary" | "secondary";
}

function field(definition: RendererFieldDefinition): FormContentItem {
  return { type: "field", definition };
}

const DROPDOWN_ITEMS = ["Low", "Medium", "High"];

const DEPARTMENT_ITEMS = [
  "Engineering",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "Legal",
];

const TAG_ITEMS = ["Urgent", "Review", "Follow-up", "Archived", "Pinned"];

const USER_ID_ITEMS = ["usr_ada", "usr_grace", "usr_katherine"];

const USER_DIRECTORY: Record<string, { name: string; team: string }> = {
  usr_ada: { name: "Ada Lovelace", team: "Computation" },
  usr_grace: { name: "Grace Hopper", team: "Compilers" },
  usr_katherine: { name: "Katherine Johnson", team: "Flight dynamics" },
};

const formContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
    },
  }),
  field({
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: {
      placeholder: "Enter a description",
      rows: 3,
    },
  }),
  field({
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
  }),
  field({
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: DROPDOWN_ITEMS,
      placeholder: "Select priority",
    },
  }),
  field({
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  }),
  field({
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      placeholder: "Select a date",
    },
  }),
  field({
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: {
      accept: ".pdf,.doc,.docx",
    },
  }),
  field({
    fieldKey: "completion",
    fieldComponent: "CUSTOM",
    label: "Completion",
    fieldComponentProps: {
      defaultValue: THEMED_SLIDER_DEFAULT_VALUE,
      customRenderer: (props) => <ThemedSliderField {...props} />,
    },
  }),
];

const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];

// Most BaseForm stories share handleSubmit through CSF args, while the output
// panel is mounted by a decorator. This bridge lets the shared submit handler
// update the panel without rewriting every story with a custom render function.
const submitOutputRef: {
  current: ((snapshot: StorySubmissionSnapshot) => void) | undefined;
} = {
  current: undefined,
};

// Spy that logs submissions to the Storybook Actions panel
// while the canvas shows the submitted values in the JSON panel.
const submitSpy = fn().mockName("onSubmit");
function handleSubmit(formState: Record<string, unknown>): void {
  submitSpy(formState);
  submitOutputRef.current?.({
    status: "success",
    submittedValues: formState,
    response: { message: "onSubmit completed" },
  });
}

function BaseFormSubmissionOutput(): React.ReactElement {
  const [snapshot, setSnapshot] = useState<StorySubmissionSnapshot>({
    status: "idle",
  });
  submitOutputRef.current = setSnapshot;

  return (
    <SubmissionOutputPanel
      idleMessage="Submit the form to see submitted values."
      snapshot={snapshot}
    />
  );
}

const meta: Meta<BaseFormStoryProps> = {
  title: "Components/ActionForm/BaseForm",
  component: BaseForm,
  tags: ["beta"],
  decorators: [
    (Story) => (
      <FormStoryLayout output={<BaseFormSubmissionOutput />}>
        <Story />
      </FormStoryLayout>
    ),
  ],
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component:
          "BaseForm is the lower-level form renderer used by ActionForm. Use it directly when you already have form content definitions or need custom form composition.",
      },
    },
  },
  argTypes: {
    formTitle: {
      description: "Optional title displayed at the top of the form.",
      control: "text",
    },
    formContent: {
      description:
        "Ordered list of form content items (fields or sections) to render.",
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
        'Whether the form is in a pending state. Shows "Submitting\u2026" and disables the button.',
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
    submitButtonText: {
      description: "Text displayed in the submit button.",
      control: "text",
      table: {
        defaultValue: { summary: "Submit" },
      },
    },
    submitButtonVariant: {
      description: "Visual variant of the submit button.",
      control: "select",
      options: ["primary", "secondary"],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    formContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `import { BaseForm } from "@osdk/react-components/experimental";
import {
  THEMED_SLIDER_DEFAULT_VALUE,
  ThemedSliderField,
} from "./ThemedSliderField";

const formContent = [
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
    fieldKey: "completion",
    fieldComponent: "CUSTOM",
    label: "Completion",
    fieldComponentProps: {
      defaultValue: THEMED_SLIDER_DEFAULT_VALUE,
      customRenderer: (props) => <ThemedSliderField {...props} />,
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [formState, setFormState] = useState({
  completion: THEMED_SLIDER_DEFAULT_VALUE,
});

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
      formContent={formContent}
      formState={formState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={(state) => console.log("Submitted:", state)}
    />
  </div>
);`,
      },
    },
  },
  render: () => <ControlledFormStory />,
};

function ControlledFormStory(): React.ReactElement {
  const [formState, setFormState] = useState<Record<string, unknown>>({
    completion: THEMED_SLIDER_DEFAULT_VALUE,
  });

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      setFormState((prev) => ({ ...prev, [fieldKey]: value }));
    },
    []
  );

  return (
    <div>
      <div className="osdkFormStorySpacing">
        <strong>Current Form State:</strong>
        <pre className="osdkCodeOutput">
          {JSON.stringify(
            formState,
            (_key, value) =>
              value instanceof File ? `File: ${value.name}` : value,
            2
          )}
        </pre>
      </div>
      <BaseForm
        formContent={formContent}
        formState={formState}
        onFieldValueChange={handleFieldValueChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export const WithCustomTitle: Story = {
  args: {
    formTitle: "Create New Order",
    formContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

export const Loading: Story = {
  args: {
    formContent: EMPTY_FORM_CONTENT,
    isLoading: true,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

export const SubmitDisabled: Story = {
  args: {
    formContent,
    isSubmitDisabled: true,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const disabledFieldInitialState: Record<string, unknown> = {
  name: "Locked employee",
  description: "Locked multi-line description",
  quantity: 42,
  priority: "Medium",
  tags: ["Urgent", "Pinned"],
  isActive: true,
  isRemote: true,
  scheduledAt: new Date(2026, 0, 15, 9, 30),
  vacationDates: [new Date(2026, 0, 15), new Date(2026, 0, 31)],
  custom: "Requires approval",
};

const CUSTOM_STATUS_OPTIONS = ["Requires approval", "Ready to submit"];

function renderDisabledCustomField(
  props: BaseFormFieldProps<unknown>
): React.ReactNode {
  const selectedValue = props.value != null ? String(props.value) : undefined;

  return (
    <div
      className="osdkCustomChoiceGroup"
      role="group"
      aria-label="Custom status"
      aria-disabled={props.disabled === true || undefined}
    >
      {CUSTOM_STATUS_OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          disabled={props.disabled}
          className={
            option === selectedValue
              ? "osdkCustomChoiceButton osdkCustomChoiceButtonSelected"
              : "osdkCustomChoiceButton"
          }
          onClick={() => props.onChange?.(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function DisabledFieldsStory(): React.ReactElement {
  const client = useOsdkClient();
  const employeeObjectSet = useMemo(
    () => client(Employee) as ObjectSet<ObjectTypeDefinition>,
    [client]
  );
  const [formState, setFormState] = useState<Record<string, unknown>>(
    disabledFieldInitialState
  );

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      setFormState((prev) => ({ ...prev, [fieldKey]: value }));
    },
    []
  );

  const disabledFormContent: ReadonlyArray<FormContentItem> = useMemo(
    () => [
      field({
        fieldKey: "name",
        fieldComponent: "TEXT_INPUT",
        label: "Name",
        disabled: true,
        fieldComponentProps: {
          placeholder: "Enter a name",
        },
      }),
      field({
        fieldKey: "description",
        fieldComponent: "TEXT_AREA",
        label: "Description",
        disabled: true,
        fieldComponentProps: {
          placeholder: "Enter a description",
          rows: 3,
        },
      }),
      field({
        fieldKey: "quantity",
        fieldComponent: "NUMBER_INPUT",
        label: "Quantity",
        disabled: true,
        fieldComponentProps: {
          min: 0,
          max: 1000,
          step: 1,
          placeholder: "0",
        },
      }),
      field({
        fieldKey: "priority",
        fieldComponent: "DROPDOWN",
        label: "Priority (select)",
        disabled: true,
        fieldComponentProps: {
          items: DROPDOWN_ITEMS,
          placeholder: "Select priority",
        },
      }),
      field({
        fieldKey: "tags",
        fieldComponent: "DROPDOWN",
        label: "Tags (searchable multi-select)",
        disabled: true,
        fieldComponentProps: {
          items: TAG_ITEMS,
          isMultiple: true,
          isSearchable: true,
          placeholder: "Search tags...",
        },
      }),
      field({
        fieldKey: "isActive",
        fieldComponent: "RADIO_BUTTONS",
        label: "Is Active",
        disabled: true,
        fieldComponentProps: {
          options: [
            { label: "True", value: true },
            { label: "False", value: false },
          ],
        },
      }),
      field({
        fieldKey: "isRemote",
        fieldComponent: "SWITCH",
        label: "Remote employee",
        disabled: true,
        fieldComponentProps: {},
      }),
      field({
        fieldKey: "scheduledAt",
        fieldComponent: "DATETIME_PICKER",
        label: "Scheduled At",
        disabled: true,
        fieldComponentProps: {
          showTime: true,
          placeholder: "Select date and time",
        },
      }),
      field({
        fieldKey: "vacationDates",
        fieldComponent: "DATE_RANGE_INPUT",
        label: "Vacation Dates",
        disabled: true,
        fieldComponentProps: {
          placeholderStart: "Start date",
          placeholderEnd: "End date",
        },
      }),
      field({
        fieldKey: "document",
        fieldComponent: "FILE_PICKER",
        label: "Document",
        disabled: true,
        fieldComponentProps: {
          accept: ".pdf,.doc,.docx",
        },
      }),
      field({
        fieldKey: "employee",
        fieldComponent: "OBJECT_SELECT",
        label: "Employee",
        disabled: true,
        fieldComponentProps: {
          objectType: { type: "object" as const, apiName: "Employee" },
          placeholder: "Search employees…",
        },
      }),
      field({
        fieldKey: "employees",
        fieldComponent: "OBJECT_SET",
        label: "Employees",
        disabled: true,
        fieldComponentProps: {
          value: employeeObjectSet,
        },
      }),
      field({
        fieldKey: "custom",
        fieldComponent: "CUSTOM",
        label: "Custom field",
        disabled: true,
        fieldComponentProps: {
          customRenderer: renderDisabledCustomField,
        },
      }),
    ],
    [employeeObjectSet]
  );

  return (
    <BaseForm
      formTitle="Disabled fields"
      formContent={disabledFormContent}
      formState={formState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={handleSubmit}
    />
  );
}

export const DisabledFields: Story = {
  render: () => <DisabledFieldsStory />,
  parameters: {
    docs: {
      description: {
        story:
          "Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits.",
      },
      source: {
        code: `const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    disabled: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    disabled: true,
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  // Repeat disabled: true for TEXT_AREA, NUMBER_INPUT, RADIO_BUTTONS,
  // SWITCH, DATETIME_PICKER, DATE_RANGE_INPUT, FILE_PICKER,
  // OBJECT_SELECT, OBJECT_SET, and CUSTOM.
];

<BaseForm
  formTitle="Disabled fields"
  formContent={formContent}
  formState={formState}
  onFieldValueChange={handleFieldValueChange}
  onSubmit={handleSubmit}
/>`,
      },
    },
  },
};

export const Pending: Story = {
  args: {
    formContent,
    isPending: true,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

export const WithCustomSubmitButton: Story = {
  args: {
    formContent,
    onSubmit: handleSubmit,
    submitButtonText: "Save employee",
    submitButtonVariant: "secondary",
  },
  parameters: {
    docs: {
      source: {
        code: `<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>`,
      },
    },
  },
};

const switchFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "isRemote",
    fieldComponent: "SWITCH",
    label: "Remote employee",
    helperText: "Use a switch for boolean settings that map to on/off state.",
    fieldComponentProps: {},
  }),
];

export const WithSwitch: Story = {
  args: {
    formTitle: "Update employee",
    formContent: switchFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "isRemote",
    fieldComponent: "SWITCH",
    label: "Remote employee",
    fieldComponentProps: {},
  },
];

<BaseForm
  formTitle="Update employee"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const unsupportedFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "structPayload",
    fieldComponent: "UNSUPPORTED",
    label: "Struct payload",
    isRequired: true,
    fieldComponentProps: {},
  }),
  field({
    fieldKey: "geoshape",
    fieldComponent: "UNSUPPORTED",
    label: "Geoshape",
    fieldComponentProps: {},
  }),
];

export const WithUnsupportedFields: Story = {
  args: {
    formTitle: "Unsupported field types",
    formContent: unsupportedFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "structPayload",
    fieldComponent: "UNSUPPORTED",
    label: "Struct payload",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "geoshape",
    fieldComponent: "UNSUPPORTED",
    label: "Geoshape",
    fieldComponentProps: {},
  },
];

// Unsupported fields render a disabled message.
// Use fieldComponent: "CUSTOM" when you need to collect a value for these types.
<BaseForm
  formTitle="Unsupported field types"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const validationFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Required field",
    },
  }),
  field({
    fieldKey: "username",
    fieldComponent: "TEXT_INPUT",
    label: "Username",
    fieldComponentProps: {
      minLength: 3,
      maxLength: 20,
      placeholder: "3-20 characters",
    },
  }),
  field({
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0,
      max: 100,
      step: 1,
      placeholder: "0-100",
    },
  }),
  field({
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      min: new Date(2024, 0, 1),
      max: new Date(2026, 11, 31),
      placeholder: "2024-2026 only",
    },
  }),
  field({
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: {
      maxSize: 1048576,
    },
  }),
];

export const WithValidation: Story = {
  args: {
    formContent: validationFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Required field" },
  },
  {
    fieldKey: "username",
    fieldComponent: "TEXT_INPUT",
    label: "Username",
    fieldComponentProps: { minLength: 3, maxLength: 20 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: { min: 0, max: 100 },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      min: new Date(2024, 0, 1),
      max: new Date(2026, 11, 31),
    },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { maxSize: 1048576 },
  },
];

// Validation fires on blur, revalidates on change.
// Submit button shows error summary tooltip when invalid.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

const customValidateFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    validate: async (value: unknown) => {
      if (typeof value !== "string" || value.length === 0) {
        return undefined;
      }
      return EMAIL_REGEX.test(value)
        ? undefined
        : "Enter a valid email address";
    },
    fieldComponentProps: {
      placeholder: "user@example.com",
    },
  }),
];

export const WithCustomValidation: Story = {
  args: {
    formContent: customValidateFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    validate: async (value) => {
      if (typeof value !== "string" || value.length === 0) return undefined;
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(value) ? undefined : "Enter a valid email address";
    },
    fieldComponentProps: { placeholder: "user@example.com" },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const customErrorFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    onValidationError: (error) => {
      if (error.type === "required") {
        return "Please provide your name";
      }
      return undefined;
    },
    fieldComponentProps: {
      placeholder: "Your name",
    },
  }),
  field({
    fieldKey: "age",
    fieldComponent: "NUMBER_INPUT",
    label: "Age",
    onValidationError: (error) => {
      if (error.type === "min") {
        return `You must be at least ${String(error.min)} years old`;
      }
      if (error.type === "max") {
        return `Age cannot exceed ${String(error.max)}`;
      }
      return undefined;
    },
    fieldComponentProps: {
      min: 18,
      max: 120,
      placeholder: "18-120",
    },
  }),
];

export const WithCustomErrorMessages: Story = {
  args: {
    formContent: customErrorFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    onValidationError: (error) => {
      if (error.type === "required") return "Please provide your name";
      return undefined; // fall back to default
    },
    fieldComponentProps: { placeholder: "Your name" },
  },
  {
    fieldKey: "age",
    fieldComponent: "NUMBER_INPUT",
    label: "Age",
    onValidationError: (error) => {
      if (error.type === "min") return \`You must be at least \${error.min} years old\`;
      if (error.type === "max") return \`Age cannot exceed \${error.max}\`;
      return undefined;
    },
    fieldComponentProps: { min: 18, max: 120 },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

export const WithObjectSetField: Story = {
  parameters: {
    docs: {
      source: {
        code: `const client = useOsdkClient();
const employeeObjectSet = client(Employee);

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employees",
    fieldComponent: "OBJECT_SET",
    label: "Employees",
    fieldComponentProps: { value: employeeObjectSet },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
  render: () => <ObjectSetFieldStory />,
};

function ObjectSetFieldStory(): React.ReactElement {
  const client = useOsdkClient();

  // Widen Employee.ObjectSet → ObjectSet<ObjectTypeDefinition> for
  // RendererFieldDefinition which uses the base ObjectTypeDefinition.
  // ObjectSet has contravariant method parameters (primaryKey) that
  // prevent structural assignability, so an assertion is needed here.
  const employeeObjectSet = useMemo(
    () => client(Employee) as ObjectSet<ObjectTypeDefinition>,
    [client]
  );

  const objectSetFormContent: ReadonlyArray<FormContentItem> = useMemo(
    () => [
      field({
        fieldKey: "name",
        fieldComponent: "TEXT_INPUT" as const,
        label: "Name",
        isRequired: true,
        fieldComponentProps: {
          placeholder: "Enter a name",
        },
      }),
      field({
        fieldKey: "employees",
        fieldComponent: "OBJECT_SET" as const,
        label: "Employees",
        fieldComponentProps: {
          value: employeeObjectSet,
        },
      }),
    ],
    [employeeObjectSet]
  );

  return (
    <BaseForm formContent={objectSetFormContent} onSubmit={handleSubmit} />
  );
}

const singleSelectDropdownFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (Select)",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      placeholder: "Select department...",
    },
  }),
  field({
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team (Searchable)",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      isSearchable: true,
      placeholder: "Search teams...",
    },
  }),
];

export const WithDropdown: Story = {
  args: {
    formContent: singleSelectDropdownFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (Select)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      placeholder: "Select department...",
    },
  },
  {
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team (Searchable)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      isSearchable: true,
      placeholder: "Search teams...",
    },
  },
];

// Side-by-side comparison: plain Select vs searchable Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const multiSelectDropdownFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "categories",
    fieldComponent: "DROPDOWN",
    label: "Categories (Select)",
    isRequired: true,
    fieldComponentProps: {
      items: TAG_ITEMS,
      isMultiple: true,
      placeholder: "Select categories...",
    },
  }),
  field({
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (Searchable)",
    fieldComponentProps: {
      items: TAG_ITEMS,
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  }),
];

export const WithMultiSelectDropdown: Story = {
  args: {
    formContent: multiSelectDropdownFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "categories",
    fieldComponent: "DROPDOWN",
    label: "Categories (Select)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      placeholder: "Select categories...",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (Searchable)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  },
];

// Side-by-side comparison: plain multi-Select vs searchable multi-Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const richDropdownLabelFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "assigneeUserId",
    fieldComponent: "DROPDOWN",
    label: "Assignee",
    fieldComponentProps: {
      items: USER_ID_ITEMS,
      itemToStringLabel: getUserIdLabel,
      renderItemLabel: renderUserIdLabel,
      isSearchable: true,
      placeholder: "Search users...",
    },
  }),
  field({
    fieldKey: "reviewerUserIds",
    fieldComponent: "DROPDOWN",
    label: "Reviewers",
    fieldComponentProps: {
      items: USER_ID_ITEMS,
      itemToStringLabel: getUserIdLabel,
      renderItemLabel: renderUserIdLabel,
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search reviewers...",
    },
  }),
];

export const WithRichDropdownLabels: Story = {
  args: {
    formContent: richDropdownLabelFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

const usersById = {
  usr_ada: { name: "Ada Lovelace", team: "Computation" },
  usr_grace: { name: "Grace Hopper", team: "Compilers" },
  usr_katherine: { name: "Katherine Johnson", team: "Flight dynamics" },
};

const formContent = [
  {
    fieldKey: "assigneeUserId",
    fieldComponent: "DROPDOWN",
    label: "Assignee",
    fieldComponentProps: {
      items: userIds,
      itemToStringLabel: (userId) => usersById[userId]?.name ?? userId,
      renderItemLabel: (userId) => (
        <span>
          <strong>{usersById[userId]?.name ?? userId}</strong>
          <span>{usersById[userId]?.team}</span>
        </span>
      ),
      isSearchable: true,
      placeholder: "Search users...",
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const dateTimeFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  }),
  field({
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline (date only)",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  }),
];

export const WithDateTimePicker: Story = {
  args: {
    formContent: dateTimeFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  },
  {
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline (date only)",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  },
];

// showTime: true adds a time picker alongside the date calendar.
// Without showTime, only the date is selectable.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const blueprintDialogFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  }),
  field({
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  }),
  field({
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  }),
  field({
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    isRequired: true,
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      placeholder: "Select department...",
    },
  }),
  field({
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      isSearchable: true,
      placeholder: "Search teams...",
    },
  }),
];

function BlueprintDialogBaseForm(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button text="Open dialog" onClick={handleOpen} />
      <Dialog
        className="osdkBlueprintDialogForm"
        isOpen={isOpen}
        onClose={handleClose}
        title="Action form"
      >
        <BaseForm
          formContent={blueprintDialogFormContent}
          onSubmit={handleSubmit}
        />
      </Dialog>
    </>
  );
}

export const InsideBlueprintDialog: Story = {
  render: () => <BlueprintDialogBaseForm />,
  parameters: {
    docs: {
      source: {
        code: `function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`,
      },
    },
  },
};

const scrollableDialogFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Full Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter full name" },
  }),
  field({
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    fieldComponentProps: { placeholder: "user@example.com" },
  }),
  field({
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      placeholder: "Select department...",
    },
  }),
  field({
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  }),
  field({
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: DROPDOWN_ITEMS,
      placeholder: "Select priority",
    },
  }),
  field({
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Status",
    fieldComponentProps: {
      options: [
        { label: "Active", value: true },
        { label: "Inactive", value: false },
      ],
    },
  }),
  field({
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    fieldComponentProps: { placeholder: "Tell us about yourself", rows: 3 },
  }),
  field({
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags",
    fieldComponentProps: {
      items: TAG_ITEMS,
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  }),
  field({
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Resume",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  }),
  field({
    fieldKey: "notes",
    fieldComponent: "TEXT_AREA",
    label: "Additional Notes",
    fieldComponentProps: { placeholder: "Any extra details", rows: 2 },
  }),
];

function ScrollableDialogBaseForm(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button text="Open dialog" onClick={handleOpen} />
      <Dialog
        className="osdkBlueprintDialogForm"
        isOpen={isOpen}
        onClose={handleClose}
        title="New employee"
      >
        <BaseForm
          formContent={scrollableDialogFormContent}
          onSubmit={handleSubmit}
        />
      </Dialog>
    </>
  );
}

export const ScrollableDialogForm: Story = {
  render: () => <ScrollableDialogBaseForm />,
  parameters: {
    docs: {
      description: {
        story:
          "When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom.",
      },
      source: {
        code: `// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`,
      },
    },
  },
};

const dateRangeFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "vacationDates",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Vacation Dates (date only)",
    fieldComponentProps: {
      placeholderStart: "Start date",
      placeholderEnd: "End date",
    },
  }),
  field({
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  }),
];

export const WithDateRangePicker: Story = {
  args: {
    formContent: dateRangeFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "vacationDates",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Vacation Dates (date only)",
    fieldComponentProps: {
      placeholderStart: "Start date",
      placeholderEnd: "End date",
    },
  },
  {
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  },
];

// DATE_RANGE_INPUT renders two inputs (start/end) with
// a shared calendar popover. showTime adds time pickers.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const multiFilePickerFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "attachments",
    fieldComponent: "FILE_PICKER",
    label: "Attachments",
    fieldComponentProps: {
      isMulti: true,
      accept: [".pdf", ".png", ".jpg"],
      maxSize: 5242880,
      text: "No files selected",
      buttonText: "Choose Files",
    },
  }),
  field({
    fieldKey: "singleFile",
    fieldComponent: "FILE_PICKER",
    label: "Cover Image (single file)",
    fieldComponentProps: {
      accept: ".png,.jpg",
      text: "No file chosen",
    },
  }),
];

export const WithMultiFilePicker: Story = {
  args: {
    formContent: multiFilePickerFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "attachments",
    fieldComponent: "FILE_PICKER",
    label: "Attachments",
    fieldComponentProps: {
      isMulti: true,
      accept: [".pdf", ".png", ".jpg"],
      maxSize: 5242880,     // 5 MB
      text: "No files selected",
      buttonText: "Choose Files",
    },
  },
  {
    fieldKey: "singleFile",
    fieldComponent: "FILE_PICKER",
    label: "Cover Image (single file)",
    fieldComponentProps: {
      accept: ".png,.jpg",
    },
  },
];

// isMulti: true allows selecting multiple files.
// maxSize validates individual file sizes (in bytes).
// accept filters file types in the browser file dialog.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const helperTextFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    helperText: (
      <span>
        We'll use this to send you a confirmation.{" "}
        <a href="#privacy" style={{ color: "inherit" }}>
          Privacy policy
        </a>
      </span>
    ),
    helperTextPlacement: "tooltip",
    fieldComponentProps: {
      placeholder: "you@example.com",
    },
  }),
  field({
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    helperText: (
      <span>
        Write a short bio. <strong>Markdown</strong> is supported.
      </span>
    ),
    helperTextPlacement: "bottom",
    fieldComponentProps: {
      placeholder: "Tell us about yourself",
      rows: 3,
    },
  }),
  field({
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    helperText: "Select the department you belong to",
    helperTextPlacement: "tooltip",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      placeholder: "Select department",
    },
  }),
];

export const WithHelperText: Story = {
  args: {
    formContent: helperTextFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    helperText: (
      <span>
        We'll use this to send you a confirmation.{" "}
        <a href="#privacy">Privacy policy</a>
      </span>
    ),
    helperTextPlacement: "tooltip",
    fieldComponentProps: { placeholder: "you@example.com" },
  },
  {
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    helperText: (
      <span>
        Write a short bio. <strong>Markdown</strong> is supported.
      </span>
    ),
    helperTextPlacement: "bottom",
    fieldComponentProps: { placeholder: "Tell us about yourself", rows: 3 },
  },
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    helperText: "Select the department you belong to",
    helperTextPlacement: "tooltip",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales"],
      placeholder: "Select department",
    },
  },
];

// helperText accepts React.ReactNode — plain strings, JSX with links,
// bold text, or any valid React node.
// "tooltip" (default) shows an info icon next to the label.
// "bottom" renders the text below the label, above the input.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const defaultValueFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
      defaultValue: "Jane Doe",
    },
  }),
  field({
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0,
      max: 1000,
      step: 1,
      defaultValue: 42,
    },
  }),
  field({
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: DROPDOWN_ITEMS,
      placeholder: "Select priority",
    },
  }),
];

export const WithDefaultValues: Story = {
  args: {
    formContent: defaultValueFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
      defaultValue: "Jane Doe",
    },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0, max: 1000, step: 1,
      defaultValue: 42,
    },
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
];

// defaultValue inside fieldComponentProps pre-populates fields
// in uncontrolled mode. The "Priority" dropdown has no default
// for comparison.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const objectSelectFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
    },
  }),
  field({
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee",
    fieldComponentProps: {
      objectType: { type: "object" as const, apiName: "Employee" },
      placeholder: "Search employees\u2026",
    },
  }),
];

const sectionFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      placeholder: "Select department...",
    },
  }),
  {
    type: "section",
    key: "personal",
    definition: {
      title: "Personal Information",
      description: "Basic details about the employee",
      fields: [
        {
          fieldKey: "name",
          fieldComponent: "TEXT_INPUT",
          label: "Full Name",
          isRequired: true,
          fieldComponentProps: { placeholder: "Enter full name" },
        },
        {
          fieldKey: "email",
          fieldComponent: "TEXT_INPUT",
          label: "Email",
          fieldComponentProps: { placeholder: "user@example.com" },
        },
      ],
    },
  },
  {
    type: "section",
    key: "settings",
    definition: {
      title: "Settings",
      collapsedByDefault: true,
      fields: [
        {
          fieldKey: "isActive",
          fieldComponent: "RADIO_BUTTONS",
          label: "Active",
          fieldComponentProps: {
            options: [
              { label: "Yes", value: true },
              { label: "No", value: false },
            ],
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
      ],
    },
  },
];

export const WithObjectSelect: Story = {
  args: {
    formContent: objectSelectFormContent,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee",
    fieldComponentProps: {
      objectType: { type: "object" as const, apiName: "Employee" },
      placeholder: "Search employees\u2026",
    },
  },
];

// OBJECT_SELECT renders a searchable dropdown that queries
// the Foundry ontology for objects matching the search term.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

function ScopedObjectSelectStory(): React.ReactElement {
  const client = useOsdkClient();
  const marketingEmployees = useMemo(
    () =>
      client(Employee).where({
        department: "Marketing",
      }) as ObjectSet<ObjectTypeDefinition>,
    [client]
  );
  const scopedObjectSelectFormContent = useMemo(
    (): ReadonlyArray<FormContentItem> => [
      field({
        fieldKey: "employee",
        fieldComponent: "OBJECT_SELECT",
        label: "Marketing employee",
        helperText: "This selector is scoped by an ObjectSet.",
        fieldComponentProps: {
          objectSet: marketingEmployees,
          placeholder: "Search Marketing employees…",
        },
      }),
    ],
    [marketingEmployees]
  );

  return (
    <BaseForm
      formContent={scopedObjectSelectFormContent}
      onSubmit={handleSubmit}
    />
  );
}

export const WithScopedObjectSelect: Story = {
  render: () => <ScopedObjectSelectStory />,
  parameters: {
    docs: {
      source: {
        code: `function ScopedEmployeeForm() {
  const client = useOsdkClient();
  const marketingEmployees = useMemo(
    () => client(Employee).where({ department: "Marketing" }),
    [client],
  );

  const formContent = [
    {
      type: "field",
      definition: {
        fieldKey: "employee",
        fieldComponent: "OBJECT_SELECT",
        label: "Marketing employee",
        helperText: "This selector is scoped by an ObjectSet.",
        fieldComponentProps: {
          objectSet: marketingEmployees,
          placeholder: "Search Marketing employees…",
        },
      },
    },
  ];

  return <BaseForm formContent={formContent} onSubmit={handleSubmit} />;
}`,
      },
    },
  },
};

export const WithSections: Story = {
  args: {
    formContent: sectionFormContent,
    onSubmit: handleSubmit,
  },
};

const minimalSectionFormContent: ReadonlyArray<FormContentItem> = [
  {
    type: "section",
    key: "contact",
    definition: {
      title: "Contact Details",
      style: "minimal",
      description: "How to reach the employee",
      fields: [
        {
          fieldKey: "phone",
          fieldComponent: "TEXT_INPUT",
          label: "Phone",
          fieldComponentProps: { placeholder: "+1 (555) 000-0000" },
        },
        {
          fieldKey: "email",
          fieldComponent: "TEXT_INPUT",
          label: "Email",
          fieldComponentProps: { placeholder: "user@example.com" },
        },
      ],
    },
  },
  {
    type: "section",
    key: "address",
    definition: {
      title: "Address",
      style: "minimal",
      fields: [
        {
          fieldKey: "street",
          fieldComponent: "TEXT_INPUT",
          label: "Street",
          fieldComponentProps: { placeholder: "123 Main St" },
        },
        {
          fieldKey: "city",
          fieldComponent: "TEXT_INPUT",
          label: "City",
          fieldComponentProps: { placeholder: "Springfield" },
        },
      ],
    },
  },
];

export const WithMinimalSections: Story = {
  args: {
    formContent: minimalSectionFormContent,
    onSubmit: handleSubmit,
  },
};

const gridSectionFormContent: ReadonlyArray<FormContentItem> = [
  {
    type: "section",
    key: "employee",
    definition: {
      title: "Employee Details",
      columnCount: 2,
      fields: [
        {
          fieldKey: "firstName",
          fieldComponent: "TEXT_INPUT",
          label: "First Name",
          fieldComponentProps: { placeholder: "First" },
        },
        {
          fieldKey: "lastName",
          fieldComponent: "TEXT_INPUT",
          label: "Last Name",
          fieldComponentProps: { placeholder: "Last" },
        },
        {
          fieldKey: "email",
          fieldComponent: "TEXT_INPUT",
          label: "Email",
          fieldComponentProps: { placeholder: "user@example.com" },
        },
        {
          fieldKey: "department",
          fieldComponent: "DROPDOWN",
          label: "Department",
          fieldComponentProps: {
            items: DEPARTMENT_ITEMS,
            placeholder: "Select...",
          },
        },
      ],
    },
  },
];

export const WithGridSection: Story = {
  args: {
    formContent: gridSectionFormContent,
    onSubmit: handleSubmit,
  },
};
function getUserIdLabel(item: unknown): string {
  if (typeof item !== "string") {
    return String(item);
  }

  return USER_DIRECTORY[item]?.name ?? item;
}

function renderUserIdLabel(item: unknown): React.ReactNode {
  const userId = String(item);
  const user = USER_DIRECTORY[userId];

  return (
    <span className="osdkRichDropdownLabel">
      <strong>{user?.name ?? userId}</strong>
      {user?.team != null ? (
        <span className="osdkRichDropdownDescription">{user.team}</span>
      ) : null}
    </span>
  );
}
