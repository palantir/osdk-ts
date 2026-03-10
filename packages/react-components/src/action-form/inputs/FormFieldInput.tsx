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
import type { BaseFormFieldConfig } from "../BaseActionForm.js";
import { convertToFieldValue } from "../convertValue.js";
import { BooleanInput } from "./BooleanInput.js";
import { NumericInput } from "./NumericInput.js";
import { SelectInput } from "./SelectInput.js";
import { StringInput } from "./StringInput.js";
import { TextAreaInput } from "./TextAreaInput.js";

interface FormFieldInputProps {
  field: BaseFormFieldConfig;
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

  switch (field.type) {
    case "boolean":
      return (
        <BooleanInput
          value={convertToFieldValue(value, "boolean")}
          onChange={booleanOnChange}
        />
      );
    case "select":
      return (
        <SelectInput
          value={convertToFieldValue(value, "select")}
          onChange={stringOnChange}
          options={field.options ?? []}
          placeholder={field.placeholder}
        />
      );
    case "textarea":
      return (
        <TextAreaInput
          value={convertToFieldValue(value, "textarea")}
          onChange={stringOnChange}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
          className={className}
        />
      );
    case "integer":
    case "long":
    case "double":
    case "float":
    case "short":
    case "byte":
    case "decimal":
      return (
        <NumericInput
          value={convertToFieldValue(value, field.type)}
          onChange={numericOnChange}
          className={className}
        />
      );
    case "string":
    case "datetime":
    case "timestamp":
    case "attachment":
    case "marking":
    case "mediaReference":
    case "objectType":
    case "geoshape":
    case "geohash":
    case "object":
    case "objectSet":
    case "interface":
    case "struct":
      return (
        <StringInput
          value={convertToFieldValue(value, field.type)}
          onChange={stringOnChange}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
          className={className}
        />
      );
  }
}
