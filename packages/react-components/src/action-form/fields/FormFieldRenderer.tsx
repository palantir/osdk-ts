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
import { coerceForRender } from "../utils/coerceForRender.js";
import { CustomField } from "./CustomField.js";
import { DateRangeInputField } from "./DateRangeInputField.js";
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
  onBlur: (e: React.FocusEvent<HTMLDivElement>) => void;
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

function renderFieldComponent(
  fieldDefinition: RendererFieldDefinition,
  value: unknown,
  onChange: (value: unknown) => void,
  error: string | undefined,
): React.ReactElement {
  switch (fieldDefinition.fieldComponent) {
    case "DATE_RANGE_INPUT":
      return (
        <DateRangeInputField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("DATE_RANGE_INPUT", value)}
          onChange={onChange}
          placeholderStart={fieldDefinition.placeholder}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "TEXT_INPUT":
      return (
        <TextInputField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("TEXT_INPUT", value)}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "TEXT_AREA":
      return (
        <TextAreaField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("TEXT_AREA", value)}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "DROPDOWN":
      return (
        <DropdownField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("DROPDOWN", value)}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "DATETIME_PICKER":
      return (
        <DatetimePickerField
          id={fieldDefinition.fieldKey}
          placeholder={fieldDefinition.placeholder}
          value={coerceForRender("DATETIME_PICKER", value)}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "RADIO_BUTTONS":
      return (
        <RadioButtonsField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("RADIO_BUTTONS", value)}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "CUSTOM":
      return (
        <CustomField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("CUSTOM", value)}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "NUMBER_INPUT":
      return (
        <NumberInputField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("NUMBER_INPUT", value)}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "FILE_PICKER":
      return (
        <FilePickerField
          id={fieldDefinition.fieldKey}
          value={coerceForRender("FILE_PICKER", value)}
          onChange={onChange}
          error={error}
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

function assertUnreachableFieldComponent(value: never): never {
  throw new Error(`Unhandled field component: ${String(value)}`);
}
