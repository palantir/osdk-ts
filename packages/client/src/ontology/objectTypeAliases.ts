/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";

import type { MinimalClient } from "../MinimalClientContext.js";

/**
 * Bidirectional map between the two names an object type can have when a
 * definition has been alias-remapped:
 *
 * - `local` is the code-facing api name, i.e. what was generated into the SDK
 *   the code was written against.
 * - `bound` is the api name of the object type on the stack we are talking to.
 *
 * Requests are made with `bound` names; `local` names are what user code sees.
 * A bound name should never escape to user code.
 *
 * @internal
 */
export interface ObjectTypeAliases {
  localToBound: Record<string, string>;
  boundToLocal: Record<string, string>;
}

/** @internal */
export function createObjectTypeAliases(): ObjectTypeAliases {
  return { localToBound: {}, boundToLocal: {} };
}

/**
 * Records the alias carried by an object type definition, if it has one, so
 * that responses mentioning the bound name can be mapped back to the local
 * name. Definitions without a `localApiName` are ignored.
 *
 * @internal
 */
export function registerObjectTypeAlias(
  client: MinimalClient,
  definition: ObjectOrInterfaceDefinition,
): void {
  if (definition.type !== "object") {
    return;
  }
  const local = definition.localApiName;
  if (local == null || local === definition.apiName) {
    return;
  }
  client.objectTypeAliases.localToBound[local] = definition.apiName;
  client.objectTypeAliases.boundToLocal[definition.apiName] = local;
}

/**
 * Maps an object type api name as it appears on the wire to the name user code
 * expects. Returns the input unchanged when no alias is registered.
 *
 * @internal
 */
export function toLocalObjectType(
  client: MinimalClient,
  boundApiName: string,
): string {
  return client.objectTypeAliases.boundToLocal[boundApiName] ?? boundApiName;
}

/**
 * Maps a code-facing object type api name to the name to use on the wire.
 * Returns the input unchanged when no alias is registered.
 *
 * @internal
 */
export function toBoundObjectType(
  client: MinimalClient,
  localApiName: string,
): string {
  return client.objectTypeAliases.localToBound[localApiName] ?? localApiName;
}

/**
 * Renders an object type name for an error message, quotes included. Mentions
 * the bound name alongside the local one when they differ, so messages match
 * the user's code while staying debuggable against the stack.
 *
 * @internal
 */
export function describeObjectType(
  client: MinimalClient,
  boundApiName: string,
): string {
  const local = client.objectTypeAliases.boundToLocal[boundApiName];
  return local == null
    ? `'${boundApiName}'`
    : `'${local}' (bound to '${boundApiName}')`;
}
