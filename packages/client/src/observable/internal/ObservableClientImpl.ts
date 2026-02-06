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
  ActionDefinition,
  ActionEditResponse,
  ActionValidationResponse,
  AggregateOpts,
  CompileTimeMetadata,
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
  WirePropertyTypes,
} from "@osdk/api";
import { Subscription } from "rxjs";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { additionalContext } from "../../Client.js";
import {
  getWireObjectSet,
  isObjectSet,
} from "../../objectSet/createObjectSet.js";
import { extractObjectOrInterfaceType } from "../../util/extractObjectOrInterfaceType.js";
import type { FunctionPayload } from "../FunctionPayload.js";
import type { SpecificLinkPayload } from "../LinkPayload.js";
import type { ListPayload } from "../ListPayload.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { ObjectSetPayload } from "../ObjectSetPayload.js";
import type {
  ObservableClient,
  ObserveAggregationArgs,
  ObserveAggregationOptions,
  ObserveFunctionCallbackArgs,
  ObserveFunctionOptions,
  ObserveListOptions,
  ObserveObjectCallbackArgs,
  ObserveObjectOptions,
  ObserveObjectsCallbackArgs,
  ObserveObjectSetArgs,
  Unsubscribable,
} from "../ObservableClient.js";
import type { Observer } from "../ObservableClient/common.js";
import type { ObserveLinks } from "../ObservableClient/ObserveLink.js";
import type { AggregationPayloadBase } from "./aggregation/AggregationQuery.js";
import type { Canonical } from "./Canonical.js";
import type { ObserveObjectSetOptions } from "./objectset/ObjectSetQueryOptions.js";
import type { Store } from "./Store.js";
import { UnsubscribableWrapper } from "./UnsubscribableWrapper.js";

/**
 * Implementation of the public ObservableClient interface.
 * - Delegates all operations to the Store for consistency
 * - Serves as the entry point for reactive data management
 * - Ensures proper method binding and API exposure
 *
 * @internal
 */
export class ObservableClientImpl implements ObservableClient {
  __experimentalStore: Store;

  constructor(store: Store) {
    this.__experimentalStore = store;

    this.applyAction = store.applyAction.bind(store);
    this.validateAction = store.validateAction.bind(store);
  }

  public observeObject: <T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: Omit<ObserveObjectOptions<T>, "apiName" | "pk">,
    subFn: Observer<ObserveObjectCallbackArgs<T>>,
  ) => Unsubscribable = (apiName, pk, options, subFn) => {
    return this.__experimentalStore.objects.observe(
      {
        ...options,
        apiName,
        pk,
      },
      // cast to cross typed to untyped barrier
      subFn as unknown as Observer<ObjectPayload>,
    );
  };

  public observeList: <
    T extends ObjectTypeDefinition | InterfaceDefinition,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveListOptions<T, RDPs>,
    subFn: Observer<ObserveObjectsCallbackArgs<T, RDPs>>,
  ) => Unsubscribable = (options, subFn) => {
    return this.__experimentalStore.lists.observe(
      options,
      // cast to cross typed to untyped barrier
      subFn as unknown as Observer<ListPayload>,
    );
  };

  public observeAggregation: <
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptions<T, A, RDPs>,
    subFn: Observer<ObserveAggregationArgs<T, A>>,
  ) => Unsubscribable = <
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptions<T, A, RDPs>,
    subFn: Observer<ObserveAggregationArgs<T, A>>,
  ) => {
    return this.__experimentalStore.aggregations.observe(
      options,
      subFn as Observer<AggregationPayloadBase>,
    );
  };

  public observeFunction: <Q extends QueryDefinition<unknown>>(
    queryDef: Q,
    params: Record<string, unknown> | undefined,
    options: ObserveFunctionOptions,
    subFn: Observer<ObserveFunctionCallbackArgs<Q>>,
  ) => Unsubscribable = (queryDef, params, options, subFn) => {
    const dependsOn = options.dependsOn?.map(dep =>
      typeof dep === "string" ? dep : dep.apiName
    );

    // Partition dependsOnObjects into instances vs ObjectSets
    type ObjectDependency = { $apiName: string; $primaryKey: string | number };
    const instances: ObjectDependency[] = [];
    const objectSetWires: Array<
      ReturnType<typeof getWireObjectSet>
    > = [];

    for (const item of options.dependsOnObjects ?? []) {
      if (isObjectSet(item)) {
        objectSetWires.push(getWireObjectSet(item));
      } else {
        instances.push({
          $apiName: item.$objectType ?? item.$apiName,
          $primaryKey: item.$primaryKey,
        });
      }
    }

    // Start async extraction of ObjectSet types
    const objectSetTypesPromise = objectSetWires.length > 0
      ? Promise.all(
        objectSetWires.map(wire =>
          extractObjectOrInterfaceType(
            this.__experimentalStore.client[additionalContext],
            wire,
          )
        ),
      ).then(types =>
        types
          .filter((t): t is NonNullable<typeof t> => t != null)
          .map(t => t.apiName)
      )
      : undefined;

    return this.__experimentalStore.functions.observe(
      {
        ...options,
        queryDef,
        params,
        dependsOn,
        dependsOnObjects: instances,
        objectSetTypesPromise,
      },
      subFn as unknown as Observer<FunctionPayload>,
    );
  };

  public observeLinks: <
    T extends ObjectOrInterfaceDefinition,
    L extends keyof CompileTimeMetadata<T>["links"] & string,
  >(
    objects: Osdk.Instance<T> | Array<Osdk.Instance<T>>,
    linkName: L,
    options: ObserveLinks.Options<T, L>,
    subFn: Observer<
      ObserveLinks.CallbackArgs<
        CompileTimeMetadata<T>["links"][L]["targetType"]
      >
    >,
  ) => Unsubscribable = (objects, linkName, options, subFn) => {
    const objectsArray = Array.isArray(objects) ? objects : [objects];
    const observer = subFn as unknown as Observer<SpecificLinkPayload>;

    return objectsArray.length <= 1
      ? observeSingleLink(
        this.__experimentalStore,
        objectsArray,
        linkName,
        options,
        observer,
      )
      : observeMultiLinks(
        this.__experimentalStore,
        objectsArray,
        linkName,
        options,
        observer,
      );
  };

  public applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: ObservableClient.ApplyActionOptions,
  ) => Promise<ActionEditResponse>;

  public validateAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
  ) => Promise<ActionValidationResponse>;

  public observeObjectSet<
    T extends ObjectTypeDefinition,
    RDPs extends Record<
      string,
      WirePropertyTypes | undefined | Array<WirePropertyTypes>
    > = {},
  >(
    baseObjectSet: ObjectSet<T>,
    options: ObserveObjectSetOptions<T, RDPs>,
    subFn: Observer<ObserveObjectSetArgs<T, RDPs>>,
  ): Unsubscribable {
    return this.__experimentalStore.objectSets.observe(
      { baseObjectSet, ...options },
      // cast to cross typed to untyped barrier
      subFn as unknown as Observer<ObjectSetPayload>,
    );
  }

  public invalidateAll(): Promise<void> {
    return this.__experimentalStore.invalidateAll();
  }

  public invalidateObjects(
    objects:
      | Osdk.Instance<ObjectTypeDefinition>
      | ReadonlyArray<Osdk.Instance<ObjectTypeDefinition>>,
  ): Promise<void> {
    return this.__experimentalStore.invalidateObjects(objects);
  }

  public invalidateObjectType<T extends ObjectTypeDefinition>(
    type: T | T["apiName"],
  ): Promise<void> {
    return this.__experimentalStore.invalidateObjectType(type, undefined);
  }

  public invalidateFunction(
    apiName: string | QueryDefinition<unknown>,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this.__experimentalStore.invalidateFunction(apiName, params);
  }

  public invalidateFunctionsByObject(
    apiName: string,
    primaryKey: string | number,
  ): Promise<void> {
    return this.__experimentalStore.invalidateFunctionsByObject(
      apiName,
      primaryKey,
    );
  }

  public canonicalizeWhereClause<
    T extends ObjectTypeDefinition | InterfaceDefinition,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(where: WhereClause<T, RDPs>): Canonical<WhereClause<T, RDPs>> {
    return this.__experimentalStore.whereCanonicalizer
      .canonicalize(where) as Canonical<WhereClause<T, RDPs>>;
  }
}

function observeSingleLink(
  store: Store,
  objectsArray: ReadonlyArray<Osdk.Instance<ObjectOrInterfaceDefinition>>,
  linkName: string,
  options: ObserveLinks.Options<ObjectOrInterfaceDefinition, string>,
  observer: Observer<SpecificLinkPayload>,
): Unsubscribable {
  if (objectsArray.length === 0) {
    observer.next({
      resolvedList: [],
      isOptimistic: false,
      lastUpdated: 0,
      fetchMore: () => Promise.resolve(),
      hasMore: false,
      status: "loaded",
      totalCount: "0",
    });
    return new UnsubscribableWrapper(new Subscription());
  }

  const parentSub = new Subscription();

  for (const obj of objectsArray) {
    parentSub.add(
      store.links.observe(
        {
          ...options,
          srcType: {
            type: "object",
            apiName: obj.$objectType ?? obj.$apiName,
          },
          linkName,
          pk: obj.$primaryKey,
        },
        observer,
      ),
    );
  }

  return new UnsubscribableWrapper(parentSub);
}

function observeMultiLinks(
  store: Store,
  objectsArray: ReadonlyArray<Osdk.Instance<ObjectOrInterfaceDefinition>>,
  linkName: string,
  options: ObserveLinks.Options<ObjectOrInterfaceDefinition, string>,
  observer: Observer<SpecificLinkPayload>,
): Unsubscribable {
  const parentSub = new Subscription();
  const totalExpected = objectsArray.length;
  const perObjectResults = new Map<string, SpecificLinkPayload>();

  function mergeAndEmit() {
    const seen = new Map<string, SpecificLinkPayload["resolvedList"][number]>();
    const fetchMores: Array<() => Promise<void>> = [];
    let latestUpdated = 0;
    let hasMore = false;
    let isOptimistic = false;

    for (const payload of perObjectResults.values()) {
      for (const obj of payload.resolvedList) {
        seen.set(`${obj.$objectType}:${obj.$primaryKey}`, obj);
      }
      if (payload.lastUpdated > latestUpdated) {
        latestUpdated = payload.lastUpdated;
      }
      if (payload.isOptimistic) {
        isOptimistic = true;
      }
      if (payload.hasMore) {
        hasMore = true;
        fetchMores.push(payload.fetchMore);
      }
    }

    const payloads = [...perObjectResults.values()];
    const loading = perObjectResults.size < totalExpected
      || payloads.some(p => p.status === "init" || p.status === "loading");

    observer.next({
      resolvedList: Array.from(seen.values()),
      isOptimistic,
      lastUpdated: latestUpdated,
      fetchMore: hasMore
        ? () => Promise.all(fetchMores.map(fn => fn())).then(() => {})
        : () => Promise.resolve(),
      hasMore,
      status: loading
        ? "loading"
        : payloads.some(p => p.status === "error")
        ? "error"
        : "loaded",
      ...(!hasMore ? { totalCount: String(seen.size) } : {}),
    });
  }

  for (const obj of objectsArray) {
    const objKey = `${obj.$objectType ?? obj.$apiName}:${obj.$primaryKey}`;

    parentSub.add(
      store.links.observe(
        {
          ...options,
          srcType: {
            type: "object",
            apiName: obj.$objectType ?? obj.$apiName,
          },
          linkName,
          pk: obj.$primaryKey,
        },
        {
          next: (payload: SpecificLinkPayload) => {
            perObjectResults.set(objKey, payload);
            mergeAndEmit();
          },
          error: (err: unknown) => observer.error(err),
          complete: () => {},
        },
      ),
    );
  }

  return new UnsubscribableWrapper(parentSub);
}
