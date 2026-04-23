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

import deepEqual from "fast-deep-equal";
import React from "react";

export function useStableValue<T>(value: T): T {
  const ref = React.useRef(value);
  if (!deepEqual(ref.current, value)) {
    ref.current = value;
  }
  return ref.current;
}

export function createVersionedCache<T>() {
  let version = 0;
  let cachedSnapshot: T | null = null;
  let snapshotVersion = -1;

  return {
    invalidate(): void {
      version++;
      cachedSnapshot = null;
    },
    get(builder: () => T): T {
      if (cachedSnapshot != null && snapshotVersion === version) {
        return cachedSnapshot;
      }
      cachedSnapshot = builder();
      snapshotVersion = version;
      return cachedSnapshot;
    },
  };
}

export function wrapError(err: unknown): Error {
  return err instanceof Error ? err : new Error(String(err));
}

export function createCachingNotifier<T>(
  subscribers: Set<() => void>,
  cache: ReturnType<typeof createVersionedCache<T>>,
): () => void {
  return function notify(): void {
    cache.invalidate();
    for (const cb of subscribers) {
      cb();
    }
  };
}

export function createStoreSubscribe(
  subscribers: Set<() => void>,
  onInit: () => void,
  onCleanup: () => void,
): (notifyUpdate: () => void) => () => void {
  return (notifyUpdate: () => void): () => void => {
    const shouldInit = subscribers.size === 0;
    subscribers.add(notifyUpdate);

    if (shouldInit) {
      onInit();
    }

    return () => {
      subscribers.delete(notifyUpdate);
      if (subscribers.size === 0) {
        onCleanup();
      }
    };
  };
}
