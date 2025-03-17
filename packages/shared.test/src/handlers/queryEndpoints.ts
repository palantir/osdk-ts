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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { RequestHandler } from "msw";
import { fauxFoundry } from "../stubs/ontologies/legacyFullOntology.js";
import { handleOpenApiCall } from "./util/handleOpenApiCall.js";
import { requireParams } from "./util/requireParam.js";

export const queryHandlers: Array<RequestHandler> = [
  /**
   * List Queries
   */
  handleOpenApiCall(
    OntologiesV2.QueryTypes.list,
    ["ontologyApiName"],
    async (req) => {
      return {
        data: fauxFoundry.getOntology(req.params.ontologyApiName)
          .getAllQueryTypes(),
      };
    },
  ),

  /**
   * Execute Queries
   */
  handleOpenApiCall(
    OntologiesV2.Queries.execute,
    ["ontologyApiName", "queryApiName"],
    async ({ request, params }) => {
      requireParams(params, ["ontologyApiName", "queryApiName"]);
      const { ontologyApiName, queryApiName } = params;

      const queryImpl = fauxFoundry
        .getOntology(ontologyApiName)
        .getQueryImpl(queryApiName);

      return queryImpl(
        await request.json(),
        fauxFoundry.getDataStore(ontologyApiName),
      );
    },
  ),
];
