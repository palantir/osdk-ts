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

import { AnchorButton, NonIdealState } from "@blueprintjs/core";
import React from "react";

import { useClientMetrics } from "../hooks/useClientMetrics.js";
import { useComponentOntology } from "../hooks/useComponentOntology.js";
import { useDebuggingTiles } from "../hooks/useDebuggingTiles.js";
import { formatMetric } from "../metrics/clientMetrics.js";
import type { MonitorStore } from "../store/MonitorStore.js";
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

/**
 * Gates the Overview tab in the monitoring panel. Exported so the panel (and
 * tests) can branch on whether the tab is available; flip to `false` to hide it
 * without removing the component.
 */
export const IS_OVERVIEW_TAB_ENABLED = true;

export interface OverviewTabProps {
  monitorStore: MonitorStore;
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
          />
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
  const { overfetchingCount, errorWarningCount } =
    useDebuggingTiles(monitorStore);
  const { facets } = useComponentOntology(monitorStore);

  return {
    cacheHitRate: clientMetrics.cacheHitRate,
    requestsSaved: clientMetrics.requestsSaved,
    estimatedTimeSavedMs: clientMetrics.estimatedTimeSavedMs,
    avgResponseMs: clientMetrics.avgResponseMs,
    objectTypeCount: facets.objectTypes.length,
    actionTypeCount: facets.actions.length,
    linkCount: facets.links.length,
    errorWarningCount,
    overfetchingCount,
  };
}
