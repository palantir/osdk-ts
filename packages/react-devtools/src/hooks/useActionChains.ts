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
  ActionChain,
  ActionChainTracker,
} from "../utils/ActionChainTracker.js";

export interface UseActionChainsOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
  limit?: number;
}

export interface UseActionChainsResult {
  chains: ActionChain[];
  circularChains: ActionChain[];
  getChain: (chainId: string) => ActionChain | undefined;
  getChainsContainingAction: (actionId: string) => ActionChain[];
  refresh: () => void;
}

/**
 * React hook to access action chain tracking data.
 * Provides real-time updates of cascading actions showing
 * parent-child relationships and circular loops.
 *
 * @param tracker The ActionChainTracker instance
 * @param options Configuration options
 * @returns Action chain data and utilities
 */
export function useActionChains(
  tracker: ActionChainTracker | null,
  options: UseActionChainsOptions = {},
): UseActionChainsResult {
  const {
    autoRefresh = true,
    refreshInterval = 1000,
    limit = 10,
  } = options;

  const [chains, setChains] = useState<ActionChain[]>([]);
  const [circularChains, setCircularChains] = useState<ActionChain[]>([]);

  const refresh = () => {
    if (!tracker) {
      setChains([]);
      setCircularChains([]);
      return;
    }

    const allChains = tracker.getRecentChains(limit);
    setChains(allChains);
    setCircularChains(allChains.filter((c) => c.isCircular));
  };

  const getChain = (chainId: string): ActionChain | undefined => {
    if (!tracker) return undefined;
    return tracker.getChain(chainId);
  };

  const getChainsContainingAction = (actionId: string): ActionChain[] => {
    if (!tracker) return [];
    return tracker.getChainsContainingAction(actionId);
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
    chains,
    circularChains,
    getChain,
    getChainsContainingAction,
    refresh,
  };
}
