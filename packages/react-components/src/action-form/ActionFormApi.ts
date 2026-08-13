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

import type {
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
      /**
       * The current form values.
       * If provided, the form state is controlled.
       */
      formState: FormState<Q>;
      /**
       * Called when a field value changes, with a state updater.
       * Required when the form state is controlled; also fires in
       * uncontrolled mode so callers can observe changes.
       */
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
    Pick<BaseFormProps, "formTitle" | "isSubmitDisabled">,
    Partial<BaseFormLabels> {
  /**
   * The OSDK action definition. Its parameters drive the rendered fields
   * and the submission.
   */
  actionDefinition: Q;

  /**
   * Whether to show the form title.
   *
   * @default false
   */
  showFormTitle?: boolean;

  /**
   * If not supplied, field definitions are constructed from action metadata.
   */
  formFieldDefinitions?: ReadonlyArray<FormFieldDefinition<Q>>;

  /**
   * If supplied, this will override the default submit action.
   * By default, the action's applyAction will be called.
   *
   * @param formState all field values when onSubmit is called
   * @param applyAction the function to execute the action
   * @returns a promise of the submission response
   */
  onSubmit?: (
    formState: FormState<Q>,
    applyAction: (
      formState: FormState<Q>,
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
   * Called when action metadata fails to load or form submission fails.
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
  | { type: "submission"; error: unknown }
  | { type: "unknown"; error: unknown };

/**
 * A single item in the form content array — either a standalone field
 * or a section that groups multiple fields.
 */
export type FormContentItem =
  | { type: "field"; definition: RendererFieldDefinition }
  | { type: "section"; key: string; definition: FormSectionDefinition };

/**
 * Configuration for a form section — a visual group of fields with
 * optional title bar, collapse behavior, and multi-column layout.
 */
export interface FormSectionDefinition {
  title: string;
  description?: string;
  fields: ReadonlyArray<RendererFieldDefinition>;
  /** Whether the section starts collapsed. Default `false`. */
  collapsedByDefault?: boolean;
  /** Whether to show the title bar. Default `true`. */
  showTitleBar?: boolean;
  /** Number of columns for fields. Default `1`. */
  columnCount?: 1 | 2;
  /** Visual style. `"box"` = bordered card, `"minimal"` = heading only. Default `"box"`. */
  style?: "box" | "minimal";
}

/**
 * Props for the `BaseForm` component, which renders a form without
 * OSDK data fetching.
 *
 * Uses a discriminated union so that controlled mode (`formState` provided)
 * always requires `onFieldValueChange`; uncontrolled mode omits `formState`
 * (`onFieldValueChange` stays optional).
 * `onSubmit` receives the current form state so callers can access values
 * even in uncontrolled mode.
 */
export type BaseFormProps = BaseFormCommonProps &
  (
    | {
        /**
         * The current field values keyed by field key.
         * If provided, the form state is controlled.
         */
        formState: Record<string, unknown>;
        /**
         * Called when a field value changes.
         * Required when the form state is controlled; also fires in
         * uncontrolled mode so callers can observe changes.
         */
        onFieldValueChange: (fieldKey: string, value: unknown) => void;
      }
    | {
        formState?: undefined;
        onFieldValueChange?: (fieldKey: string, value: unknown) => void;
      }
  );

/** User-facing strings rendered directly by BaseForm. */
export interface BaseFormLabels {
  /** Label for the submit button. Default `"Submit"`. */
  submitButtonText: string;
  /** Label for the submit button while submitting. Default `"Submitting…"`. */
  submittingText: string;
}

export const DEFAULT_BASE_FORM_LABELS: BaseFormLabels = {
  submitButtonText: "Submit",
  submittingText: "Submitting…",
};

interface BaseFormCommonProps extends Partial<BaseFormLabels> {
  /** Title shown in the form header. Omit to hide the header. */
  formTitle?: string;
  /** The fields and sections to render, in order. */
  formContent: ReadonlyArray<FormContentItem>;
  /** Called when the form is submitted with valid values. Receives the current form state. */
  onSubmit: (formState: Record<string, unknown>) => Promise<void> | void;
  /** Whether the submit button is disabled. Default `false`. */
  isSubmitDisabled?: boolean;
  /** Whether a submission is in progress. Shows the submit button in a pending state. Default `false`. */
  isPending?: boolean;
  /** Whether the form is loading its fields. Shows a skeleton placeholder. Default `false`. */
  isLoading?: boolean;
  /** Additional CSS class name for the root element. */
  className?: string;
  /** Visual variant of the submit button. Default `"primary"`. */
  submitButtonVariant?: "primary" | "secondary";
}
