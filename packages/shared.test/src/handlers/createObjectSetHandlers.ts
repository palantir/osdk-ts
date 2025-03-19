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
import { MockOntologiesV2 } from "./MockOntologiesV2.js";

export const createObjectSetHandlers = (
  baseUrl: string,
  fauxFoundry: FauxFoundry,
): Array<RequestHandler> => [
  /**
   * Load ObjectSet Objects
   */
  MockOntologiesV2.OntologyObjectSets.load(
    baseUrl,
    async ({ request, params }) => {
      return fauxFoundry
        .getDataStore(params.ontologyApiName)
        .getObjectsFromObjectSet(await request.json());
    },
  ),

  /**
   * Aggregate Objects in ObjectSet
   */
  MockOntologiesV2.OntologyObjectSets.aggregate(
    baseUrl,
    async ({ request }) => {
      throw new Error("Not implemented");
    },
  ),

  /**
   * Load interface objectset Objects
   */
  MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
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
        ...pagedResponse,
      };
    },
  ),
];
