/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/**/
import type { InputName as _execution_api_InputName } from "../__components.js";
import type { Value as _execution_api_Value } from "../__components.js";
export interface AnonymousCustomType {
  fields: Record<CustomTypeFieldName, DataType>;
}
export interface BooleanType {}
export type CustomTypeFieldName = string;
export interface DataType_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface DataType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface DataType_long {
  type: "long";
  long: LongType;
}

export interface DataType_float {
  type: "float";
  float: FloatType;
}

export interface DataType_double {
  type: "double";
  double: DoubleType;
}

export interface DataType_string {
  type: "string";
  string: StringType;
}

export interface DataType_date {
  type: "date";
  date: DateType;
}

export interface DataType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface DataType_list {
  type: "list";
  list: ListType;
}

export interface DataType_set {
  type: "set";
  set: SetType;
}

export interface DataType_map {
  type: "map";
  map: MapType;
}

export interface DataType_optionalType {
  type: "optionalType";
  optionalType: OptionalType;
}

export interface DataType_anonymousCustomType {
  type: "anonymousCustomType";
  anonymousCustomType: AnonymousCustomType;
}

export interface DataType_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateType;
}

export interface DataType_union {
  type: "union";
  union: UnionType;
}
export type DataType =
  | DataType_boolean
  | DataType_integer
  | DataType_long
  | DataType_float
  | DataType_double
  | DataType_string
  | DataType_date
  | DataType_timestamp
  | DataType_list
  | DataType_set
  | DataType_map
  | DataType_optionalType
  | DataType_anonymousCustomType
  | DataType_indeterminate
  | DataType_union;

export interface DateType {}
export interface DoubleType {}
/**
 * The function's return value will be automatically stringified with JSON.stringify.
 */
export interface EnforceStringType {}
/**
 * A single file in the function's codebase.
 * The path should be relative to the function's root.
 * The content must follow the requirements of the specified runtime.
 * For example, in the TypeScript runtime, a function might include:
 * - "index.ts" for the entry point
 * - "utils/helper.ts" for utility functions
 * - "types/index.ts" for type definitions
 */
export interface File {
  content: string;
  path: string;
}
export interface FloatType {}
export interface FunctionOutputType_single {
  type: "single";
  single: SingleOutputType;
}

export interface FunctionOutputType_enforceString {
  type: "enforceString";
  enforceString: EnforceStringType;
}
/**
 * Specifies the expected output type of the function.
 */
export type FunctionOutputType =
  | FunctionOutputType_single
  | FunctionOutputType_enforceString;

/**
 * Represents a type that cannot be determined at compile time.
 * This is used to indicate that the type is unknown or indeterminate.
 * Sometimes, while authoring a function, the type of a value is not known,
 * but we expect it to be a specific type at runtime.
 */
export interface IndeterminateType {}
export interface InferOutputTypeFailure_syntaxError {
  type: "syntaxError";
  syntaxError: SyntaxError;
}

export interface InferOutputTypeFailure_typeCheckError {
  type: "typeCheckError";
  typeCheckError: TypeCheckError;
}

export interface InferOutputTypeFailure_unsupportedTypeError {
  type: "unsupportedTypeError";
  unsupportedTypeError: UnsupportedTypeError;
}
/**
 * Contains information about why type inference failed.
 */
export type InferOutputTypeFailure =
  | InferOutputTypeFailure_syntaxError
  | InferOutputTypeFailure_typeCheckError
  | InferOutputTypeFailure_unsupportedTypeError;

/**
 * Request to analyze a TypeScript function and infer its return type.
 * The function is specified by its code files, with index.ts serving as the entry point.
 * Parameters provide type information for variables that will be available to the function.
 */
export interface InferOutputTypeRequest {
  files: Array<File>;
  parameters: Record<_execution_api_InputName, DataType>;
}
export interface InferOutputTypeResponse_success {
  type: "success";
  success: InferOutputTypeSuccess;
}

export interface InferOutputTypeResponse_failed {
  type: "failed";
  failed: InferOutputTypeFailure;
}
/**
 * Response from the inferOutputType endpoint.
 * Returns either a success with the inferred output type or a failure with detailed error information.
 */
export type InferOutputTypeResponse =
  | InferOutputTypeResponse_success
  | InferOutputTypeResponse_failed;

/**
 * Contains the successfully inferred output type of the analyzed function.
 */
export interface InferOutputTypeSuccess {
  outputType: DataType;
}
export interface IntegerType {}
/**
 * Request to execute a function provided interactively by the user.
 * The function is specified by its code files. Each runtime will have its own requirements.
 * For example, in the TypeScript runtime, the entry point is always expected to be "index.ts".
 */
export interface InteractiveExecuteFunctionRequest {
  files: Array<File>;
  output: FunctionOutputType;
  parameters: Record<_execution_api_InputName, _execution_api_Value>;
}
export interface ListType {
  elementsType: DataType;
}
export interface LongType {}
export interface MapType {
  keysType: DataType;
  valuesType: DataType;
}
export interface OptionalType {
  wrappedType: DataType;
}
/**
 * Represents a specific line and column in a file.
 */
export interface PositionInFile {
  column: number;
  line: number;
}
export interface SetType {
  elementsType: DataType;
}
/**
 * Specifies a single output type for the function.
 * The function's return value must match this type.
 */
export interface SingleOutputType {
  dataType: DataType;
}
/**
 * Location in source code where an error occurred, including start and end positions.
 */
export interface SourceLocation {
  end: PositionInFile;
  file: string;
  start: PositionInFile;
}
export interface StringType {}
/**
 * The function code contains syntax errors that prevented compilation.
 */
export interface SyntaxError {
  location?: SourceLocation | null | undefined;
  message: string;
}
export interface TimestampType {}
/**
 * The function code contains type errors detected during static analysis.
 */
export interface TypeCheckError {
  location?: SourceLocation | null | undefined;
  message: string;
}
/**
 * Represents a type that is a union of multiple types.
 * This is used to indicate that the type is one of the types in the union.
 * At least currently, we support unions only while authoring an interactive function.
 * The runtime will not return a union type, and will only return a single type.
 * We hope to lift this restriction in the future.
 */
export interface UnionType {
  types: Array<DataType>;
}
/**
 * The function returns a type that can't be represented in the DataType system,
 * such as intersection types, or complex generics. Types that aren't supported by the
 * runtime but are expressable as DataTypes will not result in this error and the caller
 * is responsible for handling that type. This is to allow each caller to allow or
 * reject the types they support.
 */
export interface UnsupportedTypeError {
  location?: SourceLocation | null | undefined;
  message: string;
  typeKind: string;
}
