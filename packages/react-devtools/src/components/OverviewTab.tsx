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

import { Classes, Icon, NonIdealState, Tag } from "@blueprintjs/core";
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

const OSDK_DOCS_URL =
  "https://www.palantir.com/docs/foundry/ontology-sdk/overview";

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
  const performance = usePerformanceTiles(monitorStore);
  const debugging = useDebuggingTiles(monitorStore);

  return (
    <div className={styles.overviewTab}>
      {usage.isEmpty ? (
        <NonIdealState
          icon="cube"
          title="No ontology linked"
          description={
            <>
              This app has not referenced any ontology yet. See the{" "}
              <a href={OSDK_DOCS_URL} target="_blank" rel="noreferrer">
                OSDK docs
              </a>{" "}
              to connect your app to an ontology.
            </>
          }
          action={<Tag intent="danger">No ontology found</Tag>}
        />
      ) : (
        <OverviewSection title="Ontology">
          <Metrics columns={2}>
            <Metric title="Object types" value={usage.objectTypeCount} />
            <Metric title="Interfaces" value={usage.interfaceCount} />
            <Metric title="Action types" value={usage.actionTypeCount} />
            <Metric title="Links" value={usage.linkCount} />
          </Metrics>
        </OverviewSection>
      )}
      {!usage.isEmpty && (
        <OverviewSection title="Metrics">
          <Metrics columns={2}>
            <Metric
              title="Cache hit rate"
              value={`${Math.round(performance.cacheHitRate * 100)}%`}
              intent={
                performance.cacheHitRate > 0.7
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
              value={formatNumber(performance.networkRequests)}
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
              value={formatTime(performance.averageResponseTime)}
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
              value={formatNumber(performance.duplicateRequests)}
              intent={performance.duplicateRequests > 0 ? "danger" : "none"}
            />
            <Metric
              title="Overfetching"
              value={formatNumber(debugging.overfetchingCount)}
              intent={debugging.overfetchingCount > 0 ? "danger" : "none"}
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
      )}
    </div>
  );
}
