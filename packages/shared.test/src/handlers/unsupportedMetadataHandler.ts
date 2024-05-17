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

import { http, HttpResponse } from "msw";
import { ActionTypeWithUnsupportedTypes } from "../stubs/actionsTypes.js";
import { defaultOntology } from "../stubs/ontologies.js";
import { authHandlerMiddleware } from "./commonHandlers.js";

export const unsupportedMetadataHandler = [
  /**
   * List ActionTypes
   */
  http.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/actionTypes",
    authHandlerMiddleware(async () => {
      return HttpResponse.json({
        data: [ActionTypeWithUnsupportedTypes],
      });
    }),
  ),

  http.get(
    "https://stack.palantir.com/api/v1/ontologies/:ontologyRid/objectTypes",
    authHandlerMiddleware(async ({ params }) => {
      if (params.ontologyRid !== defaultOntology.rid) {
        return HttpResponse.json(
          { message: "Ontology not found" },
          { status: 404 },
        );
      }

      return HttpResponse.json({ error: "Internal Service Error" }, {
        status: 500,
      });
    }),
  ),
];
