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
  AggregateObjectSetResponseV2,
  LoadObjectSetRequestV2,
  LoadObjectSetResponseV2,
} from "@osdk/gateway/types";
import stableStringify from "json-stable-stringify";
import type {
  DefaultBodyType,
  MockedRequest,
  ResponseComposition,
  RestHandler,
  RestRequest,
} from "msw";
import { rest } from "msw";
import type { BaseAPIError } from "../BaseError";
import { InvalidRequest } from "../errors";
import { filterObjectsProperties } from "../filterObjects";
import { aggregationRequestHandlers } from "../stubs/aggregationRequests";
import { loadObjectSetRequestHandlers } from "../stubs/objectSetRequest";
import { defaultOntology } from "../stubs/ontologies";
import { authHandlerMiddleware } from "./commonHandlers";
import { pageThroughResponse } from "./endpointUtils";

export const objectSetHandlers: RestHandler<
  MockedRequest<DefaultBodyType>
>[] = [
  /**
   * Load ObjectSet Objects
   */
  rest.post(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objectSets/loadObjects",
    authHandlerMiddleware<LoadObjectSetRequestV2>(
      async (
        req: RestRequest<LoadObjectSetRequestV2>,
        res: ResponseComposition<LoadObjectSetResponseV2 | BaseAPIError>,
        ctx,
      ) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }

        const parsedBody = await req.json<LoadObjectSetRequestV2>();
        const selected = parsedBody.select;
        const response: LoadObjectSetResponseV2 | undefined =
          pageThroughResponse(
            loadObjectSetRequestHandlers,
            parsedBody,
          );

        if (
          req.params.ontologyApiName === defaultOntology.apiName && response
        ) {
          return res(ctx.json(filterObjectsProperties(response, selected)));
        }

        return res(
          ctx.status(400),
          ctx.json(
            InvalidRequest(
              `Invalid request body: ${JSON.stringify(parsedBody)}`,
            ),
          ),
        );
      },
    ),
  ),

  /**
   * Aggregate Objects in ObjectSet
   */
  rest.post(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objectSets/aggregate",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<AggregateObjectSetResponseV2 | BaseAPIError>,
        ctx,
      ) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }
        const body = await req.text();
        const parsedBody = JSON.parse(body);
        const aggResp = aggregationRequestHandlers[stableStringify(parsedBody)];
        if (aggResp) {
          return res(ctx.json(aggResp));
        }
        return res(
          ctx.status(400),
          ctx.json(
            InvalidRequest(
              `Invalid aggregation request: ${JSON.stringify(parsedBody)}`,
            ),
          ),
        );
      },
    ),
  ),
];
