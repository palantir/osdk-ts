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
  CompileTimeMetadata,
  InterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
  WhereClause,
} from "@osdk/api";
import type { Unsubscribable } from "../Unsubscribable.js";
import type {
  CommonObserveOptions,
  InvalidationMode,
  ObserveOptions,
  Observer,
  OrderBy,
  Status,
} from "./common.js";

export namespace ObserveLink {
  export interface Options<
    Q extends ObjectTypeDefinition | InterfaceDefinition,
  > extends CommonObserveOptions, ObserveOptions {
    type: Pick<Q, "apiName" | "type">;
    where?: WhereClause<Q>;
    pageSize?: number;
    orderBy?: OrderBy<Q>;
    invalidationMode?: InvalidationMode;
    expectedLength?: number;
  }

  export interface CallbackArgs<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  > {
    resolvedList: Osdk.Instance<T>[];
    isOptimistic: boolean;
    lastUpdated: number;
    fetchMore: () => Promise<void>;
    hasMore: boolean;
    status: Status;
  }
}

export interface ObserveLinks {
  observeLinks<
    T extends ObjectTypeDefinition | InterfaceDefinition,
    L extends keyof CompileTimeMetadata<T>["links"] & string,
  >(
    objects: Osdk.Instance<T> | ReadonlyArray<Osdk.Instance<T>>,
    linkName: L,
    options: ObserveLink.Options<
      CompileTimeMetadata<T>["links"][L]["targetType"]
    >,
    subFn: Observer<
      ObserveLink.CallbackArgs<CompileTimeMetadata<T>["links"][L]["targetType"]>
    >,
  ): Unsubscribable;
}
