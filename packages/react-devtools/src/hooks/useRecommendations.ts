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

interface RecommendationsInternalState {
  recommendations: Recommendation[];
  isLoading: boolean;
  error: Error | null;
}

export function useRecommendations(
  monitorStore: MonitorStore,
): RecommendationsState {
  const [state, setState] = useState<RecommendationsInternalState>({
    recommendations: [],
    isLoading: true,
    error: null,
  });

  const refresh = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const engine = monitorStore.getRecommendationEngine();
      const snapshot = await monitorStore.getCacheSnapshot();
      const freshRecommendations = engine.generateRecommendations(snapshot);
      setState(prev => {
        const merged = new Map<string, Recommendation>();
        for (const rec of prev.recommendations) {
          merged.set(rec.id, rec);
        }
        for (const rec of freshRecommendations) {
          merged.set(rec.id, rec);
        }
        return {
          recommendations: Array.from(merged.values()),
          isLoading: false,
          error: null,
        };
      });
    } catch (e) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: e instanceof Error ? e : new Error(String(e)),
      }));
    }
  }, [monitorStore]);

  const dismiss = useCallback(
    (id: string) => {
      const engine = monitorStore.getRecommendationEngine();
      engine.dismissRecommendation(id);
      setState(prev => ({
        ...prev,
        recommendations: prev.recommendations.filter((r) => r.id !== id),
      }));
    },
    [monitorStore],
  );

  useEffect(() => {
    void refresh();

    const metricsStore = monitorStore.getMetricsStore();
    let timeoutId: ReturnType<typeof setTimeout>;

    const unsubscribe = metricsStore.subscribe(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(refresh, 1000);
    });

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [monitorStore, refresh]);

  return {
    recommendations: state.recommendations,
    isLoading: state.isLoading,
    error: state.error,
    refresh,
    dismiss,
  };
}
