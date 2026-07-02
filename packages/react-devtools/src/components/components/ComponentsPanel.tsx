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
import { ComponentsHeader } from "./ComponentsHeader.js";
import {
  type ComponentOntology,
  deriveComponentOntology,
} from "./deriveComponentOntology.js";
import { useComponentInsights } from "./useComponentInsights.js";

import styles from "./ComponentsPanel.module.scss";

interface ComponentEntry {
  componentId: string;
  name: string;
  ontology: ComponentOntology;
  /** Lowercased searchable text: name + object types + actions + properties. */
  haystack: string;
}

/**
 * The component inspector: every mounted OSDK component shown as an ontology
 * tree of the object types, actions, and properties it uses. Filterable by any
 * of those names through the search box.
 */
export const ComponentsPanel: React.FC<DevToolsPanelProps> = ({
  monitorStore,
}) => {
  const registry = monitorStore.getComponentRegistry();
  const tracker = monitorStore.getPropertyAccessTracker();
  const subscribe = useCallback(
    (cb: () => void) => registry.subscribe(cb),
    [registry]
  );
  const getVersion = useCallback(() => registry.getVersion(), [registry]);
  const version = useSyncExternalStore(subscribe, getVersion, getVersion);
  const insights = useComponentInsights(monitorStore);
  const [search, setSearch] = useState("");

  const entries = useMemo<ComponentEntry[]>(() => {
    return [...registry.getActiveComponents().entries()].map(
      ([componentId, bindings]) => {
        const ontology = deriveComponentOntology(
          bindings,
          tracker.getAccessesByComponent(componentId),
          registry.getComponentProps(componentId),
          {
            wasted: insights.wastedByComponent.get(componentId),
            unused: insights.unusedByComponent.get(componentId),
          }
        );
        const name = resolveComponentName(bindings);
        const haystack = [
          name,
          ...ontology.objectTypes.map((t) => t.name),
          ...ontology.objectTypes.flatMap((t) => t.instances),
          ...ontology.actions,
          ...ontology.properties.flatMap((p) => [p.objectType, ...p.names]),
        ]
          .join(" ")
          .toLowerCase();
        return { componentId, name, ontology, haystack };
      }
    );
    // version + insights drive the recompute as the registry and tracker change.
  }, [registry, tracker, version, insights]);

  const stats = useMemo(() => {
    const objectTypes = new Set<string>();
    const actions = new Set<string>();
    for (const entry of entries) {
      for (const objectType of entry.ontology.objectTypes) {
        objectTypes.add(objectType.name);
      }
      for (const action of entry.ontology.actions) {
        actions.add(action);
      }
    }
    return {
      objectTypeCount: objectTypes.size,
      actionTypeCount: actions.size,
    };
  }, [entries]);

  const query = search.trim().toLowerCase();
  const visible =
    query.length === 0
      ? entries
      : entries.filter((entry) => entry.haystack.includes(query));

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <InputGroup
          leftIcon="search"
          placeholder="Search ontology"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </div>
      <ComponentsHeader
        componentCount={entries.length}
        objectTypeCount={stats.objectTypeCount}
        actionTypeCount={stats.actionTypeCount}
      />
      {visible.length === 0 ? (
        <div className={styles.empty}>
          {entries.length > 0
            ? "No components match your search."
            : "No OSDK components are mounted yet."}
        </div>
      ) : (
        <div className={styles.list}>
          {visible.map((entry) => (
            <ComponentCard
              key={entry.componentId}
              name={entry.name}
              ontology={entry.ontology}
            />
          ))}
        </div>
      )}
    </div>
  );
};
