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

import type { LoadObjectSetResponseV2 } from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import stableStringify from "json-stable-stringify";
import type { HttpResponseResolver, PathParams, RequestHandler } from "msw";
import type { BaseAPIError } from "../BaseError.js";
import { InvalidRequest } from "../errors.js";
import { filterObjectsProperties } from "../filterObjects.js";
import { aggregationRequestHandlers } from "../stubs/aggregationRequests.js";
import { loadObjectSetRequestHandlers } from "../stubs/objectSetRequest.js";
import { defaultOntology } from "../stubs/ontologies.js";
import { pageThroughResponse } from "./endpointUtils.js";
import type { ExtractBody } from "./util/handleOpenApiCall.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const objectSetHandlers: Array<RequestHandler> = [
  /**
   * Load ObjectSet Objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.load,
    ["ontologyApiName"],
    handleLoadObjectSet,
  ),

  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.load,
    ["ontologyApiName"],
    handleLoadObjectSet,
    "https://stack.palantirCustom.com/foo/first/someStuff/",
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
  ),
];

async function handleLoadObjectSet(
  req: Parameters<
    HttpResponseResolver<
      PathParams<string>,
      ExtractBody<typeof OntologiesV2.OntologyObjectSets.load>,
      LoadObjectSetResponseV2 | BaseAPIError
    >
  >[0],
) {
  const parsedBody = await req.request.json();
  const selected = parsedBody.select;
  const response: LoadObjectSetResponseV2 | undefined = pageThroughResponse(
    loadObjectSetRequestHandlers,
    parsedBody,
    true,
  );

  if (
    (req.params.ontologyApiName === defaultOntology.apiName
      || req.params.ontologyApiName === defaultOntology.rid)
    && response
  ) {
    return filterObjectsProperties(response, [...selected], true);
  }

  throw new OpenApiCallError(
    400,
    InvalidRequest(
      `Invalid request body: ${JSON.stringify(parsedBody)}`,
    ),
  );
}
