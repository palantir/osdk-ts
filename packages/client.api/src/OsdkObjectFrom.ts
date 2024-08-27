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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
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

export type ApiNameAsString<
  T extends ObjectTypeDefinition<any, any> | InterfaceDefinition<any>,
> = NonNullable<
  T["apiName"]["__Unbranded"]
>;

export type JustProps<
  T extends ObjectTypeDefinition<any> | InterfaceDefinition<any>,
  P extends "$rid" | "$strict" | "$notStrict" | "$all" | keyof T["properties"],
> = P extends "$all" ? keyof T["properties"]
  : Exclude<P, "$all" | "$rid" | "$strict" | "$notStrict">;

export type PropMapToObject<
  FROM extends InterfaceDefinition<any> | ObjectTypeDefinition<any>,
  TO extends ObjectTypeDefinition<any>,
> = NonNullable<TO["interfaceMap"]>[ApiNameAsString<FROM>];

export type MapPropNamesToObjectType<
  FROM extends InterfaceDefinition<any> | ObjectTypeDefinition<any>,
  TO extends ObjectTypeDefinition<any>,
  P extends
    | "$rid"
    | "$strict"
    | "$notStrict"
    | "$all"
    | keyof FROM["properties"],
> = PropMapToObject<
  FROM,
  TO
>[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>];

export type PropMapToInterface<
  FROM extends ObjectTypeDefinition<any>,
  TO extends InterfaceDefinition<any>,
> = NonNullable<FROM["inverseInterfaceMap"]>[ApiNameAsString<TO>];

export type MapPropNamesToInterface<
  FROM extends ObjectTypeDefinition<any>,
  TO extends InterfaceDefinition<any>,
  P extends
    | "$rid"
    | "$strict"
    | "$notStrict"
    | "$all"
    | keyof FROM["properties"],
> = PropMapToInterface<
  FROM,
  TO
>[JustProps<FROM, P> & keyof PropMapToInterface<FROM, TO>];
/**
 * @param FROM - the interface or object type to convert from
 * @param TO - the interface or object type to convert to
 * @param P - the property(s) to convert
 */
export type ConvertProps<
  FROM extends ObjectTypeDefinition<any> | InterfaceDefinition<any>,
  TO extends ValidToFrom<FROM>,
  P extends "$rid" | "$all" | "$strict" | "$notStrict" | keyof FROM["props"],
> = TO extends FROM ? P
  : TO extends ObjectTypeDefinition<any> ? (
      UnionIfTrue<
        MapPropNamesToObjectType<FROM, TO, P>,
        P extends "$rid" ? true : false,
        "$rid"
      >
    )
  : TO extends InterfaceDefinition<any>
    ? FROM extends ObjectTypeDefinition<any> ? (
        UnionIfTrue<
          MapPropNamesToInterface<FROM, TO, P>,
          P extends "$rid" ? true : false,
          "$rid"
        >
      )
    : never
  : never;

/** DO NOT EXPORT FROM PACKAGE */
export type ValidToFrom<
  FROM extends ObjectTypeDefinition<any, any> | InterfaceDefinition<any>,
> = FROM extends InterfaceDefinition<any, any>
  ? ObjectTypeDefinition<any> | InterfaceDefinition<any, any>
  : InterfaceDefinition<any, any>;

/**
 * @param P The properties to add from Q
 * @param Z The existing underlying properties
 */
type UnderlyingProps<
  Q extends ObjectTypeDefinition<any, any> | InterfaceDefinition<any>,
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

type GetPropsKeys<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends "$all" | "$rid" | "$strict" | "$notStrict" | keyof Q["properties"],
> = P extends "$all" ? keyof Q["properties"]
  : Exclude<P, "$strict" | "$notStrict" | "$rid">;

type GetProps<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends "$all" | "$rid" | "$strict" | "$notStrict" | keyof Q["properties"],
> = P extends "$notStrict" ? Q["props"] : Q["strictProps"];

export type Osdk<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends "$all" | "$rid" | "$strict" | "$notStrict" | keyof Q["properties"] =
    "$all",
> =
  & OsdkBase<Q>
  & Pick<
    GetProps<Q, P>,
    GetPropsKeys<Q, P>
  >
  & {
    $link: Q extends ObjectTypeDefinition<any> ? OsdkObjectLinksObject<Q>
      : never;

    $as: <NEW_Q extends ValidToFrom<Q>>(type: NEW_Q | string) => Osdk<
      NEW_Q,
      ConvertProps<Q, NEW_Q, P>
    >;
  }
  // We are hiding the $rid field if it wasn't requested as we want to discourage its use
  & (IsNever<P> extends true ? {}
    : string extends P ? {}
    : "$rid" extends P ? { $rid: string }
    : {});
// & {
//   [
//     PP in keyof Q["properties"] as (
//       // when we don't know what properties, we will show all but ensure they are `| undefined`
//       IsNever<P> extends true ? PP
//         : P extends "$all" ? PP
//         : PP extends P ? PP
//         : never
//     )
//   ]: IsNever<P> extends true
//     // when we don't know what properties, we will show all but ensure they are `| undefined`
//     ? OsdkObjectPropertyType<
//       Q["properties"][PP],
//       false // P is never so we do not have to check for "$notStrict"
//     >
//     : OsdkObjectPropertyType<
//       Q["properties"][PP],
//       P extends "$notStrict" ? false : true
//     >;
// };
// & Pick<
//   {
//     [PP in P]: OsdkObjectPropertyType<
//       Q["properties"][PP],
//       false
//     > // P extends "$notStrict" ? false : true
//     ;
//   },
//   P
// >;
// // & {
// //   [
// //     PP in keyof Q["properties"] as (
// //       // when we don't know what properties, we will show all but ensure they are `| undefined`
// //       IsNever<P> extends true ? PP
// //         : P extends "$all" ? PP
// //         : PP extends P ? PP
// //         : never
// //     )
// //   ]: IsNever<P> extends true
// //     // when we don't know what properties, we will show all but ensure they are `| undefined`
// //     ? OsdkObjectPropertyType<
// //       Q["properties"][PP],
// //       false // P is never so we do not have to check for "$notStrict"
// //     >
// //     : OsdkObjectPropertyType<
// //       Q["properties"][PP],
// //       P extends "$notStrict" ? false : true
// //     >;
// // }
// & {
//   // $uniqueId: string; // will be dynamic

// };

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends string = string & keyof Q["properties"],
> = Osdk<Q, P>;
