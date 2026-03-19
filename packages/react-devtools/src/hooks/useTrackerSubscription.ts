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

interface Subscribable {
  subscribe(cb: () => void): () => void;
}

export interface TrackerSubscriptionOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
  limit?: number;
}

export function useTrackerSubscription<TTracker extends Subscribable, TData>(
  tracker: TTracker | null,
  getData: (tracker: TTracker, limit: number) => TData,
  emptyData: TData,
  options: TrackerSubscriptionOptions = {},
): { data: TData; refresh: () => void } {
  const {
    autoRefresh = true,
    refreshInterval = 1000,
    limit = 10,
  } = options;

  const getDataRef = React.useRef(getData);
  const emptyDataRef = React.useRef(emptyData);
  getDataRef.current = getData;
  emptyDataRef.current = emptyData;

  const storeRef = React.useRef<
    {
      data: TData;
      listeners: Set<() => void>;
    } | null
  >(null);

  if (storeRef.current == null) {
    storeRef.current = {
      data: tracker ? getData(tracker, limit) : emptyData,
      listeners: new Set(),
    };
  }

  const subscribe = React.useCallback(
    (callback: () => void) => {
      const store = storeRef.current;
      if (store == null) {
        return () => {};
      }
      store.listeners.add(callback);

      const doRefresh = () => {
        if (store == null) {
          return;
        }
        if (tracker) {
          store.data = getDataRef.current(tracker, limit);
        } else {
          store.data = emptyDataRef.current;
        }
        for (const listener of store.listeners) {
          listener();
        }
      };

      doRefresh();

      let unsubscribeTracker: (() => void) | undefined;
      let intervalId: ReturnType<typeof setInterval> | undefined;

      if (tracker && autoRefresh) {
        unsubscribeTracker = tracker.subscribe(doRefresh);
        intervalId = setInterval(doRefresh, refreshInterval);
      }

      return () => {
        store.listeners.delete(callback);
        if (unsubscribeTracker) {
          unsubscribeTracker();
        }
        if (intervalId !== undefined) {
          clearInterval(intervalId);
        }
      };
    },
    [tracker, autoRefresh, refreshInterval, limit],
  );

  const getSnapshot = React.useCallback(
    (): TData => {
      if (storeRef.current == null) {
        return emptyData;
      }
      return storeRef.current.data;
    },
    [emptyData],
  );

  const data = React.useSyncExternalStore(subscribe, getSnapshot);

  const refresh = React.useCallback(() => {
    const store = storeRef.current;
    if (store == null) {
      return;
    }
    if (tracker) {
      store.data = getDataRef.current(tracker, limit);
    } else {
      store.data = emptyDataRef.current;
    }
    for (const listener of store.listeners) {
      listener();
    }
  }, [tracker, limit]);

  return { data, refresh };
}
