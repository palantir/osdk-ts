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
import { useMetrics } from "../hooks/useMetrics.js";
import { useRecommendations } from "../hooks/useRecommendations.js";
import { useUnusedFieldAnalysis } from "../hooks/useUnusedFieldAnalysis.js";
import type { MetricsStore } from "../store/MetricsStore.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { Operation } from "../types/index.js";
import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";
import {
  buildRecommendationMap,
  getRecommendationsForOperation,
} from "../utils/RecommendationMatcher.js";
import styles from "./MonitoringPanel.module.scss";

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

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toFixed(0);
  };

  const formatTime = (ms: number): string => {
    if (ms < 1) return "<1ms";
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
  };

  const formatBytes = (bytes: number): string => {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)}KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
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
          <span className={styles.metricLabel}>Query Efficiency</span>
          <span
            className={classNames(
              styles.metricValue,
              unusedFieldReport.averageEfficiency >= 0.7
                ? styles.success
                : unusedFieldReport.averageEfficiency >= 0.5
                ? styles.warning
                : styles.danger,
            )}
          >
            {efficiencyPercent}%
          </span>
          <span className={styles.metricSubtext}>
            fields accessed / fetched
          </span>
        </div>

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
            {formatNumber(unusedFieldReport.inefficientComponents)}
          </span>
          <span className={styles.metricSubtext}>
            {formatNumber(unusedFieldReport.totalComponents)} total queries
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

  const renderCacheMetrics = () => (
    <>
      <div className={styles.metric}>
        <span className={styles.metricLabel}>Cache Hit Rate</span>
        <span
          className={classNames(
            styles.metricValue,
            metrics.rates.cacheHitRate >= UI_CONSTANTS.CACHE_HIT_EXCELLENT
              ? styles.success
              : metrics.rates.cacheHitRate >= UI_CONSTANTS.CACHE_HIT_GOOD
              ? styles.warning
              : styles.danger,
          )}
        >
          {(metrics.rates.cacheHitRate * 100).toFixed(0)}%
        </span>
        <span className={styles.metricSubtext}>
          {formatNumber(metrics.aggregates.totalObjectsFromCache)} /{" "}
          {formatNumber(
            metrics.aggregates.totalObjectsFromCache
              + metrics.aggregates.totalObjectsFromNetwork,
          )} objects
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Requests Saved</span>
        <span className={classNames(styles.metricValue, styles.success)}>
          {formatNumber(metrics.aggregates.requestsSaved)}
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

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Data Saved</span>
        <span className={styles.metricValue}>
          {formatBytes(metrics.aggregates.bytesServedFromCache)}
        </span>
        <span className={styles.metricSubtext}>from cache</span>
      </div>
    </>
  );

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

  const cacheOperationTypes = new Set<Operation["type"]>([
    "cache-hit",
    "cache-miss",
    "deduplication",
    "optimistic-update",
  ]);

  const actionOperationTypes = new Set<Operation["type"]>([
    "action",
    "action-validation",
  ]);

  const filteredOperations = metrics.recent.filter((op) => {
    if (filter === "all") return true;
    if (filter === "cache") return cacheOperationTypes.has(op.type);
    if (filter === "actions") return actionOperationTypes.has(op.type);
    return false;
  });

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
          ? operations.map((op) => (
            <OperationItem
              key={op.id}
              operation={op}
              formatTime={formatTime}
              recommendations={getRecommendationsForOperation(
                op,
                recommendationMap,
              )}
            />
          ))
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

interface OperationItemProps {
  operation: Operation;
  formatTime: (ms: number) => string;
  recommendations?: Recommendation[];
}

const OperationItem: React.FC<OperationItemProps> = (
  { operation, formatTime, recommendations = [] },
) => {
  const isAction = operation.type === "action";
  const isValidation = operation.type === "action-validation";
  const getOperationIcon = (): string => {
    switch (operation.type) {
      case "cache-hit":
        return "✓";
      case "cache-miss":
        return "×";
      case "deduplication":
        return "=";
      case "optimistic-update":
        return "⚡";
      case "action":
        return "⚙";
      case "action-validation":
        return "✔";
      default:
        return "•";
    }
  };

  const getOperationClass = (): string => {
    switch (operation.type) {
      case "cache-hit":
        return styles.cacheHit;
      case "cache-miss":
        return styles.cacheMiss;
      case "deduplication":
        return styles.deduplication;
      case "optimistic-update":
        return styles.optimistic;
      case "action":
        return styles.action;
      case "action-validation":
        return styles.validation;
      default:
        return "";
    }
  };

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

    if (operation.saved) {
      metricBadges.push(
        <span
          key="saved"
          className={classNames(styles.operationMetric, styles.saved)}
        >
          +{formatTime(operation.saved)} saved
        </span>,
      );
    }
  }

  const topRec = recommendations[0];

  return (
    <div className={styles.operationItem}>
      <span className={classNames(styles.operationType, getOperationClass())}>
        {getOperationIcon()}
      </span>
      <div className={styles.operationDetails}>
        <div className={styles.operationSignature}>
          {(isAction || isValidation)
            ? operation.actionName ?? operation.signature
            : operation.signature}
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
