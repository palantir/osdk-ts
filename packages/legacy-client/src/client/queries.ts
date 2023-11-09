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
  ThinClient,
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
import { executeQuery } from "../ontology-runtime/ontologyProvider/calls/executeQuery";
import type { ObjectSet } from "./interfaces";
import type { OsdkLegacyOntologyObject } from "./OsdkObject";
import type { IsEmptyRecord } from "./utils";

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

type OptionalQueryParameters<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = {
  [P in keyof QueryParameters<O, Q>]:
    QueryParameters<O, Q>[P]["dataType"] extends { nullable: true }
      ? QueryParameters<O, Q>[P]
      : never;
};

type RequiredQueryParameters<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
> = {
  [P in keyof QueryParameters<O, Q>]:
    QueryParameters<O, Q>[P]["dataType"] extends { nullable: true } ? never
      : QueryParameters<O, Q>[P];
};

type QueryArgs<O extends OntologyDefinition<any>, Q extends QueryNamesFrom<O>> =
  & {
    [P in keyof RequiredQueryParameters<O, Q>]: QueryDataType<
      O,
      QueryParameters<O, Q>[P]["dataType"]
    >;
  }
  & {
    [P in keyof OptionalQueryParameters<O, Q>]?: QueryDataType<
      O,
      QueryParameters<O, Q>[P]["dataType"]
    >;
  };

export type QueryNamesFrom<O extends OntologyDefinition<any>> =
  keyof O["queries"];

type OptionalStructParameters<
  S extends Record<string, QueryDataTypeDefinition>,
> = {
  [P in keyof S]: S[P]["nullable"] extends true ? S[P] : never;
};

type RequiredStructParameters<
  S extends Record<string, QueryDataTypeDefinition>,
> = {
  [P in keyof S]: S[P]["nullable"] extends true ? never : S[P];
};

type QueryDataType<
  O extends OntologyDefinition<any>,
  D extends QueryDataTypeDefinition,
> = D["multiplicity"] extends true ? Array<QueryDataTypeBase<O, D["type"]>>
  : QueryDataTypeBase<O, D["type"]>;

type QueryDataTypeBase<
  O extends OntologyDefinition<any>,
  T extends QueryDataType<O, any>,
> = T extends keyof ValidBaseQueryDataTypes ? ValidBaseQueryDataTypes[T]
  : T extends ObjectQueryDataType<infer K> ? OsdkLegacyOntologyObject<O, K>
  : T extends ObjectSetQueryDataType<infer K>
    ? ObjectSet<OsdkLegacyOntologyObject<O, K>>
  : T extends SetQueryDataType
    ? Set<QueryDataTypeBase<O, QueryDataTypeBase<O, T["set"]>>>
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
  : T extends StructQueryDataType ?
      & {
        [S in keyof RequiredStructParameters<T["struct"]>]: QueryDataTypeBase<
          O,
          T["struct"][S]
        >;
      }
      & {
        [S in keyof OptionalStructParameters<T["struct"]>]?: QueryDataTypeBase<
          O,
          T["struct"][S]
        >;
      }
  : T extends UnionQueryDataType ? QueryDefinitionArrayToUnion<O, T["union"]>
  : never;

type QueryDefinitionArrayToUnion<
  O extends OntologyDefinition<any>,
  T extends ReadonlyArray<QueryDataTypeDefinition>,
> = T extends ReadonlyArray<infer U>
  ? U extends QueryDataTypeDefinition ? QueryDataType<O, U> : never
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

export function createQueryProxy<O extends OntologyDefinition<any>>(
  client: ThinClient<O>,
): Queries<O> {
  return new Proxy({}, {
    get(_target, q: QueryNamesFrom<O> & string, _receiver) {
      const queryDefinition = client.ontology.queries[q];
      if (queryDefinition) {
        const hasParams = Object.keys(queryDefinition.parameters).length > 0;

        if (hasParams) {
          return async function(
            params: QueryParameters<O, typeof q>,
          ): Promise<WrappedQueryReturnType<O, typeof q>> {
            return executeQuery(client, q, params);
          };
        } else {
          return async function(): Promise<
            WrappedQueryReturnType<O, typeof q>
          > {
            return executeQuery(client, q);
          };
        }
      }

      return undefined;
    },
  }) as Queries<O>;
}
