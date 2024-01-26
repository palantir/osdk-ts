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
  AggregationKeyDataType,
  ObjectQueryDataType,
  ObjectSetQueryDataType,
  OntologyDefinition,
  PrimitiveDataType,
  QueryDataTypeDefinition,
  RangeAggregationKeyDataType,
  SetQueryDataType,
  SimpleAggregationKeyDataType,
  StructQueryDataType,
  ThreeDimensionalAggregationDataType,
  TwoDimensionalAggregationDataType,
  UnionQueryDataType,
} from "@osdk/api";

import type {
  LocalDate,
  QueryResponse,
  ThreeDimensionalAggregation,
  Timestamp,
  TwoDimensionalAggregation,
} from "./baseTypes";
import type { QueryError } from "./errors";
import type { ObjectSet } from "./interfaces";
import type { Range } from "./objectSets/aggregations";
import type { OsdkLegacyObjectFrom } from "./OsdkLegacyObject";
import type { Result } from "./Result";
import type { IsEmptyRecord } from "./utils";
import type { NonNullableKeys, NullableKeys } from "./utils/NullableKeys";

export type Queries<O extends OntologyDefinition<any>> = {
  [Q in keyof O["queries"]]: IsEmptyRecord<QueryParameters<O, Q>> extends true
    ? () => WrappedQueryReturnType<O, Q>
    : (param: QueryArgs<O, Q>) => WrappedQueryReturnType<O, Q>;
};

export type WrappedQueryReturnType<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = Promise<Result<QueryResponse<QueryReturnType<O, Q>>, QueryError>>;

export type QueryReturnType<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = QueryDataType<O, QueryDefinition<O, Q>["output"], true>;

export type QueryDefinition<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = O["queries"][Q];

export type QueryParameters<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = QueryDefinition<O, Q>["parameters"];

export type NullableArgKeys<T> = {
  [K in keyof T]: T[K] extends { nullable: true } ? K : never;
}[keyof T];

export type NonNullableArgKeys<T> = {
  [K in keyof T]: T[K] extends { nullable: true } ? never : K;
}[keyof T];

export type QueryArgs<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> =
  & {
    [P in NonNullableArgKeys<QueryParameters<O, Q>>]: QueryDataType<
      O,
      QueryParameters<O, Q>[P],
      false
    >;
  }
  & {
    [P in NullableArgKeys<QueryParameters<O, Q>>]?: QueryDataType<
      O,
      QueryParameters<O, Q>[P],
      false
    >;
  };

export type QueryNamesFrom<O extends OntologyDefinition<any>> =
  keyof O["queries"];

export type QueryDataType<
  O extends OntologyDefinition<any>,
  D extends QueryDataTypeDefinition<any>,
  T_ReturnValue extends boolean,
> = D["multiplicity"] extends true
  ? Array<QueryDataTypeBase<O, D, T_ReturnValue>>
  : QueryDataTypeBase<O, D, T_ReturnValue>;

export interface ValidLegacyBaseQueryDataTypes {
  double: number;
  float: number;
  integer: number;
  long: number;
  boolean: boolean;
  string: string;
  date: LocalDate;
  timestamp: Timestamp;
  attachment: any; // TODO surely we can be more strict here
}

export type QueryDataTypeBase<
  O extends OntologyDefinition<any>,
  T extends QueryDataType<O, any, R>,
  R extends boolean,
> = T extends PrimitiveDataType<infer X> ? ValidLegacyBaseQueryDataTypes[X]
  : T extends ObjectQueryDataType<any>
    ? R extends true ? OsdkLegacyObjectFrom<O, T["object"]>
    :
      | OsdkLegacyObjectFrom<O, T["object"]>
      | OsdkLegacyObjectFrom<O, T["object"]>["__primaryKey"]
  : T extends ObjectSetQueryDataType<infer K>
    ? ObjectSet<OsdkLegacyObjectFrom<O, K>>
  : T extends SetQueryDataType<any> ? Set<QueryDataType<O, T["set"], R>>
  : T extends TwoDimensionalAggregationDataType ? TwoDimensionalAggregation<
      QueryAggregationKey<T["twoDimensionalAggregation"]>,
      QueryAggregationValue<T["twoDimensionalAggregation"]["valueType"]>
    >
  : T extends ThreeDimensionalAggregationDataType ? ThreeDimensionalAggregation<
      QueryAggregationKey<T["threeDimensionalAggregation"]>,
      QueryAggregationKey<T["threeDimensionalAggregation"]["valueType"]>,
      QueryAggregationValue<
        T["threeDimensionalAggregation"]["valueType"]["valueType"]
      >
    >
  : T extends StructQueryDataType<any> ?
      & {
        [S in NonNullableKeys<T["struct"]>]: QueryDataType<
          O,
          T["struct"][S],
          R
        >;
      }
      & {
        [S in NullableKeys<T["struct"]>]?: QueryDataType<
          O,
          T["struct"][S],
          R
        >;
      }
  : T extends UnionQueryDataType<any>
    ? QueryDefinitionArrayToUnion<O, T["union"], R>
  : never;

export type QueryDefinitionArrayToUnion<
  O extends OntologyDefinition<any>,
  T extends ReadonlyArray<QueryDataTypeDefinition<any>>,
  R extends boolean,
> = T extends ReadonlyArray<infer U>
  ? U extends QueryDataTypeDefinition<any> ? QueryDataType<O, U, R> : never
  : never;

export type QueryAggregationKey<K extends AggregationKeyDataType> = K extends
  SimpleAggregationKeyDataType ? SimpleAggregationKeyTypes[K["keyType"]]
  : K extends RangeAggregationKeyDataType
    ? Range<RangeAggregationKeySubtypes[K["keySubtype"]]>
  : never;

export type QueryAggregationValue<V extends keyof AggregationValueTypes> =
  AggregationValueTypes[V];

export interface SimpleAggregationKeyTypes {
  boolean: boolean;
  string: string;
}

export interface RangeAggregationKeySubtypes {
  date: LocalDate;
  double: number;
  integer: number;
  timestamp: Timestamp;
}

interface AggregationValueTypes {
  double: number;
  date: LocalDate;
  timestamp: Timestamp;
}
