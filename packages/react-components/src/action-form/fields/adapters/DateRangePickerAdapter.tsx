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

import {
  type DateRange,
  DateRangePicker,
  EMPTY_RANGE,
} from "../../../shared/calendar/index.js";
import { Result } from "../../../shared/Result.js";
import { ConvertedField } from "./ConvertedField.js";
import type { PortalFieldAdapterProps } from "./FieldAdapterProps.js";
import {
  passThroughFieldValue,
  type FieldValueConverter,
} from "./FieldValueConverter.js";
import { getValueType } from "./getValueType.js";

export function DateRangePickerAdapter({
  fieldDefinition,
  value,
  onChange,
  portalContainer,
}: PortalFieldAdapterProps<"DATE_RANGE_INPUT">): React.ReactElement {
  const disabled = fieldDefinition.disabled === true;
  return (
    <ConvertedField
      converter={DATE_RANGE_CONVERTER}
      label={fieldDefinition.label}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {(fieldValue, onFieldValueChange) => (
        <DateRangePicker
          id={fieldDefinition.fieldKey}
          value={fieldValue}
          onChange={onFieldValueChange}
          placeholderStart={fieldDefinition.placeholder}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={portalContainer}
        />
      )}
    </ConvertedField>
  );
}

const DATE_RANGE_CONVERTER: FieldValueConverter<DateRange | null> = {
  toFieldValue: (value) => {
    if (value == null) {
      return Result.ok(EMPTY_RANGE);
    }
    if (!Array.isArray(value)) {
      return Result.err({
        message: `Expected a date range, received: ${getValueType(value)}`,
      });
    }
    if (value.length !== 2) {
      return Result.err({
        message:
          value.length === 0
            ? `Expected 2 dates, received an empty array`
            : `Expected 2 dates, received: ${value.length}`,
      });
    }
    const nonDate: unknown = value.find((item) => !isDateOrEmpty(item));
    if (nonDate !== undefined) {
      return Result.err({
        message: `Expected a start and end date, received: ${getValueType(value)}`,
      });
    }
    const [start, end]: Array<Date | null | undefined> = value;
    return Result.ok([start ?? null, end ?? null]);
  },
  toParameterValue: passThroughFieldValue,
};

function isDateOrEmpty(value: unknown): boolean {
  return value == null || value instanceof Date;
}
