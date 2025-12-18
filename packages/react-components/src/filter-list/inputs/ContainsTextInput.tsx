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

import React, { useCallback, useState } from "react";

interface ContainsTextInputProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  debounceMs?: number;
}

export function ContainsTextInput({
  value,
  onChange,
  placeholder = "Search...",
  debounceMs = 300,
}: ContainsTextInputProps): React.ReactElement {
  const [localValue, setLocalValue] = useState(value ?? "");
  const [timeoutId, setTimeoutId] = useState<
    ReturnType<typeof setTimeout> | null
  >(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        onChange(newValue || undefined);
      }, debounceMs);

      setTimeoutId(newTimeoutId);
    },
    [onChange, debounceMs, timeoutId],
  );

  const handleClear = useCallback(() => {
    setLocalValue("");
    onChange(undefined);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }, [onChange, timeoutId]);

  return (
    <div className="osdk-filter-input osdk-filter-input--text">
      <input
        type="text"
        className="osdk-filter-text-input"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {localValue && (
        <button
          type="button"
          className="osdk-filter-text-input__clear"
          onClick={handleClear}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
