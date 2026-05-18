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
 * Creates a MutableRefObject with a constant reference. This allows us to pass around a constant reference
 * to a callback, but let the consumer change the callback over time without losing that reference.
 * The callback is only updated after render, so any usage of the callback during render will operate on the
 * previous render's callback. Callbacks created by this hook should **only** be used for event handling.
 * If the callback is called on the first render of a component, it will log an error. In the future,
 * this will throw.
 *
 * ```
 *
 * @param callback
 */
/* eslint-disable-next-line @typescript-eslint/no-unsafe-function-type */
export function useEventCallback<T extends Function>(callback: T): T {
  const latestCallbackValueWrapper = React.useRef<T>(
    ((...args: unknown[]) => {
      if (typeof globalThis.console !== "undefined") {
        globalThis.console.error(
          "A callback created with `useEventCallback` was called during the initial render of a component. This will throw an error in the future.",
        );
      }
      return (callback as unknown as (...a: unknown[]) => unknown)(...args);
    }) as unknown as T,
  );

  React.useEffect(() => {
    latestCallbackValueWrapper.current = callback;
  }, [callback]);

  return React.useCallback(
    (...args: unknown[]) =>
      (
        latestCallbackValueWrapper.current as unknown as (
          ...a: unknown[]
        ) => unknown
      )(...args),
    [],
  ) as unknown as T;
}
