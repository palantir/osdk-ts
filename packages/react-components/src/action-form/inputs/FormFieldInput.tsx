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

import React from "react";
import { convertToFieldValue } from "../convertValue.js";
import type {
  BaseFormFieldDefinition,
  FormFieldPropsByType,
} from "../FormFieldApi.js";
import { BooleanInput } from "./BooleanInput.js";
import { DropdownInput } from "./DropdownInput.js";
import { NumberInput } from "./NumberInput.js";
import { TextAreaInput } from "./TextAreaInput.js";
import { TextInput } from "./TextInput.js";

function isFieldOfType<C extends keyof FormFieldPropsByType>(
  field: BaseFormFieldDefinition,
  component: C,
): field is BaseFormFieldDefinition<unknown, C> {
  return field.fieldComponent === component;
}

interface FormFieldInputProps {
  field: BaseFormFieldDefinition;
  value: unknown;
  onChange: (value: unknown) => void;
  className?: string;
}

export function FormFieldInput({
  field,
  value,
  onChange,
  className,
}: FormFieldInputProps): React.ReactElement {
  const stringOnChange = React.useCallback(
    (newValue: string) => {
      onChange(newValue);
    },
    [onChange],
  );

  const numericOnChange = React.useCallback(
    (newValue: number | null) => {
      onChange(newValue ?? undefined);
    },
    [onChange],
  );

  const booleanOnChange = React.useCallback(
    (newValue: boolean) => {
      onChange(newValue);
    },
    [onChange],
  );

  if (isFieldOfType(field, "RADIO_BUTTONS")) {
    return (
      <BooleanInput
        value={convertToFieldValue(value, "RADIO_BUTTONS")}
        onChange={booleanOnChange}
      />
    );
  } else if (isFieldOfType(field, "DROPDOWN")) {
    return (
      <DropdownInput
        value={convertToFieldValue(value, "DROPDOWN")}
        onChange={stringOnChange}
        options={field.fieldComponentProps?.options}
        placeholder={field.placeholder}
      />
    );
  } else if (isFieldOfType(field, "TEXT_AREA")) {
    return (
      <TextAreaInput
        value={convertToFieldValue(value, "TEXT_AREA")}
        onChange={stringOnChange}
        isRequired={field.isRequired === true}
        placeholder={field.placeholder}
        className={className}
        rows={field.fieldComponentProps?.rows}
        wrap={field.fieldComponentProps?.wrap}
        minLength={field.fieldComponentProps?.minLength}
        maxLength={field.fieldComponentProps?.maxLength}
      />
    );
  } else if (isFieldOfType(field, "NUMBER_INPUT")) {
    return (
      <NumberInput
        value={convertToFieldValue(value, "NUMBER_INPUT")}
        onChange={numericOnChange}
        className={className}
        min={field.fieldComponentProps?.min}
        max={field.fieldComponentProps?.max}
        step={field.fieldComponentProps?.step}
      />
    );
  } else if (isFieldOfType(field, "TEXT_INPUT")) {
    return (
      <TextInput
        value={convertToFieldValue(value, "TEXT_INPUT")}
        onChange={stringOnChange}
        isRequired={field.isRequired === true}
        placeholder={field.placeholder}
        className={className}
        minLength={field.fieldComponentProps?.minLength}
        maxLength={field.fieldComponentProps?.maxLength}
      />
    );
  } else {
    // DATETIME_PICKER, OBJECT_SET, FILE_PICKER, CUSTOM
    // TODO: Implement the correct components
    return (
      <TextInput
        value={convertToFieldValue(value, "TEXT_INPUT")}
        onChange={stringOnChange}
        isRequired={field.isRequired === true}
        placeholder={field.placeholder}
        className={className}
      />
    );
  }
}
