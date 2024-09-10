/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { AggregateOpts } from "../aggregate/AggregateOpts.js";
import type { AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy } from "../aggregate/AggregateOptsThatErrors.js";
import type { AggregationsResults } from "../aggregate/AggregationsResults.js";
import type { WhereClause } from "../aggregate/WhereClause.js";
import type { PropertyValueClientToWire } from "../mapping/PropertyValueMapping.js";
import type {
  Augments,
  FetchPageArgs,
  NullabilityAdherence,
  NullabilityAdherenceDefault,
  SelectArg,
} from "../object/FetchPageArgs.js";
import type {
  FetchPageResult,
  SingleOsdkResult,
} from "../object/FetchPageResult.js";
import type { Result } from "../object/Result.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type { BaseObjectSet } from "./BaseObjectSet.js";

export interface MinimalObjectSet<Q extends ObjectOrInterfaceDefinition>
  extends BaseObjectSet<Q>
{
  /**
   * Gets a page of objects of this type, with a result wrapper
   * @param args - Args to specify next page token and page size, if applicable
   * @example
   *  const myObjs = await objectSet.fetchPage({
      $pageSize: 10,
      $nextPageToken: "nextPage"
    });
     const myObjsResult = myObjs.data;

   * @returns a page of objects
   */
  readonly fetchPage: <
    L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherenceDefault,
  >(
    args?: FetchPageArgs<Q, L, R, A, S>,
  ) => Promise<FetchPageResult<Q, L, R, S>>;

  /**
   * Gets a page of objects of this type, with a result wrapper
   * @param args - Args to specify next page token and page size, if applicable
   * @example
   *  const myObjs = await objectSet.fetchPage({
      $pageSize: 10,
      $nextPageToken: "nextPage"
    });

     if(isOk(myObjs)){
     const myObjsResult = myObjs.value.data;
    }
   * @returns a page of objects, wrapped in a result wrapper
   */
  readonly fetchPageWithErrors: <
    L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherenceDefault,
  >(
    args?: FetchPageArgs<Q, L, R, A, S>,
  ) => Promise<Result<FetchPageResult<Q, L, R, S>>>;

  /**
   * Allows you to filter an object set with a given clause
   * @param clause - Takes a filter clause
   * @example
   * await client(Office).where({
      meetingRooms: { $contains: "Grand Central" },
      meetingRoomCapacities: { $contains: 30 },
  });
   * @returns an objectSet
   */
  readonly where: (
    clause: WhereClause<Q>,
  ) => this;

  /**
   * Returns an async iterator to load all objects of this type
   * @example
   * for await (const obj of myObjectSet.asyncIter()){
   * // Handle obj
   * }
   * @returns an async iterator to load all objects
   */
  readonly asyncIter: () => AsyncIterableIterator<Osdk<Q>>;
}

export interface InterfaceObjectSet<Q extends InterfaceDefinition<any, any>>
  extends MinimalObjectSet<Q>
{
}

export interface ObjectSet<
  Q extends ObjectOrInterfaceDefinition = any,
  Z extends ObjectSet<Q, Z> = ObjectSet<Q, any>,
> extends MinimalObjectSet<Q> {
  /**
   * Aggregate on a field in an object type
   * @param req - an aggregation request where you can select fields and choose how to aggregate, e.g., max, min, avg, and also choose
   * whether or not you order your results. You can also specify a groupBy field to group your aggregations
   * @example
   * const testAggregateCountWithGroups = await client(BoundariesUsState)
    .aggregate({
      $select: {
        $count: "unordered",
        "latitude:max": "unordered",
        "latitude:min": "unordered",
        "latitude:avg": "unordered",
      },
      $groupBy: {
        usState: "exact",
        longitude: {
          $fixedWidth: 10,
        },
      },
    });

   * @returns aggregation results, sorted in the groups based on the groupBy clause (if applicable)
   */
  readonly aggregate: <AO extends AggregateOpts<Q>>(
    req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Q, AO>,
  ) => Promise<AggregationsResults<Q, AO>>;

  /**
   * Unions object sets together
   * @param objectSets - objectSets you want to union with
   * @example
   * const unionObjectSet = complexFilteredEmployeeObjectSet.union(
    simpleFilteredEmployeeObjectSet,
  );
   * @returns the unioned object set
   */
  readonly union: (
    ...objectSets: ReadonlyArray<Z>
  ) => this;

  /**
   * Computes the intersection of object sets
   * @param objectSets - objectSets you want to intersect with
   * @example
   * const intersectedObjectSet = complexFilteredEmployeeObjectSet.intersect(
    simpleFilteredEmployeeObjectSet,
  );
   * @returns the intersected object set
   */
  readonly intersect: (
    ...objectSets: ReadonlyArray<Z>
  ) => this;

  /**
   * Computes the subtraction of object sets
   * @param objectSets - objectSets you want to subtract from
   * @example
   * const subtractObjectSet = complexFilteredEmployeeObjectSet.subtract(
    simpleFilteredEmployeeObjectSet,
  );
   * @returns the subtract object set
   */
  readonly subtract: (
    ...objectSets: ReadonlyArray<Z>
  ) => this;

  /**
   * Pivots the object set over to all its linked objects of the specified type
   * @param type - The linked object type you want to pivot to
   * @returns an object set of the specified linked type
   */
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => LinkedType<Q, L>["objectSet"]; // ObjectSet<LinkedType<Q, L>>;

  /**
   * Fetches one object with the specified primary key, without a result wrapper
   */
  readonly fetchOne: Q extends ObjectTypeDefinition<any> ? <
      const L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
      const R extends boolean,
      const S extends false | "throw" = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Q["primaryKeyType"]],
      options?: SelectArg<Q, L, R, S>,
    ) => Promise<SingleOsdkResult<Q, L, R, S>>
    : never;

  /**
   * Fetches one object with the specified primary key, with a result wrapper
   */
  readonly fetchOneWithErrors: Q extends ObjectTypeDefinition<any> ? <
      L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
      R extends boolean,
      S extends false | "throw" = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Q["primaryKeyType"]],
      options?: SelectArg<Q, L, R, S>,
    ) => Promise<Result<SingleOsdkResult<Q, L, R, S>>>
    : never;
}
