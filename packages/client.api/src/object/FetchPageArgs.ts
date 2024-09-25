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
  BrandedApiName,
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfacePropertyKeysFrom2,
  PropertyKeys,
} from "@osdk/api";

export type NullabilityAdherence = false | "throw" | "drop";
export type NullabilityAdherenceDefault = "throw";

export interface SelectArg<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
  S extends NullabilityAdherence = NullabilityAdherenceDefault,
> {
  $select?: readonly L[];
  $includeRid?: R;
  $__EXPERIMENTAL_strictNonNull?: S;
}

export interface OrderByArg<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
> {
  $orderBy?: {
    [K in L]?: "asc" | "desc";
  };
}

export type SelectArgToKeys<
  Q extends ObjectOrInterfaceDefinition,
  A extends SelectArg<Q, any, any>,
> = A extends SelectArg<Q, never> ? PropertyKeys<Q>
  : A["$select"] extends readonly string[] ? A["$select"][number]
  : PropertyKeys<Q>;

export interface FetchPageArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
  A extends Augments = {},
  S extends NullabilityAdherence = NullabilityAdherenceDefault,
> extends AsyncIterArgs<Q, K, R, A, S> {
  $nextPageToken?: string;
  $pageSize?: number;
}

export interface AsyncIterArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
  A extends Augments = {},
  S extends NullabilityAdherence = NullabilityAdherenceDefault,
> extends
  SelectArg<Q, K, R, S>,
  OrderByArg<Q, ObjectOrInterfacePropertyKeysFrom2<Q>>
{
  $augment?: A;
  $__EXPERIMENTAL_selectedObjectTypes?: string[];
}

export type Augment<
  X extends ObjectOrInterfaceDefinition,
  T extends string,
> = X extends ObjectOrInterfaceDefinition<infer Z>
  ? Z extends BrandedApiName<infer ZZ, any> ? { [K in Z]: T[] } : never
  : never;

export type Augments = Record<string, string[]>;

export interface FetchInterfacePageArgs<
  Q extends InterfaceDefinition<any, any>,
  K extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
> extends
  SelectArg<Q, K, R>,
  OrderByArg<Q, ObjectOrInterfacePropertyKeysFrom2<Q>>
{
  $nextPageToken?: string;
  $pageSize?: number;
  $augment?: Augments;
}
