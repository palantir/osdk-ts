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

import React from "react";
import type { RendererFieldDefinition } from "../FormFieldApi.js";
import { coerceFieldValue } from "../utils/coerceFieldValue.js";
import { TextInputField } from "./TextInputField.js";

export interface FormFieldRendererProps {
  fieldDefinition: RendererFieldDefinition;
  value: unknown;
  onFieldValueChange: (value: unknown) => void;
}

export function FormFieldRenderer({
  fieldDefinition,
  value,
  onFieldValueChange,
}: FormFieldRendererProps): React.ReactElement {
  const { label, isRequired, helperText, helperTextPlacement } =
    fieldDefinition;

  return (
    <div data-testid={`form-field-${fieldDefinition.fieldKey}`}>
      {label != null && (
        <label>
          {label}
          {isRequired === true && <span aria-label="required">*</span>}
        </label>
      )}
      {renderFieldComponent(
        fieldDefinition,
        value,
        onFieldValueChange,
      )}
      {helperText != null && helperTextPlacement !== "tooltip" && (
        <div data-testid="helper-text">{helperText}</div>
      )}
    </div>
  );
}

function renderFieldComponent(
  fieldDefinition: RendererFieldDefinition,
  value: unknown,
  onChange: (value: unknown) => void,
): React.ReactElement {
  const coerced = coerceFieldValue(fieldDefinition.fieldType, value);

  // TODO: Handle other field component types (DROPDOWN, NUMBER_INPUT, etc.)
  return (
    <TextInputField
      fieldComponent="TEXT_INPUT"
      value={coerced != null ? String(coerced) : ""}
      onChange={onChange}
      placeholder={fieldDefinition.placeholder}
      {...fieldDefinition.fieldComponentProps}
    />
  );
}
