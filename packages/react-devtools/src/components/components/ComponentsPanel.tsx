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
import React, { useState } from "react";

import { useComponentOntology } from "../../hooks/useComponentOntology.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import { ComponentCard } from "./ComponentCard.js";
import { type ComponentFilter, ComponentFilters } from "./ComponentFilters.js";
import { ComponentsHeader } from "./ComponentsHeader.js";

import styles from "./ComponentsPanel.module.scss";

interface ComponentsPanelProps {
  monitorStore: MonitorStore;
}

export const ComponentsPanel: React.FC<ComponentsPanelProps> = ({
  monitorStore,
}) => {
  const { entries, facets } = useComponentOntology(monitorStore);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ComponentFilter | null>(null);

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
