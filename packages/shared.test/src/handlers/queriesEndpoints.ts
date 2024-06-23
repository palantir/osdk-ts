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

import type { HttpResponseResolver, PathParams, RequestHandler } from "msw";

import { executeQueryV2 } from "@osdk/gateway/requests";
import type { ExecuteQueryResponse } from "@osdk/gateway/types";
import stableStringify from "json-stable-stringify";
import type { BaseAPIError } from "../BaseError.js";
import {
  ApplyActionFailedError,
  ExecuteQueryFailedError,
  InvalidRequest,
} from "../errors.js";
import { defaultOntology } from "../stubs/ontologies.js";
import { queryRequestHandlers } from "../stubs/queries.js";
import type { ExtractBody } from "./util/handleOpenApiCall.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const queryHandlers: Array<RequestHandler> = [
  /**
   * Execute Query
   */
  handleOpenApiCall(
    executeQueryV2,
    ["ontologyApiName", "queryApiName"],
    handleQuery<ExecuteQueryResponse>,
  ),
];

async function handleQuery<
  T extends ExecuteQueryResponse,
>(
  req: Parameters<
    HttpResponseResolver<
      PathParams<string>,
      | ExtractBody<typeof executeQueryV2>
      | T
      | BaseAPIError
    >
  >[0],
) {
  const parsedBody = await req.request.json();

  const ontologyApiName = req.params.ontologyApiName;
  const queryType = req.params.queryApiName;

  if (
    typeof ontologyApiName !== "string" || typeof queryType !== "string"
  ) {
    throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
  }

  const queryResponse =
    queryRequestHandlers[queryType][stableStringify(parsedBody)];

  if (
    (req.params.ontologyApiName === defaultOntology.apiName
      || req.params.ontologyApiName === defaultOntology.rid)
    && queryResponse
  ) {
    return queryResponse;
  }

  throw new OpenApiCallError(400, ExecuteQueryFailedError);
}
