/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";

export type NullabilityAdherence = false | "throw" | "drop";
export namespace NullabilityAdherence {
  export type Default = "throw";
}

export namespace ObjectSetArgs {
  export interface Select<
    OBJECT_KEYS extends string = never,
    RDP_KEYS extends string = never,
  > {
    $select?: readonly (OBJECT_KEYS | RDP_KEYS)[];
    $includeRid?: boolean;
  }

  export type OrderByOptions<
    L extends string = never,
  > =
    | {
      [K in L]?: "asc" | "desc";
    }
    | "relevance";

  export interface OrderBy<
    Z extends OrderByOptions<L>,
    L extends string = never,
  > {
    $orderBy?: Z;
  }

  export interface AsyncIter<
    Q extends ObjectOrInterfaceDefinition,
    K extends PropertyKeys<Q> = never,
    T extends boolean = false,
    RDP_KEYS extends string = never,
    Z extends OrderByOptions<K> = {},
  > extends Select<K, RDP_KEYS>, OrderBy<Z, K> {
    $__UNSTABLE_useOldInterfaceApis?: boolean;
    $includeAllBaseObjectProperties?: PropertyKeys<Q> extends K ? T : never;
  }

  export interface FetchPage<
    Q extends ObjectOrInterfaceDefinition,
    K extends PropertyKeys<Q> = never,
    T extends boolean = false,
    RDP_KEYS extends string = never,
    Z extends OrderByOptions<K> = {},
  > extends AsyncIter<Q, K, T, RDP_KEYS, Z> {
    $nextPageToken?: string;
    $pageSize?: number;
  }
}

export interface SelectArg<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q> = PropertyKeys<Q>,
  R extends boolean = false,
  S extends NullabilityAdherence = NullabilityAdherence.Default,
> {
  $select?: readonly L[];
  $includeRid?: R;
}

export interface OrderByArg<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q> = PropertyKeys<Q>,
  Z extends ObjectSetArgs.OrderByOptions<L> = {},
> extends ObjectSetArgs.OrderBy<Z, L> {
}

export type SelectArgToKeys<
  Q extends ObjectOrInterfaceDefinition,
  A extends SelectArg<Q, any, any>,
> = A extends SelectArg<Q, never> ? PropertyKeys<Q>
  : A["$select"] extends readonly string[] ? A["$select"][number]
  : PropertyKeys<Q>;

export interface FetchPageArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  R extends boolean = false,
  A extends Augments = never,
  S extends NullabilityAdherence = NullabilityAdherence.Default,
  T extends boolean = false,
  RDP_KEYS extends string = never,
  Z extends ObjectSetArgs.OrderByOptions<K> = {},
> extends AsyncIterArgs<Q, K, R, A, S, T, RDP_KEYS, Z> {
  $nextPageToken?: string;
  $pageSize?: number;
}

export interface AsyncIterArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  R extends boolean = false,
  A extends Augments = never,
  S extends NullabilityAdherence = NullabilityAdherence.Default,
  T extends boolean = false,
  RDP_KEYS extends string = never,
  Z extends ObjectSetArgs.OrderByOptions<K> = {},
> extends SelectArg<Q, K, R, S>, OrderByArg<Q, PropertyKeys<Q>, Z> {
  $__UNSTABLE_useOldInterfaceApis?: boolean;
  $includeAllBaseObjectProperties?: PropertyKeys<Q> extends K ? T : never;
}

export type Augment<
  X extends ObjectOrInterfaceDefinition,
  T extends string,
> = { [K in CompileTimeMetadata<X>["apiName"]]: T[] };

export type Augments = Record<string, string[]>;
