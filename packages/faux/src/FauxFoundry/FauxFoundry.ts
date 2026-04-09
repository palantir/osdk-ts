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

import type { Logger } from "@osdk/api";
import type { Ontology, OntologyV2 } from "@osdk/foundry.ontologies";
import type { RequestHandler } from "msw";
import * as crypto from "node:crypto";
import { OntologyNotFoundError } from "../errors.js";
import { createFauxFoundryHandlers } from "../handlers/createFauxFoundryHandlers.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import { FauxAdmin } from "./FauxAdmin.js";
import { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStore } from "./FauxDataStore.js";
import { FauxOntology } from "./FauxOntology.js";

export class FauxFoundry {
  #ontologiesByRid = new Map<string, FauxOntology>();
  #ontologiesByApiName = new Map<string, FauxOntology>();

  #dataStoresByOntologyApiName = new Map<string, FauxDataStore>();

  #handlers: RequestHandler[];

  readonly admin: FauxAdmin = new FauxAdmin();
  readonly attachments: FauxAttachmentStore = new FauxAttachmentStore();
  readonly baseUrl: string;
  readonly defaultOntologyRid: any;
  readonly logger: Logger | undefined;
  strict: boolean;

  constructor(
    baseUrl: string,
    defaultOntology: Ontology = {
      apiName: "default-ontology",
      displayName: "Ontology",
      description: "The default ontology",
      rid: `ri.ontology.main.ontology.${crypto.randomUUID()}`,
    },
    { logger, strict }: { logger?: Logger; strict?: boolean } = {},
  ) {
    this.strict = strict ?? true;
    this.baseUrl = baseUrl;
    this.#handlers = createFauxFoundryHandlers(baseUrl, this);
    this.createOntology(defaultOntology);
    this.defaultOntologyRid = defaultOntology.rid;
    this.logger = logger;
  }

  get handlers(): RequestHandler[] {
    return this.#handlers;
  }

  getDefaultOntology(): FauxOntology {
    return this.getOntology(this.defaultOntologyRid);
  }

  getDefaultDataStore(): FauxDataStore {
    return this.getDataStore(this.defaultOntologyRid);
  }

  getAdmin(): FauxAdmin {
    return this.admin;
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
      const ret = new FauxDataStore(ontology, this.attachments, this.strict);
      this.setDataStore(ontologyApiNameOrRid, ret);
      return ret;
    }
    return dataStore;
  }

  getEveryOntology(): FauxOntology[] {
    return Object.values(this.#ontologiesByApiName);
  }
}
