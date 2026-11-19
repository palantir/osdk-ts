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
import type { PortalFieldAdapterProps } from "./FieldAdapterProps.js";

export function DateRangePickerAdapter({
  fieldDefinition,
  value,
  onChange,
  portalContainer,
}: PortalFieldAdapterProps<"DATE_RANGE_INPUT">): React.ReactElement {
  return (
    <DateRangePicker
      id={fieldDefinition.fieldKey}
      value={coerceToDateRange(value)}
      onChange={onChange}
      placeholderStart={fieldDefinition.placeholder}
      {...fieldDefinition.fieldComponentProps}
      disabled={fieldDefinition.disabled === true}
      portalContainer={portalContainer}
    />
  );
}

function coerceToDateRange(value: unknown): DateRange {
  if (!Array.isArray(value) || value.length !== 2) return EMPTY_RANGE;
  const start = value[0] instanceof Date ? value[0] : null;
  const end = value[1] instanceof Date ? value[1] : null;
  if (start == null && end == null) return EMPTY_RANGE;
  return [start, end];
}
