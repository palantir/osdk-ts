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
  ActionMetadata,
  ActionParam,
  CompileTimeMetadata,
  DataValueClientToWire,
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
   * Default value of the field
   */
  defaultValue?: FieldValueType<Q, K>;

  /**
   * The form field component type to render
   */
  fieldComponent: ValidFormFieldForPropertyType<FieldDescriptorType<Q, K>>;

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
  validate?: (value: FieldValueType<Q, K>) => Promise<boolean>;

  /**
   * The component props for the form field
   * Excludes runtime props (value, onChange) which are managed by ActionForm
   */
  fieldComponentProps: Omit<
    FormFieldPropsByType[
      ValidFormFieldForPropertyType<
        FieldDescriptorType<Q, K>
      >
    ],
    "value" | "onChange"
  >;
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
  DROPDOWN: DropdownFieldProps<unknown, boolean>;
  FILE_PICKER: FilePickerProps;
  NUMBER_INPUT: NumberInputFieldProps;
  OBJECT_SET: ObjectSetFieldProps<ObjectTypeDefinition>;
  RADIO_BUTTONS: RadioButtonsFieldProps<unknown>;
  TEXT_AREA: TextAreaFieldProps;
  TEXT_INPUT: TextInputFieldProps;
  CUSTOM: CustomFieldProps<unknown>;
}

/**
 * Datetime picker field props.
 *
 * When `formatDate` is omitted, ISO-like format is used (YYYY-MM-DD / YYYY-MM-DD HH:mm).
 */
export interface DatetimePickerFieldProps extends BaseFormFieldProps<Date> {
  /**
   * The earliest date the user can select.
   * If provided, this will be added to the field validation.
   */
  min?: Date;

  /**
   * The latest date the user can select.
   * If provided, this will be added to the field validation.
   */
  max?: Date;

  /**
   * Whether to show time picker.
   */
  showTime?: boolean;

  /**
   * Whether to close the popover after selecting a date.
   * @default true when `showTime` is false, false when `showTime` is true
   */
  closeOnSelection?: boolean;

  /**
   * Placeholder text shown when no value is selected.
   */
  placeholder?: string;

  /** Formats a Date for display in the trigger button. */
  formatDate?: (date: Date) => string;
}

/**
 * Dropdown field props with selectable items
 */
export interface DropdownFieldProps<V, Multiple extends boolean = false>
  extends BaseFormFieldProps<Multiple extends true ? V[] : V>
{
  /**
   * Available items for the dropdown
   */
  items: V[];

  /**
   * Converts an item to a display string. Defaults to `String()`.
   */
  itemToStringLabel?: (item: V) => string;

  /**
   * Returns a unique string key for a list item. Used as the React `key`.
   * Falls back to the item's index when not provided.
   */
  itemToKey?: (item: V) => string;

  /**
   * Custom equality check for item values. Defaults to `Object.is`.
   * Required when items are objects to ensure correct selection matching.
   */
  isItemEqual?: (a: V, b: V) => boolean;

  /**
   * Whether the dropdown allows searching/filtering.
   * When true, renders a Combobox with a search input.
   * When false (default), renders a Select dropdown.
   */
  isSearchable?: boolean;

  /**
   * Placeholder text shown when no value is selected.
   */
  placeholder?: string;

  /**
   * Whether multiple values can be selected
   */
  isMultiple?: Multiple;
}

export interface FilePickerProps extends BaseFormFieldProps<File | File[]> {
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
  placeholder?: string;
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
  placeholder?: string;
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
{}

/**
 * Radio buttons field props
 */
export interface RadioButtonsFieldProps<V> extends BaseFormFieldProps<V> {
  /**
   * Available options for radio buttons
   */
  options: Option<V>[];
}

/**
 * Option interface for radio button options
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
{}

/**
 * Custom field props for user-defined renderers
 */
export interface CustomFieldProps<V> extends BaseFormFieldProps<V> {
  /**
   * Custom renderer function
   */
  customRenderer: (props: BaseFormFieldProps<V>) => React.ReactNode;
}

export interface BaseFormFieldProps<V> {
  /**
   * The HTML `id` attribute for the field input element.
   * Used for `<label htmlFor>` association.
   */
  id?: string;

  /**
   * The value of the form field
   */
  value: V | null;
  /**
   * Called when the field value changes.
   *
   * ActionForm internally wraps this to pass the key to `onFieldValueChange`:
   * ```
   * <DropdownField
   *   {...fieldDef}
   *   onChange={(value) => onFieldValueChange(fieldDef.key, value)}
   * />
   * ```
   *
   * @param value The new value of the form field
   */
  onChange?: (value: V | null) => void;
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
 *
 * TODO: Re-use `BaseType`
 */
export type FieldValueType<
  Q extends ActionDefinition<unknown>,
  K extends keyof ActionParameters<Q> = keyof ActionParameters<Q>,
> = ActionParameters<Q>[K]["type"] extends
  ActionMetadata.DataType.Object<infer T> ? ActionParam.ObjectType<T>
  : ActionParameters<Q>[K]["type"] extends ActionMetadata.DataType.ObjectSet<
    infer T
  > ? ActionParam.ObjectSetType<T>
  : ActionParameters<Q>[K]["type"] extends ActionMetadata.DataType.Struct<
    infer T
  > ? ActionParam.StructType<T>
  : ActionParameters<Q>[K]["type"] extends keyof DataValueClientToWire
    ? DataValueClientToWire[ActionParameters<Q>[K]["type"]]
  : never;

/**
 * Extracts the parameter type descriptor for a specific action parameter.
 */
export type FieldDescriptorType<
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
 * Describes the data type of a form field, independent of OSDK.
 * Mirrors ActionMetadata.DataType to keep the rendering layer OSDK-agnostic.
 */
export type FieldType =
  | "boolean"
  | "string"
  | "integer"
  | "long"
  | "double"
  | "datetime"
  | "timestamp"
  | "attachment"
  | "marking"
  | "mediaReference"
  | "objectType"
  | "geoshape"
  | "geohash"
  | { type: "object"; object: string }
  | { type: "objectSet"; objectSet: string }
  | { type: "interface"; interface: string }
  | { type: "struct"; struct: Record<string, string> };

/**
 * An OSDK-agnostic field definition used by BaseForm and FormFieldRenderer.
 * Contains only the information needed to render a single field — no generics,
 * no compile-time parameter constraints.
 *
 * Implemented as a distributed mapped type: switching on `fieldComponent`
 * narrows `fieldComponentProps` to the correct props type automatically.
 */
export type RendererFieldDefinition = {
  [K in FieldComponent]: {
    fieldKey: string;
    fieldComponent: K;
    fieldType?: FieldType;
    label?: string;
    defaultValue?: unknown;
    isRequired?: boolean;
    placeholder?: string;
    helperText?: string;
    helperTextPlacement?: "bottom" | "tooltip";
    fieldComponentProps: Omit<FormFieldPropsByType[K], "value" | "onChange">;
  };
}[FieldComponent];

/**
 * Gets valid form field types for a given property type
 */
export type ValidFormFieldForPropertyType<P extends FieldDescriptorType> =
  P extends "objectSet" ? "OBJECT_SET"
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
