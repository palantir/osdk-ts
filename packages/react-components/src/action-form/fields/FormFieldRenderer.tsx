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

import React, { memo } from "react";
import { FormField } from "../FormField.js";
import type { RendererFieldDefinition } from "../FormFieldApi.js";
import { CustomField } from "./CustomField.js";
import { DatetimePickerField } from "./DatetimePickerField.js";
import { DropdownField } from "./DropdownField.js";
import { FilePickerField } from "./FilePickerField.js";
import { NumberInputField } from "./NumberInputField.js";
import { ObjectSetField } from "./ObjectSetField.js";
import { RadioButtonsField } from "./RadioButtonsField.js";
import { TextAreaField } from "./TextAreaField.js";
import { TextInputField } from "./TextInputField.js";

export interface FormFieldRendererProps {
  fieldDefinition: RendererFieldDefinition;
  value: unknown;
  onFieldValueChange: (value: unknown) => void;
  onBlur: () => void;
  error: string | undefined;
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = memo(
  function FormFieldRendererFn({
    fieldDefinition,
    value,
    onFieldValueChange,
    onBlur,
    error,
  }: FormFieldRendererProps): React.ReactElement {
    const { label, isRequired, helperText, helperTextPlacement } =
      fieldDefinition;

    return (
      <FormField
        label={label}
        isRequired={isRequired}
        fieldKey={fieldDefinition.fieldKey}
        helperText={helperTextPlacement !== "tooltip" ? helperText : undefined}
        error={error}
        onBlur={onBlur}
      >
        {renderFieldComponent(
          fieldDefinition,
          value,
          onFieldValueChange,
          error,
        )}
      </FormField>
    );
  },
);

/**
 * Common props shared by all field components. Spread this before
 * fieldComponentProps so every field automatically receives `error`
 * without needing to remember it per-case.
 */
interface FieldCommonProps {
  error: string | undefined;
}

function renderFieldComponent(
  fieldDefinition: RendererFieldDefinition,
  value: unknown,
  onChange: (value: unknown) => void,
  error: string | undefined,
): React.ReactElement {
  const common: FieldCommonProps = { error };

  switch (fieldDefinition.fieldComponent) {
    case "TEXT_INPUT":
      return (
        <TextInputField
          id={fieldDefinition.fieldKey}
          value={value != null ? String(value) : ""}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          {...common}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "TEXT_AREA":
      return (
        <TextAreaField
          id={fieldDefinition.fieldKey}
          value={value != null ? String(value) : ""}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          {...common}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "DROPDOWN": {
      return (
        <DropdownField
          value={value}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          {...common}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    }
    case "DATETIME_PICKER":
      return (
        <DatetimePickerField
          id={fieldDefinition.fieldKey}
          placeholder={fieldDefinition.placeholder}
          // TODO: Use coerceFieldValue
          value={value instanceof Date ? value : null}
          onChange={onChange}
          {...common}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "RADIO_BUTTONS":
      return (
        <RadioButtonsField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          {...common}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "CUSTOM":
      return (
        <CustomField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          {...common}
          {...fieldDefinition.fieldComponentProps}
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
          {...common}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "FILE_PICKER":
      return (
        <FilePickerField
          id={fieldDefinition.fieldKey}
          value={coerceToFileValue(value)}
          onChange={onChange}
          {...common}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "OBJECT_SET":
      return (
        <ObjectSetField
          id={fieldDefinition.fieldKey}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    default:
      return assertUnreachableFieldComponent(fieldDefinition);
  }
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

function assertUnreachableFieldComponent(value: never): never {
  throw new Error(`Unhandled field component: ${String(value)}`);
}
