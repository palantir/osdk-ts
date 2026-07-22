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

import React from "react";

export interface DebouncedCallback<TArgs extends readonly unknown[]> {
  (...args: TArgs): void;
  cancel: () => void;
  flush: () => void;
}

/**
 * Options controlling which edges of the debounce window invoke the callback.
 */
export interface DebouncedCallbackOptions {
  /** Invoke on the leading edge of the window. Defaults to false. */
  leading?: boolean;
  /** Invoke on the trailing edge of the window. Defaults to true. */
  trailing?: boolean;
}

/**
 * Creates a debounced version of a callback function.
 *
 * @param callback The function to debounce
 * @param delay The delay in milliseconds
 * @param options Optional `{ leading, trailing }` edge configuration. Defaults
 *   to trailing-only (leading false, trailing true).
 * @returns A debounced function with cancel() and flush() methods
 *
 * @example
 * ```tsx
 * const { applyAction } = useOsdkAction(editOffice);
 *
 * const debouncedSave = useDebouncedCallback(
 *   async (name: string) => {
 *     await applyAction({
 *       Office: office,
 *       name,
 *       location: office.location!,
 *       $optimisticUpdate: (ctx) => {
 *         ctx.updateObject(office.$clone({ name }));
 *       },
 *     });
 *   },
 *   1000
 * );
 *
 * <input onChange={(e) => debouncedSave(e.target.value)} />
 * ```
 */
export function useDebouncedCallback<TArgs extends readonly unknown[]>(
  callback: (...args: TArgs) => void | Promise<void>,
  delay: number,
  options?: DebouncedCallbackOptions
): DebouncedCallback<TArgs> {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = React.useRef(callback);
  // Holds the args for a pending trailing invocation, or undefined when there
  // is nothing to flush on the trailing edge.
  const lastArgsRef = React.useRef<TArgs>();

  const leadingRef = React.useRef(false);
  const trailingRef = React.useRef(true);

  callbackRef.current = callback;
  // Read options through refs so the memoized callbacks below never close over
  // stale configuration when the caller passes new option values.
  leadingRef.current = options?.leading ?? false;
  trailingRef.current = options?.trailing ?? true;

  // Fires the pending trailing invocation, if any, and clears it. Consuming the
  // args ensures the same window cannot fire twice on the trailing edge.
  const fireTrailing = React.useCallback(() => {
    const pendingArgs = lastArgsRef.current;
    lastArgsRef.current = undefined;
    if (trailingRef.current && pendingArgs != null) {
      void callbackRef.current(...pendingArgs);
    }
  }, []);

  const cancel = React.useCallback(() => {
    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
    lastArgsRef.current = undefined;
  }, []);

  const flush = React.useCallback(() => {
    if (timeoutRef.current == null) {
      return;
    }
    clearTimeout(timeoutRef.current);
    timeoutRef.current = undefined;
    fireTrailing();
  }, [fireTrailing]);

  const debouncedCallback = React.useCallback(
    (...args: TArgs) => {
      const isNewWindow = timeoutRef.current == null;
      lastArgsRef.current = args;

      if (isNewWindow && leadingRef.current) {
        // Leading edge fires with the first arguments of the window. Clearing
        // the pending args ensures a lone leading call does not also produce a
        // trailing call.
        lastArgsRef.current = undefined;
        void callbackRef.current(...args);
      } else if (!isNewWindow) {
        // Still inside an active window: restart the timer so it measures from
        // the most recent call.
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = undefined;
        fireTrailing();
      }, delay);
    },
    [delay, fireTrailing]
  );

  React.useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return Object.assign(debouncedCallback, { cancel, flush });
}
