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

import { Icon, InputGroup } from "@blueprintjs/core";
import React, { useMemo, useState } from "react";
import { useActiveComponents } from "../hooks/useActiveComponents.js";
import { useComponentRegistry } from "../hooks/useComponentRegistry.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { ComponentCard } from "./ComponentCard.js";
import styles from "./ComponentsTab.module.scss";

export interface ComponentsTabProps {
  monitorStore: MonitorStore;
}

/**
 * Main tab for Component-to-Query Mapping feature.
 * Shows list of all active components with their hooks and statistics.
 */
export const ComponentsTab: React.FC<ComponentsTabProps> = ({
  monitorStore,
}) => {
  useComponentRegistry(monitorStore);
  const activeComponents = useActiveComponents(monitorStore);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeComponents;
    }

    const query = searchQuery.toLowerCase();
    const filtered = new Map();

    for (const [componentId, bindings] of activeComponents) {
      const componentName = bindings[0]?.componentName.toLowerCase() || "";
      const componentDisplayName =
        bindings[0]?.componentDisplayName?.toLowerCase() || "";

      if (
        componentName.includes(query)
        || componentDisplayName.includes(query)
        || componentId.includes(query)
      ) {
        filtered.set(componentId, bindings);
      }
    }

    return filtered;
  }, [activeComponents, searchQuery]);

  const formatTime = (ms: number): string => {
    if (ms < 1) return "<1ms";
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
  };

  const activeQueries = Array.from(activeComponents.values())
    .reduce((sum, bindings) => sum + bindings.length, 0);

  const loadingHooks = Array.from(activeComponents.values())
    .flatMap(bindings => bindings)
    .filter(binding => !binding.unmountedAt).length; // Approximate - will be refined with status tracking

  const hooksWithErrors = 0; // TODO: Track errors per binding

  const cacheHitRate = monitorStore.getMetricsStore().getCacheHitRate();

  return (
    <div className={styles.componentsTab}>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <Icon icon="widget" className={styles.statIcon} />
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Components</div>
            <div className={styles.statValue}>{activeComponents.size}</div>
          </div>
        </div>

        <div className={styles.stat}>
          <Icon icon="flow-linear" className={styles.statIcon} />
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Active Queries</div>
            <div className={styles.statValue}>{activeQueries}</div>
          </div>
        </div>

        <div className={styles.stat}>
          <Icon icon="refresh" className={styles.statIcon} />
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Loading</div>
            <div
              className={styles.statValue}
              style={{ color: loadingHooks > 0 ? "#137CBD" : undefined }}
            >
              {loadingHooks > 0 ? loadingHooks : "0"}
            </div>
          </div>
        </div>

        <div className={styles.stat}>
          <Icon icon="error" className={styles.statIcon} />
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Errors</div>
            <div
              className={styles.statValue}
              style={{ color: hooksWithErrors > 0 ? "#DB3737" : "#0F9960" }}
            >
              {hooksWithErrors}
            </div>
          </div>
        </div>

        <div className={styles.stat}>
          <Icon icon="database" className={styles.statIcon} />
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Cache Hit Rate</div>
            <div
              className={styles.statValue}
              style={{ color: cacheHitRate > 0.7 ? "#0F9960" : "#D9822B" }}
            >
              {(cacheHitRate * 100).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>

      <div className={styles.search}>
        <InputGroup
          leftIcon="search"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fill
        />
      </div>

      <div className={styles.componentList}>
        {filteredComponents.size === 0 && (
          <div className={styles.emptyState}>
            {searchQuery
              ? "No components match your search"
              : "No active components found. Make sure OSDK hooks are being called."}
          </div>
        )}

        {Array.from(filteredComponents).map(([componentId, bindings]) => (
          <ComponentCard
            key={componentId}
            componentId={componentId}
            bindings={bindings}
            formatTime={formatTime}
            monitorStore={monitorStore}
          />
        ))}
      </div>
    </div>
  );
};
