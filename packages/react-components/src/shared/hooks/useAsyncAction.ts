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

import { useCallback, useState } from "react";
import { useIsMounted } from "./useIsMounted.js";

interface AsyncActionState<Args extends unknown[]> {
  isPending: boolean;
  error: unknown;
  execute: (...args: Args) => Promise<void>;
  clearError: () => void;
}

/**
 * Wraps an async callback with pending and error state tracking.
 *
 * - `isPending` is true while the action is executing
 * - `error` holds the error from the last rejection (cleared on next execute or via clearError)
 * - `execute` calls the action with pending/error bookkeeping
 * - `clearError` resets the error to undefined
 */
export function useAsyncAction<Args extends unknown[]>(
  action: (...args: Args) => Promise<void> | void,
): AsyncActionState<Args> {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<unknown>(undefined);

  const isMountedRef = useIsMounted();

  const execute = useCallback(
    async (...args: Args) => {
      setError(undefined);
      setIsPending(true);
      try {
        await action(...args);
      } catch (err) {
        if (isMountedRef.current) {
          setError(err);
        }
      } finally {
        if (isMountedRef.current) {
          setIsPending(false);
        }
      }
    },
    [action, isMountedRef],
  );

  const clearError = useCallback(() => {
    setError(undefined);
  }, []);

  return { isPending, error, execute, clearError };
}
