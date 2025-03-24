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

import { ObjectTypesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
import { handleOpenApiCall } from "../../handlers/util/handleOpenApiCall.js";

export const get: CallFactory<
  "ontologyApiName" | "objectTypeApiName",
  typeof ObjectTypesV2.get
> = handleOpenApiCall(
  ObjectTypesV2.get,
  ["ontologyApiName", "objectTypeApiName"],
);

export const getFullMetadata: CallFactory<
  "ontologyApiName" | "objectTypeApiName",
  typeof ObjectTypesV2.getFullMetadata
> = handleOpenApiCall(
  ObjectTypesV2.getFullMetadata,
  ["ontologyApiName", "objectTypeApiName"],
);

export const getOutgoingLinkType: CallFactory<
  "ontology" | "objectType" | "linkType",
  typeof ObjectTypesV2.getOutgoingLinkType
> = handleOpenApiCall(
  ObjectTypesV2.getOutgoingLinkType,
  ["ontology", "objectType", "linkType"],
);

export const listOutgoingLinkTypes: CallFactory<
  "ontology" | "objectType",
  typeof ObjectTypesV2.listOutgoingLinkTypes
> = handleOpenApiCall(
  ObjectTypesV2.listOutgoingLinkTypes,
  ["ontology", "objectType"],
);

export const list: CallFactory<
  "ontologyApiName",
  typeof ObjectTypesV2.list
> = handleOpenApiCall(
  ObjectTypesV2.list,
  ["ontologyApiName"],
);
