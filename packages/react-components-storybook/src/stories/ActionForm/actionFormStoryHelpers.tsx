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

import type { ActionDefinition, ActionEditResponse } from "@osdk/api";
import type {
  ActionFormProps,
  FormFieldDefinition,
  FormState,
} from "@osdk/react-components/experimental";
import { ActionForm } from "@osdk/react-components/experimental";
import type { Meta } from "@storybook/react-vite";
import React, { useCallback, useState } from "react";
import { fn } from "storybook/test";

import {
  generatedFieldsStoryAction,
  unsupportedFieldsStoryAction,
  updateEmployeeStoryAction,
} from "../../mocks/fauxFoundry.js";
import {
  FormStoryLayout,
  type StorySubmissionSnapshot,
  SubmissionOutputPanel,
} from "./SubmissionOutputPanel.js";

const actionDefinition = updateEmployeeStoryAction.actionDefinition;
const generatedFieldsActionDefinition =
  generatedFieldsStoryAction.actionDefinition;
const unsupportedFieldsActionDefinition =
  unsupportedFieldsStoryAction.actionDefinition;
const SUBMIT_DELAY_MS = 1500;

export interface UpdateEmployeeActionFormStoryProps {
  formFieldDefinitions?: ReadonlyArray<
    FormFieldDefinition<typeof actionDefinition>
  >;
  formTitle?: string;
  isSubmitDisabled?: boolean;
  onSubmit?: ActionFormProps<typeof actionDefinition>["onSubmit"];
  showFormTitle?: boolean;
}

type UpdateEmployeeApplyAction = Parameters<
  NonNullable<ActionFormProps<typeof actionDefinition>["onSubmit"]>
>[1];
type GeneratedFieldsApplyAction = Parameters<
  NonNullable<
    ActionFormProps<typeof generatedFieldsActionDefinition>["onSubmit"]
  >
>[1];
type UnsupportedFieldsApplyAction = Parameters<
  NonNullable<
    ActionFormProps<typeof unsupportedFieldsActionDefinition>["onSubmit"]
  >
>[1];
type StoryOnSubmit<Q extends ActionDefinition<unknown>> = NonNullable<
  ActionFormProps<Q>["onSubmit"]
>;
type StoryOnError<Q extends ActionDefinition<unknown>> = NonNullable<
  ActionFormProps<Q>["onError"]
>;
type StoryApplyAction<Q extends ActionDefinition<unknown>> = Parameters<
  StoryOnSubmit<Q>
>[1];

interface UseActionFormSubmissionOptions<Q extends ActionDefinition<unknown>> {
  applyStoryAction: (
    formState: FormState<Q>,
    applyAction: StoryApplyAction<Q>
  ) => Promise<ActionEditResponse | undefined>;
  onSubmit?: StoryOnSubmit<Q>;
}

interface ActionFormSubmissionHandlers<Q extends ActionDefinition<unknown>> {
  handleStoryError: StoryOnError<Q>;
  handleStorySubmit: StoryOnSubmit<Q>;
  submission: StorySubmissionSnapshot;
}

export const actionFormDefaultValueFields: ReadonlyArray<
  FormFieldDefinition<typeof actionDefinition>
> = [
  {
    fieldKey: "fullName",
    label: "Full name",
    fieldComponent: "TEXT_INPUT",
    defaultValue: "Grace Hopper",
    fieldComponentProps: {},
  },
  {
    fieldKey: "yearsExperience",
    label: "Years of experience",
    fieldComponent: "NUMBER_INPUT",
    defaultValue: 42,
    fieldComponentProps: {
      min: 0,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "RADIO_BUTTONS",
    defaultValue: true,
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "isFullTime",
    label: "Employment type",
    fieldComponent: "DROPDOWN",
    defaultValue: true,
    fieldComponentProps: {
      items: [true, false],
      itemToStringLabel: (value) =>
        value === true ? "Full-time" : "Contractor",
      placeholder: "Select employment type",
    },
  },
];

export const actionFormOverrideFields: ReadonlyArray<
  FormFieldDefinition<typeof actionDefinition>
> = [
  {
    fieldKey: "fullName",
    label: "Employee legal name",
    fieldComponent: "TEXT_INPUT",
    helperText: "Use the name that should appear in HR records.",
    fieldComponentProps: {
      placeholder: "Ada Lovelace",
      minLength: 2,
    },
  },
  {
    fieldKey: "yearsExperience",
    label: "Relevant experience",
    fieldComponent: "NUMBER_INPUT",
    helperText: "Whole years only.",
    fieldComponentProps: {
      min: 0,
      max: 80,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "SWITCH",
    helperText: "Turn on when the employee is not assigned to an office.",
    fieldComponentProps: {},
  },
  {
    fieldKey: "isFullTime",
    label: "Employment type",
    fieldComponent: "DROPDOWN",
    helperText: "Choose whether this employee is full-time or a contractor.",
    fieldComponentProps: {
      items: [true, false],
      itemToStringLabel: (value) =>
        value === true ? "Full-time" : "Contractor",
      placeholder: "Select employment type",
    },
  },
];

export const successSpy = fn().mockName("onSuccess");
export const errorSpy = fn().mockName("onError");
export const customSubmitSpy = fn().mockName("onSubmit");
export const slowSubmitSpy = fn().mockName("onSubmit:slow");
export const failingSubmitSpy = fn().mockName("onSubmit:failure");

function handleSuccess(result: ActionEditResponse | undefined): void {
  successSpy(result);
}

function applyUpdateEmployeeStoryAction(
  formState: FormState<typeof actionDefinition>,
  applyAction: UpdateEmployeeApplyAction
): ReturnType<UpdateEmployeeApplyAction> {
  // ActionForm passes coerced form values to custom submit handlers at runtime.
  // The callback type currently exposes metadata-shaped ActionParameters, so the
  // story uses the callback's parameter type to keep the example wired to the
  // real apply path while preserving type safety.
  return applyAction(
    formState as unknown as Parameters<UpdateEmployeeApplyAction>[0]
  );
}

function applyGeneratedFieldsStoryAction(
  formState: FormState<typeof generatedFieldsActionDefinition>,
  applyAction: GeneratedFieldsApplyAction
): ReturnType<GeneratedFieldsApplyAction> {
  // See applyUpdateEmployeeStoryAction: this keeps the generated-fields story
  // using the same applyAction path even though the callback type is metadata-shaped.
  return applyAction(
    formState as unknown as Parameters<GeneratedFieldsApplyAction>[0]
  );
}

function applyUnsupportedFieldsStoryAction(
  formState: FormState<typeof unsupportedFieldsActionDefinition>,
  applyAction: UnsupportedFieldsApplyAction
): ReturnType<UnsupportedFieldsApplyAction> {
  // See applyUpdateEmployeeStoryAction: unsupported-field stories still submit
  // through the real applyAction path so the response panel shows true results.
  return applyAction(
    formState as unknown as Parameters<UnsupportedFieldsApplyAction>[0]
  );
}

export const handleCustomSubmit: NonNullable<
  ActionFormProps<typeof actionDefinition>["onSubmit"]
> = (formState, applyAction) => {
  customSubmitSpy(formState);
  return applyUpdateEmployeeStoryAction(formState, applyAction);
};

export const handleSlowSubmit: NonNullable<
  ActionFormProps<typeof actionDefinition>["onSubmit"]
> = async (formState, applyAction) => {
  slowSubmitSpy(formState);
  await waitForStoryDelay(SUBMIT_DELAY_MS);
  return applyUpdateEmployeeStoryAction(formState, applyAction);
};

export const handleFailingSubmit: NonNullable<
  ActionFormProps<typeof actionDefinition>["onSubmit"]
> = async (formState) => {
  failingSubmitSpy(formState);
  await waitForStoryDelay(300);
  throw new Error("Demo submission failed");
};

function waitForStoryDelay(delayMs: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

function useActionFormSubmission<Q extends ActionDefinition<unknown>>({
  applyStoryAction,
  onSubmit,
}: UseActionFormSubmissionOptions<Q>): ActionFormSubmissionHandlers<Q> {
  const [submission, setSubmission] = useState<StorySubmissionSnapshot>({
    status: "idle",
  });

  const handleStorySubmit: StoryOnSubmit<Q> = useCallback(
    async (formState, applyAction) => {
      setSubmission({ status: "submitting", submittedValues: formState });
      try {
        let response: unknown;
        if (onSubmit == null) {
          const actionResponse = await applyStoryAction(formState, applyAction);
          handleSuccess(actionResponse);
          response = actionResponse;
        } else {
          response = await onSubmit(formState, applyAction);
        }
        setSubmission({
          status: "success",
          submittedValues: formState,
          response,
        });
        return response;
      } catch (error) {
        setSubmission({ status: "error", submittedValues: formState, error });
        throw error;
      }
    },
    [applyStoryAction, onSubmit]
  );

  const handleStoryError: StoryOnError<Q> = useCallback((error) => {
    setSubmission((currentSubmission) => ({
      ...currentSubmission,
      status: "error",
      error,
    }));
    errorSpy(error);
  }, []);

  return { handleStoryError, handleStorySubmit, submission };
}

export function UpdateEmployeeActionFormStory({
  formFieldDefinitions,
  formTitle,
  isSubmitDisabled,
  onSubmit,
  showFormTitle,
}: UpdateEmployeeActionFormStoryProps): React.ReactElement {
  const { handleStoryError, handleStorySubmit, submission } =
    useActionFormSubmission({
      applyStoryAction: applyUpdateEmployeeStoryAction,
      onSubmit,
    });

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
        formFieldDefinitions={formFieldDefinitions}
        formTitle={formTitle}
        isSubmitDisabled={isSubmitDisabled}
        onError={handleStoryError}
        onSubmit={handleStorySubmit}
        showFormTitle={showFormTitle}
      />
    </FormStoryLayout>
  );
}

export function DefaultActionFormStory(): React.ReactElement {
  const { handleStoryError, handleStorySubmit, submission } =
    useActionFormSubmission({
      applyStoryAction: applyGeneratedFieldsStoryAction,
    });

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
        actionDefinition={generatedFieldsActionDefinition}
        onError={handleStoryError}
        onSubmit={handleStorySubmit}
        showFormTitle={true}
      />
    </FormStoryLayout>
  );
}

export function UnsupportedFieldsActionFormStory(): React.ReactElement {
  const { handleStoryError, handleStorySubmit, submission } =
    useActionFormSubmission({
      applyStoryAction: applyUnsupportedFieldsStoryAction,
    });

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
        actionDefinition={unsupportedFieldsActionDefinition}
        onError={handleStoryError}
        onSubmit={handleStorySubmit}
        showFormTitle={true}
      />
    </FormStoryLayout>
  );
}

export function ControlledActionFormStory(): React.ReactElement {
  const [formState, setFormState] = useState<
    FormState<typeof actionDefinition>
  >({
    fullName: "Ada Lovelace",
    yearsExperience: 5,
    isRemote: true,
    isFullTime: true,
  });
  const { handleStoryError, handleStorySubmit, submission } =
    useActionFormSubmission({
      applyStoryAction: applyUpdateEmployeeStoryAction,
    });

  return (
    <FormStoryLayout
      output={
        <SubmissionOutputPanel
          idleMessage="Submit the form to see the action response."
          snapshot={submission}
        />
      }
    >
      <>
        <div className="osdkFormStorySpacing">
          <strong>Current form state (JSON):</strong>
          <pre className="osdkCodeOutput">
            {JSON.stringify(formState, null, 2)}
          </pre>
        </div>
        <ActionForm
          actionDefinition={actionDefinition}
          formState={formState}
          onError={handleStoryError}
          onFormStateChange={setFormState}
          onSubmit={handleStorySubmit}
        />
      </>
    </FormStoryLayout>
  );
}

export const actionFormMeta: Meta<UpdateEmployeeActionFormStoryProps> = {
  component: UpdateEmployeeActionFormStory,
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
    formFieldDefinitions: {
      control: false,
      description:
        "Complete replacement for generated fields. Include every action parameter that should appear in the form.",
    },
    formTitle: {
      control: "text",
      description: "Optional title used when showFormTitle is true.",
    },
    isSubmitDisabled: {
      control: "boolean",
      description: "Disables the submit button before validation runs.",
    },
    onSubmit: {
      control: false,
      table: { category: "Events" },
    },
    showFormTitle: {
      control: "boolean",
      description: "Shows the form title above the generated fields.",
    },
  },
  args: {
    isSubmitDisabled: false,
    showFormTitle: false,
  },
};
