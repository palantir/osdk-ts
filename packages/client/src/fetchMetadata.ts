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
import {
  __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition,
} from "@osdk/generator-converters";
import type { MinimalClient } from "./MinimalClientContext.js";
import { InterfaceDefinitions } from "./ontology/OntologyProvider.js";

/** @internal */
export const fetchMetadataInternal = async <
  Q extends (
    | ObjectTypeDefinition<any, any>
    | InterfaceDefinition<any, any>
    | ActionDefinition<any, any>
    | QueryDefinition<any, any, any>
  ),
>(
  client: MinimalClient,
  definition: Q,
): Promise<
  Q extends ObjectTypeDefinition<any, any> ? ObjectMetadata<any, any>
    : Q extends InterfaceDefinition<any, any> ? InterfaceMetadata<any, any>
    : Q extends ActionDefinition<any, any> ? ActionMetadata<any, any>
    : Q extends QueryDefinition<any, any, any> ? QueryMetadata<any, any>
    : never
> => {
  if (definition.type === "object") {
    const { [InterfaceDefinitions]: interfaceDefs, ...objectTypeDef } =
      await client.ontologyProvider
        .getObjectDefinition(definition.apiName);
    return objectTypeDef as any;
  } else if (definition.type === "interface") {
    return client.ontologyProvider.getInterfaceDefinition(
      definition.apiName,
    ) as any;
  } else if (definition.type === "action") {
    return client.ontologyProvider.getActionDefinition(
      definition.apiName,
    ) as any;
  } else if (definition.type === "query") {
    return client.ontologyProvider.getQueryDefinition(
      definition.apiName,
    ) as any;
  } else {
    throw new Error("Not implemented for given definition");
  }
};
