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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import React, { memo } from "react";

import {
  DatePicker,
  type DateRange,
  DateRangePicker,
  EMPTY_RANGE,
} from "../../shared/calendar/index.js";
import { FormField } from "../FormField.js";
import {
  type PortalContainer,
  type RendererFieldDefinition,
} from "../FormFieldApi.js";
import { CustomField } from "./CustomField.js";
import { DropdownField } from "./DropdownField.js";
import { FilePickerField } from "./FilePickerField.js";
import { NumberInputField } from "./NumberInputField.js";
import { ObjectSelectField } from "./ObjectSelectField.js";
import { ObjectSetField } from "./ObjectSetField.js";
import { RadioButtonsField } from "./RadioButtonsField.js";
import { SwitchField } from "./SwitchField.js";
import { TextAreaField } from "./TextAreaField.js";
import { TextInputField } from "./TextInputField.js";

const UNSUPPORTED_FIELD_MESSAGE =
  "Unsupported field type. Use a CUSTOM field instead";

export interface FormFieldRendererProps {
  fieldDefinition: RendererFieldDefinition;
  value: unknown;
  onFieldValueChange: (value: unknown) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /** Field-level blur for fields that own their touched state (e.g. dropdowns). */
  onFieldBlur?: () => void;
  isEdited: boolean;
  error: string | undefined;
  portalContainer?: PortalContainer;
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = memo(
  function FormFieldRendererFn({
    fieldDefinition,
    value,
    onFieldValueChange,
    onBlur,
    onFieldBlur,
    isEdited,
    error,
    portalContainer,
  }: FormFieldRendererProps): React.ReactElement {
    const { label, isRequired, helperText, helperTextPlacement } =
      fieldDefinition;

    return (
      <FormField
        label={label}
        isRequired={isRequired}
        fieldKey={fieldDefinition.fieldKey}
        helperText={helperText}
        helperTextPlacement={helperTextPlacement}
        isEdited={isEdited}
        error={error}
        onBlur={onBlur}
      >
        {renderFieldComponent(
          fieldDefinition,
          value,
          onFieldValueChange,
          error,
          portalContainer,
          onFieldBlur
        )}
      </FormField>
    );
  }
);

function renderFieldComponent(
  fieldDefinition: RendererFieldDefinition,
  value: unknown,
  onChange: (value: unknown) => void,
  error: string | undefined,
  portalContainer: PortalContainer | undefined,
  onFieldBlur: (() => void) | undefined
): React.ReactElement {
  const disabled = fieldDefinition.disabled === true;
  switch (fieldDefinition.fieldComponent) {
    case "DATE_RANGE_INPUT":
      return (
        <DateRangePicker
          id={fieldDefinition.fieldKey}
          value={coerceToDateRange(value)}
          onChange={onChange}
          placeholderStart={fieldDefinition.placeholder}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer
          )}
        />
      );
    case "TEXT_INPUT":
      return (
        <TextInputField
          id={fieldDefinition.fieldKey}
          value={value != null ? String(value) : ""}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "UNSUPPORTED":
      return (
        <TextInputField
          {...fieldDefinition.fieldComponentProps}
          id={fieldDefinition.fieldKey}
          value={UNSUPPORTED_FIELD_MESSAGE}
          error={error}
          disabled={true}
        />
      );
    case "TEXT_AREA":
      return (
        <TextAreaField
          id={fieldDefinition.fieldKey}
          value={value != null ? String(value) : ""}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "DROPDOWN": {
      return (
        <DropdownField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer
          )}
          onBlur={onFieldBlur}
        />
      );
    }
    case "DATETIME_PICKER":
      return (
        <DatePicker
          id={fieldDefinition.fieldKey}
          placeholder={fieldDefinition.placeholder}
          // TODO: Use coerceFieldValue
          value={value instanceof Date ? value : null}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer
          )}
        />
      );
    case "RADIO_BUTTONS":
      return (
        <RadioButtonsField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "SWITCH":
      return (
        <SwitchField
          id={fieldDefinition.fieldKey}
          label={fieldDefinition.label}
          value={!!value}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "CUSTOM":
      return (
        <CustomField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "NUMBER_INPUT":
      // TODO: Use coerceFieldValue
      return (
        <NumberInputField
          id={fieldDefinition.fieldKey}
          value={typeof value === "number" ? value : null}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "FILE_PICKER":
      return (
        <FilePickerField
          id={fieldDefinition.fieldKey}
          value={coerceToFileValue(value)}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "OBJECT_SELECT":
      return (
        <ObjectSelectField
          id={fieldDefinition.fieldKey}
          value={narrowToOsdkObject(value)}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer
          )}
        />
      );
    case "OBJECT_SET":
      return (
        <ObjectSetField
          id={fieldDefinition.fieldKey}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    default:
      return assertUnreachableFieldComponent(fieldDefinition);
  }
}

function resolvePortalContainer(
  fieldComponentProps: { portalContainer?: PortalContainer },
  formPortalContainer: PortalContainer | undefined
): PortalContainer | undefined {
  // A field-level value, including null, is an explicit override. That lets a
  // single field opt out of a form-level dialog portal when needed.
  return Object.hasOwn(fieldComponentProps, "portalContainer")
    ? fieldComponentProps.portalContainer
    : formPortalContainer;
}

function coerceToDateRange(value: unknown): DateRange {
  if (!Array.isArray(value) || value.length !== 2) return EMPTY_RANGE;
  const start = value[0] instanceof Date ? value[0] : null;
  const end = value[1] instanceof Date ? value[1] : null;
  if (start == null && end == null) return EMPTY_RANGE;
  return [start, end];
}

// TODO: Move and share with `coerceFieldValue`
function isFileArray(value: unknown[]): value is File[] {
  return value.every((v) => v instanceof File);
}

function coerceToFileValue(value: unknown): File | File[] | null {
  if (value instanceof File) {
    return value;
  }
  if (Array.isArray(value) && isFileArray(value)) {
    return value;
  }
  return null;
}

/** Narrows the untyped form value to an OsdkObject by checking for $primaryKey. */
function narrowToOsdkObject(
  value: unknown
): Osdk.Instance<ObjectTypeDefinition> | null {
  if (value != null && typeof value === "object" && "$primaryKey" in value) {
    return value as Osdk.Instance<ObjectTypeDefinition>;
  }
  return null;
}

function assertUnreachableFieldComponent(value: never): never {
  throw new Error(`Unhandled field component: ${String(value)}`);
}
