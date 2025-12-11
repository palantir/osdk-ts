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

import { useCallback, useEffect, useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";

export interface RecommendationsState {
  recommendations: Recommendation[];
  isLoading: boolean;
  error: Error | null;
  refresh: () => void;
  dismiss: (id: string) => void;
}

export function useRecommendations(
  monitorStore: MonitorStore,
): RecommendationsState {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const engine = monitorStore.getRecommendationEngine();
      const snapshot = await monitorStore.getCacheSnapshot();
      const newRecommendations = engine.generateRecommendations(snapshot);
      setRecommendations(newRecommendations);
    } catch (e) {
      setError(e instanceof Error ? e : new Error(String(e)));
    } finally {
      setIsLoading(false);
    }
  }, [monitorStore]);

  const dismiss = useCallback(
    (id: string) => {
      const engine = monitorStore.getRecommendationEngine();
      engine.dismissRecommendation(id);
      setRecommendations((prev) => prev.filter((r) => r.id !== id));
    },
    [monitorStore],
  );

  useEffect(() => {
    void refresh();

    const metricsStore = monitorStore.getMetricsStore();
    let timeoutId: ReturnType<typeof setTimeout>;

    const unsubscribe = metricsStore.subscribe(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(refresh, 2000);
    });

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [monitorStore, refresh]);

  return { recommendations, isLoading, error, refresh, dismiss };
}
