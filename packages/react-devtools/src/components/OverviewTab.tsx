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
import classNames from "classnames";
import React from "react";

import { formatNumber, formatTime } from "../utils/format.js";
import { Metric } from "./Metric.js";
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
export const IS_OVERVIEW_TAB_ENABLED = true;

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
                <ul className={styles.metricLegend}>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(
                        styles.legendSwatch,
                        styles.success
                      )}
                      aria-hidden={true}
                    />
                    ≥ 70%
                  </li>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(
                        styles.legendSwatch,
                        styles.warning
                      )}
                      aria-hidden={true}
                    />
                    40–70%
                  </li>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(styles.legendSwatch, styles.danger)}
                      aria-hidden={true}
                    />
                    {"< 40%"}
                  </li>
                </ul>
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
                <ul className={styles.metricLegend}>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(styles.legendSwatch, styles.danger)}
                      aria-hidden={true}
                    />
                    {"> 0"}
                  </li>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(styles.legendSwatch, styles.na)}
                      aria-hidden={true}
                    />
                    0 / no data
                  </li>
                </ul>
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
                <ul className={styles.metricLegend}>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(styles.legendSwatch, styles.danger)}
                      aria-hidden={true}
                    />
                    {"> 0"}
                  </li>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(styles.legendSwatch, styles.na)}
                      aria-hidden={true}
                    />
                    0 / no data
                  </li>
                </ul>
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
                <ul className={styles.metricLegend}>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(styles.legendSwatch, styles.danger)}
                      aria-hidden={true}
                    />
                    {"> 0"}
                  </li>
                  <li className={styles.legendRow}>
                    <span
                      className={classNames(styles.legendSwatch, styles.na)}
                      aria-hidden={true}
                    />
                    0
                  </li>
                </ul>
              </>
            }
            value={formatNumber(debugging.errorWarningCount)}
            intent={debugging.errorWarningCount > 0 ? "danger" : "none"}
          />
        </Metrics>
      </OverviewSection>
    </div>
  );
}
