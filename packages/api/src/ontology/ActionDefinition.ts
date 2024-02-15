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

export interface ActionDefinition<
  A extends string,
  K extends string,
> {
  type: "action";
  apiName: A;
  description?: string;
  displayName?: string;
  parameters: Record<string, ActionParameterDefinition<K>>;
  modifiedEntities?: Partial<Record<K, ActionModifiedEntity>>;
}

export interface ActionModifiedEntity {
  created: boolean;
  modified: boolean;
}

export interface ValidBaseActionParameterTypes {
  boolean: boolean;
  string: string;
  integer: number;
  long: number;
  double: number;
  datetime: Date;
  timestamp: Date;
  attachment: any;
  marking: string;
}

export interface ObjectActionDataType<K extends string> {
  type: "object";
  object: K;
}

export interface ObjectSetActionDataType<K extends string> {
  type: "objectSet";
  objectSet: K;
}

export type ValidActionParameterTypes<K extends string = never> =
  | keyof ValidBaseActionParameterTypes
  | ObjectActionDataType<K>
  | ObjectSetActionDataType<K>;

export interface ActionParameterDefinition<K extends string = never> {
  type: ValidActionParameterTypes<K>;
  description?: string;
  multiplicity?: boolean;
  nullable?: boolean;
}
