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

import type { RequestHandler } from "msw";
import { ApplyActionFailedError } from "../errors.js";
import type { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
import { OntologiesV2 } from "../mock/index.js";
import { OpenApiCallError } from "./util/handleOpenApiCall.js";

export const createActionHandlers = (
  baseUrl: string,
  fauxFoundry: FauxFoundry,
): Array<RequestHandler> => [
  /**
   * Apply an Action
   */
  OntologiesV2.Actions.apply(
    baseUrl,
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
  ),

  OntologiesV2.Actions.applyBatch(
    baseUrl,
    async ({ params: { ontologyApiName, actionType }, request }) => {
      return fauxFoundry
        .getDataStore(ontologyApiName)
        .batchApplyAction(actionType, await request.json());
    },
  ),
];
