/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  WhereClause,
} from "@osdk/api";
import type {
  ShapeLinkObjectSetDef,
  ShapeLinkOrderBy,
} from "@osdk/api/shapes-internal";
import { isSourcePkSymbol } from "@osdk/api/unstable";
import { additionalContext, type Client } from "../Client.js";

/**
 * Extracts query options from a link definition for use with observeObjectSet.
 * Uses common infrastructure for symbol resolution and orderBy conversion.
 */
interface LinkQueryOptions {
  where?: WhereClause<ObjectOrInterfaceDefinition>;
  orderBy?: Record<string, "asc" | "desc">;
  pageSize?: number;
}

export function getLinkQueryOptions(
  linkDef: ShapeLinkObjectSetDef,
  sourceObject: Osdk.Instance<ObjectOrInterfaceDefinition>,
  pageSize?: number,
): LinkQueryOptions {
  const options: LinkQueryOptions = {};

  if (linkDef.where) {
    options.where = resolveSymbolBindings(
      linkDef.where,
      sourceObject.$primaryKey,
    ) as WhereClause<ObjectOrInterfaceDefinition>;
  }

  if (linkDef.orderBy && linkDef.orderBy.length > 0) {
    options.orderBy = orderByToMap(linkDef.orderBy);
  }

  // Apply limit as page size (if specified)
  if (linkDef.limit !== undefined) {
    options.pageSize = linkDef.limit;
  } else if (pageSize !== undefined) {
    options.pageSize = pageSize;
  }

  return options;
}

/**
 * Builds an ObjectSet from a link definition using the source type definition.
 * Delegates to buildObjectSetFromDef for consistent behavior.
 *
 * @param client - The OSDK client
 * @param sourceType - The source type definition
 * @param sourcePrimaryKey - The primary key of the source object
 * @param linkDef - The link definition to execute
 * @returns A Promise resolving to an ObjectSet that can be used with observeObjectSet
 */
export async function buildObjectSetFromLinkDefByType(
  client: Client,
  sourceType: ObjectOrInterfaceDefinition,
  sourcePrimaryKey: unknown,
  linkDef: ShapeLinkObjectSetDef,
): Promise<ObjectSet<ObjectOrInterfaceDefinition>> {
  const metadata = await client[
    additionalContext
  ].ontologyProvider.getObjectDefinition(sourceType.apiName);
  const pkFieldName = metadata.primaryKeyApiName;

  let objectSet: ObjectSet<ObjectOrInterfaceDefinition> = client(
    sourceType as ObjectTypeDefinition,
  ).where({
    [pkFieldName]: sourcePrimaryKey,
  } as WhereClause<ObjectTypeDefinition>);

  for (const segment of linkDef.segments) {
    if (segment.type === "pivotTo") {
      objectSet = objectSet.pivotTo(segment.linkName);
    }
  }

  if (linkDef.setOperations && linkDef.setOperations.length > 0) {
    const otherObjectSets = await Promise.all(
      linkDef.setOperations.map((setOp) =>
        buildObjectSetFromLinkDefByType(
          client,
          sourceType,
          sourcePrimaryKey,
          setOp.other,
        ),
      ),
    );
    for (let i = 0; i < linkDef.setOperations.length; i++) {
      const setOp = linkDef.setOperations[i];
      const otherObjectSet = otherObjectSets[i];
      switch (setOp.type) {
        case "union":
          objectSet = objectSet.union(otherObjectSet);
          break;
        case "intersect":
          objectSet = objectSet.intersect(otherObjectSet);
          break;
        case "subtract":
          objectSet = objectSet.subtract(otherObjectSet);
          break;
        default: {
          const _exhaustive: never = setOp.type;
        }
      }
    }
  }

  return objectSet;
}

function orderByToMap(
  orderBy: readonly ShapeLinkOrderBy[],
): Record<string, "asc" | "desc"> {
  const result: Record<string, "asc" | "desc"> = {};
  for (const entry of orderBy) {
    result[entry.property] = entry.direction;
  }
  return result;
}

function resolveSymbolBindings(
  value: unknown,
  sourcePrimaryKey: unknown,
): unknown {
  if (isSourcePkSymbol(value)) {
    return sourcePrimaryKey;
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveSymbolBindings(item, sourcePrimaryKey));
  }
  if (value != null && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = resolveSymbolBindings(val, sourcePrimaryKey);
    }
    return result;
  }
  return value;
}
