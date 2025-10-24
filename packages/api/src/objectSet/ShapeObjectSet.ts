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

import type { WhereClause } from "../aggregate/WhereClause.js";
import type {
  FetchPageArgs,
  NullabilityAdherence,
  SelectArg,
} from "../object/FetchPageArgs.js";
import type { FetchPageResult } from "../object/FetchPageResult.js";
import type { Result } from "../object/Result.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { PrimaryKeyType } from "../OsdkBase.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { TransformNullability } from "../shapes/ShapeTransforms.js";
import type { ObjectSet } from "./ObjectSet.js";

/**
 * An ObjectSet wrapper that applies shape transformations to fetched data.
 *
 * This type extends the standard ObjectSet interface but:
 * 1. Returns transformed instances with nullability adjusted according to shape operations
 * 2. Maintains shape transformations
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
> extends
  Omit<
    ObjectSet<BASE>,
    | "fetchOne"
    | "fetchPage"
    | "fetchOneWithErrors"
    | "fetchPageWithErrors"
    | "where"
    | "pivotTo"
    | "union"
    | "intersect"
    | "subtract"
    | "withProperties"
  >
{
  /**
   * Fetches one object with the specified primary key.
   * Applies shape transformations to the result.
   *
   * @param primaryKey - The primary key of the object to fetch
   * @param options - Optional select and nullability options
   * @returns Transformed object instance with non-nullable properties
   * @throws Error if requiredOrThrow validation fails
   */
  fetchOne: BASE extends ObjectTypeDefinition ? <
      const SELECT extends PropertyKeys<BASE>,
      const R extends boolean = false,
      const S extends false | "throw" = NullabilityAdherence.Default,
    >(
      primaryKey: PrimaryKeyType<BASE>,
      options?: SelectArg<BASE, SELECT, R, S>,
    ) => Promise<TransformNullability<Osdk.Instance<BASE>, MAKE_REQUIRED>>
    : never;

  /**
   * Fetches one object with the specified primary key, with error handling.
   * Applies shape transformations to the result if successful.
   *
   * @param primaryKey - The primary key of the object to fetch
   * @param options - Optional select and nullability options
   * @returns Result wrapper with transformed object or error
   */
  fetchOneWithErrors: BASE extends ObjectTypeDefinition ? <
      const SELECT extends PropertyKeys<BASE>,
      const R extends boolean = false,
      const S extends false | "throw" = NullabilityAdherence.Default,
    >(
      primaryKey: PrimaryKeyType<BASE>,
      options?: SelectArg<BASE, SELECT, R, S>,
    ) => Promise<
      Result<TransformNullability<Osdk.Instance<BASE>, MAKE_REQUIRED>>
    >
    : never;

  /**
   * Fetches a page of objects matching the query.
   * Applies shape transformations to all objects in the result.
   *
   * @param options - Optional filtering, ordering, and pagination options
   * @returns Page result with transformed object instances
   * @throws Error if requiredOrThrow validation fails for any object
   */
  fetchPage<
    const SELECT extends PropertyKeys<BASE> = L,
    const R extends boolean = false,
    const S extends false | "throw" = NullabilityAdherence.Default,
  >(
    options?: FetchPageArgs<BASE, SELECT, R, never, S>,
  ): Promise<
    FetchPageResult<BASE, SELECT, R, S, false> & {
      data: TransformNullability<Osdk.Instance<BASE>, MAKE_REQUIRED>[];
    }
  >;

  /**
   * Fetches a page of objects with error handling.
   * Applies shape transformations to all objects in the result if successful.
   *
   * @param options - Optional filtering, ordering, and pagination options
   * @returns Result wrapper with page of transformed objects or error
   */
  fetchPageWithErrors<
    const SELECT extends PropertyKeys<BASE> = L,
    const R extends boolean = false,
    const S extends false | "throw" = NullabilityAdherence.Default,
  >(
    options?: FetchPageArgs<BASE, SELECT, R, never, S>,
  ): Promise<
    Result<
      FetchPageResult<BASE, SELECT, R, S, false> & {
        data: TransformNullability<Osdk.Instance<BASE>, MAKE_REQUIRED>[];
      }
    >
  >;

  /**
   * Filters the object set with a where clause.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param clause - The where clause to filter by
   * @returns New ShapeObjectSet with filter applied
   */
  where(clause: WhereClause<BASE>): ShapeObjectSet<BASE, L, MAKE_REQUIRED>;

  /**
   * Unions this object set with others.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param objectSets - Object sets to union with
   * @returns New ShapeObjectSet with union applied
   */
  union(
    ...objectSets: ReadonlyArray<ObjectSet<BASE>>
  ): ShapeObjectSet<BASE, L, MAKE_REQUIRED>;

  /**
   * Intersects this object set with others.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param objectSets - Object sets to intersect with
   * @returns New ShapeObjectSet with intersection applied
   */
  intersect(
    ...objectSets: ReadonlyArray<ObjectSet<BASE>>
  ): ShapeObjectSet<BASE, L, MAKE_REQUIRED>;

  /**
   * Subtracts other object sets from this one.
   * Returns a new ShapeObjectSet that maintains transformations.
   *
   * @param objectSets - Object sets to subtract
   * @returns New ShapeObjectSet with subtraction applied
   */
  subtract(
    ...objectSets: ReadonlyArray<ObjectSet<BASE>>
  ): ShapeObjectSet<BASE, L, MAKE_REQUIRED>;
}
