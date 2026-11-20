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

import { FilePickerField } from "../FilePickerField.js";
import type { FieldAdapterProps } from "./FieldAdapterProps.js";
import {
  passThroughFieldValue,
  type FieldValueConverter,
} from "./FieldValueConverter.js";
import { useFieldValueConverter } from "./useFieldValueConverter.js";

export function FilePickerFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldAdapterProps<"FILE_PICKER">): React.ReactElement {
  const { fieldValue, onFieldValueChange } = useFieldValueConverter(
    FILE_CONVERTER,
    value,
    onChange,
  );
  return (
    <FilePickerField
      id={fieldDefinition.fieldKey}
      value={fieldValue}
      onChange={onFieldValueChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
      disabled={fieldDefinition.disabled === true}
    />
  );
}

const FILE_CONVERTER: FieldValueConverter<File | File[] | null> = {
  toFieldValue: toFileValue,
  toParameterValue: passThroughFieldValue,
};

function toFileValue(value: unknown): File | File[] | null {
  if (value instanceof File) {
    return value;
  }
  if (Array.isArray(value) && isFileArray(value)) {
    return value;
  }
  return null;
}

function isFileArray(value: unknown[]): value is File[] {
  return value.every((v) => v instanceof File);
}
