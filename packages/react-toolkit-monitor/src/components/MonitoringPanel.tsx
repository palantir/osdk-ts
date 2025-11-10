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

import { Button, Classes, Tooltip } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMetrics } from "../hooks/useMetrics.js";
import { usePersistedState } from "../hooks/usePersistedState.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { Operation, PanelPosition } from "../types/index.js";
import { ComputeTab } from "./ComputeTab.js";
import { MonitorErrorBoundary } from "./MonitorErrorBoundary.js";
import styles from "./MonitoringPanel.module.scss";

const UI_CONSTANTS = {
  DEFAULT_PANEL_WIDTH: 400,
  DEFAULT_PANEL_HEIGHT: 600,
  DEFAULT_PANEL_RIGHT_OFFSET: 420,
  DEFAULT_PANEL_TOP_OFFSET: 20,
  MIN_PANEL_WIDTH: 320,
  MIN_PANEL_HEIGHT: 200,
  MAX_RECENT_OPERATIONS: 50,
  TOOLTIP_HOVER_DELAY: 500,
  LARGE_NUMBER_THRESHOLD: 1000000,
  MEDIUM_NUMBER_THRESHOLD: 1000,
  MS_TO_SECONDS: 1000,
  BYTES_PER_KB: 1024,
  CACHE_HIT_EXCELLENT: 0.8,
  CACHE_HIT_GOOD: 0.5,
  ROLLBACK_EXCELLENT: 0.1,
  ROLLBACK_ACCEPTABLE: 0.25,
};

export interface MonitoringPanelProps {
  monitorStore: MonitorStore;
}

export const MonitoringPanel: React.FC<MonitoringPanelProps> = ({
  monitorStore,
}) => {
  const metricsStore = monitorStore.getMetricsStore();
  const computeStore = monitorStore.getComputeStore();
  const metrics = useMetrics(metricsStore);
  const [activeTab, setActiveTab] = useState<"cache" | "actions" | "compute">(
    "cache",
  );
  const [position, setPosition] = usePersistedState<PanelPosition>(
    "osdk-monitor-position",
    {
      x: window.innerWidth - UI_CONSTANTS.DEFAULT_PANEL_RIGHT_OFFSET,
      y: UI_CONSTANTS.DEFAULT_PANEL_TOP_OFFSET,
      width: UI_CONSTANTS.DEFAULT_PANEL_WIDTH,
      height: UI_CONSTANTS.DEFAULT_PANEL_HEIGHT,
      collapsed: true,
    },
  );

  const panelRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isResizing = useRef<string | null>(null);
  const dragStart = useRef({ x: 0, y: 0, elemX: 0, elemY: 0 });
  const resizeStart = useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    elemX: 0,
    elemY: 0,
  });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest(`.${styles.controls}`)) {
        return;
      }
      isDragging.current = true;
      dragStart.current = {
        x: e.clientX,
        y: e.clientY,
        elemX: position.x,
        elemY: position.y,
      };
      e.preventDefault();
    },
    [position],
  );

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent, handle: string) => {
      isResizing.current = handle;
      resizeStart.current = {
        x: e.clientX,
        y: e.clientY,
        width: position.width,
        height: position.height,
        elemX: position.x,
        elemY: position.y,
      };
      e.preventDefault();
      e.stopPropagation();
    },
    [position],
  );

  // Set up drag/resize event listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - dragStart.current.x;
        const deltaY = e.clientY - dragStart.current.y;
        setPosition((prev) => ({
          ...prev,
          x: Math.max(
            0,
            Math.min(
              window.innerWidth - prev.width,
              dragStart.current.elemX + deltaX,
            ),
          ),
          y: Math.max(
            0,
            Math.min(
              window.innerHeight - prev.height,
              dragStart.current.elemY + deltaY,
            ),
          ),
        }));
      } else if (isResizing.current) {
        const deltaX = e.clientX - resizeStart.current.x;
        const deltaY = e.clientY - resizeStart.current.y;
        const handle = isResizing.current;

        setPosition((prev) => {
          let newX = prev.x;
          let newY = prev.y;
          let newWidth = prev.width;
          let newHeight = prev.height;

          if (handle.includes("right")) {
            newWidth = Math.max(
              UI_CONSTANTS.MIN_PANEL_WIDTH,
              resizeStart.current.width + deltaX,
            );
          }
          if (handle.includes("left")) {
            newWidth = Math.max(
              UI_CONSTANTS.MIN_PANEL_WIDTH,
              resizeStart.current.width - deltaX,
            );
            newX = resizeStart.current.elemX + deltaX;
            if (newWidth === UI_CONSTANTS.MIN_PANEL_WIDTH) {
              newX = resizeStart.current.elemX + resizeStart.current.width
                - UI_CONSTANTS.MIN_PANEL_WIDTH;
            }
          }
          if (handle.includes("bottom")) {
            newHeight = Math.max(
              UI_CONSTANTS.MIN_PANEL_HEIGHT,
              resizeStart.current.height + deltaY,
            );
          }
          if (handle.includes("top")) {
            newHeight = Math.max(
              UI_CONSTANTS.MIN_PANEL_HEIGHT,
              resizeStart.current.height - deltaY,
            );
            newY = resizeStart.current.elemY + deltaY;
            if (newHeight === UI_CONSTANTS.MIN_PANEL_HEIGHT) {
              newY = resizeStart.current.elemY + resizeStart.current.height
                - UI_CONSTANTS.MIN_PANEL_HEIGHT;
            }
          }

          return {
            ...prev,
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
          };
        });
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      isResizing.current = null;
    };

    // Always add listeners, they'll check the refs internally
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [setPosition]);

  const formatNumber = (num: number): string => {
    if (num >= UI_CONSTANTS.LARGE_NUMBER_THRESHOLD) {
      return `${(num / UI_CONSTANTS.LARGE_NUMBER_THRESHOLD).toFixed(1)}M`;
    }
    if (num >= UI_CONSTANTS.MEDIUM_NUMBER_THRESHOLD) {
      return `${(num / UI_CONSTANTS.MEDIUM_NUMBER_THRESHOLD).toFixed(1)}K`;
    }
    return num.toFixed(0);
  };

  const formatTime = (ms: number): string => {
    if (ms < 1) return "<1ms";
    if (ms < UI_CONSTANTS.MS_TO_SECONDS) return `${ms.toFixed(0)}ms`;
    return `${(ms / UI_CONSTANTS.MS_TO_SECONDS).toFixed(1)}s`;
  };

  const formatBytes = (bytes: number): string => {
    if (bytes < UI_CONSTANTS.BYTES_PER_KB) return `${bytes}B`;
    if (bytes < UI_CONSTANTS.BYTES_PER_KB * UI_CONSTANTS.BYTES_PER_KB) {
      return `${(bytes / UI_CONSTANTS.BYTES_PER_KB).toFixed(1)}KB`;
    }
    return `${
      (bytes / (UI_CONSTANTS.BYTES_PER_KB * UI_CONSTANTS.BYTES_PER_KB)).toFixed(
        1,
      )
    }MB`;
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

  const renderCacheMetrics = () => (
    <div className={styles.metricsGrid}>
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
    </div>
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
      <div className={styles.metricsGrid}>
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
      </div>
    );
  };

  const filteredOperations = metrics.recent.filter((op) =>
    activeTab === "cache"
      ? cacheOperationTypes.has(op.type)
      : actionOperationTypes.has(op.type)
  );
  const operations = filteredOperations.slice(
    -UI_CONSTANTS.MAX_RECENT_OPERATIONS,
  ).reverse();

  if (position.collapsed) {
    return createPortal(
      <Tooltip
        content="View OSDK React Toolkit Debug Stats"
        placement="left"
        hoverOpenDelay={UI_CONSTANTS.TOOLTIP_HOVER_DELAY}
      >
        <div
          className={styles.minimized}
          onClick={() => setPosition((prev) => ({ ...prev, collapsed: false }))}
        >
          <span className={styles.minimizedIcon}>&lt;/&gt;</span>
        </div>
      </Tooltip>,
      document.body,
    );
  }

  return createPortal(
    <div
      ref={panelRef}
      className={classNames(styles.panel, Classes.DARK)}
      style={{
        left: position.x,
        top: position.y,
        width: position.width,
        height: position.height,
      }}
    >
      {/* Resize handles */}
      <div
        className={classNames(
          styles.resizeHandle,
          styles.horizontal,
          styles.top,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "top")}
      />
      <div
        className={classNames(
          styles.resizeHandle,
          styles.horizontal,
          styles.bottom,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}
      />
      <div
        className={classNames(
          styles.resizeHandle,
          styles.vertical,
          styles.left,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "left")}
      />
      <div
        className={classNames(
          styles.resizeHandle,
          styles.vertical,
          styles.right,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "right")}
      />
      <div
        className={classNames(
          styles.resizeHandle,
          styles.corner,
          styles.topLeft,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "topLeft")}
      />
      <div
        className={classNames(
          styles.resizeHandle,
          styles.corner,
          styles.topRight,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "topRight")}
      />
      <div
        className={classNames(
          styles.resizeHandle,
          styles.corner,
          styles.bottomLeft,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "bottomLeft")}
      />
      <div
        className={classNames(
          styles.resizeHandle,
          styles.corner,
          styles.bottomRight,
        )}
        onMouseDown={(e) => handleResizeMouseDown(e, "bottomRight")}
      />

      <div className={styles.header} onMouseDown={handleMouseDown}>
        <h3 className={styles.title}>
          React Toolkit Monitor
          <span className={styles.badge}>Beta</span>
        </h3>
        <div className={styles.controls}>
          <Button
            variant="minimal"
            size="small"
            icon="reset"
            onClick={() => metricsStore.reset()}
            title="Reset metrics"
          />
          <Button
            variant="minimal"
            size="small"
            icon="minimize"
            onClick={() =>
              setPosition((prev) => ({ ...prev, collapsed: true }))}
            title="Minimize"
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.tabs}>
          <button
            type="button"
            className={classNames(
              styles.tabButton,
              activeTab === "cache" && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab("cache")}
          >
            Cache
          </button>
          <button
            type="button"
            className={classNames(
              styles.tabButton,
              activeTab === "actions" && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab("actions")}
          >
            Actions
          </button>
          <button
            type="button"
            className={classNames(
              styles.tabButton,
              activeTab === "compute" && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab("compute")}
          >
            Compute
          </button>
        </div>

        {activeTab === "compute"
          ? <ComputeTab computeStore={computeStore} />
          : (
            <>
              {activeTab === "cache"
                ? renderCacheMetrics()
                : renderActionMetrics()}

              <div className={styles.operationsList}>
                {operations.length > 0
                  ? operations.map((op) => (
                    <OperationItem
                      key={op.id}
                      operation={op}
                      formatTime={formatTime}
                    />
                  ))
                  : (
                    <div className={styles.emptyState}>
                      {activeTab === "cache"
                        ? "No recent cache activity"
                        : "No recent action activity"}
                    </div>
                  )}
              </div>
            </>
          )}
      </div>
    </div>,
    document.body,
  );
};

interface OperationItemProps {
  operation: Operation;
  formatTime: (ms: number) => string;
}

const OperationItem: React.FC<OperationItemProps> = (
  { operation, formatTime },
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
        </div>
        <div className={styles.operationTime}>
          {new Date(operation.timestamp).toLocaleTimeString()}
        </div>
        {metricBadges.length > 0 && (
          <div className={styles.operationMetrics}>{metricBadges}</div>
        )}
      </div>
    </div>
  );
};

/**
 * MonitoringPanel wrapped with error boundary for safe usage.
 * Prevents monitor crashes from breaking the application.
 */
export const SafeMonitoringPanel: React.FC<MonitoringPanelProps> = (props) => (
  <MonitorErrorBoundary>
    <MonitoringPanel {...props} />
  </MonitorErrorBoundary>
);
