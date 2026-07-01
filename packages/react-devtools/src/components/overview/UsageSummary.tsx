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

import React, { useCallback, useMemo, useSyncExternalStore } from "react";

import type { MonitorStore } from "../../store/MonitorStore.js";
import type { QueryParams } from "../../utils/ComponentQueryRegistry.js";
import styles from "./OverviewPanel.module.scss";

type UsageKind = "Object types" | "Actions" | "Links";

const KIND_ORDER: UsageKind[] = ["Object types", "Actions", "Links"];

function usageKind(params: QueryParams): UsageKind {
  if (params.type === "action") {
    return "Actions";
  }
  if (params.type === "links") {
    return "Links";
  }
  return "Object types";
}

function usageName(params: QueryParams): string {
  switch (params.type) {
    case "object":
    case "list":
    case "aggregation": {
      return params.objectType;
    }
    case "action": {
      return params.actionName;
    }
    case "links": {
      return `${params.sourceObject} → ${params.linkName}`;
    }
    case "objectSet": {
      return params.baseObjectSet;
    }
    default: {
      return "Unknown";
    }
  }
}

interface UsageEntry {
  name: string;
  count: number;
}

interface UsageSummaryProps {
  monitorStore: MonitorStore;
}

/**
 * What the running app is actually using: object types, actions and links in
 * play, with how many live components reference each. Derived from the
 * component registry, no extra instrumentation.
 */
export const UsageSummary: React.FC<UsageSummaryProps> = ({ monitorStore }) => {
  const registry = monitorStore.getComponentRegistry();
  const subscribe = useCallback(
    (cb: () => void) => registry.subscribe(cb),
    [registry],
  );
  const getVersion = useCallback(() => registry.getVersion(), [registry]);
  const version = useSyncExternalStore(subscribe, getVersion, getVersion);

  const groups = useMemo(() => {
    const byKind = new Map<UsageKind, Map<string, number>>();
    for (const bindings of registry.getActiveComponents().values()) {
      for (const binding of bindings) {
        const kind = usageKind(binding.queryParams);
        const name = usageName(binding.queryParams);
        let names = byKind.get(kind);
        if (names === undefined) {
          names = new Map<string, number>();
          byKind.set(kind, names);
        }
        names.set(name, (names.get(name) ?? 0) + 1);
      }
    }
    return KIND_ORDER.map((kind) => {
      const names = byKind.get(kind);
      const entries: UsageEntry[] = names
        ? [...names.entries()]
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
        : [];
      return { kind, entries };
    }).filter((group) => group.entries.length > 0);
    // version participates so the memo recomputes when the registry changes.
  }, [registry, version]);

  if (groups.length === 0) {
    return (
      <div className={styles.section}>
        <div className={styles.sectionTitle}>In use</div>
        <div className={styles.empty}>
          No OSDK hooks have rendered yet.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>In use</div>
      <div className={styles.usageGroups}>
        {groups.map((group) => (
          <div key={group.kind} className={styles.usageGroup}>
            <div className={styles.usageKind}>{group.kind}</div>
            {group.entries.map((entry) => (
              <div key={entry.name} className={styles.usageRow}>
                <span className={styles.usageName}>{entry.name}</span>
                <span className={styles.usageCount}>{entry.count}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
