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
import React, { useMemo, useState } from "react";

import { createPollingStore } from "../hooks/createPollingStore.js";
import { useActiveComponents } from "../hooks/useActiveComponents.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import { formatTime } from "../utils/format.js";
import { collectIssues } from "./collectIssues.js";
import { ComponentCard } from "./ComponentCard.js";
import type { Issue } from "./issueTypes.js";
import { resolveComponentName } from "./resolveComponentName.js";

import styles from "./ComponentsTab.module.scss";

export interface ComponentsTabProps {
  monitorStore: MonitorStore;
}

export const ComponentsTab: React.FC<ComponentsTabProps> = ({
  monitorStore,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const activeComponents = useActiveComponents(monitorStore);

  const issueStore = useMemo(
    () =>
      createPollingStore(() => collectIssues(monitorStore, Date.now()), 2000),
    [monitorStore]
  );
  const issues =
    React.useSyncExternalStore(issueStore.subscribe, issueStore.getSnapshot) ??
    [];

  const issuesByComponent = useMemo(() => {
    const map = new Map<string, Issue[]>();
    for (const issue of issues) {
      if (issue.componentId) {
        const existing = map.get(issue.componentId);
        if (existing) {
          existing.push(issue);
        } else {
          map.set(issue.componentId, [issue]);
        }
      }
    }
    return map;
  }, [issues]);

  const filteredComponents = useMemo<
    Map<string, ComponentHookBinding[]>
  >(() => {
    if (!searchQuery.trim()) {
      return activeComponents;
    }

    const q = searchQuery.toLowerCase();
    const filtered = new Map<string, ComponentHookBinding[]>();

    for (const [componentId, bindings] of activeComponents) {
      const displayName = resolveComponentName(bindings).toLowerCase();

      if (displayName.includes(q) || componentId.includes(q)) {
        filtered.set(componentId, bindings);
      }
    }

    return filtered;
  }, [activeComponents, searchQuery]);

  return (
    <div className={styles.componentsTab}>
      <div className={styles.controls}>
        <InputGroup
          leftIcon="search"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
          fill={true}
        />
      </div>

      <div className={styles.feed}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Components</span>
            <span className={styles.sectionCount}>
              {filteredComponents.size}
            </span>
          </div>
          {filteredComponents.size === 0 && (
            <div className={styles.emptyState}>
              {searchQuery
                ? "No components match your search"
                : "No active components found"}
            </div>
          )}
          {[...filteredComponents].map(([componentId, bindings], index) => (
            <ComponentCard
              key={componentId}
              componentId={componentId}
              bindings={bindings}
              formatTime={formatTime}
              monitorStore={monitorStore}
              issues={issuesByComponent.get(componentId)}
              style={{ "--entrance-index": index } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
