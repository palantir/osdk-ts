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

import {
  Button,
  ButtonGroup,
  Card,
  Collapse,
  HTMLSelect,
} from "@blueprintjs/core";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import styles from "./QueryStatusTab.module.scss";

export interface QueryStatusTabProps {
  monitorStore: MonitorStore;
}

interface QueryInfo {
  id: string;
  objectType: string;
  hookType: string;
  status: "idle" | "loading" | "success" | "error";
  componentNames: string[];
  subscriberCount: number;
  parameters: Record<string, any>;
  lastUpdate: number | null;
  age: number | null;
  responseTime: number | null;
  fromCache: boolean;
  deduplicated: boolean;
  error: Error | null;
}

export const QueryStatusTab: React.FC<QueryStatusTabProps> = (
  { monitorStore },
) => {
  const [queries, setQueries] = useState<QueryInfo[]>([]);
  const [filter, setFilter] = useState<"all" | "loading" | "error">("all");
  const [groupBy, setGroupBy] = useState<"type" | "status">("type");

  useEffect(() => {
    const updateQueries = () => {
      const bindings = monitorStore.getComponentRegistry().getAllBindings();

      // Group by query signature to detect deduplication
      const queryMap = new Map<string, QueryInfo>();

      for (const binding of bindings) {
        if (binding.unmountedAt) continue; // Skip unmounted bindings

        const signature = binding.querySignature;

        if (!queryMap.has(signature)) {
          const lastEmission = monitorStore.getEventTimeline()
            .getLastEmission(binding.subscriptionId);

          // Determine object type from query params
          let objectType = "Unknown";
          if (
            binding.queryParams.type === "list"
            || binding.queryParams.type === "object"
          ) {
            objectType = binding.queryParams.objectType;
          } else if (binding.queryParams.type === "action") {
            objectType = binding.queryParams.actionName;
          }

          queryMap.set(signature, {
            id: signature,
            objectType,
            hookType: binding.hookType,
            status: "success", // Default, will be refined with actual tracking
            componentNames: [binding.componentName],
            subscriberCount: 1,
            parameters: binding.queryParams,
            lastUpdate: lastEmission?.timestamp || null,
            age: lastEmission ? Date.now() - lastEmission.timestamp : null,
            responseTime: binding.lastRenderDuration || null,
            fromCache: lastEmission?.isOptimistic === false || false,
            deduplicated: false,
            error: null,
          });
        } else {
          const existing = queryMap.get(signature)!;
          existing.componentNames.push(binding.componentName);
          existing.subscriberCount++;
          existing.deduplicated = true;
        }
      }

      setQueries(Array.from(queryMap.values()));
    };

    updateQueries();
    const interval = setInterval(updateQueries, 1000);
    return () => clearInterval(interval);
  }, [monitorStore]);

  const filteredQueries = queries.filter(q => {
    if (filter === "loading") return q.status === "loading";
    if (filter === "error") return q.status === "error";
    return true;
  });

  const groupedQueries = groupBy === "type"
    ? groupByObjectType(filteredQueries)
    : groupByStatus(filteredQueries);

  return (
    <div className={styles.queryStatus}>
      <div className={styles.toolbar}>
        <h3 className={styles.title}>Query Status</h3>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Active Queries</span>
            <span className={styles.statValue}>{queries.length}</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statLabel}>Loading</span>
            <span className={styles.statValue} style={{ color: "#137CBD" }}>
              {queries.filter(q => q.status === "loading").length}
            </span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statLabel}>Errors</span>
            <span className={styles.statValue} style={{ color: "#DB3737" }}>
              {queries.filter(q => q.status === "error").length}
            </span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statLabel}>Deduplicated</span>
            <span className={styles.statValue} style={{ color: "#0F9960" }}>
              {queries.filter(q => q.deduplicated).length}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <ButtonGroup>
          <Button
            active={filter === "all"}
            onClick={() => setFilter("all")}
            size="small"
          >
            All
          </Button>
          <Button
            active={filter === "loading"}
            onClick={() => setFilter("loading")}
            size="small"
          >
            Loading
          </Button>
          <Button
            active={filter === "error"}
            onClick={() => setFilter("error")}
            size="small"
          >
            Errors
          </Button>
        </ButtonGroup>

        <HTMLSelect
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value as "type" | "status")}
        >
          <option value="type">Group by Type</option>
          <option value="status">Group by Status</option>
        </HTMLSelect>
      </div>

      <div className={styles.queryList}>
        {Object.entries(groupedQueries).map(([group, groupQueries]) => (
          <div key={group} className={styles.queryGroup}>
            <h5 className={styles.groupTitle}>{group}</h5>
            {groupQueries.map(query => (
              <QueryCard key={query.id} query={query} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const QueryCard: React.FC<{ query: QueryInfo }> = ({ query }) => {
  const [expanded, setExpanded] = useState(false);

  const formatTime = (timestamp: number): string => {
    const now = Date.now();
    const diff = now - timestamp;
    if (diff < 1000) return "just now";
    if (diff < 60000) return `${Math.floor(diff / 1000)}s`;
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
    return `${Math.floor(diff / 3600000)}h`;
  };

  // Status icon
  const statusIcon = query.status === "loading"
    ? "⋯"
    : query.status === "error"
    ? "×"
    : query.status === "success"
    ? "✓"
    : "−";

  return (
    <Card
      interactive
      className={styles.queryCard}
      onClick={() => setExpanded(!expanded)}
    >
      <div className={styles.queryHeader}>
        {/* Status indicator circle */}
        <span
          className={classNames(
            styles.queryStatus,
            styles[`status-${query.status}`],
          )}
        >
          {statusIcon}
        </span>

        {/* Primary info section */}
        <div className={styles.queryDetails}>
          {/* Top: Object type and hook type */}
          <div className={styles.queryPrimary}>
            <span className={styles.objectType}>{query.objectType}</span>
            <span className={styles.hookType}>{query.hookType}</span>
          </div>

          {/* Middle: Component names */}
          <div className={styles.queryMeta}>
            {query.componentNames.slice(0, 2).map(name => (
              <span key={name} className={styles.componentName}>{name}</span>
            ))}
            {query.componentNames.length > 2 && (
              <span className={styles.moreCount}>
                +{query.componentNames.length - 2} more
              </span>
            )}
          </div>

          {/* Badges: Important metadata */}
          {(query.deduplicated || query.fromCache || query.error
            || query.responseTime) && (
            <div className={styles.queryBadges}>
              {query.deduplicated && (
                <span
                  className={styles.badge}
                  data-intent="success"
                  title={`Shared by ${query.subscriberCount} components`}
                >
                  ×{query.subscriberCount} shared
                </span>
              )}
              {query.fromCache && (
                <span className={styles.badge} title="Cached">
                  cached
                </span>
              )}
              {query.responseTime && (
                <span className={styles.badge}>
                  {query.responseTime.toFixed(0)}ms
                </span>
              )}
              {query.error && (
                <span
                  className={styles.badge}
                  data-intent="danger"
                  title={query.error.message}
                >
                  error
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right: Expand button */}
        <Button
          variant="minimal"
          size="small"
          icon={expanded ? "chevron-up" : "chevron-down"}
        />
      </div>

      <Collapse isOpen={expanded}>
        <div className={styles.queryDetails}>
          {Object.keys(query.parameters).length > 0 && (
            <>
              <h6>Parameters</h6>
              <pre
                className={styles.parametersJson}
              >{JSON.stringify(query.parameters, null, 2)}</pre>
            </>
          )}

          {query.error && (
            <>
              <h6>Error</h6>
              <pre className={styles.errorStack}>{query.error.stack}</pre>
            </>
          )}

          <h6>Subscribers</h6>
          <ul className={styles.subscriberList}>
            {query.componentNames.map((name, i) => <li key={i}>{name}</li>)}
          </ul>
        </div>
      </Collapse>
    </Card>
  );
};

function groupByObjectType(queries: QueryInfo[]): Record<string, QueryInfo[]> {
  const groups: Record<string, QueryInfo[]> = {};
  for (const query of queries) {
    const type = query.objectType;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(query);
  }
  return groups;
}

function groupByStatus(queries: QueryInfo[]): Record<string, QueryInfo[]> {
  const groups: Record<string, QueryInfo[]> = {
    loading: [],
    error: [],
    success: [],
    idle: [],
  };
  for (const query of queries) {
    groups[query.status].push(query);
  }
  return Object.fromEntries(
    Object.entries(groups).filter(([_, queries]) => queries.length > 0),
  );
}
