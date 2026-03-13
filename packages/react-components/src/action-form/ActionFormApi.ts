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

import type { ActionDefinition, ActionEditResponse } from "@osdk/api";
import type {
  ActionParameters,
  BaseFormFieldDefinition,
  FieldKey,
  FieldValueType,
  FormFieldDefinitionMap,
} from "./FormFieldApi.js";

/**
 * Props for the ActionForm component
 */
export interface ActionFormProps<Q extends ActionDefinition<unknown>>
  extends
    Omit<
      BaseActionFormProps<FormState<Q>>,
      "onSubmit" | "formFieldDefinitionMap"
    >
{
  actionDefinition: Q;

  /**
   * If not supplied, this will be constructed from ActionParameters
   */
  formFieldDefinitionMap?: FormFieldDefinitionMap<Q>;

  /**
   * If supplied, this will override the default submit action
   * By default, the action's applyAction will be called
   *
   * @param formState all field values when onSubmit is called
   * @param applyAction the function to execute the action
   * @returns a promise of the submission response
   */
  onSubmit?: (
    formState: Partial<FormState<Q>>,
    applyAction: (
      args: ActionParameters<Q>,
    ) => Promise<ActionEditResponse | undefined>,
  ) => Promise<void> | void;

  /**
   * Called when the action is successfully executed from a non-validateOnly submission
   *
   * @param results the submission response
   */
  onSuccess?: (results: ActionEditResponse) => void;

  /**
   * Called when there is an error in form submission
   *
   * @param error the error that occurred
   */
  onError?: (error: FormError) => void;
}

/**
 * Props for the BaseActionForm component
 */
export interface BaseActionFormProps<
  S extends Record<string, unknown> = Record<string, unknown>,
> {
  /**
   * The form title
   */
  formTitle?: string;

  /**
   * Field definitions for each key in the form state
   */
  formFieldDefinitionMap: { [K in keyof S]: BaseFormFieldDefinition<S[K]> };

  /**
   * If provided, the form will operate in controlled mode
   */
  formState?: Partial<S>;

  /**
   * Called when the form state changes
   * TODO: Maybe pass the prevState
   *
   * @param formState the updated form state
   */
  onFormStateChange?: (formState: Partial<S>) => void;

  /**
   * Override to disable submit button
   * If not provided, button is disabled when form is submitting
   *
   * @default false
   */
  isSubmitDisabled?: boolean;

  /**
   * Called when the form is submitted
   *
   * @param formState all field values when onSubmit is called
   * @returns a promise of the submission response
   */
  onSubmit?: (formState: Partial<S>) => Promise<void> | void;
}

/**
 * Form values mapping parameter names to their values
 */
export type FormState<Q extends ActionDefinition<unknown>> = {
  [K in FieldKey<Q>]: FieldValueType<Q, K>;
};

/**
 * Form error discriminated union
 */
export type FormError =
  | { type: "submission"; error: Error }
  | { type: "unknown"; error: unknown };
