/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { TimeSeriesPropertiesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
import { handleOpenApiCall } from "../../handlers/util/handleOpenApiCall.js";

export const getFirstPoint: CallFactory<
  "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
  typeof TimeSeriesPropertiesV2.getFirstPoint
> = handleOpenApiCall(
  TimeSeriesPropertiesV2.getFirstPoint,
  ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
);

export const getLastPoint: CallFactory<
  "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
  typeof TimeSeriesPropertiesV2.getLastPoint
> = handleOpenApiCall(
  TimeSeriesPropertiesV2.getLastPoint,
  ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
);

export const streamPoints: CallFactory<
  "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
  typeof TimeSeriesPropertiesV2.streamPoints
> = handleOpenApiCall(
  TimeSeriesPropertiesV2.streamPoints,
  ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
);
