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
  ActionReturnTypeForOptions,
  ActionValidationResponse,
} from "@osdk/api";
import type { ActionValidationError, ApplyActionOptions } from "@osdk/client";
import type {
  ActionParameters,
  FieldKey,
  FieldValueType,
  FormFieldDefinition,
} from "./FormFieldApi.js";

/**
 * Props for the ActionForm component
 */
export interface ActionFormProps<Q extends ActionDefinition<unknown>> {
  actionDefinition: Q;

  /**
   * If not supplied, defaults to actionDef.displayName
   */
  formTitle?: string;

  /**
   * If not supplied, this will be constructed from ActionParameters
   */
  formFieldDefinition?: Array<FormFieldDefinition<Q>>;

  /**
   * Called when a field value changed.
   * Required when a field is in controlled mode, i.e. value is provided via formFieldDefinition.
   *
   * @param fieldKey The key of the changed field
   * @param value the updated value of the field
   */
  onFieldValueChanged?: <K extends FieldKey<Q>>(
    fieldKey: K,
    value: FieldValueType<Q, K>,
  ) => void;

  /**
   * Override to disable submit button
   * If not provided, button is disabled when form is submitting or has validation errors
   *
   * @default false
   */
  isSubmitDisabled?: boolean;

  /**
   * If supplied, this will override the default submit action
   * By default, the action's applyAction will be called with $validateOnly: false
   *
   * @param formState all field values when onSubmit is called
   * @param applyAction the function to execute the action. Call it with $validateOnly: true options to run validation mode onSubmit.
   * @returns a promise of the submission response
   */
  onSubmit?: <OP extends ApplyActionOptions>(
    formState: FormState<Q>,
    applyAction: (
      args: ActionParameters<Q>,
      options?: OP,
    ) => Promise<ActionReturnTypeForOptions<OP>>,
  ) => Promise<ActionReturnTypeForOptions<OP>> | void;

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
  onSuccess?: (results: ActionEditResponse) => void;

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
  [K in FieldKey<Q>]: FieldValueType<Q, K>;
};

/**
 * Form error discriminated union
 */
export type FormError =
  | { type: "validation"; error: ActionValidationError }
  | { type: "submission"; error: Error }
  | { type: "unknown"; error: unknown };
