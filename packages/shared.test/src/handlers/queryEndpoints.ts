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

import type { ListQueryTypesResponseV2 } from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import type { RequestHandler } from "msw";
import { InvalidRequest, QueryNotFoundError } from "../errors.js";
import { defaultOntology } from "../stubs/ontologies.js";
import { queryRequestHandlers } from "../stubs/queries.js";
import { queryTypes } from "../stubs/queryTypes.js";
import { getOntology } from "./ontologyMetadataEndpoints.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const queryHandlers: Array<RequestHandler> = [
  /**
   * List Queries
   */
  handleOpenApiCall(
    OntologiesV2.QueryTypes.list,
    ["ontologyApiName"],
    async (req) => {
      // will throw if bad name
      getOntology(req.params.ontologyApiName as string);

      return {
        data: queryTypes,
      };
    },
  ),

  /**
   * Execute Queries
   */
  handleOpenApiCall(
    OntologiesV2.Queries.execute,
    ["ontologyApiName", "queryApiName"],
    async (req) => {
      const body = await req.request.text();
      const parsedBody = JSON.parse(body);
      const queryApiName = req.params.queryApiName;

      if (typeof queryApiName !== "string") {
        throw new OpenApiCallError(
          400,
          InvalidRequest("Invalid parameters queryApiName"),
        );
      }

      const queryResponses = queryRequestHandlers[queryApiName];
      if (!queryResponses) {
        throw new OpenApiCallError(404, QueryNotFoundError(queryApiName));
      }

      const queryResponse = queryResponses[JSON.stringify(parsedBody)];
      if (
        req.params.ontologyApiName === defaultOntology.apiName
        || req.params.ontologyApiName === defaultOntology.rid
          && queryResponse
      ) {
        return queryResponse;
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Query Request"));
    },
  ),
];
