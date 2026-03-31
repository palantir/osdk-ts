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
import classnames from "classnames";
import React, { memo, useCallback, useRef } from "react";
import type { FilePickerProps } from "../FormFieldApi.js";
import styles from "./FilePickerField.module.css";

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

export const FilePickerField: React.FC<FilePickerProps> = memo(
  function FilePickerFieldFn({
    id,
    value,
    onChange,
    isMulti,
    accept,
    // TODO: implement maxSize validation in a follow-up
    maxSize: _maxSize,
  }: FilePickerProps): React.ReactElement {
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
        onChange?.(null);
        if (inputRef.current != null) {
          inputRef.current.value = "";
        }
      },
      [onChange],
    );

    const displayText = getDisplayText(value);
    const hasValue = displayText != null;
    const acceptString = normalizeAccept(accept);

    return (
      <div className={styles.osdkFilePickerTrigger}>
        <input
          ref={inputRef}
          type="file"
          className={styles.hiddenInput}
          multiple={isMulti}
          accept={acceptString}
          onChange={handleInputChange}
          aria-hidden="true"
          tabIndex={-1}
        />
        <Button
          id={id}
          className={classnames(
            styles.fileText,
            !hasValue && styles.placeholder,
          )}
          onClick={openFileDialog}
          aria-label="Select file"
        >
          {displayText ?? "No file chosen"}
        </Button>
        {hasValue && (
          <Button
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear selection"
          >
            &#x2715;
          </Button>
        )}
        <Button
          className={styles.browseButton}
          onClick={openFileDialog}
          aria-label="Browse files"
        >
          Browse
        </Button>
      </div>
    );
  },
);
