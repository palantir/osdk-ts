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
import React, { useMemo } from "react";

import { useClientMetrics } from "../hooks/useClientMetrics.js";
import { useComponentOntology } from "../hooks/useComponentOntology.js";
import { useConsoleLogs } from "../hooks/useConsoleLogs.js";
import { useUnusedFieldAnalysis } from "../hooks/useUnusedFieldAnalysis.js";
import { formatMetric } from "../metrics/clientMetrics.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { DevtoolsTabId } from "./components/devtoolsTabId.js";
import { Metric } from "./Metric.js";
import { MetricLegend } from "./MetricLegend.js";
import type { MetricLegendEntry } from "./MetricLegend.js";
import { Metrics } from "./Metrics.js";
import { OverviewSection } from "./OverviewSection.js";
import { RecommendationsList } from "./RecommendationsList.js";

import styles from "./OverviewTab.module.scss";

/**
 * Link to the osdk/react pages instead of the public docs since they contain more examples
 */
const OSDK_DOCS_URL = "https://palantir.github.io/osdk-ts/";

export interface OverviewTabProps {
  monitorStore: MonitorStore;
  /**
   * Switches the panel's active tab.
   */
  onNavigateToTab: (tab: DevtoolsTabId) => void;
}

/**
 * Color key shared by the count metrics where any occurrence is a problem — a
 * positive value is flagged `danger`; zero / no data reads as muted.
 */
const POSITIVE_IS_PROBLEM_LEGEND: readonly MetricLegendEntry[] = [
  { swatch: "danger", label: "> 0" },
  { swatch: "none", label: "0 / no data" },
];

/**
 * The Overview tab — an at-a-glance summary of the monitored client's value,
 * health, and ontology usage.
 */
export function OverviewTab({
  monitorStore,
  onNavigateToTab,
}: OverviewTabProps): React.JSX.Element {
  const metrics = useOverviewMetrics(monitorStore);
  const isOntologyEmpty =
    metrics.objectTypeCount + metrics.actionTypeCount + metrics.linkCount === 0;

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
          <Metrics columns={3}>
            <Metric title="Object types" value={metrics.objectTypeCount} />
            <Metric title="Action types" value={metrics.actionTypeCount} />
            <Metric title="Links" value={metrics.linkCount} />
          </Metrics>
        )}
      </OverviewSection>
      <OverviewSection title="Metrics">
        <Metrics columns={2}>
          <Metric
            title="Requests saved"
            help="Requests served from cache, revalidations, and deduplicated fetches that never hit the network."
            value={formatMetric(metrics.requestsSaved)}
          />
          <Metric
            title="Time saved"
            help="Estimated network time avoided by serving requests from cache."
            value={formatMetric(metrics.estimatedTimeSavedMs)}
          />
          <Metric
            title="Cache hit rate"
            help={
              <>
                Share of object reads served from the normalized cache instead
                of the network.
                <MetricLegend
                  entries={[
                    { swatch: "success", label: "≥ 70%" },
                    { swatch: "warning", label: "40–70%" },
                    { swatch: "danger", label: "< 40%" },
                  ]}
                />
              </>
            }
            value={formatMetric(metrics.cacheHitRate)}
            intent={
              metrics.cacheHitRate.value == null
                ? "none"
                : metrics.cacheHitRate.value > 0.7
                  ? "success"
                  : metrics.cacheHitRate.value > 0.4
                    ? "warning"
                    : "danger"
            }
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => onNavigateToTab("cache")}
              >
                View in Cache
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />

          <Metric
            title="Avg response time"
            help="Average response time across requests. Cache reads are typically under 1ms; network reads dominate."
            value={formatMetric(metrics.avgResponseMs)}
          />
          <Metric
            title="Errors & warnings"
            help={
              <>
                Uncaught errors and console warnings captured from @osdk/react
                hooks and your render tree this session.
                <MetricLegend entries={POSITIVE_IS_PROBLEM_LEGEND} />
              </>
            }
            value={metrics.errorWarningCount}
            intent={metrics.errorWarningCount > 0 ? "danger" : "none"}
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => onNavigateToTab("console")}
              >
                View in Console
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />
          <Metric
            title="Overfetching"
            help={
              <>
                Components whose hooks fetch fields that no descendant ever
                reads.
                <MetricLegend entries={POSITIVE_IS_PROBLEM_LEGEND} />
              </>
            }
            value={metrics.overfetchingCount}
            intent={
              metrics.overfetchingCount != null && metrics.overfetchingCount > 0
                ? "danger"
                : "none"
            }
            footer={
              <button
                type="button"
                className={classNames(styles.metricLink, Classes.TEXT_MUTED)}
                onClick={() => onNavigateToTab("components")}
              >
                View in Components
                <Icon icon="arrow-right" size={14} />
              </button>
            }
          />
        </Metrics>
      </OverviewSection>
      <OverviewSection title="Recommendations">
        <RecommendationsList monitorStore={monitorStore} />
      </OverviewSection>
    </div>
  );
}

function useOverviewMetrics(monitorStore: MonitorStore) {
  const clientMetrics = useClientMetrics(monitorStore);
  const { report } = useUnusedFieldAnalysis(monitorStore);
  const logs = useConsoleLogs(monitorStore);
  const errorWarningCount = useMemo(
    () =>
      logs.entries.filter((l) => l.level === "error" || l.level === "warn")
        .length,
    [logs]
  );
  const { facets } = useComponentOntology(monitorStore);

  return {
    cacheHitRate: clientMetrics.cacheHitRate,
    requestsSaved: clientMetrics.requestsSaved,
    estimatedTimeSavedMs: clientMetrics.estimatedTimeSavedMs,
    avgResponseMs: clientMetrics.avgResponseMs,
    objectTypeCount: facets.objectTypes.length,
    actionTypeCount: facets.actions.length,
    linkCount: facets.links.length,
    overfetchingCount: report != null ? report.inefficientComponents : null,
    errorWarningCount,
  };
}
