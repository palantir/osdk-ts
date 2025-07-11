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
  InterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { createFetchHeaderMutator } from "@osdk/shared.net.fetch";
import type { ActionSignatureFromDef } from "../actions/applyAction.js";
import { additionalContext, type Client } from "../Client.js";
import { createClientFromContext } from "../createClient.js";
import { OBSERVABLE_USER_AGENT } from "../util/UserAgent.js";
import type { Canonical } from "./internal/Canonical.js";
import { ObservableClientImpl } from "./internal/ObservableClientImpl.js";
import { Store } from "./internal/Store.js";
import type { OptimisticBuilder } from "./OptimisticBuilder.js";

export type Status = "init" | "loading" | "loaded" | "error";

export interface Observer<T> {
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}

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

export interface ObserveObjectOptions<
  T extends ObjectTypeDefinition | InterfaceDefinition,
> extends ObserveOptions {
  select?: PropertyKeys<T>[];
}

export type OrderBy<Q extends ObjectTypeDefinition | InterfaceDefinition> = {
  [K in PropertyKeys<Q>]?: "asc" | "desc" | undefined;
};

export interface ObserveListOptions<
  Q extends ObjectTypeDefinition | InterfaceDefinition,
> extends CommonObserveOptions, ObserveOptions {
  type: Pick<Q, "apiName" | "type">;
  where?: WhereClause<Q>;
  pageSize?: number;
  orderBy?: OrderBy<Q>;
  invalidationMode?: "in-place" | "wait" | "reset";
  expectedLength?: number;
  streamUpdates?: boolean;
}

export interface ObserveObjectArgs<T extends ObjectTypeDefinition> {
  object: Osdk.Instance<T> | undefined;
  isOptimistic: boolean;
  status: Status;
  lastUpdated: number;
}

export interface ObserveObjectsArgs<
  T extends ObjectTypeDefinition | InterfaceDefinition,
> {
  resolvedList: Array<Osdk.Instance<T>>;
  isOptimistic: boolean;
  lastUpdated: number;
  fetchMore: () => Promise<unknown>;
  hasMore: boolean;
  status: Status;
}

export interface ObservableClient {
  observeObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveOptions,
    subFn: Observer<ObserveObjectArgs<T>>,
  ): Unsubscribable;

  observeList<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
    subFn: Observer<ObserveObjectsArgs<T>>,
  ): Unsubscribable;

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args:
      | Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]
      | Array<Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]>,
    opts?: ObservableClient.ApplyActionOptions,
  ) => Promise<unknown>;

  validateAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
  ) => Promise<ActionValidationResponse>;

  canonicalizeWhereClause: <
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    where: WhereClause<T>,
  ) => Canonical<WhereClause<T>>;
}

export function createObservableClient(client: Client): ObservableClient {
  // First we need a modified client that adds an extra header so we know its
  // an observable client
  const tweakedClient = createClientFromContext({
    ...client[additionalContext],

    fetch: createFetchHeaderMutator(
      client[additionalContext].fetch,
      (headers) => {
        headers.set(
          "Fetch-User-Agent",
          [
            headers.get("Fetch-User-Agent"),
            OBSERVABLE_USER_AGENT,
          ].filter(x => x && x?.length > 0).join(" "),
        );
        return headers;
      },
    ),
  });

  // Then we use that client instead. Because the `client` does not hold
  // any real state, this whole thing works.
  return new ObservableClientImpl(new Store(tweakedClient));
}

export interface Unsubscribable {
  unsubscribe: () => void;
}
