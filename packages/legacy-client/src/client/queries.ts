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
  QueryDataTypeDefinition,
  RangeAggregationKeyDataType,
  SetQueryDataType,
  SimpleAggregationKeyDataType,
  StructQueryDataType,
  ThreeDimensionalAggregationDataType,
  TwoDimensionalAggregationDataType,
  UnionQueryDataType,
  ValidBaseQueryDataTypes,
} from "@osdk/api";
import type {
  LocalDate,
  QueryError,
  QueryResponse,
  Range,
  Result,
  ThreeDimensionalAggregation,
  Timestamp,
  TwoDimensionalAggregation,
} from "../ontology-runtime";
import type { ObjectSet } from "./interfaces";
import type { OsdkLegacyObjectFrom } from "./OsdkObject";
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
> = QueryDataType<O, QueryDefinition<O, Q>["output"]>;

type QueryDefinition<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = O["queries"][Q];

export type QueryParameters<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = QueryDefinition<O, Q>["parameters"];

export type NullableArgKeys<T> = {
  [K in keyof T]: T[K] extends { dataType: { nullable: true } } ? K : never;
}[keyof T];

export type NonNullableArgKeys<T> = {
  [K in keyof T]: T[K] extends { dataType: { nullable: true } } ? never : K;
}[keyof T];

type QueryArgs<O extends OntologyDefinition<any>, Q extends QueryNamesFrom<O>> =
  & {
    [P in NonNullableArgKeys<QueryParameters<O, Q>>]: QueryDataType<
      O,
      QueryParameters<O, Q>[P]["dataType"]
    >;
  }
  & {
    [P in NullableArgKeys<QueryParameters<O, Q>>]?: QueryDataType<
      O,
      QueryParameters<O, Q>[P]["dataType"]
    >;
  };

export type QueryNamesFrom<O extends OntologyDefinition<any>> =
  keyof O["queries"];

type QueryDataType<
  O extends OntologyDefinition<any>,
  D extends QueryDataTypeDefinition<any>,
> = D["multiplicity"] extends true ? Array<QueryDataTypeBase<O, D["type"]>>
  : QueryDataTypeBase<O, D["type"]>;

interface ValidLegacyBaseQueryDataTypes {
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

type QueryDataTypeBase<
  O extends OntologyDefinition<any>,
  T extends QueryDataType<O, any>,
> = T extends keyof ValidBaseQueryDataTypes ? ValidLegacyBaseQueryDataTypes[T]
  : T extends ObjectQueryDataType<any> ? OsdkLegacyObjectFrom<O, T["object"]>
  : T extends ObjectSetQueryDataType<infer K>
    ? ObjectSet<OsdkLegacyObjectFrom<O, K>>
  : T extends SetQueryDataType<any> ? Set<QueryDataType<O, T["set"]>>
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
          T["struct"][S]
        >;
      }
      & {
        [S in NullableKeys<T["struct"]>]?: QueryDataType<
          O,
          T["struct"][S]
        >;
      }
  : T extends UnionQueryDataType<any>
    ? QueryDefinitionArrayToUnion<O, T["union"]>
  : never;

type QueryDefinitionArrayToUnion<
  O extends OntologyDefinition<any>,
  T extends ReadonlyArray<QueryDataTypeDefinition<any>>,
> = T extends ReadonlyArray<infer U>
  ? U extends QueryDataTypeDefinition<any> ? QueryDataType<O, U> : never
  : never;

type QueryAggregationKey<K extends AggregationKeyDataType> = K extends
  SimpleAggregationKeyDataType ? SimpleAggregationKeyTypes[K["keyType"]]
  : K extends RangeAggregationKeyDataType
    ? Range<RangeAggregationKeySubtypes[K["keySubtype"]]>
  : never;

type QueryAggregationValue<V extends keyof AggregationValueTypes> =
  AggregationValueTypes[V];

interface SimpleAggregationKeyTypes {
  boolean: boolean;
  string: string;
}

interface RangeAggregationKeySubtypes {
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
