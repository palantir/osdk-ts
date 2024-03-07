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
  type: "query";
  apiName: Q;
  description?: string;
  displayName?: string;
  version: string;
  parameters: Record<string, QueryParameterDefinition<K>>;
  output: QueryDataTypeDefinition<K>;
}

export type QueryParameterDefinition<K extends string> = {
  description?: string;
} & QueryDataTypeDefinition<K>;

export type QueryDataTypeDefinition<K extends string> =
  | PrimitiveDataType
  | ObjectQueryDataType<K>
  | ObjectSetQueryDataType<K>
  | SetQueryDataType<K>
  | UnionQueryDataType<K>
  | StructQueryDataType<K>
  | TwoDimensionalAggregationDataType
  | ThreeDimensionalAggregationDataType;

export type BaseQueryDataTypeDefinition<T extends string> = {
  multiplicity?: boolean;
  nullable?: boolean;
  type: T;
};

export type WireQueryDataTypes =
  | "double"
  | "float"
  | "integer"
  | "long"
  | "boolean"
  | "string"
  | "date"
  | "timestamp"
  | "attachment";

export type PrimitiveDataType<
  Q extends WireQueryDataTypes = WireQueryDataTypes,
> = BaseQueryDataTypeDefinition<Q>;

export interface ObjectQueryDataType<K extends string>
  extends BaseQueryDataTypeDefinition<"object">
{
  object: K;
}

export interface ObjectSetQueryDataType<K extends string>
  extends BaseQueryDataTypeDefinition<"objectSet">
{
  objectSet: K;
}

export interface SetQueryDataType<K extends string>
  extends BaseQueryDataTypeDefinition<"set">
{
  set: QueryDataTypeDefinition<K>;
}

export interface UnionQueryDataType<K extends string>
  extends BaseQueryDataTypeDefinition<"union">
{
  union: ReadonlyArray<QueryDataTypeDefinition<K>>;
}

export interface StructQueryDataType<K extends string>
  extends BaseQueryDataTypeDefinition<"struct">
{
  struct: Record<string, QueryDataTypeDefinition<K>>;
}

export interface TwoDimensionalAggregationDataType
  extends BaseQueryDataTypeDefinition<"twoDimensionalAggregation">
{
  twoDimensionalAggregation: TwoDimensionalQueryAggregationDefinition;
}

export interface ThreeDimensionalAggregationDataType
  extends BaseQueryDataTypeDefinition<"threeDimensionalAggregation">
{
  threeDimensionalAggregation: ThreeDimensionalQueryAggregationDefinition;
}

export type AggregationKeyDataType<V = any> =
  | SimpleAggregationKeyDataType<V>
  | RangeAggregationKeyDataType<V>;

export interface SimpleAggregationKeyDataType<V = any> {
  keyType: "boolean" | "string";
  valueType: V;
}

export interface RangeAggregationKeyDataType<V = any> {
  keyType: "range";
  keySubtype: "date" | "double" | "integer" | "timestamp";
  valueType: V;
}

export type TwoDimensionalQueryAggregationDefinition = AggregationKeyDataType<
  "date" | "double" | "timestamp"
>;

export type ThreeDimensionalQueryAggregationDefinition = AggregationKeyDataType<
  TwoDimensionalQueryAggregationDefinition
>;
