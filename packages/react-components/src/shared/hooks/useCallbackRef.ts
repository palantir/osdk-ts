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

import { useCallback, useEffect, useRef } from "react";

/**
 * This hook is user-land implementation of the experimental `useEffectEvent` hook.
 * React docs: https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
 */
export function useEventCallback<T extends Function>(callback: T): T {
  const latestCallbackValueWrapper = useRef<T>(
    ((...args: any[]) => {
      // eslint-disable-next-line no-console
      console.error(
        "A callback created with `useEventCallback` was called during the initial render of a component. This will throw an error in the future.",
      );
      return callback(...args);
    }) as unknown as T,
  );

  useEffect(() => {
    latestCallbackValueWrapper.current = callback;
  }, [callback]);

  return useCallback(
    (...args: any[]) => latestCallbackValueWrapper.current(...args),
    [],
  ) as unknown as T;
}
