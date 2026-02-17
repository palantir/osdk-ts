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

import { Cross, Search } from "@blueprintjs/icons";
import classnames from "classnames";
import { debounce } from "lodash-es";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styles from "./ContainsTextInput.module.css";

interface ContainsTextInputProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
  style?: React.CSSProperties;
  renderSearchIcon?: () => React.ReactNode;
  renderClearIcon?: () => React.ReactNode;
}

function ContainsTextInputInner({
  value,
  onChange,
  placeholder = "Search...",
  debounceMs = 300,
  className,
  style,
  renderSearchIcon,
  renderClearIcon,
}: ContainsTextInputProps): React.ReactElement {
  const [localValue, setLocalValue] = useState(value ?? "");

  const debouncedOnChange = useMemo(
    () =>
      debounce((newValue: string) => {
        onChange(newValue.length > 0 ? newValue : undefined);
      }, debounceMs),
    [onChange, debounceMs],
  );

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  useEffect(() => {
    setLocalValue(value ?? "");
    debouncedOnChange.cancel();
  }, [value, debouncedOnChange]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
      debouncedOnChange(e.target.value);
    },
    [debouncedOnChange],
  );

  const handleClear = useCallback(() => {
    setLocalValue("");
    debouncedOnChange.cancel();
    onChange(undefined);
  }, [debouncedOnChange, onChange]);

  return (
    <div
      className={classnames(styles.textInput, className)}
      style={style}
      data-has-value={!!localValue}
    >
      <div className={styles.inputGroup}>
        {renderSearchIcon
          ? renderSearchIcon()
          : (
            <span className={styles.searchIcon}>
              <Search color="currentColor" />
            </span>
          )}
        <input
          type="text"
          className={styles.input}
          value={localValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        {localValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear search"
          >
            {renderClearIcon
              ? renderClearIcon()
              : <Cross color="currentColor" />}
          </button>
        )}
      </div>
    </div>
  );
}

export const ContainsTextInput: React.NamedExoticComponent<
  ContainsTextInputProps
> = memo(ContainsTextInputInner);
