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

import type { Metric } from "../metrics/clientMetrics.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { useClientMetrics } from "./useClientMetrics.js";
import { useComponentOntology } from "./useComponentOntology.js";
import { useDebuggingTiles } from "./useDebuggingTiles.js";

/**
 * The single set of tiles rendered by the Overview tab: four client-metric
 * values forwarded verbatim from {@link getClientMetrics}, plus four plain
 * integer counts.
 */
export interface OverviewMetrics {
  cacheHitRate: Metric;
  requestsSaved: Metric;
  estimatedTimeSavedMs: Metric;
  avgResponseMs: Metric;
  errorWarningCount: number;
  overfetchingCount: number | null;
  objectTypeCount: number;
  actionTypeCount: number;
  linkCount: number;
}

/**
 * Thin aggregator over the Overview tab's underlying hooks so the tab reads one
 * object; it re-derives nothing. Client metrics are forwarded verbatim (same
 * `value`/`sampleCount`/`unit`); the counts come from the ontology facets, the
 * unused-field report, and the error/warning stores.
 */
export function useOverviewMetrics(
  monitorStore: MonitorStore
): OverviewMetrics {
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
