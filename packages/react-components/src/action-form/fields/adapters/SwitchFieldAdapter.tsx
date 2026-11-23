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

import { Result } from "../../../shared/Result.js";
import { SwitchField } from "../SwitchField.js";
import { ConvertedField } from "./ConvertedField.js";
import type { FieldAdapterProps } from "./FieldAdapterProps.js";
import {
  passThroughFieldValue,
  type FieldValueConverter,
} from "./FieldValueConverter.js";
import { getValueType } from "./getValueType.js";

export function SwitchFieldAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldAdapterProps<"SWITCH">): React.ReactElement {
  const disabled = fieldDefinition.disabled === true;
  return (
    <ConvertedField
      converter={BOOLEAN_CONVERTER}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {(fieldValue, onFieldValueChange) => (
        <SwitchField
          id={fieldDefinition.fieldKey}
          label={fieldDefinition.label}
          value={fieldValue}
          onChange={onFieldValueChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      )}
    </ConvertedField>
  );
}

const BOOLEAN_CONVERTER: FieldValueConverter<boolean | null> = {
  toFieldValue: (value) => {
    if (value == null) {
      return Result.ok(false);
    }
    if (typeof value === "boolean") {
      return Result.ok(value);
    }
    return Result.err({
      message: `Expected a boolean (true or false), received: ${getValueType(value)}`,
    });
  },
  toParameterValue: passThroughFieldValue,
};
