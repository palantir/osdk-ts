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
  InterfaceDefinition,
  InterfacePropertyKeysFrom2,
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
  WirePropertyTypes,
} from "@osdk/api";
import type { OsdkObjectPropertyType } from "./Definitions.js";
import type { OsdkObjectLinksObject } from "./definitions/LinkDefinitions.js";

export type OsdkObjectPrimaryKeyType<
  O extends ObjectTypeDefinition<any>,
> = WirePropertyTypes[O["primaryKeyType"]];

type OsdkCommonFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
> =
  & {
    [P in L]: OsdkObjectPropertyType<
      Q["properties"][P]
    >;
  }
  & {
    /** @deprecated use $apiName */
    __apiName: Q["apiName"];

    $apiName: Q["apiName"];

    /** @deprecated use $primaryKey */
    __primaryKey: Q extends ObjectTypeDefinition<any>
      ? OsdkObjectPrimaryKeyType<Q>
      : unknown;

    $primaryKey: Q extends ObjectTypeDefinition<any>
      ? OsdkObjectPrimaryKeyType<Q>
      : unknown;
    // $uniqueId: string; // will be dynamic
  }
  & (R extends true ? { $rid: string } : {});

export type OsdkObjectFrom<
  O extends ObjectTypeDefinition<any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<O> =
    ObjectOrInterfacePropertyKeysFrom2<O>,
  R extends boolean = false,
> = OsdkCommonFrom<O, L, R> & {
  $link: OsdkObjectLinksObject<O>;
}; // TODO

export type OsdkInterfaceFrom<
  Q extends InterfaceDefinition<any, any>,
  T_PropertyKeys extends InterfacePropertyKeysFrom2<Q> =
    InterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
> = OsdkCommonFrom<Q, T_PropertyKeys, R>;

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
> = Q extends InterfaceDefinition<any, any> ? OsdkInterfaceFrom<Q, L, R>
  : Q extends ObjectTypeDefinition<any> ? OsdkObjectFrom<Q, L, R>
  : never;
