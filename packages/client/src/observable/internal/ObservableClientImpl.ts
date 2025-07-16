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
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import type {
  ObservableClient,
  ObserveListOptions,
  ObserveObjectCallbackArgs,
  ObserveObjectOptions,
  ObserveObjectsCallbackArgs,
  Unsubscribable,
} from "../ObservableClient.js";
import type { Observer } from "../ObservableClient/common.js";
import type { ObserveLink } from "../ObservableClient/ObserveLink.js";
import type { Canonical } from "./Canonical.js";
import type { Store } from "./Store.js";

/**
 * @internal
 */
export class ObservableClientImpl implements ObservableClient {
  __experimentalStore: Store;

  constructor(store: Store) {
    this.__experimentalStore = store;

    this.observeObject = store.observeObject.bind(
      store,
    ) as typeof this.observeObject;
    this.observeList = store.observeList.bind(store) as typeof this.observeList;
    this.applyAction = store.applyAction.bind(store);
    this.validateAction = store.validateAction.bind(store);
    this.observeLinks = store.observeLinks.bind(
      store,
    ) as typeof this.observeLinks;
    this.canonicalizeWhereClause = store.canonicalizeWhereClause.bind(
      store,
    ) as typeof this.canonicalizeWhereClause;
  }

  public observeObject: <T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveObjectOptions<T>,
    subFn: Observer<ObserveObjectCallbackArgs<T>>,
  ) => Unsubscribable;

  public observeList: <T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
    subFn: Observer<ObserveObjectsCallbackArgs<T>>,
  ) => Unsubscribable;

  public observeLinks: <
    T extends ObjectTypeDefinition | InterfaceDefinition,
    L extends keyof CompileTimeMetadata<T>["links"] & string,
  >(
    objects: Osdk.Instance<T> | Array<Osdk.Instance<T>>,
    linkName: L,
    options: ObserveLink.Options<
      CompileTimeMetadata<T>["links"][L]["targetType"]
    >,
    subFn: Observer<
      ObserveLink.CallbackArgs<CompileTimeMetadata<T>["links"][L]["targetType"]>
    >,
  ) => Unsubscribable;

  public applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: ObservableClient.ApplyActionOptions,
  ) => Promise<unknown>;

  public validateAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
  ) => Promise<ActionValidationResponse>;

  public canonicalizeWhereClause: <
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    where: WhereClause<T>,
  ) => Canonical<WhereClause<T>>;
}
