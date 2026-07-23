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

import type {
  DatePickerProps,
  DateRangePickerProps,
} from "../shared/calendar/index.js";
import type { PortalContainer } from "../shared/PortalDismissLayer.js";

export type { PortalContainer };

/**
 * A form field definition specifies configuration for a single field.
 * Implemented as a distributed mapped type so `fieldComponent` narrows
 * `fieldComponentProps` to the matching component prop type.
 */
export type FormFieldDefinition<
  Q extends ActionDefinition<unknown>,
  K extends FieldKey<Q> = FieldKey<Q>,
> = K extends unknown
  ? {
      // Distribute over each field key so a field's key, value type, and allowed
      // components stay correlated when K is the default union of all keys.
      [C in ValidFormFieldForPropertyType<FieldDescriptorType<Q, K>>]: {
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
         * Whether the field is required
         */
        isRequired?: boolean;

        /**
         * Placeholder text
         */
        placeholder?: string;

        /**
         * Additional information to display on this field.
         * Accepts plain text or rich content (e.g. JSX with links or formatting).
         * Rendered as a tooltip icon next to the label by default, or below the
         * label when helperTextPlacement is "bottom".
         */
        helperText?: React.ReactNode;

        /**
         * The placement of the helper text either below the field or in a tooltip
         *
         * @default "tooltip"
         */
        helperTextPlacement?: "bottom" | "tooltip";

        /**
         * Whether the field is disabled
         */
        disabled?: boolean;

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
         * The form field component type to render
         */
        fieldComponent: C;

        /**
         * The component props for the form field.
         * Excludes runtime props (value, onChange) which are managed by ActionForm.
         */
        fieldComponentProps: DistributiveOmit<
          FormFieldPropsByType[C],
          FormManagedProps<C>
        >;
      };
    }[ValidFormFieldForPropertyType<FieldDescriptorType<Q, K>>]
  : never;

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
  DATE_RANGE_INPUT: DateRangePickerProps;
  DATETIME_PICKER: DatePickerProps;
  DROPDOWN: DropdownFieldProps<unknown, boolean>;
  FILE_PICKER: FilePickerProps;
  NUMBER_INPUT: NumberInputFieldProps;
  OBJECT_SELECT: ObjectSelectFieldProps<ObjectTypeDefinition>;
  OBJECT_SET: ObjectSetFieldProps<ObjectTypeDefinition>;
  RADIO_BUTTONS: RadioButtonsFieldProps<unknown>;
  SWITCH: SwitchFieldProps;
  TEXT_AREA: TextAreaFieldProps;
  TEXT_INPUT: TextInputFieldProps;
  CUSTOM: CustomFieldProps<unknown>;
  UNSUPPORTED: UnsupportedFieldProps;
}

/**
 * Dropdown field props with selectable items
 */
export interface DropdownFieldProps<
  V,
  Multiple extends boolean = false,
> extends BaseFormFieldProps<Multiple extends true ? V[] : V> {
  /**
   * Available items for the dropdown
   */
  items: V[];

  /**
   * Converts an item to searchable text and the default visual label. Defaults to `String()`.
   * Use `renderItemLabel` when the visible label needs rich React content.
   */
  itemToStringLabel?: (item: V) => string;

  /**
   * Renders an item label with custom React content.
   * `itemToStringLabel` is still used for search, accessibility, and fallback keys.
   */
  renderItemLabel?: (item: V) => React.ReactNode;

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
   * Element that receives the dropdown portal. Use this when rendering inside
   * modal dialogs so popups stay in the dialog's stacking and focus context
   * instead of being appended directly to document.body.
   */
  portalContainer?: PortalContainer;

  /**
   * Controlled search input value. Must be provided together with `onQueryChange`.
   */
  query?: string;

  /**
   * Callback when the search input value changes.
   * Can be used standalone as an event listener or together with `query`
   * for fully controlled search state.
   */
  onQueryChange?: (query: string) => void;

  /**
   * When true, disables the combobox's built-in client-side filtering.
   * Use when items are already filtered server-side (e.g. via `onQueryChange`).
   *
   * @default false
   */
  disableClientSideFiltering?: boolean;

  /**
   * If provided, allows new items to be created from the current search query.
   * When the trimmed query is non-empty and matches no existing item, a
   * "create" option is offered; selecting it — by click or by pressing Enter
   * while it is highlighted — commits the value returned here through
   * `onChange`.
   *
   * Coerce/convert the raw query into an item value here (e.g. via
   * `coerceFieldValue`). Return `undefined` to reject the query, in which case
   * no create option is shown.
   *
   * Providing this callback implies a searchable dropdown. Works for both
   * single-select and multi-select — multi-select behaves like a creatable tag
   * input, appending each created value to the selection.
   */
  createNewItemFromQuery?: (query: string) => V | undefined;

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

  /**
   * Whether the dropdown locks page scroll and renders a full-viewport
   * dismiss layer when open. Set to `false` when the dropdown is not
   * inside a `<label>` to allow normal page scrolling.
   *
   * @default true
   */
  modal?: boolean;
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
export interface TextAreaFieldProps
  extends
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
    > {
  placeholder?: string;
}

export interface TextInputFieldProps
  extends
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
    > {
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
 * Switch field props for boolean values.
 */
export type SwitchFieldProps = BaseFormFieldProps<boolean>;

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
export interface ObjectSetFieldProps<
  T extends ObjectTypeDefinition,
> extends Pick<BaseFormFieldProps<ObjectSet<T>>, "id" | "value" | "disabled"> {
  /**
   * Message displayed when no object set is provided.
   *
   * @default "Object set is not defined"
   */
  emptyMessage?: string;
}

type ObjectSelectDataSource<Q extends ObjectTypeDefinition> =
  | {
      /**
       * The object type definition to search across.
       */
      objectType: Q;
      objectSet?: never;
    }
  | {
      /**
       * A pre-scoped object set to search within.
       *
       * Use this when selectable options should be limited to a subset of
       * objects. User-entered search text is applied within this set.
       */
      objectSet: ObjectSet<Q>;
      objectType?: never;
    };

/**
 * Object select field props for selecting object instances from the ontology.
 * Used for action parameters that accept a single object or multiple objects.
 *
 * Extends DropdownFieldProps with props that ObjectSelectField
 * manages internally (items, search, filtering) omitted from the public surface.
 */
export type ObjectSelectFieldProps<
  Q extends ObjectTypeDefinition = ObjectTypeDefinition,
> = Omit<
  DropdownFieldProps<Osdk.Instance<Q>>,
  | "items"
  | "itemToStringLabel"
  | "itemToKey"
  | "isItemEqual"
  | "isSearchable"
  | "query"
  | "onQueryChange"
  | "disableClientSideFiltering"
  | "renderItemList"
  | "createNewItemFromQuery"
> &
  ObjectSelectDataSource<Q>;

/**
 * Custom field props for user-defined renderers
 */
export interface CustomFieldProps<V> extends BaseFormFieldProps<V> {
  /**
   * Custom renderer function
   */
  customRenderer: (props: BaseFormFieldProps<V>) => React.ReactNode;
}

export interface UnsupportedFieldProps extends Pick<
  BaseFormFieldProps<string>,
  "id" | "error"
> {}

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
   * Whether the field is disabled.
   *
   * Disabled fields keep their current value in form state and submit payloads,
   * but built-in renderers block user edits and remove disabled controls from
   * keyboard navigation.
   */
  disabled?: boolean;

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
 */
export type FieldValueType<
  Q extends ActionDefinition<unknown>,
  K extends keyof ActionParameters<Q> = keyof ActionParameters<Q>,
> =
  ActionParameters<Q>[K]["type"] extends ActionMetadata.DataType.Object<infer T>
    ? ActionParam.ObjectType<T>
    : ActionParameters<Q>[K]["type"] extends ActionMetadata.DataType.ObjectSet<
          infer T
        >
      ? ActionParam.ObjectSetType<T>
      : ActionParameters<Q>[K]["type"] extends ActionMetadata.DataType.Interface<
            infer T
          >
        ? ActionParam.InterfaceType<T>
        : ActionParameters<Q>[K]["type"] extends ActionMetadata.DataType.Struct<
              infer T
            >
          ? ActionParam.StructType<T>
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
  | "SWITCH"
  | "TEXT_AREA"
  | "TEXT_INPUT"
  | "CUSTOM"
  | "UNSUPPORTED";

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
  | "scenarioReference"
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
type FormManagedProps<K extends FieldComponent> =
  "onChange" extends keyof FormFieldPropsByType[K]
    ? "value" | "onChange" | "disabled"
    : "onChange" | "disabled";

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, Extract<keyof T, K>>
  : never;

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
    helperText?: React.ReactNode;
    helperTextPlacement?: "bottom" | "tooltip";
    disabled?: boolean;
    validate?: (value: unknown) => Promise<string | undefined>;
    onValidationError?: (error: ValidationError) => string | undefined;
    fieldComponentProps: DistributiveOmit<
      FormFieldPropsByType[K],
      FormManagedProps<K>
    >;
  };
}[FieldComponent];

/**
 * Gets valid form field types for a given property type
 */
export type ValidFormFieldForPropertyType<P extends FieldDescriptorType> =
  | "CUSTOM"
  | (P extends { type: "objectSet" }
      ? "OBJECT_SET"
      : P extends { type: "object" }
        ? "OBJECT_SELECT"
        : P extends { type: "interface" }
          ? "UNSUPPORTED"
          : P extends { type: "struct" }
            ? "UNSUPPORTED"
            : P extends "mediaReference" | "attachment"
              ? "FILE_PICKER"
              : P extends "boolean"
                ? "RADIO_BUTTONS" | "DROPDOWN" | "SWITCH"
                : P extends "string"
                  ? "TEXT_INPUT" | "TEXT_AREA"
                  : P extends "datetime" | "timestamp"
                    ? "DATETIME_PICKER"
                    : P extends
                          | "marking"
                          | "geohash"
                          | "geoshape"
                          | "objectType"
                      ? "UNSUPPORTED"
                      : P extends
                            | "double"
                            | "integer"
                            | "long"
                            | "float"
                            | "short"
                            | "byte"
                            | "decimal"
                        ? "NUMBER_INPUT"
                        : never);
