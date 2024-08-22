/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  ObjectQueryDataType,
  ObjectSetQueryDataType,
  QueryDataTypeDefinition,
  QueryDefinition,
} from "@osdk/api";
import type {
  DataValueClientToWire,
  DataValueWireToClient,
  OsdkBase,
  QueryParam,
  QueryResult,
} from "@osdk/client.api";
import type { PartialByNotStrict } from "../util/partialBy.js";

export type QuerySignatureFromDef<T extends QueryDefinition<any, any, any>> = {
  executeFunction: NonNullable<T["__OsdkQueryType"]> extends never
    ? QuerySignature<T>
    : NonNullable<T["__OsdkQueryType"]>;
};

export type QuerySignature<T extends QueryDefinition<any, any, any>> =
  keyof T["parameters"] extends never
    ? () => Promise<QueryReturnType<T["output"]>>
    : (
      params: QueryParameterType<T["parameters"]>,
    ) => Promise<QueryReturnType<T["output"]>>;

export type QueryParameterType<
  T extends Record<any, QueryDataTypeDefinition<any, any>>,
> = PartialByNotStrict<NotOptionalParams<T>, OptionalQueryParams<T>>;

export type QueryReturnType<T extends QueryDataTypeDefinition<any, any>> =
  T extends ObjectQueryDataType<any, infer TTargetType>
    ? QueryResult.ObjectType<TTargetType>
    : T extends ObjectSetQueryDataType<any, infer TTargetType>
      ? QueryResult.ObjectSetType<TTargetType>
    : T["type"] extends keyof DataValueWireToClient
      ? QueryResult.PrimitiveType<T["type"]>
    : never;

type OptionalQueryParams<
  T extends Record<any, QueryDataTypeDefinition<any, any>>,
> = {
  [K in keyof T]: T[K] extends { nullable: true } ? never : K;
}[keyof T];

type NotOptionalParams<
  T extends Record<any, QueryDataTypeDefinition<any, any>>,
> = {
  [K in keyof T]: MaybeArrayType<T[K]>;
};

type MaybeArrayType<T extends QueryDataTypeDefinition<any, any>> =
  T["multiplicity"] extends true ? ReadonlyArray<QueryBaseType<T>>
    : QueryBaseType<T>;

type QueryBaseType<T extends QueryDataTypeDefinition<any, any>> = T extends
  ObjectQueryDataType<any, infer TTargetType>
  ? QueryParam.ObjectType<TTargetType>
  : T extends ObjectSetQueryDataType<any, infer TTargetType>
    ? QueryParam.ObjectSetType<TTargetType>
  : T["type"] extends keyof DataValueClientToWire
    ? QueryParam.PrimitiveType<T["type"]>
  : never;
