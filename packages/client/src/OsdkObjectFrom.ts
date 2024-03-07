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
> = TO extends ObjectTypeDefinition<any> ? (
    (NonNullable<
      TO["inverseSpts"]
    >[P extends "$all" ? keyof FROM["properties"] : P])
  )
  : TO extends InterfaceDefinition<any> ? P extends "$all" ? "$all"
    : FROM extends ObjectTypeDefinition<any>
      ? P extends keyof FROM["spts"] ? NonNullable<FROM["spts"]>[P]
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

export type Osdk<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends string = "$all",
  R extends boolean = false,
  Z extends string = P, // this is the underlying's props
> =
  & {
    [
      PP in keyof Q["properties"] as (P extends "$all" ? PP
        : PP extends P ? PP
        : never)
    ]: OsdkObjectPropertyType<
      Q["properties"][PP]
    >;
  }
  & {
    /** @deprecated use $apiName */
    __apiName: Q["apiName"] & { __OsdkType?: Q["apiName"] };

    $apiName: Q["apiName"] & {
      __OsdkType?: Q["apiName"];
    };

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

    $as: <NEWQ extends ValidToFrom<Q>>(type: NEWQ) => Osdk<
      NEWQ,
      ConvertProps<Q, NEWQ, P>,
      R,
      UnderlyingProps<Q, P, Z, NEWQ>
    >;
  }
  // We are hiding the $rid field if it wasnt requested as we want to discourage its use
  & (R extends true ? { $rid: string } : {});

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends string = "$all",
  R extends boolean = false,
> = Osdk<Q, P, R>;
