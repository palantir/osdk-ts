/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { FetchPageResult } from "../object/FetchPageResult.js";
import type { Result } from "../object/Result.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { TransformNullability } from "../shapes/ShapeTransforms.js";
import type { ObjectSet } from "./ObjectSet.js";

/**
 * Applies shape transformations to FetchPageResult data arrays.
 */
type TransformPageResultData<
  BASE extends ObjectOrInterfaceDefinition,
  MAKE_REQUIRED extends string,
  RESULT,
> = RESULT extends
  FetchPageResult<BASE, infer SELECT, infer R, infer S, infer T> ? RESULT & {
    data: Array<TransformNullability<Osdk.Instance<BASE>, MAKE_REQUIRED>>;
  }
  : RESULT;

/**
 * Applies shape transformations to Result-wrapped values.
 */
type TransformResultWrapper<
  BASE extends ObjectOrInterfaceDefinition,
  MAKE_REQUIRED extends string,
  RESULT,
> = RESULT extends Result<infer INNER>
  ? Result<TransformPageResultData<BASE, MAKE_REQUIRED, INNER>>
  : RESULT;

/**
 * Transforms a method's return type to apply shape transformations.
 * Handles both Promise-wrapped and non-Promise return types.
 */
type TransformMethodReturn<
  BASE extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<BASE>,
  MAKE_REQUIRED extends L,
  METHOD,
> = METHOD extends (...args: infer ARGS) => infer RET
  ? RET extends Promise<infer INNER>
    ? INNER extends Osdk.Instance<BASE> ? (...args: ARGS) => Promise<
        TransformNullability<
          Osdk.Instance<BASE>,
          MAKE_REQUIRED extends string ? MAKE_REQUIRED : never
        >
      >
    : INNER extends Result<Osdk.Instance<BASE>> ? (...args: ARGS) => Promise<
        Result<
          TransformNullability<
            Osdk.Instance<BASE>,
            MAKE_REQUIRED extends string ? MAKE_REQUIRED : never
          >
        >
      >
    : INNER extends FetchPageResult<BASE, any, any, any, any>
      ? (...args: ARGS) => Promise<
        TransformPageResultData<
          BASE,
          MAKE_REQUIRED extends string ? MAKE_REQUIRED : never,
          INNER
        >
      >
    : INNER extends Result<FetchPageResult<BASE, any, any, any, any>>
      ? (...args: ARGS) => Promise<
        TransformResultWrapper<
          BASE,
          MAKE_REQUIRED extends string ? MAKE_REQUIRED : never,
          INNER
        >
      >
    : METHOD
  : RET extends ObjectSet<BASE>
    ? (...args: ARGS) => ShapeObjectSet<BASE, L, MAKE_REQUIRED>
  : METHOD
  : METHOD;

/**
 * An ObjectSet wrapper that applies shape transformations to fetched data.
 *
 * This type extends the standard ObjectSet interface but:
 * 1. Returns transformed instances with nullability adjusted according to shape operations
 * 2. Maintains shape transformations through chaining methods
 * 3. Automatically applies transformations to all applicable methods via mapped types
 *
 * @template BASE - The base object type
 * @template L - The selected property keys
 * @template MAKE_REQUIRED - Property keys that have been made non-nullable
 *
 * @example
 * ```typescript
 * const SlimPlayer = defineShape<typeof Player>()
 *   .requiredOrThrow("name", "age")
 *   .asType(Player);
 *
 * const objectSet: ShapeObjectSet<...> = client(SlimPlayer);
 * const player = await objectSet.fetchOne("pk");
 * // player.name is string (not string | undefined)
 * ```
 */
export interface ShapeObjectSet<
  BASE extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<BASE>,
  MAKE_REQUIRED extends L,
> {
  /**
   * Fetches one object with the specified primary key.
   * Applies shape transformations to the result.
   *
   * @param primaryKey - The primary key of the object to fetch
   * @param options - Optional select and nullability options
   * @returns Transformed object instance with non-nullable properties
   * @throws Error if requiredOrThrow validation fails
   */
  fetchOne: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["fetchOne"]
  >;

  /**
   * Fetches one object with the specified primary key, with error handling.
   * Applies shape transformations to the result if successful.
   *
   * @param primaryKey - The primary key of the object to fetch
   * @param options - Optional select and nullability options
   * @returns Result wrapper with transformed object or error
   */
  fetchOneWithErrors: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["fetchOneWithErrors"]
  >;

  /**
   * Fetches a page of objects matching the query.
   * Applies shape transformations to all objects in the result.
   *
   * @param options - Optional filtering, ordering, and pagination options
   * @returns Page result with transformed object instances
   * @throws Error if requiredOrThrow validation fails for any object
   */
  fetchPage: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["fetchPage"]
  >;

  /**
   * Fetches a page of objects with error handling.
   * Applies shape transformations to all objects in the result if successful.
   *
   * @param options - Optional filtering, ordering, and pagination options
   * @returns Result wrapper with page of transformed objects or error
   */
  fetchPageWithErrors: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["fetchPageWithErrors"]
  >;

  /**
   * Filters the object set with a where clause.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param clause - The where clause to filter by
   * @returns New ShapeObjectSet with filter applied
   */
  where: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["where"]
  >;

  /**
   * Unions this object set with others.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param objectSets - Object sets to union with
   * @returns New ShapeObjectSet with union applied
   */
  union: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["union"]
  >;

  /**
   * Intersects this object set with others.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param objectSets - Object sets to intersect with
   * @returns New ShapeObjectSet with intersection applied
   */
  intersect: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["intersect"]
  >;

  /**
   * Subtracts other object sets from this one.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param objectSets - Object sets to subtract
   * @returns New ShapeObjectSet with subtraction applied
   */
  subtract: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["subtract"]
  >;

  /**
   * Aggregates data from the object set.
   */
  aggregate: ObjectSet<BASE>["aggregate"];

  /**
   * Asynchronously iterates over all objects in the set.
   * Applies shape transformations to each yielded object.
   */
  asyncIter: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["asyncIter"]
  >;

  /**
   * Subscribes to updates on the object set.
   */
  subscribe: ObjectSet<BASE>["subscribe"];

  /**
   * Finds nearest neighbors using vector similarity.
   */
  nearestNeighbors: TransformMethodReturn<
    BASE,
    L,
    MAKE_REQUIRED,
    ObjectSet<BASE>["nearestNeighbors"]
  >;

  /**
   * Internal object set metadata.
   */
  $objectSetInternals: ObjectSet<BASE>["$objectSetInternals"];
}
