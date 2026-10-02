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
  DerivedPropertyDefinition,
  ObjectSet,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";

import type { MinimalClient } from "../MinimalClientContext.js";
import { extractObjectOrInterfaceType } from "./extractObjectOrInterfaceType.js";

/* @internal
 * `pivotTo` cannot resolve link targets synchronously, so interface-rooted chains
 * can emit `interfaceLinkSearchAround` after reaching an object type. Resolve the
 * metadata at request time and rewrite those nodes to `searchAround`.
 *
 * Preserve unchanged nodes by identity so callers can avoid copying request bodies.
 */
export async function normalizeInterfaceLinkSearchArounds(
  clientCtx: MinimalClient,
  objectSet: ObjectSet,
): Promise<ObjectSet> {
  switch (objectSet.type) {
    case "base":
    case "interfaceBase":
    case "static":
    case "reference":
    case "methodInput":
      return objectSet;

    case "interfaceLinkSearchAround": {
      const innerObjectSet = await normalizeInterfaceLinkSearchArounds(
        clientCtx,
        objectSet.objectSet,
      );
      const producedType = await extractObjectOrInterfaceType(
        clientCtx,
        innerObjectSet,
      );

      if (producedType?.type === "object") {
        return {
          type: "searchAround",
          objectSet: innerObjectSet,
          // Keep the link name while converting between branded string types.
          link: objectSet.interfaceLink as string,
        };
      }

      return innerObjectSet === objectSet.objectSet
        ? objectSet
        : { ...objectSet, objectSet: innerObjectSet };
    }

    case "searchAround":
    case "filter":
    case "asType":
    case "asBaseObjectTypes":
    case "nearestNeighbors": {
      const innerObjectSet = await normalizeInterfaceLinkSearchArounds(
        clientCtx,
        objectSet.objectSet,
      );
      return innerObjectSet === objectSet.objectSet
        ? objectSet
        : { ...objectSet, objectSet: innerObjectSet };
    }

    case "withProperties": {
      const [innerObjectSet, derivedProperties] = await Promise.all([
        normalizeInterfaceLinkSearchArounds(clientCtx, objectSet.objectSet),
        normalizeDerivedProperties(clientCtx, objectSet.derivedProperties),
      ]);
      return innerObjectSet === objectSet.objectSet &&
        derivedProperties === objectSet.derivedProperties
        ? objectSet
        : { ...objectSet, objectSet: innerObjectSet, derivedProperties };
    }

    case "intersect":
    case "union":
    case "subtract": {
      const innerObjectSets = await Promise.all(
        objectSet.objectSets.map((innerObjectSet) =>
          normalizeInterfaceLinkSearchArounds(clientCtx, innerObjectSet),
        ),
      );
      return innerObjectSets.every(
        (innerObjectSet, i) => innerObjectSet === objectSet.objectSets[i],
      )
        ? objectSet
        : { ...objectSet, objectSets: innerObjectSets };
    }

    default: {
      const _: never = objectSet;
      invariant(
        false,
        `Unsupported object set type when normalizing search arounds: ${(objectSet as ObjectSet).type}`,
      );
    }
  }
}

async function normalizeDerivedProperties(
  clientCtx: MinimalClient,
  derivedProperties: Record<string, DerivedPropertyDefinition>,
): Promise<Record<string, DerivedPropertyDefinition>> {
  const entries = Object.entries(derivedProperties);
  const normalized = await Promise.all(
    entries.map(
      async ([key, definition]) =>
        [key, await normalizeDerivedProperty(clientCtx, definition)] as const,
    ),
  );
  return normalized.every(([, def], i) => def === entries[i][1])
    ? derivedProperties
    : Object.fromEntries(normalized);
}

async function normalizeDerivedProperty(
  clientCtx: MinimalClient,
  definition: DerivedPropertyDefinition,
): Promise<DerivedPropertyDefinition> {
  switch (definition.type) {
    case "property":
      return definition;

    case "selection": {
      const objectSet = await normalizeInterfaceLinkSearchArounds(
        clientCtx,
        definition.objectSet,
      );
      return objectSet === definition.objectSet
        ? definition
        : { ...definition, objectSet };
    }

    case "absoluteValue":
    case "extract":
    case "negate": {
      const property = await normalizeDerivedProperty(
        clientCtx,
        definition.property,
      );
      return property === definition.property
        ? definition
        : { ...definition, property };
    }

    case "subtract":
    case "divide": {
      const [left, right] = await Promise.all([
        normalizeDerivedProperty(clientCtx, definition.left),
        normalizeDerivedProperty(clientCtx, definition.right),
      ]);
      return left === definition.left && right === definition.right
        ? definition
        : { ...definition, left, right };
    }

    case "add":
    case "least":
    case "multiply":
    case "greatest": {
      const properties = await Promise.all(
        definition.properties.map((p) =>
          normalizeDerivedProperty(clientCtx, p),
        ),
      );
      return properties.every((p, i) => p === definition.properties[i])
        ? definition
        : { ...definition, properties };
    }

    default: {
      const _: never = definition;
      invariant(
        false,
        `Unsupported derived property type when normalizing search arounds: ${(definition as DerivedPropertyDefinition).type}`,
      );
    }
  }
}
