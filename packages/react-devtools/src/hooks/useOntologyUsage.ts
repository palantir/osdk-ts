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
  /** Distinct object-type api-names across object/list/aggregation bindings. */
  objectTypeCount: number;
  /** Distinct action names across `useOsdkAction` bindings. */
  actionTypeCount: number;
  /** Distinct `source-object:link-name` pairs across `useLinks` bindings. */
  linkCount: number;
}

/**
 * Derives the Overview's ontology-in-use counts from the component query
 * registry's active bindings — the same source the Debugging/Components view
 * reads, so the two cannot diverge. Every object/list/aggregation binding
 * counts as an object type. Links are counted per distinct source-object/
 * link-name pair.
 */
export function useOntologyUsage(monitorStore: MonitorStore): OntologyUsage {
  const activeComponents = useActiveComponents(monitorStore);

  const objectTypes = new Set<string>();
  const actionTypes = new Set<string>();
  const links = new Set<string>();

  for (const bindings of activeComponents.values()) {
    for (const b of bindings) {
      const params = b.queryParams;
      if (params.type === "action") {
        actionTypes.add(params.actionName);
      } else if (params.type === "links") {
        links.add(`${params.sourceObject}:${params.linkName}`);
      } else if (
        params.type === "object" ||
        params.type === "list" ||
        params.type === "aggregation"
      ) {
        objectTypes.add(params.objectType);
      }
    }
  }

  return {
    objectTypeCount: objectTypes.size,
    actionTypeCount: actionTypes.size,
    linkCount: links.size,
  };
}
