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

import { Input } from "@base-ui/react/input";
import { SmallCross } from "@blueprintjs/icons";
import React, { memo, useCallback, useState } from "react";
import styles from "./BaseInput.module.css";

export interface MultiTextInputFieldProps {
  id?: string;
  value: readonly string[];
  onChange?: (value: readonly string[] | null) => void;
  error?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

export const MultiTextInputField: React.NamedExoticComponent<
  MultiTextInputFieldProps
> = memo(function MultiTextInputFieldFn({
  id,
  value,
  onChange,
  error,
  placeholder,
  minLength,
  maxLength,
}: MultiTextInputFieldProps): React.ReactElement {
  const [draftValue, setDraftValue] = useState("");

  const commitDraftValue = useCallback(() => {
    const trimmedValue = draftValue.trim();
    if (trimmedValue === "") {
      return;
    }
    onChange?.([...value, trimmedValue]);
    setDraftValue("");
  }, [draftValue, onChange, value]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" || event.key === ",") {
        // Keep the browser from submitting the form or typing the delimiter;
        // the delimiter means "turn the current text into a chip" here.
        event.preventDefault();
        commitDraftValue();
      }
    },
    [commitDraftValue],
  );

  const handleRemoveValue = useCallback(
    (indexToRemove: number) => {
      onChange?.(value.filter((_, index) => index !== indexToRemove));
    },
    [onChange, value],
  );

  return (
    <div
      className={styles.osdkBaseMultiInput}
      aria-invalid={error != null || undefined}
    >
      {value.map((selectedValue, index) => (
        <span
          key={`${selectedValue}-${index}`}
          className={styles.osdkBaseMultiInputChip}
        >
          <span>{selectedValue}</span>
          <button
            type="button"
            aria-label={`Remove ${selectedValue}`}
            className={styles.osdkBaseMultiInputChipRemove}
            onClick={() => handleRemoveValue(index)}
          >
            <SmallCross />
          </button>
        </span>
      ))}
      <Input
        id={id}
        className={styles.osdkBaseMultiInputInput}
        type="text"
        value={draftValue}
        onValueChange={setDraftValue}
        onKeyDown={handleKeyDown}
        onBlur={commitDraftValue}
        placeholder={value.length === 0 ? placeholder : undefined}
        minLength={minLength}
        maxLength={maxLength}
        aria-invalid={error != null || undefined}
      />
    </div>
  );
});
