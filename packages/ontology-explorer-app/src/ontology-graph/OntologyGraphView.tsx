/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";

import { OntologyGraphFlow } from "./OntologyGraphFlow.js";
import {
  type OntologyEntityKind,
  OntologyGraphModel,
} from "./OntologyGraphModel.js";
import { OntologyNodeDetail } from "./OntologyNodeDetail.js";
import type { OntologyNodeUsage } from "./OntologyNodeDetail.js";
import type { OntologySource } from "./OntologySource.js";
import { TypeFilterBar } from "./TypeFilterBar.js";

import styles from "./OntologyGraphView.module.scss";

export interface OntologyGraphViewProps {
  /**
   * Where the graph's entities come from. The view builds and owns the model
   * internally and calls `source.seed` inside its `useSyncExternalStore`
   * subscribe (so callers avoid a `useEffect`). Keep `source` referentially
   * stable (e.g. `useMemo`) — a new `source` rebuilds the model and re-seeds.
   */
  source: OntologySource;
  theme: "light" | "dark";
  /** Tighter form factor for embedding in a panel (e.g. the devtools tab). */
  compact?: boolean;
  /**
   * Detail-panel usages for the selected entity's apiName. When omitted, the
   * detail panel hides its usages section. Wrap in `useCallback` keyed on
   * whatever versions your usage data so selections re-read fresh usages.
   */
  usagesForType?: (apiName: string) => OntologyNodeUsage[];
  usagesTitle?: string;
  usagesEmptyLabel?: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function OntologyGraphView({
  source,
  theme,
  compact = false,
  usagesForType,
  usagesTitle,
  usagesEmptyLabel,
  emptyTitle = "No ontology data",
  emptyDescription = "No entities to display.",
}: OntologyGraphViewProps): React.ReactElement {
  const model = useMemo(() => new OntologyGraphModel(source), [source]);

  const subscribe = useCallback(
    (callback: () => void) => {
      const teardownSeed = source.seed(model);
      const unsubscribeModel = model.subscribe(callback);
      return () => {
        unsubscribeModel();
        teardownSeed?.();
      };
    },
    [model, source],
  );
  const getSnapshot = useCallback(() => model.getVersion(), [model]);
  const version = React.useSyncExternalStore(subscribe, getSnapshot);

  const entities = useMemo(() => model.getEntities(), [model, version]);

  const [hiddenKinds, setHiddenKinds] = useState<
    ReadonlySet<OntologyEntityKind>
  >(
    () => new Set(),
  );
  const toggleKind = useCallback((kind: OntologyEntityKind) => {
    setHiddenKinds((prev) => {
      const next = new Set(prev);
      if (next.has(kind)) {
        next.delete(kind);
      } else {
        next.add(kind);
      }
      return next;
    });
  }, []);

  const countsByKind = useMemo(() => {
    const counts = new Map<OntologyEntityKind, number>();
    for (const entity of entities) {
      counts.set(entity.kind, (counts.get(entity.kind) ?? 0) + 1);
    }
    return counts;
  }, [entities]);

  const filteredEntities = useMemo(
    () => entities.filter((entity) => !hiddenKinds.has(entity.kind)),
    [entities, hiddenKinds],
  );

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const onSelect = useCallback(
    (nodeId: string | null) => {
      setSelectedNodeId(nodeId);
      if (nodeId != null) {
        const entity = model.getEntityByNodeId(nodeId);
        if (entity && entity.loadState === "stub") {
          model.loadEntity({ kind: entity.kind, apiName: entity.apiName });
        }
      }
    },
    [model],
  );

  const selected = selectedNodeId != null
    ? model.getEntityByNodeId(selectedNodeId)
    : undefined;
  // Hide the detail panel when its entity's kind is filtered out.
  const selectedInfo = selected && !hiddenKinds.has(selected.kind)
    ? selected
    : undefined;

  const usages = useMemo(() => {
    if (selectedNodeId == null || !usagesForType) {
      return undefined;
    }
    const entity = model.getEntityByNodeId(selectedNodeId);
    return entity ? usagesForType(entity.apiName) : undefined;
  }, [model, usagesForType, selectedNodeId]);

  return (
    <div
      className={classNames(styles.root, { [styles.compact]: compact })}
      data-og-theme={theme}
    >
      {entities.length === 0
        ? (
          <NonIdealState
            icon="graph"
            title={emptyTitle}
            description={emptyDescription}
          />
        )
        : (
          <>
            {countsByKind.size > 1 && (
              <TypeFilterBar
                counts={countsByKind}
                hiddenKinds={hiddenKinds}
                onToggle={toggleKind}
              />
            )}
            <div className={styles.graphArea}>
              <OntologyGraphFlow
                entities={filteredEntities}
                theme={theme}
                selectedNodeId={selectedNodeId}
                onSelect={onSelect}
              />
              {selectedInfo && (
                <OntologyNodeDetail
                  info={selectedInfo}
                  usages={usages}
                  usagesTitle={usagesTitle}
                  usagesEmptyLabel={usagesEmptyLabel}
                  onClose={() => setSelectedNodeId(null)}
                />
              )}
            </div>
          </>
        )}
    </div>
  );
}
