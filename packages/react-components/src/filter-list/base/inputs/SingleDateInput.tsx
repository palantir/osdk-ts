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

import React, { memo, useCallback } from "react";
import type { SingleDateInputClassNames } from "../../types/ClassNameOverrides.js";
import { formatDateForInput, parseDateFromInput } from "./dateUtils.js";

interface SingleDateInputProps {
  selectedDate: Date | undefined;
  onChange: (date: Date | undefined) => void;
  classNames?: SingleDateInputClassNames;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  showClearButton?: boolean;
}

function SingleDateInputInner({
  selectedDate,
  onChange,
  classNames,
  minDate,
  maxDate,
  placeholder = "Select a date...",
  showClearButton = true,
}: SingleDateInputProps): React.ReactElement {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = parseDateFromInput(e.target.value);
      onChange(date);
    },
    [onChange],
  );

  const handleClear = useCallback(() => {
    onChange(undefined);
  }, [onChange]);

  return (
    <div className={classNames?.root}>
      <div className={classNames?.inputContainer}>
        <input
          type="date"
          className={classNames?.input}
          value={formatDateForInput(selectedDate)}
          onChange={handleChange}
          min={minDate ? formatDateForInput(minDate) : undefined}
          max={maxDate ? formatDateForInput(maxDate) : undefined}
          placeholder={placeholder}
          aria-label="Select date"
        />
        {showClearButton && selectedDate !== undefined && (
          <button
            type="button"
            className={classNames?.clearButton}
            onClick={handleClear}
            aria-label="Clear date"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export const SingleDateInput: React.NamedExoticComponent<SingleDateInputProps> =
  memo(SingleDateInputInner);
