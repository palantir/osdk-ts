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

import { useCallback, useRef, useState } from "react";

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
}

/**
 * The `useControllableState` hook returns the state and function that updates the state, just like React.useState does.
 *
 * Adapted from https://chakra-ui.com/docs/hooks/use-controllable#usecontrollablestate
 */
export function useControllableState<T>(
  props: UseControllableStateProps<T>,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const {
    value: valueProp,
    defaultValue,
    onChange,
  } = props;

  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
  const controlled = valueProp !== undefined;
  const value = controlled ? valueProp : uncontrolledState;

  const valueRef = useRef(value);
  valueRef.current = value;

  const setValue = useCallback(
    (next: React.SetStateAction<T>) => {
      const setter = next as (prevState?: T) => T;
      const nextValue = typeof next === "function"
        ? setter(valueRef.current)
        : next;

      if (!controlled) {
        setUncontrolledState(nextValue);
      }

      onChange?.(nextValue);
    },
    [controlled, onChange],
  );

  return [value, setValue] as const;
}
