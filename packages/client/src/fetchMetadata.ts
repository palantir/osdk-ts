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
  MinActionDef,
  MinInterfaceDef,
  MinObjectDef,
  MinQueryDef,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { ActionMetadata, QueryMetadata } from "@osdk/client.api";
import {
  __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition,
  wireActionTypeV2ToSdkActionDefinition,
} from "@osdk/generator-converters";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "./MinimalClientContext.js";
import { InterfaceDefinitions } from "./ontology/OntologyProvider.js";
import { addUserAgentAndRequestContextHeaders } from "./util/addUserAgentAndRequestContextHeaders.js";

/** @internal */
export const fetchMetadataInternal = async <
  Q extends (
    | MinObjectDef<any, any>
    | MinInterfaceDef<any, any>
    | MinActionDef<any, any>
    | MinQueryDef<any, any, any>
  ),
>(
  client: MinimalClient,
  definition: Q,
): Promise<
  Q extends MinObjectDef<any, any> ? ObjectTypeDefinition<any, any>
    : Q extends MinInterfaceDef<any, any> ? InterfaceDefinition<any, any>
    : Q extends MinActionDef<any, any> ? ActionMetadata
    : Q extends MinQueryDef<any, any, any> ? QueryMetadata
    : never
> => {
  if (definition.type === "object") {
    return fetchObjectMetadata(client, definition) as any;
  } else if (definition.type === "interface") {
    return fetchInterfaceMetadata(client, definition) as any;
  } else if (definition.type === "action") {
    return fetchActionMetadata(client, definition) as any;
  } else if (definition.type === "query") {
    return fetchQueryMetadata(client, definition) as any;
  } else {
    throw new Error("Not implemented for given definition");
  }
};

const fetchObjectMetadata = async (
  client: MinimalClient,
  objectType: MinObjectDef<any, any>,
): Promise<ObjectTypeDefinition<any, any>> => {
  const { [InterfaceDefinitions]: interfaceDefs, ...objectTypeDef } =
    await client.ontologyProvider
      .getObjectDefinition(objectType.apiName);
  return objectTypeDef;
};

const fetchInterfaceMetadata = async (
  client: MinimalClient,
  interfaceType: MinInterfaceDef<any, any>,
): Promise<InterfaceDefinition<any, any>> => {
  return client.ontologyProvider.getInterfaceDefinition(interfaceType.apiName);
};

const fetchActionMetadata = async (
  client: MinimalClient,
  actionType: MinActionDef<any, any>,
): Promise<ActionMetadata> => {
  const response = await OntologiesV2.ActionTypesV2.getActionTypeV2(
    addUserAgentAndRequestContextHeaders(client, actionType),
    await client.ontologyRid,
    actionType.apiName,
  );
  const { type, ...rest } = wireActionTypeV2ToSdkActionDefinition(response);
  return {
    ...rest,
    rid: response.rid,
  };
};

const fetchQueryMetadata = async (
  client: MinimalClient,
  queryType: MinQueryDef<any, any, any>,
): Promise<QueryMetadata> => {
  const response = await OntologiesV2.QueryTypes.getQueryTypeV2(
    addUserAgentAndRequestContextHeaders(client, queryType),
    await client.ontologyRid,
    queryType.apiName,
  );
  return {
    displayName: response.displayName,
    description: response.description,
    rid: response.rid,
  };
};
