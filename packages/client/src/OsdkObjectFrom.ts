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
import type { OsdkObjectPropertyType } from "./Definitions.js";
import type { OsdkObjectLinksObject } from "./definitions/LinkDefinitions.js";
import type { PropertyValueWireToClient } from "./mapping/PropertyValueMapping.js";

export type OsdkObjectPrimaryKeyType<
  O extends ObjectTypeDefinition<any>,
> = PropertyValueWireToClient[O["primaryKeyType"]];

export type Osdk<
  Q extends ObjectTypeDefinition<any> | InterfaceDefinition<any, any>,
  P extends keyof Q["properties"] | "$all" = "$all",
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
  P extends keyof Q["properties"] | "$all" = "$all",
  R extends boolean = false,
> = Osdk<Q, P, R>;
