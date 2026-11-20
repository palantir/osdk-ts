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

import type { FieldType } from "../../FormFieldApi.js";
import { NumberInputField } from "../NumberInputField.js";
import type { FieldAdapterProps } from "./FieldAdapterProps.js";
import {
  passThroughFieldValue,
  type FieldValueConverter,
} from "./FieldValueConverter.js";
import { useFieldValueConverter } from "./useFieldValueConverter.js";

export function NumberInputFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldAdapterProps<"NUMBER_INPUT">): React.ReactElement {
  const { fieldValue, onFieldValueChange } = useFieldValueConverter(
    getNumberConverter(fieldDefinition.fieldType),
    value,
    onChange,
  );
  return (
    <NumberInputField
      id={fieldDefinition.fieldKey}
      value={fieldValue}
      onChange={onFieldValueChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...fieldDefinition.fieldComponentProps}
      disabled={fieldDefinition.disabled === true}
    />
  );
}

/**
 * Whole-number parameters store the typed number truncated toward zero; the
 * input shows the stored number once editing ends.
 */
function getNumberConverter(
  fieldType: FieldType | undefined,
): FieldValueConverter<number | null> {
  switch (fieldType) {
    case "integer":
    case "long":
      return WHOLE_NUMBER_CONVERTER;
    default:
      return NUMBER_CONVERTER;
  }
}

function toNumberFieldValue(value: unknown): number | null {
  return typeof value === "number" ? value : null;
}

const NUMBER_CONVERTER: FieldValueConverter<number | null> = {
  toFieldValue: toNumberFieldValue,
  toParameterValue: passThroughFieldValue,
};

const WHOLE_NUMBER_CONVERTER: FieldValueConverter<number | null> = {
  toFieldValue: toNumberFieldValue,
  toParameterValue: (value) => (value != null ? Math.trunc(value) : null),
};
