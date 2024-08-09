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

import type {
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
} from "@osdk/api";
import type {
  Augment,
  Augments,
  DisplayMetadata,
  FetchPageArgs,
  FetchPageResult,
  NullabilityAdherence,
  Result,
} from "@osdk/client.api";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "./MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "./util/addUserAgentAndRequestContextHeaders.js";

/** @internal */
export const fetchDisplayMetadataInternal = async <
  Q extends ObjectOrInterfaceDefinition,
>(
  client: MinimalClient,
  objectType: Q,
): Promise<DisplayMetadata> => {
  if (objectType.type === "interface") {
    throw new Error("Not implemented");
  } else {
    return fetchObjectDisplayMetadata(client, objectType);
  }
};

const fetchObjectDisplayMetadata = async <Q extends ObjectTypeDefinition<any>>(
  client: MinimalClient,
  objectType: Q,
): Promise<DisplayMetadata> => {
  const res = await OntologiesV2.OntologyObjectsV2.getObjectTypeFullMetadata(
    addUserAgentAndRequestContextHeaders(client, objectType),
    await client.ontologyRid,
    objectType.apiName,
  );

  const objectTypeResult = res.objectType as unknown as DisplayMetadata;

  return {
    description: objectTypeResult.description,
    // according to the API Gateway OpenAPI spec,
    // displayName, pluralDisplayName, visibility, and icon
    // should always be present
    displayName: objectTypeResult.displayName,
    visibility: objectTypeResult.visibility,
    pluralDisplayName: objectTypeResult.pluralDisplayName,
    icon: objectTypeResult.icon,
  };
};
