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

import React, { memo, useCallback, useRef } from "react";
import styles from "./FormField.module.css";

interface FormFieldProps {
  fieldKey: string;
  label?: string;
  isRequired?: boolean;
  helperText?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = memo(
  function FormFieldFn({
    fieldKey,
    label,
    isRequired,
    helperText,
    error,
    onBlur,
    children,
  }: FormFieldProps): React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);

    // Only fire onBlur when focus leaves the field entirely, not when
    // it moves between focusable children within the same field
    // (e.g. tabbing from an input to a picker button).
    const handleBlur = useCallback(
      (e: React.FocusEvent) => {
        if (
          onBlur != null
          && (e.relatedTarget == null
            || !containerRef.current?.contains(e.relatedTarget))
        ) {
          onBlur();
        }
      },
      [onBlur],
    );

    return (
      <div
        ref={containerRef}
        className={styles.osdkFormField}
        onBlur={handleBlur}
      >
        {label != null && (
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
        )}
        {children}
        {error != null && (
          <div className={styles.osdkFormFieldError} role="alert">
            {error}
          </div>
        )}
        {helperText != null && (
          <div className={styles.osdkFormFieldHelperText}>{helperText}</div>
        )}
      </div>
    );
  },
);
