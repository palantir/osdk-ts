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

/* eslint-disable @typescript-eslint/require-await */

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { InvalidRequest } from "../errors.js";
import {
  subSelectProperties,
  subSelectPropertiesUrl,
} from "../filterObjects.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { getPaginationParamsFromUrl } from "./util/getPaginationParams.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";
import { pageThroughResponseSearchParams } from "./util/pageThroughResponseSearchParams.js";

export const createLoadObjectsHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Load object
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectsV2.get,
    ["ontologyApiName", "objectType", "primaryKey"],
    async (
      { request, params: { ontologyApiName, objectType, primaryKey } },
    ) => {
      return subSelectPropertiesUrl(
        fauxFoundry
          .getDataStore(ontologyApiName)
          .getObjectOrThrow(objectType, primaryKey),
        new URL(request.url),
      );
    },
    baseUrl,
  ),

  /**
   * Load all objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectsV2.list,
    ["ontologyApiName", "objectType"],
    async ({ request, params: { ontologyApiName, objectType } }) => {
      const loadObjects = pageThroughResponseSearchParams(
        fauxFoundry
          .getDataStore(ontologyApiName)
          .getObjectsOfType(objectType),
        getPaginationParamsFromUrl(request),
        true,
      );

      if (loadObjects) {
        return subSelectProperties(loadObjects, new URL(request.url), true);
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Request"));
    },
    baseUrl,
  ),

  /**
   * List Linked Objects
   */
  handleOpenApiCall(
    OntologiesV2.LinkedObjectsV2.listLinkedObjects,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "linkType",
    ],
    async (
      {
        request,
        params: { primaryKey, linkType, objectType, ontologyApiName },
      },
    ) => {
      const linkResults = fauxFoundry
        .getDataStore(ontologyApiName)
        .getLinksOrThrow(objectType, primaryKey, linkType);

      const objects = pageThroughResponseSearchParams(
        linkResults,
        getPaginationParamsFromUrl(request),
        true,
      );

      if (objects) {
        return subSelectProperties(objects, new URL(request.url), false);
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Request"));
    },
    baseUrl,
  ),

  /**
   * Get specific Linked Object
   */
  handleOpenApiCall(
    OntologiesV2.LinkedObjectsV2.getLinkedObject,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "linkType",
      "targetPrimaryKey",
    ],
    async (
      {
        request,
        params: {
          ontologyApiName,
          objectType,
          primaryKey,
          linkType,
          targetPrimaryKey,
        },
      },
    ) => {
      const object = fauxFoundry
        .getDataStore(ontologyApiName)
        .getLinkOrThrow(objectType, primaryKey, linkType, targetPrimaryKey);

      return subSelectPropertiesUrl(
        object,
        new URL(request.url),
      );
    },
    baseUrl,
  ),
];
