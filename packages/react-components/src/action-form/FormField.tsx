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

import { Popover } from "@base-ui/react/popover";
import { InfoSign } from "@blueprintjs/icons";
import React, { memo } from "react";
import styles from "./FormField.module.css";

interface FormFieldProps {
  fieldKey: string;
  label?: string;
  isRequired?: boolean;
  helperText?: React.ReactNode;
  helperTextPlacement?: "bottom" | "tooltip";
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = memo(function FormFieldFn({
  fieldKey,
  label,
  isRequired,
  helperText,
  helperTextPlacement = "tooltip",
  error,
  onBlur,
  children,
}: FormFieldProps): React.ReactElement {
  const hasHelperText = helperText != null && helperText !== "";
  const showTooltip = hasHelperText && helperTextPlacement === "tooltip";
  const showBottomText = hasHelperText && helperTextPlacement === "bottom";

  const labelElement = label != null
    ? (
      <label className={styles.osdkFormFieldLabel} htmlFor={fieldKey}>
        {label}
        {isRequired === true && (
          <span className={styles.osdkFormFieldRequired} aria-label="required">
            {" "}
            *
          </span>
        )}
      </label>
    )
    : null;

  return (
    <div className={styles.osdkFormField} onBlur={onBlur}>
      {showTooltip
        ? (
          <div className={styles.osdkFormFieldLabelRow}>
            {labelElement}
            <InfoTip label={label}>{helperText}</InfoTip>
          </div>
        )
        : labelElement}
      {showBottomText && (
        <div className={styles.osdkFormFieldHelperText}>{helperText}</div>
      )}
      {children}
      {error != null && (
        <div className={styles.osdkFormFieldError} role="alert">
          {error}
        </div>
      )}
    </div>
  );
});

interface InfoTipProps {
  label?: string;
  children: React.ReactNode;
}

// Uses Popover (not Tooltip) because helper text may contain interactive
// content like links that need focus management and keyboard navigation.
// See https://base-ui.com/react/components/tooltip#infotips
function InfoTip({ label, children }: InfoTipProps): React.ReactElement {
  return (
    <Popover.Root>
      <Popover.Trigger
        render={<span className={styles.osdkFormFieldInfoIcon} />}
        nativeButton={false}
        openOnHover={true}
        aria-label={label != null ? `Info about ${label}` : "More information"}
      >
        <InfoSign size={12} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={4}>
          <Popover.Popup className={styles.osdkFormFieldInfoPopup}>
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
