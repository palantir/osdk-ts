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
  ListActionTypesResponseV2,
  SyncApplyActionResponseV2,
} from "@osdk/gateway/types";
import stableStringify from "json-stable-stringify";
import type {
  DefaultBodyType,
  MockedRequest,
  ResponseComposition,
  RestHandler,
} from "msw";
import { rest } from "msw";
import type { BaseAPIError } from "../BaseError.js";
import {
  ApplyActionFailedError,
  InvalidRequest,
  OntologyNotFoundError,
} from "../errors.js";
import { actionResponseMap } from "../stubs/actions.js";
import { actionTypes } from "../stubs/actionsTypes.js";
import { defaultOntology } from "../stubs/ontologies.js";
import { authHandlerMiddleware } from "./commonHandlers.js";

export const actionHandlers: RestHandler<
  MockedRequest<DefaultBodyType>
>[] = [
  /**
   * List ActionTypes
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/actionTypes",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListActionTypesResponseV2 | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== defaultOntology.apiName) {
          return res(
            ctx.status(400),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }

        return res(
          ctx.json({
            data: actionTypes,
          }),
        );
      },
    ),
  ),

  /**
   * Apply an Action
   */
  rest.post(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/actions/:actionType/apply",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<SyncApplyActionResponseV2 | BaseAPIError>,
        ctx,
      ) => {
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
          req.params.ontologyApiName === defaultOntology.apiName
          && actionResponse
        ) {
          return res(ctx.json(actionResponse));
        }

        return res(ctx.status(400), ctx.json(ApplyActionFailedError));
      },
    ),
  ),
];
