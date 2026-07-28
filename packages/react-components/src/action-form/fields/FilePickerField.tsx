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

import { Button } from "@base-ui/react/button";
import { Cross } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { memo, useCallback, useMemo, useRef } from "react";

import { ActionButton } from "../../base-components/action-button/ActionButton.js";
import type { FilePickerProps } from "../FormFieldApi.js";

import styles from "./FilePickerField.module.css";

export const FilePickerField: React.FC<FilePickerProps> = memo(
  function FilePickerFieldFn({
    id,
    value,
    onChange,
    error,
    isMulti,
    accept,
    // maxSize is enforced by form-level validation (extractValidationRules),
    // not here. Silently dropping oversized files would leave the user with
    // no indication of why their selection disappeared.
    maxSize: _maxSize,
    text = "No file chosen",
    buttonText = "Browse",
    disabled,
  }): React.ReactElement {
    const inputRef = useRef<HTMLInputElement>(null);
    const fileTriggerRef = useRef<HTMLButtonElement>(null);

    const openFileDialog = useCallback(() => {
      inputRef.current?.click();
    }, []);

    const focusFileTrigger = useCallback(() => {
      fileTriggerRef.current?.focus();
    }, []);

    const handleBrowsePointerDown = useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        // Browse is a visual affordance inside the field, not a separate tab
        // stop; keep the field trigger as the focused element and focus ring.
        event.preventDefault();
        focusFileTrigger();
      },
      [focusFileTrigger]
    );

    const handleBrowseClick = useCallback(() => {
      focusFileTrigger();
      openFileDialog();
    }, [focusFileTrigger, openFileDialog]);

    const handleInputChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files == null || files.length === 0) {
          onChange?.(null);
          return;
        }

        if (isMulti) {
          onChange?.(Array.from(files));
        } else {
          onChange?.(files[0] ?? null);
        }
      },
      [onChange, isMulti]
    );

    const handleClear = useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        onChange?.(null);
        if (inputRef.current != null) {
          inputRef.current.value = "";
        }
      },
      [onChange]
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFileDialog();
        }
      },
      [openFileDialog]
    );

    const displayText = useMemo(() => getDisplayText(value), [value]);
    const hasValue = displayText != null;
    const acceptString = useMemo(() => normalizeAccept(accept), [accept]);
    return (
      <div
        className={styles.osdkFilePickerTrigger}
        aria-invalid={error != null || undefined}
      >
        {/* display: none removes the input from the a11y tree entirely,
            avoiding nested-interactive. Programmatic .click() still works. */}
        <input
          ref={inputRef}
          type="file"
          className={styles.osdkFilePickerHiddenInput}
          multiple={isMulti}
          accept={acceptString}
          onChange={handleInputChange}
          tabIndex={-1}
          disabled={disabled}
        />
        <Button
          ref={fileTriggerRef}
          id={id}
          type="button"
          className={classnames(
            styles.osdkFilePickerText,
            !hasValue && styles.osdkFilePickerPlaceholder
          )}
          onClick={openFileDialog}
          onKeyDown={handleKeyDown}
          aria-label="Choose file"
          aria-invalid={error != null || undefined}
          disabled={disabled}
        >
          {displayText ?? text}
        </Button>
        {hasValue && (
          <Button
            type="button"
            className={styles.osdkFilePickerClear}
            onClick={handleClear}
            aria-label="Clear selection"
            disabled={disabled}
          >
            <Cross />
          </Button>
        )}
        <ActionButton
          type="button"
          tabIndex={-1}
          className={styles.osdkFilePickerBrowse}
          onPointerDown={handleBrowsePointerDown}
          onClick={handleBrowseClick}
          disabled={disabled}
        >
          {buttonText}
        </ActionButton>
      </div>
    );
  }
);

function normalizeAccept(
  accept: string | string[] | undefined
): string | undefined {
  if (accept == null) {
    return undefined;
  }
  return Array.isArray(accept) ? accept.join(",") : accept;
}

function getDisplayText(value: File | File[] | null): string | undefined {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.map((f) => f.name).join(", ");
  }
  return value.name;
}
