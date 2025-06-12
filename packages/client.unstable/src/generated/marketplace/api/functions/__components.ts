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

import type {
  ActionTypeReference as _api_ActionTypeReference,
  ObjectTypePropertyReference as _api_ObjectTypePropertyReference,
  ObjectTypeReference as _api_ObjectTypeReference,
  ValueTypeReference as _api_ValueTypeReference,
  Void as _api_Void,
} from "../__components.js";
export interface ActionType {
  actionTypeReferences: Array<_api_ActionTypeReference>;
}
export interface AnonymousCustomType {
  fields: Record<CustomTypeFieldName, DataType>;
}
export interface AttachmentType {
}
export interface BinaryType {
}
export interface BooleanType {
}
export type BooleanValue = boolean;
export interface BucketKeyType_double {
  type: "double";
  double: DoubleType;
}

export interface BucketKeyType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface BucketKeyType_date {
  type: "date";
  date: DateType;
}

export interface BucketKeyType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface BucketKeyType_range {
  type: "range";
  range: RangeType;
}

export interface BucketKeyType_string {
  type: "string";
  string: StringType;
}

export interface BucketKeyType_boolean {
  type: "boolean";
  boolean: BooleanType;
}
export type BucketKeyType =
  | BucketKeyType_double
  | BucketKeyType_integer
  | BucketKeyType_date
  | BucketKeyType_timestamp
  | BucketKeyType_range
  | BucketKeyType_string
  | BucketKeyType_boolean;

export interface BucketValueType_double {
  type: "double";
  double: DoubleType;
}

export interface BucketValueType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface BucketValueType_date {
  type: "date";
  date: DateType;
}
export type BucketValueType =
  | BucketValueType_double
  | BucketValueType_timestamp
  | BucketValueType_date;

export interface ByteType {
}
export interface ClassificationMarkingType {
}
export interface CustomType {
  fields: Record<CustomTypeFieldName, DataType>;
  id: CustomTypeId;
}
export type CustomTypeFieldName = string;
export type CustomTypeId = string;
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

export interface DataType_decimal {
  type: "decimal";
  decimal: DecimalType;
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

export interface DataType_attachment {
  type: "attachment";
  attachment: AttachmentType;
}

export interface DataType_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceType;
}

export interface DataType_list {
  type: "list";
  list: ListType;
}

export interface DataType_logical {
  type: "logical";
  logical: _api_Void;
}

export interface DataType_logicalV2 {
  type: "logicalV2";
  logicalV2: LogicalTypeReference;
}

export interface DataType_set {
  type: "set";
  set: SetType;
}

export interface DataType_map {
  type: "map";
  map: MapType;
}

export interface DataType_object {
  type: "object";
  object: ObjectType;
}

export interface DataType_objectSet {
  type: "objectSet";
  objectSet: ObjectSetType;
}

export interface DataType_ontologyEdit {
  type: "ontologyEdit";
  ontologyEdit: OntologyEditType;
}

export interface DataType_range {
  type: "range";
  range: RangeType;
}

export interface DataType_functionCustomType {
  type: "functionCustomType";
  functionCustomType: CustomTypeId;
}

export interface DataType_optionalType {
  type: "optionalType";
  optionalType: OptionalType;
}

export interface DataType_anonymousCustomType {
  type: "anonymousCustomType";
  anonymousCustomType: AnonymousCustomType;
}

export interface DataType_twoDimensionalAggregation {
  type: "twoDimensionalAggregation";
  twoDimensionalAggregation: TwoDimensionalAggregationType;
}

export interface DataType_threeDimensionalAggregation {
  type: "threeDimensionalAggregation";
  threeDimensionalAggregation: ThreeDimensionalAggregationType;
}

export interface DataType_principal {
  type: "principal";
  principal: PrincipalType;
}

export interface DataType_user {
  type: "user";
  user: UserType;
}

export interface DataType_group {
  type: "group";
  group: GroupType;
}

export interface DataType_notification {
  type: "notification";
  notification: NotificationType;
}

export interface DataType_modelGraph {
  type: "modelGraph";
  modelGraph: ModelGraphType;
}

export interface DataType_timeSeries {
  type: "timeSeries";
  timeSeries: TimeSeriesType;
}

export interface DataType_geoShape {
  type: "geoShape";
  geoShape: GeoShapeType;
}

export interface DataType_marking {
  type: "marking";
  marking: MarkingType;
}

export interface DataType_binary {
  type: "binary";
  binary: BinaryType;
}

export interface DataType_byte {
  type: "byte";
  byte: ByteType;
}

export interface DataType_short {
  type: "short";
  short: ShortType;
}

export interface DataType_vector {
  type: "vector";
  vector: VectorType;
}
/**
 * All types supported by the Function Registry.
 */
export type DataType =
  | DataType_boolean
  | DataType_integer
  | DataType_long
  | DataType_float
  | DataType_double
  | DataType_decimal
  | DataType_string
  | DataType_date
  | DataType_timestamp
  | DataType_attachment
  | DataType_mediaReference
  | DataType_list
  | DataType_logical
  | DataType_logicalV2
  | DataType_set
  | DataType_map
  | DataType_object
  | DataType_objectSet
  | DataType_ontologyEdit
  | DataType_range
  | DataType_functionCustomType
  | DataType_optionalType
  | DataType_anonymousCustomType
  | DataType_twoDimensionalAggregation
  | DataType_threeDimensionalAggregation
  | DataType_principal
  | DataType_user
  | DataType_group
  | DataType_notification
  | DataType_modelGraph
  | DataType_timeSeries
  | DataType_geoShape
  | DataType_marking
  | DataType_binary
  | DataType_byte
  | DataType_short
  | DataType_vector;

export interface DateType {
}
export type DateValue = string;
export interface DecimalType {
}
export interface DoubleType {
}
export type DoubleValue = number | "NaN" | "Infinity" | "-Infinity";

/**
 * This indicates an enum time series definition.
 */
export interface EnumTimeSeriesType {
}
export interface FloatType {
}
export type FloatValue = number | "NaN" | "Infinity" | "-Infinity";

/**
 * An array of GeoShape types that may contain shapes of any kind.
 */
export interface GeometryCollectionType {
}
/**
 * Represents a single geographic point.
 */
export interface GeoPointType {
}
export interface GeoShapeSubType_geoPoint {
  type: "geoPoint";
  geoPoint: GeoPointType;
}

export interface GeoShapeSubType_polygon {
  type: "polygon";
  polygon: PolygonType;
}

export interface GeoShapeSubType_lineString {
  type: "lineString";
  lineString: LineStringType;
}

export interface GeoShapeSubType_multiGeoPoint {
  type: "multiGeoPoint";
  multiGeoPoint: MultiGeoPointType;
}

export interface GeoShapeSubType_multiPolygon {
  type: "multiPolygon";
  multiPolygon: MultiPolygonType;
}

export interface GeoShapeSubType_multiLineString {
  type: "multiLineString";
  multiLineString: MultiLineStringType;
}

export interface GeoShapeSubType_geometryCollection {
  type: "geometryCollection";
  geometryCollection: GeometryCollectionType;
}
export type GeoShapeSubType =
  | GeoShapeSubType_geoPoint
  | GeoShapeSubType_polygon
  | GeoShapeSubType_lineString
  | GeoShapeSubType_multiGeoPoint
  | GeoShapeSubType_multiPolygon
  | GeoShapeSubType_multiLineString
  | GeoShapeSubType_geometryCollection;

/**
 * Represents a Foundry GeoShape object
 */
export interface GeoShapeType {
  subType?: GeoShapeSubType | null | undefined;
}
/**
 * Represents a multipass group object.
 */
export interface GroupType {
}
export type InputName = string;
export interface IntegerType {
}
export type IntegerValue = number;

/**
 * Represents a line made of two or more points.
 */
export interface LineStringType {
}
export interface ListType {
  elementsType: DataType;
}
export interface ListValue {
  values: Array<Value>;
}
export interface LogicalTypeReference_ontologyTypeRegistryReference {
  type: "ontologyTypeRegistryReference";
  ontologyTypeRegistryReference: _api_ValueTypeReference;
}
export type LogicalTypeReference =
  LogicalTypeReference_ontologyTypeRegistryReference;

export interface LongType {
}
export type LongValue = number;
export interface MandatoryMarkingType {
}
export interface MapType {
  keysType: DataType;
  valuesType: DataType;
}
export interface MarkingSubType_classificationMarking {
  type: "classificationMarking";
  classificationMarking: ClassificationMarkingType;
}

export interface MarkingSubType_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: MandatoryMarkingType;
}
export type MarkingSubType =
  | MarkingSubType_classificationMarking
  | MarkingSubType_mandatoryMarking;

export interface MarkingType {
  subType: MarkingSubType;
}
export interface MediaReferenceType {
}
export interface ModelGraphType {
}
/**
 * An array of unconnected, but likely related points.
 */
export interface MultiGeoPointType {
}
/**
 * An array of linestrings.
 */
export interface MultiLineStringType {
}
/**
 * An array of polygons.
 */
export interface MultiPolygonType {
}
export interface NestedBucketType {
  keyType: BucketKeyType;
  subBucketType: SingleBucketType;
}
/**
 * Represents a Foundry notification
 */
export interface NotificationType {
}
/**
 * This indicates a numeric time series definition.
 */
export interface NumericTimeSeriesType {
}
export interface ObjectLocatorValue {
  primaryKey: ObjectPrimaryKey;
  typeId: _api_ObjectTypeReference;
}
export type ObjectPrimaryKey = Record<_api_ObjectTypePropertyReference, any>;
export interface ObjectSetType {
  objectTypeId: _api_ObjectTypeReference;
}
export interface ObjectType {
  objectTypeId: _api_ObjectTypeReference;
}
export interface OntologyEditType {
}
export interface OptionalType {
  wrappedType: DataType;
}
export type OutputName = string;

/**
 * Represents a an arbitrary n sided polygon with n+1 GeoPoints.
 */
export interface PolygonType {
}
/**
 * Represents a multipass principal object.
 */
export interface PrincipalType {
}
export interface RangeType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface RangeType_double {
  type: "double";
  double: DoubleType;
}

export interface RangeType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface RangeType_date {
  type: "date";
  date: DateType;
}
export type RangeType =
  | RangeType_integer
  | RangeType_double
  | RangeType_timestamp
  | RangeType_date;

export interface SetType {
  elementsType: DataType;
}
export interface SetValue {
  values: Array<Value>;
}
export interface ShortType {
}
export interface SingleBucketType {
  keyType: BucketKeyType;
  valueType: BucketValueType;
}
export interface StringType {
}
export type StringValue = string;
export interface ThreeDimensionalAggregationType {
  nestedBucketType: NestedBucketType;
}
export interface TimeSeriesType {
  valueType: TimeSeriesValueType;
}
export interface TimeSeriesValueType_numeric {
  type: "numeric";
  numeric: NumericTimeSeriesType;
}

export interface TimeSeriesValueType_enum {
  type: "enum";
  enum: EnumTimeSeriesType;
}
export type TimeSeriesValueType =
  | TimeSeriesValueType_numeric
  | TimeSeriesValueType_enum;

export interface TimestampType {
}
export type TimestampValue = string;
export interface TwoDimensionalAggregationType {
  bucketType: SingleBucketType;
}
/**
 * Represents a multipass user object.
 */
export interface UserType {
}
export interface Value_boolean {
  type: "boolean";
  boolean: BooleanValue;
}

export interface Value_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface Value_long {
  type: "long";
  long: LongValue;
}

export interface Value_float {
  type: "float";
  float: FloatValue;
}

export interface Value_double {
  type: "double";
  double: DoubleValue;
}

export interface Value_string {
  type: "string";
  string: StringValue;
}

export interface Value_date {
  type: "date";
  date: DateValue;
}

export interface Value_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface Value_list {
  type: "list";
  list: ListValue;
}

export interface Value_set {
  type: "set";
  set: SetValue;
}

export interface Value_objectLocator {
  type: "objectLocator";
  objectLocator: ObjectLocatorValue;
}
export type Value =
  | Value_boolean
  | Value_integer
  | Value_long
  | Value_float
  | Value_double
  | Value_string
  | Value_date
  | Value_timestamp
  | Value_list
  | Value_set
  | Value_objectLocator;

export interface VectorElementType_double {
  type: "double";
  double: DoubleType;
}
export type VectorElementType = VectorElementType_double;

export interface VectorType {
  dimension: number;
  elementType: VectorElementType;
}
