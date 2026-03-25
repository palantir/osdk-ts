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

import { Input } from "@base-ui/react/input";
import React, { useCallback } from "react";
import {
  formatDateForInput,
  formatDatetimeForInput,
  parseDateFromInput,
  parseDatetimeFromInput,
} from "../../shared/dateUtils.js";
import type { DatetimePickerFieldProps } from "../FormFieldApi.js";

export function DatetimePickerField({
  id,
  value,
  onChange,
  min,
  max,
  showTime = false,
}: DatetimePickerFieldProps & { id?: string }): React.ReactElement {
  const formatValue = showTime ? formatDatetimeForInput : formatDateForInput;
  const parseValue = showTime ? parseDatetimeFromInput : parseDateFromInput;

  const handleValueChange = useCallback(
    (inputValue: string) => {
      onChange?.(parseValue(inputValue) ?? null);
    },
    [onChange, parseValue],
  );

  return (
    <Input
      id={id}
      type={showTime ? "datetime-local" : "date"}
      value={formatValue(value)}
      onValueChange={handleValueChange}
      min={min != null ? formatValue(min) : undefined}
      max={max != null ? formatValue(max) : undefined}
    />
  );
}
