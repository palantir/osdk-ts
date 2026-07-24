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
  field,
  handleSubmit,
} from "./baseFormStoryHelpers.js";

const meta: Meta<BaseFormStoryProps> = {
  ...baseFormMeta,
  title: "Components/ActionForm/BaseForm/Validation",
};

export default meta;
type Story = StoryObj<typeof meta>;

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
    // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
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
