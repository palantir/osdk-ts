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
import type { FormContentItem } from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import { useOsdkClient } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo } from "react";

import { Employee } from "../../types/Employee.js";
import {
  baseFormMeta,
  type BaseFormStoryProps,
  DEPARTMENT_ITEMS,
  DROPDOWN_ITEMS,
  field,
  handleSubmit,
  TAG_ITEMS,
  USER_DIRECTORY,
  USER_ID_ITEMS,
} from "./baseFormStoryHelpers.js";

const meta: Meta<BaseFormStoryProps> = {
  ...baseFormMeta,
  title: "Components/ActionForm/Building Blocks/BaseForm/Fields",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
      placeholder: "Search employees…",
    },
  }),
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
      placeholder: "Search employees…",
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
