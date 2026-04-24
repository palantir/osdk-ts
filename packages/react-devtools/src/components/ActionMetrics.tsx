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

const ROLLBACK_EXCELLENT = 0.1;
const ROLLBACK_ACCEPTABLE = 0.25;

export interface ActionMetricsProps {
  metrics: MetricsSnapshot;
}

export const ActionMetrics: React.FC<ActionMetricsProps> = ({ metrics }) => {
  const totalActions = metrics.aggregates.actionCount;
  const configuredActions = metrics.aggregates.configuredOptimisticActionCount;
  const observedOptimisticActions = metrics.aggregates.optimisticActionCount;
  const totalTimeSaved = metrics.aggregates.totalPerceivedSpeedup;
  const avgTimeSaved = observedOptimisticActions > 0
    ? totalTimeSaved / observedOptimisticActions
    : 0;
  const adoptionRate = metrics.rates.configuredOptimisticActionRate;
  const effectiveness = configuredActions > 0
    ? observedOptimisticActions / configuredActions
    : 0;
  const avgServerLatency = metrics.rates.averageServerRoundTripTime;
  const avgOptimisticLatency = metrics.rates.averageOptimisticRenderTime;
  const rollbackRate = metrics.rates.rollbackRate;
  const validations = metrics.aggregates.validationCount;
  const avgValidationTime = metrics.rates.averageValidationTime;
  const validationSavings = metrics.rates.validationTimeSaved;
  const waitingForOptimism = configuredActions > 0
    && observedOptimisticActions === 0;

  return (
    <>
      <div className={styles.metric}>
        <span className={styles.metricLabel}>Time Saved (Optimistic)</span>
        <span className={styles.metricValue}>
          {observedOptimisticActions > 0
            ? formatTime(avgTimeSaved)
            : "\u2014"}
        </span>
        <span className={styles.metricSubtext}>
          {observedOptimisticActions > 0
            ? `Total ${formatTime(totalTimeSaved)} across ${
              formatNumber(observedOptimisticActions)
            } actions`
            : waitingForOptimism
            ? "Optimistic handlers have not emitted yet"
            : "No optimistic handlers observed"}
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Optimistic Adoption</span>
        <span className={styles.metricValue}>
          {totalActions > 0 ? `${(adoptionRate * 100).toFixed(0)}%` : "\u2014"}
        </span>
        <span className={styles.metricSubtext}>
          {formatNumber(configuredActions)} / {formatNumber(totalActions)}{" "}
          actions
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Optimistic Effectiveness</span>
        <span className={styles.metricValue}>
          {configuredActions > 0
            ? `${(effectiveness * 100).toFixed(0)}%`
            : "\u2014"}
        </span>
        <span className={styles.metricSubtext}>
          {configuredActions > 0
            ? `${formatNumber(observedOptimisticActions)} emitted`
            : "No optimistic handlers"}
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Server Latency</span>
        <span className={styles.metricValue}>
          {formatTime(avgServerLatency)}
        </span>
        <span className={styles.metricSubtext}>
          Optimistic {observedOptimisticActions > 0
            ? formatTime(avgOptimisticLatency)
            : "\u2014"}
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Rollback Rate</span>
        <span
          className={classNames(
            styles.metricValue,
            rollbackRate <= ROLLBACK_EXCELLENT
              ? styles.success
              : rollbackRate <= ROLLBACK_ACCEPTABLE
              ? styles.warning
              : styles.danger,
          )}
        >
          {totalActions > 0
            ? `${(rollbackRate * 100).toFixed(0)}%`
            : "\u2014"}
        </span>
        <span className={styles.metricSubtext}>
          {formatNumber(metrics.aggregates.rollbackActionCount)} rollbacks
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Validation</span>
        <span className={styles.metricValue}>
          {validations > 0 ? formatTime(avgValidationTime) : "\u2014"}
        </span>
        <span className={styles.metricSubtext}>
          {validations > 0
            ? `${formatNumber(validations)} validations \u00b7 saved ${
              formatTime(validationSavings)
            }`
            : "No validations run"}
        </span>
      </div>
    </>
  );
};
