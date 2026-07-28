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

import { useCallback, useMemo, useSyncExternalStore } from "react";

import type { ClientMetrics } from "../metrics/clientMetrics.js";
import { getClientMetrics } from "../metrics/clientMetrics.js";
import type { MonitorStore } from "../store/MonitorStore.js";

/**
 * Subscribes to the metrics store and returns the full {@link ClientMetrics}
 * set, recomputed whenever any metric changes. It is meant for a single surface
 * that renders these metrics together (the Overview tab), where re-rendering the
 * whole group on any change is expected. If a consumer ever needs one metric in
 * isolation (without re-rendering when unrelated metrics change), add a selector
 * overload here rather than reading a single field off the full result.
 */
export function useClientMetrics(monitorStore: MonitorStore): ClientMetrics {
  const store = monitorStore.getMetricsStore();
  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store]
  );
  const getSnapshot = useCallback(() => store.getSnapshot(), [store]);
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return useMemo(() => getClientMetrics(snapshot), [snapshot]);
}
