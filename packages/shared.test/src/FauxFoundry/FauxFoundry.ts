/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyV2 } from "@osdk/foundry.ontologies";
import { OntologyNotFoundError } from "../errors.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStore } from "./FauxDataStore.js";
import { FauxOntology } from "./FauxOntology.js";

export class FauxFoundry {
  #ontologiesByRid = new Map<string, FauxOntology>();
  #ontologiesByApiName = new Map<string, FauxOntology>();

  #dataStoresByOntologyApiName = new Map<string, FauxDataStore>();

  readonly attachments: FauxAttachmentStore = new FauxAttachmentStore();

  constructor() {
  }

  createOntology(metadata: OntologyV2): FauxOntology {
    const ret = new FauxOntology(metadata);
    this.registerOntology(ret);

    return ret;
  }

  registerOntology(ontology: FauxOntology): void {
    this.#ontologiesByApiName.set(
      ontology.getOntologyFullMetadata().ontology.apiName,
      ontology,
    );

    this.#ontologiesByRid.set(
      ontology.getOntologyFullMetadata().ontology.rid,
      ontology,
    );
  }

  getOntology(ontologyApiNameOrRid: string): FauxOntology {
    const ontology = this.#ontologiesByApiName.get(ontologyApiNameOrRid)
      ?? this.#ontologiesByRid.get(ontologyApiNameOrRid);
    if (!ontology) {
      throw new OpenApiCallError(
        404,
        OntologyNotFoundError(ontologyApiNameOrRid),
      );
    }
    return ontology;
  }

  setDataStore(
    ontologyApiNameOrRid: string,
    fauxDataStore: FauxDataStore,
  ): void {
    const ontology = this.getOntology(ontologyApiNameOrRid); // will throw
    this.#dataStoresByOntologyApiName.set(
      ontology.apiName,
      fauxDataStore,
    );
  }

  getDataStore(ontologyApiNameOrRid: string): FauxDataStore {
    const ontology = this.getOntology(ontologyApiNameOrRid); // will throw
    const dataStore = this.#dataStoresByOntologyApiName.get(ontology.apiName);
    if (!dataStore) {
      const ret = new FauxDataStore(ontology, this.attachments);
      this.setDataStore(ontologyApiNameOrRid, ret);
      return ret;
    }
    return dataStore;
  }

  getEveryOntology(): FauxOntology[] {
    return Object.values(this.#ontologiesByApiName);
  }
}
