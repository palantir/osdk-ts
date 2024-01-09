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

import type { OntologyFullMetadata } from "@osdk/gateway/types";
import type {
  DefaultBodyType,
  MockedRequest,
  ResponseComposition,
  RestHandler,
} from "msw";
import { rest } from "msw";
import type { BaseAPIError } from "../BaseError";
import { OntologyNotFoundError } from "../errors";
import { fullOntology } from "../stubs/ontologies";
import { authHandlerMiddleware } from "./commonHandlers";

export const ontologyMetadataEndpoint: RestHandler<
  MockedRequest<DefaultBodyType>
>[] = [
  /**
   * Load ObjectSet Objects
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/fullMetadata",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<OntologyFullMetadata | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== fullOntology.ontology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(OntologyNotFoundError(req.params.ontologyRid as string)),
          );
        }

        return res(ctx.json(fullOntology));
      },
    ),
  ),
];
