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
import * as ActionTypeFullMetadata from "@osdk/foundry.ontologies/ActionTypeFullMetadata";

import type { MinimalClient } from "./MinimalClientContext.js";
import { InterfaceDefinitions } from "./ontology/OntologyProvider.js";

/** @internal */
export function fetchMetadataInternal<Q extends ActionDefinition<unknown>>(
  client: MinimalClient,
  definition: Q,
  options: { includeActionEffects: true },
): Promise<ActionMetadata>;
/** @internal */
export function fetchMetadataInternal<
  Q extends
    | ObjectTypeDefinition
    | InterfaceDefinition
    | ActionDefinition<unknown>
    | QueryDefinition<unknown>,
>(
  client: MinimalClient,
  definition: Q,
): Promise<
  Q extends ObjectTypeDefinition
    ? ObjectMetadata
    : Q extends InterfaceDefinition
      ? InterfaceMetadata
      : Q extends ActionDefinition<unknown>
        ? ActionMetadata
        : Q extends QueryDefinition<unknown>
          ? QueryMetadata
          : never
>;
export async function fetchMetadataInternal(
  client: MinimalClient,
  definition:
    | ObjectTypeDefinition
    | InterfaceDefinition
    | ActionDefinition<unknown>
    | QueryDefinition<unknown>,
  options?: { includeActionEffects: true },
): Promise<
  ObjectMetadata | InterfaceMetadata | ActionMetadata | QueryMetadata
> {
  if (definition.type === "object") {
    const { [InterfaceDefinitions]: interfaceDefs, ...objectTypeDef } =
      await client.ontologyProvider.getObjectDefinition(definition.apiName);
    return objectTypeDef;
  } else if (definition.type === "interface") {
    return client.ontologyProvider.getInterfaceDefinition(definition.apiName);
  } else if (definition.type === "action") {
    const actionTypeApiName =
      definition.unsanitizedApiName ?? definition.apiName;
    if (options?.includeActionEffects) {
      const fullMetadata = await ActionTypeFullMetadata.get(
        client,
        await client.ontologyRid,
        actionTypeApiName,
        { branch: client.branch, preview: true },
      );
      if (
        !fullMetadata ||
        !fullMetadata.actionType ||
        !Array.isArray(fullMetadata.fullLogicRules)
      ) {
        throw new Error(
          `Full metadata for action ${actionTypeApiName} is missing actionType or fullLogicRules`,
        );
      }
      const { actionType, fullLogicRules } = fullMetadata;
      const { wireActionTypeV2ToSdkActionMetadata } =
        await import("@osdk/generator-converters");
      return wireActionTypeV2ToSdkActionMetadata(
        actionType,
        actionTypeApiName,
        fullLogicRules,
      );
    }
    return client.ontologyProvider.getActionDefinition(actionTypeApiName);
  } else if (definition.type === "query") {
    return client.ontologyProvider.getQueryDefinition(
      definition.apiName,
      definition.isFixedVersion ? definition.version : undefined,
    );
  } else {
    throw new Error("Not implemented for given definition");
  }
}
