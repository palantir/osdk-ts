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

import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const createTimeseriesAndGeotimeHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Load firstPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async (
      { params: { objectType, ontologyApiName, primaryKey, propertyName } },
    ) => {
      return fauxFoundry.getDataStore(ontologyApiName)
        .getTimeSeriesData(
          objectType,
          primaryKey,
          propertyName,
        ).at(0);
    },
    baseUrl,
  ),

  /**
   * Load lastPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getLastPoint,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async (
      { params: { objectType, ontologyApiName, primaryKey, propertyName } },
    ) => {
      return fauxFoundry.getDataStore(ontologyApiName)
        .getTimeSeriesData(
          objectType,
          primaryKey,
          propertyName,
        ).at(-1);
    },
    baseUrl,
  ),

  /**
   * stream points
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.streamPoints,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async (
      {
        request,
        params: { objectType, ontologyApiName, primaryKey, propertyName },
      },
    ) => {
      return Response.json(
        fauxFoundry.getDataStore(ontologyApiName)
          .getTimeSeriesData(
            objectType,
            primaryKey,
            propertyName,
            await request.json(),
          ),
      );
    },
    baseUrl,
  ),

  /**
   * Load latestValue
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.getLatestValue,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async (
      { params: { objectType, ontologyApiName, primaryKey, propertyName } },
    ) => {
      const ret = fauxFoundry.getDataStore(ontologyApiName)
        .getTimeSeriesData(
          objectType,
          primaryKey,
          propertyName,
        ).at(-1);

      if (!ret) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
      }

      return ret;
    },
    baseUrl,
  ),

  /**
   * stream values
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.streamValues,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async (
      {
        request,
        params: { objectType, ontologyApiName, primaryKey, propertyName },
      },
    ) => {
      return Response.json(
        fauxFoundry.getDataStore(ontologyApiName)
          .getTimeSeriesData(
            objectType,
            primaryKey,
            propertyName,
            await request.json(),
          ),
      );
    },
    baseUrl,
  ),
];
