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
  BaseObjectSet,
  ObjectSet,
  ObjectTypeDefinition,
  WirePropertyTypes,
} from "@osdk/api";
import { getWireObjectSet } from "../objectSet/createObjectSet.js";
import type { ObserveObjectSetOptions } from "./internal/objectset/ObjectSetQueryOptions.js";
import { OrderByCanonicalizer } from "./internal/OrderByCanonicalizer.js";
import { WhereClauseCanonicalizer } from "./internal/WhereClauseCanonicalizer.js";

const whereCanonicalizer = new WhereClauseCanonicalizer();
const orderByCanonicalizer = new OrderByCanonicalizer();

/**
 * Computes a stable cache key for an ObjectSet with options.
 *
 * Note: dedupeInterval is excluded as it doesn't affect the data, only the refresh rate.
 *
 * @param objectSet - The base ObjectSet
 * @param options - Optional observation options (where, orderBy, etc.)
 * @returns A stable string key representing the ObjectSet and options
 */
export function computeObjectSetCacheKey<
  T extends ObjectTypeDefinition,
  BaseRDPs extends
    | Record<string, WirePropertyTypes | undefined | Array<WirePropertyTypes>>
    | BaseObjectSet<T> = never,
  RDPs extends Record<
    string,
    WirePropertyTypes | undefined | Array<WirePropertyTypes>
  > = {},
>(
  objectSet: ObjectSet<T, BaseRDPs>,
  options?: ObserveObjectSetOptions<T, RDPs>,
): string {
  const keyParts: Array<unknown> = [
    "objectSet",
    getWireObjectSet(objectSet as unknown as ObjectSet<any>),
  ];

  if (!options) {
    return JSON.stringify(keyParts);
  }

  if (options.where) {
    keyParts.push("where", whereCanonicalizer.canonicalize(options.where));
  }

  if (options.withProperties) {
    const propKeys = Object.keys(options.withProperties).sort();
    keyParts.push("props", propKeys);
  }

  if (options.union && options.union.length > 0) {
    keyParts.push(
      "union",
      options.union.map((os: ObjectSet<T>) =>
        getWireObjectSet(os as unknown as ObjectSet<any>)
      ),
    );
  }

  if (options.intersect && options.intersect.length > 0) {
    keyParts.push(
      "intersect",
      options.intersect.map((os: ObjectSet<T>) =>
        getWireObjectSet(os as unknown as ObjectSet<any>)
      ),
    );
  }

  if (options.subtract && options.subtract.length > 0) {
    keyParts.push(
      "subtract",
      options.subtract.map((os: ObjectSet<T>) =>
        getWireObjectSet(os as unknown as ObjectSet<any>)
      ),
    );
  }

  if (options.pivotTo) {
    keyParts.push("pivotTo", options.pivotTo);
  }

  if (options.orderBy) {
    keyParts.push(
      "orderBy",
      orderByCanonicalizer.canonicalize(options.orderBy),
    );
  }

  if (options.pageSize) {
    keyParts.push("pageSize", options.pageSize);
  }

  return JSON.stringify(keyParts);
}
