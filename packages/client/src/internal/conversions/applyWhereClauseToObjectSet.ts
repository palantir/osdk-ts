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
  ObjectOrInterfaceDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { modernToLegacyWhereClause } from "./modernToLegacyWhereClause.js";

const REVERSE_LINK_KEY = "$reverseLink";
const SYNTHETIC_OBJECT_TYPE: ObjectOrInterfaceDefinition = {
  type: "object",
  apiName: "",
} as ObjectOrInterfaceDefinition;

function isAndClause(value: unknown): value is { $and: unknown[] } {
  return typeof value === "object" && value != null && "$and" in value
    && Array.isArray((value as { $and: unknown }).$and);
}

function isOrClause(value: unknown): value is { $or: unknown[] } {
  return typeof value === "object" && value != null && "$or" in value
    && Array.isArray((value as { $or: unknown }).$or);
}

function isNotClause(value: unknown): value is { $not: unknown } {
  return typeof value === "object" && value != null && "$not" in value;
}

function isLinkTraversal(value: unknown): value is { $reverseLink: string } {
  return typeof value === "object" && value != null
    && REVERSE_LINK_KEY in value
    && typeof (value as { $reverseLink: unknown }).$reverseLink === "string";
}

/**
 * Converts a user-facing WhereClause into a wire ObjectSet composition,
 * applying the clause to `baseObjectSet`. Pure-property clauses produce
 * a `filter` wrap (identical to the previous direct path). Link-traversed
 * entries (recognized by the `$reverseLink` sentinel on the inner value)
 * expand to `pivotTo(linkName) → where(inner) → pivotTo(reverseLink) → intersect`
 * compositions. `$and`/`$or`/`$not` compose via `intersect`/`union`/`subtract`.
 *
 * Link traversal requires the caller to supply `$reverseLink` on the inner
 * value; the OSDK does not auto-resolve it because object metadata is async-
 * only. Filter-list integrations populate `$reverseLink` from
 * `LinkedPropertyFilterDefinition.reverseLinkName`.
 *
 * @internal
 */
export function applyWhereClauseToObjectSet<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: WireObjectSet,
  whereClause: WhereClause<T, RDPs>,
  objectType: T,
  rdpNames?: Set<string>,
): WireObjectSet {
  return applyInner(
    baseObjectSet,
    whereClause as unknown as Record<string, unknown>,
    objectType,
    rdpNames,
  );
}

function applyInner(
  baseObjectSet: WireObjectSet,
  whereClause: Record<string, unknown>,
  objectType: ObjectOrInterfaceDefinition,
  rdpNames: Set<string> | undefined,
): WireObjectSet {
  if (isAndClause(whereClause)) {
    if (whereClause.$and.length === 0) {
      return baseObjectSet;
    }
    if (whereClause.$and.length === 1) {
      return applyInner(
        baseObjectSet,
        whereClause.$and[0] as Record<string, unknown>,
        objectType,
        rdpNames,
      );
    }
    return {
      type: "intersect",
      objectSets: whereClause.$and.map((child) =>
        applyInner(
          baseObjectSet,
          child as Record<string, unknown>,
          objectType,
          rdpNames,
        )
      ),
    };
  }

  if (isOrClause(whereClause)) {
    if (whereClause.$or.length === 0) {
      return baseObjectSet;
    }
    if (whereClause.$or.length === 1) {
      return applyInner(
        baseObjectSet,
        whereClause.$or[0] as Record<string, unknown>,
        objectType,
        rdpNames,
      );
    }
    return {
      type: "union",
      objectSets: whereClause.$or.map((child) =>
        applyInner(
          baseObjectSet,
          child as Record<string, unknown>,
          objectType,
          rdpNames,
        )
      ),
    };
  }

  if (isNotClause(whereClause)) {
    const excluded = applyInner(
      baseObjectSet,
      whereClause.$not as Record<string, unknown>,
      objectType,
      rdpNames,
    );
    return {
      type: "subtract",
      objectSets: [baseObjectSet, excluded],
    };
  }

  const propertyEntries: Array<[string, unknown]> = [];
  const linkEntries: Array<[string, { $reverseLink: string }]> = [];

  for (const [key, value] of Object.entries(whereClause)) {
    if (isLinkTraversal(value)) {
      linkEntries.push([key, value]);
    } else {
      propertyEntries.push([key, value]);
    }
  }

  const components: WireObjectSet[] = [];

  if (propertyEntries.length > 0) {
    const propertyClause = Object.fromEntries(propertyEntries);
    components.push({
      type: "filter",
      objectSet: baseObjectSet,
      where: modernToLegacyWhereClause(
        propertyClause as WhereClause<ObjectOrInterfaceDefinition>,
        objectType,
        rdpNames,
      ),
    });
  }

  for (const [linkName, value] of linkEntries) {
    const { $reverseLink: reverseLink, ...innerWhere } = value;
    const linkedBase: WireObjectSet = {
      type: "searchAround",
      objectSet: baseObjectSet,
      link: linkName,
    };
    const filteredLinked = applyInner(
      linkedBase,
      innerWhere as Record<string, unknown>,
      SYNTHETIC_OBJECT_TYPE,
      undefined,
    );
    components.push({
      type: "searchAround",
      objectSet: filteredLinked,
      link: reverseLink,
    });
  }

  if (components.length === 0) {
    return baseObjectSet;
  }
  if (components.length === 1) {
    return components[0];
  }
  return {
    type: "intersect",
    objectSets: components,
  };
}
