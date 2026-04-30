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

import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  CompileTimeMetadata,
  DataValueClientToWire,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
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
   */
  label: string;

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
   * A callback to customize error messages when a built-in validation rule fails.
   * Receives a discriminated union with the constraint data (e.g., the min value
   * that was exceeded) so the message can reference the threshold.
   *
   * Return a string to override the default message, or `undefined` to keep it.
   */
  onValidationError?: (error: ValidationError) => string | undefined;

  /**
   * Additional function to validate the field.
   *
   * Return `undefined` if valid, or an error message string if invalid.
   */
  validate?: (value: FieldValueType<Q, K>) => Promise<string | undefined>;

  /**
   * The component props for the form field.
   * Excludes runtime props (value, onChange) which are managed by ActionForm.
   */
  fieldComponentProps: Omit<
    FormFieldPropsByType[
      ValidFormFieldForPropertyType<
        FieldDescriptorType<Q, K>
      >
    ],
    FormManagedProps<
      ValidFormFieldForPropertyType<FieldDescriptorType<Q, K>>
    >
  >;
}

/**
 * A discriminated union describing which validation rule failed and the
 * constraint data the user needs to build a meaningful error message.
 */
export type ValidationError =
  | { type: "required" }
  | { type: "min"; min: number | Date }
  | { type: "max"; max: number | Date }
  | { type: "minLength"; minLength: number }
  | { type: "maxLength"; maxLength: number }
  | { type: "maxSize"; maxSize: number }
  | { type: "validate"; message: string };

/**
 * Maps field types to their corresponding props
 */
export interface FormFieldPropsByType {
  DATE_RANGE_INPUT: DateRangeInputFieldProps;
  DATETIME_PICKER: DatetimePickerFieldProps;
  DROPDOWN: DropdownFieldProps<unknown, boolean>;
  FILE_PICKER: FilePickerProps;
  NUMBER_INPUT: NumberInputFieldProps;
  OBJECT_SELECT: ObjectSelectFieldProps;
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

  /**
   * Formats a Date for display in the input field when not editing.
   * When typing, the input shows the parsable format (YYYY-MM-DD or YYYY-MM-DD HH:mm).
   * Provide a matching `parseDate` if using a custom format.
   */
  formatDate?: (date: Date) => string;

  /**
   * Parses a user-typed string back into a Date.
   * Must be the inverse of `formatDate` — if `formatDate(d)` produces string `s`,
   * then `parseDate(s)` must return an equivalent Date.
   * When omitted, defaults to parsing "YYYY-MM-DD" (date-only) or "YYYY-MM-DD HH:mm" (with time).
   */
  parseDate?: (text: string) => Date | undefined;

  /**
   * Ref forwarded to the portal container element.
   * Used to track portaled content for click-outside detection.
   */
  portalRef?: React.Ref<HTMLDivElement>;
}

/**
 * A date range represented as a start/end tuple.
 * Either element may be `null` when the range is partially selected.
 */
export type DateRange = readonly [Date | null, Date | null];

/** Default empty range — both bounds are null. */
export const EMPTY_RANGE: DateRange = [null, null];

/**
 * Date range input field props.
 *
 * Renders two text inputs (start / end) with a shared calendar popover
 * that supports range selection.
 */
export interface DateRangeInputFieldProps
  extends BaseFormFieldProps<DateRange>
{
  /** The earliest selectable date. */
  min?: Date;

  /** The latest selectable date. */
  max?: Date;

  /** Whether to show time pickers for both dates. */
  showTime?: boolean;

  /** Placeholder text for the start date input. */
  placeholderStart?: string;

  /** Placeholder text for the end date input. */
  placeholderEnd?: string;

  /** Whether to allow start and end on the same day. @default true */
  allowSingleDayRange?: boolean;

  /** Formats a Date for display. Defaults to "YYYY-MM-DD". */
  formatDate?: (date: Date) => string;

  /** Parses a user-typed string back into a Date. */
  parseDate?: (text: string) => Date | undefined;
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

  /**
   * Ref forwarded to the portal container element.
   * Used to track portaled content for click-outside detection.
   */
  portalRef?: React.Ref<HTMLDivElement>;

  /**
   * Controlled search input value. Must be provided together with `onQueryChange`.
   */
  query?: string;

  /**
   * Callback when the search input value changes. Must be provided together with `query`.
   */
  onQueryChange?: (query: string) => void;

  /**
   * When true, disables the combobox's built-in client-side filtering.
   * Use when items are already filtered server-side (e.g. via `onQueryChange`).
   */
  disableClientSideFiltering?: boolean;

  /**
   * Status message rendered below the search input and above the item list
   * inside the popup. Use for loading/error/empty messages.
   */
  popupStatus?: React.ReactNode;

  /**
   * A React node to render after the item list.
   * Use for infinite scroll sentinels, "load more" buttons, etc.
   */
  trailingItem?: React.ReactNode;
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

  /**
   * The text displayed when no file is selected.
   *
   * @default "No file chosen"
   */
  text?: string;

  /**
   * The text displayed on the browse button.
   *
   * @default "Browse"
   */
  buttonText?: string;
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
export interface NumberInputFieldProps extends BaseFormFieldProps<number> {
  /**
   * Minimum allowed value.
   */
  min?: number;

  /**
   * Maximum allowed value.
   */
  max?: number;

  /**
   * Step increment for the input. Used by the stepper buttons and ArrowUp/ArrowDown keyboard stepping.
   *
   * @default 1
   */
  step?: number;

  /**
   * Placeholder text shown when the input is empty.
   */
  placeholder?: string;
}

/**
 * Radio buttons field props
 */
export interface RadioButtonsFieldProps<V> extends BaseFormFieldProps<V> {
  /**
   * Available options for radio buttons.
   *
   * Values are compared by reference equality (`===`). When options contain
   * non-primitive values, pass the same object references for `value` and
   * the corresponding option entry.
   */
  options: Option<V>[];

  /**
   * Controls the layout direction of the radio buttons.
   *
   * - `"vertical"` (default): options are stacked in a column
   * - `"horizontal"`: options are laid out in a row, wrapping when needed
   */
  orientation?: "horizontal" | "vertical";
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
  extends Pick<BaseFormFieldProps<ObjectSet<T>>, "id" | "value">
{
  /**
   * Message displayed when no object set is provided.
   *
   * @default "Object set is not defined"
   */
  emptyMessage?: string;
}

/**
 * Object or interface select field props for selecting ontology instances.
 * Used for action parameters that accept a single object/interface or multiple.
 *
 * Extends DropdownFieldProps with props that ObjectSelectField
 * manages internally (items, search, filtering) omitted from the public surface.
 */
export interface ObjectSelectFieldProps extends
  Omit<
    DropdownFieldProps<Osdk.Instance<ObjectTypeDefinition>>,
    | "items"
    | "itemToStringLabel"
    | "itemToKey"
    | "isItemEqual"
    | "isSearchable"
    | "query"
    | "onQueryChange"
    | "disableClientSideFiltering"
    | "renderItemList"
  >
{
  /**
   * The API name of the object type to search within.
   * Resolved from the action parameter metadata (e.g. "Employee").
   */
  objectTypeApiName: string;
}

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
   * The validation error message for this field, if any.
   * When set, the field should display a visual error state.
   */
  error?: string;

  /**
   * The value of the form field
   */
  value: V | null;

  /**
   * The default value of the form field.
   */
  defaultValue?: V;

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
  | "DATE_RANGE_INPUT"
  | "DATETIME_PICKER"
  | "DROPDOWN"
  | "FILE_PICKER"
  | "NUMBER_INPUT"
  | "OBJECT_SELECT"
  | "OBJECT_SET"
  | "RADIO_BUTTONS"
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
 * Props managed by form state infrastructure (FieldBridge / RHF).
 * Fields with onChange participate in form state → value and onChange are managed
 * externally. Read-only fields (no onChange, e.g. ObjectSetField) keep value in
 * fieldComponentProps so it bypasses form state cloning.
 */
type FormManagedProps<K extends FieldComponent> = "onChange" extends
  keyof FormFieldPropsByType[K] ? "value" | "onChange"
  : "onChange";

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
    label: string;
    isRequired?: boolean;
    placeholder?: string;
    helperText?: string;
    helperTextPlacement?: "bottom" | "tooltip";
    validate?: (value: unknown) => Promise<string | undefined>;
    onValidationError?: (error: ValidationError) => string | undefined;
    fieldComponentProps: Omit<FormFieldPropsByType[K], FormManagedProps<K>>;
  };
}[FieldComponent];

/**
 * Gets valid form field types for a given property type
 */
export type ValidFormFieldForPropertyType<P extends FieldDescriptorType> =
  P extends { type: "objectSet" } ? "OBJECT_SET"
    : P extends { type: "object" } ? "OBJECT_SELECT"
    : P extends { type: "interface" } ? "OBJECT_SELECT"
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
