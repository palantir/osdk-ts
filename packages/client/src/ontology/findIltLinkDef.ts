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
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "./OntologyProvider.js";

export type ResolvedLink =
  | { kind: "concrete"; targetTypeApiName: string; targetType: "object" }
  | {
    kind: "ilt";
    targetTypeApiName: string;
    targetType: "object" | "interface";
  };

/** Finds an interface link definition on any implemented interface; throws on ambiguous conflicts. */
export function findIltLinkDef(
  objectMetadata: FetchedObjectTypeDefinition,
  linkName: string,
): InterfaceMetadata.Link<any, any> | undefined {
  const matches: Array<readonly [string, InterfaceMetadata.Link<any, any>]> =
    [];
  for (
    const [interfaceApiName, iface] of Object.entries(
      objectMetadata[InterfaceDefinitions],
    )
  ) {
    const link = iface.def.links[linkName];
    if (link) {
      matches.push([interfaceApiName, link] as const);
    }
  }
  if (matches.length === 0) {
    return undefined;
  }
  const [, first] = matches[0];
  const allSame = matches.every(
    ([, l]) =>
      l.targetTypeApiName === first.targetTypeApiName
      && l.targetType === first.targetType,
  );
  if (!allSame) {
    throw new Error(
      `Ambiguous interface link '${linkName}' on object type '${objectMetadata.apiName}': `
        + matches
          .map(([n, l]) => `${n} -> ${l.targetType} ${l.targetTypeApiName}`)
          .join(", "),
    );
  }
  return first;
}

/** Resolves a link name to a concrete or interface link target, or undefined if neither exists. */
export function resolveLinkOnObject(
  objectMetadata: FetchedObjectTypeDefinition,
  linkName: string,
): ResolvedLink | undefined {
  const concrete = objectMetadata.links[linkName];
  if (concrete !== undefined) {
    return {
      kind: "concrete",
      targetTypeApiName: concrete.targetType,
      targetType: "object",
    };
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
