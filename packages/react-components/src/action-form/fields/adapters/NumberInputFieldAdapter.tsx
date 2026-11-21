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

import React, { useCallback } from "react";

import type { FieldType } from "../../FormFieldApi.js";
import { NumberInputField } from "../NumberInputField.js";
import type { FieldAdapterProps } from "./FieldAdapterProps.js";
import type { FieldValueConverter } from "./FieldValueConverter.js";

export function NumberInputFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldAdapterProps<"NUMBER_INPUT">): React.ReactElement {
  const converter = getNumberConverter(fieldDefinition.fieldType);
  const fieldValue = converter.toFieldValue(value);
  const { onBlur, ...otherProps } = fieldDefinition.fieldComponentProps;
  // Defer integer/long truncation until blur so fractional values remain editable.
  // For example, keep 3.7 while typing, then store and display 3 on blur (-3.7 becomes -3).
  // Convert before the event bubbles to the form's blur validation.
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      onBlur?.(event);
      // Parse only when focus leaves the input and stepper controls together.
      // Preserve nullish or nonnumeric external values instead of coercing them on blur.
      if (
        event.currentTarget.contains(event.relatedTarget) ||
        typeof value !== "number"
      ) {
        return;
      }
      const parsedValue = converter.toParameterValue(value);
      if (!Object.is(parsedValue, value)) {
        onChange(parsedValue);
      }
    },
    [converter, value, onChange, onBlur],
  );
  return (
    <NumberInputField
      id={fieldDefinition.fieldKey}
      value={fieldValue}
      onChange={onChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...otherProps}
      onBlur={handleBlur}
      disabled={fieldDefinition.disabled === true}
    />
  );
}

/**
 * Numeric fields use this conversion on blur so editing retains the full number.
 */
function getNumberConverter(
  fieldType: FieldType | undefined,
): FieldValueConverter<number | null> {
  return {
    toFieldValue: (value) => (typeof value === "number" ? value : null),
    toParameterValue: (value) =>
      value != null && (fieldType === "integer" || fieldType === "long")
        ? Math.trunc(value)
        : value,
  };
}
