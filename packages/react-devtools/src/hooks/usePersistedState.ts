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

function readFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const storeRef = React.useRef<
    {
      key: string;
      value: T;
      listeners: Set<() => void>;
    } | null
  >(null);

  if (storeRef.current == null || storeRef.current.key !== key) {
    storeRef.current = {
      key,
      value: readFromStorage(key, defaultValue),
      listeners: storeRef.current?.listeners ?? new Set(),
    };
  }

  const subscribe = React.useCallback(
    (callback: () => void) => {
      const store = storeRef.current;
      if (store == null) {
        return () => {};
      }
      store.listeners.add(callback);

      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === key && e.newValue && store != null) {
          try {
            store.value = JSON.parse(e.newValue);
            for (const listener of store.listeners) {
              listener();
            }
          } catch {
          }
        }
      };

      if (typeof window !== "undefined") {
        window.addEventListener("storage", handleStorageChange);
      }

      return () => {
        store.listeners.delete(callback);
        if (typeof window !== "undefined") {
          window.removeEventListener("storage", handleStorageChange);
        }
      };
    },
    [key],
  );

  const getSnapshot = React.useCallback(
    (): T => {
      if (storeRef.current == null) {
        return defaultValue;
      }
      return storeRef.current.value;
    },
    [defaultValue],
  );

  const value = React.useSyncExternalStore(subscribe, getSnapshot);

  const setPersistedValue = React.useCallback(
    (newValue: T | ((prev: T) => T)) => {
      const store = storeRef.current;
      if (store == null) {
        return;
      }

      const resolvedValue = typeof newValue === "function"
        ? (newValue as (prev: T) => T)(store.value)
        : newValue;

      store.value = resolvedValue;

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(key, JSON.stringify(resolvedValue));
        } catch {
        }
      }

      for (const listener of store.listeners) {
        listener();
      }
    },
    [key],
  );

  return [value, setPersistedValue];
}
