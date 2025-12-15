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
import type {
  ActionImpactGraph,
  ActionImpactTracker,
} from "../utils/ActionImpactTracker.js";

export interface UseActionImpactOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
  limit?: number;
}

export interface UseActionImpactResult {
  actionGraphs: ActionImpactGraph[];
  getActionGraph: (actionId: string) => ActionImpactGraph | undefined;
  refresh: () => void;
}

/**
 * React hook to access action impact tracking data.
 * Provides real-time updates of action execution graphs showing
 * optimistic updates, network calls, refetches, and renders.
 *
 * @param tracker The ActionImpactTracker instance
 * @param options Configuration options
 * @returns Action impact data and utilities
 */
export function useActionImpact(
  tracker: ActionImpactTracker | null,
  options: UseActionImpactOptions = {},
): UseActionImpactResult {
  const {
    autoRefresh = true,
    refreshInterval = 1000,
    limit = 10,
  } = options;

  const [actionGraphs, setActionGraphs] = useState<ActionImpactGraph[]>([]);

  const refresh = () => {
    if (!tracker) {
      setActionGraphs([]);
      return;
    }

    const graphs = tracker.getRecentActionGraphs(limit);
    setActionGraphs(graphs);
  };

  const getActionGraph = (actionId: string): ActionImpactGraph | undefined => {
    if (!tracker) return undefined;
    return tracker.getActionGraph(actionId);
  };

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
  }, [tracker, autoRefresh, refreshInterval, limit]);

  return {
    actionGraphs,
    getActionGraph,
    refresh,
  };
}
