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

import { InputGroup } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useMemo, useState } from "react";

import { useMetrics } from "../../hooks/useMetrics.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import type { Operation } from "../../types/index.js";
import { formatTime } from "../../utils/format.js";
import { SectionHeader } from "../ui/SectionHeader.js";

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

const FILTERS: Array<{ id: OperationFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "cache", label: "Cache" },
  { id: "actions", label: "Actions" },
];

function operationLabel(operation: Operation): string {
  if (operation.type === "action" || operation.type === "action-validation") {
    return operation.actionName ?? operation.signature;
  }
  return operation.signature;
}

interface OperationsListProps {
  monitorStore: MonitorStore;
}

/** The Timeline section: recent OSDK operations, filterable by kind. */
export const OperationsList: React.FC<OperationsListProps> = ({
  monitorStore,
}) => {
  const metrics = useMetrics(monitorStore.getMetricsStore());
  const [filter, setFilter] = useState<OperationFilter>("all");
  const [query, setQuery] = useState("");

  const operations = useMemo(() => {
    const q = query.trim().toLowerCase();
    return metrics.recent
      .filter((op) => {
        if (filter === "cache") {
          return CACHE_TYPES.has(op.type);
        }
        if (filter === "actions") {
          return ACTION_TYPES.has(op.type);
        }
        return op.type !== "deduplication";
      })
      .filter(
        (op) => q.length === 0 || operationLabel(op).toLowerCase().includes(q)
      )
      .slice(-MAX_RECENT)
      .reverse();
  }, [metrics.recent, filter, query]);

  return (
    <SectionHeader title="Timeline">
      <div className={styles.toolbar}>
        <InputGroup
          leftIcon="search"
          placeholder="Filter"
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          fill={true}
        />
        <div className={styles.chips}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={classNames(
                styles.chip,
                filter === f.id && styles.chipActive
              )}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
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
    </SectionHeader>
  );
};
