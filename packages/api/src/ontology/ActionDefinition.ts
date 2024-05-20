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

import type { ObjectTypeDefinition } from "../index.js";
import type { OsdkMetadata } from "../OsdkMetadata.js";

export interface ActionDefinition<
  A extends string,
  K extends string,
  T = never, // used in client 2
> {
  __OsdkActionType?: T;
  type: "action";
  apiName: A;
  description?: string;
  displayName?: string;
  parameters: Record<any, ActionParameterDefinition<K, any>>;
  modifiedEntities?: Partial<Record<K, ActionModifiedEntity>>;
  osdkMetadata?: OsdkMetadata;
}

export interface ActionModifiedEntity {
  created: boolean;
  modified: boolean;
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

export interface ObjectActionDataType<
  K extends string,
  T_Target extends ObjectTypeDefinition<any> = never,
> {
  __OsdkTargetType?: T_Target;
  type: "object";
  object: K;
}

export interface ObjectSetActionDataType<
  K extends string,
  T_Target extends ObjectTypeDefinition<any> = never,
> {
  __OsdkTargetType?: T_Target;
  type: "objectSet";
  objectSet: K;
}

export type ValidActionParameterTypes<
  K extends string = never,
  T_Target extends ObjectTypeDefinition<any> = never,
> =
  | ValidBaseActionParameterTypes
  | ObjectActionDataType<K, T_Target>
  | ObjectSetActionDataType<K, T_Target>;

export interface ActionParameterDefinition<
  K extends string = never,
  T_Target extends ObjectTypeDefinition<any> = never,
> {
  type: ValidActionParameterTypes<K, T_Target>;
  description?: string;
  multiplicity?: boolean;
  nullable?: boolean;
}
