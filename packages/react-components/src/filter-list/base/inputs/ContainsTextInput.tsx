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

import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import type { ContainsTextInputClassNames } from "../../types/ClassNameOverrides.js";

interface ContainsTextInputProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  debounceMs?: number;
  classNames?: ContainsTextInputClassNames;
  renderSearchIcon?: () => React.ReactNode;
  renderClearIcon?: () => React.ReactNode;
}

export const ContainsTextInput = memo(function ContainsTextInput({
  value,
  onChange,
  placeholder = "Search...",
  debounceMs = 300,
  classNames,
  renderSearchIcon,
  renderClearIcon,
}: ContainsTextInputProps): React.ReactElement {
  const [localValue, setLocalValue] = useState(value ?? "");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    setLocalValue(value ?? "");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onChangeRef.current(newValue.length > 0 ? newValue : undefined);
      }, debounceMs);
    },
    [debounceMs],
  );

  const handleClear = useCallback(() => {
    setLocalValue("");
    onChangeRef.current(undefined);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <div
      className={classNames?.root}
      data-has-value={!!localValue}
    >
      <div className={classNames?.inputGroup}>
        {renderSearchIcon
          ? renderSearchIcon()
          : <span className={classNames?.searchIcon} />}
        <input
          type="text"
          className={classNames?.input}
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        {localValue && (
          <button
            type="button"
            className={classNames?.clearButton}
            onClick={handleClear}
            aria-label="Clear search"
          >
            {renderClearIcon
              ? renderClearIcon()
              : <span className={classNames?.clearIcon} />}
          </button>
        )}
      </div>
    </div>
  );
});
