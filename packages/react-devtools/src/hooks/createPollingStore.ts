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

export function createPollingStore<T>(
  fetchFn: () => T | Promise<T>,
  intervalMs: number,
): {
  subscribe: (callback: () => void) => () => void;
  getSnapshot: () => T | undefined;
  forceRefresh: () => void;
} {
  let currentValue: T | undefined;
  const listeners = new Set<() => void>();
  let intervalId: ReturnType<typeof setInterval> | null = null;

  function notify(): void {
    for (const listener of listeners) {
      listener();
    }
  }

  function poll(): void {
    try {
      const result = fetchFn();
      if (result instanceof Promise) {
        result.then((value) => {
          currentValue = value;
          notify();
        }).catch(() => {});
      } else {
        currentValue = result;
        notify();
      }
    } catch {
      // ignore polling errors
    }
  }

  // Eagerly fetch initial value at creation time (not during subscribe)
  // so getSnapshot() returns data before the first subscription.
  try {
    const result = fetchFn();
    if (result instanceof Promise) {
      result.then((value) => {
        currentValue = value;
        notify();
      }).catch(() => {});
    } else {
      currentValue = result;
    }
  } catch {
    // ignore initial fetch errors
  }

  function subscribe(callback: () => void): () => void {
    listeners.add(callback);
    if (listeners.size === 1) {
      intervalId = setInterval(poll, intervalMs);
    }
    return () => {
      listeners.delete(callback);
      if (listeners.size === 0 && intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  }

  function getSnapshot(): T | undefined {
    return currentValue;
  }

  function forceRefresh(): void {
    poll();
  }

  return { subscribe, getSnapshot, forceRefresh };
}
