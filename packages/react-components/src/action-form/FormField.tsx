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

import React, { memo } from "react";
import { Tooltip, TooltipArrow } from "../base-components/tooltip/index.js";
import styles from "./FormField.module.css";

interface FormFieldProps {
  fieldKey: string;
  label?: string;
  isRequired?: boolean;
  helperText?: string;
  helperTextPlacement?: "bottom" | "tooltip";
  error?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = memo(
  function FormFieldFn({
    fieldKey,
    label,
    isRequired,
    helperText,
    helperTextPlacement = "tooltip",
    error,
    children,
  }: FormFieldProps): React.ReactElement {
    const showTooltip = helperText != null && helperTextPlacement === "tooltip";
    const showBottomText = helperText != null
      && helperTextPlacement === "bottom";

    const labelElement = label != null
      ? (
        <label className={styles.osdkFormFieldLabel} htmlFor={fieldKey}>
          {label}
          {isRequired === true && (
            <span
              className={styles.osdkFormFieldRequired}
              aria-label="required"
            >
              {" "}*
            </span>
          )}
        </label>
      )
      : null;

    return (
      <div className={styles.osdkFormField}>
        {showTooltip
          ? (
            <div className={styles.osdkFormFieldLabelRow}>
              {labelElement}
              <Tooltip.Root>
                <Tooltip.Trigger
                  aria-label={`Info about ${label}`}
                >
                  <InfoIcon />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Positioner sideOffset={4}>
                    <Tooltip.Popup>
                      {helperText}
                      <TooltipArrow />
                    </Tooltip.Popup>
                  </Tooltip.Positioner>
                </Tooltip.Portal>
              </Tooltip.Root>
            </div>
          )
          : labelElement}
        {children}
        {error != null && (
          <div className={styles.osdkFormFieldError} role="alert">
            {error}
          </div>
        )}
        {showBottomText && (
          <div className={styles.osdkFormFieldHelperText}>{helperText}</div>
        )}
      </div>
    );
  },
);

function InfoIcon(): React.ReactElement {
  return (
    <svg
      className={styles.osdkFormFieldInfoIcon}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM7 7a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V7Zm1-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
