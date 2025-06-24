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
 * This status indicates that the ValueType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
export interface ActiveValueTypeStatus {
}
export interface ArrayType {
  elementType: BaseType;
}
export interface ArrayTypeDataConstraints {
  elementsConstraint?: DataConstraint | null | undefined;
  elementsUnique?: ArrayTypeElementsUniqueConstraint | null | undefined;
  size?: ArrayTypeSizeConstraint | null | undefined;
}
export interface ArrayTypeDataConstraintsModification {
  elementsConstraint?: DataConstraintModification | null | undefined;
  elementsUnique?: ArrayTypeElementsUniqueConstraint | null | undefined;
  size?: ArrayTypeSizeConstraint | null | undefined;
}
export type ArrayTypeDataValue = Array<BaseTypeDataValue>;
export type ArrayTypeElementsOneOfConstraint = Array<BaseTypeDataValue>;
export type ArrayTypeElementsUniqueConstraint = boolean;
export type ArrayTypeSizeConstraint = RangeSizeConstraint;
export interface BaseType_array {
  type: "array";
  array: ArrayType;
}

export interface BaseType_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface BaseType_binary {
  type: "binary";
  binary: BinaryType;
}

export interface BaseType_byte {
  type: "byte";
  byte: ByteType;
}

export interface BaseType_date {
  type: "date";
  date: DateType;
}

export interface BaseType_decimal {
  type: "decimal";
  decimal: DecimalType;
}

export interface BaseType_double {
  type: "double";
  double: DoubleType;
}

export interface BaseType_float {
  type: "float";
  float: FloatType;
}

export interface BaseType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface BaseType_long {
  type: "long";
  long: LongType;
}

export interface BaseType_map {
  type: "map";
  map: MapType;
}

export interface BaseType_optional {
  type: "optional";
  optional: OptionalType;
}

export interface BaseType_referenced {
  type: "referenced";
  referenced: ReferencedType;
}

export interface BaseType_short {
  type: "short";
  short: ShortType;
}

export interface BaseType_string {
  type: "string";
  string: StringType;
}

export interface BaseType_struct {
  type: "struct";
  struct: StructType;
}

export interface BaseType_structV2 {
  type: "structV2";
  structV2: StructTypeV2;
}

export interface BaseType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface BaseType_union {
  type: "union";
  union: UnionType;
}
/**
 * Base physical (data) type, representing the lowest layer in the type system.
 */
export type BaseType =
  | BaseType_array
  | BaseType_boolean
  | BaseType_binary
  | BaseType_byte
  | BaseType_date
  | BaseType_decimal
  | BaseType_double
  | BaseType_float
  | BaseType_integer
  | BaseType_long
  | BaseType_map
  | BaseType_optional
  | BaseType_referenced
  | BaseType_short
  | BaseType_string
  | BaseType_struct
  | BaseType_structV2
  | BaseType_timestamp
  | BaseType_union;

export interface BaseTypeDataValue_array {
  type: "array";
  array: ArrayTypeDataValue;
}

export interface BaseTypeDataValue_boolean {
  type: "boolean";
  boolean: BooleanTypeDataValue;
}

export interface BaseTypeDataValue_binary {
  type: "binary";
  binary: BinaryTypeDataValue;
}

export interface BaseTypeDataValue_byte {
  type: "byte";
  byte: ByteTypeDataValue;
}

export interface BaseTypeDataValue_date {
  type: "date";
  date: DateTypeDataValue;
}

export interface BaseTypeDataValue_decimal {
  type: "decimal";
  decimal: DecimalTypeDataValue;
}

export interface BaseTypeDataValue_double {
  type: "double";
  double: DoubleTypeDataValue;
}

export interface BaseTypeDataValue_float {
  type: "float";
  float: FloatTypeDataValue;
}

export interface BaseTypeDataValue_integer {
  type: "integer";
  integer: IntegerTypeDataValue;
}

export interface BaseTypeDataValue_long {
  type: "long";
  long: LongTypeDataValue;
}

export interface BaseTypeDataValue_map {
  type: "map";
  map: MapTypeDataValue;
}

export interface BaseTypeDataValue_optional {
  type: "optional";
  optional: OptionalTypeDataValue;
}

export interface BaseTypeDataValue_short {
  type: "short";
  short: ShortTypeDataValue;
}

export interface BaseTypeDataValue_string {
  type: "string";
  string: StringTypeDataValue;
}

export interface BaseTypeDataValue_struct {
  type: "struct";
  struct: StructTypeDataValue;
}

export interface BaseTypeDataValue_timestamp {
  type: "timestamp";
  timestamp: TimestampTypeDataValue;
}
/**
 * Data values representation of the base types. Used for defining the actual data constraints and to represent
 * actual data values.
 */
export type BaseTypeDataValue =
  | BaseTypeDataValue_array
  | BaseTypeDataValue_boolean
  | BaseTypeDataValue_binary
  | BaseTypeDataValue_byte
  | BaseTypeDataValue_date
  | BaseTypeDataValue_decimal
  | BaseTypeDataValue_double
  | BaseTypeDataValue_float
  | BaseTypeDataValue_integer
  | BaseTypeDataValue_long
  | BaseTypeDataValue_map
  | BaseTypeDataValue_optional
  | BaseTypeDataValue_short
  | BaseTypeDataValue_string
  | BaseTypeDataValue_struct
  | BaseTypeDataValue_timestamp;

/**
 * Filter by Value Type base type
 */
export type BaseTypeEnum =
  | "ARRAY"
  | "BOOLEAN"
  | "BINARY"
  | "BYTE"
  | "DATE"
  | "DECIMAL"
  | "DOUBLE"
  | "FLOAT"
  | "INTEGER"
  | "LONG"
  | "MAP"
  | "OPTIONAL"
  | "REFERENCED"
  | "SHORT"
  | "STRING"
  | "STRUCT"
  | "TIMESTAMP"
  | "UNION";

/**
 * An unsuccessful response to a batch create value types request. At least one value type could not be
 * created. The ids of the offending value type requests are present in this response.
 */
export interface BatchCreateValueTypeFailureResponses {
  valueTypeCreationFailures: Record<
    ValueTypeIdInRequest,
    CreateValueTypeFailure
  >;
}
/**
 * Request to create multiple Value Types at once. If more than 100 CreateValueTypeRequests are provided in
 * request, service will throw an error.
 *
 * All requests need to share identical permissioning rid, otherwise service will throw an error.
 */
export interface BatchCreateValueTypesRequest {
  valueTypesToCreate: Record<ValueTypeIdInRequest, CreateValueTypeRequest>;
}
export interface BatchCreateValueTypesResponse_success {
  type: "success";
  success: BatchCreateValueTypeSuccessResponses;
}

export interface BatchCreateValueTypesResponse_failure {
  type: "failure";
  failure: BatchCreateValueTypeFailureResponses;
}
/**
 * Batch value type creation is all-or-nothing. Either all the requested value types are created successfully,
 * or none of them are created if a single creation request fails.
 */
export type BatchCreateValueTypesResponse =
  | BatchCreateValueTypesResponse_success
  | BatchCreateValueTypesResponse_failure;

/**
 * A successful response to a batch create value types request. All ids present in the request should be
 * present in this response.
 */
export interface BatchCreateValueTypeSuccessResponses {
  valueTypesCreated: Record<ValueTypeIdInRequest, CreateValueTypeResponse>;
}
export interface BatchGetValueTypeResponse {
  metadata: ValueTypeMetadata;
  reference: ValueTypeReference;
  valueType: ValueType;
}
/**
 * Request to get multiple Value Type Rids at once. If more than 500 VersionedValueTypeReferences are provided in request,
 * service will throw an error.
 *
 * Any requested references or descendant referenced types which the user does not have permission to view
 * will be ommitted from the response.
 */
export interface BatchGetValueTypesRequest {
  returnReferencedTypes?: boolean | null | undefined;
  valueTypes: Array<ValueTypeReference>;
}
export interface BatchGetValueTypesResponse {
  valueTypes: Array<BatchGetValueTypeResponse>;
}
export interface BinaryType {
}
export interface BinaryTypeDataConstraints {
  size: BinaryTypeSizeConstraint;
}
export type BinaryTypeDataValue = string;
export type BinaryTypeSizeConstraint = RangeSizeConstraint;
export interface BooleanType {
}
export interface BooleanTypeDataConstraints {
  allowedValues: Array<BooleanTypeDataConstraintValue>;
}
export type BooleanTypeDataConstraintValue =
  | "TRUE_VALUE"
  | "FALSE_VALUE"
  | "NULL_VALUE";
export type BooleanTypeDataValue = boolean;
export interface ByteType {
}
export type ByteTypeDataValue = number;
export type CompassNamespaceRid = string;
export type CompassNamespaceValueTypesNodeRid = string;
export interface ConflictingApiNameError {
  conflicting: ValueTypeRid;
  current?: ValueTypeRid | null | undefined;
}
export interface CreateValueTypeFailure_createValueTypePermissionDenied {
  type: "createValueTypePermissionDenied";
  createValueTypePermissionDenied: CreateValueTypePermissionDeniedFailure;
}

export interface CreateValueTypeFailure_disabledBaseType {
  type: "disabledBaseType";
  disabledBaseType: DisabledBaseTypeFailure;
}

export interface CreateValueTypeFailure_multipleConstraints {
  type: "multipleConstraints";
  multipleConstraints: MultipleConstraintsFailure;
}

export interface CreateValueTypeFailure_validationFailure {
  type: "validationFailure";
  validationFailure: ValueTypeValidationFailure;
}

export interface CreateValueTypeFailure_missingNamespace {
  type: "missingNamespace";
  missingNamespace: MissingNamespaceFailure;
}

export interface CreateValueTypeFailure_missingNamespacePath {
  type: "missingNamespacePath";
  missingNamespacePath: MissingNamespacePathFailure;
}

export interface CreateValueTypeFailure_missingNamespaceRoleSets {
  type: "missingNamespaceRoleSets";
  missingNamespaceRoleSets: MissingNamespaceRoleSetsFailure;
}

export interface CreateValueTypeFailure_serviceNamespaceDisallowed {
  type: "serviceNamespaceDisallowed";
  serviceNamespaceDisallowed: ServiceNamespaceDisallowedFailure;
}

export interface CreateValueTypeFailure_namespaceAttachedToDefaultOntologyDisallowed {
  type: "namespaceAttachedToDefaultOntologyDisallowed";
  namespaceAttachedToDefaultOntologyDisallowed:
    NamespaceAttachedToDefaultOntologyDisallowedFailure;
}
export type CreateValueTypeFailure =
  | CreateValueTypeFailure_createValueTypePermissionDenied
  | CreateValueTypeFailure_disabledBaseType
  | CreateValueTypeFailure_multipleConstraints
  | CreateValueTypeFailure_validationFailure
  | CreateValueTypeFailure_missingNamespace
  | CreateValueTypeFailure_missingNamespacePath
  | CreateValueTypeFailure_missingNamespaceRoleSets
  | CreateValueTypeFailure_serviceNamespaceDisallowed
  | CreateValueTypeFailure_namespaceAttachedToDefaultOntologyDisallowed;

/**
 * Insufficient permissions to create value type.
 */
export interface CreateValueTypePermissionDeniedFailure {
  permissioningRid: PermissioningRid;
}
export interface CreateValueTypeRequest {
  apiName: ValueTypeApiName;
  baseType: BaseType;
  constraints: Array<ValueTypeDataConstraintModification>;
  displayMetadata: ValueTypeDisplayMetadata;
  exampleValues: Array<ExampleValue>;
  initialVersionOverride?: ValueTypeVersion | null | undefined;
  permissioningRid: PermissioningRid;
}
export interface CreateValueTypeResponse {
  rid: ValueTypeRid;
  versionId: ValueTypeVersionId;
}
export interface CreateValueTypeVersionRequest {
  constraints: Array<ValueTypeDataConstraintModification>;
  exampleValues: Array<ExampleValue>;
}
export interface CreateValueTypeVersionRequestV2 {
  baseType: BaseType;
  constraints: Array<ValueTypeDataConstraintModification>;
  exampleValues: Array<ExampleValue>;
  version?: ValueTypeVersion | null | undefined;
}
export interface CreateValueTypeVersionResponse {
  rid: ValueTypeRid;
  versionId: ValueTypeVersionId;
}
export interface DataConstraint_array {
  type: "array";
  array: ArrayTypeDataConstraints;
}

export interface DataConstraint_boolean {
  type: "boolean";
  boolean: BooleanTypeDataConstraints;
}

export interface DataConstraint_binary {
  type: "binary";
  binary: BinaryTypeDataConstraints;
}

export interface DataConstraint_date {
  type: "date";
  date: DateTypeDataConstraints;
}

export interface DataConstraint_decimal {
  type: "decimal";
  decimal: DecimalTypeDataConstraints;
}

export interface DataConstraint_double {
  type: "double";
  double: DoubleTypeDataConstraints;
}

export interface DataConstraint_float {
  type: "float";
  float: FloatTypeDataConstraints;
}

export interface DataConstraint_integer {
  type: "integer";
  integer: IntegerTypeDataConstraints;
}

export interface DataConstraint_long {
  type: "long";
  long: LongTypeDataConstraints;
}

export interface DataConstraint_map {
  type: "map";
  map: MapTypeDataConstraints;
}

export interface DataConstraint_nullable {
  type: "nullable";
  nullable: NullableDataConstraint;
}

export interface DataConstraint_short {
  type: "short";
  short: ShortTypeDataConstraints;
}

export interface DataConstraint_string {
  type: "string";
  string: StringTypeDataConstraints;
}

export interface DataConstraint_struct {
  type: "struct";
  struct: StructTypeDataConstraints;
}

export interface DataConstraint_structV2 {
  type: "structV2";
  structV2: StructTypeV2DataConstraints;
}

export interface DataConstraint_timestamp {
  type: "timestamp";
  timestamp: TimestampTypeDataConstraints;
}
export type DataConstraint =
  | DataConstraint_array
  | DataConstraint_boolean
  | DataConstraint_binary
  | DataConstraint_date
  | DataConstraint_decimal
  | DataConstraint_double
  | DataConstraint_float
  | DataConstraint_integer
  | DataConstraint_long
  | DataConstraint_map
  | DataConstraint_nullable
  | DataConstraint_short
  | DataConstraint_string
  | DataConstraint_struct
  | DataConstraint_structV2
  | DataConstraint_timestamp;

export interface DataConstraintModification_array {
  type: "array";
  array: ArrayTypeDataConstraintsModification;
}

export interface DataConstraintModification_boolean {
  type: "boolean";
  boolean: BooleanTypeDataConstraints;
}

export interface DataConstraintModification_binary {
  type: "binary";
  binary: BinaryTypeDataConstraints;
}

export interface DataConstraintModification_date {
  type: "date";
  date: DateTypeDataConstraints;
}

export interface DataConstraintModification_decimal {
  type: "decimal";
  decimal: DecimalTypeDataConstraints;
}

export interface DataConstraintModification_double {
  type: "double";
  double: DoubleTypeDataConstraints;
}

export interface DataConstraintModification_float {
  type: "float";
  float: FloatTypeDataConstraints;
}

export interface DataConstraintModification_integer {
  type: "integer";
  integer: IntegerTypeDataConstraints;
}

export interface DataConstraintModification_long {
  type: "long";
  long: LongTypeDataConstraints;
}

export interface DataConstraintModification_map {
  type: "map";
  map: MapTypeDataConstraintsModification;
}

export interface DataConstraintModification_nullable {
  type: "nullable";
  nullable: NullableDataConstraint;
}

export interface DataConstraintModification_short {
  type: "short";
  short: ShortTypeDataConstraints;
}

export interface DataConstraintModification_string {
  type: "string";
  string: StringTypeDataConstraints;
}

export interface DataConstraintModification_struct {
  type: "struct";
  struct: StructTypeDataConstraintsModification;
}

export interface DataConstraintModification_structV2 {
  type: "structV2";
  structV2: StructTypeV2DataConstraintsModification;
}

export interface DataConstraintModification_timestamp {
  type: "timestamp";
  timestamp: TimestampTypeDataConstraints;
}
/**
 * A copy of DataConstraint made to decouple the storage and request types for Value Type data
 * constraint representation. At the moment, the only difference between the types is for StructV2.
 */
export type DataConstraintModification =
  | DataConstraintModification_array
  | DataConstraintModification_boolean
  | DataConstraintModification_binary
  | DataConstraintModification_date
  | DataConstraintModification_decimal
  | DataConstraintModification_double
  | DataConstraintModification_float
  | DataConstraintModification_integer
  | DataConstraintModification_long
  | DataConstraintModification_map
  | DataConstraintModification_nullable
  | DataConstraintModification_short
  | DataConstraintModification_string
  | DataConstraintModification_struct
  | DataConstraintModification_structV2
  | DataConstraintModification_timestamp;

export interface DataConstraintWrapper {
  constraint: DataConstraint;
  failureMessage?: FailureMessage | null | undefined;
}
export interface DataConstraintWrapperModification {
  constraint: DataConstraintModification;
  failureMessage?: FailureMessage | null | undefined;
}
export interface DateType {
}
export interface DateTypeDataConstraints {
  range: DateTypeRangeConstraint;
}
/**
 * ISO 8601 date.
 */
export type DateTypeDataValue = string;
export interface DateTypeRangeConstraint {
  max?: DateTypeDataValue | null | undefined;
  min?: DateTypeDataValue | null | undefined;
}
export interface DecimalType {
  precision: number;
  scale: number;
}
export interface DecimalTypeDataConstraints_range {
  type: "range";
  range: DecimalTypeRangeConstraint;
}

export interface DecimalTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfDecimalTypeConstraint;
}
export type DecimalTypeDataConstraints =
  | DecimalTypeDataConstraints_range
  | DecimalTypeDataConstraints_oneOf;

export type DecimalTypeDataValue = string;
export interface DecimalTypeRangeConstraint {
  max?: DecimalTypeDataValue | null | undefined;
  min?: DecimalTypeDataValue | null | undefined;
}
/**
 * This status indicates that the ValueType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface DeprecatedValueTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: ValueTypeRid | null | undefined;
}
export interface DeprecationInvalidDeadlineError {
}
export interface DeprecationInvalidMessageError {
}
export interface DeprecationReplacementAlreadyDeprecatedError {
  replacementValueTypeRid: ValueTypeRid;
}
export interface DeprecationReplacementMismatchedBaseTypeError {
  currentValueTypeBaseType: BaseType;
  replacementValueTypeBaseType: BaseType;
}
export interface DeprecationReplacementNotFoundError {
  replacementValueTypeRid: ValueTypeRid;
}
export interface DeprecationReplacementPermissionDeniedError {
  replacementValueTypeRid: ValueTypeRid;
}
export type Description = string;

/**
 * Maps and Structs are currently unsupported.
 */
export interface DisabledBaseTypeFailure {
}
export type DisplayName = string;
export interface DoubleType {
}
export interface DoubleTypeDataConstraints_range {
  type: "range";
  range: DoubleTypeRangeConstraint;
}

export interface DoubleTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfDoubleTypeConstraint;
}
export type DoubleTypeDataConstraints =
  | DoubleTypeDataConstraints_range
  | DoubleTypeDataConstraints_oneOf;

export type DoubleTypeDataValue = number | "NaN" | "Infinity" | "-Infinity";
export interface DoubleTypeRangeConstraint {
  max?: DoubleTypeDataValue | null | undefined;
  min?: DoubleTypeDataValue | null | undefined;
}
/**
 * A StructV2 base type contains more than one StructElementV2 with the same StructFieldIdentifier.
 */
export interface DuplicateStructFieldIdentifiersInBaseTypeError {
  duplicateFieldIdentifiers: Array<StructFieldIdentifier>;
}
export interface EmptyDataConstraintError {
  emptyDataConstraint: ValueTypeDataConstraintModification;
}
export interface EmptyStructTypeDataConstraintError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
/**
 * Example values for a value type. Used for documentation purposes.
 */
export interface ExampleValue {
  value: BaseTypeDataValue;
}
export interface FailureMessage {
  message: string;
}
export interface FloatType {
}
export interface FloatTypeDataConstraints_range {
  type: "range";
  range: FloatTypeRangeConstraint;
}

export interface FloatTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfFloatTypeConstraint;
}
export type FloatTypeDataConstraints =
  | FloatTypeDataConstraints_range
  | FloatTypeDataConstraints_oneOf;

export type FloatTypeDataValue = number | "NaN" | "Infinity" | "-Infinity";
export interface FloatTypeRangeConstraint {
  max?: FloatTypeDataValue | null | undefined;
  min?: FloatTypeDataValue | null | undefined;
}
export type FoundrySearchTopicRid = string;

/**
 * Request to retrieve a single Value Type. When versionId is omitted latest version of value type will be returned.
 */
export interface GetValueTypeRequest {
  versionId?: ValueTypeVersionId | null | undefined;
}
export interface GetValueTypeResponse {
  metadata: ValueTypeMetadata;
  valueType: ValueType;
}
export interface GetValueTypesInScopeRequest {
  permissioningRid: PermissioningRid;
}
export interface GetValueTypesInScopeResponse {
  valueTypes: Array<ValueTypeRid>;
}
export interface GetValueTypeVersionsResponse {
  metadata: ValueTypeMetadata;
  valueTypeVersions: Array<ValueType>;
}
export interface IntegerType {
}
export interface IntegerTypeDataConstraints_range {
  type: "range";
  range: IntegerTypeRangeConstraint;
}

export interface IntegerTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfIntegerTypeConstraint;
}
export type IntegerTypeDataConstraints =
  | IntegerTypeDataConstraints_range
  | IntegerTypeDataConstraints_oneOf;

export type IntegerTypeDataValue = number;
export interface IntegerTypeRangeConstraint {
  max?: IntegerTypeDataValue | null | undefined;
  min?: IntegerTypeDataValue | null | undefined;
}
export interface InvalidApiNameError {
  apiName: ValueTypeApiName;
  valueTypeRid: ValueTypeRid;
}
export interface InvalidDataConstraintRangeTypeError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
export interface InvalidDataConstraintsForBaseTypeError {
  baseType: BaseType;
  invalidDataConstraints: Array<DataConstraintModification>;
}
export interface InvalidDataConstraintSizeTypeError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
export interface InvalidDescriptionError {
  description: Description;
}
export interface InvalidDisplayNameError {
  displayName: DisplayName;
}
export interface InvalidNumericRangeDataConstraintError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
export interface InvalidPermissioningRidCompassNamespaceWithNonNamespaceRidError {
  rid: PermissioningRid;
}
export interface InvalidRegexDataConstraintError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
export interface InvalidStatusTransitionError {
}
export interface InvalidStringTypeLengthDataConstraintsError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
export interface InvalidStructFieldIdentifierError {
  structFieldIdentifier: StructFieldIdentifier;
  valueTypeRid: ValueTypeRid;
}
export interface LongType {
}
export interface LongTypeDataConstraints_range {
  type: "range";
  range: LongTypeRangeConstraint;
}

export interface LongTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfLongTypeConstraint;
}
export type LongTypeDataConstraints =
  | LongTypeDataConstraints_range
  | LongTypeDataConstraints_oneOf;

export type LongTypeDataValue = number;
export interface LongTypeRangeConstraint {
  max?: LongTypeDataValue | null | undefined;
  min?: LongTypeDataValue | null | undefined;
}
export interface MapType {
  keyType: BaseType;
  valueType: BaseType;
}
export interface MapTypeDataConstraints {
  keyTypeDataConstraints: Array<DataConstraint>;
  uniqueValues?: MapUniqueValuesConstraint | null | undefined;
  valueTypeDataConstraints: Array<DataConstraint>;
}
export interface MapTypeDataConstraintsModification {
  keyTypeDataConstraints: Array<DataConstraintModification>;
  uniqueValues?: MapUniqueValuesConstraint | null | undefined;
  valueTypeDataConstraints: Array<DataConstraintModification>;
}
export interface MapTypeDataValue_binary {
  type: "binary";
  binary: Record<BinaryTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_byte {
  type: "byte";
  byte: Record<ByteTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_boolean {
  type: "boolean";
  boolean: Record<BooleanTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_date {
  type: "date";
  date: Record<DateTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_double {
  type: "double";
  double: Record<DoubleTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_decimal {
  type: "decimal";
  decimal: Record<DecimalTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_float {
  type: "float";
  float: Record<FloatTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_integer {
  type: "integer";
  integer: Record<IntegerTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_short {
  type: "short";
  short: Record<ShortTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_string {
  type: "string";
  string: Record<StringTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_timestamp {
  type: "timestamp";
  timestamp: Record<TimestampTypeDataValue, BaseTypeDataValue>;
}
export type MapTypeDataValue =
  | MapTypeDataValue_binary
  | MapTypeDataValue_byte
  | MapTypeDataValue_boolean
  | MapTypeDataValue_date
  | MapTypeDataValue_double
  | MapTypeDataValue_decimal
  | MapTypeDataValue_float
  | MapTypeDataValue_integer
  | MapTypeDataValue_short
  | MapTypeDataValue_string
  | MapTypeDataValue_timestamp;

export interface MapUniqueValuesConstraint {
  value: boolean;
}
export interface MarketplaceValueTypeProvenanceSource {
  marketplaceBlockSetInstallationRid: any;
}
/**
 * The specified namespace could not be found.
 */
export interface MissingNamespaceFailure {
  namespaceRid: string;
}
/**
 * The provided namespace is missing a path.
 */
export interface MissingNamespacePathFailure {
}
/**
 * The provided namespace has no role sets. This should never happen.
 */
export interface MissingNamespaceRoleSetsFailure {
  namespaceRid: string;
}
/**
 * Multiple data constraints are disallowed for now.
 */
export interface MultipleConstraintsFailure {
}
/**
 * The provided namespace is attached to the default ontology, which is disallowed.
 */
export interface NamespaceAttachedToDefaultOntologyDisallowedFailure {
  namespaceRid: string;
}
export interface NestedTypeMustBePrimitiveTypeError {
  baseType: BaseType;
}
export interface NoBooleanValueAllowedDataConstraintError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
export interface NonPrivilegedUserCreatingSuffixedValueTypeVersionError {
  valueTypeVersion: ValueTypeVersion;
}
export interface NonPrivilegedUserCreatingValueTypeWithMarketplaceProvenanceError {
  valueTypeProvenanceSource: ValueTypeProvenanceSource;
}
export interface NonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueTypeError {
  valueTypeProvenanceSource: ValueTypeProvenanceSource;
  valueTypeRid: ValueTypeRid;
}
export interface NullableDataConstraint {
  option: NullableOption;
}
export type NullableOption = "NULLABLE" | "NOT_NULLABLE";
export interface OneOfDecimalTypeConstraint {
  values: Array<DecimalTypeDataValue>;
}
export interface OneOfDoubleTypeConstraint {
  values: Array<DoubleTypeDataValue>;
}
export interface OneOfFloatTypeConstraint {
  values: Array<FloatTypeDataValue>;
}
export interface OneOfIntegerTypeConstraint {
  values: Array<IntegerTypeDataValue>;
}
export interface OneOfLongTypeConstraint {
  values: Array<LongTypeDataValue>;
}
export interface OneOfShortTypeConstraint {
  values: Array<ShortTypeDataValue>;
}
export interface OneOfStringTypeConstraint {
  useIgnoreCase?: boolean | null | undefined;
  values: Array<StringTypeDataValue>;
}
export type OntologyRid = string;
export interface OptionalType {
  wrappedType: BaseType;
}
export type OptionalTypeDataValue = BaseTypeDataValue | null | undefined;
export interface PermissioningRid_compassNamespace {
  type: "compassNamespace";
  compassNamespace: CompassNamespaceRid;
}

export interface PermissioningRid_serviceManaged {
  type: "serviceManaged";
  serviceManaged: ServiceManagedRid;
}
/**
 * Union representing gatekeeper parent of value types, defining their permissioning configuration. All union
 * implementations need to be wrappers over rids.
 *
 * When extending the union, make sure to update security.yml of security-schema with the new type and ensure
 * it can be properly serialized into Atlas tables as row key with bytes persister.
 */
export type PermissioningRid =
  | PermissioningRid_compassNamespace
  | PermissioningRid_serviceManaged;

export interface RangeSizeConstraint {
  maxSize?: number | null | undefined;
  minSize?: number | null | undefined;
}
export interface ReferencedType_versionedReferencedType {
  type: "versionedReferencedType";
  versionedReferencedType: VersionedReferencedType;
}
export type ReferencedType = ReferencedType_versionedReferencedType;

export interface ReferencedTypeMaxCountExceededError {
  baseType: BaseType;
  count: number;
  maxCount: number;
}
export interface RegexConstraint {
  regexPattern: string;
  usePartialMatch?: boolean | null | undefined;
}
export type ServiceManagedRid = string;

/**
 * The provided permissioning rid is a compass service namespace, which is disallowed.
 */
export interface ServiceNamespaceDisallowedFailure {
  namespaceRid: string;
}
export interface ShortType {
}
export interface ShortTypeDataConstraints_range {
  type: "range";
  range: ShortTypeRangeConstraint;
}

export interface ShortTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfShortTypeConstraint;
}
export type ShortTypeDataConstraints =
  | ShortTypeDataConstraints_range
  | ShortTypeDataConstraints_oneOf;

export type ShortTypeDataValue = number;
export interface ShortTypeRangeConstraint {
  max?: ShortTypeDataValue | null | undefined;
  min?: ShortTypeDataValue | null | undefined;
}
export interface StringType {
}
export interface StringTypeDataConstraints_regex {
  type: "regex";
  regex: RegexConstraint;
}

export interface StringTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfStringTypeConstraint;
}

export interface StringTypeDataConstraints_length {
  type: "length";
  length: StringTypeLengthConstraint;
}

export interface StringTypeDataConstraints_isUuid {
  type: "isUuid";
  isUuid: StringTypeIsUuidConstraint;
}

export interface StringTypeDataConstraints_isRid {
  type: "isRid";
  isRid: StringTypeIsRidConstraint;
}
export type StringTypeDataConstraints =
  | StringTypeDataConstraints_regex
  | StringTypeDataConstraints_oneOf
  | StringTypeDataConstraints_length
  | StringTypeDataConstraints_isUuid
  | StringTypeDataConstraints_isRid;

export type StringTypeDataValue = string;
export interface StringTypeIsRidConstraint {
}
export interface StringTypeIsUuidConstraint {
}
export type StringTypeLengthConstraint = RangeSizeConstraint;

/**
 * String type one of data constraints cannot specify zero values.
 */
export interface StringTypeOneOfDataConstraintCannotBeEmptyError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
}
/**
 * String type one of data constraints cannot specify a number of values over the allowed maximum.
 */
export interface StringTypeOneOfDataConstraintNumberOfValuesOverMaxError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
  maxValues: number;
}
export interface StructElement {
  name: StructElementName;
  type: BaseType;
}
export type StructElementName = string;
export interface StructElementTypeDataValue {
  name: string;
  value: BaseTypeDataValue;
}
export interface StructElementV2 {
  baseType: BaseType;
  identifier: StructFieldIdentifier;
}
/**
 * The base type of a struct field as defined in the top-level base type does not match the base type of a
 * struct field as defined in the top-level constraint's value type.
 */
export interface StructFieldBaseTypeAndConstraintBaseTypesDoNotMatchError {
  mismatchedFieldIdentifiers: Array<StructFieldIdentifier>;
}
/**
 * A value type reference or `IdInRequest` from in the top-level struct constraints map cannot be found. Any
 * value type IDs referenced in the request must be present in the same creation request.
 */
export interface StructFieldConstraintValueTypeReferenceCannotBeFoundError {
  idsInRequestNotFound: Array<ValueTypeIdInRequest>;
  referencesNotFound: Array<ValueTypeReference>;
}
/**
 * A string identifier used to map struct property fields to their respective base types and constraints.
 * This identifier is intentionally generically typed. Constraints used on ontology types should interpret the
 * identifier as a struct field API name and pipeline builder should interpret the identifier as a dataset
 * struct column field name.
 */
export type StructFieldIdentifier = string;

/**
 * A struct field identifier referenced in the top-level constraints map did not match any struct field
 * identifiers in the top-level base type map.
 */
export interface StructFieldIdentifierInConstraintsNotFoundInBaseTypeError {
  missingFieldIdentifiers: Array<StructFieldIdentifier>;
}
export interface StructType {
  fields: Array<StructElement>;
}
export interface StructTypeConstraintWithUnknownStructElementsError {
  invalidDataConstraint: ValueTypeDataConstraintModification;
  unknownElementNames: Array<StructElementName>;
}
export interface StructTypeDataConstraints {
  elementConstraints: StructTypeElementsConstraint;
}
export interface StructTypeDataConstraintsModification {
  elementConstraints: StructTypeElementsConstraintModification;
}
export interface StructTypeDataValue {
  fields: Array<StructElementTypeDataValue>;
}
/**
 * Map of constraints declared on struct elements keyed by the struct field (element) name.
 */
export type StructTypeElementsConstraint = Record<
  StructElementName,
  DataConstraint
>;

/**
 * Map of constraints declared on struct elements keyed by the struct field (element) name.
 */
export type StructTypeElementsConstraintModification = Record<
  StructElementName,
  DataConstraintModification
>;
export interface StructTypeV2 {
  fields: Array<StructElementV2>;
}
export interface StructTypeV2DataConstraints {
  elementConstraints: StructTypeV2ElementsConstraint;
}
export interface StructTypeV2DataConstraintsModification {
  elementConstraints: StructTypeV2ElementsConstraintModification;
}
/**
 * Map of value types declared on struct elements keyed by the struct field identifier.
 */
export type StructTypeV2ElementsConstraint = Record<
  StructFieldIdentifier,
  ValueTypeReference
>;

/**
 * Map of value types declared on struct elements keyed by the struct field identifier.
 */
export type StructTypeV2ElementsConstraintModification = Record<
  StructFieldIdentifier,
  ValueTypeReferenceOrIdInRequest
>;
export interface TimestampType {
}
export interface TimestampTypeDataConstraints {
  range: TimestampTypeRangeConstraint;
}
export type TimestampTypeDataValue = string;
export interface TimestampTypeRangeConstraint {
  max?: TimestampTypeDataValue | null | undefined;
  min?: TimestampTypeDataValue | null | undefined;
}
/**
 * It is not possible to define constraints on a union type. Instead define each member as its own value
 * type with constraints, and reference those value types in the union.
 */
export interface UnionType {
  memberTypes: Array<BaseType>;
}
export interface UpdateValueTypeRequest {
  apiName: ValueTypeApiName;
  displayMetadata: ValueTypeDisplayMetadata;
  status: ValueTypeStatus;
}
export type UserId = string;

/**
 * A specific version of a value type.
 */
export interface ValueType {
  attribution: ValueTypeAttribution;
  baseType?: BaseType | null | undefined;
  constraints: Array<ValueTypeDataConstraint>;
  exampleValues: Array<ExampleValue>;
  rid: ValueTypeRid;
  version: ValueTypeVersion;
  versionId: ValueTypeVersionId;
}
export type ValueTypeApiName = string;
export interface ValueTypeAttribution {
  createdAt: string;
  createdBy: UserId;
}
export interface ValueTypeCannotExceedNestingLimitError {
  maxNestingLevel: number;
}
export interface ValueTypeDataConstraint {
  constraint: DataConstraintWrapper;
}
/**
 * A copy of ValueTypeDataConstraint made to decouple the storage and request types for Value Type data
 * constraint representation. At the moment, the only difference between the types is for StructV2.
 */
export interface ValueTypeDataConstraintModification {
  constraint: DataConstraintWrapperModification;
}
export interface ValueTypeDisplayMetadata {
  description?: Description | null | undefined;
  displayName: DisplayName;
}
/**
 * Used to keep track of which batch creation responses correspond to which batch creation requests.
 */
export type ValueTypeIdInRequest = string;

/**
 * Shared metadata common for all version of a value type.
 */
export interface ValueTypeMetadata {
  apiName: ValueTypeApiName;
  baseType: BaseType;
  displayMetadata: ValueTypeDisplayMetadata;
  permissioningRid: PermissioningRid;
  rid: ValueTypeRid;
  status: ValueTypeStatus;
  valueTypeProvenanceSource?: ValueTypeProvenanceSource | null | undefined;
}
export interface ValueTypeProvenanceSource_marketplace {
  type: "marketplace";
  marketplace: MarketplaceValueTypeProvenanceSource;
}
export type ValueTypeProvenanceSource = ValueTypeProvenanceSource_marketplace;

/**
 * Reference representing a specific version of a Value Type. When versionId is omitted, we assume it is referencing the latest version available at the time.
 */
export interface ValueTypeReference {
  rid: ValueTypeRid;
  versionId?: ValueTypeVersionId | null | undefined;
}
export interface ValueTypeReferenceOrIdInRequest_reference {
  type: "reference";
  reference: ValueTypeReference;
}

export interface ValueTypeReferenceOrIdInRequest_idInRequest {
  type: "idInRequest";
  idInRequest: ValueTypeIdInRequest;
}
/**
 * Used when you want to refer to a collection of Value Types where some Value Types are already created and
 * some are being created in the same request. For example, used for struct value type creation where some
 * constraints may reference a struct field's value type being created at the same time.
 */
export type ValueTypeReferenceOrIdInRequest =
  | ValueTypeReferenceOrIdInRequest_reference
  | ValueTypeReferenceOrIdInRequest_idInRequest;

/**
 * The rid for a Value Type, autogenerated by the service.
 */
export type ValueTypeRid = string;
export interface ValueTypeStatus_active {
  type: "active";
  active: ActiveValueTypeStatus;
}

export interface ValueTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedValueTypeStatus;
}
/**
 * The status to indicate whether the Value Type is either Experimental, Active or Deprecated.
 */
export type ValueTypeStatus =
  | ValueTypeStatus_active
  | ValueTypeStatus_deprecated;

export interface ValueTypeValidationError_invalidStatusTransition {
  type: "invalidStatusTransition";
  invalidStatusTransition: InvalidStatusTransitionError;
}

export interface ValueTypeValidationError_invalidDisplayName {
  type: "invalidDisplayName";
  invalidDisplayName: InvalidDisplayNameError;
}

export interface ValueTypeValidationError_invalidDescription {
  type: "invalidDescription";
  invalidDescription: InvalidDescriptionError;
}

export interface ValueTypeValidationError_invalidApiName {
  type: "invalidApiName";
  invalidApiName: InvalidApiNameError;
}

export interface ValueTypeValidationError_invalidStructFieldIdentifier {
  type: "invalidStructFieldIdentifier";
  invalidStructFieldIdentifier: InvalidStructFieldIdentifierError;
}

export interface ValueTypeValidationError_conflictingApiName {
  type: "conflictingApiName";
  conflictingApiName: ConflictingApiNameError;
}

export interface ValueTypeValidationError_invalidDeprecationDeadline {
  type: "invalidDeprecationDeadline";
  invalidDeprecationDeadline: DeprecationInvalidDeadlineError;
}

export interface ValueTypeValidationError_invalidDeprecationMessage {
  type: "invalidDeprecationMessage";
  invalidDeprecationMessage: DeprecationInvalidMessageError;
}

export interface ValueTypeValidationError_deprecationReplacementMismatchedBaseType {
  type: "deprecationReplacementMismatchedBaseType";
  deprecationReplacementMismatchedBaseType:
    DeprecationReplacementMismatchedBaseTypeError;
}

export interface ValueTypeValidationError_deprecationReplacementNotFound {
  type: "deprecationReplacementNotFound";
  deprecationReplacementNotFound: DeprecationReplacementNotFoundError;
}

export interface ValueTypeValidationError_deprecationReplacementAlreadyDeprecated {
  type: "deprecationReplacementAlreadyDeprecated";
  deprecationReplacementAlreadyDeprecated:
    DeprecationReplacementAlreadyDeprecatedError;
}

export interface ValueTypeValidationError_deprecationReplacementPermissionDenied {
  type: "deprecationReplacementPermissionDenied";
  deprecationReplacementPermissionDenied:
    DeprecationReplacementPermissionDeniedError;
}

export interface ValueTypeValidationError_nestedTypeMustBePrimitiveType {
  type: "nestedTypeMustBePrimitiveType";
  nestedTypeMustBePrimitiveType: NestedTypeMustBePrimitiveTypeError;
}

export interface ValueTypeValidationError_cannotExceedNestingLimit {
  type: "cannotExceedNestingLimit";
  cannotExceedNestingLimit: ValueTypeCannotExceedNestingLimitError;
}

export interface ValueTypeValidationError_invalidDataConstraintsForBaseType {
  type: "invalidDataConstraintsForBaseType";
  invalidDataConstraintsForBaseType: InvalidDataConstraintsForBaseTypeError;
}

export interface ValueTypeValidationError_invalidRange {
  type: "invalidRange";
  invalidRange: InvalidDataConstraintRangeTypeError;
}

export interface ValueTypeValidationError_invalidSize {
  type: "invalidSize";
  invalidSize: InvalidDataConstraintSizeTypeError;
}

export interface ValueTypeValidationError_emptyDataConstraint {
  type: "emptyDataConstraint";
  emptyDataConstraint: EmptyDataConstraintError;
}

export interface ValueTypeValidationError_noBooleanValueAllowed {
  type: "noBooleanValueAllowed";
  noBooleanValueAllowed: NoBooleanValueAllowedDataConstraintError;
}

export interface ValueTypeValidationError_invalidNumericRange {
  type: "invalidNumericRange";
  invalidNumericRange: InvalidNumericRangeDataConstraintError;
}

export interface ValueTypeValidationError_invalidRegex {
  type: "invalidRegex";
  invalidRegex: InvalidRegexDataConstraintError;
}

export interface ValueTypeValidationError_invalidStringTypeLength {
  type: "invalidStringTypeLength";
  invalidStringTypeLength: InvalidStringTypeLengthDataConstraintsError;
}

export interface ValueTypeValidationError_stringTypeOneOfDataConstraintCannotBeEmpty {
  type: "stringTypeOneOfDataConstraintCannotBeEmpty";
  stringTypeOneOfDataConstraintCannotBeEmpty:
    StringTypeOneOfDataConstraintCannotBeEmptyError;
}

export interface ValueTypeValidationError_stringTypeOneOfDataConstraintNumberOfValuesOverMax {
  type: "stringTypeOneOfDataConstraintNumberOfValuesOverMax";
  stringTypeOneOfDataConstraintNumberOfValuesOverMax:
    StringTypeOneOfDataConstraintNumberOfValuesOverMaxError;
}

export interface ValueTypeValidationError_emptyStructTypeConstraint {
  type: "emptyStructTypeConstraint";
  emptyStructTypeConstraint: EmptyStructTypeDataConstraintError;
}

export interface ValueTypeValidationError_unknownStructElementsOnConstraint {
  type: "unknownStructElementsOnConstraint";
  unknownStructElementsOnConstraint:
    StructTypeConstraintWithUnknownStructElementsError;
}

export interface ValueTypeValidationError_duplicateStructFieldIdentifiersInBaseType {
  type: "duplicateStructFieldIdentifiersInBaseType";
  duplicateStructFieldIdentifiersInBaseType:
    DuplicateStructFieldIdentifiersInBaseTypeError;
}

export interface ValueTypeValidationError_structFieldIdentifierInConstraintsNotFoundInBaseType {
  type: "structFieldIdentifierInConstraintsNotFoundInBaseType";
  structFieldIdentifierInConstraintsNotFoundInBaseType:
    StructFieldIdentifierInConstraintsNotFoundInBaseTypeError;
}

export interface ValueTypeValidationError_structFieldBaseTypeAndConstraintBaseTypesDoNotMatch {
  type: "structFieldBaseTypeAndConstraintBaseTypesDoNotMatch";
  structFieldBaseTypeAndConstraintBaseTypesDoNotMatch:
    StructFieldBaseTypeAndConstraintBaseTypesDoNotMatchError;
}

export interface ValueTypeValidationError_structFieldConstraintValueTypeReferenceCannotBeFound {
  type: "structFieldConstraintValueTypeReferenceCannotBeFound";
  structFieldConstraintValueTypeReferenceCannotBeFound:
    StructFieldConstraintValueTypeReferenceCannotBeFoundError;
}

export interface ValueTypeValidationError_nonPrivilegedUserCreatingSuffixedValueTypeVersion {
  type: "nonPrivilegedUserCreatingSuffixedValueTypeVersion";
  nonPrivilegedUserCreatingSuffixedValueTypeVersion:
    NonPrivilegedUserCreatingSuffixedValueTypeVersionError;
}

export interface ValueTypeValidationError_nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType {
  type: "nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType";
  nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType:
    NonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueTypeError;
}

export interface ValueTypeValidationError_nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance {
  type: "nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance";
  nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance:
    NonPrivilegedUserCreatingValueTypeWithMarketplaceProvenanceError;
}

export interface ValueTypeValidationError_invalidPermissioningRidCompassNamespaceWithNonNamespaceRid {
  type: "invalidPermissioningRidCompassNamespaceWithNonNamespaceRid";
  invalidPermissioningRidCompassNamespaceWithNonNamespaceRid:
    InvalidPermissioningRidCompassNamespaceWithNonNamespaceRidError;
}

export interface ValueTypeValidationError_referencedTypeMaxCountExceeded {
  type: "referencedTypeMaxCountExceeded";
  referencedTypeMaxCountExceeded: ReferencedTypeMaxCountExceededError;
}

export interface ValueTypeValidationError_versionAlreadyExists {
  type: "versionAlreadyExists";
  versionAlreadyExists: VersionAlreadyExistsError;
}
export type ValueTypeValidationError =
  | ValueTypeValidationError_invalidStatusTransition
  | ValueTypeValidationError_invalidDisplayName
  | ValueTypeValidationError_invalidDescription
  | ValueTypeValidationError_invalidApiName
  | ValueTypeValidationError_invalidStructFieldIdentifier
  | ValueTypeValidationError_conflictingApiName
  | ValueTypeValidationError_invalidDeprecationDeadline
  | ValueTypeValidationError_invalidDeprecationMessage
  | ValueTypeValidationError_deprecationReplacementMismatchedBaseType
  | ValueTypeValidationError_deprecationReplacementNotFound
  | ValueTypeValidationError_deprecationReplacementAlreadyDeprecated
  | ValueTypeValidationError_deprecationReplacementPermissionDenied
  | ValueTypeValidationError_nestedTypeMustBePrimitiveType
  | ValueTypeValidationError_cannotExceedNestingLimit
  | ValueTypeValidationError_invalidDataConstraintsForBaseType
  | ValueTypeValidationError_invalidRange
  | ValueTypeValidationError_invalidSize
  | ValueTypeValidationError_emptyDataConstraint
  | ValueTypeValidationError_noBooleanValueAllowed
  | ValueTypeValidationError_invalidNumericRange
  | ValueTypeValidationError_invalidRegex
  | ValueTypeValidationError_invalidStringTypeLength
  | ValueTypeValidationError_stringTypeOneOfDataConstraintCannotBeEmpty
  | ValueTypeValidationError_stringTypeOneOfDataConstraintNumberOfValuesOverMax
  | ValueTypeValidationError_emptyStructTypeConstraint
  | ValueTypeValidationError_unknownStructElementsOnConstraint
  | ValueTypeValidationError_duplicateStructFieldIdentifiersInBaseType
  | ValueTypeValidationError_structFieldIdentifierInConstraintsNotFoundInBaseType
  | ValueTypeValidationError_structFieldBaseTypeAndConstraintBaseTypesDoNotMatch
  | ValueTypeValidationError_structFieldConstraintValueTypeReferenceCannotBeFound
  | ValueTypeValidationError_nonPrivilegedUserCreatingSuffixedValueTypeVersion
  | ValueTypeValidationError_nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType
  | ValueTypeValidationError_nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance
  | ValueTypeValidationError_invalidPermissioningRidCompassNamespaceWithNonNamespaceRid
  | ValueTypeValidationError_referencedTypeMaxCountExceeded
  | ValueTypeValidationError_versionAlreadyExists;

export interface ValueTypeValidationFailure {
  errors: Array<ValueTypeValidationError>;
  valueTypeRid: ValueTypeRid;
}
export interface ValueTypeValidationResult_failure {
  type: "failure";
  failure: ValueTypeValidationFailure;
}

export interface ValueTypeValidationResult_success {
  type: "success";
  success: ValueTypeValidationSuccess;
}
export type ValueTypeValidationResult =
  | ValueTypeValidationResult_failure
  | ValueTypeValidationResult_success;

export interface ValueTypeValidationSuccess {
}
/**
 * The version of a Value Type, enforced to be a semantic version.
 */
export type ValueTypeVersion = string;

/**
 * The version id of a Value Type, autogenerated by the service.
 */
export type ValueTypeVersionId = string;
export interface VersionAlreadyExistsError {
  existingValueType: ValueTypeReference;
  version: ValueTypeVersion;
}
export interface VersionedReferencedType {
  rid: ValueTypeRid;
  version: ValueTypeVersionId;
}
