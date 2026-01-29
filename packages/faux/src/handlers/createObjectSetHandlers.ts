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

import type { RequestHandler } from "msw";
import type { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
import { OntologiesV2 } from "../mock/index.js";

export const createObjectSetHandlers = (
  baseUrl: string,
  fauxFoundry: FauxFoundry,
): Array<RequestHandler> => [
  /**
   * Load ObjectSet Objects
   */
  OntologiesV2.OntologyObjectSets.load(
    baseUrl,
    async ({ request, params }) => {
      const a = fauxFoundry
        .getDataStore(params.ontologyApiName)
        .getObjectsFromObjectSet(await request.json());
      return a;
    },
  ),

  /**
   * Aggregate Objects in ObjectSet
   */
  OntologiesV2.OntologyObjectSets.aggregate(
    baseUrl,
    async ({ request }) => {
      throw new Error("Not implemented");
    },
  ),

  /**
   * Load interface objectset Objects
   */
  OntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
    baseUrl,
    async ({ params, request }) => {
      const pagedResponse = fauxFoundry
        .getDataStore(params.ontologyApiName)
        .getObjectsFromObjectSet(await request.json());

      const objectApiNames = new Set(pagedResponse.data.map(o => o.__apiName));

      return {
        interfaceToObjectTypeMappings: fauxFoundry
          .getOntology(params.ontologyApiName)
          .getInterfaceToObjectTypeMappings(objectApiNames),
        interfaceToObjectTypeMappingsV2: {},
        ...pagedResponse,
        propertySecurities: [],
      };
    },
  ),
];
