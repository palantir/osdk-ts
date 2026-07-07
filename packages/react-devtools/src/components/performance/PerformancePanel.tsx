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

import { useClientMetrics } from "../../hooks/useClientMetrics.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import { MetricStat } from "./MetricStat.js";
import { OperationsList } from "./OperationsList.js";
import { RecommendationsList } from "./RecommendationsList.js";

import styles from "./PerformancePanel.module.scss";

const EXPLAIN = {
  cacheHitRate:
    "Share of data requests served from cache (a stale-while-revalidate counts as a hit) instead of the network. Higher is better.",
  requestsSaved:
    "Network requests the cache avoided: cache hits + revalidations + deduplications.",
  avgResponse:
    "Average time to resolve a data request, across both cache and network.",
  optimisticCoverage:
    "Share of actions that showed an optimistic update before the server responded.",
  rollbackRate:
    "Share of actions whose optimistic update had to roll back after the server rejected it. Lower is better.",
};

interface PerformancePanelProps {
  monitorStore: MonitorStore;
}

export const PerformancePanel: React.FC<PerformancePanelProps> = ({
  monitorStore,
}) => {
  const metrics = useClientMetrics(monitorStore);

  return (
    <div className={styles.panel}>
      <div className={styles.metricsRow}>
        <MetricStat
          label="Cache hit rate"
          metric={metrics.cacheHitRate}
          explain={EXPLAIN.cacheHitRate}
        />
        <MetricStat
          label="Requests saved"
          metric={metrics.requestsSaved}
          explain={EXPLAIN.requestsSaved}
        />
        <MetricStat
          label="Avg response"
          metric={metrics.avgResponseMs}
          explain={EXPLAIN.avgResponse}
        />
        <MetricStat
          label="Optimistic coverage"
          metric={metrics.optimisticCoverage}
          explain={EXPLAIN.optimisticCoverage}
        />
        <MetricStat
          label="Rollback rate"
          metric={metrics.rollbackRate}
          explain={EXPLAIN.rollbackRate}
        />
      </div>
      <RecommendationsList monitorStore={monitorStore} />
      <OperationsList monitorStore={monitorStore} />
    </div>
  );
};
