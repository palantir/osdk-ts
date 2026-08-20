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

import type {
  ObjectMetadata,
  ObjectOrInterfaceDefinition,
  ObjectTypeAlias,
} from "@osdk/api";

import type { Client } from "../Client.js";
import { additionalContext } from "../Client.js";
import type { MinimalClient } from "../MinimalClientContext.js";

/**
 * Object type aliases known to this client, indexed both ways.
 *
 * Two vocabularies are in play:
 *
 * - `local` is what the SDK was generated with, i.e. what user code is written
 *   against. Everything user-visible reports local names.
 * - `bound` is what the stack being talked to uses. Wire only; a bound name
 *   should never escape to user code.
 *
 * Populated as alias-remapped definitions are handed to the client, and read by
 * the ontology provider when it translates fetched metadata into the local
 * vocabulary.
 *
 * @internal
 */
export interface ObjectTypeAliases {
  byLocal: Record<string, ObjectTypeAlias>;
  byBound: Record<string, ObjectTypeAlias>;
  /**
   * Bumped whenever an alias is recorded, so caches keyed on translated
   * metadata can tell that their inputs changed.
   */
  generation: { value: number };
}

/** @internal */
export function createObjectTypeAliases(): ObjectTypeAliases {
  return { byLocal: {}, byBound: {}, generation: { value: 0 } };
}

/**
 * Records the alias carried by an object type definition, if it has one.
 * Definitions without an `alias` are ignored, as are aliases that rename
 * nothing.
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
  const alias = definition.alias;
  if (alias == null) {
    return;
  }
  const renamesNothing =
    alias.localApiName === alias.boundApiName &&
    (alias.properties == null || Object.keys(alias.properties).length === 0);
  if (renamesNothing) {
    return;
  }

  const existing = client.objectTypeAliases.byBound[alias.boundApiName];
  client.objectTypeAliases.byLocal[alias.localApiName] = alias;
  client.objectTypeAliases.byBound[alias.boundApiName] = alias;
  if (existing !== alias) {
    client.objectTypeAliases.generation.value++;
  }
}

/** @internal */
export function getAliasByBound(
  client: MinimalClient,
  boundApiName: string,
): ObjectTypeAlias | undefined {
  return client.objectTypeAliases.byBound[boundApiName];
}

/** @internal */
export function getAliasByLocal(
  client: MinimalClient,
  localApiName: string,
): ObjectTypeAlias | undefined {
  return client.objectTypeAliases.byLocal[localApiName];
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
  return (
    client.objectTypeAliases.byBound[boundApiName]?.localApiName ?? boundApiName
  );
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
  return (
    client.objectTypeAliases.byLocal[localApiName]?.boundApiName ?? localApiName
  );
}

/**
 * Anything that may carry an object type alias: a generated definition handed to
 * the client, or metadata already translated by the ontology provider.
 *
 * @internal
 */
export type MaybeAliased =
  | { alias?: ObjectTypeAlias }
  | ObjectOrInterfaceDefinition
  | ObjectMetadata
  | undefined;

function aliasOf(source: MaybeAliased): ObjectTypeAlias | undefined {
  return source == null
    ? undefined
    : (source as { alias?: ObjectTypeAlias }).alias;
}

/**
 * Translates a code-facing property api name into the name to put on the wire.
 * Properties the alias does not mention are returned unchanged, as are the `$`
 * prefixed pseudo-properties (`$title`, `$primaryKey`, ...) which the platform
 * resolves itself.
 *
 * @internal
 */
export function toBoundProperty(
  source: MaybeAliased,
  localPropertyName: string,
): string {
  if (localPropertyName.startsWith("$")) {
    return localPropertyName;
  }
  return aliasOf(source)?.properties?.[localPropertyName] ?? localPropertyName;
}

/**
 * Translates several property api names at once. Returns the input array
 * untouched when there is nothing to translate, so callers can use the result
 * unconditionally without allocating.
 *
 * @internal
 */
export function toBoundProperties(
  source: MaybeAliased,
  localPropertyNames: readonly string[],
): readonly string[] {
  const properties = aliasOf(source)?.properties;
  if (properties == null) {
    return localPropertyNames;
  }
  return localPropertyNames.map((name) => toBoundProperty(source, name));
}

/**
 * Inverse of {@link toBoundProperty}, for names arriving from the wire.
 *
 * Built per call from the alias rather than stored inverted, because the
 * inversion is only needed on paths that already iterate a whole object.
 *
 * @internal
 */
export function toLocalPropertyLookup(
  source: MaybeAliased,
): ((boundPropertyName: string) => string) | undefined {
  const properties = aliasOf(source)?.properties;
  if (properties == null || Object.keys(properties).length === 0) {
    return undefined;
  }
  const inverted: Record<string, string> = {};
  for (const [local, bound] of Object.entries(properties)) {
    inverted[bound] = local;
  }
  return (boundPropertyName) =>
    inverted[boundPropertyName] ?? boundPropertyName;
}

/**
 * Local -> bound name resolution for callers that hold a {@link Client} rather
 * than its internal context, and that write names onto the wire themselves
 * instead of going through the object set builders (notably `@osdk/functions`'
 * edit path).
 *
 * Exposed as a factory rather than as the context symbol so that neither the
 * symbol nor `MinimalClient` has to cross a package boundary - re-exported
 * `unique symbol`s lose their type identity, and the CJS/ESM duplication
 * described in `createClient.ts` makes symbol equality unreliable.
 *
 * NOTE: this is re-exported from the `unstable-do-not-use` entrypoint, so it must
 * not carry an internal-visibility JSDoc tag. `stripInternal` would drop it from
 * the generated declarations and the declaration rollup would then fail to
 * resolve the re-export. That check scans the comment text, so avoid even
 * mentioning the tag by name here.
 */
export function createAliasResolver(client: Client): {
  objectType: (localApiName: string) => string;
  property: (localObjectType: string, localPropertyName: string) => string;
} {
  const ctx = client[additionalContext];
  return {
    objectType: (localApiName) => toBoundObjectType(ctx, localApiName),
    property: (localObjectType, localPropertyName) =>
      toBoundProperty(
        { alias: getAliasByLocal(ctx, localObjectType) },
        localPropertyName,
      ),
  };
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
  const local = client.objectTypeAliases.byBound[boundApiName]?.localApiName;
  return local == null || local === boundApiName
    ? `'${boundApiName}'`
    : `'${local}' (bound to '${boundApiName}')`;
}
