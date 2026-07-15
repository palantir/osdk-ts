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

import type { ActionMetadata, ObjectMetadata, QueryMetadata } from "@osdk/api";
import type {
  OntologyGraphModel,
  OntologySource,
} from "@osdk/ontology-explorer-app/ontology-graph";

import type { MonitorStore } from "./MonitorStore.js";
import { collectUsedEntities } from "./ontologyGraphBindings.js";

/**
 * The "Used" ontology graph source: only the entities the app has actually
 * touched — object and action types a mounted component has queried (the
 * component/query registry) plus any object types that have been cached.
 * Re-syncs as components mount and unmount. Query types aren't tracked as hook
 * usages, so they only appear in the "Local" source.
 */
export class ClientUsedOntologySource implements OntologySource {
  readonly #monitorStore: MonitorStore;

  constructor(monitorStore: MonitorStore) {
    this.#monitorStore = monitorStore;
  }

  fetchObjectMetadata(apiName: string): Promise<ObjectMetadata> {
    return this.#monitorStore.fetchObjectMetadata(apiName);
  }

  fetchActionMetadata(apiName: string): Promise<ActionMetadata> {
    return this.#monitorStore.fetchActionMetadata(apiName);
  }

  fetchQueryMetadata(apiName: string): Promise<QueryMetadata> {
    return this.#monitorStore.fetchQueryMetadata(apiName);
  }

  seed(model: OntologyGraphModel): () => void {
    const registry = this.#monitorStore.getComponentRegistry();
    const syncUsed = () => model.markUsed(collectUsedEntities(registry));
    syncUsed();

    // Also seed from what has been cached, which can include object types
    // reached outside the tracked hooks. Fetched once; a fresh toggle re-runs.
    void this.#monitorStore.getCacheSnapshot().then((snapshot) => {
      const cached = new Set<string>();
      for (const entry of snapshot.entries) {
        if (entry.objectType) {
          cached.add(entry.objectType);
        }
      }
      if (cached.size > 0) {
        model.markUsed(
          [...cached].map((apiName) => ({ kind: "object" as const, apiName }))
        );
      }
    });

    return registry.subscribe(syncUsed);
  }
}
