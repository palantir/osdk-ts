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

import { LinkedObjectsV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
import { handleOpenApiCall } from "../../handlers/util/handleOpenApiCall.js";

export const listLinkedObjects: CallFactory<
  "ontologyApiName" | "objectType" | "primaryKey" | "linkType",
  typeof LinkedObjectsV2.listLinkedObjects
> = handleOpenApiCall(
  LinkedObjectsV2.listLinkedObjects,
  ["ontologyApiName", "objectType", "primaryKey", "linkType"],
);

export const getLinkedObject: CallFactory<
  | "ontologyApiName"
  | "objectType"
  | "primaryKey"
  | "linkType"
  | "targetPrimaryKey",
  typeof LinkedObjectsV2.getLinkedObject
> = handleOpenApiCall(
  LinkedObjectsV2.getLinkedObject,
  [
    "ontologyApiName",
    "objectType",
    "primaryKey",
    "linkType",
    "targetPrimaryKey",
  ],
);
