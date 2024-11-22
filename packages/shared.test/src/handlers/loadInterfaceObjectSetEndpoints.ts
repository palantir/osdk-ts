/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { LoadObjectSetV2MultipleObjectTypesResponse } from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import stableStringify from "json-stable-stringify";
import type { RequestHandler } from "msw";
import { InvalidRequest } from "../errors.js";
import { filterObjectsProperties } from "../filterObjects.js";
import { loadInterfaceObjectSetHandlers } from "../stubs/interfaceObjectSetRequest.js";
import { defaultOntology } from "../stubs/ontologies.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const interfaceObjectSetHandlers: Array<RequestHandler> = [
  /**
   * Load interface objectset Objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.loadMultipleObjectTypes,
    ["ontologyApiName"],
    async (req) => {
      const parsedBody = await req.request.json();

      const response: LoadObjectSetV2MultipleObjectTypesResponse | undefined =
        loadInterfaceObjectSetHandlers[stableStringify(parsedBody)];

      if (
        (req.params.ontologyApiName === defaultOntology.apiName
          || req.params.ontologyApiName === defaultOntology.rid)
        && response
      ) {
        return response;
      }

      throw new OpenApiCallError(
        400,
        InvalidRequest(
          `Invalid request body: ${JSON.stringify(parsedBody)}`,
        ),
      );
    },
  ),
];
