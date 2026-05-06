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
  PortalContainer,
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
      BaseFormProps,
      "formTitle" | "isSubmitDisabled" | "portalContainer"
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
 * always requires `onFieldValueChange`, and uncontrolled mode omits both.
 * `onSubmit` receives the current form state so callers can access values
 * even in uncontrolled mode.
 */
export type BaseFormProps =
  & BaseFormCommonProps
  & (
    | {
      formState: Record<string, unknown>;
      onFieldValueChange: (fieldKey: string, value: unknown) => void;
    }
    | {
      formState?: undefined;
      onFieldValueChange?: (fieldKey: string, value: unknown) => void;
    }
  );

interface BaseFormCommonProps {
  /**
   * Title shown above the form. Pass `null` to hide the title.
   */
  formTitle?: string | null;
  formContent: ReadonlyArray<FormContentItem>;
  onSubmit: (formState: Record<string, unknown>) => Promise<void> | void;
  isSubmitDisabled?: boolean;
  isPending?: boolean;
  isLoading?: boolean;
  className?: string;
  /** Label for the submit button. Default `"Submit"`. */
  submitButtonText?: string;
  /** Visual variant of the submit button. Default `"primary"`. */
  submitButtonVariant?: "primary" | "secondary";
  /**
   * Element that receives popover/dropdown portals for fields rendered by this
   * form. Use this when rendering inside modal dialogs so popups stay in the
   * dialog's stacking and focus context.
   */
  portalContainer?: PortalContainer;
}
