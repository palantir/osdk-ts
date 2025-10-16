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
 * Creates a debounced version of a callback function.
 *
 * @param callback The function to debounce
 * @param delay The delay in milliseconds
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
): DebouncedCallback<TArgs> {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = React.useRef(callback);
  const lastArgsRef = React.useRef<TArgs>();

  callbackRef.current = callback;

  const cancel = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const flush = React.useCallback(() => {
    if (timeoutRef.current && lastArgsRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
      void callbackRef.current(...lastArgsRef.current);
    }
  }, []);

  const debouncedCallback = React.useCallback(
    (...args: TArgs) => {
      lastArgsRef.current = args;
      cancel();
      timeoutRef.current = setTimeout(() => {
        void callbackRef.current(...args);
      }, delay);
    },
    [delay, cancel],
  ) as DebouncedCallback<TArgs>;

  debouncedCallback.cancel = cancel;
  debouncedCallback.flush = flush;

  React.useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return debouncedCallback;
}
