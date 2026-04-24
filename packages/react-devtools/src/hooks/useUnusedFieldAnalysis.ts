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
import {
  UnusedFieldAnalyzer,
  type UnusedFieldReport,
} from "../utils/UnusedFieldAnalyzer.js";

export interface UnusedFieldAnalysisState {
  report: UnusedFieldReport | null;
  isLoading: boolean;
  error: Error | null;
}

class AnalysisStore {
  private state: UnusedFieldAnalysisState = {
    report: null,
    isLoading: true,
    error: null,
  };
  private listeners = new Set<() => void>();
  private intervalId: ReturnType<typeof setInterval> | undefined;
  private isAnalyzing = false;

  constructor(
    private readonly monitorStore: MonitorStore,
    private readonly updateIntervalMs: number,
  ) {}

  subscribe(callback: () => void): () => void {
    this.listeners.add(callback);

    if (this.listeners.size === 1) {
      setTimeout(() => void this.analyze(), 0);
      this.intervalId = setInterval(() => {
        void this.analyze();
      }, this.updateIntervalMs);
    }

    return () => {
      this.listeners.delete(callback);
      if (this.listeners.size === 0 && this.intervalId !== undefined) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
    };
  }

  getSnapshot(): UnusedFieldAnalysisState {
    return this.state;
  }

  private async analyze(): Promise<void> {
    if (this.isAnalyzing) {
      return;
    }
    this.isAnalyzing = true;

    try {
      this.state = { ...this.state, isLoading: true };
      this.notify();

      const registry = this.monitorStore.getComponentRegistry();
      const propertyTracker = this.monitorStore.getPropertyAccessTracker();
      const cacheSnapshot = await this.monitorStore.getCacheSnapshot();

      const analyzer = new UnusedFieldAnalyzer(
        registry,
        propertyTracker,
      );

      const report = analyzer.generateGlobalReport(cacheSnapshot);

      this.state = {
        report,
        isLoading: false,
        error: null,
      };
      this.notify();
    } catch (error) {
      this.state = {
        report: null,
        isLoading: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
      this.notify();
    } finally {
      this.isAnalyzing = false;
    }
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export function useUnusedFieldAnalysis(
  monitorStore: MonitorStore,
  updateIntervalMs: number = 2000,
): UnusedFieldAnalysisState {
  const storeRef = React.useRef<AnalysisStore | null>(null);

  if (
    storeRef.current == null
  ) {
    storeRef.current = new AnalysisStore(monitorStore, updateIntervalMs);
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

  return React.useSyncExternalStore(subscribe, getSnapshot);
}
