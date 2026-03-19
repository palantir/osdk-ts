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

export function useTimeElapsed(
  startTime: Date | undefined,
): number | undefined {
  const startMs = startTime?.getTime();

  const subscribe = React.useCallback(
    (callback: () => void) => {
      if (startMs == null) {
        return () => {};
      }

      const intervalId = setInterval(callback, 1000);
      return () => {
        clearInterval(intervalId);
      };
    },
    [startMs],
  );

  const getSnapshot = React.useCallback(
    (): number | undefined => {
      if (startMs == null) {
        return undefined;
      }
      return Date.now() - startMs;
    },
    [startMs],
  );

  return React.useSyncExternalStore(subscribe, getSnapshot);
}
