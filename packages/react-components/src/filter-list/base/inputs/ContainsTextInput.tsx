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

import React, { memo, useCallback } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue.js";
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

function ContainsTextInputInner({
  value,
  onChange,
  placeholder = "Search...",
  debounceMs = 300,
  classNames,
  renderSearchIcon,
  renderClearIcon,
}: ContainsTextInputProps): React.ReactElement {
  const handleChange = useCallback(
    (newValue: string) => {
      onChange(newValue.length > 0 ? newValue : undefined);
    },
    [onChange],
  );

  const [localValue, setLocalValue] = useDebouncedValue(
    value ?? "",
    handleChange,
    debounceMs,
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
    },
    [setLocalValue],
  );

  const handleClear = useCallback(() => {
    setLocalValue("");
    onChange(undefined);
  }, [setLocalValue, onChange]);

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
          onChange={handleInputChange}
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
}

export const ContainsTextInput: React.NamedExoticComponent<ContainsTextInputProps> =
  memo(ContainsTextInputInner);
