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

import { aggregateObjectSetV2, loadObjectSetV2 } from "@osdk/gateway/requests";
import type { LoadObjectSetResponseV2 } from "@osdk/gateway/types";
import stableStringify from "json-stable-stringify";
import type { RequestHandler } from "msw";
import { InvalidRequest } from "../errors.js";
import { filterObjectsProperties } from "../filterObjects.js";
import { aggregationRequestHandlers } from "../stubs/aggregationRequests.js";
import { loadObjectSetRequestHandlers } from "../stubs/objectSetRequest.js";
import { defaultOntology } from "../stubs/ontologies.js";
import { pageThroughResponse } from "./endpointUtils.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const objectSetHandlers: Array<RequestHandler> = [
  /**
   * Load ObjectSet Objects
   */
  handleOpenApiCall(
    loadObjectSetV2,
    ["ontologyApiName"],
    async (req) => {
      const parsedBody = await req.request.json();
      const selected = parsedBody.select;
      const response: LoadObjectSetResponseV2 | undefined = pageThroughResponse(
        loadObjectSetRequestHandlers,
        parsedBody,
      );

      if (
        (req.params.ontologyApiName === defaultOntology.apiName
          || req.params.ontologyApiName === defaultOntology.rid)
        && response
      ) {
        return filterObjectsProperties(response, [...selected]);
      }

      throw new OpenApiCallError(
        400,
        InvalidRequest(
          `Invalid request body: ${JSON.stringify(parsedBody)}`,
        ),
      );
    },
  ),

  /**
   * Aggregate Objects in ObjectSet
   */
  handleOpenApiCall(
    aggregateObjectSetV2,
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
  ),
];
