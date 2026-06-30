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

import classNames from "classnames";
import React from "react";

import type { MetricsSnapshot } from "../types/index.js";
import { formatNumber, formatTime } from "../utils/format.js";

import styles from "./MonitoringPanel.module.scss";

export interface CacheMetricsProps {
  metrics: MetricsSnapshot;
}

export const CacheMetrics: React.FC<CacheMetricsProps> = ({ metrics }) => {
  return (
    <>
      <div className={styles.metric}>
        <span className={styles.metricLabel}>Cache Savings</span>
        <span className={classNames(styles.metricValue, styles.success)}>
          {formatNumber(
            metrics.aggregates.cacheHits +
              metrics.aggregates.revalidations +
              metrics.aggregates.deduplications
          )}{" "}
          requests saved
        </span>
        <span className={styles.metricSubtext}>
          {formatNumber(metrics.aggregates.deduplications)} deduped
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Avg Response</span>
        <span className={styles.metricValue}>
          {formatTime(metrics.rates.averageResponseTime)}
        </span>
        <span className={styles.metricSubtext}>
          Cache: {formatTime(metrics.rates.averageCachedResponseTime)}
        </span>
      </div>
    </>
  );
};
