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
  LinkHopDescriptor,
  LinkTraversalDescriptor,
  ObjectOrInterfaceDefinition,
  ObjectRef,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
  WirePropertyTypes,
} from "@osdk/api";
import { hashTraversal, objectRefKey, ObjectRefMap } from "@osdk/api";
import { Subscription } from "rxjs";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { additionalContext } from "../../Client.js";
import type { InterfaceHolder } from "../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
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
  CacheSnapshot,
  CanonicalizedOptions,
  CanonicalizeOptionsInput,
  ObservableClient,
  ObserveAggregationArgs,
  ObserveAggregationOptions,
  ObserveAggregationOptionsWithObjectSet,
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
import type {
  MediaMetadataObserveOptions,
  MediaMetadataPayload,
} from "../ObservableClient/MediaObservableTypes.js";
import type { MediaPropertyLocation } from "../ObservableClient/MediaTypes.js";
import type { ObserveLinks } from "../ObservableClient/ObserveLink.js";
import type { ObserveLinkClosure } from "../ObservableClient/ObserveLinkClosure.js";
import type { ObservePath } from "../ObservableClient/ObservePath.js";
import type { AggregationPayloadBase } from "./aggregation/AggregationQuery.js";
import type { Canonical } from "./Canonical.js";
import type { ExpandedChild } from "./links/ClosureExpansion.js";
import type { ClosurePayload } from "./links/ClosureQuery.js";
import { ClosureQuery } from "./links/ClosureQuery.js";
import type { PathPayload } from "./links/PathQuery.js";
import { PathQuery } from "./links/PathQuery.js";
import { createSharedTraversalRegistry } from "./links/sharedTraversalRegistry.js";
import type { ObjectCacheKey } from "./object/ObjectCacheKey.js";
import type { ObserveObjectSetOptions } from "./objectset/ObjectSetQueryOptions.js";
import type { Rdp } from "./RdpCanonicalizer.js";
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

  #unionCache = new WeakMap<Canonical<string[]>, ReadonlyArray<any>>();
  #intersectCache = new WeakMap<Canonical<string[]>, ReadonlyArray<any>>();
  #subtractCache = new WeakMap<Canonical<string[]>, ReadonlyArray<any>>();

  // In-flight de-dup: identical descriptor + root share one underlying BFS.
  #linkClosureRegistry = createSharedTraversalRegistry<
    ObserveLinkClosure.CallbackArgs<
      ObjectTypeDefinition | InterfaceDefinition
    >
  >();
  #pathRegistry = createSharedTraversalRegistry<
    ObservePath.CallbackArgs<ObjectTypeDefinition | InterfaceDefinition>
  >();

  constructor(store: Store) {
    this.__experimentalStore = store;

    this.applyAction = store.applyAction.bind(store);
    this.validateAction = store.validateAction.bind(store);
  }

  public observeObject: <T extends ObjectOrInterfaceDefinition>(
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
    T extends ObjectOrInterfaceDefinition,
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

  public observeAggregation<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptions<T, A, RDPs>,
    subFn: Observer<ObserveAggregationArgs<T, A>>,
  ): Unsubscribable;
  public observeAggregation<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptionsWithObjectSet<T, A, RDPs>,
    subFn: Observer<ObserveAggregationArgs<T, A>>,
  ): Promise<Unsubscribable>;
  public observeAggregation<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options:
      | ObserveAggregationOptions<T, A, RDPs>
      | ObserveAggregationOptionsWithObjectSet<T, A, RDPs>,
    subFn: Observer<ObserveAggregationArgs<T, A>>,
  ): Unsubscribable | Promise<Unsubscribable> {
    if (options.objectSet) {
      return this.__experimentalStore.aggregations.observeAsync(
        options as ObserveAggregationOptionsWithObjectSet<T, A, RDPs>,
        subFn as Observer<AggregationPayloadBase>,
      );
    }
    return this.__experimentalStore.aggregations.observe(
      options as ObserveAggregationOptions<T, A, RDPs>,
      subFn as Observer<AggregationPayloadBase>,
    );
  }

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

  public observeLinkClosure<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    options: ObserveLinkClosure.Options,
    subFn: Observer<ObserveLinkClosure.CallbackArgs<T>>,
  ): Unsubscribable {
    const store = this.__experimentalStore;
    // cross typed to untyped barrier
    const observer = subFn as unknown as Observer<
      ObserveLinkClosure.CallbackArgs<
        ObjectTypeDefinition | InterfaceDefinition
      >
    >;

    const descriptor: LinkTraversalDescriptor = {
      kind: "recursive",
      hops: [options.hop],
      recursive: { maxDepth: options.maxDepth, maxNodes: options.maxNodes },
    };
    const key = `${hashTraversal(descriptor)}|${objectRefKey(options.root)}`;

    const subscription = new Subscription();
    const unsubscribe = this.#linkClosureRegistry.subscribe(
      key,
      observer,
      (emit) => {
        // Retain every discovered intermediate object in the store's refcount
        // machinery while this closure is observed, so the shared object cache
        // keeps them alive. They are released on teardown (last unsubscribe),
        // letting the store gc evict any nodes no other observer holds.
        const retained = new Set<ObjectCacheKey>();
        // Nodes this closure has registered for source-side invalidation, keyed
        // by objectRefKey so we register each once and can unregister on
        // teardown. An edge change sourced at any of these routes to the
        // closure's `expand(ref)` via the store's closureInvalidationRegistry.
        const registeredNodes = new Map<string, ObjectRef>();
        let tornDown = false;
        const query = new ClosureQuery<ObjectHolder | InterfaceHolder>({
          root: options.root,
          hop: options.hop,
          options: { maxDepth: options.maxDepth, maxNodes: options.maxNodes },
          resolveLink: (concreteType, interfaceLinkApiName) => {
            // Plain object links already name their concrete link on the hop,
            // and ontologyMetadata.resolveLink only handles interface links (it
            // throws for object links), so short-circuit here.
            if (!options.hop.sourceIsInterface) {
              return Promise.resolve({
                concreteLinkApiName: options.hop.linkApiName,
                targetType: options.hop.targetTypeApiName,
                multiplicity: options.hop.multiplicity,
              });
            }
            return store.client.ontologyMetadata.resolveLink(
              concreteType,
              interfaceLinkApiName,
            );
          },
          fetchLinks: (concreteType, concreteLinkApiName, sources) =>
            fetchLinksForSources(
              store,
              concreteType,
              concreteLinkApiName,
              sources,
            ),
          isOptimistic: (ref) => refIsOptimistic(store, ref),
          emit: (payload) => {
            const args = toClosureCallbackArgs(payload);
            if (!tornDown) {
              const keys = store.batch(
                {},
                (batch) => store.objects.storeOsdkInstances(args.data, batch),
              ).retVal;
              for (const k of keys) {
                if (!retained.has(k)) {
                  retained.add(k);
                  store.cacheKeys.retain(k);
                }
              }
              for (const ref of payload.data) {
                const nodeKey = objectRefKey(ref);
                if (!registeredNodes.has(nodeKey)) {
                  registeredNodes.set(nodeKey, ref);
                  store.closureInvalidationRegistry.register(ref, query);
                }
              }
            }
            emit(args);
          },
        });
        void query.run();
        return () => {
          tornDown = true;
          for (const k of retained) {
            store.cacheKeys.release(k);
          }
          retained.clear();
          for (const ref of registeredNodes.values()) {
            store.closureInvalidationRegistry.unregister(ref, query);
          }
          registeredNodes.clear();
        };
      },
    );
    subscription.add(unsubscribe);

    return new UnsubscribableWrapper(subscription);
  }

  public observePath<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    options: ObservePath.Options,
    subFn: Observer<ObservePath.CallbackArgs<T>>,
  ): Unsubscribable {
    const store = this.__experimentalStore;
    // cross typed to untyped barrier
    const observer = subFn as unknown as Observer<
      ObservePath.CallbackArgs<ObjectTypeDefinition | InterfaceDefinition>
    >;

    const descriptor: LinkTraversalDescriptor = {
      kind: "path",
      hops: options.hops,
    };
    const key = `${hashTraversal(descriptor)}|${objectRefKey(options.root)}`;

    const subscription = new Subscription();
    const unsubscribe = this.#pathRegistry.subscribe(
      key,
      observer,
      (emit) => {
        const query = new PathQuery<ObjectHolder | InterfaceHolder>({
          root: options.root,
          hops: options.hops,
          resolveLink: (concreteType, interfaceLinkApiName, hop) => {
            // Plain object links already name their concrete link on the hop,
            // and ontologyMetadata.resolveLink only handles interface links (it
            // throws for object links), so short-circuit here.
            if (!hop.sourceIsInterface) {
              return Promise.resolve({
                concreteLinkApiName: hop.linkApiName,
                targetType: hop.targetTypeApiName,
                multiplicity: hop.multiplicity,
              });
            }
            return store.client.ontologyMetadata.resolveLink(
              concreteType,
              interfaceLinkApiName,
            );
          },
          fetchLinks: (concreteType, concreteLinkApiName, sources, hop) =>
            fetchLinksForSources(
              store,
              concreteType,
              concreteLinkApiName,
              sources,
              hop,
            ),
          isOptimistic: (ref) => refIsOptimistic(store, ref),
          emit: (payload) => {
            emit(toPathCallbackArgs(payload));
          },
        });
        void query.run();
        return () => {};
      },
    );
    subscription.add(unsubscribe);

    return new UnsubscribableWrapper(subscription);
  }

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
    T extends ObjectOrInterfaceDefinition,
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
      | Osdk.Instance<ObjectOrInterfaceDefinition>
      | ReadonlyArray<Osdk.Instance<ObjectOrInterfaceDefinition>>,
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
    T extends ObjectOrInterfaceDefinition,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(where: WhereClause<T, RDPs>): Canonical<WhereClause<T, RDPs>> {
    return this.__experimentalStore.whereCanonicalizer
      .canonicalize(where) as Canonical<WhereClause<T, RDPs>>;
  }

  public canonicalizeOptions<OS, T extends CanonicalizeOptionsInput<OS>>(
    options: T,
  ): CanonicalizedOptions<T> {
    const store = this.__experimentalStore;
    const result = { ...options };

    result.where = store.whereCanonicalizer.canonicalize(result.where);
    result.withProperties = store.rdpCanonicalizer.canonicalize(
      result.withProperties as Rdp | undefined,
    );
    result.orderBy = store.orderByCanonicalizer.canonicalize(result.orderBy);
    result.aggregate = store.genericCanonicalizer.canonicalize(
      result.aggregate,
    );
    result.intersectWith = store.genericCanonicalizer.canonicalize(
      result.intersectWith,
    );
    result.$select = store.selectCanonicalizer.canonicalize(result.$select);

    result.union = this.#canonObjectSetArray(
      result.union,
      store.objectSetArrayCanonicalizer.canonicalizeUnion.bind(
        store.objectSetArrayCanonicalizer,
      ),
      this.#unionCache,
    );
    result.intersect = this.#canonObjectSetArray(
      result.intersect,
      store.objectSetArrayCanonicalizer.canonicalizeIntersect.bind(
        store.objectSetArrayCanonicalizer,
      ),
      this.#intersectCache,
    );
    result.subtract = this.#canonObjectSetArray(
      result.subtract,
      store.objectSetArrayCanonicalizer.canonicalizeSubtract.bind(
        store.objectSetArrayCanonicalizer,
      ),
      this.#subtractCache,
    );

    return result as CanonicalizedOptions<T>;
  }

  #canonObjectSetArray<T>(
    arr: ReadonlyArray<T> | undefined,
    canonicalize: (wireStrings: string[]) => Canonical<string[]>,
    cache: WeakMap<Canonical<string[]>, ReadonlyArray<T>>,
  ): ReadonlyArray<T> | undefined {
    if (!arr || arr.length === 0) {
      return arr;
    }
    const wireStrings = arr.map(os =>
      JSON.stringify(getWireObjectSet(os as ObjectSet<any, any>))
    );
    const canonKey = canonicalize(wireStrings);
    let cached = cache.get(canonKey);
    if (!cached) {
      cached = arr;
      cache.set(canonKey, cached);
    }
    return cached;
  }

  public observeMediaMetadata(
    coords: MediaPropertyLocation,
    options: MediaMetadataObserveOptions,
    observer: Observer<MediaMetadataPayload>,
  ): Unsubscribable {
    return this.__experimentalStore.media.observeMediaMetadata(
      coords,
      options,
      observer,
    );
  }

  public async getCacheSnapshot(): Promise<CacheSnapshot> {
    return this.__experimentalStore.getCacheSnapshot();
  }
}

type LinkedHolder = NonNullable<SpecificLinkPayload["resolvedList"]>[number];

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
      linkedObjectsBySource: new ObjectRefMap<ReadonlyArray<LinkedHolder>>(),
      linkedObjectsBySourcePrimaryKey: new Map(),
      isOptimistic: false,
      lastUpdated: 0,
      fetchMore: async () => {},
      hasMore: false,
      status: "loaded",
      totalCount: "0",
    });
    return new UnsubscribableWrapper(new Subscription());
  }

  const parentSub = new Subscription();

  for (const obj of objectsArray) {
    const pk = obj.$primaryKey;
    const sourceType: "object" | "interface" = obj.$apiName === obj.$objectType
      ? "object"
      : "interface";

    parentSub.add(
      store.links.observe(
        {
          ...options,
          srcType: {
            type: sourceType,
            apiName: obj.$apiName,
          },
          sourceUnderlyingObjectType: obj.$objectType,
          linkName,
          pk,
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
  const perObjectData = new Map<
    string,
    { payload: SpecificLinkPayload; sourceRef: ObjectRef }
  >();
  // Every source's ref is excluded from results (self-referential exclusion),
  // computed up front so exclusion holds even before a source has reported.
  const sourceRefKeys = new Set<string>();
  for (const obj of objectsArray) {
    sourceRefKeys.add(
      objectRefKey({
        $objectType: obj.$objectType ?? obj.$apiName,
        $primaryKey: obj.$primaryKey,
      }),
    );
  }
  let errored = false;

  function mergeAndEmit() {
    if (errored) {
      return;
    }

    const seen = new Map<string, LinkedHolder>();
    const linkedObjectsBySource = new ObjectRefMap<
      ReadonlyArray<LinkedHolder>
    >();
    const fetchMores: Array<() => Promise<void>> = [];
    let latestUpdated = 0;
    let hasMore = false;
    let isOptimistic = false;

    for (const { payload, sourceRef } of perObjectData.values()) {
      const group: LinkedHolder[] = [];

      for (const obj of payload.resolvedList ?? []) {
        const refKey = objectRefKey({
          $objectType: obj.$objectType,
          $primaryKey: obj.$primaryKey,
        });
        // dedupe-by-ref with source refs excluded
        if (sourceRefKeys.has(refKey)) {
          continue;
        }
        group.push(obj);
        seen.set(refKey, obj);
      }

      linkedObjectsBySource.set(sourceRef, group);

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

    // Derived from linkedObjectsBySource; collapses sources that share a pk.
    const linkedObjectsBySourcePrimaryKey = new Map<
      string | number,
      ReadonlyArray<LinkedHolder>
    >();
    linkedObjectsBySource.forEach((group, ref) => {
      linkedObjectsBySourcePrimaryKey.set(ref.$primaryKey, group);
    });

    const payloads = [...perObjectData.values()].map(d => d.payload);
    const loading = perObjectData.size < totalExpected
      || payloads.some(p => p.status === "init" || p.status === "loading");

    observer.next({
      resolvedList: Array.from(seen.values()),
      linkedObjectsBySource,
      linkedObjectsBySourcePrimaryKey,
      isOptimistic,
      lastUpdated: latestUpdated,
      fetchMore: hasMore
        ? () => Promise.all(fetchMores.map(fn => fn())).then(() => {})
        : async () => {},
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
    const pk = obj.$primaryKey;
    const sourceRef: ObjectRef = {
      $objectType: obj.$objectType ?? obj.$apiName,
      $primaryKey: pk,
    };
    const objKey = objectRefKey(sourceRef);

    const sourceType: "object" | "interface" = obj.$apiName === obj.$objectType
      ? "object"
      : "interface";

    parentSub.add(
      store.links.observe(
        {
          ...options,
          srcType: {
            type: sourceType,
            apiName: obj.$apiName,
          },
          sourceUnderlyingObjectType: obj.$objectType,
          linkName,
          pk,
        },
        {
          next: (payload: SpecificLinkPayload) => {
            if (errored) {
              return;
            }
            perObjectData.set(objKey, { payload, sourceRef });
            mergeAndEmit();
          },
          error: (err: unknown) => {
            if (errored) {
              return;
            }
            errored = true;
            parentSub.unsubscribe();
            observer.error(err);
          },
          // store link queries are long-lived and do not complete
          complete: () => {},
        },
      ),
    );
  }

  return new UnsubscribableWrapper(parentSub);
}

/**
 * Fetches one BFS level for a set of same-typed sources by issuing a pivot
 * query per source. Pivoting from a multi-source set loses the source->children
 * grouping, so we fetch per source and key the result by each source's ref.
 */
async function fetchLinksForSources(
  store: Store,
  concreteType: string,
  concreteLinkApiName: string,
  sources: ReadonlyArray<ObjectRef>,
  hop?: LinkHopDescriptor,
): Promise<
  ObjectRefMap<ReadonlyArray<ExpandedChild<ObjectHolder | InterfaceHolder>>>
> {
  const client = store.client;
  const ontologyProvider = client[additionalContext].ontologyProvider;
  const objectMetadata = await ontologyProvider.getObjectDefinition(
    concreteType,
  );
  const pkApiName = objectMetadata.primaryKeyApiName;

  const result = new ObjectRefMap<
    ReadonlyArray<ExpandedChild<ObjectHolder | InterfaceHolder>>
  >();

  // Per-hop where/orderBy/limit are applied as fetchPage params so the
  // traversal honors the filters chained onto each hop via `.where(...)` etc.
  const fetchPageArgs: {
    $includeRid: true;
    $pageSize?: number;
    $orderBy?: Record<string, "asc" | "desc">;
    $where?: Record<string, unknown>;
  } = { $includeRid: true };
  if (hop?.limit != null) {
    fetchPageArgs.$pageSize = hop.limit;
  }
  if (hop?.orderBy != null && hop.orderBy.length > 0) {
    const orderBy: Record<string, "asc" | "desc"> = {};
    for (const entry of hop.orderBy) {
      orderBy[entry.property] = entry.direction;
    }
    fetchPageArgs.$orderBy = orderBy;
  }
  if (hop?.where != null) {
    fetchPageArgs.$where = hop.where as Record<string, unknown>;
  }

  await Promise.all(
    sources.map(async (source) => {
      const sourceQuery = client({
        type: "object",
        apiName: concreteType,
      } as ObjectTypeDefinition).where({
        [pkApiName]: source.$primaryKey,
      } as WhereClause<any>);

      const response = await sourceQuery
        .pivotTo(concreteLinkApiName)
        .fetchPage(fetchPageArgs);

      const children: Array<ExpandedChild<ObjectHolder | InterfaceHolder>> =
        response.data.map((obj) => ({
          ref: {
            $objectType: obj.$objectType,
            $primaryKey: obj.$primaryKey,
          },
          // cross typed to untyped barrier: holders back every Osdk.Instance
          instance: obj as unknown as ObjectHolder | InterfaceHolder,
        }));

      result.set(source, children);
    }),
  );

  return result;
}

/**
 * Reads the store's per-object optimism flag for a traversal node. Mirrors the
 * `("object", apiName, pk)` key the closure/path emit path already builds via
 * {@link Store.objects}.storeOsdkInstances; reads it without creating or
 * retaining the key. Returns false when no subject exists yet (fresh data).
 */
function refIsOptimistic(store: Store, ref: ObjectRef): boolean {
  const key = store.cacheKeys.peek<ObjectCacheKey>(
    "object",
    ref.$objectType,
    ref.$primaryKey,
  );
  if (key == null) {
    return false;
  }
  return store.subjects.peek(key)?.getValue().isOptimistic ?? false;
}

/** Projects a {@link PathPayload} to the public path callback args. */
function toPathCallbackArgs(
  payload: PathPayload<ObjectHolder | InterfaceHolder>,
): ObservePath.CallbackArgs<ObjectTypeDefinition | InterfaceDefinition> {
  const data: Array<
    Osdk.Instance<
      ObjectTypeDefinition | InterfaceDefinition,
      "$allBaseProperties"
    >
  > = [];
  for (const ref of payload.data) {
    const instance = payload.instances.get(ref);
    if (instance != null) {
      // cross typed to untyped barrier: holders back every Osdk.Instance
      data.push(
        instance as unknown as Osdk.Instance<
          ObjectTypeDefinition | InterfaceDefinition,
          "$allBaseProperties"
        >,
      );
    }
  }

  return {
    data,
    isOptimistic: payload.isOptimistic,
    status: payload.status,
    error: payload.error,
    lastUpdated: payload.lastUpdated,
  };
}

/** Projects a {@link ClosurePayload} to the public closure callback args. */
function toClosureCallbackArgs(
  payload: ClosurePayload<ObjectHolder | InterfaceHolder>,
): ObserveLinkClosure.CallbackArgs<ObjectTypeDefinition | InterfaceDefinition> {
  const data: Array<
    Osdk.Instance<
      ObjectTypeDefinition | InterfaceDefinition,
      "$allBaseProperties"
    >
  > = [];
  for (const ref of payload.data) {
    const instance = payload.instances.get(ref);
    if (instance != null) {
      // cross typed to untyped barrier: holders back every Osdk.Instance
      data.push(
        instance as unknown as Osdk.Instance<
          ObjectTypeDefinition | InterfaceDefinition,
          "$allBaseProperties"
        >,
      );
    }
  }

  return {
    data,
    adjacency: payload.adjacency,
    byDepth: payload.byDepth,
    frontier: payload.frontier,
    depthReached: payload.depthReached,
    isExpanding: payload.isExpanding,
    truncated: payload.truncated,
    expand: payload.expand,
    isOptimistic: payload.isOptimistic,
    status: payload.status,
    error: payload.error,
    lastUpdated: payload.lastUpdated,
  };
}
