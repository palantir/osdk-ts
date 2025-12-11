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

import { useEffect, useState } from "react";
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

export function useUnusedFieldAnalysis(
  monitorStore: MonitorStore,
  updateIntervalMs: number = 2000,
): UnusedFieldAnalysisState {
  const [state, setState] = useState<UnusedFieldAnalysisState>({
    report: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;
    let isAnalyzing = false;

    const analyze = async () => {
      if (isAnalyzing) return;
      isAnalyzing = true;

      try {
        setState(prev => ({ ...prev, isLoading: true }));

        const registry = monitorStore.getComponentRegistry();
        const propertyTracker = monitorStore.getPropertyAccessTracker();
        const cacheSnapshot = await monitorStore.getCacheSnapshot();

        const analyzer = new UnusedFieldAnalyzer(
          registry,
          propertyTracker,
        );

        const report = analyzer.generateGlobalReport(cacheSnapshot);

        if (mounted) {
          setState({
            report,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        if (mounted) {
          setState({
            report: null,
            isLoading: false,
            error: error instanceof Error ? error : new Error(String(error)),
          });
        }
      } finally {
        isAnalyzing = false;
      }
    };

    void analyze();
    const interval = setInterval(() => {
      void analyze();
    }, updateIntervalMs);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [monitorStore, updateIntervalMs]);

  return state;
}
