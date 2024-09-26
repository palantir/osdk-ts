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

import type * as _Core from "@osdk/foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * Represents the value of data in the following format. Note that these values can be nested, for example an array of structs.
| Type                        | JSON encoding                                         | Example                                                                       |
|-----------------------------|-------------------------------------------------------|-------------------------------------------------------------------------------|
| Array                       | array                                                 | ["alpha", "bravo", "charlie"]                                               |
| Attachment                  | string                                                | "ri.attachments.main.attachment.2f944bae-5851-4204-8615-920c969a9f2e"       |
| Boolean                     | boolean                                               | true                                                                        |
| Byte                        | number                                                | 31                                                                          |
| Date                        | ISO 8601 extended local date string                   | "2021-05-01"                                                                |
| Decimal                     | string                                                | "2.718281828"                                                               |
| Float                       | number                                                | 3.14159265                                                                  |
| Double                      | number                                                | 3.14159265                                                                  |
| Integer                     | number                                                | 238940                                                                      |
| Long                        | string                                                | "58319870951433"                                                            |
| Marking                     | string                                                | "MU"                                                                        |
| Null                        | null                                                  | null                                                                        |
| Set                         | array                                                 | ["alpha", "bravo", "charlie"]                                               |
| Short                       | number                                                | 8739                                                                        |
| String                      | string                                                | "Call me Ishmael"                                                           |
| Struct                      | JSON object                                           | {"name": "John Doe", "age": 42}                                             |
| TwoDimensionalAggregation   | JSON object                                           | {"groups": [{"key": "alpha", "value": 100}, {"key": "beta", "value": 101}]} |
| ThreeDimensionalAggregation | JSON object                                           | {"groups": [{"key": "NYC", "groups": [{"key": "Engineer", "value" : 100}]}]}|
| Timestamp                   | ISO 8601 extended offset date-time string in UTC zone | "2021-01-04T05:00:00Z"                                                      |
   *
   * Log Safety: UNSAFE
   */
export type DataValue = any;

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryResponse {
  value: DataValue;
}

/**
 * The unique resource identifier of a Function, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type FunctionRid = LooselyBrandedString<"FunctionRid">;

/**
   * The version of the given Function, written <major>.<minor>.<patch>-<tag>, where -<tag> is optional.
Examples: 1.2.3, 1.2.3-rc1.
   *
   * Log Safety: UNSAFE
   */
export type FunctionVersion = LooselyBrandedString<"FunctionVersion">;

/**
 * Log Safety: SAFE
 */
export interface GetByRidQueriesRequest {
  rid: FunctionRid;
}

/**
 * Details about a parameter of a query.
 *
 * Log Safety: UNSAFE
 */
export interface Parameter {
  description?: string;
  dataType: QueryDataType;
}

/**
   * The unique identifier of the parameter. Parameters are used as inputs when an action or query is applied.
Parameters can be viewed and managed in the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ParameterId = LooselyBrandedString<"ParameterId">;

/**
 * Log Safety: UNSAFE
 */
export interface Query {
  apiName: QueryApiName;
  description?: string;
  displayName?: _Core.DisplayName;
  parameters: Record<ParameterId, Parameter>;
  output: QueryDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationKeyType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "range" } & QueryAggregationRangeType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * A union of all the types supported by query aggregation ranges.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationRangeSubType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRangeType {
  subType: QueryAggregationRangeSubType;
}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationValueType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * The name of the Query in the API.
 *
 * Log Safety: UNSAFE
 */
export type QueryApiName = LooselyBrandedString<"QueryApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface QueryArrayType {
  subType: QueryDataType;
}

/**
 * A union of all the types supported by Query parameters or outputs.
 *
 * Log Safety: UNSAFE
 */
export type QueryDataType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "struct" } & QueryStructType)
  | ({ type: "set" } & QuerySetType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "threeDimensionalAggregation" } & ThreeDimensionalAggregation)
  | ({ type: "union" } & QueryUnionType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "attachment" } & _Core.AttachmentType)
  | ({ type: "null" } & _Core.NullType)
  | ({ type: "array" } & QueryArrayType)
  | ({ type: "twoDimensionalAggregation" } & TwoDimensionalAggregation)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Log Safety: UNSAFE
 */
export type QueryRuntimeErrorParameter = LooselyBrandedString<
  "QueryRuntimeErrorParameter"
>;

/**
 * Log Safety: UNSAFE
 */
export interface QuerySetType {
  subType: QueryDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryStructField {
  name: StructFieldName;
  fieldType: QueryDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryStructType {
  fields: Array<QueryStructField>;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryUnionType {
  unionTypes: Array<QueryDataType>;
}

/**
 * The name of a field in a Struct.
 *
 * Log Safety: UNSAFE
 */
export type StructFieldName = LooselyBrandedString<"StructFieldName">;

/**
 * Log Safety: UNSAFE
 */
export interface ThreeDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: TwoDimensionalAggregation;
}

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
 * Log Safety: UNSAFE
 */
export interface TwoDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: QueryAggregationValueType;
}
