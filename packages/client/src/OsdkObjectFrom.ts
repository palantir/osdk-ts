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
> =
  & {
    [P in L]: OsdkObjectPropertyType<
      Q["properties"][P]
    >;
  }
  & {
    __apiName: Q["apiName"];
    __primaryKey: Q extends ObjectTypeDefinition<any>
      ? OsdkObjectPrimaryKeyType<Q>
      : unknown;
    // $uniqueId: string; // will be dynamic

    /**
     * Future versions will require explicitly asking for this field. For now we are marking
     * as always optional to avoid breaking changes.
     */
    __rid?: string;
  };

export type OsdkObjectFrom<
  O extends ObjectTypeDefinition<any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<O> =
    ObjectOrInterfacePropertyKeysFrom2<O>,
> = OsdkCommonFrom<O, L> & {
  $link: OsdkObjectLinksObject<O>;
}; // TODO

export type OsdkInterfaceFrom<
  Q extends InterfaceDefinition<any, any>,
  T_PropertyKeys extends InterfacePropertyKeysFrom2<Q> =
    InterfacePropertyKeysFrom2<Q>,
> = OsdkCommonFrom<Q, T_PropertyKeys>;

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
> = Q extends InterfaceDefinition<any, any> ? OsdkInterfaceFrom<Q, L>
  : Q extends ObjectTypeDefinition<any> ? OsdkObjectFrom<Q, L>
  : never;
