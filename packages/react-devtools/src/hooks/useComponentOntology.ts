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

import { useCallback, useMemo, useSyncExternalStore } from "react";

import {
  type ComponentOntology,
  deriveComponentOntology,
} from "../components/components/deriveComponentOntology.js";
import { useComponentInsights } from "../components/components/useComponentInsights.js";
import { resolveComponentName } from "../components/resolveComponentName.js";
import type { MonitorStore } from "../store/MonitorStore.js";

/** A single mounted component together with its derived ontology. */
export interface ComponentEntry {
  componentId: string;
  name: string;
  ontology: ComponentOntology;
  /** Lowercased searchable text: name + object types + actions + properties. */
  haystack: string;
}

/** Distinct, sorted object-type and action names across every entry. */
export interface OntologyFacets {
  objectTypes: string[];
  actions: string[];
  links: string[];
}

export interface ComponentOntologyResult {
  entries: ComponentEntry[];
  facets: OntologyFacets;
}

/**
 * Single source of truth for the component ontology and its facets. Owns the one
 * subscription to the component registry and folds each active component's
 * bindings into a {@link ComponentOntology} exactly once; the facets are derived
 * from those same entries so header counts, filters, and cards cannot diverge.
 */
export function useComponentOntology(
  monitorStore: MonitorStore
): ComponentOntologyResult {
  const registry = monitorStore.getComponentRegistry();
  const tracker = monitorStore.getPropertyAccessTracker();
  const subscribe = useCallback(
    (cb: () => void) => registry.subscribe(cb),
    [registry]
  );
  const getVersion = useCallback(() => registry.getVersion(), [registry]);
  const version = useSyncExternalStore(subscribe, getVersion, getVersion);
  const insights = useComponentInsights(monitorStore);

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
    const links = new Set<string>();
    for (const entry of entries) {
      for (const objectType of entry.ontology.objectTypes) {
        objectTypes.add(objectType.name);
      }
      for (const action of entry.ontology.actions) {
        actions.add(action);
      }
      for (const link of entry.ontology.links) {
        links.add(link);
      }
    }
    return {
      objectTypes: [...objectTypes].sort((a, b) => a.localeCompare(b)),
      actions: [...actions].sort((a, b) => a.localeCompare(b)),
      links: [...links].sort((a, b) => a.localeCompare(b)),
    };
  }, [entries]);

  return { entries, facets };
}
