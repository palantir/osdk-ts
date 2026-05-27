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

import type { InterfaceMetadata } from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "./OntologyProvider.js";

export type ResolvedLink =
  | { kind: "concrete"; targetTypeApiName: string }
  | {
    kind: "ilt";
    targetTypeApiName: string;
    targetType: "object" | "interface";
  };

/**
 * Searches all implemented interfaces of an object type for an interface link
 * type definition matching the given link name. Returns undefined if no
 * interface defines a link with that name.
 *
 * If multiple interfaces declare a link with the same name and they all point
 * to the same target, returns that shared definition. If they point to
 * diverging targets, throws — the caller can't safely pick one.
 */
export function findIltLinkDef(
  objectMetadata: FetchedObjectTypeDefinition,
  linkName: string,
): InterfaceMetadata.Link<any, any> | undefined {
  let chosen: InterfaceMetadata.Link<any, any> | undefined;
  let chosenInterface: string | undefined;
  const conflicts: Array<
    { interfaceApiName: string; targetTypeApiName: string; targetType: string }
  > = [];

  for (
    const [interfaceApiName, iface] of Object.entries(
      objectMetadata[InterfaceDefinitions],
    )
  ) {
    const iltDef = iface.def.links[linkName];
    if (!iltDef) {
      continue;
    }
    if (chosen === undefined) {
      chosen = iltDef;
      chosenInterface = interfaceApiName;
      continue;
    }
    if (
      chosen.targetTypeApiName === iltDef.targetTypeApiName
      && chosen.targetType === iltDef.targetType
    ) {
      continue;
    }
    if (conflicts.length === 0 && chosenInterface !== undefined) {
      conflicts.push({
        interfaceApiName: chosenInterface,
        targetTypeApiName: chosen.targetTypeApiName,
        targetType: chosen.targetType,
      });
    }
    conflicts.push({
      interfaceApiName,
      targetTypeApiName: iltDef.targetTypeApiName,
      targetType: iltDef.targetType,
    });
  }

  if (conflicts.length > 0) {
    const details = conflicts
      .map((c) =>
        `${c.interfaceApiName} -> ${c.targetType} ${c.targetTypeApiName}`
      )
      .join(", ");
    throw new Error(
      `Ambiguous interface link '${linkName}' on object type '${objectMetadata.apiName}': ${details}`,
    );
  }

  return chosen;
}

/**
 * Resolves a link name on an object type to either its concrete link
 * definition or, failing that, an interface link type definition from one of
 * the implemented interfaces. Returns undefined if neither exists.
 */
export function resolveLinkOnObject(
  objectMetadata: FetchedObjectTypeDefinition,
  linkName: string,
): ResolvedLink | undefined {
  const concrete = objectMetadata.links[linkName];
  if (concrete !== undefined) {
    return { kind: "concrete", targetTypeApiName: concrete.targetType };
  }

  const iltDef = findIltLinkDef(objectMetadata, linkName);
  if (iltDef !== undefined) {
    return {
      kind: "ilt",
      targetTypeApiName: iltDef.targetTypeApiName,
      targetType: iltDef.targetType,
    };
  }

  return undefined;
}

/**
 * Same as {@link resolveLinkOnObject} but throws with a uniform error message
 * when the link cannot be resolved.
 */
export function resolveLinkOnObjectOrThrow(
  objectMetadata: FetchedObjectTypeDefinition,
  linkName: string,
): ResolvedLink {
  const resolved = resolveLinkOnObject(objectMetadata, linkName);
  if (resolved === undefined) {
    throw new Error(
      `Link '${linkName}' is not a concrete link or ILT on object type '${objectMetadata.apiName}'`,
    );
  }
  return resolved;
}

/**
 * Builds the wire `interfaceLinkSearchAround` object set used to traverse from
 * a source object set to objects on the other side of an interface link type.
 */
export function buildIltSearchAroundObjectSet(
  sourceObjectSet: WireObjectSet,
  interfaceLink: string,
): WireObjectSet {
  return {
    type: "interfaceLinkSearchAround",
    objectSet: sourceObjectSet,
    interfaceLink,
  };
}
