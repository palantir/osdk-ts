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

import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import { DatetimePickerField } from "../../action-form/fields/DatetimePickerField.js";

import { formatDateForInput } from "../../shared/dateUtils.js";
import styles from "../EditableCell.module.css";
import { useRegisterPortal } from "../utils/PortalTracker.js";
import type { DatePickerEditConfig } from "../utils/types.js";

interface DatePickerCellFieldProps {
  fieldComponentProps?: DatePickerEditConfig;
  isRowFocused: boolean;
  inputValue: string;
  hasValidationError: boolean;
  isEdited: boolean;
  onChange: (newValue: unknown) => void;
  dataType?: string;
}

function parseDateValue(input: string): Date | null {
  if (input === "") {
    return null;
  }
  const date = new Date(input);
  if (isNaN(date.getTime())) {
    return null;
  }
  return date;
}

function DatePickerCellFieldInner({
  fieldComponentProps,
  isRowFocused,
  inputValue,
  hasValidationError,
  isEdited,
  onChange,
  dataType,
}: DatePickerCellFieldProps): React.ReactElement {
  const portalRef = useRegisterPortal();

  const dateValue = useMemo(() => parseDateValue(inputValue), [inputValue]);
  const showTime = fieldComponentProps?.showTime
    ?? dataType === "timestamp";

  const handleChange = useCallback((newValue: Date | null) => {
    onChange(formatDateForInput(newValue));
  }, [onChange]);

  return (
    <div
      className={classNames(
        styles.osdkEditableCellDatePicker,
        {
          [styles.error]: hasValidationError,
          [styles.osdkEditedInput]: isEdited,
        },
      )}
    >
      <DatetimePickerField
        {...fieldComponentProps}
        showTime={showTime}
        value={dateValue}
        onChange={handleChange}
        portalRef={portalRef}
        readOnly={!isRowFocused}
      />
    </div>
  );
}

export const DatePickerCellField: React.MemoExoticComponent<
  typeof DatePickerCellFieldInner
> = React.memo(DatePickerCellFieldInner);
