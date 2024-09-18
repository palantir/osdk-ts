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
  ActionDefinition,
  InterfaceDefinition,
  ObjectTypeDefinition,
  QueryDefinition,
} from "@osdk/api";
import type {
  ActionMetadata,
  InterfaceMetadata,
  ObjectMetadata,
  QueryMetadata,
} from "@osdk/client.api";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "./MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "./util/addUserAgentAndRequestContextHeaders.js";

type FetchMetadataArgs =
  | ObjectTypeDefinition<any>
  | InterfaceDefinition<any>
  | ActionDefinition<any, any>
  | QueryDefinition<any, any>;

/** @internal */
export const fetchMetadataInternal = async <
  Q extends FetchMetadataArgs,
>(
  client: MinimalClient,
  definition: Q,
): Promise<
  Q extends ObjectTypeDefinition<any> ? ObjectMetadata
    : Q extends InterfaceDefinition<any> ? InterfaceDefinition
    : Q extends ActionDefinition<any, any, any> ? ActionMetadata
    : Q extends QueryDefinition<any, any> ? QueryMetadata
    : never
> => {
  if (definition.type === "object") {
    return fetchObjectMetadata(client, definition) as any;
  } else if (definition.type === "interface") {
    return fetchInterfaceMetadata(client, definition) as any;
  } else if (definition.type === "action") {
    return fetchActionMetadata(client, definition) as any;
  } else {
    return fetchQueryMetadata(client, definition) as any;
  }
};

const fetchObjectMetadata = async <Q extends ObjectTypeDefinition<any>>(
  client: MinimalClient,
  objectType: Q,
): Promise<ObjectMetadata> => {
  const response = await OntologiesV2.ObjectTypesV2.getObjectTypeFullMetadata(
    addUserAgentAndRequestContextHeaders(client, objectType),
    await client.ontologyRid,
    objectType.apiName,
    { preview: true },
  );

  return {
    description: response.objectType.description,
    displayName: response.objectType.displayName,
    visibility: response.objectType.visibility,
    pluralDisplayName: response.objectType.pluralDisplayName,
    icon: response.objectType.icon,
  };
};

const fetchInterfaceMetadata = async <Q extends InterfaceDefinition<any>>(
  client: MinimalClient,
  interfaceType: Q,
): Promise<InterfaceMetadata> => {
  const response = await OntologiesV2.OntologyInterfaces.getInterfaceType(
    addUserAgentAndRequestContextHeaders(client, interfaceType),
    await client.ontologyRid,
    interfaceType.apiName,
    { preview: true },
  );
  return {};
};

const fetchActionMetadata = async <Q extends ActionDefinition<any, any>>(
  client: MinimalClient,
  actionType: Q,
): Promise<ActionMetadata> => {
  const response = await OntologiesV2.ActionTypesV2.getActionTypeV2(
    addUserAgentAndRequestContextHeaders(client, actionType),
    await client.ontologyRid,
    actionType.apiName,
  );
  return { c: "hi" };
};

const fetchQueryMetadata = async <Q extends QueryDefinition<any, any>>(
  client: MinimalClient,
  queryType: Q,
): Promise<QueryMetadata> => {
  const response = await OntologiesV2.QueryTypes.getQueryTypeV2(
    addUserAgentAndRequestContextHeaders(client, queryType),
    await client.ontologyRid,
    queryType.apiName,
  );
  return { d: "hi" };
};
