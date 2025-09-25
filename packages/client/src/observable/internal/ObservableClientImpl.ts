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
  ActionValidationResponse,
  CompileTimeMetadata,
  InterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  WhereClause,
  WirePropertyTypes,
} from "@osdk/api";
import { Subscription } from "rxjs";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import type { SpecificLinkPayload } from "../LinkPayload.js";
import type { ListPayload } from "../ListPayload.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { ObjectSetPayload } from "../ObjectSetPayload.js";
import type {
  ObservableClient,
  ObserveListOptions,
  ObserveObjectArgs,
  ObserveObjectOptions,
  ObserveObjectsArgs,
  ObserveObjectSetArgs,
  Unsubscribable,
} from "../ObservableClient.js";
import type { Observer } from "../ObservableClient/common.js";
import type { ObserveLinks } from "../ObservableClient/ObserveLink.js";
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
    subFn: Observer<ObserveObjectArgs<T>>,
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

  public observeList: <T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
    subFn: Observer<ObserveObjectsArgs<T>>,
  ) => Unsubscribable = (options, subFn) => {
    return this.__experimentalStore.lists.observe(
      options,
      // cast to cross typed to untyped barrier
      subFn as unknown as Observer<ListPayload>,
    );
  };

  public observeLinks: <
    T extends ObjectTypeDefinition | InterfaceDefinition,
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
    // Convert to array if single object provided
    const objectsArray = Array.isArray(objects) ? objects : [objects];

    const parentSub = new Subscription();

    for (const obj of objectsArray) {
      const querySubscription = this.__experimentalStore.links
        .observe(
          {
            ...options,
            srcType: {
              type: "object",
              apiName: obj.$apiName,
            },
            linkName,
            pk: obj.$primaryKey,
          },
          // cast to cross typed to untyped barrier
          subFn as unknown as Observer<SpecificLinkPayload>,
        );

      parentSub.add(querySubscription);
    }

    return new UnsubscribableWrapper(parentSub);
  };

  public applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: ObservableClient.ApplyActionOptions,
  ) => Promise<unknown>;

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

  public canonicalizeWhereClause<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(where: WhereClause<T>): Canonical<WhereClause<T>> {
    return this.__experimentalStore.whereCanonicalizer
      .canonicalize(where) as Canonical<WhereClause<T>>;
  }
}
