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

import type { ActionFormProps } from "@osdk/react-components/action-form";
import { ActionForm } from "@osdk/react-components/action-form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";

import { generatedFieldsStoryAction } from "../../mocks/fauxFoundry.js";

const generatedFieldsActionDefinition =
  generatedFieldsStoryAction.actionDefinition;

type GeneratedFieldsOnSubmit = NonNullable<
  ActionFormProps<typeof generatedFieldsActionDefinition>["onSubmit"]
>;

interface DefaultActionFormStoryProps {
  onSubmit?: GeneratedFieldsOnSubmit;
}

function DefaultActionFormStory({
  onSubmit,
}: DefaultActionFormStoryProps): React.ReactElement {
  return (
    <div className="osdkFormCard">
      <ActionForm
        actionDefinition={generatedFieldsActionDefinition}
        onSubmit={onSubmit}
        showFormTitle={true}
      />
    </div>
  );
}

const submittedValuesSpy = fn().mockName("onSubmit");

const handleSubmittedValues: GeneratedFieldsOnSubmit = (formState) => {
  submittedValuesSpy(formState);
};

const meta = {
  title: "Components/ActionForm",
  component: DefaultActionFormStory,
  tags: ["beta"],
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component:
          "ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction.",
      },
    },
  },
  argTypes: {
    onSubmit: { control: false, table: { category: "Events" } },
  },
} satisfies Meta<typeof DefaultActionFormStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: handleSubmittedValues,
  },
  play: async ({ canvasElement }) => {
    submittedValuesSpy.mockClear();

    const canvas = within(canvasElement);
    await userEvent.type(
      await canvas.findByRole("textbox", { name: /Full name/u }),
      "Ada Lovelace",
    );

    // Integer fields keep fractional input while editing and truncate on blur.
    const yearsInput = await canvas.findByRole("textbox", {
      name: /Years of experience/u,
    });
    await userEvent.type(yearsInput, "3.7");
    await expect(yearsInput).toHaveValue("3.7");
    await userEvent.tab();
    await expect(yearsInput).toHaveValue("3");

    await userEvent.type(
      await canvas.findByRole("combobox", { name: /Start date/u }),
      "2026-01-15{Enter}",
    );

    await userEvent.click(canvas.getByRole("button", { name: /submit/iu }));

    // The date picker stores local midnight; submission converts it to ISO.
    await waitFor(() =>
      expect(submittedValuesSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          yearsExperience: 3,
          startDate: new Date(2026, 0, 15).toISOString(),
        }),
      ),
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided.",
      },
      source: {
        code: `import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`,
      },
    },
  },
};
