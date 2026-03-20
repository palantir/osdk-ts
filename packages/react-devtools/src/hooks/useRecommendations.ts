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

class RecommendationsStore {
  private state: RecommendationsInternalState = {
    recommendations: [],
    isLoading: true,
    error: null,
  };
  private listeners = new Set<() => void>();
  private unsubscribeMetrics: (() => void) | undefined;
  private debounceTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(private readonly monitorStore: MonitorStore) {}

  subscribe(callback: () => void): () => void {
    this.listeners.add(callback);

    if (this.listeners.size === 1) {
      setTimeout(() => void this.refresh(), 0);
      const metricsStore = this.monitorStore.getMetricsStore();
      this.unsubscribeMetrics = metricsStore.subscribe(() => {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
          void this.refresh();
        }, 1000);
      });
    }

    return () => {
      this.listeners.delete(callback);
      if (this.listeners.size === 0) {
        if (this.unsubscribeMetrics) {
          this.unsubscribeMetrics();
          this.unsubscribeMetrics = undefined;
        }
        clearTimeout(this.debounceTimeout);
      }
    };
  }

  getSnapshot(): RecommendationsInternalState {
    return this.state;
  }

  async refresh(): Promise<void> {
    this.state = { ...this.state, isLoading: true, error: null };
    this.notify();
    try {
      const engine = this.monitorStore.getRecommendationEngine();
      const snapshot = await this.monitorStore.getCacheSnapshot();
      const freshRecommendations = engine.generateRecommendations(snapshot);
      const merged = new Map<string, Recommendation>();
      for (const rec of this.state.recommendations) {
        merged.set(rec.id, rec);
      }
      for (const rec of freshRecommendations) {
        merged.set(rec.id, rec);
      }
      this.state = {
        recommendations: Array.from(merged.values()),
        isLoading: false,
        error: null,
      };
      this.notify();
    } catch (e) {
      this.state = {
        ...this.state,
        isLoading: false,
        error: e instanceof Error ? e : new Error(String(e)),
      };
      this.notify();
    }
  }

  dismiss(id: string): void {
    const engine = this.monitorStore.getRecommendationEngine();
    engine.dismissRecommendation(id);
    this.state = {
      ...this.state,
      recommendations: this.state.recommendations.filter((r) => r.id !== id),
    };
    this.notify();
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export function useRecommendations(
  monitorStore: MonitorStore,
): RecommendationsState {
  const storeRef = React.useRef<RecommendationsStore | null>(null);

  if (storeRef.current == null) {
    storeRef.current = new RecommendationsStore(monitorStore);
  }

  const store = storeRef.current;

  const subscribe = React.useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );

  const getSnapshot = React.useCallback(
    () => store.getSnapshot(),
    [store],
  );

  const state = React.useSyncExternalStore(subscribe, getSnapshot);

  const refresh = React.useCallback(
    () => {
      void store.refresh();
    },
    [store],
  );

  const dismiss = React.useCallback(
    (id: string) => store.dismiss(id),
    [store],
  );

  return {
    recommendations: state.recommendations,
    isLoading: state.isLoading,
    error: state.error,
    refresh,
    dismiss,
  };
}
