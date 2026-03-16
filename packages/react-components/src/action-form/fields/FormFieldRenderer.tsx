/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionDefinition } from "@osdk/api";
import React from "react";
import type { FieldComponent, FormFieldDefinition } from "../FormFieldApi.js";
import { TextInputField } from "./TextInputField.js";

export interface FormFieldRendererProps<
  Q extends ActionDefinition<unknown>,
> {
  fieldDefinition: FormFieldDefinition<Q>;
  value: unknown;
  onFieldValueChange: (value: unknown) => void;
}

export function FormFieldRenderer<Q extends ActionDefinition<unknown>>({
  fieldDefinition,
  value,
  onFieldValueChange,
}: FormFieldRendererProps<Q>): React.ReactElement {
  const { fieldComponent, label, isRequired, helperText, helperTextPlacement } =
    fieldDefinition;

  return (
    <div data-testid={`form-field-${String(fieldDefinition.fieldKey)}`}>
      {label != null && (
        <label>
          {label}
          {isRequired === true && <span aria-label="required">*</span>}
        </label>
      )}
      {renderFieldComponent(
        fieldComponent,
        value,
        onFieldValueChange,
        fieldDefinition,
      )}
      {helperText != null && helperTextPlacement !== "tooltip" && (
        <div data-testid="helper-text">{helperText}</div>
      )}
    </div>
  );
}

function renderFieldComponent<Q extends ActionDefinition<unknown>>(
  fieldComponent: FieldComponent,
  value: unknown,
  onChange: (value: unknown) => void,
  fieldDefinition: FormFieldDefinition<Q>,
): React.ReactElement {
  const componentProps = fieldDefinition.fieldComponentProps ?? {};

  switch (fieldComponent) {
    case "TEXT_INPUT":
    default:
      return (
        <TextInputField
          fieldComponent="TEXT_INPUT"
          value={value != null ? String(value) : undefined}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          {...componentProps}
        />
      );
  }
}
