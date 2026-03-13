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
import type { BaseFormFieldDefinition } from "../FormFieldApi.js";
import { BooleanInput } from "./BooleanInput.js";
import { NumericInput } from "./NumericInput.js";
import { SelectInput } from "./SelectInput.js";
import { StringInput } from "./StringInput.js";
import { TextAreaInput } from "./TextAreaInput.js";

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

  const fieldComponent = field.fieldComponent ?? "TEXT_INPUT";

  switch (fieldComponent) {
    case "RADIO_BUTTONS":
      return (
        <BooleanInput
          value={convertToFieldValue(value, "RADIO_BUTTONS")}
          onChange={booleanOnChange}
        />
      );
    case "DROPDOWN":
      return (
        <SelectInput
          value={convertToFieldValue(value, "DROPDOWN")}
          onChange={stringOnChange}
          options={[]}
          placeholder={field.placeholder}
        />
      );
    case "TEXT_AREA":
      return (
        <TextAreaInput
          value={convertToFieldValue(value, "TEXT_AREA")}
          onChange={stringOnChange}
          isRequired={field.isRequired === true}
          placeholder={field.placeholder}
          className={className}
        />
      );
    case "NUMBER_INPUT":
      return (
        <NumericInput
          value={convertToFieldValue(value, "NUMBER_INPUT")}
          onChange={numericOnChange}
          className={className}
        />
      );
    case "TEXT_INPUT":
    case "DATETIME_PICKER":
    case "OBJECT_SET":
    case "FILE_PICKER":
    case "CUSTOM":
      return (
        <StringInput
          value={convertToFieldValue(value, "TEXT_INPUT")}
          onChange={stringOnChange}
          isRequired={field.isRequired === true}
          placeholder={field.placeholder}
          className={className}
        />
      );
  }
}
