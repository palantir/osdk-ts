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

import type { DebouncedFunc } from "lodash-es";
import { debounce } from "lodash-es";
import * as React from "react";

import { useOnUnmount } from "./lifecycle/useOnUnmount.js";
import { useEventCallback } from "./useEventCallback.js";
import { useDeepEqual } from "./variables/useDeepEqual.js";

// Helper type to check if parameters have explicit types
export type HasExplicitParams<T> = T extends (...args: infer P) => unknown
  ? any[] extends P
    ? never // Reject if parameters are implicitly 'any'
    : T
  : never;

export type DebounceOptions = {
  maxWait?: number;
  leading?: boolean;
  trailing?: boolean;
};

/**
 * Creates a debounced callback that delays invoking `callback` until after `wait`
 * milliseconds have elapsed since the last time `callback` was invoked.
 *
 * The function returned will be stable, suitable for passing to memoized components or as the dependency to useEffect.
 *
 * Note that you _do not_ need to memoize the function passed to `useDebouncedCallback` by first using `useCallback` or `useEventCallback`, you can pass an inline function.
 *
 * @param {Function} callback The function to debounce.
 * @param {number} wait The number of milliseconds to delay
 * @param options Additional configuration options. See https://lodash.com/docs/4.17.15#debounce for more details
 *
 * @example
 * const handleScroll = useDebouncedCallback((event: React.UIEvent<HtmlDivElement>) => {
 *   loadMore(event.current.scrollTop);
 * }, 100)
 */
export function useDebouncedCallback<T extends (...args: any[]) => unknown>(
  callback: HasExplicitParams<T>,
  wait: number,
  options?: DebounceOptions
): DebouncedFunc<T> {
  const f = useEventCallback(callback as T);
  const deepOptions = useDeepEqual(options);
  const debouncedCallback: DebouncedFunc<T> = React.useMemo(
    () => debounce(f, wait, deepOptions),
    [f, wait, deepOptions]
  );
  useOnUnmount(() => debouncedCallback.cancel());
  return debouncedCallback;
}
