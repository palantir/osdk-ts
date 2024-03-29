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
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { OsdkObjectPropertyType } from "./Definitions.js";
import type { OsdkObjectLinksObject } from "./definitions/LinkDefinitions.js";
import type { PropertyValueWireToClient } from "./mapping/PropertyValueMapping.js";

export type OsdkObjectPrimaryKeyType<
  O extends ObjectTypeDefinition<any>,
> = PropertyValueWireToClient[O["primaryKeyType"]];

type DropRidAndAll<T extends string> = Exclude<T, "$rid" | "$all">;

/**
 * DO NOT EXPORT FROM PACKAGE
 * @param FROM - the interface or object type to convert from
 * @param TO - the interface or object type to convert to
 * @param P - the property(s) to convert
 */
export type ConvertProps<
  FROM extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  TO extends ValidToFrom<FROM>,
  P extends string = "$all",
> = TO extends FROM ? P
  : TO extends ObjectTypeDefinition<any> ? (
      (NonNullable<
        TO["spts"]
      >[
        P extends "$all"
          ? keyof FROM["properties"] extends keyof TO["spts"]
            ? keyof FROM["properties"]
          : never
          : DropRidAndAll<P>
      ])
    )
  : TO extends InterfaceDefinition<any> ? P extends "$all" ? "$all"
    : FROM extends ObjectTypeDefinition<any>
      ? DropRidAndAll<P> extends keyof FROM["inverseSpts"]
        ? NonNullable<FROM["inverseSpts"]>[DropRidAndAll<P>]
      : never
    : never
  : never;

/** DO NOT EXPORT FROM PACKAGE */
export type ValidToFrom<FROM extends ObjectOrInterfaceDefinition> = FROM extends
  InterfaceDefinition<any, any>
  ? ObjectTypeDefinition<any> | InterfaceDefinition<any, any>
  : InterfaceDefinition<any, any>;

type UnderlyingProps<
  Q extends ObjectOrInterfaceDefinition,
  P extends string,
  Z extends string,
  NEWQ extends ValidToFrom<Q>,
> =
  & Z
  & Q extends InterfaceDefinition<any, any>
  ? NEWQ extends ObjectTypeDefinition<any> ? ConvertProps<Q, NEWQ, P>
  : Z
  : Z;

type IsNever<T> = [T] extends [never] ? true : false;

export type Osdk<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends string = "$all",
  Z extends string = never, // this is the underlying's props
> =
  & {
    [
      PP in keyof Q["properties"] as (
        // when we don't know what properties, we will show all but ensure they are `| undefined`
        IsNever<P> extends true ? PP
          : P extends "$all" ? PP
          : PP extends P ? PP
          : never
      )
    ]: IsNever<P> extends true
      // when we don't know what properties, we will show all but ensure they are `| undefined`
      ? OsdkObjectPropertyType<Q["properties"][PP]> | undefined
      : OsdkObjectPropertyType<Q["properties"][PP]>;
  }
  & {
    /** @deprecated use $apiName */
    __apiName: Q["apiName"] & { __OsdkType?: Q["apiName"] };

    $apiName: Q["apiName"] & {
      __OsdkType?: Q["apiName"];
    };

    $objectType: string;

    /** @deprecated use $primaryKey */
    __primaryKey: Q extends ObjectTypeDefinition<any>
      ? OsdkObjectPrimaryKeyType<Q>
      : unknown;

    $primaryKey: Q extends ObjectTypeDefinition<any>
      ? OsdkObjectPrimaryKeyType<Q>
      : unknown;
    // $uniqueId: string; // will be dynamic

    $link: Q extends ObjectTypeDefinition<any> ? OsdkObjectLinksObject<Q>
      : never;

    $as: <NEWQ extends ValidToFrom<Q>>(type: NEWQ | string) => Osdk<
      NEWQ,
      ConvertProps<Q, NEWQ, P>,
      UnderlyingProps<Q, P, Z, NEWQ>
    >;
  }
  // We are hiding the $rid field if it wasnt requested as we want to discourage its use
  & (IsNever<P> extends true ? {}
    : P extends "$rid" ? { $rid: string }
    : {});

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends string = "$all",
> = Osdk<Q, P>;
