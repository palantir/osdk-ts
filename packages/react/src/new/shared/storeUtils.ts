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
 * Deep structural equality comparison.
 * Handles primitives, arrays, and plain objects recursively.
 */
export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) {
    return true;
  }
  if (a == null || b == null || typeof a !== typeof b) {
    return false;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  if (typeof a === "object") {
    const aObj = a as Record<string, unknown>;
    const bObj = b as Record<string, unknown>;
    const aKeys = Object.keys(aObj);
    const bKeys = Object.keys(bObj);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key of aKeys) {
      if (
        !Object.prototype.hasOwnProperty.call(bObj, key)
        || !deepEqual(aObj[key], bObj[key])
      ) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * React hook that returns a referentially stable value when structurally equal.
 * Prevents unnecessary re-renders for config objects that are recreated each render.
 */
export function useStableValue<T>(value: T): T {
  const ref = React.useRef(value);
  if (!deepEqual(ref.current, value)) {
    ref.current = value;
  }
  return ref.current;
}

/**
 * Creates version-based snapshot caching for useSyncExternalStore.
 * Ensures referential stability when snapshot data hasn't changed.
 */
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
      if (cachedSnapshot && snapshotVersion === version) {
        return cachedSnapshot;
      }
      cachedSnapshot = builder();
      snapshotVersion = version;
      return cachedSnapshot;
    },
  };
}

/**
 * Creates batched notification system for store subscribers.
 * Deduplicates notifications within a microtask to reduce UI thrashing.
 */
export function createNotifier(subscribers: Set<() => void>) {
  let notificationPending = false;

  return function notifySubscribers(): void {
    if (notificationPending) return;
    notificationPending = true;
    queueMicrotask(() => {
      notificationPending = false;
      for (const notify of subscribers) {
        notify();
      }
    });
  };
}

/**
 * Creates a subscription function with StrictMode guard.
 * Defers initialization to comply with useSyncExternalStore contract.
 */
export function createSubscribeFunction(
  subscribers: Set<() => void>,
  onFirstSubscribe: () => (() => void) | void,
): (notifyUpdate: () => void) => () => void {
  return (notifyUpdate: () => void): () => void => {
    subscribers.add(notifyUpdate);

    let isSubscribed = true;
    queueMicrotask(() => {
      if (!isSubscribed) return;
      onFirstSubscribe();
    });

    return () => {
      isSubscribed = false;
      subscribers.delete(notifyUpdate);
    };
  };
}

/**
 * Wraps an unknown error into an Error instance.
 */
export function wrapError(err: unknown): Error {
  return err instanceof Error ? err : new Error(String(err));
}

/**
 * Creates a notifier that also invalidates a cache.
 * Common pattern for stores that need cache invalidation on every notification.
 */
export function createCachingNotifier<T>(
  subscribers: Set<() => void>,
  cache: ReturnType<typeof createVersionedCache<T>>,
): () => void {
  const notifyRaw = createNotifier(subscribers);
  return function notify(): void {
    cache.invalidate();
    notifyRaw();
  };
}

/**
 * Creates subscribe/unsubscribe function with cleanup callback.
 * Handles the full lifecycle including cleanup on last unsubscribe.
 */
export function createStoreSubscribe(
  subscribers: Set<() => void>,
  onInit: () => void,
  onCleanup: () => void,
): (notifyUpdate: () => void) => () => void {
  return (notifyUpdate: () => void): () => void => {
    subscribers.add(notifyUpdate);

    let isSubscribed = true;
    queueMicrotask(() => {
      if (!isSubscribed) return;
      onInit();
    });

    return () => {
      isSubscribed = false;
      subscribers.delete(notifyUpdate);
      if (subscribers.size === 0) {
        onCleanup();
      }
    };
  };
}
