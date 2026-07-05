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

import { NonIdealState, Tag } from "@blueprintjs/core";
import React from "react";

import { useOntologyUsage } from "../hooks/useOntologyUsage.js";
import { usePerformanceTiles } from "../hooks/usePerformanceTiles.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { formatNumber, formatTime } from "../utils/format.js";
import { MetricTile } from "./MetricTile.js";
import type { MonitoringTab } from "./MonitoringPanel.js";
import { OntologyCount } from "./OntologyCount.js";

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
        <section className={styles.metricGroup}>
          <h3 className={styles.metricGroupTitle}>Ontology</h3>
          <div className={styles.metricGroupContent}>
            <OntologyCount
              label="Object types"
              count={usage.objectTypeCount}
              onClick={() => setActiveTab("debugging")}
            />
            <OntologyCount
              label="Interfaces"
              count={usage.interfaceCount}
              onClick={() => setActiveTab("debugging")}
            />
            <OntologyCount
              label="Action types"
              count={usage.actionTypeCount}
              onClick={() => setActiveTab("debugging")}
            />
          </div>
        </section>
      )}
      {!usage.isEmpty && (
        <section className={styles.metricGroup}>
          <h3 className={styles.metricGroupTitle}>Metrics</h3>
          <div className={styles.metricGroupContent}>
            <MetricTile
              label="Cache hit rate"
              value={`${Math.round(performance.cacheHitRate * 100)}%`}
              onClick={() => setActiveTab("performance")}
            />
            <MetricTile
              label="Network requests"
              value={formatNumber(performance.networkRequests)}
              onClick={() => setActiveTab("performance")}
            />
            <MetricTile
              label="Avg response time"
              value={formatTime(performance.averageResponseTime)}
              onClick={() => setActiveTab("performance")}
            />
            <MetricTile
              label="Duplicate requests"
              value={formatNumber(performance.duplicateRequests)}
              onClick={() => setActiveTab("performance")}
            />
          </div>
        </section>
      )}
    </div>
  );
}
