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

import type { AggregateOpts } from "../aggregate/AggregateOpts.js";
import type { AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy } from "../aggregate/AggregateOptsThatErrors.js";
import type { AggregationsResults } from "../aggregate/AggregationsResults.js";
import type { WhereClause } from "../aggregate/WhereClause.js";
import type { DerivedProperty } from "../derivedProperties/DerivedProperty.js";
import type {
  AsyncIterArgs,
  Augments,
  FetchPageArgs,
  NullabilityAdherence,
  SelectArg,
} from "../object/FetchPageArgs.js";
import type { Result } from "../object/Result.js";
import type { InterfaceDefinition } from "../ontology/InterfaceDefinition.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectTypeDefinition,
} from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { PrimaryKeyType } from "../OsdkBase.js";
import type { ExtractOptions, Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type { BaseObjectSet } from "./BaseObjectSet.js";
import type {
  ObjectSetListener,
  ObjectSetListenerOptions,
} from "./ObjectSetListener.js";

type MergeObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  D extends ObjectSet<Q> | Record<string, SimplePropertyDef> = {},
> = D extends Record<string, SimplePropertyDef>
  ? ObjectOrInterfaceDefinition.WithDerivedProperties<Q, D>
  : Q;

type ExtractRdp<
  D extends ObjectSet<any, any> | Record<string, SimplePropertyDef>,
> = D extends Record<string, SimplePropertyDef> ? D : {};

export interface MinimalObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> extends
  BaseObjectSet<Q>,
  FetchPage<Q, RDPs>,
  AsyncIter<Q, RDPs>,
  Where<Q, RDPs>
{
}

// TODO MOVE THIS
interface FetchPage<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
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
    L extends PropertyKeys<Q, RDPs>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherence.Default,
  >(
    args?: FetchPageArgs<Q, L, R, A, S>,
  ) => Promise<
    PageResult<
      Osdk.Instance<
        Q,
        ExtractOptions<R, S>,
        PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L,
        { [K in Extract<keyof RDPs, L>]: RDPs[K] }
      >
    >
  >;

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
    L extends PropertyKeys<Q, RDPs>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherence.Default,
  >(
    args?: FetchPageArgs<Q, L, R, A, S>,
  ) => Promise<
    Result<
      PageResult<
        Osdk.Instance<
          Q,
          ExtractOptions<R, S>,
          PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L,
          { [K in Extract<keyof RDPs, L>]: RDPs[K] }
        >
      >
    >
  >;
}

// TODO MOVE THIS
interface Where<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
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
    clause: WhereClause<MergeObjectSet<Q, RDPs>>,
  ) => this;
}

interface AsyncIter<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * Returns an async iterator to load all objects of this type
   * @example
   * for await (const obj of myObjectSet.asyncIter()){
   * // Handle obj
   * }
   * @returns an async iterator to load all objects
   */
  readonly asyncIter: <
    L extends PropertyKeys<Q, RDPs>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherence.Default,
  >(
    args?: AsyncIterArgs<Q, L, R, A, S>,
  ) => AsyncIterableIterator<
    Osdk.Instance<
      Q,
      ExtractOptions<R, S>,
      PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L,
      { [K in Extract<keyof RDPs, L>]: RDPs[K] }
    >
  >;
}

interface InterfaceObjectSet<
  Q extends InterfaceDefinition,
> extends MinimalObjectSet<Q> {
}

interface WithProperties<
  Q extends ObjectOrInterfaceDefinition = any,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  readonly withProperties: <
    NEW extends Record<string, SimplePropertyDef>,
  >(
    clause: { [K in keyof NEW]: DerivedProperty.Selector<Q, NEW[K]> },
  ) => ObjectSet<
    Q,
    {
      [NN in keyof NEW | keyof RDPs]: NN extends keyof NEW ? NEW[NN]
        : NN extends keyof RDPs ? RDPs[NN]
        : never;
    }
  >;
}

export interface ObjectSet<
  Q extends ObjectOrInterfaceDefinition = any,
  // Generated code has what is basically ObjectSet<Q> set in here
  // but we never used it so I am repurposing it for RDP
  UNUSED_OR_RDP extends ObjectSet<Q, any> | Record<string, SimplePropertyDef> =
    ObjectSet<Q, any>,
> extends
  ObjectSetCleanedTypes<
    Q,
    ExtractRdp<UNUSED_OR_RDP>,
    MergeObjectSet<Q, UNUSED_OR_RDP>
  >
{
}

// Q is the merged type here! Not renaming to keep diff small. Rename in follow up
interface Aggregate<
  Q extends ObjectOrInterfaceDefinition,
> {
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
}

// Q is the merged type here! Not renaming to keep diff small. Rename in follow up
interface SetArithmetic<
  Q extends ObjectOrInterfaceDefinition,
> {
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
    ...objectSets: ReadonlyArray<CompileTimeMetadata<Q>["objectSet"]>
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
    ...objectSets: ReadonlyArray<CompileTimeMetadata<Q>["objectSet"]>
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
    ...objectSets: ReadonlyArray<CompileTimeMetadata<Q>["objectSet"]>
  ) => this;
}

// Q is the merged type here! Not renaming to keep diff small. Rename in follow up
interface PivotTo<
  Q extends ObjectOrInterfaceDefinition,
> {
  /**
   * Pivots the object set over to all its linked objects of the specified type
   * @param type - The linked object type you want to pivot to
   * @returns an object set of the specified linked type
   */
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => CompileTimeMetadata<LinkedType<Q, L>>["objectSet"]; // ObjectSet<LinkedType<Q, L>>;
}

interface FetchOne<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> {
  /**
   * Fetches one object with the specified primary key, without a result wrapper
   */
  readonly fetchOne: Q extends ObjectTypeDefinition ? <
      const L extends PropertyKeys<Q, RDPs>,
      const R extends boolean,
      const S extends false | "throw" = NullabilityAdherence.Default,
    >(
      primaryKey: PrimaryKeyType<Q>,
      options?: SelectArg<Q, L, R, S>,
    ) => Promise<
      Osdk.Instance<
        Q,
        ExtractOptions<R, S>,
        PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L,
        { [K in Extract<keyof RDPs, L>]: RDPs[K] }
      >
    >
    : never;

  /**
   * Fetches one object with the specified primary key, with a result wrapper
   */
  readonly fetchOneWithErrors: Q extends ObjectTypeDefinition ? <
      L extends PropertyKeys<Q, RDPs>,
      R extends boolean,
      S extends false | "throw" = NullabilityAdherence.Default,
    >(
      primaryKey: PrimaryKeyType<Q>,
      options?: SelectArg<Q, L, R, S>,
    ) => Promise<
      Result<
        Osdk.Instance<
          Q,
          ExtractOptions<R, S>,
          PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L,
          { [K in Extract<keyof RDPs, L>]: RDPs[K] }
        >
      >
    >
    : never;
}

// Q is the merged type here! Not renaming to keep diff small. Rename in follow up
interface Subscribe<
  Q extends ObjectOrInterfaceDefinition,
> {
  /**
   * Request updates when the objects in an object set are added, updated, or removed.
   * @param listener - The handlers to be executed during the lifecycle of the subscription.
   * @param opts - Options to modify what properties are returned on subscription updates.
   * @returns an object containing a function to unsubscribe.
   */
  readonly subscribe: <
    const P extends PropertyKeys<Q>,
  >(
    listener: ObjectSetListener<Q, P>,
    opts?: ObjectSetListenerOptions<Q, P>,
  ) => { unsubscribe: () => void };
}

interface ObjectSetCleanedTypes<
  Q extends ObjectOrInterfaceDefinition,
  D extends Record<string, SimplePropertyDef>,
  MERGED extends ObjectOrInterfaceDefinition,
> extends
  MinimalObjectSet<Q, D>,
  WithProperties<Q, D>,
  Aggregate<MERGED>,
  SetArithmetic<MERGED>,
  PivotTo<MERGED>,
  FetchOne<Q, D>,
  Subscribe<MERGED>
{
}
