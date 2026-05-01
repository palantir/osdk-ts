/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  ActionDefinition,
  ActionEditResponse,
  ActionValidationResponse,
} from "@osdk/api";
import type { ActionValidationError } from "@osdk/client";
import type {
  ActionParameters,
  FieldKey,
  FieldValueType,
  FormFieldDefinition,
  RendererFieldDefinition,
} from "./FormFieldApi.js";

/**
 * Props for the ActionForm component.
 *
 * A discriminated union ensures that controlled mode (formState provided)
 * always requires onFormStateChange, and uncontrolled mode makes `onFormStateChange` optional
 */
export type ActionFormProps<Q extends ActionDefinition<unknown>> =
  | (ActionFormConfigProps<Q> & {
    formState: FormState<Q>;
    onFormStateChange: (
      updater: (prevState: FormState<Q>) => FormState<Q>,
    ) => void;
  })
  | (ActionFormConfigProps<Q> & {
    formState?: undefined;
    onFormStateChange?: (
      updater: (prevState: FormState<Q>) => FormState<Q>,
    ) => void;
  });

interface ActionFormConfigProps<Q extends ActionDefinition<unknown>>
  extends
    Pick<
      BaseFormProps<Record<string, unknown>>,
      "formTitle" | "isSubmitDisabled"
    >
{
  actionDefinition: Q;

  /**
   * If not supplied, field definitions are constructed from `ActionParameters`.
   */
  formFieldDefinitions?: ReadonlyArray<FormFieldDefinition<Q>>;

  /**
   * If supplied, this will override the default submit action
   * By default, the action's applyAction will be called
   *
   * @param formState all field values when onSubmit is called
   * @param applyAction the function to execute the action
   * @returns a promise of the submission response
   */
  onSubmit?: (
    formState: FormState<Q>,
    applyAction: (
      args: ActionParameters<Q>,
    ) => Promise<ActionEditResponse | undefined>,
  ) => Promise<unknown> | void;

  /**
   * Called when the validation response is returned from a validateOnly submission
   *
   * @param results the validation response
   */
  onValidationResponse?: (results: ActionValidationResponse) => void;

  /**
   * Called when the action is successfully executed from a non-validateOnly submission
   *
   * @param results the submission response
   */
  onSuccess?: (results: ActionEditResponse | undefined) => void;

  /**
   * Called when there is an error in form submission
   *
   * @param error the error that occurred
   */
  onError?: (error: FormError) => void;
}

/**
 * Form values mapping parameter names to their values
 */
export type FormState<Q extends ActionDefinition<unknown>> = {
  [K in FieldKey<Q>]?: FieldValueType<Q, K>;
};

/**
 * Form error discriminated union
 */
export type FormError =
  | { type: "validation"; error: ActionValidationError }
  | { type: "submission"; error: unknown }
  | { type: "unknown"; error: unknown };

/**
 * Props for the `BaseForm` component, which renders a form without
 * OSDK data fetching.
 *
 * Generic over a form schema `S` so that `fieldDefinitions` receive
 * typed `fieldKey` and value types, and `onSubmit` returns typed state.
 *
 * Uses a discriminated union so that controlled mode (`formState` provided)
 * always requires `onFieldValueChange`, and uncontrolled mode omits both.
 */
export type BaseFormProps<
  S extends Record<string, unknown> = Record<string, unknown>,
> =
  & BaseFormCommonProps<S>
  & (
    | {
      formState: S;
      onFieldValueChange: <K extends keyof S & string>(
        fieldKey: K,
        value: S[K],
      ) => void;
    }
    | {
      formState?: undefined;
      onFieldValueChange?: <K extends keyof S & string>(
        fieldKey: K,
        value: S[K],
      ) => void;
    }
  );

interface BaseFormCommonProps<
  S extends Record<string, unknown> = Record<string, unknown>,
> {
  formTitle?: string;
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition<S>>;
  onSubmit: (formState: S) => Promise<void> | void;
  isSubmitDisabled?: boolean;
  isPending?: boolean;
  isLoading?: boolean;
  className?: string;
}
