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

import { Card } from "@blueprintjs/core";
import React from "react";

import { useCanonicalMetrics } from "../../hooks/useCanonicalMetrics.js";
import type { Metric } from "../../metrics/canonicalMetrics.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import styles from "./OverviewPanel.module.scss";

function formatMetric(m: Metric): string {
  if (!m.ready) {
    return "collecting data…";
  }
  if (m.unit === "requests") {
    return `${Math.round(m.value)}`;
  }
  if (m.unit === "ms") {
    return `${Math.round(m.value)} ms`;
  }
  return `${Math.round(m.value * 100)}%`;
}

interface HeadlineMetricsProps {
  monitorStore: MonitorStore;
}

/**
 * Three headline numbers with cold-start awareness: until enough samples are
 * collected each shows a neutral "collecting data…" instead of an alarming 0%.
 */
export const HeadlineMetrics: React.FC<HeadlineMetricsProps> = ({
  monitorStore,
}) => {
  const metrics = useCanonicalMetrics(monitorStore);
  const stats: Array<{ label: string; metric: Metric }> = [
    { label: "Cache hit rate", metric: metrics.cacheHitRate },
    { label: "Requests saved", metric: metrics.requestsSaved },
    { label: "Optimistic coverage", metric: metrics.optimisticCoverage },
  ];

  return (
    <div className={styles.headline}>
      {stats.map((stat) => (
        <Card key={stat.label} className={styles.statCard}>
          <div
            className={stat.metric.ready ? styles.statValue : styles.statPending}
          >
            {formatMetric(stat.metric)}
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};
