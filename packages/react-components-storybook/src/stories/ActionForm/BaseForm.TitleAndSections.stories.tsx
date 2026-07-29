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

import type { FormContentItem } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  baseFormMeta,
  type BaseFormStoryProps,
  DEPARTMENT_ITEMS,
  DROPDOWN_ITEMS,
  field,
  formContent,
  handleSubmit,
} from "./baseFormStoryHelpers.js";

const meta: Meta<BaseFormStoryProps> = {
  ...baseFormMeta,
  title: "Components/ActionForm/Building Blocks/BaseForm/Title & Sections",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
