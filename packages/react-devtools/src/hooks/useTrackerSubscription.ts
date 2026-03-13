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

import { useCallback, useEffect, useRef, useState } from "react";

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

  const [data, setData] = useState<TData>(emptyData);

  const getDataRef = useRef(getData);
  const emptyDataRef = useRef(emptyData);
  getDataRef.current = getData;
  emptyDataRef.current = emptyData;

  const refresh = useCallback(() => {
    if (!tracker) {
      setData(emptyDataRef.current);
      return;
    }
    setData(getDataRef.current(tracker, limit));
  }, [tracker, limit]);

  useEffect(() => {
    refresh();

    if (!tracker || !autoRefresh) {
      return;
    }

    const unsubscribe = tracker.subscribe(() => {
      refresh();
    });

    const intervalId = setInterval(refresh, refreshInterval);

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, [tracker, autoRefresh, refreshInterval, limit, refresh]);

  return { data, refresh };
}
