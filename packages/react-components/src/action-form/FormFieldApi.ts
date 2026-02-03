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
  CompileTimeMetadata,
  ObjectSet,
  ObjectTypeDefinition,
} from "@osdk/api";
import type React from "react";

/**
 * A form field definition specifies configuration for a single field
 */
export interface FormFieldDefinition<
  Q extends ActionDefinition<unknown>,
  K extends FieldKey<Q> = FieldKey<Q>,
  V extends FieldValueType<Q, K> = FieldValueType<Q, K>,
  C extends ValidFormFieldForPropertyType<V> = ValidFormFieldForPropertyType<V>,
> {
  /**
   * The field's unique key
   */
  fieldKey: K;

  /**
   * Display label for the field
   * If not provided, the form field will not show any label.
   */
  label?: string;

  /**
   * Current value of the field
   * If provided, the field operates in controlled mode
   */
  value?: V;

  /**
   * Default value of the field
   */
  defaultValue?: V;

  /**
   * The form field component type to render
   */
  fieldComponent: C;

  /**
   * Whether the field is required
   */
  isRequired?: boolean;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Additional information to display on this field
   * The placement of helper text depends on the value of helperTextPlacement prop
   */
  helperText?: string;

  /**
   * The placement of the helper text either below the field or in a tooltip
   *
   * @default "tooltip"
   */
  helperTextPlacement?: "bottom" | "tooltip";

  /**
   * Whether the field is disabled
   */
  isDisabled?: boolean;

  /**
   * A callback to return a custom error message if validation failed
   *
   * @param validationRule the validation rule that failed with the error message
   * @returns the error message to display
   */
  onValidationError?: (error: ValidationError) => string;

  /**
   * Additional function to validate the field
   *
   * @param value the current field value
   * @returns a boolean promise indicating whether the value is valid
   */
  validate?: (value: V) => Promise<boolean>;

  /**
   * The component props for the form field
   * Excludes runtime props (key, onChange) which are managed by ActionForm
   */
  fieldComponentProps?: Omit<FormFieldPropsByType[C], "key" | "onChange">;
}

type ValidationError = { type: ValidationRule; error: string };

type ValidationRule =
  | "required"
  | "min"
  | "max"
  | "minLength"
  | "maxLength"
  | "pattern"
  | "validate";

/**
 * Maps field types to their corresponding props
 */
export interface FormFieldPropsByType {
  DATETIME_PICKER: DatetimePickerFieldProps;
  DROPDOWN: DropdownFieldProps<unknown>;
  FILE_PICKER: FilePickerProps;
  NUMBER_INPUT: NumberInputFieldProps;
  OBJECT_SET: ObjectSetFieldProps<ObjectTypeDefinition>;
  RADIO_BUTTONS: RadioButtonsFieldProps<unknown>;
  TEXT_AREA: TextAreaFieldProps;
  TEXT_INPUT: TextInputFieldProps;
  CUSTOM: CustomFieldProps<unknown>;
}

/**
 * Datetime picker field props
 */
export interface DatetimePickerFieldProps extends BaseFormFieldProps<Date> {
  fieldComponent: "DATETIME_PICKER";

  /**
   * The earliest date the user can select
   * If provided, this will be added to the field validation
   */
  min?: Date;

  /**
   * The latest date the user can select
   * If provided, this will be added to the field validation
   */
  max?: Date;

  /**
   * Whether to show time picker
   */
  showTime?: boolean;

  /**
   * Function to format the date string
   */
  formatDate?: (date: Date) => string;
}

/**
 * Dropdown field props with selectable options
 */
export interface DropdownFieldProps<V, IsMulti extends boolean = false>
  extends BaseFormFieldProps<IsMulti extends true ? V[] : V>
{
  fieldComponent: "DROPDOWN";

  /**
   * Available options for the dropdown
   */
  options: Option<V>[];

  /**
   * Whether the dropdown allows searching/filtering
   */
  isSearchable?: boolean;

  /**
   * Whether multiple values can be selected
   */
  isMulti?: boolean;
}

export interface FilePickerProps extends BaseFormFieldProps<File | File[]> {
  fieldComponent: "FILE_PICKER";

  /**
   * Whether multiple files can be selected
   */
  isMulti?: boolean;

  /**
   * Accepted file types (e.g., "image/*", ".pdf")
   */
  accept?: string | string[];

  /**
   * Maximum file size in bytes
   */
  maxSize?: number;
}

/**
 * Text area field props
 */
export interface TextAreaFieldProps extends
  BaseFormFieldProps<string>,
  Pick<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "rows"
    | "wrap"
    /**
     * If provided, this will be added to the field validation
     */
    | "minLength"
    /**
     * If provided, this will be added to the field validation
     */
    | "maxLength"
  >
{
  fieldComponent: "TEXT_AREA";
}

export interface TextInputFieldProps extends
  BaseFormFieldProps<string>,
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    /**
     * If provided, this will be added to the field validation
     */
    | "minLength"
    /**
     * If provided, this will be added to the field validation
     */
    | "maxLength"
  >
{
  fieldComponent: "TEXT_INPUT";
}

/**
 * Number input field props
 */
export interface NumberInputFieldProps extends
  BaseFormFieldProps<number>,
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    /**
     * If provided, this will be added to the field validation
     */
    | "min"
    /**
     * If provided, this will be added to the field validation
     */
    | "max"
    | "step"
  >
{
  fieldComponent: "NUMBER_INPUT";
}

/**
 * Radio buttons field props
 */
export interface RadioButtonsFieldProps<V> extends BaseFormFieldProps<V> {
  fieldComponent: "RADIO_BUTTONS";

  /**
   * Available options for radio buttons
   */
  options: Option<V>[];
}

/**
 * Option interface for dropdown and radio options
 */
export interface Option<V> {
  label: string;
  value: V;
}

/**
 * Object set field displays the summary of the count of the given object set
 */
export interface ObjectSetFieldProps<T extends ObjectTypeDefinition>
  extends BaseFormFieldProps<ObjectSet<T>>
{
  fieldComponent: "OBJECT_SET";
}

/**
 * Custom field props for user-defined renderers
 */
export interface CustomFieldProps<V> extends BaseFormFieldProps<V> {
  fieldComponent: "CUSTOM";

  /**
   * Custom renderer function
   */
  customRenderer: (props: BaseFormFieldProps<V>) => React.ReactNode;
}

export interface BaseFormFieldProps<V> {
  fieldComponent: FieldComponent;

  /**
   * Called when the field value changed.
   *
   * ActionForm internally wraps this to pass the key to onFieldValueChanged:
   * ```
   * <DropdownField
   *   {...fieldDef}
   *   onChange={(value) => onFieldValueChanged(fieldDef.key, value)}
   * />
   * ```
   *
   * @param value The new value of the form field
   */
  onChange?: (value?: V) => void;
}

export type FieldKey<Q extends ActionDefinition<unknown>> =
  keyof ActionParameters<Q>;

/**
 * Extracts parameters from an ActionDefinition
 */
export type ActionParameters<Q extends ActionDefinition<unknown>> =
  CompileTimeMetadata<Q>["parameters"];

/**
 * Extracts the value type for a specific parameter
 */
export type FieldValueType<
  Q extends ActionDefinition<unknown> = ActionDefinition<unknown>,
  K extends keyof ActionParameters<Q> = keyof ActionParameters<Q>,
> = ActionParameters<Q>[K]["type"];

/**
 * Available form field component types
 */
export type FieldComponent =
  | "DATETIME_PICKER"
  | "DROPDOWN"
  | "FILE_PICKER"
  | "NUMBER_INPUT"
  | "RADIO_BUTTONS"
  | "OBJECT_SET"
  | "TEXT_AREA"
  | "TEXT_INPUT"
  | "CUSTOM";

/**
 * Gets valid form field types for a given property type
 */
export type ValidFormFieldForPropertyType<P extends FieldValueType> = P extends
  "objectSet" ? "OBJECT_SET"
  : P extends "object" ? "DROPDOWN"
  : P extends "mediaReference" | "attachment" ? "FILE_PICKER"
  : P extends "boolean" ? "RADIO_BUTTONS" | "DROPDOWN"
  : P extends "string" ? "TEXT_INPUT" | "TEXT_AREA"
  : P extends "datetime" | "timestamp" ? "DATETIME_PICKER"
  : P extends
    | "double"
    | "integer"
    | "long"
    | "float"
    | "short"
    | "byte"
    | "decimal" ? "NUMBER_INPUT"
  : never;
