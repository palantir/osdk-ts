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
import React, { useMemo } from "react";
import {
  useComputeMetrics,
  useComputeNetworkPaused,
  useComputeRecording,
  useComputeRequests,
} from "../hooks/useComputeSelectors.js";
import type { ComputeStore } from "../store/ComputeStore.js";
import type { ComputeRequest } from "../types/compute.js";
import { formatBytes, formatNumber } from "../utils/format.js";
import { BubbleChart } from "./BubbleChart.js";
import styles from "./MonitoringPanel.module.scss";

export interface ComputeTabProps {
  computeStore: ComputeStore;
}

export const ComputeTab: React.FC<ComputeTabProps> = ({ computeStore }) => {
  const metrics = useComputeMetrics(computeStore);
  const requests = useComputeRequests(computeStore);
  const isRecording = useComputeRecording(computeStore);
  const isNetworkPaused = useComputeNetworkPaused(computeStore);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const selectedIdSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const renderMetrics = () => (
    <div className={styles.computeMetricsGrid}>
      <div className={styles.metricCell}>
        <span className={styles.metricLabel}>Total Usage</span>
        <span className={styles.metricValue}>
          {formatNumber(metrics.totalUsage)}
        </span>
        <span className={styles.metricSubtext}>
          {metrics.fulfilledCount} requests
        </span>
      </div>

      <div className={styles.metricCell}>
        <span className={styles.metricLabel}>Last Minute</span>
        <span className={styles.metricValue}>
          {formatNumber(metrics.lastMinuteUsage)}
        </span>
        <span className={styles.metricSubtext}>compute units</span>
      </div>

      <div className={styles.metricCell}>
        <span className={styles.metricLabel}>Avg per Request</span>
        <span className={styles.metricValue}>
          {formatNumber(metrics.averageUsagePerRequest)}
        </span>
        <span className={styles.metricSubtext}>compute units</span>
      </div>

      <div className={styles.metricCell}>
        <span className={styles.metricLabel}>Avg Response Size</span>
        <span className={styles.metricValue}>
          {formatBytes(metrics.averageResponseBytes)}
        </span>
        <span className={styles.metricSubtext}>
          {metrics.requestCount} total
          {metrics.fulfilledWithoutUsageCount > 0 && (
            <>
              {", "}
              {metrics.fulfilledWithoutUsageCount} without usage data
            </>
          )}
        </span>
      </div>
    </div>
  );

  const recentRequests = useMemo(
    () => requests.slice(-50).reverse(),
    [requests],
  );

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
          icon={isNetworkPaused ? "play" : "pause"}
          size="small"
          title="Block all OSDK network requests"
        >
          {isNetworkPaused ? "Resume" : "Pause"} Network
        </Button>
      </div>

      {renderMetrics()}

      {requests.length > 0 && (
        <div className={styles.bubbleChartContainer}>
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
              isSelected={selectedIdSet.has(req.id)}
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

const REQUEST_DISPLAY: Record<string, { icon: string; class: string }> = {
  "fulfilled": { icon: "\u2713", class: styles.computeFulfilled },
  "fulfilled-without-usage": {
    icon: "\u00b7",
    class: styles.computeFulfilledWithoutUsage,
  },
  "failed": { icon: "\u00d7", class: styles.computeFailed },
  "pending": { icon: "\u22ef", class: styles.computePending },
};

const DEFAULT_REQUEST_DISPLAY = { icon: "\u2022", class: "" };

interface ComputeRequestItemProps {
  request: ComputeRequest;
  isSelected: boolean;
}

function getUsageClass(usage: number): string {
  if (usage > 1000) {
    return styles.danger;
  }
  if (usage > 100) {
    return styles.warning;
  }
  return styles.success;
}

const ComputeRequestItem: React.FC<ComputeRequestItemProps> = ({
  request,
  isSelected,
}) => {
  const { icon: requestIcon, class: requestClass } =
    REQUEST_DISPLAY[request.type] ?? DEFAULT_REQUEST_DISPLAY;

  return (
    <div
      className={classNames(styles.operationItem, {
        [styles.selectedItem]: isSelected,
      })}
    >
      <span className={classNames(styles.operationType, requestClass)}>
        {requestIcon}
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
          {request.type === "fulfilled-without-usage" && (
            <>
              <span className={styles.operationMetric}>
                no usage data
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
            <span className={styles.operationMetric}>
              Loading...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
