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

import type { InterfaceMetadata } from "@osdk/api";
import type {
  ObjectSet as WireObjectSet,
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";

import type { MinimalClient } from "../../../MinimalClientContext.js";
import {
  type InterfaceHolder,
  isInterfaceHolder,
} from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import {
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { FetchedObjectTypeDefinition } from "../../../ontology/OntologyProvider.js";
import { getObjectTypesThatInvalidate } from "../getObjectTypesThatInvalidate.js";

type Membership = boolean | undefined;

export interface ObjectSetAnalysis {
  resultType: FetchedObjectTypeDefinition | InterfaceMetadata;
  objectTypes: ReadonlySet<string>;
  revalidateTypes: ReadonlySet<string>;
  matches: (object: ObjectHolder | InterfaceHolder) => Membership;
}

export async function analyzeObjectSet(
  mc: MinimalClient,
  objectSet: WireObjectSet,
): Promise<ObjectSetAnalysis> {
  const { resultType, objectTypes, revalidateTypes } =
    await getObjectTypesThatInvalidate(mc, objectSet);

  function matches(os: WireObjectSet, object: ObjectHolder): Membership {
    switch (os.type) {
      case "base":
        return object.$objectType === os.objectType;
      case "filter":
        return and([
          matches(os.objectSet, object),
          matchesFilter(os.where, object),
        ]);
      case "union":
        return or(os.objectSets.map((child) => matches(child, object)));
      case "intersect":
        return and(os.objectSets.map((child) => matches(child, object)));
      case "subtract":
        return and([
          matches(os.objectSets[0], object),
          not(
            or(os.objectSets.slice(1).map((child) => matches(child, object))),
          ),
        ]);
      default:
        return undefined;
    }
  }

  return {
    resultType,
    objectTypes,
    revalidateTypes,
    matches: (object) =>
      matches(
        objectSet,
        isInterfaceHolder(object) ? object[UnderlyingOsdkObject] : object,
      ),
  };
}

function and(values: readonly Membership[]): Membership {
  return values.includes(false)
    ? false
    : values.includes(undefined)
      ? undefined
      : true;
}

function or(values: readonly Membership[]): Membership {
  return values.includes(true)
    ? true
    : values.includes(undefined)
      ? undefined
      : false;
}

function not(value: Membership): Membership {
  return value === undefined ? undefined : !value;
}

function matchesFilter(
  where: SearchJsonQueryV2,
  object: ObjectHolder,
): Membership {
  switch (where.type) {
    case "and":
      return and(where.value.map((child) => matchesFilter(child, object)));
    case "or":
      return or(where.value.map((child) => matchesFilter(child, object)));
    case "not":
      return not(matchesFilter(where.value, object));
    case "eq":
    case "in":
    case "gt":
    case "gte":
    case "lt":
    case "lte":
    case "isNull":
      break;
    default:
      return undefined;
  }

  const field = getField(where, object);
  if (field === undefined || !(field in object)) return undefined;
  const value = object[field];
  const property = object[ObjectDefRef].properties[field];
  if (value === undefined || !property || property.multiplicity)
    return undefined;
  if (where.type === "isNull")
    return where.value ? value == null : value != null;
  if (value == null) return undefined;

  switch (property.type) {
    case "string":
      if (typeof value !== "string") return undefined;
      break;
    case "boolean":
      if (typeof value !== "boolean") return undefined;
      break;
    case "byte":
    case "short":
    case "integer":
    case "float":
    case "double":
      if (typeof value !== "number" || !Number.isFinite(value))
        return undefined;
      break;
    default:
      return undefined;
  }

  if (where.type === "in") {
    return where.value.length === 0
      ? undefined
      : or(where.value.map((expected) => equals(value, expected)));
  }
  if (where.type === "eq") return equals(value, where.value);
  if (
    typeof value !== "number" ||
    typeof where.value !== "number" ||
    !Number.isFinite(where.value)
  )
    return undefined;

  switch (where.type) {
    case "gt":
      return value > where.value;
    case "gte":
      return value >= where.value;
    case "lt":
      return value < where.value;
    case "lte":
      return value <= where.value;
  }
}

function equals(
  value: string | number | boolean,
  expected: unknown,
): Membership {
  if (
    typeof value !== typeof expected ||
    (typeof expected === "number" && !Number.isFinite(expected))
  )
    return undefined;
  return value === expected;
}

function getField(
  where: { field?: string; propertyIdentifier?: PropertyIdentifier },
  object: ObjectHolder,
): string | undefined {
  const identifier = where.propertyIdentifier;
  if (identifier === undefined) return where.field;
  if (where.field !== undefined) return undefined;
  switch (identifier.type) {
    case "property":
      return identifier.apiName;
    case "primaryKeyProperty":
      return object[ObjectDefRef].primaryKeyApiName;
    case "titleProperty":
      return object[ObjectDefRef].titleProperty;
    default:
      return undefined;
  }
}
