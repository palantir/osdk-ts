/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { RequestHandler } from "msw";
import { fauxFoundry } from "../stubs/ontologies/legacyFullOntology.js";
import { handleOpenApiCall } from "./util/handleOpenApiCall.js";

export const interfaceObjectSetHandlers: Array<RequestHandler> = [
  /**
   * Load interface objectset Objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.loadMultipleObjectTypes,
    ["ontologyApiName"],
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
