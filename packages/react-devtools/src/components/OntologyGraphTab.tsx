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

import { SegmentedControl } from "@blueprintjs/core";
import { OntologyGraphView } from "@osdk/ontology-explorer-app/ontology-graph";
import type { OntologySource } from "@osdk/ontology-explorer-app/ontology-graph";
import React, { useCallback, useMemo } from "react";

import { useComponentRegistry } from "../hooks/useComponentRegistry.js";
import { usePersistedState } from "../hooks/usePersistedState.js";
import { ClientLocalOntologySource } from "../store/ClientLocalOntologySource.js";
import { ClientUsedOntologySource } from "../store/ClientUsedOntologySource.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import {
  toOntologyNodeUsages,
  usagesForType,
} from "../store/ontologyGraphBindings.js";

import styles from "./OntologyGraphTab.module.scss";

export interface OntologyGraphTabProps {
  monitorStore: MonitorStore;
  theme: "light" | "dark";
}

type OntologySourceMode = "used" | "local";

/**
 * Devtools tab for the ontology graph. The rendering lives in the shared
 * `OntologyGraphView`; this wrapper supplies the devtools-specific pieces: the
 * Used/Local source toggle and per-type "used by components" usages derived
 * from the component registry.
 */
export const OntologyGraphTab: React.FC<OntologyGraphTabProps> = ({
  monitorStore,
  theme,
}) => {
  const [mode, setMode] = usePersistedState<OntologySourceMode>(
    "osdk-devtools-ontology-source",
    "used"
  );

  const source = useMemo<OntologySource>(
    () =>
      mode === "local"
        ? new ClientLocalOntologySource(monitorStore)
        : new ClientUsedOntologySource(monitorStore),
    [monitorStore, mode]
  );

  const registry = useComponentRegistry(monitorStore);
  const registryVersion = registry.getVersion();

  const getUsages = useCallback(
    (apiName: string) =>
      toOntologyNodeUsages(usagesForType(registry.getAllBindings(), apiName)),
    // registryVersion drives recomputation as components mount/unmount
    [registry, registryVersion]
  );

  return (
    <div className={styles.tab}>
      <div className={styles.toolbar}>
        <span className={styles.toolbarLabel}>Show</span>
        <SegmentedControl
          size="small"
          options={[
            { label: "Used", value: "used" },
            { label: "Generated Ontology", value: "local" },
          ]}
          value={mode}
          onValueChange={(value) =>
            setMode(value === "local" ? "local" : "used")
          }
        />
      </div>
      <OntologyGraphView
        source={source}
        theme={theme}
        compact
        usagesForType={getUsages}
        usagesTitle="Used by components"
        usagesEmptyLabel="No mounted components use this type"
        emptyTitle={
          mode === "local" ? "No ontology data found" : "No ontology data yet"
        }
        emptyDescription={
          mode === "local"
            ? "The client's ontology reported no entities."
            : "Entities appear here as the app loads them through OSDK hooks."
        }
      />
    </div>
  );
};
