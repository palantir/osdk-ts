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

import type { OsdkMetadata } from "../OsdkMetadata.js";
import type { InterfaceDefinition } from "./InterfaceDefinition.js";
import type {
  ObjectTypeDefinition,
  ReleaseStatus,
} from "./ObjectTypeDefinition.js";

export interface ActionMetadata {
  type: "action";
  apiName: string;
  description?: string;
  displayName?: string;
  parameters: Record<any, ActionMetadata.Parameter<any>>;
  modifiedEntities?: Partial<
    Record<any, {
      created: boolean;
      modified: boolean;
    }>
  >;
  status: ReleaseStatus;
  rid: string;
}

export namespace ActionMetadata {
  export interface Parameter<
    T_Target extends ObjectTypeDefinition = never,
  > {
    type:
      | DataType.BaseActionParameterTypes
      | DataType.Object<any>
      | DataType.ObjectSet<any>
      | DataType.Interface<any>
      | DataType.Struct<any>;
    description?: string;
    multiplicity?: boolean;
    nullable?: boolean;
  }

  export namespace DataType {
    export type BaseActionParameterTypes =
      | "boolean"
      | "string"
      | "integer"
      | "long"
      | "double"
      | "datetime"
      | "timestamp"
      | "attachment"
      | "marking"
      | "mediaReference"
      | "objectType";

    export interface Object<
      T_Target extends ObjectTypeDefinition = never,
    > {
      __OsdkTargetType?: T_Target;
      type: "object";
      object: T_Target["apiName"];
    }

    export interface Interface<T_Target extends InterfaceDefinition = never> {
      __OsdkTargetType?: T_Target;
      type: "interface";
      interface: T_Target["apiName"];
    }

    export interface ObjectSet<
      T_Target extends ObjectTypeDefinition = never,
    > {
      __OsdkTargetType?: T_Target;
      type: "objectSet";
      objectSet: T_Target["apiName"];
    }

    export interface Struct<
      T extends Record<string, DataType.BaseActionParameterTypes>,
    > {
      type: "struct";
      struct: T;
    }
  }
}

export interface ActionCompileTimeMetadata<T> {
  signatures: T;
}

export interface ActionDefinition<
  T_signatures = never,
> {
  type: "action";
  apiName: string;
  osdkMetadata?: OsdkMetadata;
  __DefinitionMetadata?:
    & ActionCompileTimeMetadata<T_signatures>
    & ActionMetadata;
}
