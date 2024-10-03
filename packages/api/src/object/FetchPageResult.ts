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
import type { ExtractOptions, IsNever, Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { NullabilityAdherence } from "./FetchPageArgs.js";

/** exposed for a test */
export type RespectNullability<S extends NullabilityAdherence> = S extends false
  ? false
  : true;

/** exposed for a test */
export type UnionIfFalse<S extends string, JUST_S_IF_TRUE extends boolean, E> =
  IsNever<S> extends true ? never
    : JUST_S_IF_TRUE extends true ? S
    : S | E;

/** exposed for a test */
export type UnionIfTrue<
  S extends string,
  UNION_IF_TRUE extends boolean,
  E extends string,
> = IsNever<S> extends true ? never
  : UNION_IF_TRUE extends true ? S | E
  : S;

/**
 * Helper type for converting fetch options into an Osdk object
 */
export type FetchPageResult<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
> = PageResult<
  PropertyKeys<Q> extends L ? Osdk.Instance<Q, ExtractOptions<R, S>>
    : Osdk.Instance<Q, ExtractOptions<R, S>, L>
>;

/**
 * Helper type for converting fetch options into an Osdk object
 */
export type SingleOsdkResult<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
> = Osdk.Instance<Q, ExtractOptions<R, S>, L>;

export type IsAny<T> = unknown extends T
  ? [keyof T] extends [never] ? false : true
  : false;
