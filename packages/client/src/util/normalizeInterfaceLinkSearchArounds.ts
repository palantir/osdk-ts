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
 * `ObjectSet#pivotTo` cannot know synchronously whether a link's target is an
 * object type or an interface type -- link metadata is only reachable through
 * the async `ontologyProvider`. So `createSearchAround` guesses from the def the
 * object set was *constructed* with, which is stale for every derived object
 * set: once a chain is rooted at an interface, every subsequent pivot emits
 * `interfaceLinkSearchAround`, even after the chain has landed on a concrete
 * object type.
 *
 * The gateway rejects that with `Api:UnsupportedObjectSet`, because an
 * interface link can only be resolved against an interface-typed object set.
 *
 * This pass rewrites those nodes to `searchAround` at request time, when we can
 * afford to resolve the metadata. Nodes are returned by identity when nothing in
 * their subtree changed, so an object set containing no `interfaceLinkSearchAround`
 * is a cheap no-op.
 */
export async function normalizeInterfaceLinkSearchArounds(
  clientCtx: MinimalClient,
  objectSet: ObjectSet
): Promise<ObjectSet> {
  switch (objectSet.type) {
    // Leaves: no nested object sets.
    case "base":
    case "interfaceBase":
    case "static":
    case "reference":
    case "methodInput":
      return objectSet;

    case "interfaceLinkSearchAround": {
      const child = await normalizeInterfaceLinkSearchArounds(
        clientCtx,
        objectSet.objectSet
      );
      const sourceDef = await extractObjectOrInterfaceType(clientCtx, child);

      // The chain has already landed on a concrete object type, so `interfaceLink`
      // is really a plain link traversal on that object type.
      if (sourceDef?.type === "object") {
        return {
          type: "searchAround",
          objectSet: child,
          // `InterfaceLinkTypeApiName` and `LinkTypeApiName` are distinctly
          // branded strings, but the underlying value is the same: the caller
          // passed an object-type link name to `pivotTo` and it was placed in
          // the wrong field. Only the field is wrong, not the name.
          link: objectSet.interfaceLink as string,
        };
      }

      return child === objectSet.objectSet
        ? objectSet
        : { ...objectSet, objectSet: child };
    }

    // Single-child containers.
    case "searchAround":
    case "filter":
    case "asType":
    case "asBaseObjectTypes":
    case "nearestNeighbors": {
      const child = await normalizeInterfaceLinkSearchArounds(
        clientCtx,
        objectSet.objectSet
      );
      return child === objectSet.objectSet
        ? objectSet
        : { ...objectSet, objectSet: child };
    }

    // `withProperties` nests object sets twice: its own base, and one per
    // derived property (`MethodObjectSet` is an alias for `ObjectSet`).
    case "withProperties": {
      const child = await normalizeInterfaceLinkSearchArounds(
        clientCtx,
        objectSet.objectSet
      );
      const derivedProperties = await normalizeDerivedProperties(
        clientCtx,
        objectSet.derivedProperties
      );
      return child === objectSet.objectSet &&
        derivedProperties === objectSet.derivedProperties
        ? objectSet
        : { ...objectSet, objectSet: child, derivedProperties };
    }

    // Multi-child containers.
    case "intersect":
    case "union":
    case "subtract": {
      const children = await Promise.all(
        objectSet.objectSets.map((os) =>
          normalizeInterfaceLinkSearchArounds(clientCtx, os)
        )
      );
      return children.every((c, i) => c === objectSet.objectSets[i])
        ? objectSet
        : { ...objectSet, objectSets: children };
    }

    default: {
      const _: never = objectSet;
      invariant(
        false,
        `Unsupported object set type when normalizing search arounds: ${(objectSet as ObjectSet).type}`
      );
    }
  }
}

async function normalizeDerivedProperties(
  clientCtx: MinimalClient,
  derivedProperties: Record<string, DerivedPropertyDefinition>
): Promise<Record<string, DerivedPropertyDefinition>> {
  const entries = Object.entries(derivedProperties);
  const normalized = await Promise.all(
    entries.map(
      async ([key, definition]) =>
        [key, await normalizeDerivedProperty(clientCtx, definition)] as const
    )
  );
  return normalized.every(([, def], i) => def === entries[i][1])
    ? derivedProperties
    : Object.fromEntries(normalized);
}

async function normalizeDerivedProperty(
  clientCtx: MinimalClient,
  definition: DerivedPropertyDefinition
): Promise<DerivedPropertyDefinition> {
  switch (definition.type) {
    case "property":
      return definition;

    case "selection": {
      const objectSet = await normalizeInterfaceLinkSearchArounds(
        clientCtx,
        definition.objectSet
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
        definition.property
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
        definition.properties.map((p) => normalizeDerivedProperty(clientCtx, p))
      );
      return properties.every((p, i) => p === definition.properties[i])
        ? definition
        : { ...definition, properties };
    }

    default: {
      const _: never = definition;
      invariant(
        false,
        `Unsupported derived property type when normalizing search arounds: ${(definition as DerivedPropertyDefinition).type}`
      );
    }
  }
}
