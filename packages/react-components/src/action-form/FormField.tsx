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

import { InfoSign } from "@blueprintjs/icons";
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
                  aria-label={label != null
                    ? `Info about ${label}`
                    : "More information"}
                >
                  <InfoSign
                    className={styles.osdkFormFieldInfoIcon}
                  />
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
        {error != null
          ? (
            <div className={styles.osdkFormFieldError} role="alert">
              {error}
            </div>
          )
          : showBottomText
          ? <div className={styles.osdkFormFieldHelperText}>{helperText}</div>
          : null}
      </div>
    );
  },
);
