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
import { OntologiesV2 } from "../mock/index.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { OpenApiCallError } from "./util/handleOpenApiCall.js";

export const createTimeseriesAndGeotimeHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Load firstPoint
   */

  OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint(
    baseUrl,
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
  ),

  /**
   * Load lastPoint
   */
  OntologiesV2.TimeSeriesPropertiesV2.getLastPoint(
    baseUrl,
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
  ),

  /**
   * stream points
   */
  OntologiesV2.TimeSeriesPropertiesV2.streamPoints(
    baseUrl,
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
  ),

  /**
   * Load latestValue
   */
  OntologiesV2.TimeSeriesValueBankProperties.getLatestValue(
    baseUrl,
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
  ),

  /**
   * stream values
   */
  OntologiesV2.TimeSeriesValueBankProperties.streamValues(
    baseUrl,
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
  ),
];
