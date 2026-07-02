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
import React, {
  useCallback,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import type { DevToolsPanelProps } from "../../plugins/types.js";
import { resolveComponentName } from "../resolveComponentName.js";
import { ComponentCard } from "./ComponentCard.js";
import { useComponentInsights } from "./useComponentInsights.js";

import styles from "./ComponentsPanel.module.scss";

/**
 * The component inspector: every mounted OSDK component, what it queries, how
 * fresh its data is, and where it over-fetches or wastes renders. Filterable by
 * component or query.
 */
export const ComponentsPanel: React.FC<DevToolsPanelProps> = ({
  monitorStore,
}) => {
  const registry = monitorStore.getComponentRegistry();
  const subscribe = useCallback(
    (cb: () => void) => registry.subscribe(cb),
    [registry]
  );
  const getVersion = useCallback(() => registry.getVersion(), [registry]);
  const version = useSyncExternalStore(subscribe, getVersion, getVersion);
  const insights = useComponentInsights(monitorStore);
  const [search, setSearch] = useState("");

  const components = useMemo(() => {
    const list = [...registry.getActiveComponents().entries()].map(
      ([componentId, bindings]) => ({
        componentId,
        bindings,
        name: resolveComponentName(bindings),
      })
    );
    const query = search.trim().toLowerCase();
    if (query.length === 0) {
      return list;
    }
    return list.filter(
      (component) =>
        component.name.toLowerCase().includes(query) ||
        component.bindings.some((binding) =>
          binding.querySignature.toLowerCase().includes(query)
        )
    );
    // version makes the memo recompute when the registry changes.
  }, [registry, version, search]);

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <InputGroup
          leftIcon="search"
          placeholder="Filter components…"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </div>
      {components.length === 0 ? (
        <div className={styles.empty}>
          {search.length > 0
            ? "No components match your filter."
            : "No OSDK components are mounted yet."}
        </div>
      ) : (
        <div className={styles.list}>
          {components.map((component) => (
            <ComponentCard
              key={component.componentId}
              componentId={component.componentId}
              bindings={component.bindings}
              monitorStore={monitorStore}
              wasted={insights.wastedByComponent.get(component.componentId)}
              unused={insights.unusedByComponent.get(component.componentId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
