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

import { Result } from "../../../shared/Result.js";
import type { FieldType } from "../../FormFieldApi.js";
import { NumberInputField } from "../NumberInputField.js";
import { ConvertedField } from "./ConvertedField.js";
import type { FieldAdapterProps } from "./FieldAdapterProps.js";
import {
  passThroughFieldValue,
  type FieldValueConverter,
} from "./FieldValueConverter.js";
import { getValueType } from "./getValueType.js";

export function NumberInputFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldAdapterProps<"NUMBER_INPUT">): React.ReactElement {
  const disabled = fieldDefinition.disabled === true;
  const { fieldType } = fieldDefinition;
  const { onBlur, ...otherProps } = fieldDefinition.fieldComponentProps;
  // Defer integer/long truncation until blur so fractional values remain editable.
  // For example, keep 3.7 while typing, then store and display 3 on blur (-3.7 becomes -3).
  // Convert before the event bubbles to the form's blur validation.
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      onBlur?.(event);
      // Parse only when focus leaves the input and stepper controls together.
      if (
        event.currentTarget.contains(event.relatedTarget) ||
        typeof value !== "number"
      ) {
        return;
      }
      const storedValue = toStoredNumber(value, fieldType);
      if (!Object.is(storedValue, value)) {
        onChange(storedValue);
      }
    },
    [value, fieldType, onChange, onBlur],
  );
  return (
    <ConvertedField
      converter={NUMBER_CONVERTER}
      label={fieldDefinition.label}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {(fieldValue, onFieldValueChange) => (
        <NumberInputField
          id={fieldDefinition.fieldKey}
          value={fieldValue}
          onChange={onFieldValueChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...otherProps}
          onBlur={handleBlur}
          disabled={disabled}
        />
      )}
    </ConvertedField>
  );
}

/**
 * Shows stored numbers, fractional ones included so they stay editable while
 * typed. Integer and long values are truncated on blur.
 */
const NUMBER_CONVERTER: FieldValueConverter<number | null> = {
  toFieldValue: (value) =>
    value == null || typeof value === "number"
      ? Result.ok(value ?? null)
      : Result.err({
          message: `Expected a number, received: ${getValueType(value)}`,
        }),
  toParameterValue: passThroughFieldValue,
};

function toStoredNumber(
  value: number,
  fieldType: FieldType | undefined,
): number {
  return isWholeNumberType(fieldType) ? Math.trunc(value) : value;
}

function isWholeNumberType(fieldType: FieldType | undefined): boolean {
  return fieldType === "integer" || fieldType === "long";
}
