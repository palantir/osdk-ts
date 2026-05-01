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
import { formatNumber } from "../utils/format.js";
import type { UnusedFieldReport } from "../utils/UnusedFieldAnalyzer.js";
import styles from "./MonitoringPanel.module.scss";

export interface ObjectLoadingMetricsProps {
  analysisLoading: boolean;
  unusedFieldReport: UnusedFieldReport | null;
}

export const ObjectLoadingMetrics: React.FC<ObjectLoadingMetricsProps> = ({
  analysisLoading,
  unusedFieldReport,
}) => {
  if (analysisLoading || !unusedFieldReport) {
    return (
      <div className={styles.metric}>
        <span className={styles.metricLabel}>Analyzing...</span>
      </div>
    );
  }

  const efficiencyPercent = ((unusedFieldReport.averageEfficiency ?? 0) * 100)
    .toFixed(0);
  const wasteKb = ((unusedFieldReport.totalWastedBytes ?? 0) / 1024).toFixed(
    1,
  );

  return (
    <>
      <div className={styles.metric}>
        <span className={styles.metricLabel}>Inefficient Components</span>
        <span
          className={classNames(
            styles.metricValue,
            unusedFieldReport.inefficientComponents === 0
              ? styles.success
              : unusedFieldReport.inefficientComponents < 5
              ? styles.warning
              : styles.danger,
          )}
        >
          {formatNumber(unusedFieldReport.inefficientComponents)} of{" "}
          {formatNumber(unusedFieldReport.totalComponents)}
        </span>
        <span className={styles.metricSubtext}>
          {efficiencyPercent}% efficient
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Wasted Bandwidth</span>
        <span className={styles.metricValue}>
          {wasteKb}KB
        </span>
        <span className={styles.metricSubtext}>
          unused fields loaded
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Common Unused</span>
        <span className={styles.metricValue}>
          {formatNumber(unusedFieldReport.commonUnused.length)}
        </span>
        <span className={styles.metricSubtext}>
          fields unused across queries
        </span>
      </div>
    </>
  );
};
