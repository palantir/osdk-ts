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

import { OntologyNotFoundError } from "../errors.js";
import { createFauxFoundryHandlers } from "../handlers/createFauxFoundryHandlers.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStore } from "./FauxDataStore.js";
import { FauxOntology } from "./FauxOntology.js";
export class FauxFoundry {
  #ontologiesByRid = new Map();
  #ontologiesByApiName = new Map();
  #dataStoresByOntologyApiName = new Map();
  #handlers;
  attachments = new FauxAttachmentStore();
  constructor(baseUrl, defaultOntology = {
    apiName: "default-ontology",
    displayName: "Ontology",
    description: "The default ontology",
    rid: `ri.ontology.main.ontology.${crypto.randomUUID()}`
  }) {
    this.baseUrl = baseUrl;
    this.#handlers = createFauxFoundryHandlers(baseUrl, this);
    this.createOntology(defaultOntology);
    this.defaultOntologyRid = defaultOntology.rid;
  }
  get handlers() {
    return this.#handlers;
  }
  getDefaultOntology() {
    return this.getOntology(this.defaultOntologyRid);
  }
  getDefaultDataStore() {
    return this.getDataStore(this.defaultOntologyRid);
  }
  createOntology(metadata) {
    const ret = new FauxOntology(metadata);
    this.registerOntology(ret);
    return ret;
  }
  registerOntology(ontology) {
    this.#ontologiesByApiName.set(ontology.getOntologyFullMetadata().ontology.apiName, ontology);
    this.#ontologiesByRid.set(ontology.getOntologyFullMetadata().ontology.rid, ontology);
  }
  getOntology(ontologyApiNameOrRid) {
    const ontology = this.#ontologiesByApiName.get(ontologyApiNameOrRid) ?? this.#ontologiesByRid.get(ontologyApiNameOrRid);
    if (!ontology) {
      throw new OpenApiCallError(404, OntologyNotFoundError(ontologyApiNameOrRid));
    }
    return ontology;
  }
  setDataStore(ontologyApiNameOrRid, fauxDataStore) {
    const ontology = this.getOntology(ontologyApiNameOrRid); // will throw
    this.#dataStoresByOntologyApiName.set(ontology.apiName, fauxDataStore);
  }
  getDataStore(ontologyApiNameOrRid) {
    const ontology = this.getOntology(ontologyApiNameOrRid); // will throw
    const dataStore = this.#dataStoresByOntologyApiName.get(ontology.apiName);
    if (!dataStore) {
      const ret = new FauxDataStore(ontology, this.attachments);
      this.setDataStore(ontologyApiNameOrRid, ret);
      return ret;
    }
    return dataStore;
  }
  getEveryOntology() {
    return Object.values(this.#ontologiesByApiName);
  }
}
//# sourceMappingURL=FauxFoundry.js.map