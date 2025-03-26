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

import { InvalidRequest } from "../errors.js";
import {
  subSelectProperties,
  subSelectPropertiesUrl,
} from "../filterObjects.js";
import { OntologiesV2 } from "../mock/index.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { getPaginationParamsFromUrl } from "./util/getPaginationParams.js";
import { OpenApiCallError } from "./util/handleOpenApiCall.js";
import { pageThroughResponseSearchParams } from "./util/pageThroughResponseSearchParams.js";

export const createLoadObjectsHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Load object
   */
  OntologiesV2.OntologyObjectsV2.get(
    baseUrl,
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
  ),

  /**
   * Load all objects
   */
  OntologiesV2.OntologyObjectsV2.list(
    baseUrl,
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
  ),

  /**
   * List Linked Objects
   */
  OntologiesV2.LinkedObjectsV2.listLinkedObjects(
    baseUrl,
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
  ),

  /**
   * Get specific Linked Object
   */

  OntologiesV2.LinkedObjectsV2.getLinkedObject(
    baseUrl,
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
  ),
];
