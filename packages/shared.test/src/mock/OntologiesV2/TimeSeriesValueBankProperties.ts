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

import { TimeSeriesValueBankProperties } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
import { handleOpenApiCall } from "../../handlers/util/handleOpenApiCall.js";

export const getLatestValue: CallFactory<
  "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
  typeof TimeSeriesValueBankProperties.getLatestValue
> = handleOpenApiCall(
  TimeSeriesValueBankProperties.getLatestValue,
  ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
);

export const streamValues: CallFactory<
  "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
  typeof TimeSeriesValueBankProperties.streamValues
> = handleOpenApiCall(
  TimeSeriesValueBankProperties.streamValues,
  ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
);
