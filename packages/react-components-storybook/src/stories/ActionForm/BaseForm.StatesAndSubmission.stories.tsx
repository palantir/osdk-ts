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
import type {
  BaseFormFieldProps,
  FormContentItem,
} from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import { useOsdkClient } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useMemo, useState } from "react";

import { Employee } from "../../types/Employee.js";
import {
  baseFormMeta,
  type BaseFormStoryProps,
  DROPDOWN_ITEMS,
  EMPTY_FORM_CONTENT,
  field,
  formContent,
  handleSubmit,
  TAG_ITEMS,
} from "./baseFormStoryHelpers.js";
import { THEMED_SLIDER_DEFAULT_VALUE } from "./ThemedSliderField.js";

const meta: Meta<BaseFormStoryProps> = {
  ...baseFormMeta,
  title: "Components/ActionForm/Building Blocks/BaseForm/States & Submission",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
