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

import { formatNumber, formatTime } from "../utils/format.js";
import { Metric } from "./Metric.js";
import { MetricLegend } from "./MetricLegend.js";
import type { MetricLegendEntry } from "./MetricLegend.js";
import { Metrics } from "./Metrics.js";
import { OverviewSection } from "./OverviewSection.js";

import styles from "./OverviewTab.module.scss";

/**
 * Link to the osdk/react pages instead of the public docs since they contain more examples
 */
const OSDK_DOCS_URL = "https://palantir.github.io/osdk-ts/";

/**
 * Gates the Overview tab. Off by default while the tab is still being built out
 * on dummy data — flip to `true` (or wire to config) to surface it. Exported so
 * tests and callers can branch on whether the tab is available.
 */
export const IS_OVERVIEW_TAB_ENABLED = false;

// TODO: Fetch the real data later
const usage = {
  objectTypeCount: 8,
  actionTypeCount: 3,
  linkCount: 5,
};

const performance = {
  cacheHitRate: 0.82,
  networkRequests: 1240,
  averageResponseTime: 45,
  duplicateRequests: 0,
};

const debugging = {
  overfetchingCount: 2,
  errorWarningCount: 1,
};

/**
 * Color key shared by the count metrics where any occurrence is a problem — a
 * positive value is flagged `danger`; zero / no data reads as muted.
 */
const POSITIVE_IS_PROBLEM_LEGEND: readonly MetricLegendEntry[] = [
  { swatch: "danger", label: "> 0" },
  { swatch: "na", label: "0 / no data" },
];

/**
 * The Overview tab — an at-a-glance summary of the monitored client's ontology
 * usage and health metrics. Shows the "no ontology" empty state when the
 * registry is empty; otherwise renders the ontology counts and the performance
 * metrics grid.
 */
export function OverviewTab(): React.JSX.Element {
  const isOntologyEmpty =
    usage.objectTypeCount + usage.actionTypeCount + usage.linkCount === 0;

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
            <Metric title="Object types" value={usage.objectTypeCount} />
            <Metric title="Action types" value={usage.actionTypeCount} />
            <Metric title="Links" value={usage.linkCount} />
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
          />
          <Metric
            title="Network requests"
            help="Requests that went to the network — cache misses plus revalidations."
            value={
              performance.networkRequests == null
                ? null
                : formatNumber(performance.networkRequests)
            }
          />
          <Metric
            title="Avg response time"
            help="Average response time across requests. Cache reads are typically under 1ms; network reads dominate."
            value={
              performance.averageResponseTime == null
                ? null
                : formatTime(performance.averageResponseTime)
            }
          />
          <Metric
            title="Duplicate requests"
            help={
              <>
                Requests for data an in-flight request already covered,
                collapsed onto a single fetch by deduplication.
                <MetricLegend entries={POSITIVE_IS_PROBLEM_LEGEND} />
              </>
            }
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
            help={
              <>
                Components whose hooks fetch fields that no descendant ever
                reads.
                <MetricLegend entries={POSITIVE_IS_PROBLEM_LEGEND} />
              </>
            }
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
          />
          <Metric
            title="Errors & warnings"
            help={
              <>
                Uncaught errors and console warnings captured from @osdk/react
                hooks and your render tree this session.
                <MetricLegend
                  entries={[
                    { swatch: "danger", label: "> 0" },
                    { swatch: "na", label: "0" },
                  ]}
                />
              </>
            }
            value={
              debugging.errorWarningCount != null
                ? formatNumber(debugging.errorWarningCount)
                : null
            }
            intent={
              debugging.errorWarningCount != null &&
              debugging.errorWarningCount > 0
                ? "danger"
                : "none"
            }
          />
        </Metrics>
      </OverviewSection>
    </div>
  );
}
