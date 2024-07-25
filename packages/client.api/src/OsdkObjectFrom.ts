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
import type { UnionIfTrue } from "./object/FetchPageResult.js";
import type { OsdkBase } from "./OsdkBase.js";
import type { OsdkObjectPrimaryKeyType } from "./OsdkObjectPrimaryKeyType.js";

type DropDollarOptions<T extends string> = Exclude<
  T,
  "$rid" | "$all" | "$notStrict"
>;

type DropDollarAll<T extends string> = Exclude<
  T,
  "$all"
>;

type ApiNameAsString<T extends ObjectOrInterfaceDefinition> = NonNullable<
  T["apiName"]["__Unbranded"]
>;

/**
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
      (
        UnionIfTrue<
          UnionIfTrue<
            NonNullable<TO["interfaceMap"]>[ApiNameAsString<FROM>][
              P extends "$all" ? (
                  keyof FROM["properties"] extends
                    NonNullable<keyof TO["interfaceMap"]>[ApiNameAsString<FROM>]
                    ? keyof FROM["properties"]
                    : never
                )
                : DropDollarOptions<P>
            ],
            P extends "$notStrict" ? true : false,
            "$notStrict"
          >,
          P extends "$rid" ? true : false,
          "$rid"
        >
      )
    )
  : UnionIfTrue<
    UnionIfTrue<
      TO extends InterfaceDefinition<any> ? P extends "$all" ? "$all"
        : FROM extends ObjectTypeDefinition<any>
          ? DropDollarOptions<P> extends
            keyof NonNullable<FROM["inverseInterfaceMap"]>[
              ApiNameAsString<TO>
            ] ? NonNullable<FROM["inverseInterfaceMap"]>[ApiNameAsString<TO>][
              DropDollarOptions<P>
            ]
          : never
        : never
        : never,
      P extends "$notStrict" ? true : false,
      "$notStrict"
    >,
    P extends "$rid" ? true : false,
    "$rid"
  >;

/** DO NOT EXPORT FROM PACKAGE */
export type ValidToFrom<FROM extends ObjectOrInterfaceDefinition> = FROM extends
  InterfaceDefinition<any, any>
  ? ObjectTypeDefinition<any> | InterfaceDefinition<any, any>
  : InterfaceDefinition<any, any>;

/**
 * @param P The properties to add from Q
 * @param Z The existing underlying properties
 */
type UnderlyingProps<
  Q extends ObjectOrInterfaceDefinition,
  P extends string,
  Z extends string,
  NEW_Q extends ValidToFrom<Q>,
> =
  & Z
  & Q extends InterfaceDefinition<any, any>
  ? NEW_Q extends ObjectTypeDefinition<any> ? ConvertProps<Q, NEW_Q, P>
  : Z
  : Z;

export type IsNever<T> = [T] extends [never] ? true : false;

export type Osdk<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends string = "$all",
  Z extends string = never, // this is the underlying's props
> =
  & OsdkBase<Q>
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
      ? OsdkObjectPropertyType<
        Q["properties"][PP],
        false // P is never so we do not have to check for "$notStrict"
      >
      : OsdkObjectPropertyType<
        Q["properties"][PP],
        P extends "$notStrict" ? false : true
      >;
  }
  & {
    /** @deprecated use $apiName */
    __apiName: Q["apiName"] & { __OsdkType?: Q["apiName"] };

    /** @deprecated use $primaryKey */
    __primaryKey: Q extends ObjectTypeDefinition<any>
      ? OsdkObjectPrimaryKeyType<Q>
      : string | number | boolean;

    // $uniqueId: string; // will be dynamic

    $link: Q extends ObjectTypeDefinition<any> ? OsdkObjectLinksObject<Q>
      : never;

    $as: <NEW_Q extends ValidToFrom<Q>>(type: NEW_Q | string) => Osdk<
      NEW_Q,
      ConvertProps<Q, NEW_Q, P>,
      UnderlyingProps<Q, P, Z, NEW_Q>
    >;
  }
  // We are hiding the $rid field if it wasn't requested as we want to discourage its use
  & (IsNever<P> extends true ? {}
    : string extends P ? {}
    : "$rid" extends P ? { $rid: string }
    : {});

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends string = "$all",
> = Osdk<Q, P>;
