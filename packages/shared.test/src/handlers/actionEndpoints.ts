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
import { ApplyActionFailedError } from "../errors.js";
import { fauxFoundry } from "../stubs/ontologies/legacyFullOntology.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const actionHandlers: Array<RequestHandler> = [
  undefined,
  "https://stack.palantirCustom.com/foo/first/someStuff/",
].flatMap(baseUrl => [
  /**
   * List ActionTypes
   */
  handleOpenApiCall(
    OntologiesV2.ActionTypesV2.list,
    ["ontologyApiName"],
    async ({ params }) => {
      return {
        data: fauxFoundry
          .getOntology(params.ontologyApiName)
          .getAllActionTypes(),
      };
    },
    baseUrl,
  ),

  /**
   * Apply an Action
   */
  handleOpenApiCall(
    OntologiesV2.Actions.apply,
    ["ontologyApiName", "actionType"],
    async ({ params: { ontologyApiName, actionType }, request }) => {
      const response = fauxFoundry
        .getDataStore(ontologyApiName)
        .applyAction(actionType, await request.json());

      // this is just for the legacy code that registered `undefined` as the return
      // value causing this code path. Once we get rid of the uses of
      // `createLazyDoNothingActionImpl` this should be removed.
      if (!response) {
        throw new OpenApiCallError(400, ApplyActionFailedError);
      }

      return response;
    },
    baseUrl,
  ),

  /**
   * Apply a Batch Action
   */
  handleOpenApiCall(
    OntologiesV2.Actions.applyBatch,
    ["ontologyApiName", "actionType"],
    async ({ params: { ontologyApiName, actionType }, request }) => {
      return fauxFoundry
        .getDataStore(ontologyApiName)
        .batchApplyAction(actionType, await request.json());
    },
    baseUrl,
  ),
]);
