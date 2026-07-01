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

import { NonIdealState } from "@blueprintjs/core";
import React, { useCallback, useMemo, useState } from "react";

import { useComponentRegistry } from "../hooks/useComponentRegistry.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { OntologyGraphModel } from "../store/OntologyGraphModel.js";
import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import { OntologyGraphFlow } from "./ontology-graph/OntologyGraphFlow.js";
import { OntologyNodeDetail } from "./ontology-graph/OntologyNodeDetail.js";

import styles from "./OntologyGraphTab.module.scss";

export interface OntologyGraphTabProps {
  monitorStore: MonitorStore;
  theme: "light" | "dark";
}

function usagesForType(
  bindings: ComponentHookBinding[],
  apiName: string
): ComponentHookBinding[] {
  return bindings.filter((binding) => {
    if (binding.unmountedAt) {
      return false;
    }
    const params = binding.queryParams;
    if (
      params.type === "object" ||
      params.type === "list" ||
      params.type === "aggregation"
    ) {
      return params.objectType === apiName;
    }
    if (params.type === "links") {
      return params.sourceObject === apiName;
    }
    return false;
  });
}

export const OntologyGraphTab: React.FC<OntologyGraphTabProps> = ({
  monitorStore,
  theme,
}) => {
  const model = useMemo(
    () => new OntologyGraphModel(monitorStore),
    [monitorStore]
  );

  const subscribe = useCallback(
    (callback: () => void) => {
      model.start();
      const unsubscribe = model.subscribe(callback);
      return () => {
        unsubscribe();
        model.stop();
      };
    },
    [model]
  );
  const getSnapshot = useCallback(() => model.getVersion(), [model]);
  const version = React.useSyncExternalStore(subscribe, getSnapshot);

  const types = useMemo(() => model.getTypes(), [model, version]);

  const registry = useComponentRegistry(monitorStore);
  const registryVersion = registry.getVersion();

  const [selectedApiName, setSelectedApiName] = useState<string | null>(null);

  const onSelect = useCallback(
    (apiName: string | null) => {
      setSelectedApiName(apiName);
      if (apiName) {
        const info = model.getType(apiName);
        if (info && info.loadState === "stub") {
          model.loadType(apiName);
        }
      }
    },
    [model]
  );

  const selectedInfo = selectedApiName
    ? model.getType(selectedApiName)
    : undefined;

  const usages = useMemo(() => {
    if (!selectedApiName) {
      return [];
    }
    return usagesForType(registry.getAllBindings(), selectedApiName);
    // registryVersion drives recomputation as components mount/unmount
  }, [registry, registryVersion, selectedApiName]);

  return (
    <div className={styles.tab}>
      {types.length === 0 ? (
        <NonIdealState
          icon="graph"
          title="No ontology data yet"
          description="Object types appear here as the app loads them through OSDK hooks."
        />
      ) : (
        <div className={styles.graphArea}>
          <OntologyGraphFlow
            types={types}
            theme={theme}
            selectedApiName={selectedApiName}
            onSelect={onSelect}
          />
          {selectedInfo && (
            <OntologyNodeDetail
              info={selectedInfo}
              usages={usages}
              onClose={() => setSelectedApiName(null)}
            />
          )}
        </div>
      )}
    </div>
  );
};
