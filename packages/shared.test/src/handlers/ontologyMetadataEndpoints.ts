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
  ListOutgoingLinkTypesResponseV2,
  ObjectTypeV2,
  OntologyFullMetadata,
} from "@osdk/gateway/types";
import type {
  DefaultBodyType,
  MockedRequest,
  PathParams,
  ResponseComposition,
  RestHandler,
  RestRequest,
} from "msw";
import { rest } from "msw";
import type { BaseAPIError } from "../BaseError";
import {
  InvalidRequest,
  ObjectNotFoundError,
  OntologyNotFoundError,
} from "../errors";
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

  rest.get(
    `https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objectTypes/:objectTypeApiName`,
    authHandlerMiddleware(
      async (
        req: RestRequest<
          never,
          PathParams<"ontologyApiName" | "objectTypeApiName">
        >,
        res: ResponseComposition<ObjectTypeV2 | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== fullOntology.ontology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }

        if (
          fullOntology.objectTypes[req.params.objectTypeApiName as string]
            === undefined
        ) {
          return res(
            ctx.status(404),
            ctx.json(
              ObjectNotFoundError(
                req.params.objectTypeApiName as string,
                "",
              ),
            ),
          );
        }

        return res(
          ctx.json(
            fullOntology.objectTypes[req.params.objectTypeApiName as string]
              .objectType,
          ),
        );
      },
    ),
  ),

  rest.get(
    `https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objectTypes/:objectTypeApiName/outgoingLinkTypes`,
    authHandlerMiddleware(
      async (
        req: RestRequest<
          never,
          PathParams<"ontologyApiName" | "objectTypeApiName">
        >,
        res: ResponseComposition<
          ListOutgoingLinkTypesResponseV2 | BaseAPIError
        >,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== fullOntology.ontology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }

        const objectType = req.params.objectTypeApiName;
        if (typeof objectType !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameter objectType")),
          );
        }

        if (
          fullOntology.objectTypes[req.params.objectTypeApiName as string]
            === undefined
        ) {
          return res(
            ctx.status(404),
            ctx.json(
              ObjectNotFoundError(
                req.params.objectTypeApiName as string,
                "",
              ),
            ),
          );
        }

        return res(
          ctx.json({
            data:
              fullOntology.objectTypes[req.params.objectTypeApiName as string]
                .linkTypes,
          }),
        );
      },
    ),
  ),
];
