/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  ObjectTypePropertyDefinition,
  WirePropertyTypes,
} from "@osdk/api";

type MaybeArray<T extends { multiplicity?: boolean | undefined }, U> =
  T["multiplicity"] extends true ? Array<U> : U;

type MaybeNullable<T extends ObjectTypePropertyDefinition, U> =
  T["nullable"] extends true ? U | undefined
    : U;

type Raw<T> = T extends Array<any> ? T[0] : T;
type Converted<T> = T extends Array<any> ? T[1] : T;

export type OsdkObjectPropertyType<T extends ObjectTypePropertyDefinition> =
  MaybeNullable<T, MaybeArray<T, Converted<WirePropertyTypes[T["type"]]>>>;

export type OsdkObjectRawPropertyType<T extends ObjectTypePropertyDefinition> =
  MaybeNullable<T, MaybeArray<T, Raw<WirePropertyTypes[T["type"]]>>>;
