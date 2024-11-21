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

import type {
  BatchApplyActionResponse,
  SyncApplyActionResponseV2,
} from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import stableStringify from "json-stable-stringify";
import type { HttpResponseResolver, PathParams, RequestHandler } from "msw";
import type { BaseAPIError } from "../BaseError.js";
import { ApplyActionFailedError, InvalidRequest } from "../errors.js";
import { actionResponseMap } from "../stubs/actions.js";
import { defaultOntology } from "../stubs/ontologies.js";
import { getOntology } from "./ontologyMetadataEndpoints.js";
import type { ExtractBody, ExtractResponse } from "./util/handleOpenApiCall.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const actionHandlers: Array<RequestHandler> = [
  /**
   * List ActionTypes
   */
  handleOpenApiCall(
    OntologiesV2.ActionTypesV2.list,
    ["ontologyApiName"],
    async ({ params }) => {
      const ontology = getOntology(params.ontologyApiName);

      return {
        data: Object.values(ontology.actionTypes),
      };
    },
  ),

  /**
   * Apply an Action
   */
  handleOpenApiCall(
    OntologiesV2.Actions.apply,
    ["ontologyApiName", "actionType"],
    handleAction<SyncApplyActionResponseV2>,
  ),

  /**
   * Apply an Action with custom URL entrypoint
   */
  handleOpenApiCall(
    OntologiesV2.Actions.apply,
    ["ontologyApiName", "actionType"],
    handleAction<SyncApplyActionResponseV2>,
    "https://stack.palantirCustom.com/foo/first/someStuff/",
  ),

  /**
   * Apply a Batch Action
   */
  handleOpenApiCall(
    OntologiesV2.Actions.applyBatch,
    ["ontologyApiName", "actionType"],
    handleAction<
      ExtractResponse<typeof OntologiesV2.Actions.applyBatch>
    >,
  ),
];

async function handleAction<
  T extends BatchApplyActionResponse | SyncApplyActionResponseV2,
>(
  req: Parameters<
    HttpResponseResolver<
      PathParams<string>,
      | ExtractBody<typeof OntologiesV2.Actions.apply>
      | ExtractBody<typeof OntologiesV2.Actions.applyBatch>,
      T | BaseAPIError
    >
  >[0],
) {
  const parsedBody = await req.request.json();

  const ontologyApiName = req.params.ontologyApiName;
  const actionType = req.params.actionType;

  if (
    typeof ontologyApiName !== "string" || typeof actionType !== "string"
  ) {
    throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
  }

  const actionResponse =
    actionResponseMap[actionType][stableStringify(parsedBody)];

  if (
    (req.params.ontologyApiName === defaultOntology.apiName
      || req.params.ontologyApiName === defaultOntology.rid)
    && actionResponse
  ) {
    return actionResponse;
  }

  throw new OpenApiCallError(400, ApplyActionFailedError);
}
