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
import { type ComponentFilter, ComponentFilters } from "./ComponentFilters.js";
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
 * The component inspector: every mounted OSDK component as an ontology tree of
 * the object types, actions, and properties it uses. Search by name, or filter
 * down to a single object type or action.
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
  const [filter, setFilter] = useState<ComponentFilter | null>(null);

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

  const facets = useMemo(() => {
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
      objectTypes: [...objectTypes].sort((a, b) => a.localeCompare(b)),
      actions: [...actions].sort((a, b) => a.localeCompare(b)),
    };
  }, [entries]);

  const query = search.trim().toLowerCase();
  const visible = entries.filter((entry) => {
    if (query.length > 0 && !entry.haystack.includes(query)) {
      return false;
    }
    if (filter != null) {
      const inScope =
        filter.kind === "objectType"
          ? entry.ontology.objectTypes.some((t) => t.name === filter.name)
          : entry.ontology.actions.includes(filter.name);
      if (!inScope) {
        return false;
      }
    }
    return true;
  });

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
        objectTypeCount={facets.objectTypes.length}
        actionTypeCount={facets.actions.length}
      />
      <ComponentFilters
        objectTypes={facets.objectTypes}
        actions={facets.actions}
        active={filter}
        onChange={setFilter}
      />
      {visible.length === 0 ? (
        <div className={styles.empty}>
          {entries.length > 0
            ? "No components match."
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
