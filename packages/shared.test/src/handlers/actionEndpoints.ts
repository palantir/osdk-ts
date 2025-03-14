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
} from "@osdk/foundry.ontologies";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { HttpResponseResolver, PathParams, RequestHandler } from "msw";
import type { BaseAPIError } from "../BaseError.js";
import { ApplyActionFailedError } from "../errors.js";
import { fauxFoundry } from "../stubs/fauxFoundry.js";
import { getOntologyOld } from "./ontologyMetadataEndpoints.js";
import type { ExtractBody, ExtractResponse } from "./util/handleOpenApiCall.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";
import { requireParams } from "./util/requireParam.js";

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
      const ontology = getOntologyOld(params.ontologyApiName);

      return {
        data: Object.values(ontology.actionTypes),
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
    handleAction<SyncApplyActionResponseV2>,
    baseUrl,
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
    baseUrl,
  ),
]);

/**
 * This currently tries to do both batch and regular apply actions, which only
 * works with the `createLazyDoNothingActionImpl` as it just string compares
 * inputs. This is a temporary solution to get the existing actions working.
 *
 * Next refactor of this should move the batch code to loop over the non-batch
 * endpoint which means manually updating these lazy entries (or bite the bullet
 * and rewrite those tests)
 */
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
): Promise<T> {
  const parsedBody = await req.request.json();

  requireParams(req.params, ["ontologyApiName", "actionType"]);
  const { ontologyApiName, actionType } = req.params;

  const ontology = fauxFoundry.getOntology(ontologyApiName);
  const dataStore = fauxFoundry.getDataStore(ontologyApiName);

  const impl = ontology.getActionImpl(actionType);

  const response = impl(dataStore, parsedBody);

  // this is just for the legacy code that registered `undefined` as the return
  // value causing this code path. Once we get rid of the uses of
  // `createLazyDoNothingActionImpl` this should be removed.
  if (!response) {
    throw new OpenApiCallError(400, ApplyActionFailedError);
  }

  return response as T;
}
