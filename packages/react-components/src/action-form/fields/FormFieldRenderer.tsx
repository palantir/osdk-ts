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
import type { Option, RendererFieldDefinition } from "../FormFieldApi.js";
import { DatetimePickerField } from "./DatetimePickerField.js";
import { DropdownField } from "./DropdownField.js";
import { NumberInputField } from "./NumberInputField.js";
import { RadioButtonsField } from "./RadioButtonsField.js";
import { TextAreaField } from "./TextAreaField.js";
import { TextInputField } from "./TextInputField.js";

const EMPTY_ITEMS: unknown[] = [];
const EMPTY_OPTIONS: Option<never>[] = [];

export interface FormFieldRendererProps {
  fieldDefinition: RendererFieldDefinition;
  value: unknown;
  onFieldValueChange: (value: unknown) => void;
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = memo(
  function FormFieldRendererFn({
    fieldDefinition,
    value,
    onFieldValueChange,
  }: FormFieldRendererProps): React.ReactElement {
    const { label, isRequired, helperText, helperTextPlacement } =
      fieldDefinition;

    return (
      <FormField
        label={label}
        isRequired={isRequired}
        fieldKey={fieldDefinition.fieldKey}
        helperText={helperTextPlacement !== "tooltip" ? helperText : undefined}
      >
        {renderFieldComponent(fieldDefinition, value, onFieldValueChange)}
      </FormField>
    );
  },
);

function renderFieldComponent(
  fieldDefinition: RendererFieldDefinition,
  value: unknown,
  onChange: (value: unknown) => void,
): React.ReactElement {
  switch (fieldDefinition.fieldComponent) {
    case "TEXT_INPUT":
      return (
        <TextInputField
          id={fieldDefinition.fieldKey}
          value={value != null ? String(value) : ""}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
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
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "DROPDOWN": {
      const { items = EMPTY_ITEMS, ...dropdownProps } =
        fieldDefinition.fieldComponentProps ?? {};
      return (
        <DropdownField
          value={value}
          onChange={onChange}
          items={items}
          placeholder={fieldDefinition.placeholder}
          {...dropdownProps}
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
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "RADIO_BUTTONS": {
      const { options = EMPTY_OPTIONS, ...radioProps } =
        fieldDefinition.fieldComponentProps ?? {};
      return (
        <RadioButtonsField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          options={options}
          {...radioProps}
        />
      );
    }
    case "NUMBER_INPUT":
      // TODO: Use coerceFieldValue
      return (
        <NumberInputField
          id={fieldDefinition.fieldKey}
          value={typeof value === "number" ? value : null}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "FILE_PICKER":
    case "OBJECT_SET":
    case "CUSTOM":
      return <div>Unsupported field type: {fieldDefinition.fieldComponent}
      </div>;
    default:
      return assertUnreachableFieldComponent(fieldDefinition);
  }
}

function assertUnreachableFieldComponent(value: never): never {
  throw new Error(`Unhandled field component: ${String(value)}`);
}
