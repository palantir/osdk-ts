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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: SAFE
 */
export interface ByteType {}

/**
 * Log Safety: UNSAFE
 */
export interface DeleteLinkRule {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObjectTypeApiName: ObjectTypeApiName;
  bSideObjectTypeApiName: ObjectTypeApiName;
}

/**
   * The name of the link type in the API. To find the API name for your Link Type, check the Ontology Manager
application.
   *
   * Log Safety: UNSAFE
   */
export type LinkTypeApiName = LooselyBrandedString<"LinkTypeApiName">;

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
export interface TimeseriesType {
  itemType: TimeSeriesItemType;
}

/**
 * A union of the types supported by time series properties.
 *
 * Log Safety: UNSAFE
 */
export type TimeSeriesItemType =
  | { type: "double"; double: DoubleType }
  | { type: "string"; string: StringType };

/**
 * Log Safety: UNSAFE
 */
export type ParameterValue = any;

/**
 * The identifier (name) of a Branch. Example: master.
 *
 * Log Safety: UNSAFE
 */
export type BranchId = LooselyBrandedString<"BranchId">;

/**
 * Contains n different completion choices as specified in the request parameter.
 *
 * Log Safety: UNSAFE
 */
export interface ChatCompletionResponse {
  choices: Array<ChatCompletionChoice>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ChatCompletionChoice {
  message?: ChatMessage;
}

/**
 * The unique identifier of the model parameter.
 *
 * Log Safety: UNSAFE
 */
export type ParameterKey = LooselyBrandedString<"ParameterKey">;

/**
 * Log Safety: UNSAFE
 */
export interface MultiPolygon {
  coordinates: Array<Array<LinearRing>>;
  bbox?: BBox;
}

/**
   * A linear ring is a closed LineString with four or more positions.
The first and last positions are equivalent, and they MUST contain
identical values; their representation SHOULD also be identical.
A linear ring is the boundary of a surface or the boundary of a hole in
a surface.
A linear ring MUST follow the right-hand rule with respect to the area
it bounds, i.e., exterior rings are counterclockwise, and holes are
clockwise.
   *
   * Log Safety: UNSAFE
   */
export type LinearRing = Array<Position>;

/**
   * A GeoJSON object MAY have a member named "bbox" to include
information on the coordinate range for its Geometries, Features, or
FeatureCollections. The value of the bbox member MUST be an array of
length 2*n where n is the number of dimensions represented in the
contained geometries, with all axes of the most southwesterly point
followed by all axes of the more northeasterly point. The axes order
of a bbox follows the axes order of geometries.
   *
   * Log Safety: UNSAFE
   */
export type BBox = Array<Coordinate>;

/**
 * The page size to use for the endpoint.
 *
 * Log Safety: SAFE
 */
export type PageSize = number;

/**
 * Log Safety: SAFE
 */
export interface UnsupportedType {
  unsupportedType: string;
}

/**
 * A description or explanation of what this model deployment does and is intended to be used for.
 *
 * Log Safety: UNSAFE
 */
export type DeploymentDescription = LooselyBrandedString<
  "DeploymentDescription"
>;

/**
 * Log Safety: UNSAFE
 */
export interface QueryArrayType {
  subType: QueryDataType;
}

/**
 * A union of all the types supported by Ontology Query parameters or outputs.
 *
 * Log Safety: UNSAFE
 */
export type QueryDataType =
  | { type: "array"; array: QueryArrayType }
  | { type: "attachment"; attachment: AttachmentType }
  | { type: "boolean"; boolean: BooleanType }
  | { type: "date"; date: DateType }
  | { type: "double"; double: DoubleType }
  | { type: "float"; float: FloatType }
  | { type: "integer"; integer: IntegerType }
  | { type: "long"; long: LongType }
  | { type: "objectSet"; objectSet: OntologyObjectSetType }
  | { type: "object"; object: OntologyObjectType }
  | { type: "set"; set: QuerySetType }
  | { type: "string"; string: StringType }
  | { type: "struct"; struct: QueryStructType }
  | {
    type: "threeDimensionalAggregation";
    threeDimensionalAggregation: ThreeDimensionalAggregation;
  }
  | { type: "timestamp"; timestamp: TimestampType }
  | {
    type: "twoDimensionalAggregation";
    twoDimensionalAggregation: TwoDimensionalAggregation;
  }
  | { type: "union"; union: QueryUnionType }
  | { type: "null"; null: NullType }
  | { type: "unsupported"; unsupported: UnsupportedType };

/**
 * The name of a field.
 *
 * Log Safety: UNSAFE
 */
export type FieldName = LooselyBrandedString<"FieldName">;

/**
 * Log Safety: SAFE
 */
export interface GeoShapeType {}

/**
 * Log Safety: UNSAFE
 */
export type ObjectEdit =
  | { type: "addObject"; addObject: AddObject }
  | { type: "modifyObject"; modifyObject: ModifyObject }
  | { type: "addLink"; addLink: AddLink };

/**
 * Log Safety: UNSAFE
 */
export interface AddObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModifyObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface AddLink {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObject: LinkSideObject;
  bSideObject: LinkSideObject;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectTypeEdits {
  editedObjectTypes: Array<ObjectTypeApiName>;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectType {
  objectApiName: ObjectTypeApiName;
  objectTypeApiName: ObjectTypeApiName;
}

/**
   * GeoJSon fundamental geometry construct.
A position is an array of numbers. There MUST be two or more elements.
The first two elements are longitude and latitude, precisely in that order and using decimal numbers.
Altitude or elevation MAY be included as an optional third element.
Implementations SHOULD NOT extend positions beyond three elements
because the semantics of extra elements are unspecified and ambiguous.
Historically, some implementations have used a fourth element to carry
a linear referencing measure (sometimes denoted as "M") or a numerical
timestamp, but in most situations a parser will not be able to properly
interpret these values. The interpretation and meaning of additional
elements is beyond the scope of this specification, and additional
elements MAY be ignored by parsers.
   *
   * Log Safety: UNSAFE
   */
export type Position = Array<Coordinate>;

/**
 * An object definition representing an input or an output type for the deployment API.
 *
 * Log Safety: UNSAFE
 */
export interface ModelApiDataType {
  name?: FieldName;
  required?: boolean;
  propertyType?: ModelApiType;
}

/**
 * A union of all the types supported by models.
 *
 * Log Safety: UNSAFE
 */
export type ModelApiType =
  | { type: "any"; any: AnyType }
  | { type: "array"; array: ModelApiArrayType }
  | { type: "boolean"; boolean: BooleanType }
  | { type: "date"; date: DateType }
  | { type: "float"; float: FloatType }
  | { type: "integer"; integer: IntegerType }
  | { type: "map"; map: ModelApiMapType }
  | { type: "null"; null: NullType }
  | { type: "string"; string: StringType }
  | { type: "struct"; struct: ModelApiStructType }
  | { type: "timestamp"; timestamp: TimestampType }
  | { type: "union"; union: ModelApiUnionType };

/**
 * Metadata related to a model deployment.
 *
 * Log Safety: UNSAFE
 */
export interface DeploymentMetadata {
  apiName: DeploymentApiName;
  description?: DeploymentDescription;
  api: DeploymentApi;
}

/**
 * Log Safety: SAFE
 */
export type DeploymentApiName = LooselyBrandedString<"DeploymentApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface DeploymentApi {
  transform?: DeploymentTransformApi;
}

/**
 * Log Safety: SAFE
 */
export interface MarkingType {}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyStructField {
  name: StructFieldName;
  fieldType: OntologyDataType;
  required: boolean;
}

/**
 * The name of a field in a Struct.
 *
 * Log Safety: UNSAFE
 */
export type StructFieldName = LooselyBrandedString<"StructFieldName">;

/**
 * A union of all the primitive types used by Palantir's Ontology-based products.
 *
 * Log Safety: UNSAFE
 */
export type OntologyDataType =
  | { type: "any"; any: AnyType }
  | { type: "binary"; binary: BinaryType }
  | { type: "boolean"; boolean: BooleanType }
  | { type: "byte"; byte: ByteType }
  | { type: "date"; date: DateType }
  | { type: "decimal"; decimal: DecimalType }
  | { type: "double"; double: DoubleType }
  | { type: "float"; float: FloatType }
  | { type: "integer"; integer: IntegerType }
  | { type: "long"; long: LongType }
  | { type: "marking"; marking: MarkingType }
  | { type: "short"; short: ShortType }
  | { type: "string"; string: StringType }
  | { type: "timestamp"; timestamp: TimestampType }
  | { type: "array"; array: OntologyArrayType }
  | { type: "map"; map: OntologyMapType }
  | { type: "set"; set: OntologySetType }
  | { type: "struct"; struct: OntologyStructType }
  | { type: "object"; object: OntologyObjectType }
  | { type: "objectSet"; objectSet: OntologyObjectSetType }
  | { type: "unsupported"; unsupported: UnsupportedType };

/**
   * Represents the value of a property in the following format.
| Type       | JSON encoding                                         | Example                                                                                            |
|----------- |-------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Array      | array                                                 | ["alpha", "bravo", "charlie"]                                                                    |
| Attachment | JSON encoded AttachmentProperty object              | {"rid":"ri.blobster.main.attachment.2f944bae-5851-4204-8615-920c969a9f2e"}                       |
| Boolean    | boolean                                               | true                                                                                             |
| Byte       | number                                                | 31                                                                                               |
| Date       | ISO 8601 extended local date string                   | "2021-05-01"                                                                                     |
| Decimal    | string                                                | "2.718281828"                                                                                    |
| Double     | number                                                | 3.14159265                                                                                       |
| Float      | number                                                | 3.14159265                                                                                       |
| GeoPoint   | geojson                                               | {"type":"Point","coordinates":[102.0,0.5]}                                                       |
| GeoShape   | geojson                                               | {"type":"LineString","coordinates":[[102.0,0.0],[103.0,1.0],[104.0,0.0],[105.0,1.0]]}            |
| Integer    | number                                                | 238940                                                                                           |
| Long       | string                                                | "58319870951433"                                                                                 |
| Short      | number                                                | 8739                                                                                             |
| String     | string                                                | "Call me Ishmael"                                                                                |
| Timestamp  | ISO 8601 extended offset date-time string in UTC zone | "2021-01-04T05:00:00Z"                                                                           |
   *
   * Log Safety: UNSAFE
   */
export type PropertyValue = any;

/**
 * Log Safety: SAFE
 */
export type ChatMessageRole = "SYSTEM" | "ASSISTANT" | "USER";

/**
 * A union of all the types supported by query aggregation ranges.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationRangeSubType =
  | { type: "date"; date: DateType }
  | { type: "double"; double: DoubleType }
  | { type: "integer"; integer: IntegerType }
  | { type: "timestamp"; timestamp: TimestampType };

/**
 * Log Safety: SAFE
 */
export interface DateType {}

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
   * GeoJSon geometry collection
GeometryCollections composed of a single part or a number of parts of a
single type SHOULD be avoided when that single part or a single object
of multipart type (MultiPoint, MultiLineString, or MultiPolygon) could
be used instead.
   *
   * Log Safety: UNSAFE
   */
export interface GeometryCollection {
  geometries: Array<Geometry>;
  bbox?: BBox;
}

/**
 * Abstract type for all GeoJSon object except Feature and FeatureCollection
 *
 * Log Safety: UNSAFE
 */
export type Geometry =
  | { type: "Point"; Point: GeoPoint }
  | { type: "MultiPoint"; MultiPoint: MultiPoint }
  | { type: "LineString"; LineString: LineString }
  | { type: "MultiLineString"; MultiLineString: MultiLineString }
  | { type: "Polygon"; Polygon: Polygon }
  | { type: "MultiPolygon"; MultiPolygon: MultiPolygon }
  | { type: "GeometryCollection"; GeometryCollection: GeometryCollection };

/**
 * Log Safety: UNSAFE
 */
export interface GeoPoint {
  coordinates: Position;
  bbox?: BBox;
}

/**
 * Represents a language model.
 *
 * Log Safety: UNSAFE
 */
export interface LanguageModel {
  apiName?: LanguageModelApiName;
  source?: LanguageModelSource;
}

/**
   * The name of the language model in the API. To find the API name for your model, use the List language models
endpoint.
   *
   * Log Safety: UNSAFE
   */
export type LanguageModelApiName = LooselyBrandedString<"LanguageModelApiName">;

/**
 * Log Safety: SAFE
 */
export type LanguageModelSource = "global" | "hosted";

/**
 * Log Safety: SAFE
 */
export interface BinaryType {}

/**
 * Log Safety: UNSAFE
 */
export interface ChatMessage {
  role: ChatMessageRole;
  content?: string;
}

/**
 * An ISO 8601 formatted duration.
 *
 * Log Safety: UNSAFE
 */
export type Duration = LooselyBrandedString<"Duration">;

/**
 * Log Safety: SAFE
 */
export interface FilesystemResource {}

/**
 * Log Safety: UNSAFE
 */
export type FeatureCollectionTypes = { type: "Feature"; Feature: Feature };

/**
 * GeoJSon 'Feature' object
 *
 * Log Safety: UNSAFE
 */
export interface Feature {
  geometry?: Geometry;
  properties: Record<FeaturePropertyKey, any>;
  id?: any;
  bbox?: BBox;
}

/**
 * The type of a Transaction.
 *
 * Log Safety: SAFE
 */
export type TransactionType = "APPEND" | "UPDATE" | "SNAPSHOT" | "DELETE";

/**
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRangeType {
  subType: QueryAggregationRangeSubType;
}

/**
 * Log Safety: UNSAFE
 */
export interface ChatCompletionRequest {
  messages: Array<ChatMessage>;
  parameters: Record<ParameterKey, ParameterValue>;
}

/**
 * Log Safety: SAFE
 */
export type RelativeTimeRelation = "BEFORE" | "AFTER";

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiMapType {
  keyType: ModelApiType;
  valueType: ModelApiType;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryUnionType {
  unionTypes: Array<QueryDataType>;
}

/**
   * GeoJSon object
The coordinate reference system for all GeoJSON coordinates is a
geographic coordinate reference system, using the World Geodetic System
1984 (WGS 84) datum, with longitude and latitude units of decimal
degrees.
This is equivalent to the coordinate reference system identified by the
Open Geospatial Consortium (OGC) URN
An OPTIONAL third-position element SHALL be the height in meters above
or below the WGS 84 reference ellipsoid.
In the absence of elevation values, applications sensitive to height or
depth SHOULD interpret positions as being at local ground or sea level.
   *
   * Log Safety: UNSAFE
   */
export type GeoJsonObject =
  | { type: "Feature"; Feature: Feature }
  | { type: "FeatureCollection"; FeatureCollection: FeatureCollection }
  | { type: "Point"; Point: GeoPoint }
  | { type: "MultiPoint"; MultiPoint: MultiPoint }
  | { type: "LineString"; LineString: LineString }
  | { type: "MultiLineString"; MultiLineString: MultiLineString }
  | { type: "Polygon"; Polygon: Polygon }
  | { type: "MultiPolygon"; MultiPolygon: MultiPolygon }
  | { type: "GeometryCollection"; GeometryCollection: GeometryCollection };

/**
 * GeoJSon 'FeatureCollection' object
 *
 * Log Safety: UNSAFE
 */
export interface FeatureCollection {
  features: Array<FeatureCollectionTypes>;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export interface MultiPoint {
  coordinates: Array<Position>;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export interface LineString {
  coordinates?: LineStringCoordinates;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export interface MultiLineString {
  coordinates: Array<LineStringCoordinates>;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export interface Polygon {
  coordinates: Array<LinearRing>;
  bbox?: BBox;
}

/**
 * Log Safety: SAFE
 */
export interface AnyType {}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiArrayType {
  subType: ModelApiType;
}

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

/**
 * Log Safety: SAFE
 */
export interface NullType {}

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiStructType {
  fields: Array<ModelApiStructField>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiUnionType {
  unionTypes: Array<ModelApiType>;
}

/**
 * Log Safety: SAFE
 */
export interface AttachmentType {}

/**
 * Log Safety: UNSAFE
 */
export interface ListBranchesResponse {
  nextPageToken?: PageToken;
  data: Array<Branch>;
}

/**
   * The page token indicates where to start paging. This should be omitted from the first page's request.
To fetch the next page, clients should take the value from the nextPageToken field of the previous response
and populate the next request's pageToken field with it.
   *
   * Log Safety: UNSAFE
   */
export type PageToken = LooselyBrandedString<"PageToken">;

/**
 * A Branch of a Dataset.
 *
 * Log Safety: UNSAFE
 */
export interface Branch {
  branchId: BranchId;
  transactionRid?: TransactionRid;
}

/**
 * Name and description associated with a model deployment.
 *
 * Log Safety: UNSAFE
 */
export interface DeploymentListing {
  apiName: DeploymentApiName;
  description?: DeploymentDescription;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryThreeDimensionalAggregation {
  groups: Array<NestedQueryAggregation>;
}

/**
 * Log Safety: UNSAFE
 */
export interface NestedQueryAggregation {
  key: any;
  groups: Array<QueryAggregation>;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectSetType {
  objectApiName?: ObjectTypeApiName;
  objectTypeApiName?: ObjectTypeApiName;
}

/**
 * The release status of the entity.
 *
 * Log Safety: SAFE
 */
export type ReleaseStatus = "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED";

/**
 * A measurement of distance.
 *
 * Log Safety: UNSAFE
 */
export interface Distance {
  value: number;
  unit: DistanceUnit;
}

/**
 * Log Safety: SAFE
 */
export type DistanceUnit =
  | "MILLIMETERS"
  | "CENTIMETERS"
  | "METERS"
  | "KILOMETERS"
  | "INCHES"
  | "FEET"
  | "YARDS"
  | "MILES"
  | "NAUTICAL_MILES";

/**
 * Log Safety: SAFE
 */
export type ObjectSetRid = LooselyBrandedString<"ObjectSetRid">;

/**
 * The Resource Identifier (RID) of a Dataset. Example: ri.foundry.main.dataset.c26f11c8-cdb3-4f44-9f5d-9816ea1c82da.
 *
 * Log Safety: SAFE
 */
export type DatasetRid = LooselyBrandedString<"DatasetRid">;

/**
 * Log Safety: UNSAFE
 */
export interface CreateLinkRule {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObjectTypeApiName: ObjectTypeApiName;
  bSideObjectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export type Coordinate = number;

/**
 * A union of all the types supported by Ontology Action parameters.
 *
 * Log Safety: UNSAFE
 */
export type ActionParameterType =
  | { type: "array"; array: ActionParameterArrayType }
  | { type: "attachment"; attachment: AttachmentType }
  | { type: "boolean"; boolean: BooleanType }
  | { type: "date"; date: DateType }
  | { type: "double"; double: DoubleType }
  | { type: "integer"; integer: IntegerType }
  | { type: "long"; long: LongType }
  | { type: "marking"; marking: MarkingType }
  | { type: "objectSet"; objectSet: OntologyObjectSetType }
  | { type: "object"; object: OntologyObjectType }
  | { type: "string"; string: StringType }
  | { type: "timestamp"; timestamp: TimestampType };

/**
 * Log Safety: UNSAFE
 */
export interface ActionParameterArrayType {
  subType: ActionParameterType;
}

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
 * Log Safety: UNSAFE
 */
export type DatasetName = LooselyBrandedString<"DatasetName">;

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
export interface ThreeDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: TwoDimensionalAggregation;
}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationKeyType =
  | { type: "boolean"; boolean: BooleanType }
  | { type: "date"; date: DateType }
  | { type: "double"; double: DoubleType }
  | { type: "integer"; integer: IntegerType }
  | { type: "string"; string: StringType }
  | { type: "timestamp"; timestamp: TimestampType }
  | { type: "range"; range: QueryAggregationRangeType };

/**
 * Log Safety: UNSAFE
 */
export interface TwoDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: QueryAggregationValueType;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiStructField {
  name: string;
  fieldType: ModelApiType;
}

/**
 * Log Safety: UNSAFE
 */
export interface Dataset {
  rid: DatasetRid;
  name: DatasetName;
  parentFolderRid: FolderRid;
}

/**
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

/**
 * GeoJSon fundamental geometry construct, array of two or more positions.
 *
 * Log Safety: UNSAFE
 */
export type LineStringCoordinates = Array<Position>;

/**
 * A reference to the linked entity. This can either be an object or an interface type.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceLinkTypeLinkedEntityApiName =
  | {
    type: "interfaceTypeApiName";
    interfaceTypeApiName: LinkedInterfaceTypeApiName;
  }
  | { type: "objectTypeApiName"; objectTypeApiName: LinkedObjectTypeApiName };

/**
 * A reference to the linked interface type.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedInterfaceTypeApiName {
  apiName: InterfaceTypeApiName;
}

/**
 * A reference to the linked object type.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedObjectTypeApiName {
  apiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateBranchRequest {
  branchId: BranchId;
  transactionRid?: TransactionRid;
}

/**
 * The Resource Identifier (RID) of a Transaction. Example: ri.foundry.main.transaction.0a0207cb-26b7-415b-bc80-66a3aa3933f4.
 *
 * Log Safety: SAFE
 */
export type TransactionRid = LooselyBrandedString<"TransactionRid">;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyMapType {
  keyType: OntologyDataType;
  valueType: OntologyDataType;
}

/**
 * Log Safety: UNSAFE
 */
export type SdkPackageName = LooselyBrandedString<"SdkPackageName">;

/**
 * Log Safety: UNSAFE
 */
export interface LinkSideObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * Log Safety: SAFE
 */
export interface GeoPointType {}

/**
 * An operation that modifies the files within a dataset.
 *
 * Log Safety: UNSAFE
 */
export interface Transaction {
  rid: TransactionRid;
  transactionType: TransactionType;
  status: TransactionStatus;
  createdTime: string;
  closedTime?: string;
}

/**
 * The status of a Transaction.
 *
 * Log Safety: SAFE
 */
export type TransactionStatus = "ABORTED" | "COMMITTED" | "OPEN";

/**
 * Log Safety: UNSAFE
 */
export interface DeleteObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface File {
  path: FilePath;
  transactionRid: TransactionRid;
  sizeBytes?: string;
  updatedTime: string;
}

/**
 * The path to a File within Foundry. Examples: my-file.txt, path/to/my-file.jpg, dataframe.snappy.parquet.
 *
 * Log Safety: UNSAFE
 */
export type FilePath = LooselyBrandedString<"FilePath">;

/**
 * A union of all the types supported by Ontology Object properties.
 *
 * Log Safety: UNSAFE
 */
export type ObjectPropertyType =
  | { type: "array"; array: OntologyObjectArrayType }
  | { type: "attachment"; attachment: AttachmentType }
  | { type: "boolean"; boolean: BooleanType }
  | { type: "byte"; byte: ByteType }
  | { type: "date"; date: DateType }
  | { type: "decimal"; decimal: DecimalType }
  | { type: "double"; double: DoubleType }
  | { type: "float"; float: FloatType }
  | { type: "geopoint"; geopoint: GeoPointType }
  | { type: "geoshape"; geoshape: GeoShapeType }
  | { type: "integer"; integer: IntegerType }
  | { type: "long"; long: LongType }
  | { type: "marking"; marking: MarkingType }
  | { type: "short"; short: ShortType }
  | { type: "string"; string: StringType }
  | { type: "timestamp"; timestamp: TimestampType }
  | { type: "timeseries"; timeseries: TimeseriesType };

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectArrayType {
  subType: ObjectPropertyType;
}

/**
 * Log Safety: SAFE
 */
export interface DecimalType {
  precision?: number;
  scale?: number;
}

/**
 * Log Safety: SAFE
 */
export interface ShortType {}

/**
 * Log Safety: UNSAFE
 */
export interface QueryTwoDimensionalAggregation {
  groups: Array<QueryAggregation>;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryAggregation {
  key: any;
  value: any;
}

/**
   * A string indicating the type of each data value. Note that these types can be nested, for example an array of
structs.
| Type                | JSON value                                                                                                        |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| Array               | Array<T>, where T is the type of the array elements, e.g. Array<String>.                                    |
| Attachment          | Attachment                                                                                                      |
| Boolean             | Boolean                                                                                                         |
| Byte                | Byte                                                                                                            |
| Date                | LocalDate                                                                                                       |
| Decimal             | Decimal                                                                                                         |
| Double              | Double                                                                                                          |
| Float               | Float                                                                                                           |
| Integer             | Integer                                                                                                         |
| Long                | Long                                                                                                            |
| Marking             | Marking                                                                                                         |
| OntologyObject      | OntologyObject<T> where T is the API name of the referenced object type.                                      |
| Short               | Short                                                                                                           |
| String              | String                                                                                                          |
| Struct              | Struct<T> where T contains field name and type pairs, e.g. Struct<{ firstName: String, lastName: string }>  |
| Timeseries          | TimeSeries<T> where T is either String for an enum series or Double for a numeric series.                 |
| Timestamp           | Timestamp                                                                                                       |
   *
   * Log Safety: SAFE
   */
export type ValueType = LooselyBrandedString<"ValueType">;

/**
   * The name of the interface type in the API in UpperCamelCase format. To find the API name for your interface
type, use the List interface types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type InterfaceTypeApiName = LooselyBrandedString<"InterfaceTypeApiName">;

/**
 * A Foundry User ID.
 *
 * Log Safety: SAFE
 */
export type UserId = string;

/**
 * Log Safety: UNSAFE
 */
export interface DeploymentTransformApi {
  inputs: Array<ModelApiDataType>;
  outputs: Array<ModelApiDataType>;
}

/**
 * Log Safety: UNSAFE
 */
export type FeaturePropertyKey = LooselyBrandedString<"FeaturePropertyKey">;

/**
 * Log Safety: UNSAFE
 */
export interface QueryStructType {
  fields: Array<QueryStructField>;
}

/**
 * Log Safety: SAFE
 */
export type TimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS"
  | "QUARTERS";

/**
 * Format for tabular dataset export.
 *
 * Log Safety: SAFE
 */
export type TableExportFormat = "ARROW" | "CSV";

/**
 * Log Safety: UNSAFE
 */
export interface CreateDatasetRequest {
  name: DatasetName;
  parentFolderRid: FolderRid;
}

/**
 * Log Safety: SAFE
 */
export interface LocalFilePath {}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationValueType =
  | { type: "date"; date: DateType }
  | { type: "double"; double: DoubleType }
  | { type: "timestamp"; timestamp: TimestampType };

/**
 * Log Safety: UNSAFE
 */
export interface ObjectEdits {
  edits: Array<ObjectEdit>;
  addedObjectCount: number;
  modifiedObjectsCount: number;
  deletedObjectsCount: number;
  addedLinksCount: number;
  deletedLinksCount: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologySetType {
  itemType: OntologyDataType;
}

/**
 * Log Safety: SAFE
 */
export type RelativeTimeSeriesTimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS";

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
 * Log Safety: UNSAFE
 */
export interface OntologyArrayType {
  itemType: OntologyDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyStructType {
  fields: Array<OntologyStructField>;
}

/**
   * The cardinality of the link in the given direction. Cardinality can be "ONE", meaning an object can
link to zero or one other objects, or "MANY", meaning an object can link to any number of other objects.
   *
   * Log Safety: SAFE
   */
export type InterfaceLinkTypeCardinality = "ONE" | "MANY";

/**
 * Log Safety: UNSAFE
 */
export interface QuerySetType {
  subType: QueryDataType;
}

/**
 * Details about the output of a query.
 *
 * Log Safety: UNSAFE
 */
export interface QueryOutputV2 {
  dataType: QueryDataType;
  required: boolean;
}

/**
 * Log Safety: SAFE
 */
export type ContentType = LooselyBrandedString<"ContentType">;

/**
 * Log Safety: UNSAFE
 */
export type LogicRule =
  | { type: "createObject"; createObject: CreateObjectRule }
  | { type: "modifyObject"; modifyObject: ModifyObjectRule }
  | { type: "deleteObject"; deleteObject: DeleteObjectRule }
  | { type: "createLink"; createLink: CreateLinkRule }
  | { type: "deleteLink"; deleteLink: DeleteLinkRule };

/**
 * Log Safety: UNSAFE
 */
export interface CreateObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModifyObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export type ActionResults =
  | { type: "edits"; edits: ObjectEdits }
  | { type: "largeScaleEdits"; largeScaleEdits: ObjectTypeEdits };

/**
 * Log Safety: SAFE
 */
export type ArtifactRepositoryRid = LooselyBrandedString<
  "ArtifactRepositoryRid"
>;

/**
 * Enables the use of preview functionality.
 *
 * Log Safety: SAFE
 */
export type PreviewMode = boolean;

/**
 * A time and value pair.
 *
 * Log Safety: UNSAFE
 */
export interface TimeSeriesPoint {
  time: string;
  value: any;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListLanguageModelsResponse {
  data: Array<LanguageModel>;
}

/**
 * The format of an archive file.
 *
 * Log Safety: SAFE
 */
export type ArchiveFileFormat = "ZIP";

/**
 * Details about a parameter of a query.
 *
 * Log Safety: UNSAFE
 */
export interface QueryParameterV2 {
  description?: string;
  dataType: QueryDataType;
}

/**
 * The time at which the resource was most recently updated.
 *
 * Log Safety: SAFE
 */
export type UpdatedTime = LooselyBrandedString<"UpdatedTime">;

/**
 * A page of Files and an optional page token that can be used to retrieve the next page.
 *
 * Log Safety: UNSAFE
 */
export interface ListFilesResponse {
  nextPageToken?: PageToken;
  data: Array<File>;
}

/**
 * The time at which the resource was created.
 *
 * Log Safety: SAFE
 */
export type CreatedTime = LooselyBrandedString<"CreatedTime">;

/**
 * The parameter expects an array of values and the size of the array must fall within the defined range.
 *
 * Log Safety: UNSAFE
 */
export interface ArraySizeConstraint {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

/**
 * Log Safety: SAFE
 */
export interface CreateTransactionRequest {
  transactionType?: TransactionType;
}

/**
 * A path in the Foundry file tree.
 *
 * Log Safety: UNSAFE
 */
export type ResourcePath = LooselyBrandedString<"ResourcePath">;

/**
 * The size of the file or attachment in bytes.
 *
 * Log Safety: SAFE
 */
export type SizeBytes = string;

/**
 * The display name of the entity.
 *
 * Log Safety: UNSAFE
 */
export type DisplayName = LooselyBrandedString<"DisplayName">;

/**
 * Log Safety: SAFE
 */
export type ContentLength = string;
