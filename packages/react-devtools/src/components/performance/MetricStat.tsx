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

import { Icon, Tooltip } from "@blueprintjs/core";
import React from "react";

import type { Metric } from "../../metrics/canonicalMetrics.js";
import styles from "./PerformancePanel.module.scss";

function formatMetricValue(metric: Metric): string {
  if (!metric.ready) {
    return "collecting data…";
  }
  if (metric.unit === "requests") {
    return `${Math.round(metric.value)}`;
  }
  if (metric.unit === "ms") {
    return `${Math.round(metric.value)} ms`;
  }
  return `${Math.round(metric.value * 100)}%`;
}

interface MetricStatProps {
  label: string;
  metric: Metric;
  /** Plain-language explanation shown on the info tooltip (progressive disclosure). */
  explain: string;
}

/**
 * A single headline metric with a progressive-disclosure tooltip for the jargon
 * and a neutral "collecting data…" state until enough samples exist.
 */
export const MetricStat: React.FC<MetricStatProps> = ({
  label,
  metric,
  explain,
}) => {
  return (
    <div className={styles.metricStat}>
      <div className={styles.metricStatHead}>
        <span className={styles.metricStatLabel}>{label}</span>
        <Tooltip content={explain} className={styles.metricStatInfo}>
          <Icon icon="info-sign" size={11} />
        </Tooltip>
      </div>
      <div
        className={metric.ready
          ? styles.metricStatValue
          : styles.metricStatPending}
      >
        {formatMetricValue(metric)}
      </div>
    </div>
  );
};
