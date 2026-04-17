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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import type { RendererFieldDefinition } from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import { useOsdkClient } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useMemo, useState } from "react";
import { expect, fn, userEvent, within } from "storybook/test";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

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

const DEPARTMENT_ITEMS = [
  "Engineering",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "Legal",
];

const TAG_ITEMS = ["Urgent", "Review", "Follow-up", "Archived", "Pinned"];

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
          className="osdkCustomTextarea"
          placeholder="Custom rendered notes field"
        />
      ),
    },
  },
];

const EMPTY_FIELD_DEFINITIONS: ReadonlyArray<RendererFieldDefinition> = [];

const TOAST_DURATION_MS = 3000;

// Module-level ref so handleSubmit can trigger the toast rendered by SubmitToast.
const toastRef: { current: ((msg: string) => void) | undefined } = {
  current: undefined,
};

// Spy that logs submissions to the Storybook Actions panel
// and shows a brief success toast in the story canvas.
const submitSpy = fn().mockName("onSubmit");
function handleSubmit(formState: Record<string, unknown>): void {
  submitSpy(formState);
  toastRef.current?.("Submitted successfully");
}

function SubmitToast(): React.ReactElement | null {
  const [message, setMessage] = useState<string>();

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(undefined), TOAST_DURATION_MS);
  }, []);

  toastRef.current = showToast;

  if (message == null) {
    return null;
  }
  return <div className="osdkSubmitToast">{message}</div>;
}

const meta: Meta<BaseFormStoryProps> = {
  title: "Experimental/BaseForm",
  tags: ["experimental"],
  component: BaseForm,
  decorators: [
    (Story) => (
      <>
        <SubmitToast />
        <div className="osdkFormCard">
          <Story />
        </div>
      </>
    ),
  ],
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
  render: () => <ControlledFormStory />,
};

function ControlledFormStory(): React.ReactElement {
  const [formState, setFormState] = useState<Record<string, unknown>>({});

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      setFormState((prev) => ({ ...prev, [fieldKey]: value }));
    },
    [],
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
}

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
};

const validationFieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Required field",
    },
  },
  {
    fieldKey: "username",
    fieldComponent: "TEXT_INPUT",
    label: "Username",
    fieldComponentProps: {
      minLength: 3,
      maxLength: 20,
      placeholder: "3-20 characters",
    },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0,
      max: 100,
      step: 1,
      placeholder: "0-100",
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      min: new Date(2024, 0, 1),
      max: new Date(2026, 11, 31),
      placeholder: "2024-2026 only",
    },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: {
      maxSize: 1048576,
    },
  },
];

export const WithValidation: Story = {
  args: {
    fieldDefinitions: validationFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Focus and blur the required "Name" field to trigger validation.
    // Query by role — the label includes a child <span aria-label="required">
    // that merges into the computed accessible name.
    const nameInput = canvas.getByRole("textbox", { name: /Name/ });
    await userEvent.click(nameInput);
    await userEvent.tab();

    await expect(canvas.getByText("This field is required")).toBeVisible();

    // Typing a value should clear the error.
    await userEvent.click(nameInput);
    await userEvent.type(nameInput, "Alice");
    await userEvent.tab();

    await expect(
      canvas.queryByText("This field is required"),
    ).not.toBeInTheDocument();
  },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const customValidateFieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
  {
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
  },
];

export const WithCustomValidation: Story = {
  args: {
    fieldDefinitions: customValidateFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const customErrorFieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
  {
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
  },
  {
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
  },
];

export const WithCustomErrorMessages: Story = {
  args: {
    fieldDefinitions: customErrorFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
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

const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
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
    [client],
  );

  const objectSetFieldDefinitions: ReadonlyArray<RendererFieldDefinition> =
    useMemo(
      () => [
        {
          fieldKey: "name",
          fieldComponent: "TEXT_INPUT" as const,
          label: "Name",
          isRequired: true,
          fieldComponentProps: {
            placeholder: "Enter a name",
          },
        },
        {
          fieldKey: "employees",
          fieldComponent: "OBJECT_SET" as const,
          label: "Employees",
          fieldComponentProps: {
            value: employeeObjectSet,
          },
        },
      ],
      [employeeObjectSet],
    );

  return (
    <BaseForm
      fieldDefinitions={objectSetFieldDefinitions}
      onSubmit={handleSubmit}
    />
  );
}

const searchableDropdownFieldDefinitions: ReadonlyArray<
  RendererFieldDefinition
> = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      isSearchable: true,
      placeholder: "Search departments...",
    },
  },
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter your name",
    },
  },
];

export const WithSearchableDropdown: Story = {
  args: {
    fieldDefinitions: searchableDropdownFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      isSearchable: true,
      placeholder: "Search departments...",
    },
  },
];

// isSearchable renders a Combobox with type-ahead filtering
// instead of a plain Select dropdown.
<BaseForm
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const multiSelectDropdownFieldDefinitions: ReadonlyArray<
  RendererFieldDefinition
> = [
  {
    fieldKey: "title",
    fieldComponent: "TEXT_INPUT",
    label: "Title",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a title",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags",
    fieldComponentProps: {
      items: TAG_ITEMS,
      isMultiple: true,
      isSearchable: true,
      placeholder: "Select tags...",
    },
  },
];

export const WithMultiSelectDropdown: Story = {
  args: {
    fieldDefinitions: multiSelectDropdownFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
  {
    fieldKey: "title",
    fieldComponent: "TEXT_INPUT",
    label: "Title",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a title" },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      isSearchable: true,
      placeholder: "Select tags...",
    },
  },
];

// isMultiple + isSearchable renders a multi-select Combobox
// where users can search and select multiple values.
<BaseForm
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const dateTimeFieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
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

export const WithDateTimePicker: Story = {
  args: {
    fieldDefinitions: dateTimeFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const dateRangeFieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
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

export const WithDateRangePicker: Story = {
  args: {
    fieldDefinitions: dateRangeFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const multiFilePickerFieldDefinitions: ReadonlyArray<RendererFieldDefinition> =
  [
    {
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
    },
    {
      fieldKey: "singleFile",
      fieldComponent: "FILE_PICKER",
      label: "Cover Image (single file)",
      fieldComponentProps: {
        accept: ".png,.jpg",
        text: "No file chosen",
      },
    },
  ];

export const WithMultiFilePicker: Story = {
  args: {
    fieldDefinitions: multiFilePickerFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};

const defaultValueFieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
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
      min: 0,
      max: 1000,
      step: 1,
      defaultValue: 42,
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
];

export const WithDefaultValues: Story = {
  args: {
    fieldDefinitions: defaultValueFieldDefinitions,
    onSubmit: handleSubmit,
  },
  parameters: {
    docs: {
      source: {
        code: `const fieldDefinitions = [
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
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`,
      },
    },
  },
};
