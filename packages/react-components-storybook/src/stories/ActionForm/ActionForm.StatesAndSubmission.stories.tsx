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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";

import {
  actionFormMeta,
  ControlledActionFormStory,
  customSubmitSpy,
  errorSpy,
  failingSubmitSpy,
  handleCustomSubmit,
  handleFailingSubmit,
  handleSlowSubmit,
  slowSubmitSpy,
  successSpy,
  type UpdateEmployeeActionFormStoryProps,
} from "./actionFormStoryHelpers.js";

const meta: Meta<UpdateEmployeeActionFormStoryProps> = {
  ...actionFormMeta,
  title: "Components/ActionForm/Features/States & Submission",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SubmitSuccess: Story = {
  play: async ({ canvasElement }) => {
    successSpy.mockClear();

    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u,
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu,
    });

    await userEvent.type(fullNameInput, "Ada Lovelace");
    await userEvent.click(submitButton);

    await waitFor(() => expect(successSpy).toHaveBeenCalled());
    await expect(
      await canvas.findByText("Submit succeeded.")
    ).toBeInTheDocument();
    await expect(await canvas.findByText(/Ada Lovelace/u)).toBeInTheDocument();
  },
};

export const SubmitFailure: Story = {
  args: {
    onSubmit: handleFailingSubmit,
  },
  play: async ({ canvasElement }) => {
    errorSpy.mockClear();
    failingSubmitSpy.mockClear();

    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u,
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu,
    });

    await userEvent.type(fullNameInput, "Margaret Hamilton");
    await userEvent.click(submitButton);

    await waitFor(() => expect(failingSubmitSpy).toHaveBeenCalled());
    await waitFor(() => expect(errorSpy).toHaveBeenCalled());
    await expect(await canvas.findByText("Submit failed.")).toBeInTheDocument();
    await expect(
      await canvas.findByText(/Demo submission failed/u)
    ).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses a failing custom submit handler so the story shows the error state and serialized error response.",
      },
      source: {
        code: `<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`,
      },
    },
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    successSpy.mockClear();

    const canvas = within(canvasElement);
    await canvas.findByRole("textbox", { name: /^fullName/u });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu,
    });
    await userEvent.click(submitButton);

    await expect(await canvas.findByRole("alert")).toBeInTheDocument();
    await expect(successSpy).not.toHaveBeenCalled();
  },
  parameters: {
    docs: {
      description: {
        story:
          "Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid.",
      },
    },
  },
};

export const SubmitDisabled: Story = {
  args: {
    isSubmitDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      await canvas.findByRole("button", { name: /submit/iu })
    ).toBeDisabled();
  },
};

export const SlowCustomSubmit: Story = {
  args: {
    onSubmit: handleSlowSubmit,
  },
  play: async ({ canvasElement }) => {
    slowSubmitSpy.mockClear();

    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u,
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu,
    });

    await userEvent.type(fullNameInput, "Katherine Johnson");
    await userEvent.click(submitButton);

    await waitFor(() => expect(slowSubmitSpy).toHaveBeenCalled());
    await expect(
      await canvas.findByRole("button", { name: /submitting/iu })
    ).toBeDisabled();
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown.",
      },
      source: {
        code: `<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`,
      },
    },
  },
};

export const CustomSubmitHandler: Story = {
  name: "Custom Submit Wrapper",
  args: {
    onSubmit: handleCustomSubmit,
  },
  play: async ({ canvasElement }) => {
    customSubmitSpy.mockClear();

    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u,
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu,
    });

    await userEvent.type(fullNameInput, "Grace Hopper");
    await userEvent.click(submitButton);

    await waitFor(() =>
      expect(customSubmitSpy).toHaveBeenCalledWith(
        expect.objectContaining({ fullName: "Grace Hopper" })
      )
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action.",
      },
      source: {
        code: `<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`,
      },
    },
  },
};

export const ControlledFormState: Story = {
  render: () => <ControlledActionFormStory />,
  parameters: {
    docs: {
      source: {
        code: `const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`,
      },
    },
  },
};
