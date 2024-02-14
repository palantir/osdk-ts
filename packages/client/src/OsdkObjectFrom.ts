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
  P extends keyof Q["properties"] | "all" = "$all",
  R extends boolean = false,
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

    $apiName: Q["apiName"] & { __OsdkType?: Q["apiName"] };

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
  }
  & (R extends true ? { $rid: string } : {});

export type OsdkObjectOrInterfaceFrom<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends keyof Q["properties"] | "all" = "$all",
  R extends boolean = false,
> = Osdk<Q, P, R>;

export type Osdk<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends keyof Q["properties"] | "$all" = "$all",
  R extends boolean = false,
> = OsdkCommonFrom<Q, P, R>;

// type ObjectShaped<T extends string> = {
//   __apiName: string & { __OsdkType?: ObjectTypeDefinition<any> };
// };

// type Q<T> = T extends ObjectTypeDefinition<any> ? number : string;

// // type Osdk<
// //   T extends ObjectShaped<string>,
// //   K extends keyof NonNullable<T["__apiName"]["__OsdkType"]>["properties"],
// // > = NonNullable<T["__apiName"]["__OsdkType"]> extends
// //   ObjectTypeDefinition<any> | InterfaceDefinition<any, any>
// //   ? OsdkObjectFrom<NonNullable<T["__apiName"]["__OsdkType"]>, K>
// //   : never;

// type Osdk<
//   T extends ObjectShaped<string>,
//   K extends keyof NonNullable<T["__apiName"]["__OsdkType"]>["properties"],
// > = NOOP<Q<T>>;

// type ObjectShaped<T extends string> = {
//   __apiName: T & { __OsdkType?: ObjectTypeDefinition<any> };
// };

// type Q<T, L> = T extends ObjectTypeDefinition<any> ? L extends string & keyof T["properties"] ? OsdkObjectFrom<T, L> : string : never;

// // type Osdk<
// //   T extends ObjectShaped<string>,
// //   K extends keyof NonNullable<T["__apiName"]["__OsdkType"]>["properties"],
// // > = NonNullable<T["__apiName"]["__OsdkType"]> extends
// //   ObjectTypeDefinition<any> | InterfaceDefinition<any, any>
// //   ? OsdkObjectFrom<NonNullable<T["__apiName"]["__OsdkType"]>, K>
// //   : never;

// type Osdk<
//   T extends ObjectShaped<string>,
//   K extends keyof NonNullable<T["__apiName"]["__OsdkType"]>["properties"],
// > = Q<NonNullable<T["__apiName"]["__OsdkType"]>, K>;

// type qq = NOOP<Osdk<Employee, "employeeNumber">>;

// export interface Employee extends OsdkObjectFrom<EmployeeDef, keyof ObjectDef$Employee$Properties, EmployeeDef> {}

// const q: Employee = {}  as any;
