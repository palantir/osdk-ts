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

import { Button, ButtonGroup } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { createPollingStore } from "../hooks/createPollingStore.js";
import { useMetrics } from "../hooks/useMetrics.js";
import { useRecommendations } from "../hooks/useRecommendations.js";
import { useUnusedFieldAnalysis } from "../hooks/useUnusedFieldAnalysis.js";
import type { MetricsStore } from "../store/MetricsStore.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { Operation } from "../types/index.js";
import type { ActionStartEvent } from "../utils/EventTimeline.js";
import { formatNumber, formatTime } from "../utils/format.js";
import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";
import {
  buildRecommendationMap,
  getRecommendationsForOperation,
} from "../utils/RecommendationMatcher.js";
import styles from "./MonitoringPanel.module.scss";

const CACHE_OPERATION_TYPES = new Set<Operation["type"]>([
  "cache-hit",
  "cache-miss",
  "revalidation",
  "deduplication",
  "optimistic-update",
]);

const ACTION_OPERATION_TYPES = new Set<Operation["type"]>([
  "action",
  "action-validation",
]);

const UI_CONSTANTS = {
  MAX_RECENT_OPERATIONS: 50,
  CACHE_HIT_EXCELLENT: 0.8,
  CACHE_HIT_GOOD: 0.5,
  ROLLBACK_EXCELLENT: 0.1,
  ROLLBACK_ACCEPTABLE: 0.25,
};

export interface PerformanceTabProps {
  metricsStore: MetricsStore;
  monitorStore: MonitorStore;
}

export const PerformanceTab: React.FC<PerformanceTabProps> = (
  { metricsStore, monitorStore },
) => {
  const metrics = useMetrics(metricsStore);
  const { report: unusedFieldReport, isLoading: analysisLoading } =
    useUnusedFieldAnalysis(monitorStore);
  const { recommendations } = useRecommendations(monitorStore);
  const [filter, setFilter] = useState<"all" | "cache" | "actions">("all");

  const recommendationMap = useMemo(
    () => buildRecommendationMap(recommendations),
    [recommendations],
  );

  const enrichmentStore = React.useMemo(
    () =>
      createPollingStore(async () => {
        const entries = await monitorStore.getCacheEntries();
        const timeline = monitorStore.getEventTimeline();
        const actions = timeline.getEventsByType("ACTION_START");
        return {
          cacheEntries: entries,
          recentActions: actions.slice(-20),
        };
      }, 2000),
    [monitorStore],
  );
  const enrichmentData = React.useSyncExternalStore(
    enrichmentStore.subscribe,
    enrichmentStore.getSnapshot,
  );
  const cacheEntries = enrichmentData?.cacheEntries ?? [];
  const recentActions = enrichmentData?.recentActions ?? [];

  const displayNameMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const entry of cacheEntries) {
      if (entry.data && typeof entry.data === "object") {
        const data = entry.data as Record<string, unknown>;
        const primaryKey = data.$primaryKey;
        const objectType = data.$objectType ?? entry.objectType;
        const displayName = data.title ?? data.name ?? data.label
          ?? data.displayName ?? data.description;
        if (
          typeof displayName === "string" && displayName.length > 0
          && (typeof primaryKey === "string" || typeof primaryKey === "number")
          && typeof objectType === "string"
        ) {
          map.set(`${objectType}:${String(primaryKey)}`, displayName);
        }
      }
    }
    return map;
  }, [cacheEntries]);

  const getDisplayNameKey = (signature: string): string | null => {
    const parts = signature.split(":");
    if (parts.length >= 3 && parts[0] === "object") {
      return `${parts[1]}:${parts.slice(2).join(":")}`;
    }
    return null;
  };

  const findCausingAction = (timestamp: number): ActionStartEvent | null => {
    for (let i = recentActions.length - 1; i >= 0; i--) {
      const action = recentActions[i];
      const timeDiff = timestamp - action.timestamp;
      if (timeDiff >= 0 && timeDiff < 500) {
        return action;
      }
    }
    return null;
  };

  const renderObjectLoadingMetrics = () => {
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
          <span className={styles.metricLabel}>Inefficient Queries</span>
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

  const renderCacheMetrics = () => {
    const totalObjects = metrics.aggregates.totalObjectsFromCache
      + metrics.aggregates.totalObjectsFromNetwork;
    const objectBasedRate = totalObjects > 0
      ? metrics.aggregates.totalObjectsFromCache / totalObjects
      : 0;
    const rateClass = objectBasedRate >= UI_CONSTANTS.CACHE_HIT_EXCELLENT
      ? styles.success
      : objectBasedRate >= UI_CONSTANTS.CACHE_HIT_GOOD
      ? styles.warning
      : styles.danger;

    return (
      <>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>Cache Hit Rate</span>
          <span className={classNames(styles.metricValue, rateClass)}>
            {(objectBasedRate * 100).toFixed(0)}%
          </span>
          <span className={styles.metricSubtext}>
            {formatNumber(metrics.aggregates.totalObjectsFromCache)} /{" "}
            {formatNumber(totalObjects)} objects
          </span>
        </div>

        <div className={styles.metric}>
          <span className={styles.metricLabel}>Cache Savings</span>
          <span className={classNames(styles.metricValue, styles.success)}>
            {formatNumber(
              metrics.aggregates.cacheHits
                + metrics.aggregates.revalidations
                + metrics.aggregates.deduplications,
            )} requests saved
          </span>
          <span className={styles.metricSubtext}>
            {formatNumber(metrics.aggregates.deduplications)} deduped
          </span>
        </div>

        <div className={styles.metric}>
          <span className={styles.metricLabel}>Avg Response</span>
          <span className={styles.metricValue}>
            {formatTime(metrics.rates.averageResponseTime)}
          </span>
          <span className={styles.metricSubtext}>
            Cache: {formatTime(metrics.rates.averageCachedResponseTime)}
          </span>
        </div>
      </>
    );
  };

  const renderActionMetrics = () => {
    const totalActions = metrics.aggregates.actionCount;
    const configuredActions = metrics.aggregates
      .configuredOptimisticActionCount;
    const observedOptimisticActions = metrics.aggregates
      .optimisticActionCount;
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
              : "—"}
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
            {totalActions > 0 ? `${(adoptionRate * 100).toFixed(0)}%` : "—"}
          </span>
          <span className={styles.metricSubtext}>
            {formatNumber(configuredActions)} / {formatNumber(totalActions)}
            {" "}
            actions
          </span>
        </div>

        <div className={styles.metric}>
          <span className={styles.metricLabel}>Optimistic Effectiveness</span>
          <span className={styles.metricValue}>
            {configuredActions > 0
              ? `${(effectiveness * 100).toFixed(0)}%`
              : "—"}
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
              : "—"}
          </span>
        </div>

        <div className={styles.metric}>
          <span className={styles.metricLabel}>Rollback Rate</span>
          <span
            className={classNames(
              styles.metricValue,
              rollbackRate <= UI_CONSTANTS.ROLLBACK_EXCELLENT
                ? styles.success
                : rollbackRate <= UI_CONSTANTS.ROLLBACK_ACCEPTABLE
                ? styles.warning
                : styles.danger,
            )}
          >
            {totalActions > 0
              ? `${(rollbackRate * 100).toFixed(0)}%`
              : "—"}
          </span>
          <span className={styles.metricSubtext}>
            {formatNumber(metrics.aggregates.rollbackActionCount)} rollbacks
          </span>
        </div>

        <div className={styles.metric}>
          <span className={styles.metricLabel}>Validation</span>
          <span className={styles.metricValue}>
            {validations > 0 ? formatTime(avgValidationTime) : "—"}
          </span>
          <span className={styles.metricSubtext}>
            {validations > 0
              ? `${formatNumber(validations)} validations · saved ${
                formatTime(validationSavings)
              }`
              : "No validations run"}
          </span>
        </div>
      </>
    );
  };

  const filteredOperations = useMemo(() =>
    metrics.recent.filter((op) => {
      if (filter === "all") {
        return true;
      }
      if (filter === "cache") {
        return CACHE_OPERATION_TYPES.has(op.type);
      }
      if (filter === "actions") {
        return ACTION_OPERATION_TYPES.has(op.type);
      }
      return false;
    }), [metrics.recent, filter]);

  const operations = filteredOperations.slice(
    -UI_CONSTANTS.MAX_RECENT_OPERATIONS,
  ).reverse();

  return (
    <>
      <div className={styles.metricsGrid}>
        <div className={styles.metricGroup}>
          <h4 className={styles.metricGroupTitle}>Object Loading</h4>
          <div className={styles.metricGroupContent}>
            {renderObjectLoadingMetrics()}
          </div>
        </div>
        <div className={styles.metricGroup}>
          <h4 className={styles.metricGroupTitle}>Actions</h4>
          <div className={styles.metricGroupContent}>
            {renderActionMetrics()}
          </div>
        </div>
        <div className={styles.metricGroup}>
          <h4 className={styles.metricGroupTitle}>Caching</h4>
          <div className={styles.metricGroupContent}>
            {renderCacheMetrics()}
          </div>
        </div>
      </div>

      <div className={styles.filterControls}>
        <ButtonGroup>
          <Button
            active={filter === "all"}
            onClick={() => setFilter("all")}
            size="small"
          >
            All
          </Button>
          <Button
            active={filter === "cache"}
            onClick={() => setFilter("cache")}
            size="small"
          >
            Cache
          </Button>
          <Button
            active={filter === "actions"}
            onClick={() => setFilter("actions")}
            size="small"
          >
            Actions
          </Button>
        </ButtonGroup>
      </div>

      <div className={styles.operationsList}>
        {operations.length > 0
          ? operations.map((op) => {
            const isCacheOp = op.type !== "action"
              && op.type !== "action-validation";
            const causingAction = isCacheOp
              ? findCausingAction(op.timestamp)
              : null;
            const displayKey = getDisplayNameKey(op.signature);
            return (
              <OperationItem
                key={op.id}
                operation={op}
                formatTime={formatTime}
                recommendations={getRecommendationsForOperation(
                  op,
                  recommendationMap,
                )}
                displayName={displayKey
                  ? displayNameMap.get(displayKey)
                  : undefined}
                causingActionName={causingAction?.actionName}
              />
            );
          })
          : (
            <div className={styles.emptyState}>
              {filter === "all"
                ? "No recent activity"
                : filter === "cache"
                ? "No recent cache activity"
                : "No recent action activity"}
            </div>
          )}
      </div>
    </>
  );
};

const OPERATION_DISPLAY: Record<
  string,
  { icon: string; class: string; tooltip: string }
> = {
  "cache-hit": {
    icon: "\u2713",
    class: styles.cacheHit,
    tooltip: "Cache hit \u2014 served from cache",
  },
  "cache-miss": {
    icon: "\u00d7",
    class: styles.cacheMiss,
    tooltip: "Cache miss \u2014 fetched from network",
  },
  "revalidation": {
    icon: "\u21bb",
    class: styles.revalidation,
    tooltip:
      "Stale-while-revalidate \u2014 data already served from cache, re-fetching in background",
  },
  "deduplication": {
    icon: "=",
    class: styles.deduplication,
    tooltip: "Deduplicated \u2014 shared with existing subscription",
  },
  "optimistic-update": {
    icon: "\u26a1",
    class: styles.optimistic,
    tooltip: "Optimistic update",
  },
  "action": { icon: "\u2699", class: styles.action, tooltip: "Action" },
  "action-validation": {
    icon: "\u2714",
    class: styles.validation,
    tooltip: "Action validation",
  },
};

const DEFAULT_OPERATION_DISPLAY = { icon: "\u2022", class: "", tooltip: "" };

interface OperationItemProps {
  operation: Operation;
  formatTime: (ms: number) => string;
  recommendations?: Recommendation[];
  displayName?: string;
  causingActionName?: string;
}

const OperationItem: React.FC<OperationItemProps> = (
  {
    operation,
    formatTime,
    recommendations = [],
    displayName,
    causingActionName,
  },
) => {
  const isAction = operation.type === "action";
  const isValidation = operation.type === "action-validation";
  const isCacheOperation = !isAction && !isValidation;

  const getEnrichedSignature = (): string => {
    if (isAction || isValidation) {
      return operation.actionName ?? operation.signature;
    }
    if (displayName) {
      const parts = operation.signature.split(":");
      if (parts.length >= 2) {
        const objectType = parts[1];
        const truncatedName = displayName.length > 20
          ? displayName.slice(0, 20) + "\u2026"
          : displayName;
        return `${objectType}: ${truncatedName}`;
      }
    }
    return operation.signature;
  };

  const {
    icon: operationIcon,
    class: operationClass,
    tooltip: operationTooltip,
  } = OPERATION_DISPLAY[operation.type] ?? DEFAULT_OPERATION_DISPLAY;

  const metricBadges: React.ReactNode[] = [];

  if (isAction) {
    if (operation.serverRoundTripTime != null) {
      metricBadges.push(
        <span key="server" className={styles.operationMetric}>
          Server {formatTime(operation.serverRoundTripTime)}
        </span>,
      );
    }

    if (
      operation.optimisticObserved && operation.optimisticRenderTime != null
    ) {
      metricBadges.push(
        <span key="optimistic" className={styles.operationMetric}>
          Optimistic {formatTime(operation.optimisticRenderTime)}
        </span>,
      );
    }

    if (operation.optimisticObserved && operation.perceivedSpeedup != null) {
      metricBadges.push(
        <span
          key="speedup"
          className={classNames(styles.operationMetric, styles.saved)}
        >
          Speedup {formatTime(operation.perceivedSpeedup)}
        </span>,
      );
    }

    if (operation.rollback) {
      metricBadges.push(
        <span
          key="rollback"
          className={classNames(styles.operationMetric, styles.rollback)}
        >
          Rollback
        </span>,
      );
    }
  } else if (isValidation) {
    if (operation.responseTime != null) {
      metricBadges.push(
        <span key="validation" className={styles.operationMetric}>
          Validation {formatTime(operation.responseTime)}
        </span>,
      );
    }
  } else {
    if (operation.responseTime) {
      metricBadges.push(
        <span key="response" className={styles.operationMetric}>
          {formatTime(operation.responseTime)}
        </span>,
      );
    }
  }

  const topRec = recommendations[0];

  return (
    <div className={styles.operationItem}>
      <span
        className={classNames(styles.operationType, operationClass)}
        title={operationTooltip}
      >
        {operationIcon}
      </span>
      <div className={styles.operationDetails}>
        <div className={styles.operationSignature}>
          {getEnrichedSignature()}
          {isCacheOperation && causingActionName && (
            <span
              className={styles.actionCauseBadge}
              title={`Triggered by ${causingActionName}`}
            >
              ← {causingActionName}
            </span>
          )}
          {topRec && (
            <span
              className={styles.inlineIndicator}
              title={topRec.suggestion}
            >
              {topRec.level === "critical" || topRec.level === "high"
                ? "⚠️"
                : "💡"}
            </span>
          )}
        </div>
        <div className={styles.operationTime}>
          {new Date(operation.timestamp).toLocaleTimeString()}
        </div>
        {topRec && (
          <div className={styles.inlineTip}>
            {topRec.title}
          </div>
        )}
        {metricBadges.length > 0 && (
          <div className={styles.operationMetrics}>{metricBadges}</div>
        )}
      </div>
    </div>
  );
};
