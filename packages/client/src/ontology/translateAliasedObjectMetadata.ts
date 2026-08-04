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

import type { ObjectMetadata, ObjectTypeAlias } from "@osdk/api";

import type { FetchedObjectTypeDefinition } from "./OntologyProvider.js";

/**
 * Rewrites server-fetched object metadata so that every property name in it is
 * the local (code-facing) one, letting the rest of the client compare the
 * metadata against user-written property names directly.
 *
 * `apiName` is deliberately **left bound**. It identifies the object type on the
 * wire, and is used to build request URLs for timeseries / media / cipherText
 * properties and to compare against user-supplied definitions in `$as`. The
 * local object type name is available as `alias.localApiName`, and
 * `fetchMetadata` substitutes it for user-facing reads. `links[].targetType` is
 * left bound for the same reason - it is fed back into the ontology provider,
 * which is keyed by bound name.
 *
 * Returns a new object; the input is a deep-frozen cache entry and must not be
 * mutated. Returns the input unchanged when the alias renames no properties.
 *
 * @internal
 */
export function translateAliasedObjectMetadata(
  def: FetchedObjectTypeDefinition,
  alias: ObjectTypeAlias,
): FetchedObjectTypeDefinition {
  const boundToLocal = invert(alias.properties);
  if (boundToLocal == null) {
    // Only the object type name is remapped, so the metadata is already usable
    // as-is; just record the alias on it.
    return { ...def, alias };
  }

  const toLocal = (bound: string): string => boundToLocal[bound] ?? bound;

  return {
    ...def,
    alias,
    properties: rekey(def.properties, toLocal),
    primaryKeyApiName: toLocal(def.primaryKeyApiName as string),
    titleProperty: toLocal(def.titleProperty as string),
    ...(def.interfaceMap != null && {
      // values are object property names
      interfaceMap: mapValues(def.interfaceMap, (byInterfaceProp) =>
        mapValues(byInterfaceProp, toLocal),
      ),
    }),
    ...(def.inverseInterfaceMap != null && {
      // keys are object property names
      inverseInterfaceMap: mapValues(def.inverseInterfaceMap, (byObjectProp) =>
        rekey(byObjectProp, toLocal),
      ),
    }),
    ...(def.interfaceImplementations != null && {
      interfaceImplementations: mapValues(
        def.interfaceImplementations,
        (byInterfaceProp) =>
          mapValues(byInterfaceProp, (impl) =>
            translateImplementation(impl, toLocal),
          ),
      ),
    }),
  } as FetchedObjectTypeDefinition;
}

function translateImplementation(
  impl: ObjectMetadata.InterfacePropertyImplementation,
  toLocal: (bound: string) => string,
): ObjectMetadata.InterfacePropertyImplementation {
  switch (impl.type) {
    case "localProperty":
    case "structField":
      return { ...impl, propertyApiName: toLocal(impl.propertyApiName) };
    case "struct":
      return {
        ...impl,
        mapping: mapValues(impl.mapping, (entry) => ({
          ...entry,
          propertyApiName: toLocal(entry.propertyApiName),
        })),
      };
    case "reduced":
      return {
        ...impl,
        implementation: translateImplementation(
          impl.implementation,
          toLocal,
        ) as typeof impl.implementation,
      };
    default: {
      const _: never = impl;
      return impl;
    }
  }
}

function invert(
  localToBound: Record<string, string> | undefined,
): Record<string, string> | undefined {
  if (localToBound == null) {
    return undefined;
  }
  const entries = Object.entries(localToBound);
  if (entries.length === 0) {
    return undefined;
  }
  const inverted: Record<string, string> = {};
  for (const [local, bound] of entries) {
    inverted[bound] = local;
  }
  return inverted;
}

function rekey<V>(
  record: Record<string, V>,
  toLocal: (bound: string) => string,
): Record<string, V> {
  const out: Record<string, V> = {};
  for (const [key, value] of Object.entries(record)) {
    out[toLocal(key)] = value;
  }
  return out;
}

function mapValues<V, R>(
  record: Record<string, V>,
  fn: (value: V) => R,
): Record<string, R> {
  const out: Record<string, R> = {};
  for (const [key, value] of Object.entries(record)) {
    out[key] = fn(value);
  }
  return out;
}
