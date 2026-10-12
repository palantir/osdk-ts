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
export interface ActionType {
  actionTypeRids: Array<ActionTypeRid>;
}
export type ActionTypeRid = string;
export interface AttachmentType {}
export interface BinaryType {}
export interface BooleanType {}
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

export interface ByteType {}
export interface ClassificationMarkingType {}
export interface DateType {}
/**
 * A function registered with a Decimal type input or output must provide guarantees that it can correctly handle
 * any decimal value within the valid range as specified by the field's scale and precision.
 *
 * For example, a function registered with a Decimal input of precision 5 and scale 3 should be able to correctly
 * handle any decimal value between 0.000 and 99.999, inclusive.
 *
 * Note that numbers such as 3 and 4.1 are inside of this valid range even though their values are not written
 * with precision 5 and scale 3.
 */
export interface DecimalType {
  precision?: number | null | undefined;
  scale?: number | null | undefined;
}
export interface DoubleType {}
/**
 * This indicates an enum time series definition.
 */
export interface EnumTimeSeriesType {}
export interface FloatType {}
/**
 * An array of GeoShape types that may contain shapes of any kind.
 */
export interface GeometryCollectionType {}
/**
 * Represents a single geographic point.
 */
export interface GeoPointType {}
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
export interface GroupType {}
export interface IntegerType {}
/**
 * Represents a line made of two or more points.
 */
export interface LineStringType {}
export interface ListType {
  elementsType: ResolvedDataType;
}
export interface LongType {}
export interface MandatoryMarkingType {}
export interface MapType {
  keysType: ResolvedDataType;
  valuesType: ResolvedDataType;
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
export interface ModelGraphType {}
/**
 * An array of unconnected, but likely related points.
 */
export interface MultiGeoPointType {}
/**
 * An array of linestrings.
 */
export interface MultiLineStringType {}
/**
 * An array of polygons.
 */
export interface MultiPolygonType {}
export interface NestedBucketType {
  keyType: BucketKeyType;
  subBucketType: SingleBucketType;
}
/**
 * Represents a Foundry notification
 */
export interface NotificationType {}
/**
 * This indicates a numeric time series definition.
 */
export interface NumericTimeSeriesType {}
export interface ObjectSetType {
  objectTypeId: ObjectTypeId;
}
export interface ObjectType {
  objectTypeId: ObjectTypeId;
}
export type ObjectTypeId = string;
export interface OntologyEditType {}
export interface OptionalType {
  wrappedType: ResolvedDataType;
}
/**
 * Represents a an arbitrary n sided polygon with n+1 GeoPoints.
 */
export interface PolygonType {}
/**
 * Represents a multipass principal object.
 */
export interface PrincipalType {}
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

export interface ResolvedDataType_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface ResolvedDataType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface ResolvedDataType_long {
  type: "long";
  long: LongType;
}

export interface ResolvedDataType_float {
  type: "float";
  float: FloatType;
}

export interface ResolvedDataType_double {
  type: "double";
  double: DoubleType;
}

export interface ResolvedDataType_decimal {
  type: "decimal";
  decimal: DecimalType;
}

export interface ResolvedDataType_string {
  type: "string";
  string: StringType;
}

export interface ResolvedDataType_date {
  type: "date";
  date: DateType;
}

export interface ResolvedDataType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface ResolvedDataType_attachment {
  type: "attachment";
  attachment: AttachmentType;
}

export interface ResolvedDataType_list {
  type: "list";
  list: ListType;
}

export interface ResolvedDataType_set {
  type: "set";
  set: SetType;
}

export interface ResolvedDataType_map {
  type: "map";
  map: MapType;
}

export interface ResolvedDataType_object {
  type: "object";
  object: ObjectType;
}

export interface ResolvedDataType_objectSet {
  type: "objectSet";
  objectSet: ObjectSetType;
}

export interface ResolvedDataType_ontologyEdit {
  type: "ontologyEdit";
  ontologyEdit: OntologyEditType;
}

export interface ResolvedDataType_action {
  type: "action";
  action: ActionType;
}

export interface ResolvedDataType_range {
  type: "range";
  range: RangeType;
}

export interface ResolvedDataType_optionalType {
  type: "optionalType";
  optionalType: OptionalType;
}

export interface ResolvedDataType_structId {
  type: "structId";
  structId: StructTypeId;
}

export interface ResolvedDataType_twoDimensionalAggregation {
  type: "twoDimensionalAggregation";
  twoDimensionalAggregation: TwoDimensionalAggregationType;
}

export interface ResolvedDataType_threeDimensionalAggregation {
  type: "threeDimensionalAggregation";
  threeDimensionalAggregation: ThreeDimensionalAggregationType;
}

export interface ResolvedDataType_principal {
  type: "principal";
  principal: PrincipalType;
}

export interface ResolvedDataType_user {
  type: "user";
  user: UserType;
}

export interface ResolvedDataType_group {
  type: "group";
  group: GroupType;
}

export interface ResolvedDataType_notification {
  type: "notification";
  notification: NotificationType;
}

export interface ResolvedDataType_modelGraph {
  type: "modelGraph";
  modelGraph: ModelGraphType;
}

export interface ResolvedDataType_timeSeries {
  type: "timeSeries";
  timeSeries: TimeSeriesType;
}

export interface ResolvedDataType_geoShape {
  type: "geoShape";
  geoShape: GeoShapeType;
}

export interface ResolvedDataType_marking {
  type: "marking";
  marking: MarkingType;
}

export interface ResolvedDataType_binary {
  type: "binary";
  binary: BinaryType;
}

export interface ResolvedDataType_byte {
  type: "byte";
  byte: ByteType;
}

export interface ResolvedDataType_short {
  type: "short";
  short: ShortType;
}

export interface ResolvedDataType_vector {
  type: "vector";
  vector: VectorType;
}

export interface ResolvedDataType_union {
  type: "union";
  union: UnionType;
}
/**
 * All types that can be resolved from the Function Registry DataType.
 */
export type ResolvedDataType =
  | ResolvedDataType_boolean
  | ResolvedDataType_integer
  | ResolvedDataType_long
  | ResolvedDataType_float
  | ResolvedDataType_double
  | ResolvedDataType_decimal
  | ResolvedDataType_string
  | ResolvedDataType_date
  | ResolvedDataType_timestamp
  | ResolvedDataType_attachment
  | ResolvedDataType_list
  | ResolvedDataType_set
  | ResolvedDataType_map
  | ResolvedDataType_object
  | ResolvedDataType_objectSet
  | ResolvedDataType_ontologyEdit
  | ResolvedDataType_action
  | ResolvedDataType_range
  | ResolvedDataType_optionalType
  | ResolvedDataType_structId
  | ResolvedDataType_twoDimensionalAggregation
  | ResolvedDataType_threeDimensionalAggregation
  | ResolvedDataType_principal
  | ResolvedDataType_user
  | ResolvedDataType_group
  | ResolvedDataType_notification
  | ResolvedDataType_modelGraph
  | ResolvedDataType_timeSeries
  | ResolvedDataType_geoShape
  | ResolvedDataType_marking
  | ResolvedDataType_binary
  | ResolvedDataType_byte
  | ResolvedDataType_short
  | ResolvedDataType_vector
  | ResolvedDataType_union;

export interface SetType {
  elementsType: ResolvedDataType;
}
export interface ShortType {}
export interface SingleBucketType {
  keyType: BucketKeyType;
  valueType: BucketValueType;
}
export interface StringType {}
export interface StructType {
  fields: Record<StructTypeFieldName, ResolvedDataType>;
  id: StructTypeId;
}
export type StructTypeFieldName = string;
export type StructTypeId = string;
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

export interface TimestampType {}
export interface TwoDimensionalAggregationType {
  bucketType: SingleBucketType;
}
export interface UnionType {
  subTypes: Array<ResolvedDataType>;
}
/**
 * Represents a multipass user object.
 */
export interface UserType {}
export interface VectorElementType_double {
  type: "double";
  double: DoubleType;
}
export type VectorElementType = VectorElementType_double;

export interface VectorType {
  dimension: number;
  elementType: VectorElementType;
}
