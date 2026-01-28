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

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A hook that manages a local value with debounced updates to the parent.
 * Useful for inputs where we want immediate visual feedback but delayed
 * propagation of changes (e.g., search inputs, numeric inputs).
 *
 * @param externalValue The controlled value from the parent
 * @param onChange Callback to propagate changes to the parent
 * @param debounceMs Debounce delay in milliseconds
 * @returns Tuple of [localValue, setLocalValue] where setLocalValue triggers debounced onChange
 */
export function useDebouncedValue<T>(
  externalValue: T,
  onChange: (value: T) => void,
  debounceMs: number = 300,
): [T, (value: T) => void] {
  const [localValue, setLocalValue] = useState<T>(externalValue);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    setLocalValue(externalValue);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [externalValue]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setDebouncedValue = useCallback(
    (newValue: T) => {
      setLocalValue(newValue);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onChangeRef.current(newValue);
      }, debounceMs);
    },
    [debounceMs],
  );

  return [localValue, setDebouncedValue];
}
