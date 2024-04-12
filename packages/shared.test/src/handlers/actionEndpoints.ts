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

import { listActionTypesV2 } from "@osdk/gateway/requests";
import type {
  BatchApplyActionResponse,
  SyncApplyActionResponseV2,
} from "@osdk/gateway/types";
import stableStringify from "json-stable-stringify";
import type {
  DefaultBodyType,
  MockedRequest,
  PathParams,
  ResponseComposition,
  RestContext,
  RestHandler,
  RestRequest,
} from "msw";
import { rest } from "msw";
import type { BaseAPIError } from "../BaseError";
import { ApplyActionFailedError, InvalidRequest } from "../errors";
import { actionResponseMap } from "../stubs/actions";
import { defaultOntology } from "../stubs/ontologies";
import { authHandlerMiddleware } from "./commonHandlers";
import { getOntology } from "./ontologyMetadataEndpoints";
import { handleOpenApiCall } from "./util/handleOpenApiCall";

export const actionHandlers: RestHandler<
  MockedRequest<DefaultBodyType>
>[] = [
  /**
   * List ActionTypes
   */
  handleOpenApiCall(
    listActionTypesV2,
    ["ontologyApiName"],
    async (req, res, ctx) => {
      const ontology = getOntology(req.params.ontologyApiName);

      return res(
        ctx.json({
          data: Object.values(ontology.actionTypes),
        }),
      );
    },
  ),

  /**
   * Apply an Action
   */
  rest.post(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/actions/:actionType/apply",
    authHandlerMiddleware(
      handleAction<SyncApplyActionResponseV2>,
    ),
  ),

  /**
   * Apply a Batch Action
   */
  rest.post(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/actions/:actionType/applyBatch",
    authHandlerMiddleware(
      handleAction<BatchApplyActionResponse>,
    ),
  ),
];

async function handleAction<
  T extends BatchApplyActionResponse | SyncApplyActionResponseV2,
>(
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<
    T | BaseAPIError
  >,
  ctx: RestContext,
) {
  const body = await req.text();
  const parsedBody = JSON.parse(body);
  const ontologyApiName = req.params.ontologyApiName;
  const actionType = req.params.actionType;

  if (
    typeof ontologyApiName !== "string" || typeof actionType !== "string"
  ) {
    return res(
      ctx.status(400),
      ctx.json(InvalidRequest("Invalid parameters")),
    );
  }

  const actionResponse =
    actionResponseMap[actionType][stableStringify(parsedBody)];

  if (
    (req.params.ontologyApiName === defaultOntology.apiName
      || req.params.ontologyApiName === defaultOntology.rid)
    && actionResponse
  ) {
    return res(ctx.json(actionResponse));
  }

  return res(ctx.status(400), ctx.json(ApplyActionFailedError));
}
