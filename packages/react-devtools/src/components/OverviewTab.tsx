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

import { AnchorButton, Classes, Icon, NonIdealState } from "@blueprintjs/core";
import classNames from "classnames";
import React from "react";

import { useDebuggingTiles } from "../hooks/useDebuggingTiles.js";
import { useOntologyUsage } from "../hooks/useOntologyUsage.js";
import { usePerformanceTiles } from "../hooks/usePerformanceTiles.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { formatNumber, formatTime } from "../utils/format.js";
import { Metric } from "./Metric.js";
import { Metrics } from "./Metrics.js";
import type { MonitoringTab } from "./MonitoringPanel.js";
import { OverviewSection } from "./OverviewSection.js";

import styles from "./MonitoringPanel.module.scss";

const OSDK_DOCS_URL = "https://palantir.github.io/osdk-ts/";

export interface OverviewTabProps {
  monitorStore: MonitorStore;
  /**
   * Switches the panel's active tab. Passed from `MonitoringPanel` so the
   * Overview's counts and metric cards can navigate to the view that explains
   * them.
   */
  setActiveTab: (tab: MonitoringTab) => void;
}

/**
 * The Overview tab — an at-a-glance summary of the monitored client's ontology
 * usage and health metrics. Shows the "no ontology" empty state when the
 * registry is empty; otherwise renders the ontology counts and the performance
 * metrics grid.
 */
export function OverviewTab({
  monitorStore,
  setActiveTab,
}: OverviewTabProps): React.JSX.Element {
  const usage = useOntologyUsage(monitorStore);
  const isOntologyEmpty =
    usage.objectTypeCount +
      usage.actionTypeCount +
      usage.linkCount +
      usage.interfaceCount ===
    0;
  const performance = usePerformanceTiles(monitorStore);
  const debugging = useDebuggingTiles(monitorStore);

  return (
    <div className={styles.overviewTab}>
      <OverviewSection title="Ontology">
        {isOntologyEmpty ? (
          <NonIdealState
            icon="cube"
            title="No ontology usage detected"
            description="We didn't detect any ontology used inside the components of this app."
            action={
              <AnchorButton
                href={OSDK_DOCS_URL}
                target="_blank"
                rel="noreferrer"
                intent="primary"
                endIcon="share"
                variant="outlined"
              >
                View documentation
              </AnchorButton>
            }
          />
        ) : (
          <Metrics columns={2}>
            <Metric title="Object types" value={usage.objectTypeCount} />
            <Metric title="Interfaces" value={usage.interfaceCount} />
            <Metric title="Action types" value={usage.actionTypeCount} />
            <Metric title="Links" value={usage.linkCount} />
          </Metrics>
        )}
      </OverviewSection>
      <OverviewSection title="Metrics">
        <Metrics columns={2}>
          <Metric
            title="Cache hit rate"
            value={
              performance.cacheHitRate == null
                ? null
                : `${Math.round(performance.cacheHitRate * 100)}%`
            }
            intent={
              performance.cacheHitRate == null
                ? "none"
                : performance.cacheHitRate > 0.7
                  ? "success"
                  : performance.cacheHitRate > 0.4
                    ? "warning"
                    : "danger"
            }
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => setActiveTab("performance")}
              >
                View in Performance
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />
          <Metric
            title="Network requests"
            value={
              performance.networkRequests == null
                ? null
                : formatNumber(performance.networkRequests)
            }
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => setActiveTab("performance")}
              >
                View in Performance
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />
          <Metric
            title="Avg response time"
            value={
              performance.averageResponseTime == null
                ? null
                : formatTime(performance.averageResponseTime)
            }
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => setActiveTab("performance")}
              >
                View in Performance
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />
          <Metric
            title="Duplicate requests"
            value={
              performance.duplicateRequests == null
                ? null
                : formatNumber(performance.duplicateRequests)
            }
            intent={
              performance.duplicateRequests != null &&
              performance.duplicateRequests > 0
                ? "danger"
                : "none"
            }
          />
          <Metric
            title="Overfetching"
            value={
              debugging.overfetchingCount == null
                ? null
                : formatNumber(debugging.overfetchingCount)
            }
            intent={
              debugging.overfetchingCount != null &&
              debugging.overfetchingCount > 0
                ? "danger"
                : "none"
            }
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => setActiveTab("debugging")}
              >
                View in Debugging
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />
          <Metric
            title="Errors & warnings"
            value={formatNumber(debugging.errorWarningCount)}
            intent={debugging.errorWarningCount > 0 ? "danger" : "none"}
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => setActiveTab("debugging")}
              >
                View in Debugging
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />
        </Metrics>
      </OverviewSection>
    </div>
  );
}
