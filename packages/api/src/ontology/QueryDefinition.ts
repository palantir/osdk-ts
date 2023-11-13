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

export interface QueryDefinition<Q extends string, K extends string> {
  apiName: Q;
  description?: string;
  displayName?: string;
  rid: string;
  version: string;
  parameters: Record<string, QueryParameterDefinition<K>>;
  output: QueryDataTypeDefinition<K>;
}

export interface QueryParameterDefinition<K extends string> {
  description?: string;
  dataType: QueryDataTypeDefinition<K>;
}

export interface QueryDataTypeDefinition<K extends string> {
  type: QueryDataType<K>;
  multiplicity?: boolean;
  nullable?: boolean;
}

export type QueryDataType<K extends string> =
  | keyof ValidBaseQueryDataTypes
  | ObjectQueryDataType<K>
  | ObjectSetQueryDataType<K>
  | SetQueryDataType<K>
  | UnionQueryDataType<K>
  | StructQueryDataType<K>
  | TwoDimensionalAggregationDataType
  | ThreeDimensionalAggregationDataType;

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

export interface SetQueryDataType<K extends string> {
  type: "set";
  set: QueryDataTypeDefinition<K>;
}

export interface UnionQueryDataType<K extends string> {
  type: "union";
  union: ReadonlyArray<QueryDataTypeDefinition<K>>;
}

export interface StructQueryDataType<K extends string> {
  type: "struct";
  struct: Record<string, QueryDataTypeDefinition<K>>;
}

export interface TwoDimensionalAggregationDataType {
  type: "twoDimensionalAggregation";
  twoDimensionalAggregation: TwoDimensionalQueryAggregationDefinition;
}

export interface ThreeDimensionalAggregationDataType {
  type: "threeDimensionalAggregation";
  threeDimensionalAggregation: ThreeDimensionalQueryAggregationDefinition;
}

export type AggregationKeyDataType =
  | SimpleAggregationKeyDataType
  | RangeAggregationKeyDataType;

export interface SimpleAggregationKeyDataType {
  keyType: "boolean" | "string";
}

export interface RangeAggregationKeyDataType {
  keyType: "range";
  keySubtype: "date" | "double" | "integer" | "timestamp";
}

export type TwoDimensionalQueryAggregationDefinition =
  & AggregationKeyDataType
  & { valueType: "date" | "double" | "timestamp" };

export type ThreeDimensionalQueryAggregationDefinition =
  & AggregationKeyDataType
  & {
    valueType: TwoDimensionalQueryAggregationDefinition;
  };
