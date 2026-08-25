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

import { Intent } from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";
import { Error } from "@blueprintjs/icons";
import classNames from "classnames";
import React, { useCallback, useMemo } from "react";

import { formatDateForInput } from "../../shared/dateUtils.js";
import {
  resolvePortalContainerElement,
  usePortalContainer,
} from "../../shared/PortalContainerContext.js";
import type { DatePickerEditConfig } from "../utils/types.js";

import styles from "../EditableCell.module.css";

interface DatePickerCellFieldProps {
  fieldComponentProps?: DatePickerEditConfig;
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
  inputValue,
  hasValidationError,
  isEdited,
  onChange,
  dataType,
}: DatePickerCellFieldProps): React.ReactElement {
  const portalContainer = resolvePortalContainerElement(usePortalContainer());

  const dateValue = useMemo(() => parseDateValue(inputValue), [inputValue]);
  const { inputProps, popoverProps, ...dateInputProps } =
    fieldComponentProps ?? {};
  const timePrecision =
    dateInputProps.timePrecision ??
    (dataType === "timestamp" ? "minute" : undefined);
  const resolvedInputProps = useMemo(
    () => ({
      ...inputProps,
      intent: hasValidationError ? Intent.DANGER : inputProps?.intent,
      "aria-invalid": hasValidationError || undefined,
    }),
    [hasValidationError, inputProps],
  );
  const resolvedPopoverProps = useMemo(
    () => ({
      ...popoverProps,
      portalContainer: popoverProps?.portalContainer ?? portalContainer,
    }),
    [popoverProps, portalContainer],
  );

  const handleChange = useCallback(
    (isoDate: string | null) => {
      if (isoDate == null) {
        onChange(null);
        return;
      }
      onChange(
        timePrecision != null ? isoDate : formatDateForInput(new Date(isoDate)),
      );
    },
    [onChange, timePrecision],
  );

  return (
    <div
      className={classNames(styles.osdkEditableCellDatePicker, {
        [styles.error]: hasValidationError,
        [styles.osdkEditedInput]: isEdited,
      })}
    >
      <DateInput
        {...dateInputProps}
        timePrecision={timePrecision}
        value={dateValue?.toISOString() ?? null}
        onChange={handleChange}
        inputProps={resolvedInputProps}
        popoverProps={resolvedPopoverProps}
      />
      {hasValidationError && (
        <span className={styles.errorIconWrapper}>
          <Error className={styles.errorIcon} />
        </span>
      )}
    </div>
  );
}

export const DatePickerCellField: React.MemoExoticComponent<
  typeof DatePickerCellFieldInner
> = React.memo(DatePickerCellFieldInner);
