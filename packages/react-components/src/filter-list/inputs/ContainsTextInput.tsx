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

import React, { useCallback, useEffect, useRef, useState } from "react";

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
        onChangeRef.current(newValue || undefined);
      }, debounceMs);
    },
    [debounceMs],
  );

  const handleClear = useCallback(() => {
    setLocalValue("");
    onChange(undefined);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [onChange]);

  return (
    <div className="filter-input--text">
      <div className="bp6-input-group">
        <span className="bp6-icon bp6-icon-search" />
        <input
          type="text"
          className="bp6-input"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {localValue && (
          <button
            type="button"
            className="bp6-button bp6-minimal bp6-small filter-input__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <span className="bp6-icon bp6-icon-cross" />
          </button>
        )}
      </div>
    </div>
  );
}
