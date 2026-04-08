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
import React, { memo, useCallback, useRef } from "react";
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
    // maxSize is enforced by form-level validation (extractValidationRules)
    maxSize: _maxSize,
    text = "No file chosen",
    buttonText = "Browse",
  }): React.ReactElement {
    const inputRef = useRef<HTMLInputElement>(null);

    const openFileDialog = useCallback(() => {
      inputRef.current?.click();
    }, []);

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
      [onChange, isMulti],
    );

    const handleClear = useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        onChange?.(null);
        if (inputRef.current != null) {
          inputRef.current.value = "";
        }
      },
      [onChange],
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFileDialog();
        }
      },
      [openFileDialog],
    );

    const displayText = getDisplayText(value);
    const hasValue = displayText != null;
    const acceptString = normalizeAccept(accept);
    return (
      // The entire component is a single tab stop (tabIndex={0}).
      // Text and Browse are <span>s (not buttons) so they don't create
      // extra tab stops — clicks on them bubble up to the container's onClick.
      // The clear button is the only inner interactive element and gets its
      // own tab stop so keyboard users can clear the selection.
      <div
        id={id}
        className={styles.osdkFilePickerTrigger}
        tabIndex={0}
        role="button"
        onClick={openFileDialog}
        onKeyDown={handleKeyDown}
        data-invalid={error != null || undefined}
      >
        <input
          ref={inputRef}
          type="file"
          className={styles.osdkFilePickerHiddenInput}
          multiple={isMulti}
          accept={acceptString}
          onChange={handleInputChange}
          aria-hidden="true"
          tabIndex={-1}
        />
        <span
          className={classnames(
            styles.osdkFilePickerText,
            !hasValue && styles.osdkFilePickerPlaceholder,
          )}
        >
          {displayText ?? text}
        </span>
        {hasValue && (
          // stopPropagation + preventDefault prevent the click from
          // bubbling to the container's onClick which opens the file dialog.
          <Button
            className={styles.osdkFilePickerClear}
            onClick={handleClear}
            aria-label="Clear selection"
          >
            <Cross />
          </Button>
        )}
        <span className={styles.osdkFilePickerBrowse}>{buttonText}</span>
      </div>
    );
  },
);

function normalizeAccept(
  accept: string | string[] | undefined,
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
