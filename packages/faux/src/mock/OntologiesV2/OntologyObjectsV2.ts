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

import { OntologyObjectsV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
import { handleOpenApiCall } from "../../handlers/util/handleOpenApiCall.js";

export const get: CallFactory<
  "ontologyApiName" | "objectType" | "primaryKey",
  typeof OntologyObjectsV2.get
> = handleOpenApiCall(
  OntologyObjectsV2.get,
  ["ontologyApiName", "objectType", "primaryKey"],
);

export const list: CallFactory<
  "ontologyApiName" | "objectType",
  typeof OntologyObjectsV2.list
> = handleOpenApiCall(
  OntologyObjectsV2.list,
  ["ontologyApiName", "objectType"],
);
