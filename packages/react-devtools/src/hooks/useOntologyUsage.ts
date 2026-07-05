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

import type { MonitorStore } from "../store/MonitorStore.js";
import { useActiveComponents } from "./useActiveComponents.js";

export interface OntologyUsage {
  /** Distinct object-type api-names in active bindings whose entity kind is not `interface`. */
  objectTypeCount: number;
  /** Distinct interface api-names in active bindings whose entity kind is `interface`. */
  interfaceCount: number;
  /** Distinct action names across `useOsdkAction` bindings. */
  actionTypeCount: number;
  /** True when the registry has no active components (drives the "no ontology" empty state). */
  isEmpty: boolean;
}

/**
 * Derives the Overview's ontology-in-use counts from the component query
 * registry's active bindings — the same source the Debugging/Components view
 * reads, so the two cannot diverge. Interface-kind bindings are counted as
 * interfaces; every other object/list/aggregation binding counts as an object
 * type.
 */
export function useOntologyUsage(monitorStore: MonitorStore): OntologyUsage {
  const activeComponents = useActiveComponents(monitorStore);

  const objectTypes = new Set<string>();
  const interfaceTypes = new Set<string>();
  const actionTypes = new Set<string>();

  for (const bindings of activeComponents.values()) {
    for (const b of bindings) {
      const params = b.queryParams;
      if (params.type === "action") {
        actionTypes.add(params.actionName);
      } else if (
        params.type === "object" ||
        params.type === "list" ||
        params.type === "aggregation"
      ) {
        if (params.entityKind === "interface") {
          interfaceTypes.add(params.objectType);
        } else {
          objectTypes.add(params.objectType);
        }
      }
    }
  }

  return {
    objectTypeCount: objectTypes.size,
    interfaceCount: interfaceTypes.size,
    actionTypeCount: actionTypes.size,
    isEmpty: activeComponents.size === 0,
  };
}
