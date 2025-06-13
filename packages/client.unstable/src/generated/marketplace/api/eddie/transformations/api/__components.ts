/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

/**
 * Parameter representing aggregation function operation on given input types.
 * Instance type: InstantiatedColumnExpression
 */
export interface AggregateExpressionParameterType {
  origin?: ParameterId | null | undefined;
  requiredOutputType: TypeReference;
}
/**
 * A decimal type describing a decimal with any precision/scale.
 */
export interface AnyDecimalType {
}
export interface AnyStructType {
}
export interface AnyType {
}
export interface ArrayLiteral {
  values: Array<LiteralParameter>;
}
export interface ArrayType {
  elementType: DataType;
}
export interface ArrayV2Type {
  elementType: ExplicitType;
}
export interface BinaryLiteral {
  value: string;
}
export interface BinaryType {
}
export interface BooleanLiteral {
  value: boolean;
}
export interface BooleanType {
}
export interface ByteType {
}
/**
 * This literal will be used as a column name and must match rules for column names.
 */
export interface ColumnNameLiteralConstraint {
}
/**
 * Definition type: ColumnPairParameterType
 */
export interface ColumnPairParameter {
  left: ColumnReferenceParameter;
  right: ColumnReferenceParameter;
}
/**
 * Instance type: ColumnPairParameter
 */
export interface ColumnPairParameterType {
  left: ColumnReferenceParameterType;
  right: ColumnReferenceParameterType;
}
export interface ColumnReferenceParameter {
  columnName: string;
}
/**
 * Parameter that represents column reference of a given type.
 * Instance type: ColumnReferenceParameter
 */
export interface ColumnReferenceParameterType {
  origin?: ParameterId | null | undefined;
  requiredType: TypeReference;
}
export interface CompositeInputParameterType_list {
  type: "list";
  list: ListParameterType;
}

export interface CompositeInputParameterType_set {
  type: "set";
  set: SetParameterType;
}
/**
 * Instance type: CompositeParameter
 */
export type CompositeInputParameterType =
  | CompositeInputParameterType_list
  | CompositeInputParameterType_set;

export interface CompositeParameter_list {
  type: "list";
  list: ListParameter;
}

export interface CompositeParameter_set {
  type: "set";
  set: SetParameter;
}
/**
 * Definition type: CompositeInputParameterType
 */
export type CompositeParameter =
  | CompositeParameter_list
  | CompositeParameter_set;

/**
 * Unions collections together to a list
 */
export interface ConcatAdapter {
  collections: Array<Parameter>;
}
export interface DatasetParameter {
  rid: string;
}
export interface DataType_array {
  type: "array";
  array: ArrayType;
}

export interface DataType_arrayV2 {
  type: "arrayV2";
  arrayV2: ArrayV2Type;
}

export interface DataType_binary {
  type: "binary";
  binary: BinaryType;
}

export interface DataType_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface DataType_byte {
  type: "byte";
  byte: ByteType;
}

export interface DataType_date {
  type: "date";
  date: DateType;
}

export interface DataType_decimal {
  type: "decimal";
  decimal: DecimalType;
}

export interface DataType_double {
  type: "double";
  double: DoubleType;
}

export interface DataType_float {
  type: "float";
  float: FloatType;
}

export interface DataType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface DataType_long {
  type: "long";
  long: LongType;
}

export interface DataType_map {
  type: "map";
  map: MapType;
}

export interface DataType_mapV2 {
  type: "mapV2";
  mapV2: MapV2Type;
}

export interface DataType_short {
  type: "short";
  short: ShortType;
}

export interface DataType_string {
  type: "string";
  string: StringType;
}

export interface DataType_struct {
  type: "struct";
  struct: StructType;
}

export interface DataType_structV2 {
  type: "structV2";
  structV2: StructV2Type;
}

export interface DataType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface DataType_any {
  type: "any";
  any: AnyType;
}

export interface DataType_anyDecimal {
  type: "anyDecimal";
  anyDecimal: AnyDecimalType;
}

export interface DataType_anyStruct {
  type: "anyStruct";
  anyStruct: AnyStructType;
}
export type DataType =
  | DataType_array
  | DataType_arrayV2
  | DataType_binary
  | DataType_boolean
  | DataType_byte
  | DataType_date
  | DataType_decimal
  | DataType_double
  | DataType_float
  | DataType_integer
  | DataType_long
  | DataType_map
  | DataType_mapV2
  | DataType_short
  | DataType_string
  | DataType_struct
  | DataType_structV2
  | DataType_timestamp
  | DataType_any
  | DataType_anyDecimal
  | DataType_anyStruct;

export interface DateLiteral {
  value: string;
}
export interface DatetimeLiteral {
  value: string;
}
export interface DateType {
}
/**
 * Value stored in string to preserve exact scale and value
 */
export interface DecimalLiteral {
  value: string;
}
export interface DecimalType {
  precision: number;
  scale: number;
}
export interface DeduplicateListAdapter {
  list: Parameter;
}
export type Direction = "ASCENDING" | "DESCENDING";
export interface DoubleLiteral {
  value: number | "NaN" | "Infinity" | "-Infinity";
}
export interface DoubleType {
}
export type EnumId = string;
export interface EnumParameter {
  value: string;
}
/**
 * Instance Type: EnumParameter
 */
export interface EnumParameterType {
  id?: EnumId | null | undefined;
  values: Array<EnumValueDescription>;
}
export interface EnumValueDescription {
  description?: string | null | undefined;
  displayName?: string | null | undefined;
  value: string;
}
/**
 * Set of types allowed for given expression
 */
export interface ExplicitType {
  types: Array<LogicalType>;
}
/**
 * Uniquely identifying name for expression
 */
export type ExpressionId = string;

/**
 * Expressions can have different behavior and this changes where they can be used.
 * Some expressions like `length(col)` operate on a row level. We call these column expressions.
 * Others like `max(col)` are aggregating and expressions like `rank(col)` can only be used in a window.
 */
export type ExpressionKind = "COLUMN" | "AGGREGATE" | "WINDOW" | "GENERATOR";
export interface ExpressionParameter_literal {
  type: "literal";
  literal: LiteralParameter;
}

export interface ExpressionParameter_column {
  type: "column";
  column: ColumnReferenceParameter;
}

export interface ExpressionParameter_columnExpression {
  type: "columnExpression";
  columnExpression: InstantiatedColumnExpression;
}
export type ExpressionParameter =
  | ExpressionParameter_literal
  | ExpressionParameter_column
  | ExpressionParameter_columnExpression;

/**
 * Parameter unifying literal, column references and column expressions.
 * Instance type: ExpressionParameter
 */
export interface ExpressionParameterType {
  acceptedExpressionKinds: Array<ExpressionKind>;
  aliasNotUsed?: boolean | null | undefined;
  origin?: ParameterId | null | undefined;
  requiredOutputType: TypeReference;
}
/**
 * Parameter representing an input containing files.
 * Instance type: DatasetParameter
 */
export interface FilesInputParameterType {
}
export interface FloatType {
}
/**
 * Parameter representing generator expression.
 * Instance type: InstantiatedColumnExpression
 */
export interface GeneratorExpressionParameterType {
  origin?: ParameterId | null | undefined;
  requiredOutputType: TypeReference;
}
/**
 * Describes an array of type references to allow generics
 */
export interface GenericArrayType {
  elementType: TypeReference;
}
/**
 * Describes a map of type references to allow generics
 */
export interface GenericMapType {
  keyType: TypeReference;
  valueType: TypeReference;
}
/**
 * Describes a struct element to allow generics
 */
export interface GenericStructElementType {
  name?: string | null | undefined;
  valueType: TypeReference;
}
/**
 * Describes a struct element to allow generics
 */
export interface GenericStructType {
  fields: Array<GenericStructElementType>;
}
export interface GetElementAtAdapter {
  index: number;
  input: Parameter;
}
export interface InputParameter {
  description?: string | null | undefined;
  displayName: string;
  isOptional: boolean;
  type: InputParameterType;
}
export interface InputParameterType_primitive {
  type: "primitive";
  primitive: PrimitiveInputParameterType;
}

export interface InputParameterType_composite {
  type: "composite";
  composite: CompositeInputParameterType;
}
/**
 * Instance type: Parameter
 */
export type InputParameterType =
  | InputParameterType_primitive
  | InputParameterType_composite;

/**
 * Definition type: ColumnExpression
 */
export interface InstantiatedColumnExpression {
  arguments: Record<ParameterId, Parameter>;
  displayName?: string | null | undefined;
  expressionId: ExpressionId;
  expressionVersion: Version;
  id: InstantiatedExpressionId;
}
export type InstantiatedExpressionId = string;
export type InstantiatedTransformId = string;

/**
 * Definition type: Window
 */
export interface InstantiatedWindow {
  arguments: Record<ParameterId, Parameter>;
  displayName?: string | null | undefined;
  id: InstantiatedWindowId;
  windowId: WindowId;
  windowVersion: Version;
}
export type InstantiatedWindowId = string;
export interface InstantiateTupleAdapter {
  left: Parameter;
  right: Parameter;
}
export interface IntegerLiteral {
  value: number;
}
export interface IntegerType {
}
export type JoinTypeParameter =
  | "INNER"
  | "LEFT_OUTER"
  | "FULL_OUTER"
  | "RIGHT_OUTER"
  | "SEMI"
  | "ANTI";

/**
 * Parameter representing join type, i.e. left, right, inner, etc.
 * Instance type: JoinParameterType
 */
export interface JoinTypeParameterType {
}
/**
 * Definition type: ListParameterType
 */
export interface ListParameter {
  elements: Array<PrimitiveParameter>;
}
/**
 * Instance type: ListParameter
 */
export interface ListParameterType {
  maxSize?: number | null | undefined;
  minSize?: number | null | undefined;
  subType: PrimitiveInputParameterType;
}
export interface ListToSetAdapter {
  input: Parameter;
}
export interface LiteralConstraint_columnName {
  type: "columnName";
  columnName: ColumnNameLiteralConstraint;
}
export type LiteralConstraint = LiteralConstraint_columnName;

export interface LiteralParameter_binary {
  type: "binary";
  binary: BinaryLiteral;
}

export interface LiteralParameter_boolean {
  type: "boolean";
  boolean: BooleanLiteral;
}

export interface LiteralParameter_datetime {
  type: "datetime";
  datetime: DatetimeLiteral;
}

export interface LiteralParameter_date {
  type: "date";
  date: DateLiteral;
}

export interface LiteralParameter_double {
  type: "double";
  double: DoubleLiteral;
}

export interface LiteralParameter_integer {
  type: "integer";
  integer: IntegerLiteral;
}

export interface LiteralParameter_long {
  type: "long";
  long: LongLiteral;
}

export interface LiteralParameter_decimal {
  type: "decimal";
  decimal: DecimalLiteral;
}

export interface LiteralParameter_string {
  type: "string";
  string: StringLiteral;
}

export interface LiteralParameter_array {
  type: "array";
  array: ArrayLiteral;
}

export interface LiteralParameter_map {
  type: "map";
  map: MapLiteral;
}

export interface LiteralParameter_null {
  type: "null";
  null: NullLiteral;
}
export type LiteralParameter =
  | LiteralParameter_binary
  | LiteralParameter_boolean
  | LiteralParameter_datetime
  | LiteralParameter_date
  | LiteralParameter_double
  | LiteralParameter_integer
  | LiteralParameter_long
  | LiteralParameter_decimal
  | LiteralParameter_string
  | LiteralParameter_array
  | LiteralParameter_map
  | LiteralParameter_null;

/**
 * Parameter that represents literal value of a given type.
 * Instance type: LiteralParameter
 */
export interface LiteralParameterType {
  additionalConstraints: Array<LiteralConstraint>;
  requiredType: TypeReference;
}
/**
 * Represents logical type with underpinning physical type that describes the storage of it
 */
export interface LogicalType {
  physicalType: DataType;
}
export interface LongLiteral {
  value: number;
}
export interface LongType {
}
/**
 * References a single input element of a map operation. This is the argument to the map function.
 */
export interface MapElementInput {
}
/**
 * Takes a collection (list, set) and maps every element according to ParameterAdapter
 */
export interface MapElementsAdapter {
  collection: Parameter;
  mapping: ParameterAdapter;
}
export interface MapEntry {
  key: LiteralParameter;
  value: LiteralParameter;
}
export interface MapLiteral {
  entries: Array<MapEntry>;
}
export interface MapType {
  keyType: DataType;
  valueType: DataType;
}
export interface MapV2Type {
  keyType: ExplicitType;
  valueType: ExplicitType;
}
export interface NullLiteral {
}
export interface Parameter_primitive {
  type: "primitive";
  primitive: PrimitiveParameter;
}

export interface Parameter_composite {
  type: "composite";
  composite: CompositeParameter;
}

export interface Parameter_reference {
  type: "reference";
  reference: ParameterReference;
}

export interface Parameter_adapter {
  type: "adapter";
  adapter: ParameterAdapter;
}
/**
 * Definition type: InputParameterType
 */
export type Parameter =
  | Parameter_primitive
  | Parameter_composite
  | Parameter_reference
  | Parameter_adapter;

export interface ParameterAdapter_identity {
  type: "identity";
  identity: ParameterId;
}

export interface ParameterAdapter_mapElements {
  type: "mapElements";
  mapElements: MapElementsAdapter;
}

export interface ParameterAdapter_instantiateExpression {
  type: "instantiateExpression";
  instantiateExpression: InstantiatedColumnExpression;
}

export interface ParameterAdapter_getElement {
  type: "getElement";
  getElement: GetElementAtAdapter;
}

export interface ParameterAdapter_listToSet {
  type: "listToSet";
  listToSet: ListToSetAdapter;
}

export interface ParameterAdapter_mapElementInput {
  type: "mapElementInput";
  mapElementInput: MapElementInput;
}

export interface ParameterAdapter_concat {
  type: "concat";
  concat: ConcatAdapter;
}

export interface ParameterAdapter_stringConcat {
  type: "stringConcat";
  stringConcat: StringConcatAdapter;
}

export interface ParameterAdapter_stringToColumn {
  type: "stringToColumn";
  stringToColumn: StringToColumnAdapter;
}

export interface ParameterAdapter_instantiateTuple {
  type: "instantiateTuple";
  instantiateTuple: InstantiateTupleAdapter;
}

export interface ParameterAdapter_deduplicateList {
  type: "deduplicateList";
  deduplicateList: DeduplicateListAdapter;
}
export type ParameterAdapter =
  | ParameterAdapter_identity
  | ParameterAdapter_mapElements
  | ParameterAdapter_instantiateExpression
  | ParameterAdapter_getElement
  | ParameterAdapter_listToSet
  | ParameterAdapter_mapElementInput
  | ParameterAdapter_concat
  | ParameterAdapter_stringConcat
  | ParameterAdapter_stringToColumn
  | ParameterAdapter_instantiateTuple
  | ParameterAdapter_deduplicateList;

/**
 * Name of a parameter in a given function or transformation
 */
export type ParameterId = string;

/**
 * Used to reference outer parameters in grouped transforms
 */
export interface ParameterReference {
  parameterId: ParameterId;
}
export interface PartitionedWindow {
  partitionBy: Array<string>;
  sortBy?: SortParameter | null | undefined;
}
export interface PreviewOutputParameter {
  outputParameterId: ParameterId;
}
export interface PrimitiveInputParameterType_literal {
  type: "literal";
  literal: LiteralParameterType;
}

export interface PrimitiveInputParameterType_tabular {
  type: "tabular";
  tabular: TabularInputParameterType;
}

export interface PrimitiveInputParameterType_files {
  type: "files";
  files: FilesInputParameterType;
}

export interface PrimitiveInputParameterType_column {
  type: "column";
  column: ColumnReferenceParameterType;
}

export interface PrimitiveInputParameterType_expression {
  type: "expression";
  expression: ExpressionParameterType;
}

export interface PrimitiveInputParameterType_window {
  type: "window";
  window: WindowParameterType;
}

export interface PrimitiveInputParameterType_windowV2 {
  type: "windowV2";
  windowV2: WindowParameterTypeV2;
}

export interface PrimitiveInputParameterType_sorting {
  type: "sorting";
  sorting: SortParameterType;
}

export interface PrimitiveInputParameterType_enum {
  type: "enum";
  enum: EnumParameterType;
}

export interface PrimitiveInputParameterType_regex {
  type: "regex";
  regex: RegexParameterType;
}

export interface PrimitiveInputParameterType_structLocator {
  type: "structLocator";
  structLocator: StructLocatorParameterType;
}

export interface PrimitiveInputParameterType_timeZone {
  type: "timeZone";
  timeZone: TimeZoneParameterType;
}

export interface PrimitiveInputParameterType_tuple {
  type: "tuple";
  tuple: TupleParameterType;
}

export interface PrimitiveInputParameterType_typeParam {
  type: "typeParam";
  typeParam: TypeParameterType;
}

export interface PrimitiveInputParameterType_rid {
  type: "rid";
  rid: ResourceIdentifierParameterType;
}
/**
 * Instance type: PrimitiveParameter
 */
export type PrimitiveInputParameterType =
  | PrimitiveInputParameterType_literal
  | PrimitiveInputParameterType_tabular
  | PrimitiveInputParameterType_files
  | PrimitiveInputParameterType_column
  | PrimitiveInputParameterType_expression
  | PrimitiveInputParameterType_window
  | PrimitiveInputParameterType_windowV2
  | PrimitiveInputParameterType_sorting
  | PrimitiveInputParameterType_enum
  | PrimitiveInputParameterType_regex
  | PrimitiveInputParameterType_structLocator
  | PrimitiveInputParameterType_timeZone
  | PrimitiveInputParameterType_tuple
  | PrimitiveInputParameterType_typeParam
  | PrimitiveInputParameterType_rid;

export interface PrimitiveParameter_column {
  type: "column";
  column: ColumnReferenceParameter;
}

export interface PrimitiveParameter_columnExpression {
  type: "columnExpression";
  columnExpression: InstantiatedColumnExpression;
}

export interface PrimitiveParameter_columnPair {
  type: "columnPair";
  columnPair: ColumnPairParameter;
}

export interface PrimitiveParameter_dataset {
  type: "dataset";
  dataset: DatasetParameter;
}

export interface PrimitiveParameter_expression {
  type: "expression";
  expression: ExpressionParameter;
}

export interface PrimitiveParameter_joinType {
  type: "joinType";
  joinType: JoinTypeParameter;
}

export interface PrimitiveParameter_transformOutput {
  type: "transformOutput";
  transformOutput: TransformOutputReference;
}

export interface PrimitiveParameter_window {
  type: "window";
  window: WindowParameter;
}

export interface PrimitiveParameter_windowV2 {
  type: "windowV2";
  windowV2: InstantiatedWindow;
}

export interface PrimitiveParameter_literal {
  type: "literal";
  literal: LiteralParameter;
}

export interface PrimitiveParameter_enum {
  type: "enum";
  enum: EnumParameter;
}

export interface PrimitiveParameter_sort {
  type: "sort";
  sort: SortParameter;
}

export interface PrimitiveParameter_regex {
  type: "regex";
  regex: RegexParameter;
}

export interface PrimitiveParameter_previewOutput {
  type: "previewOutput";
  previewOutput: PreviewOutputParameter;
}

export interface PrimitiveParameter_timeZone {
  type: "timeZone";
  timeZone: TimeZoneParameter;
}

export interface PrimitiveParameter_tuple {
  type: "tuple";
  tuple: TupleParameter;
}

export interface PrimitiveParameter_typeParam {
  type: "typeParam";
  typeParam: TypeParameter;
}

export interface PrimitiveParameter_rid {
  type: "rid";
  rid: ResourceIdentifierParameter;
}

export interface PrimitiveParameter_reference {
  type: "reference";
  reference: ParameterReference;
}

export interface PrimitiveParameter_structLocator {
  type: "structLocator";
  structLocator: StructLocatorParameter;
}
/**
 * Definition type: PrimitiveInputParameterType
 */
export type PrimitiveParameter =
  | PrimitiveParameter_column
  | PrimitiveParameter_columnExpression
  | PrimitiveParameter_columnPair
  | PrimitiveParameter_dataset
  | PrimitiveParameter_expression
  | PrimitiveParameter_joinType
  | PrimitiveParameter_transformOutput
  | PrimitiveParameter_window
  | PrimitiveParameter_windowV2
  | PrimitiveParameter_literal
  | PrimitiveParameter_enum
  | PrimitiveParameter_sort
  | PrimitiveParameter_regex
  | PrimitiveParameter_previewOutput
  | PrimitiveParameter_timeZone
  | PrimitiveParameter_tuple
  | PrimitiveParameter_typeParam
  | PrimitiveParameter_rid
  | PrimitiveParameter_reference
  | PrimitiveParameter_structLocator;

export interface RegexParameter {
  pattern: string;
}
/**
 * Instance type: RegexParameter
 */
export interface RegexParameterType {
}
export interface ResourceIdentifierParameter {
  rid: string;
}
/**
 * Instance type: ResourceIdentifierParameter
 */
export interface ResourceIdentifierParameterType {
  allowedTypes: Array<ResourceIdentifierType>;
}
/**
 * Specifies the service and type field of a resource identifier.
 * Rid structure is ri.service.instance.type.locator.
 */
export interface ResourceIdentifierType {
  service: string;
  type: string;
}
/**
 * Definition type: SetParameterType
 */
export interface SetParameter {
  elements: Array<PrimitiveParameter>;
}
/**
 * Instance type: SetParameter
 */
export interface SetParameterType {
  maxSize?: number | null | undefined;
  minSize?: number | null | undefined;
  subType: PrimitiveInputParameterType;
}
export interface ShortType {
}
export interface SortColumn {
  columnName: string;
  direction: Direction;
}
export interface SortParameter {
  columns: Array<SortColumn>;
}
/**
 * Instance type: SortParameter
 */
export interface SortParameterType {
  origin?: ParameterId | null | undefined;
}
/**
 * Concats a set of strings together, outputs StringLiteral
 */
export interface StringConcatAdapter {
  strings: Array<Parameter>;
}
export interface StringLiteral {
  value: string;
}
/**
 * Converts StringLiteral to ColumnReferenceParameter
 */
export interface StringToColumnAdapter {
  string: Parameter;
}
export interface StringType {
}
export interface StructElement {
  name: string;
  type: DataType;
}
export interface StructElementV2 {
  name: string;
  type: ExplicitType;
}
/**
 * Used to locate a nested field in a struct.
 */
export interface StructLocatorParameter {
  locator: Array<string>;
}
/**
 * Instance type: StructLocatorParameter
 */
export interface StructLocatorParameterType {
}
export interface StructType {
  fields: Array<StructElement>;
}
export interface StructV2Type {
  fields: Array<StructElementV2>;
}
/**
 * Parameter representing tabular inputs.
 * Instance type: DatasetParameter
 */
export interface TabularInputParameterType {
  isStreamable: boolean;
}
export interface TimestampType {
}
/**
 * Matches definition type: TimeZoneParameterType
 */
export interface TimeZoneParameter {
  timeZoneId: string;
}
/**
 * Instance type: TimeZoneParameter
 *
 * This is not an enum because we don't want to maintain a list of valid time zones.
 */
export interface TimeZoneParameterType {
}
/**
 * Use the output of another transform as input.
 *
 * Matches definition type: DatasetParameterType
 */
export interface TransformOutputReference {
  id: InstantiatedTransformId;
  parameterId: ParameterId;
}
/**
 * Definition Type: TupleParameterType
 */
export interface TupleParameter {
  left?: PrimitiveParameter | null | undefined;
  right?: PrimitiveParameter | null | undefined;
}
/**
 * Instance type: TupleParameter
 */
export interface TupleParameterType {
  leftName?: string | null | undefined;
  leftType: PrimitiveInputParameterType;
  rightName?: string | null | undefined;
  rightType: PrimitiveInputParameterType;
}
/**
 * Name of logical type of the data
 */
export type TypeName = string;
export interface TypeParameter {
  type: DataType;
}
/**
 * Parameter representing type variable that the expression or transformation uses
 */
export interface TypeParameterType {
  requiredType: TypeReference;
}
export interface TypeReference_variable {
  type: "variable";
  variable: TypeVariableReference;
}

export interface TypeReference_explicit {
  type: "explicit";
  explicit: ExplicitType;
}

export interface TypeReference_array {
  type: "array";
  array: GenericArrayType;
}

export interface TypeReference_map {
  type: "map";
  map: GenericMapType;
}

export interface TypeReference_struct {
  type: "struct";
  struct: GenericStructType;
}
export type TypeReference =
  | TypeReference_variable
  | TypeReference_explicit
  | TypeReference_array
  | TypeReference_map
  | TypeReference_struct;

/**
 * Named type variable identifying
 */
export interface TypeVariable {
  name: string;
  type: Array<LogicalType>;
}
/**
 * Reference to a type variable defined within the operation scope
 */
export type TypeVariableReference = string;
export interface Version {
  major: number;
}
/**
 * Parameter representing function operating over a window.
 * Instance type: InstantiatedColumnExpression
 */
export interface WindowExpressionParameterType {
  origin?: ParameterId | null | undefined;
  requiredOutputType: TypeReference;
}
/**
 * Uniquely identifying name for window
 */
export type WindowId = string;
export interface WindowParameter_partitioned {
  type: "partitioned";
  partitioned: PartitionedWindow;
}
/**
 * DEPRECATED - InstantiatedWindow
 */
export type WindowParameter = WindowParameter_partitioned;

/**
 * Parameter representing a window
 * Instance type: WindowParameter
 */
export interface WindowParameterType {
}
/**
 * Parameter representing a window
 * Instance type: InstantiatedWindow
 */
export interface WindowParameterTypeV2 {
  origin?: ParameterId | null | undefined;
}
