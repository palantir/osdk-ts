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

import { Button } from "@blueprintjs/core";
import classNames from "classnames";
import React from "react";
import {
  useComputeMetrics,
  useComputeRecording,
  useComputeRequests,
} from "../hooks/useComputeSelectors.js";
import type { ComputeStore } from "../store/ComputeStore.js";
import type { ComputeRequest } from "../types/compute.js";
import { BubbleChart } from "./BubbleChart.js";
import styles from "./MonitoringPanel.module.scss";

export interface ComputeTabProps {
  computeStore: ComputeStore;
}

export const ComputeTab: React.FC<ComputeTabProps> = ({ computeStore }) => {
  const metrics = useComputeMetrics(computeStore);
  const requests = useComputeRequests(computeStore);
  const isRecording = useComputeRecording(computeStore);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toFixed(0);
  };

  const formatBytes = (bytes: number): string => {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  };

  const renderMetrics = () => (
    <div className={styles.metricsGrid}>
      <div className={styles.metric}>
        <span className={styles.metricLabel}>Total Usage</span>
        <span className={styles.metricValue}>
          {formatNumber(metrics.totalUsage)}
        </span>
        <span className={styles.metricSubtext}>
          {metrics.fulfilledCount} requests
        </span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Last Minute</span>
        <span className={styles.metricValue}>
          {formatNumber(metrics.lastMinuteUsage)}
        </span>
        <span className={styles.metricSubtext}>compute units</span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Avg per Request</span>
        <span className={styles.metricValue}>
          {formatNumber(metrics.averageUsagePerRequest)}
        </span>
        <span className={styles.metricSubtext}>compute units</span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricLabel}>Avg Response Size</span>
        <span className={styles.metricValue}>
          {formatBytes(metrics.averageResponseBytes)}
        </span>
        <span className={styles.metricSubtext}>
          {metrics.requestCount} total
        </span>
      </div>
    </div>
  );

  const recentRequests = requests.slice(-50).reverse();

  return (
    <>
      <div className={styles.computeControls}>
        {isRecording
          ? (
            <Button
              onClick={() => computeStore.setIsRecording(false)}
              icon="stop"
              intent="danger"
              size="small"
            >
              Stop Recording
            </Button>
          )
          : (
            <Button
              onClick={() => computeStore.setIsRecording(true)}
              icon="record"
              intent="primary"
              size="small"
            >
              Start Recording
            </Button>
          )}
        <Button
          onClick={() => computeStore.toggleNetworkPaused()}
          icon={computeStore.getIsNetworkPaused() ? "play" : "pause"}
          size="small"
        >
          {computeStore.getIsNetworkPaused() ? "Resume" : "Pause"} Network
        </Button>
      </div>

      {renderMetrics()}

      {requests.length > 0 && (
        <div style={{ height: "250px", marginBottom: "20px" }}>
          <BubbleChart
            computeStore={computeStore}
            fillHeight={false}
            selectedIds={selectedIds}
            onSelectRequest={(id) => {
              if (id) {
                setSelectedIds([id]);
              } else {
                setSelectedIds([]);
              }
            }}
          />
        </div>
      )}

      <div className={styles.operationsList}>
        {recentRequests.length > 0
          ? recentRequests.map((req) => (
            <ComputeRequestItem
              key={req.id}
              request={req}
              formatNumber={formatNumber}
              formatBytes={formatBytes}
              isSelected={selectedIds.includes(req.id)}
            />
          ))
          : (
            <div className={styles.emptyState}>
              {isRecording
                ? "No compute requests yet"
                : "Start recording to track compute usage"}
            </div>
          )}
      </div>
    </>
  );
};

interface ComputeRequestItemProps {
  request: ComputeRequest;
  formatNumber: (n: number) => string;
  formatBytes: (n: number) => string;
  isSelected: boolean;
}

const ComputeRequestItem: React.FC<ComputeRequestItemProps> = ({
  request,
  formatNumber,
  formatBytes,
  isSelected,
}) => {
  const getRequestIcon = (): string => {
    switch (request.type) {
      case "fulfilled":
        return "✓";
      case "failed":
        return "×";
      case "pending":
        return "⋯";
      default:
        return "•";
    }
  };

  const getRequestClass = (): string => {
    switch (request.type) {
      case "fulfilled":
        return styles.computeFulfilled;
      case "failed":
        return styles.computeFailed;
      case "pending":
        return styles.computePending;
      default:
        return "";
    }
  };

  const getUsageClass = (usage: number): string => {
    if (usage > 1000) return styles.danger;
    if (usage > 100) return styles.warning;
    return styles.success;
  };

  return (
    <div
      className={classNames(styles.operationItem, {
        [styles.selectedItem]: isSelected,
      })}
    >
      <span className={classNames(styles.operationType, getRequestClass())}>
        {getRequestIcon()}
      </span>
      <div className={styles.operationDetails}>
        <div className={styles.operationSignature}>
          {request.requestUrl}
        </div>
        <div className={styles.operationTime}>
          {new Date(request.requestTimestamp).toLocaleTimeString()}
        </div>
        <div className={styles.operationMetrics}>
          {request.type === "fulfilled" && (
            <>
              <span
                className={classNames(
                  styles.operationMetric,
                  getUsageClass(request.computeUsage),
                )}
              >
                {formatNumber(request.computeUsage)} CU
              </span>
              <span className={styles.operationMetric}>
                {formatBytes(request.responsePayloadBytes)}
              </span>
            </>
          )}
          {request.type === "failed" && (
            <span className={classNames(styles.operationMetric, styles.danger)}>
              {request.error.type}
            </span>
          )}
          {request.type === "pending" && (
            <span className={classNames(styles.operationMetric)}>
              Loading...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
