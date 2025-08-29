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

/**
 * Custom hook for managing AbortController lifecycle.
 * Automatically aborts any existing controller when creating a new one,
 * and cleans up on unmount.
 *
 * @returns Object containing:
 * - getNewController: Function that aborts existing controller and returns a new one
 * - abortControllerRef: Ref to the current AbortController instance
 */
export function useAbortController(): {
  getNewController: () => AbortController;
  abortControllerRef: React.MutableRefObject<AbortController | null>;
} {
  const abortControllerRef = React.useRef<AbortController | null>(null);

  const getNewController = React.useCallback(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();
    return abortControllerRef.current;
  }, []);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => abortControllerRef.current?.abort();
  }, []);

  return { getNewController, abortControllerRef };
}
