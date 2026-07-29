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
  FormContentItem,
  RendererFieldDefinition,
} from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import type { Meta } from "@storybook/react-vite";
import React, { useState } from "react";
import { fn } from "storybook/test";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";
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
export interface BaseFormStoryProps {
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

export function field(definition: RendererFieldDefinition): FormContentItem {
  return { type: "field", definition };
}

export const DROPDOWN_ITEMS: string[] = ["Low", "Medium", "High"];

export const DEPARTMENT_ITEMS: string[] = [
  "Engineering",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "Legal",
];

export const TAG_ITEMS: string[] = [
  "Urgent",
  "Review",
  "Follow-up",
  "Archived",
  "Pinned",
];

export const USER_ID_ITEMS: string[] = [
  "usr_ada",
  "usr_grace",
  "usr_katherine",
];

export const USER_DIRECTORY: Record<string, { name: string; team: string }> = {
  usr_ada: { name: "Ada Lovelace", team: "Computation" },
  usr_grace: { name: "Grace Hopper", team: "Compilers" },
  usr_katherine: { name: "Katherine Johnson", team: "Flight dynamics" },
};

export const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];

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
export function handleSubmit(formState: Record<string, unknown>): void {
  submitSpy(formState);
  submitOutputRef.current?.({
    status: "success",
    submittedValues: formState,
    response: { message: "onSubmit completed" },
  });
}

export function BaseFormSubmissionOutput(): React.ReactElement {
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

export const baseFormMeta: Meta<BaseFormStoryProps> = {
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
        'Whether the form is in a pending state. Shows "Submitting…" and disables the button.',
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

// Shared "kitchen sink" form content used by the core BaseForm stories.
export const formContent: ReadonlyArray<FormContentItem> = [
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
