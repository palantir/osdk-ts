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

import type { DisplayName } from "@osdk/foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type AggregationKeyType =
  | ({ type: "date" } & DateType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "string" } & StringType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "range" } & AggregationRangeType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * A union of all the types supported by query aggregation ranges.
 *
 * Log Safety: UNSAFE
 */
export type AggregationRangeSubType =
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * Log Safety: UNSAFE
 */
export interface AggregationRangeType {
  subType: AggregationRangeSubType;
}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type AggregationValueType =
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * The name of the Query in the API.
 *
 * Log Safety: UNSAFE
 */
export type ApiName = LooselyBrandedString<"ApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface ArrayType {
  subType: DataType;
}

/**
 * Log Safety: SAFE
 */
export interface AttachmentType {}

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * A union of all the types supported by Ontology Query parameters or outputs.
 *
 * Log Safety: UNSAFE
 */
export type DataType =
  | ({ type: "date" } & DateType)
  | ({ type: "struct" } & StructType)
  | ({ type: "set" } & SetType)
  | ({ type: "string" } & StringType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "threeDimensionalAggregation" } & ThreeDimensionalAggregation)
  | ({ type: "union" } & UnionType)
  | ({ type: "float" } & FloatType)
  | ({ type: "long" } & LongType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "unsupported" } & UnsupportedType)
  | ({ type: "attachment" } & AttachmentType)
  | ({ type: "null" } & NullType)
  | ({ type: "array" } & ArrayType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "twoDimensionalAggregation" } & TwoDimensionalAggregation)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "timestamp" } & TimestampType);

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
| Object Set                  | string OR the object set definition                   | ri.object-set.main.versioned-object-set.h13274m8-23f5-431c-8aee-a4554157c57z|
| Ontology Object Reference   | JSON encoding of the object's primary key             | 10033123 or "EMP1234"                                                     |
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
 * Log Safety: SAFE
 */
export interface DateType {}

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryRequest {
  parameters: Record<ParameterId, DataValue>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryResponse {
  value: DataValue;
}

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

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
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
 * Log Safety: SAFE
 */
export interface NullType {}

/**
   * The name of the object type in the API in camelCase format. To find the API name for your Object Type, use the
List object types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ObjectTypeApiName = LooselyBrandedString<"ObjectTypeApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectSetType {
  objectApiName?: ObjectTypeApiName;
  objectTypeApiName?: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectType {
  objectApiName: ObjectTypeApiName;
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Details about a parameter of a query.
 *
 * Log Safety: UNSAFE
 */
export interface Parameter {
  description?: string;
  dataType: DataType;
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
  apiName: ApiName;
  description?: string;
  displayName?: DisplayName;
  parameters: Record<ParameterId, Parameter>;
  output: DataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * Log Safety: UNSAFE
 */
export interface SetType {
  subType: DataType;
}

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * Log Safety: UNSAFE
 */
export interface StructField {
  name: StructFieldName;
  fieldType: DataType;
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
export interface StructType {
  fields: Array<StructField>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ThreeDimensionalAggregation {
  keyType: AggregationKeyType;
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
  keyType: AggregationKeyType;
  valueType: AggregationValueType;
}

/**
 * Log Safety: UNSAFE
 */
export interface UnionType {
  unionTypes: Array<DataType>;
}

/**
 * Log Safety: UNSAFE
 */
export interface UnsupportedType {
  unsupportedType: string;
}
