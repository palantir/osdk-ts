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

import { TextInputField } from "../TextInputField.js";
import { ConvertedField } from "./ConvertedField.js";
import type { FieldAdapterProps } from "./FieldAdapterProps.js";
import { TEXT_CONVERTER } from "./FieldValueConverter.js";

export function TextInputFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldAdapterProps<"TEXT_INPUT">): React.ReactElement {
  const disabled = fieldDefinition.disabled === true;
  return (
    <ConvertedField
      converter={TEXT_CONVERTER}
      label={fieldDefinition.label}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {(fieldValue, onFieldValueChange) => (
        <TextInputField
          id={fieldDefinition.fieldKey}
          value={fieldValue}
          onChange={onFieldValueChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      )}
    </ConvertedField>
  );
}
