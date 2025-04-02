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
  ObjectSetArgs,
  SelectArg,
} from "../object/FetchPageArgs.js";
import type { Result } from "../object/Result.js";
import type {
  DerivedObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectTypeDefinition,
} from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { PrimaryKeyType } from "../OsdkBase.js";
import type {
  ExtractAllPropertiesOption,
  ExtractOptions,
  ExtractRidOption,
  Osdk,
} from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type { BaseObjectSet } from "./BaseObjectSet.js";
import type { ObjectSetSubscription } from "./ObjectSetListener.js";

type MergeObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  D extends Record<string, SimplePropertyDef> = {},
> = DerivedObjectOrInterfaceDefinition.WithDerivedProperties<Q, D>;

type ExtractRdp<
  D extends
    | BaseObjectSet<any>
    | Record<string, SimplePropertyDef>,
> = [D] extends [never] ? {}
  : D extends BaseObjectSet<any> ? {}
  : D extends Record<string, SimplePropertyDef> ? D
  : {};

type MaybeSimplifyPropertyKeys<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
> = PropertyKeys<Q> extends L ? PropertyKeys<Q> : L;

type SubSelectKeysHelper<
  Q extends ObjectOrInterfaceDefinition,
  L extends string,
> = [L] extends [never] ? PropertyKeys<Q>
  : PropertyKeys<Q> extends L ? PropertyKeys<Q>
  : L & PropertyKeys<Q>;

type SubSelectKeys<
  Q extends ObjectOrInterfaceDefinition,
  X extends SelectArg<Q, PropertyKeys<Q>, any, any> = never,
> = SubSelectKeysHelper<Q, Extract$Select<X>>;

type NOOP<T> = T extends (...args: any[]) => any ? T
  : T extends abstract new(...args: any[]) => any ? T
  : { [K in keyof T]: T[K] };

type SubSelectRDPsHelper<
  X extends ValidFetchPageArgs<any, any> | ValidAsyncIterArgs<any, any>,
  DEFAULT extends string,
> = [X] extends [never] ? DEFAULT
  : (X["$select"] & string[])[number] & DEFAULT;

type SubSelectRDPs<
  RDPs extends Record<string, SimplePropertyDef>,
  X extends ValidFetchPageArgs<any, RDPs> | ValidAsyncIterArgs<any, RDPs>,
> = [RDPs] extends [never] ? never
  : NOOP<{ [K in SubSelectRDPsHelper<X, string & keyof RDPs>]: RDPs[K] }>;

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

export type ExtractOptions2<
  X extends FetchPageArgs<any, any, any, any, any, any, any>,
> = [X] extends [never] ? never
  :
    | ExtractRidOption<X["$includeRid"] extends true ? true : false>
    | ExtractAllPropertiesOption<
      X["$includeAllBaseObjectProperties"] extends true ? true : false
    >;

type Extract$Select<X extends FetchPageArgs<any, any>> = NonNullable<
  X["$select"]
>[number];

interface FetchPage<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  readonly fetchPage: FetchPageSignature<Q, RDPs>;
  readonly fetchPageWithErrors: FetchPageWithErrorsSignature<Q, RDPs>;
}

type ValidFetchPageArgs<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> =
  | ObjectSetArgs.FetchPage<
    Q,
    PropertyKeys<Q>,
    false,
    string & keyof RDPs
  >
  | ObjectSetArgs.FetchPage<
    Q,
    never,
    true,
    string & keyof RDPs
  >;

type ValidAsyncIterArgs<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> =
  | ObjectSetArgs.AsyncIter<
    Q,
    PropertyKeys<Q>,
    false,
    string & keyof RDPs
  >
  | AsyncIterArgs<
    Q,
    never,
    any,
    any,
    any,
    true,
    string & keyof RDPs
  >;

interface FetchPageSignature<
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
  <const X extends ValidFetchPageArgs<Q, RDPs> = never>(
    args?: X,
  ): Promise<
    PageResult<
      Osdk.Instance<
        Q,
        ExtractOptions2<X>,
        SubSelectKeys<Q, X>,
        SubSelectRDPs<RDPs, X>
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
     const myObjsResult = myObjs.data;

   * @returns a page of objects
   */
  <
    L extends PropertyKeys<Q>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherence.Default,
    T extends boolean = false,
  >(
    args?: FetchPageArgs<Q, L, R, A, S, T>,
  ): Promise<
    PageResult<
      Osdk.Instance<
        Q,
        ExtractOptions<R, S, T>,
        MaybeSimplifyPropertyKeys<Q, L>
      >
    >
  >;
}

interface FetchPageWithErrorsSignature<
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

     if(isOk(myObjs)){
     const myObjsResult = myObjs.value.data;
    }
   * @returns a page of objects, wrapped in a result wrapper
   */
  <X extends ValidFetchPageArgs<Q, RDPs> = never>(
    args?: X,
  ): Promise<
    Result<
      PageResult<
        Osdk.Instance<
          Q,
          ExtractOptions2<X>,
          SubSelectKeys<Q, X>,
          SubSelectRDPs<RDPs, X>
        >
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
  <
    L extends PropertyKeys<Q>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherence.Default,
    T extends boolean = false,
  >(
    args?: FetchPageArgs<Q, L, R, A, S, T>,
  ): Promise<
    Result<
      PageResult<
        Osdk.Instance<
          Q,
          ExtractOptions<R, S, T>,
          MaybeSimplifyPropertyKeys<Q, L>
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

interface AsyncIterSignature<
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
  <X extends ValidAsyncIterArgs<Q, RDPs> = never>(
    args?: X,
  ): AsyncIterableIterator<
    Osdk.Instance<
      Q,
      ExtractOptions2<X>,
      SubSelectKeys<Q, X>,
      SubSelectRDPs<RDPs, X>
    >
  >;

  /**
   * Returns an async iterator to load all objects of this type
   * @example
   * for await (const obj of myObjectSet.asyncIter()){
   * // Handle obj
   * }
   * @returns an async iterator to load all objects
   */
  <
    L extends PropertyKeys<Q>,
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherence.Default,
    T extends boolean = false,
  >(
    args?: AsyncIterArgs<Q, L, R, A, S, T>,
  ): AsyncIterableIterator<
    Osdk.Instance<
      Q,
      ExtractOptions<R, S, T>,
      MaybeSimplifyPropertyKeys<Q, L>
    >
  >;
}

interface AsyncIter<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  asyncIter: AsyncIterSignature<Q, RDPs>;
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
  UNUSED_OR_RDP extends
    | BaseObjectSet<Q>
    | Record<string, SimplePropertyDef> = never,
> extends
  ObjectSetCleanedTypes<
    Q,
    ExtractRdp<UNUSED_OR_RDP>,
    MergeObjectSet<Q, ExtractRdp<UNUSED_OR_RDP>>
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
  ) => ObjectSet<LinkedType<Q, L>>;
}

interface FetchOneSignature<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> {
  /**
   * Fetches one object with the specified primary key, without a result wrapper
   */
  <
    X extends ObjectSetArgs.Select<PropertyKeys<Q>, string & keyof RDPs> =
      never,
  >(
    primaryKey: PrimaryKeyType<Q>,
    options?: X,
  ): Promise<
    Osdk.Instance<
      Q,
      ExtractOptions2<X>,
      SubSelectKeys<Q, X>,
      SubSelectRDPs<RDPs, X>
    >
  >;

  /**
   * Fetches one object with the specified primary key, without a result wrapper
   */
  <
    const L extends PropertyKeys<Q>,
    const R extends boolean,
    const S extends false | "throw" = NullabilityAdherence.Default,
  >(
    primaryKey: PrimaryKeyType<Q>,
    options?: SelectArg<Q, L, R, S>,
  ): Promise<
    Osdk.Instance<
      Q,
      ExtractOptions<R, S>,
      MaybeSimplifyPropertyKeys<Q, L>
    >
  >;
}

interface FetchOneWithErrorsSignature<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> {
  /**
   * Fetches one object with the specified primary key, with a result wrapper
   */
  <X extends ObjectSetArgs.Select<PropertyKeys<Q>, string & keyof RDPs>>(
    primaryKey: PrimaryKeyType<Q>,
    options?: X,
  ): Promise<
    Result<
      Osdk.Instance<
        Q,
        ExtractOptions2<X>,
        SubSelectKeys<Q, X>,
        SubSelectRDPs<RDPs, X>
      >
    >
  >;

  /**
   * Fetches one object with the specified primary key, with a result wrapper
   */
  <
    const L extends PropertyKeys<Q>,
    const R extends boolean,
    const S extends false | "throw" = NullabilityAdherence.Default,
  >(
    primaryKey: PrimaryKeyType<Q>,
    options?: SelectArg<Q, L, R, S>,
  ): Promise<
    Result<
      Osdk.Instance<
        Q,
        ExtractOptions<R, S>,
        MaybeSimplifyPropertyKeys<Q, L>
      >
    >
  >;
}

interface FetchOne<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> {
  fetchOne: Q extends ObjectTypeDefinition ? FetchOneSignature<Q, RDPs> : never;
  fetchOneWithErrors: Q extends ObjectTypeDefinition
    ? FetchOneWithErrorsSignature<Q, RDPs>
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
    listener: ObjectSetSubscription.Listener<Q, P>,
    opts?: ObjectSetSubscription.Options<Q, P>,
  ) => { unsubscribe: () => void };
}

interface ObjectSetCleanedTypes<
  Q extends ObjectOrInterfaceDefinition,
  D extends Record<string, SimplePropertyDef>,
  MERGED extends ObjectOrInterfaceDefinition & Q,
> extends
  MinimalObjectSet<Q, D>,
  WithProperties<Q, D>,
  Aggregate<MERGED>,
  SetArithmetic<MERGED>,
  PivotTo<Q>,
  FetchOne<Q, D>,
  Subscribe<MERGED>
{
}
