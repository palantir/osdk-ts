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

import { DatePicker } from "../../../shared/calendar/index.js";
import { Result } from "../../../shared/Result.js";
import { ConvertedField } from "./ConvertedField.js";
import type { PortalFieldAdapterProps } from "./FieldAdapterProps.js";
import type { FieldValueConverter } from "./FieldValueConverter.js";
import { getValueType } from "./getValueType.js";

export function DatePickerAdapter({
  fieldDefinition,
  value,
  onChange,
  error,
  portalContainer,
}: PortalFieldAdapterProps<"DATETIME_PICKER">): React.ReactElement {
  const disabled = fieldDefinition.disabled === true;
  return (
    <ConvertedField
      converter={DATE_CONVERTER}
      label={fieldDefinition.label}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {(fieldValue) => (
        <DatePicker
          id={fieldDefinition.fieldKey}
          placeholder={fieldDefinition.placeholder}
          value={fieldValue}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={portalContainer}
        />
      )}
    </ConvertedField>
  );
}

const DATE_CONVERTER: FieldValueConverter<Date | null> = {
  toFieldValue: (value) => {
    if (value == null) {
      return Result.ok(null);
    }
    if (value instanceof Date) {
      return Result.ok(value);
    }
    return Result.err({
      message: `Expected a date, received: ${getValueType(value)}`,
    });
  },
};
