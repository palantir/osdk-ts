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
  ObjectOrInterfacePropertyKeysFrom2,
} from "@osdk/api";
import type { DefaultToFalse } from "../definitions/LinkDefinitions.js";
import type { IsNever, Osdk } from "../OsdkObjectFrom.js";
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

export type FetchPageResult<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
> = PageResult<SingleOsdkResult<Q, L, R, S>>;

export type SingleOsdkResult<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
> = Osdk<
  Q,
  UnionIfTrue<
    UnionIfTrue<L, DefaultToFalse<R>, "$rid">,
    S extends false ? true : false,
    "$notStrict"
  >
>;

// ObjectOrInterfacePropertyKeysFrom2<Q> extends L ? (
//     Osdk<Q, L>
//     // [DefaultToFalse<R>, RespectNullability<S>] extends [false, true] ? Osdk<Q>
//     //   : Osdk<
//     //     Q,
//     //     UnionIfTrue<
//     //       UnionIfFalse<"$all", RespectNullability<S>, "$notStrict">,
//     //       DefaultToFalse<R>,
//     //       "$rid"
//     //     >
//     //   >
//   )
//   : ([DefaultToFalse<R>, RespectNullability<S>] extends [false, true]
//     ? Osdk<Q, L>
//     : Osdk<
//       Q,
//       UnionIfTrue<
//         UnionIfFalse<L, RespectNullability<S>, "$notStrict">,
//         DefaultToFalse<R>,
//         "$rid"
//       >
//     >);

// = ObjectOrInterfacePropertyKeysFrom2<Q> extends L ? (
//     [DefaultToFalse<R>, RespectNullability<S>] extends [false, true] ? Osdk<Q>
//       : Osdk<
//         Q,
//         UnionIfTrue<
//           UnionIfFalse<"$all", RespectNullability<S>, "$notStrict">,
//           DefaultToFalse<R>,
//           "$rid"
//         >
//       >
//   )
//   : ([DefaultToFalse<R>, RespectNullability<S>] extends [false, true]
//     ? Osdk<Q, L>
//     : Osdk<
//       Q,
//       UnionIfTrue<
//         UnionIfFalse<L, RespectNullability<S>, "$notStrict">,
//         DefaultToFalse<R>,
//         "$rid"
//       >
//     >);
