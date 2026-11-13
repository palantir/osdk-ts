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
export interface AnnotatedType {
  annotations: TypeAnnotations;
  wrappedType: DataType;
}
export interface AnonymousCustomType {
  fieldMetadata?:
    | Record<CustomTypeFieldName, CustomTypeFieldMetadata>
    | null
    | undefined;
  fields: Record<CustomTypeFieldName, DataType>;
}
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
export interface ClientType_ontologySdkClient {
  type: "ontologySdkClient";
  ontologySdkClient: OntologySdkClient;
}

export interface ClientType_platformSdkClient {
  type: "platformSdkClient";
  platformSdkClient: PlatformSdkClient;
}

export interface ClientType_writeableSdkClient {
  type: "writeableSdkClient";
  writeableSdkClient: WriteableSdkClient;
}
export type ClientType =
  | ClientType_ontologySdkClient
  | ClientType_platformSdkClient
  | ClientType_writeableSdkClient;

export interface CustomTypeFieldMetadata {
  required: boolean;
}
export type CustomTypeFieldName = string;
export type CustomTypeId = string;
export interface DataType_client {
  type: "client";
  client: ClientType;
}

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

export interface DataType_attachment {
  type: "attachment";
  attachment: AttachmentType;
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

export interface DataType_object {
  type: "object";
  object: ObjectType;
}

export interface DataType_interface {
  type: "interface";
  interface: InterfaceType;
}

export interface DataType_objectSet {
  type: "objectSet";
  objectSet: ObjectSetType;
}

export interface DataType_interfaceObjectSet {
  type: "interfaceObjectSet";
  interfaceObjectSet: InterfaceObjectSetType;
}

export interface DataType_ontologyEdit {
  type: "ontologyEdit";
  ontologyEdit: OntologyEditType;
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

export interface DataType_range {
  type: "range";
  range: RangeType;
}

export interface DataType_user {
  type: "user";
  user: UserType;
}

export interface DataType_group {
  type: "group";
  group: GroupType;
}

export interface DataType_principal {
  type: "principal";
  principal: PrincipalType;
}

export interface DataType_notification {
  type: "notification";
  notification: NotificationType;
}

export interface DataType_marking {
  type: "marking";
  marking: MarkingType;
}

export interface DataType_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceType;
}

export interface DataType_geoShape {
  type: "geoShape";
  geoShape: GeoShapeType;
}

export interface DataType_durableContext {
  type: "durableContext";
  durableContext: DurableContextType;
}

export interface DataType_union {
  type: "union";
  union: UnionType;
}

export interface DataType_byte {
  type: "byte";
  byte: ByteType;
}

export interface DataType_short {
  type: "short";
  short: ShortType;
}

export interface DataType_binary {
  type: "binary";
  binary: BinaryType;
}

export interface DataType_annotatedType {
  type: "annotatedType";
  annotatedType: AnnotatedType;
}
export type DataType =
  | DataType_client
  | DataType_boolean
  | DataType_integer
  | DataType_long
  | DataType_float
  | DataType_double
  | DataType_string
  | DataType_date
  | DataType_timestamp
  | DataType_attachment
  | DataType_list
  | DataType_set
  | DataType_map
  | DataType_object
  | DataType_interface
  | DataType_objectSet
  | DataType_interfaceObjectSet
  | DataType_ontologyEdit
  | DataType_functionCustomType
  | DataType_optionalType
  | DataType_anonymousCustomType
  | DataType_twoDimensionalAggregation
  | DataType_threeDimensionalAggregation
  | DataType_range
  | DataType_user
  | DataType_group
  | DataType_principal
  | DataType_notification
  | DataType_marking
  | DataType_mediaReference
  | DataType_geoShape
  | DataType_durableContext
  | DataType_union
  | DataType_byte
  | DataType_short
  | DataType_binary
  | DataType_annotatedType;

export interface DateType {}
export interface DoubleType {}
export interface DurableContextType {}
export interface FloatType {}
export interface GeometryCollectionType {}
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
export interface GroupType {}
export interface IntegerType {}
export interface InterfaceObjectSetType {
  interfaceTypeRid: InterfaceTypeRid;
}
export interface InterfaceType {
  interfaceTypeRid: InterfaceTypeRid;
}
export type InterfaceTypeRid = string;
export interface LineStringType {}
export interface ListType {
  elementsType: DataType;
}
export interface LongType {}
export interface MandatoryMarkingType {}
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
export interface MediaReferenceType {}
export interface MultiGeoPointType {}
export interface MultiLineStringType {}
export interface MultiPolygonType {}
export interface NestedBucketType {
  keyType: BucketKeyType;
  subBucketType: SingleBucketType;
}
export interface NotificationType {}
export interface ObjectSetType {
  objectTypeId: ObjectTypeId;
}
export interface ObjectType {
  objectTypeId: ObjectTypeId;
  osdkFilePath?: OsdkFilePath | null | undefined;
}
export type ObjectTypeId = string;
export interface OntologyEditType {}
export interface OntologySdkClient {}
export interface OptionalType {
  wrappedType: DataType;
}
export type OsdkFilePath = string;
export interface PlatformSdkClient {}
export interface PolygonType {}
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

export interface SetType {
  elementsType: DataType;
}
export interface ShortType {}
export interface SingleBucketType {
  keyType: BucketKeyType;
  valueType: BucketValueType;
}
export interface StringType {}
export interface ThreeDimensionalAggregationType {
  nestedBucketType: NestedBucketType;
}
export interface TimestampType {}
export interface TwoDimensionalAggregationType {
  bucketType: SingleBucketType;
}
export interface TypeAnnotations_v1 {
  type: "v1";
  v1: TypeAnnotationsV1;
}
export type TypeAnnotations = TypeAnnotations_v1;

export interface TypeAnnotationsV1 {
  annotations: Record<string, string>;
}
export interface UnionType {
  allowedTypes: Array<DataType>;
}
export interface UserType {}
export interface WriteableSdkClient {}
