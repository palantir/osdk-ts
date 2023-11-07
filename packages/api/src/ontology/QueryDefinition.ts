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

export interface QueryDefinition<Q extends string> {
  apiName: Q;
  description?: string;
  displayName?: string;
  rid: string;
  version: string;
  parameters: Record<string, QueryParameterDefinition>;
  output: QueryDataTypeDefinition;
}

export interface QueryParameterDefinition {
  description?: string;
  dataType: QueryDataTypeDefinition;
}

export interface QueryDataTypeDefinition {
  type: QueryDataType;
  multiplicity?: boolean;
  nullable?: boolean;
}

export type QueryDataType =
  | keyof ValidBaseQueryDataTypes
  | ObjectQueryDataType<any>
  | ObjectSetQueryDataType<any>
  | SetQueryDataType
  | UnionQueryDataType
  | StructQueryDataType;

export interface ValidBaseQueryDataTypes {
  double: number;
  float: number;
  integer: number;
  long: number;
  boolean: boolean;
  string: string;
  date: Date;
  timestamp: Date;
  attachment: any; // TODO surely we can be more strict here
}

export interface ObjectQueryDataType<K extends string> {
  type: "object";
  object: K;
}

export interface ObjectSetQueryDataType<K extends string> {
  type: "objectSet";
  objectSet: K;
}

export interface SetQueryDataType {
  type: "set";
  set: QueryDataTypeDefinition;
}

export interface UnionQueryDataType {
  type: "union";
  union: ReadonlyArray<QueryDataTypeDefinition>;
}

export interface StructQueryDataType {
  type: "struct";
  struct: ReadonlyArray<{ name: string; fieldType: QueryDataTypeDefinition }>;
}
