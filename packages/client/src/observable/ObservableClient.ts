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
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import type { ActionSignatureFromDef } from "../actions/applyAction.js";
import type { Client } from "../Client.js";
import type { Canonical } from "./internal/Canonical.js";
import { ObservableClientImpl } from "./internal/ObservableClientImpl.js";
import { Store } from "./internal/Store.js";
import type { ListPayload } from "./ListPayload.js";
import type { ObjectPayload } from "./ObjectPayload.js";
import type { OptimisticBuilder } from "./OptimisticBuilder.js";
import type { SubFn } from "./types.js";

export type Status = "init" | "loading" | "loaded" | "error";

export namespace ObservableClient {
  export interface ApplyActionOptions {
    optimisticUpdate?: (ctx: OptimisticBuilder) => void;
  }
}

export interface CommonObserveOptions {
  dedupeInterval?: number;
}

export interface ObserveOptions {
  mode?: "offline" | "force";
}

export interface ObserveObjectOptions<T extends ObjectTypeDefinition>
  extends ObserveOptions
{
  select?: PropertyKeys<T>[];
}

export type OrderBy<Q extends ObjectTypeDefinition> = {
  [K in PropertyKeys<Q>]?: "asc" | "desc" | undefined;
};

export interface ObserveListOptions<Q extends ObjectTypeDefinition>
  extends CommonObserveOptions, ObserveOptions
{
  objectType: Q["apiName"] | Q;
  where?: WhereClause<Q>;
  pageSize?: number;
  orderBy?: OrderBy<Q>;
  invalidationMode?: "in-place" | "wait" | "reset";
  expectedLength?: number;
  streamUpdates?: boolean;
}

export interface ObservableClient {
  observeObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveOptions,
    subFn: SubFn<ObjectPayload>,
  ): Unsubscribable;

  observeList<T extends ObjectTypeDefinition>(
    options: ObserveListOptions<T>,
    subFn: SubFn<ListPayload>,
  ): Unsubscribable;

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: ObservableClient.ApplyActionOptions,
  ) => Promise<unknown>;

  canonicalizeWhereClause: <T extends ObjectTypeDefinition>(
    where: WhereClause<T>,
  ) => Canonical<WhereClause<T>>;
}

export function createObservableClient(client: Client): ObservableClient {
  return new ObservableClientImpl(new Store(client));
}

export interface Unsubscribable {
  unsubscribe: () => void;
}
