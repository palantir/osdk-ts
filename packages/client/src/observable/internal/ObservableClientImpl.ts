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
  ObjectTypeDefinition,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import type { ListPayload } from "../ListPayload.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type {
  ObservableClient,
  ObserveListOptions,
  ObserveObjectOptions,
  Unsubscribable,
} from "../ObservableClient.js";
import type { SubFn } from "../types.js";
import type { Canonical } from "./Canonical.js";
import type { Store } from "./Store.js";

/**
 * @internal
 */
export class ObservableClientImpl implements ObservableClient {
  #store: Store;

  constructor(store: Store) {
    this.#store = store;

    this.observeObject = store.observeObject.bind(store);
    this.observeList = store.observeList.bind(store);
    this.applyAction = store.applyAction.bind(store);
    this.canonicalizeWhereClause = store.canonicalizeWhereClause.bind(store);
  }

  public observeObject: <T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveObjectOptions<T>,
    subFn: SubFn<ObjectPayload>,
  ) => Unsubscribable;

  public observeList: <T extends ObjectTypeDefinition>(
    options: ObserveListOptions<T>,
    subFn: SubFn<ListPayload>,
  ) => Unsubscribable;

  public applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: ObservableClient.ApplyActionOptions,
  ) => Promise<unknown>;

  public canonicalizeWhereClause: <T extends ObjectTypeDefinition>(
    where: WhereClause<T>,
  ) => Canonical<WhereClause<T>>;
}
