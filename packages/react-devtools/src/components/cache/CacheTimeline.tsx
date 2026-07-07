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

import classNames from "classnames";
import React, { useMemo } from "react";

import { createPollingStore } from "../../hooks/createPollingStore.js";
import { useMetrics } from "../../hooks/useMetrics.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import type { Operation } from "../../types/index.js";
import { formatTime } from "../../utils/format.js";

import styles from "./CacheTimeline.module.scss";

// TODO: virtualize this list so we can render the full history instead of
// capping at the most recent MAX_RECENT_OPERATIONS.
const MAX_RECENT_OPERATIONS = 50;

export interface CacheTimelineProps {
  monitorStore: MonitorStore;
}

export const CacheTimeline: React.FC<CacheTimelineProps> = ({
  monitorStore,
}) => {
  const metrics = useMetrics(monitorStore.getMetricsStore());

  // Refresh cache entries every 2s to enrich timeline rows; entries change slowly.
  const enrichmentStore = React.useMemo(
    () =>
      createPollingStore(async () => {
        const cacheEntries = await monitorStore.loadCacheEntries();
        return { cacheEntries };
      }, 2000),
    [monitorStore]
  );
  const enrichmentData = React.useSyncExternalStore(
    enrichmentStore.subscribe,
    enrichmentStore.getSnapshot
  );
  const cacheEntries = enrichmentData?.cacheEntries ?? [];

  const displayNameMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const entry of cacheEntries) {
      if (entry.data && typeof entry.data === "object") {
        const data = entry.data as Record<string, unknown>;
        const primaryKey = data.$primaryKey;
        const objectType = data.$objectType ?? entry.objectType;
        const displayName =
          data.title ??
          data.name ??
          data.label ??
          data.displayName ??
          data.description;
        if (
          typeof displayName === "string" &&
          displayName.length > 0 &&
          (typeof primaryKey === "string" || typeof primaryKey === "number") &&
          typeof objectType === "string"
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

  const operations = useMemo(
    () =>
      metrics.recent
        .filter((op) => op.type === "cache-hit" || op.type === "cache-miss")
        .slice(-MAX_RECENT_OPERATIONS)
        .reverse(),
    [metrics.recent]
  );

  return (
    <div className={styles.operationsList}>
      {operations.length > 0 ? (
        operations.map((op) => {
          const displayKey = getDisplayNameKey(op.signature);
          return (
            <OperationItem
              key={op.id}
              operation={op}
              displayName={
                displayKey ? displayNameMap.get(displayKey) : undefined
              }
            />
          );
        })
      ) : (
        <div className={styles.emptyState}>No cache hits or misses yet</div>
      )}
    </div>
  );
};

const OPERATION_DISPLAY: Record<
  "cache-hit" | "cache-miss",
  { icon: string; class: string; tooltip: string }
> = {
  "cache-hit": {
    icon: "✓",
    class: styles.cacheHit,
    tooltip: "Cache hit — served from cache",
  },
  "cache-miss": {
    icon: "×",
    class: styles.cacheMiss,
    tooltip: "Cache miss — fetched from network",
  },
};

interface OperationItemProps {
  operation: Operation;
  displayName?: string;
}

const OperationItem: React.FC<OperationItemProps> = ({
  operation,
  displayName,
}) => {
  const getEnrichedSignature = (): string => {
    if (displayName) {
      const parts = operation.signature.split(":");
      if (parts.length >= 2) {
        const objectType = parts[1];
        const truncatedName =
          displayName.length > 20
            ? `${displayName.slice(0, 20)}…`
            : displayName;
        return `${objectType}: ${truncatedName}`;
      }
    }
    return operation.signature;
  };

  const isHit = operation.type === "cache-hit";
  const display = isHit
    ? OPERATION_DISPLAY["cache-hit"]
    : OPERATION_DISPLAY["cache-miss"];

  return (
    <div className={styles.operationItem}>
      <span
        className={classNames(styles.operationType, display.class)}
        title={display.tooltip}
      >
        {display.icon}
      </span>
      <div className={styles.operationDetails}>
        <div className={styles.operationSignature}>
          {getEnrichedSignature()}
        </div>
        <div className={styles.operationTime}>
          {new Date(operation.timestamp).toLocaleTimeString()}
        </div>
        {operation.responseTime != null && (
          <div className={styles.operationMetrics}>
            <span className={styles.operationMetric}>
              {formatTime(operation.responseTime)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
