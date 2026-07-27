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

import type { ActionEditResponse } from "@osdk/api";
import type { FormError, FormState } from "@osdk/react-components/experimental";
import { ActionForm } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";

import { constraintsStoryAction } from "../../mocks/fauxFoundry.js";
import {
  FormStoryLayout,
  type StorySubmissionSnapshot,
  SubmissionOutputPanel,
} from "./SubmissionOutputPanel.js";

const actionDefinition = constraintsStoryAction.actionDefinition;

// Seeded so every required parameter (role, level, email) already has a
// value the moment the form mounts. FauxFoundry only echoes the registered
// action impl's canned validation response — with the `evaluatedConstraints`
// for oneOf/stringLength/range/arraySize/stringRegexMatch — once its own
// required-field check passes, so seeding avoids a chicken-and-egg gap where
// the `role` field renders as plain text before constraints have loaded.
const initialFormState: FormState<typeof actionDefinition> = {
  role: "designer",
  level: 5,
  email: "not-an-email",
};

function ConstraintsActionFormStory(): React.ReactElement {
  const [formState, setFormState] =
    useState<FormState<typeof actionDefinition>>(initialFormState);
  const [submission, setSubmission] = useState<StorySubmissionSnapshot>({
    status: "idle",
  });

  const handleSuccess = useCallback(
    (result: ActionEditResponse | undefined): void => {
      setSubmission((current) => ({
        ...current,
        status: "success",
        response: result,
      }));
    },
    []
  );

  const handleError = useCallback((error: FormError): void => {
    setSubmission((current) => ({ ...current, status: "error", error }));
  }, []);

  return (
    <FormStoryLayout
      output={
        <SubmissionOutputPanel
          idleMessage="Submit the form to see the action response."
          snapshot={submission}
        />
      }
    >
      <ActionForm
        actionDefinition={actionDefinition}
        formState={formState}
        onError={handleError}
        onFormStateChange={setFormState}
        onSuccess={handleSuccess}
        showFormTitle={true}
      />
    </FormStoryLayout>
  );
}

const meta = {
  title: "Components/ActionForm/Constraints",
  component: ConstraintsActionFormStory,
  tags: ["beta"],
  parameters: {
    docs: {
      description: {
        component:
          "Demonstrates ActionForm rendering constraints returned by an action's validate-only response: `oneOf` (role, dropdown), `stringLength` (bio), `range` (level), `arraySize` (tags), and `stringRegexMatch` (email).",
      },
    },
  },
} satisfies Meta<typeof ConstraintsActionFormStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Renders the constraints action with a seeded form state so the oneOf-driven dropdown, and the stringLength/range hints, are visible without any interaction.",
      },
      source: {
        code: `<ActionForm
  actionDefinition={constraintsStoryAction.actionDefinition}
  formState={{ role: "designer", level: 5, email: "not-an-email" }}
  showFormTitle={true}
/>`,
      },
    },
  },
};

export const ConstraintValidation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The `role` parameter's `oneOf` constraint swaps it to a dropdown once
    // the canned validation response loads.
    const roleDropdown = await canvas.findByRole(
      "combobox",
      {},
      {
        timeout: 5000,
      }
    );
    await expect(roleDropdown).toBeInTheDocument();

    // The `level` parameter's `range` constraint surfaces as min/max hints.
    const levelInput = await canvas.findByRole("textbox", {
      name: /^level/u,
    });
    await expect(levelInput.getAttribute("min")).toBe("1");
    await expect(levelInput.getAttribute("max")).toBe("10");

    // The `bio` parameter's `stringLength` constraint surfaces as
    // minLength/maxLength hints.
    const bioInput = await canvas.findByRole("textbox", { name: /^bio/u });
    await expect(bioInput.getAttribute("minlength")).toBe("10");
    await expect(bioInput.getAttribute("maxlength")).toBe("200");

    // The seeded email fails the `stringRegexMatch` constraint, so submit is
    // blocked with the constraint's configured failure message.
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu,
    });
    await userEvent.click(submitButton);
    await expect(await canvas.findByRole("alert")).toBeInTheDocument();
    await expect(
      await canvas.findByText("Enter a valid email address")
    ).toBeInTheDocument();

    // Fixing the email lets the action apply successfully.
    const emailInput = await canvas.findByRole("textbox", {
      name: /^email/u,
    });
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, "grace@example.com");
    await userEvent.click(submitButton);
    await waitFor(async () => {
      await expect(
        await canvas.findByText("Submit succeeded.")
      ).toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story:
          "Exercises the constraint-validation feature end to end: the oneOf dropdown and range/stringLength hints render from the canned validation response, an invalid email is rejected with the constraint's configured message, and correcting it lets the action apply.",
      },
    },
  },
};
