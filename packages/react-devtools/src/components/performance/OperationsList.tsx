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
import React, { useMemo, useState } from "react";

import { useMetrics } from "../../hooks/useMetrics.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import type { Operation } from "../../types/index.js";
import { formatTime } from "../../utils/format.js";

import styles from "./PerformancePanel.module.scss";

const MAX_RECENT = 25;

const CACHE_TYPES = new Set<Operation["type"]>([
  "cache-hit",
  "cache-miss",
  "revalidation",
  "deduplication",
  "optimistic-update",
]);
const ACTION_TYPES = new Set<Operation["type"]>([
  "action",
  "action-validation",
]);

type OperationFilter = "all" | "cache" | "actions";

function operationLabel(operation: Operation): string {
  if (operation.type === "action" || operation.type === "action-validation") {
    return operation.actionName ?? operation.signature;
  }
  return operation.signature;
}

interface OperationsListProps {
  monitorStore: MonitorStore;
}

/**
 * Recent OSDK operations, capped and filterable. Deduplication noise is hidden
 * from "all" and only shown under the Cache filter. Long signatures scroll
 * horizontally instead of being clipped.
 */
export const OperationsList: React.FC<OperationsListProps> = ({
  monitorStore,
}) => {
  const metrics = useMetrics(monitorStore.getMetricsStore());
  const [filter, setFilter] = useState<OperationFilter>("all");

  const operations = useMemo(() => {
    const filtered = metrics.recent.filter((op) => {
      if (filter === "cache") {
        return CACHE_TYPES.has(op.type);
      }
      if (filter === "actions") {
        return ACTION_TYPES.has(op.type);
      }
      return op.type !== "deduplication";
    });
    return filtered.slice(-MAX_RECENT).reverse();
  }, [metrics.recent, filter]);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHead}>
        <span className={styles.sectionTitle}>Recent operations</span>
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
      {operations.length === 0 ? (
        <div className={styles.empty}>No recent operations.</div>
      ) : (
        <div className={styles.opList}>
          {operations.map((op) => (
            <div key={op.id} className={styles.opRow}>
              <span className={styles.opType}>{op.type}</span>
              <span className={styles.opSignature}>{operationLabel(op)}</span>
              {op.responseTime != null ? (
                <span className={styles.opTime}>
                  {formatTime(op.responseTime)}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
