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

import type { DefaultBodyType, MockedRequest, RestHandler } from "msw";
import { rest } from "msw";
import { ActionTypeWithUnsupportedTypes } from "../stubs/actionsTypes";
import { defaultOntology } from "../stubs/ontologies";
import { authHandlerMiddleware } from "./commonHandlers";

export const unsupportedMetadataHandler: RestHandler<
  MockedRequest<DefaultBodyType>
>[] = [
  /**
   * List ActionTypes
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/actionTypes",
    authHandlerMiddleware(async (_req, res, ctx) => {
      return res(
        ctx.json({
          data: [ActionTypeWithUnsupportedTypes],
        }),
      );
    }),
  ),

  rest.get(
    "https://stack.palantir.com/api/v1/ontologies/:ontologyRid/objectTypes",
    authHandlerMiddleware(async (req, res, ctx) => {
      if (req.params.ontologyRid !== defaultOntology.rid) {
        return res(
          ctx.status(404),
          ctx.json({ message: "Ontology not found" }),
        );
      }

      return res(
        ctx.status(500),
        ctx.json({ error: "Internal Service Error" }),
      );
    }),
  ),
];
