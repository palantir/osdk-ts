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
  CompileTimeMetadata,
  MinInterfaceDef,
  MinObjectDef,
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "@osdk/api";
import type { OsdkObjectLinksObject } from "./definitions/LinkDefinitions.js";
import type { UnionIfTrue } from "./object/FetchPageResult.js";
import type { OsdkBase } from "./OsdkBase.js";

type DropDollarOptions<T extends string> = Exclude<
  T,
  "$rid" | "$all" | "$notStrict"
>;

type DropDollarAll<T extends string> = Exclude<
  T,
  "$all"
>;

type SpecialOsdkPropParams =
  | "$all"
  | "$rid"
  | "$strict"
  | "$notStrict";

type ValidOsdkPropParams<Q extends ObjectOrInterfaceDefinition> =
  | SpecialOsdkPropParams
  | PropertyKeys<Q>;

export type ApiNameAsString<
  T extends ObjectOrInterfaceDefinition,
> = CompileTimeMetadata<T>["apiName"];

export type JustProps<
  T extends ObjectOrInterfaceDefinition,
  P extends ValidOsdkPropParams<T>,
> = P extends "$all" ? PropertyKeys<T>
  : Exclude<P, SpecialOsdkPropParams>;

export type PropMapToObject<
  FROM extends ObjectOrInterfaceDefinition,
  TO extends MinObjectDef<any, any>,
> = NonNullable<CompileTimeMetadata<TO>["interfaceMap"]>[ApiNameAsString<FROM>];

export type MapPropNamesToObjectType<
  FROM extends ObjectOrInterfaceDefinition,
  TO extends MinObjectDef<any, any>,
  P extends ValidOsdkPropParams<FROM>,
> = PropMapToObject<
  FROM,
  TO
>[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>];

export type PropMapToInterface<
  FROM extends MinObjectDef<any>,
  TO extends MinInterfaceDef<any>,
> = NonNullable<
  CompileTimeMetadata<FROM>["inverseInterfaceMap"]
>[ApiNameAsString<TO>];

export type MapPropNamesToInterface<
  FROM extends MinObjectDef<any>,
  TO extends MinInterfaceDef<any>,
  P extends ValidOsdkPropParams<FROM>,
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
  FROM extends ObjectOrInterfaceDefinition,
  TO extends ValidToFrom<FROM>,
  P extends ValidOsdkPropParams<FROM>,
> = TO extends FROM ? P
  : TO extends MinObjectDef<any, any> ? (
      UnionIfTrue<
        MapPropNamesToObjectType<FROM, TO, P>,
        P extends "$rid" ? true : false,
        "$rid"
      >
    )
  : TO extends MinInterfaceDef<any, any>
    ? FROM extends MinObjectDef<any, any> ? (
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
  FROM extends ObjectOrInterfaceDefinition,
> = FROM extends MinInterfaceDef<any, any> ? ObjectOrInterfaceDefinition
  : MinInterfaceDef<any, any>;

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
  & Q extends MinInterfaceDef<any, any>
  ? NEW_Q extends MinObjectDef<any> ? ConvertProps<Q, NEW_Q, P>
  : Z
  : Z;

export type IsNever<T> = [T] extends [never] ? true : false;

type GetPropsKeys<
  Q extends ObjectOrInterfaceDefinition,
  P extends ValidOsdkPropParams<Q>,
> = P extends "$all" ? PropertyKeys<Q>
  : Exclude<P, "$strict" | "$notStrict" | "$rid">;

type GetProps<
  Q extends ObjectOrInterfaceDefinition,
  P extends ValidOsdkPropParams<Q>,
> = P extends "$notStrict" ? CompileTimeMetadata<Q>["props"]
  : CompileTimeMetadata<Q>["strictProps"];

export type Osdk<
  Q extends ObjectOrInterfaceDefinition,
  P extends ValidOsdkPropParams<Q> = "$all",
> =
  & OsdkBase<Q>
  & Pick<
    GetProps<Q, P>,
    GetPropsKeys<Q, P>
  >
  & {
    readonly $link: Q extends { linksType?: any } ? Q["linksType"]
      : Q extends MinObjectDef<any, any> ? OsdkObjectLinksObject<Q>
      : never;

    readonly $as: <NEW_Q extends ValidToFrom<Q>>(type: NEW_Q | string) => Osdk<
      NEW_Q,
      ConvertProps<Q, NEW_Q, P>
    >;
  }
  // We are hiding the $rid field if it wasn't requested as we want to discourage its use
  & (IsNever<P> extends true ? {}
    : string extends P ? {}
    : "$rid" extends P ? { readonly $rid: string }
    : {});

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectOrInterfaceDefinition,
  P extends string = PropertyKeys<Q>,
> = Osdk<Q, P>;
