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

import * as React from "react";

/**
 * Lets through @param value when @param isGateOpen returns true, otherwise it returns
 * the last value for which @param isGateOpen was true (or the very first value if it was
 * never true).
 *
 * @see useInverseGatedValue for the opposite function
 */
export function useGatedValue<T>(
  value: Readonly<T>,
  isGateOpen: (current: T, previous: T) => boolean
): T {
  const ref = React.useRef<T>(value);
  const gateOpen = React.useMemo(
    () => isGateOpen(value, ref.current),
    [value, isGateOpen]
  );
  React.useEffect(() => {
    if (gateOpen) {
      ref.current = value;
    }
  });
  return gateOpen ? value : ref.current;
}

/**
 * Blocks the @param value when @param isGateClosed returns true, returning the last value for which
 *
 * @param isGateClosed was false (or the very first value if it was never false).
 *
 * @see useGatedValue for the opposite function
 */
export function useInverseGatedValue<T>(
  value: T,
  isGateClosed: (current: T, previous: T) => boolean
): T {
  const isGateOpen = React.useCallback(
    (current: T, previous: T) => !isGateClosed(current, previous),
    [isGateClosed]
  );
  return useGatedValue(value, isGateOpen);
}
