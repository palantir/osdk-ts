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
    T_Target extends ObjectTypeDefinition<any> = never,
  > {
    type:
      | ValidBaseActionParameterTypes
      | DataType.Object<any>
      | DataType.ObjectSet<any>;
    description?: string;
    multiplicity?: boolean;
    nullable?: boolean;
  }

  export namespace DataType {
    export interface Object<
      T_Target extends ObjectTypeDefinition<any> = never,
    > {
      __OsdkTargetType?: T_Target;
      type: "object";
      object: T_Target["apiName"];
    }

    export interface ObjectSet<
      T_Target extends ObjectTypeDefinition<any> = never,
    > {
      __OsdkTargetType?: T_Target;
      type: "objectSet";
      objectSet: T_Target["apiName"];
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

export type ValidBaseActionParameterTypes =
  | "boolean"
  | "string"
  | "integer"
  | "long"
  | "double"
  | "datetime"
  | "timestamp"
  | "attachment"
  | "marking";
