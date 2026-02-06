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

  export type OrderByOptions<L extends string> =
    | {
      [K in L]?: "asc" | "desc";
    }
    | "relevance";

  export interface OrderBy<
    ORDER_BY_OPTIONS extends OrderByOptions<L>,
    L extends string = never,
  > {
    $orderBy?: ORDER_BY_OPTIONS;
  }

  export interface AsyncIter<
    Q extends ObjectOrInterfaceDefinition,
    K extends PropertyKeys<Q> = never,
    T extends boolean = false,
    RDP_KEYS extends string = never,
    ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<K> = never,
  > extends Select<K, RDP_KEYS>, OrderBy<ORDER_BY_OPTIONS, K> {
    $__UNSTABLE_useOldInterfaceApis?: boolean;
    $includeAllBaseObjectProperties?: PropertyKeys<Q> extends K ? T : never;
  }

  export interface FetchPage<
    Q extends ObjectOrInterfaceDefinition,
    K extends PropertyKeys<Q> = never,
    T extends boolean = false,
    RDP_KEYS extends string = never,
    ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<K> = never,
  > extends AsyncIter<Q, K, T, RDP_KEYS, ORDER_BY_OPTIONS> {
    $nextPageToken?: string;
    $pageSize?: number;
  }
}

export interface SelectArg<
  Q extends ObjectOrInterfaceDefinition,
  L extends string = PropertyKeys<Q>,
  R extends boolean = false,
  S extends NullabilityAdherence = NullabilityAdherence.Default,
  RDP_KEYS extends string = never,
  PROPERTY_SECURITIES extends boolean = false,
> {
  $select?: readonly L[];
  $includeRid?: R;
  $loadPropertySecurityMetadata?: PROPERTY_SECURITIES;
}

export interface OrderByArg<
  Q extends ObjectOrInterfaceDefinition,
  L extends string = PropertyKeys<Q>,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<L> = never,
> extends ObjectSetArgs.OrderBy<ORDER_BY_OPTIONS, L> {
}

export type SelectArgToKeys<
  Q extends ObjectOrInterfaceDefinition,
  A extends SelectArg<Q, any, any>,
> = A extends SelectArg<Q, never> ? PropertyKeys<Q>
  : A["$select"] extends readonly string[] ? A["$select"][number]
  : PropertyKeys<Q>;

export interface FetchPageArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends string = PropertyKeys<Q>,
  R extends boolean = false,
  A extends Augments = never,
  S extends NullabilityAdherence = NullabilityAdherence.Default,
  T extends boolean = false,
  RDP_KEYS extends string = never,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<K> = {},
  PROPERTY_SECURITIES extends boolean = false,
> extends
  AsyncIterArgs<
    Q,
    K,
    R,
    A,
    S,
    T,
    RDP_KEYS,
    ORDER_BY_OPTIONS,
    PROPERTY_SECURITIES
  >
{
  $nextPageToken?: string;
  $pageSize?: number;
}

export interface AsyncIterArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends string = PropertyKeys<Q>,
  R extends boolean = false,
  A extends Augments = never,
  S extends NullabilityAdherence = NullabilityAdherence.Default,
  T extends boolean = false,
  RDP_KEYS extends string = never,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<K> = never,
  PROPERTY_SECURITIES extends boolean = false,
> extends
  SelectArg<Q, K, R, S, RDP_KEYS, PROPERTY_SECURITIES>,
  OrderByArg<Q, PropertyKeys<Q> | RDP_KEYS, ORDER_BY_OPTIONS>
{
  $__UNSTABLE_useOldInterfaceApis?: boolean;
  $includeAllBaseObjectProperties?: PropertyKeys<Q> extends K ? T : never;
}

export type Augment<
  X extends ObjectOrInterfaceDefinition,
  T extends string,
> = { [K in CompileTimeMetadata<X>["apiName"]]: T[] };

export type Augments = Record<string, string[]>;
