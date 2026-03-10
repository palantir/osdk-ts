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
import { BooleanInput } from "./BooleanInput.js";
import { NumericInput } from "./NumericInput.js";
import { SelectInput } from "./SelectInput.js";
import { StringInput } from "./StringInput.js";
import { TextAreaInput } from "./TextAreaInput.js";

const NUMERIC_TYPES = new Set([
  "integer",
  "long",
  "double",
  "float",
  "short",
  "byte",
  "decimal",
]);

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
  if (field.type === "boolean") {
    return (
      <BooleanInput
        value={value === true}
        onChange={onChange}
      />
    );
  }

  if (field.type === "select" && field.options != null) {
    return (
      <SelectInput
        value={value as string | undefined}
        onChange={onChange as (value: string) => void}
        options={field.options}
        placeholder={field.placeholder}
      />
    );
  }

  if (field.type === "textarea") {
    return (
      <TextAreaInput
        value={value as string ?? ""}
        onChange={onChange as (value: string) => void}
        isRequired={field.isRequired}
        placeholder={field.placeholder}
        className={className}
      />
    );
  }

  if (NUMERIC_TYPES.has(field.type)) {
    return (
      <NumericInput
        value={value as number | null ?? null}
        onChange={onChange}
        className={className}
      />
    );
  }

  // string, geohash, datetime, timestamp, and all other types fall back to text input
  return (
    <StringInput
      value={value as string ?? ""}
      onChange={onChange as (value: string) => void}
      isRequired={field.isRequired}
      placeholder={field.placeholder}
      className={className}
    />
  );
}
