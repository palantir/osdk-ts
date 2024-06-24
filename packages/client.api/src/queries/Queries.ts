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
  OntologyDefinition,
  QueryDataTypeDefinition,
  QueryDefinition,
} from "@osdk/api";
import type {
  BaseObjectSet,
  DataValueClientToWire,
  NOOP,
  OsdkBase,
  OsdkObjectPrimaryKeyType,
} from "../index.js";
import type { PartialByNotStrict } from "../util/PartialBy.js";

export type Queries<O extends OntologyDefinition<any>> = {
  [K in keyof O["queries"]]: QuerySignatureFromDef<O["queries"][K]>;
};

export type QuerySignatureFromDef<T extends QueryDefinition<any, any>> =
  keyof T["parameters"] extends never
    ? () => Promise<QueryReturnType<T["output"]>>
    : (
      params: QueryParameterType<T["parameters"]>,
    ) => Promise<QueryReturnType<T["output"]>>;

export type QueryParameterType<
  T extends Record<any, QueryDataTypeDefinition<any, any>>,
> = NOOP<PartialByNotStrict<NotOptionalParams<T>, OptionalQueryParams<T>>>;

export type QueryReturnType<T extends QueryDataTypeDefinition<any, any>> =
  T["type"] extends keyof DataValueClientToWire
    ? DataValueClientToWire[T["type"]]
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
  T["multiplicity"] extends true ? Array<BaseType<T>>
    : BaseType<T>;

type BaseType<T extends QueryDataTypeDefinition<any, any>> = T extends
  ObjectQueryDataType<any, infer TTargetType>
  ? OsdkBase<TTargetType> | OsdkObjectPrimaryKeyType<TTargetType>
  : T extends ObjectSetQueryDataType<any, infer TTargetType>
    ? BaseObjectSet<TTargetType>
  : T["type"] extends keyof DataValueClientToWire
    ? DataValueClientToWire[T["type"]]
  : never;
// type BaseType<T extends QueryDataTypeDefinition<any>> = T extends
//   ObjectQueryDataType<any> | ObjectSetQueryDataType<any> ? never
//   : T["type"] extends keyof DataValueClientToWire
//     ? DataValueClientToWire[T["type"]]
//   : never;
