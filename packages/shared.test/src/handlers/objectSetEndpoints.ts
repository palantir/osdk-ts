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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import stableStringify from "json-stable-stringify";
import type { RequestHandler } from "msw";
import { InvalidRequest } from "../errors.js";
import { aggregationRequestHandlers } from "../stubs/aggregationRequests.js";
import { fauxFoundry } from "../stubs/ontologies/legacyFullOntology.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const objectSetHandlers: Array<RequestHandler> = [
  undefined,
  "https://stack.palantirCustom.com/foo/first/someStuff/",
].flatMap(baseUrl => [
  /**
   * Load ObjectSet Objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.load,
    ["ontologyApiName"],
    async ({ request, params }) => {
      return fauxFoundry
        .getDataStore(params.ontologyApiName)
        .getObjectsFromObjectSet(await request.json());
    },
    baseUrl,
  ),

  /**
   * Aggregate Objects in ObjectSet
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.aggregate,
    ["ontologyApiName"],
    async ({ request }) => {
      const parsedBody = await request.json();
      const aggResp = aggregationRequestHandlers[stableStringify(parsedBody)];
      if (aggResp) {
        return aggResp;
      }
      throw new OpenApiCallError(
        400,
        InvalidRequest(
          `Invalid aggregation request: ${JSON.stringify(parsedBody)}`,
        ),
      );
    },
    baseUrl,
  ),
]);
