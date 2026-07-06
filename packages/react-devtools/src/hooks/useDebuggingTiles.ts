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

import type { MonitorStore } from "../store/MonitorStore.js";
import { useErrorWarningCount } from "./useErrorWarningCount.js";
import { useUnusedFieldAnalysis } from "./useUnusedFieldAnalysis.js";

export interface DebuggingTiles {
  /**
   * Components requesting fields they never read (unused-field report's
   * inefficient-component count). `null` when no report has been produced yet
   * (no components analyzed), so the Overview renders "N/A".
   */
  overfetchingCount: number | null;
  /** Live count of window errors plus console `error`/`warn` entries. */
  errorWarningCount: number;
}

/**
 * Derives the Overview's Debugging-sourced tiles: overfetching from the
 * unused-field analysis and a combined errors-and-warnings count from the
 * window-error and console-log stores.
 */
export function useDebuggingTiles(monitorStore: MonitorStore): DebuggingTiles {
  const { report } = useUnusedFieldAnalysis(monitorStore);
  const errorWarningCount = useErrorWarningCount(monitorStore);
  return {
    overfetchingCount: report != null ? report.inefficientComponents : null,
    errorWarningCount,
  };
}
