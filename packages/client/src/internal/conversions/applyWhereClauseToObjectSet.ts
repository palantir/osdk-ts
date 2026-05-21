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

// fullyQualifyPropName (the only consumer of objectType inside
// modernToLegacyWhereClause) is a no-op for type === "object", so an empty
// apiName is safe for the linked-inner-clause recursion.
const SYNTHETIC_OBJECT_TYPE = {
  type: "object",
  apiName: "",
} as ObjectOrInterfaceDefinition;

function hasKey<K extends string>(
  v: unknown,
  k: K,
): v is Record<K, unknown> {
  return typeof v === "object" && v != null && k in v;
}

function isAndClause(v: unknown): v is { $and: unknown[] } {
  return hasKey(v, "$and") && Array.isArray(v.$and);
}

function isOrClause(v: unknown): v is { $or: unknown[] } {
  return hasKey(v, "$or") && Array.isArray(v.$or);
}

function isNotClause(v: unknown): v is { $not: Record<string, unknown> } {
  return hasKey(v, "$not") && v.$not !== undefined;
}

function isLinkTraversal(v: unknown): v is Record<string, unknown> & {
  $reverseLink: string;
} {
  return hasKey(v, REVERSE_LINK_KEY)
    && typeof v[REVERSE_LINK_KEY] === "string";
}

/**
 * Expands a user-facing WhereClause into a wire ObjectSet composition:
 * pure-property clauses use a `filter` wrap; `$reverseLink`-tagged link
 * entries become `pivotTo → where → pivotTo → intersect` compositions;
 * `$and`/`$or`/`$not` compose via `intersect`/`union`/`subtract`.
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
    whereClause as Record<string, unknown>,
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
    // Empty AND is TRUE — unfiltered base.
    return composeChildren(
      baseObjectSet,
      whereClause.$and,
      "intersect",
      objectType,
      rdpNames,
    );
  }

  if (isOrClause(whereClause)) {
    if (whereClause.$or.length === 0) {
      // Empty OR is FALSE — emit an always-false filter so the wire shape
      // represents an empty set rather than the unfiltered base.
      return {
        type: "filter",
        objectSet: baseObjectSet,
        where: { type: "or", value: [] },
      };
    }
    return composeChildren(
      baseObjectSet,
      whereClause.$or,
      "union",
      objectType,
      rdpNames,
    );
  }

  if (isNotClause(whereClause)) {
    return {
      type: "subtract",
      objectSets: [
        baseObjectSet,
        applyInner(baseObjectSet, whereClause.$not, objectType, rdpNames),
      ],
    };
  }

  const propertyEntries: Array<[string, unknown]> = [];
  const linkEntries: Array<[
    string,
    Record<string, unknown> & {
      $reverseLink: string;
    },
  ]> = [];

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
      innerWhere,
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

function composeChildren(
  baseObjectSet: WireObjectSet,
  children: unknown[],
  composeType: "intersect" | "union",
  objectType: ObjectOrInterfaceDefinition,
  rdpNames: Set<string> | undefined,
): WireObjectSet {
  if (children.length === 0) {
    return baseObjectSet;
  }
  if (children.length === 1) {
    return applyInner(
      baseObjectSet,
      children[0] as Record<string, unknown>,
      objectType,
      rdpNames,
    );
  }
  return {
    type: composeType,
    objectSets: children.map((child) =>
      applyInner(
        baseObjectSet,
        child as Record<string, unknown>,
        objectType,
        rdpNames,
      )
    ),
  };
}
