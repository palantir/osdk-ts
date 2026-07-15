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
  OntologyEntityKind,
  OntologyGraphModel,
  OntologySource,
} from "@osdk/ontology-explorer-app/ontology-graph";

import type { MonitorStore } from "./MonitorStore.js";

/**
 * The "Local" ontology graph source: every object, action and query type in the
 * client's ontology, whether or not the app has used it. The full type lists are
 * fetched from the live client; per-entity metadata still loads lazily as the
 * model requests it.
 */
export class ClientLocalOntologySource implements OntologySource {
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

  seed(model: OntologyGraphModel): void {
    const seedKind = (
      kind: OntologyEntityKind,
      list: () => Promise<string[]>
    ) => {
      void list().then((apiNames) => {
        model.markUsed(apiNames.map((apiName) => ({ kind, apiName })));
      });
    };

    seedKind("object", () => this.#monitorStore.listObjectTypeApiNames());
    seedKind("action", () => this.#monitorStore.listActionApiNames());
    seedKind("query", () => this.#monitorStore.listQueryApiNames());
  }
}
