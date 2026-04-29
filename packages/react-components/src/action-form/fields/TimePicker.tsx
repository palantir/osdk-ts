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

import { Input } from "@base-ui/react/input";
import React, { useCallback, useRef, useState } from "react";
import styles from "./TimePicker.module.css";

interface TimePickerProps {
  value: string;
  onChange: (timeString: string) => void;
  label?: string;
}

export function TimePicker({
  value,
  onChange,
  label = "Time",
}: TimePickerProps): React.ReactElement {
  const [localValue, setLocalValue] = useState(value);
  const isFocusedRef = useRef(false);

  // Sync from prop when not focused (parent changed the value externally)
  const prevValueRef = useRef(value);
  if (prevValueRef.current !== value) {
    prevValueRef.current = value;
    if (!isFocusedRef.current) {
      setLocalValue(value);
    }
  }

  const handleFocus = useCallback(() => {
    isFocusedRef.current = true;
  }, []);

  const handleBlur = useCallback(() => {
    isFocusedRef.current = false;
    onChange(localValue);
  }, [onChange, localValue]);

  return (
    <Input
      type="time"
      value={localValue}
      onValueChange={setLocalValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={styles.osdkTimePickerInput}
      aria-label={label}
    />
  );
}
