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

export interface StringType {
  type: "string";
  string: {};
}

export interface RidType {
  type: "rid";
  rid: {};
}

export interface DateTimeType {
  type: "datetime";
  datetime: {};
}

export interface IntegerType {
  type: "integer";
  integer: {};
}

export interface DoubleType {
  type: "double";
  double: {};
}

export interface UUIDType {
  type: "uuid";
  uuid: {};
}

export interface AnyType {
  type: "any";
  any: {};
}

export interface BooleanType {
  type: "boolean";
  boolean: {};
}

export interface LongType {
  type: "long";
  long: {};
}

export type PrimitiveType =
  | StringType
  | RidType
  | DateTimeType
  | IntegerType
  | BooleanType
  | DoubleType
  | UUIDType
  | LongType
  | AnyType;
