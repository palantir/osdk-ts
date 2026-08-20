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
  ActionMetadata,
  InterfaceDefinition,
  InterfaceMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
  QueryDefinition,
  QueryMetadata,
} from "@osdk/api";

import type { MinimalClient } from "./MinimalClientContext.js";
import { registerObjectTypeAlias } from "./ontology/objectTypeAliases.js";
import { InterfaceDefinitions } from "./ontology/OntologyProvider.js";

/** @internal */
export const fetchMetadataInternal = async <
  Q extends
    | ObjectTypeDefinition
    | InterfaceDefinition
    | ActionDefinition<any>
    | QueryDefinition<any>,
>(
  client: MinimalClient,
  definition: Q,
): Promise<
  Q extends ObjectTypeDefinition
    ? ObjectMetadata
    : Q extends InterfaceDefinition
      ? InterfaceMetadata
      : Q extends ActionDefinition<any>
        ? ActionMetadata
        : Q extends QueryDefinition<any>
          ? QueryMetadata
          : never
> => {
  if (definition.type === "object") {
    // The ontology provider translates metadata using the client's alias
    // registry, which is populated as definitions enter the client. This is one
    // of those entry points, and it can be the first, so register before
    // resolving rather than reading a registry nothing has filled in yet.
    registerObjectTypeAlias(client, definition);
    const { [InterfaceDefinitions]: interfaceDefs, ...objectTypeDef } =
      await client.ontologyProvider.getObjectDefinition(definition.apiName);
    // The provider rekeys `properties` (and friends) into the local vocabulary
    // but deliberately leaves `apiName` bound, since that is what identifies the
    // object type on the wire. `fetchMetadata` is user-facing, so report local.
    const alias = objectTypeDef.alias;
    return (
      alias == null
        ? objectTypeDef
        : { ...objectTypeDef, apiName: alias.localApiName }
    ) as any;
  } else if (definition.type === "interface") {
    return client.ontologyProvider.getInterfaceDefinition(
      definition.apiName,
    ) as any;
  } else if (definition.type === "action") {
    return client.ontologyProvider.getActionDefinition(
      definition.unsanitizedApiName ?? definition.apiName,
    ) as any;
  } else if (definition.type === "query") {
    const queryDef = await client.ontologyProvider.getQueryDefinition(
      definition.apiName,
      definition.isFixedVersion ? definition.version : undefined,
    );
    // As above: the server answers under the bound name, but this is user-facing.
    return (
      definition.alias == null
        ? queryDef
        : { ...queryDef, apiName: definition.alias.localApiName }
    ) as any;
  } else {
    throw new Error("Not implemented for given definition");
  }
};
