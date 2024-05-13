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
 * Log Safety: UNSAFE
 */
export interface ListInterfaceTypesResponse {
  nextPageToken?: PageToken;
  data: Array<InterfaceType>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryResponse {
  value: DataValue;
}

/**
   * By default, anytime an object is requested, every property belonging to that object is returned.
The response can be filtered to only include certain properties using the properties query parameter.
Properties to include can be specified in one of two ways.

A comma delimited list as the value for the properties query parameter
properties={property1ApiName},{property2ApiName}
Multiple properties query parameters.
properties={property1ApiName}&properties={property2ApiName}

The primary key of the object will always be returned even if it wasn't specified in the properties values.
Unknown properties specified in the properties list will result in a PropertiesNotFound error.
To find the API name for your property, use the Get object type endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type SelectedPropertyApiName = LooselyBrandedString<
  "SelectedPropertyApiName"
>;

/**
 * Log Safety: UNSAFE
 */
export type SearchJsonQuery =
  | ({ type: "lt" } & LtQuery)
  | ({ type: "gt" } & GtQuery)
  | ({ type: "lte" } & LteQuery)
  | ({ type: "gte" } & GteQuery)
  | ({ type: "eq" } & EqualsQuery)
  | ({ type: "isNull" } & IsNullQuery)
  | ({ type: "contains" } & ContainsQuery)
  | ({ type: "and" } & AndQuery)
  | ({ type: "or" } & OrQuery)
  | ({ type: "not" } & NotQuery)
  | ({ type: "prefix" } & PrefixQuery)
  | ({ type: "phrase" } & PhraseQuery)
  | ({ type: "anyTerm" } & AnyTermQuery)
  | ({ type: "allTerms" } & AllTermsQuery);

/**
 * The top left and bottom right coordinate points that make up the bounding box.
 *
 * Log Safety: UNSAFE
 */
export interface BoundingBoxValue {
  topLeft: WithinBoundingBoxPoint;
  bottomRight: WithinBoundingBoxPoint;
}

/**
 * Log Safety: SAFE
 */
export interface ByteType {}

/**
 * Returns objects where the specified field is less than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface LteQueryV2 {
  field: PropertyApiName;
  value: any;
}

/**
 * Log Safety: UNSAFE
 */
export interface TimeseriesType {
  itemType: TimeSeriesItemType;
}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionResponseV2 {
  edits?: ActionResults;
}

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
 * Log Safety: UNSAFE
 */
export interface AggregateObjectSetRequestV2 {
  aggregation: Array<AggregationV2>;
  objectSet: ObjectSet;
  groupBy: Array<AggregationGroupByV2>;
  accuracy?: AggregationAccuracyRequest;
}

/**
 * The coordinate point to use as the center of the distance query.
 *
 * Log Safety: UNSAFE
 */
export interface CenterPoint {
  center: CenterPointTypes;
  distance: Distance;
}

/**
 * Represents a query type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface QueryTypeV2 {
  apiName: QueryApiName;
  description?: string;
  displayName?: DisplayName;
  parameters: Record<ParameterId, QueryParameterV2>;
  output: QueryDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * Represents the validity of a parameter against the configured constraints.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterEvaluationResult {
  result: ValidationResult;
  evaluatedConstraints: Array<ParameterEvaluatedConstraint>;
  required: boolean;
}

/**
 * The identifier (name) of a Branch. Example: master.
 *
 * Log Safety: UNSAFE
 */
export type BranchId = LooselyBrandedString<"BranchId">;

/**
 * Returns objects where the specified field is greater than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface GteQueryV2 {
  field: PropertyApiName;
  value: any;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListLinkedObjectsResponse {
  nextPageToken?: PageToken;
  data: Array<OntologyObject>;
}

/**
   * Divides objects into groups based on their object type. This grouping is only useful when aggregating across
multiple object types, such as when aggregating over an interface type.
   *
   * Log Safety: SAFE
   */
export interface AggregationObjectTypeGrouping {}

/**
 * Log Safety: UNSAFE
 */
export interface MultiPolygon {
  coordinates: Array<Array<LinearRing>>;
  bbox?: BBox;
}

/**
 * Log Safety: SAFE
 */
export type ActionMode = "ASYNC" | "RUN" | "VALIDATE";

/**
   * Divides objects into groups according to an interval. Note that this grouping applies only on date and timestamp types.
When grouping by YEARS, QUARTERS, MONTHS, or WEEKS, the value must be set to 1.
   *
   * Log Safety: UNSAFE
   */
export interface AggregationDurationGroupingV2 {
  field: PropertyApiName;
  value: number;
  unit: TimeUnit;
}

/**
 * Computes an approximate number of distinct values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface ApproximateDistinctAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Log Safety: SAFE
 */
export type OrderByDirection = "ASC" | "DESC";

/**
 * ISO 8601 timestamps forming a range for a time series query. Start is inclusive and end is exclusive.
 *
 * Log Safety: UNSAFE
 */
export interface AbsoluteTimeRange {
  startTime?: string;
  endTime?: string;
}

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
 * Log Safety: UNSAFE
 */
export interface ValidateActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregationMetricResultV2 {
  name: string;
  value?: any;
}

/**
 * Returns objects where at least 1 query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface OrQueryV2 {
  value: Array<SearchJsonQueryV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AsyncApplyActionRequestV2 {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyFullMetadata {
  ontology: OntologyV2;
  objectTypes: Record<ObjectTypeApiName, ObjectTypeFullMetadata>;
  actionTypes: Record<ActionTypeApiName, ActionTypeV2>;
  queryTypes: Record<QueryApiName, QueryTypeV2>;
  interfaceTypes: Record<InterfaceTypeApiName, InterfaceType>;
  sharedPropertyTypes: Record<SharedPropertyTypeApiName, SharedPropertyType>;
}

/**
 * Represents the API POST body when loading an ObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetRequestV2 {
  objectSet: ObjectSet;
  orderBy?: SearchOrderByV2;
  select: Array<SelectedPropertyApiName>;
  pageToken?: PageToken;
  pageSize?: PageSize;
  excludeRid?: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesPointsResponse {
  data: Array<TimeSeriesPoint>;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryArrayType {
  subType: QueryDataType;
}

/**
 * Log Safety: SAFE
 */
export interface GeoShapeType {}

/**
 * Divides objects into groups according to an exact value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationExactGrouping {
  field: FieldNameV1;
  maxGroupCount?: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsRequest {
  query: SearchJsonQuery;
  orderBy?: SearchOrderBy;
  pageSize?: PageSize;
  pageToken?: PageToken;
  fields: Array<PropertyApiName>;
}

/**
 * The parameter has a manually predefined set of options.
 *
 * Log Safety: UNSAFE
 */
export interface OneOfConstraint {
  options: Array<ParameterOption>;
  otherValuesAllowed: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export type ObjectEdit =
  | ({ type: "addObject" } & AddObject)
  | ({ type: "modifyObject" } & ModifyObject)
  | ({ type: "addLink" } & AddLink);

/**
   * Divides objects into groups according to an interval. Note that this grouping applies only on date types.
The interval uses the ISO 8601 notation. For example, "PT1H2M34S" represents a duration of 3754 seconds.
   *
   * Log Safety: UNSAFE
   */
export interface AggregationDurationGrouping {
  field: FieldNameV1;
  duration: Duration;
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
 * Represents an object in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export type OntologyObjectV2 = Record<PropertyApiName, PropertyValue>;

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: PageToken;
}

/**
 * Details about a parameter of an action or query.
 *
 * Log Safety: UNSAFE
 */
export interface Parameter {
  description?: string;
  baseType: ValueType;
  dataType?: OntologyDataType;
  required: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetIntersectionType {
  objectSets: Array<ObjectSet>;
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
 * Log Safety: UNSAFE
 */
export interface AsyncApplyActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: SAFE
 */
export interface MarkingType {}

/**
 * Computes the minimum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MinAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Log Safety: UNSAFE
 */
export interface AddObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * The representation of an attachment.
 *
 * Log Safety: UNSAFE
 */
export interface Attachment {
  rid: AttachmentRid;
  filename: Filename;
  sizeBytes: SizeBytes;
  mediaType: MediaType;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyStructField {
  name: StructFieldName;
  fieldType: OntologyDataType;
  required: boolean;
}

/**
 * A union of all the types supported by query aggregation ranges.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationRangeSubType =
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "timestamp" } & TimestampType);

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
 * Log Safety: UNSAFE
 */
export interface GeoPoint {
  coordinates: Position;
  bbox?: BBox;
}

/**
 * Log Safety: SAFE
 */
export interface ApplyActionRequestOptions {
  mode?: ApplyActionMode;
  returnEdits?: ReturnEditsMode;
}

/**
 * Log Safety: SAFE
 */
export interface BinaryType {}

/**
 * An ISO 8601 formatted duration.
 *
 * Log Safety: UNSAFE
 */
export type Duration = LooselyBrandedString<"Duration">;

/**
   * The name of the property in the API. To find the API name for your property, use the Get object type
endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type PropertyApiName = LooselyBrandedString<"PropertyApiName">;

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupValueV2 = any;

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetUnionType {
  objectSets: Array<ObjectSet>;
}

/**
 * The suggested visibility of the object type.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

/**
 * Log Safety: UNSAFE
 */
export interface ListAttachmentsResponseV2 {
  data: Array<AttachmentV2>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: SAFE
 */
export interface FilesystemResource {}

/**
 * Log Safety: SAFE
 */
export interface ObjectSetReferenceType {
  reference: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListObjectsResponseV2 {
  nextPageToken?: PageToken;
  data: Array<OntologyObjectV2>;
}

/**
 * Computes the approximate percentile value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface ApproximatePercentileAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  approximatePercentile: number;
  direction?: OrderByDirection;
}

/**
   * Represents a filter used on properties.
Endpoints that accept this supports optional parameters that have the form:
properties.{propertyApiName}.{propertyFilter}={propertyValueEscapedString} to filter the returned objects.
For instance, you may use properties.firstName.eq=John to find objects that contain a property called
"firstName" that has the exact value of "John".
The following are a list of supported property filters:

properties.{propertyApiName}.contains - supported on arrays and can be used to filter array properties
that have at least one of the provided values. If multiple query parameters are provided, then objects
that have any of the given values for the specified property will be matched.
properties.{propertyApiName}.eq - used to filter objects that have the exact value for the provided
property. If multiple query parameters are provided, then objects that have any of the given values
will be matched. For instance, if the user provides a request by doing
?properties.firstName.eq=John&properties.firstName.eq=Anna, then objects that have a firstName property
of either John or Anna will be matched. This filter is supported on all property types except Arrays.
properties.{propertyApiName}.neq - used to filter objects that do not have the provided property values.
Similar to the eq filter, if multiple values are provided, then objects that have any of the given values
will be excluded from the result.
properties.{propertyApiName}.lt, properties.{propertyApiName}.lte, properties.{propertyApiName}.gt
properties.{propertyApiName}.gte - represent less than, less than or equal to, greater than, and greater
than or equal to respectively. These are supported on date, timestamp, byte, integer, long, double, decimal.
properties.{propertyApiName}.isNull - used to filter objects where the provided property is (or is not) null.
This filter is supported on all property types.
   *
   * Log Safety: SAFE
   */
export type PropertyFilter = LooselyBrandedString<"PropertyFilter">;

/**
 * Log Safety: UNSAFE
 */
export type FeatureCollectionTypes = { type: "Feature" } & Feature;

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseV2 {
  excludedItems?: number;
  accuracy: AggregationAccuracy;
  data: Array<AggregateObjectsResponseItemV2>;
}

/**
   * Returns objects where the specified field contains all of the terms in the order provided,
but they do have to be adjacent to each other.
The last term can be a partial prefix match.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAllTermsInOrderPrefixLastTerm {
  field: PropertyApiName;
  value: string;
}

/**
 * Metadata about an Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface Ontology {
  apiName: OntologyApiName;
  displayName: DisplayName;
  description: string;
  rid: OntologyRid;
}

/**
 * Divides objects into groups with the specified width.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationFixedWidthGrouping {
  field: FieldNameV1;
  fixedWidth: number;
}

/**
   * The name of the shared property type in the API in lowerCamelCase format. To find the API name for your
shared property type, use the List shared property types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type SharedPropertyTypeApiName = LooselyBrandedString<
  "SharedPropertyTypeApiName"
>;

/**
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRangeType {
  subType: QueryAggregationRangeSubType;
}

/**
 * Computes the average value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface AvgAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Details about some property of an object.
 *
 * Log Safety: UNSAFE
 */
export interface PropertyV2 {
  description?: string;
  displayName?: DisplayName;
  dataType: ObjectPropertyType;
}

/**
 * Metadata about an Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyV2 {
  apiName: OntologyApiName;
  displayName: DisplayName;
  description: string;
  rid: OntologyRid;
}

/**
 * Returns objects where the specified field is greater than a value.
 *
 * Log Safety: UNSAFE
 */
export interface GtQueryV2 {
  field: PropertyApiName;
  value: any;
}

/**
 * The unique resource identifier of an interface link type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type InterfaceLinkTypeRid = LooselyBrandedString<"InterfaceLinkTypeRid">;

/**
 * Log Safety: SAFE
 */
export type RelativeTimeRelation = "BEFORE" | "AFTER";

/**
 * Returns objects where the specified array contains a value.
 *
 * Log Safety: UNSAFE
 */
export interface ContainsQueryV2 {
  field: PropertyApiName;
  value: any;
}

/**
 * Returns objects where the query is not satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface NotQuery {
  value: SearchJsonQuery;
}

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
 * Log Safety: UNSAFE
 */
export interface QueryUnionType {
  unionTypes: Array<QueryDataType>;
}

/**
 * A reference to an Ontology object property with the form properties.{propertyApiName}.
 *
 * Log Safety: UNSAFE
 */
export type FieldNameV1 = LooselyBrandedString<"FieldNameV1">;

/**
 * Divides objects into groups according to specified ranges.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangesGrouping {
  field: FieldNameV1;
  ranges: Array<AggregationRange>;
}

/**
 * Returns objects where the specified field is equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface EqualsQueryV2 {
  field: PropertyApiName;
  value: any;
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
  | ({ type: "Feature" } & Feature)
  | ({ type: "FeatureCollection" } & FeatureCollection)
  | ({ type: "Point" } & GeoPoint)
  | ({ type: "MultiPoint" } & MultiPoint)
  | ({ type: "LineString" } & LineString)
  | ({ type: "MultiLineString" } & MultiLineString)
  | ({ type: "Polygon" } & Polygon)
  | ({ type: "MultiPolygon" } & MultiPolygon)
  | ({ type: "GeometryCollection" } & GeometryCollection);

/**
   * Returns objects where the specified field contains all of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching.
   *
   * Log Safety: UNSAFE
   */
export interface AllTermsQuery {
  field: FieldNameV1;
  value: string;
  fuzzy?: Fuzzy;
}

/**
 * Log Safety: SAFE
 */
export interface AttachmentType {}

/**
 * Represents an action type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ActionTypeV2 {
  apiName: ActionTypeApiName;
  description?: string;
  displayName?: DisplayName;
  status: ReleaseStatus;
  parameters: Record<ParameterId, ActionParameterV2>;
  rid: ActionTypeRid;
  operations: Array<LogicRule>;
}

/**
   * The name of the action type in the API. To find the API name for your Action Type, use the List action types
endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ActionTypeApiName = LooselyBrandedString<"ActionTypeApiName">;

/**
 * Specifies a date range from an inclusive start date to an exclusive end date.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRange {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

/**
 * Represents an object type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectTypeV2 {
  apiName: ObjectTypeApiName;
  displayName?: DisplayName;
  status: ReleaseStatus;
  description?: string;
  primaryKey: PropertyApiName;
  properties: Record<PropertyApiName, PropertyV2>;
  rid: ObjectTypeRid;
  titleProperty: PropertyApiName;
  visibility?: ObjectTypeVisibility;
}

/**
 * Log Safety: SAFE
 */
export type LanguageModelSource = "global" | "hosted";

/**
   * The name of the link type in the API. To find the API name for your Link Type, check the Ontology Manager
application.
   *
   * Log Safety: UNSAFE
   */
export type LinkTypeApiName = LooselyBrandedString<"LinkTypeApiName">;

/**
 * The unique resource identifier of an attachment.
 *
 * Log Safety: SAFE
 */
export type AttachmentRid = LooselyBrandedString<"AttachmentRid">;

/**
 * Specifies the ordering of search results by a field and an ordering direction.
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrderByV2 {
  fields: Array<SearchOrderingV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryThreeDimensionalAggregation {
  groups: Array<NestedQueryAggregation>;
}

/**
 * The parameter value must be within the defined range.
 *
 * Log Safety: UNSAFE
 */
export interface RangeConstraint {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

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
export type CenterPointTypes = { type: "Point" } & GeoPoint;

/**
 * The release status of the entity.
 *
 * Log Safety: SAFE
 */
export type ReleaseStatus = "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED";

/**
 * Log Safety: UNSAFE
 */
export interface ListObjectsResponse {
  nextPageToken?: PageToken;
  data: Array<OntologyObject>;
}

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
export interface LinkTypeSideV2 {
  apiName: LinkTypeApiName;
  displayName: DisplayName;
  status: ReleaseStatus;
  objectTypeApiName: ObjectTypeApiName;
  cardinality: LinkTypeSideCardinality;
  foreignKeyPropertyApiName?: PropertyApiName;
}

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
 * A union of all the types supported by Ontology Action parameters.
 *
 * Log Safety: UNSAFE
 */
export type ActionParameterType =
  | ({ type: "array" } & ActionParameterArrayType)
  | ({ type: "attachment" } & AttachmentType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "long" } & LongType)
  | ({ type: "marking" } & MarkingType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "string" } & StringType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * Specifies a grouping for aggregation results.
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupBy =
  | ({ type: "fixedWidth" } & AggregationFixedWidthGrouping)
  | ({ type: "ranges" } & AggregationRangesGrouping)
  | ({ type: "exact" } & AggregationExactGrouping)
  | ({ type: "duration" } & AggregationDurationGrouping);

/**
 * Computes the maximum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MaxAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
   * The unique Resource Identifier (RID) of the Ontology. To look up your Ontology RID, please use the
List ontologies endpoint or check the Ontology Manager.
   *
   * Log Safety: SAFE
   */
export type OntologyRid = LooselyBrandedString<"OntologyRid">;

/**
 * Divides objects into groups according to specified ranges.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangesGroupingV2 {
  field: PropertyApiName;
  ranges: Array<AggregationRangeV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ValidateActionResponse {
  result: ValidationResult;
  submissionCriteria: Array<SubmissionCriteriaEvaluation>;
  parameters: Record<ParameterId, ParameterEvaluationResult>;
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
export interface ThreeDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: TwoDimensionalAggregation;
}

/**
 * Represents an object in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyObject {
  properties: Record<PropertyApiName, PropertyValue | undefined>;
  rid: ObjectRid;
}

/**
 * Represents an object type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectType {
  apiName: ObjectTypeApiName;
  displayName?: DisplayName;
  status: ReleaseStatus;
  description?: string;
  visibility?: ObjectTypeVisibility;
  primaryKey: Array<PropertyApiName>;
  properties: Record<PropertyApiName, Property>;
  rid: ObjectTypeRid;
}

/**
 * Log Safety: SAFE
 */
export interface CreateTemporaryObjectSetResponseV2 {
  objectSetRid: ObjectSetRid;
}

/**
 * Log Safety: UNSAFE
 */
export type SearchJsonQueryV2 =
  | ({ type: "lt" } & LtQueryV2)
  | ({ type: "gt" } & GtQueryV2)
  | ({ type: "lte" } & LteQueryV2)
  | ({ type: "gte" } & GteQueryV2)
  | ({ type: "eq" } & EqualsQueryV2)
  | ({ type: "isNull" } & IsNullQueryV2)
  | ({ type: "contains" } & ContainsQueryV2)
  | ({ type: "and" } & AndQueryV2)
  | ({ type: "or" } & OrQueryV2)
  | ({ type: "not" } & NotQueryV2)
  | ({ type: "startsWith" } & StartsWithQuery)
  | ({ type: "containsAllTermsInOrder" } & ContainsAllTermsInOrderQuery)
  | ({
    type: "containsAllTermsInOrderPrefixLastTerm";
  } & ContainsAllTermsInOrderPrefixLastTerm)
  | ({ type: "containsAnyTerm" } & ContainsAnyTermQuery)
  | ({ type: "containsAllTerms" } & ContainsAllTermsQuery)
  | ({ type: "withinDistanceOf" } & WithinDistanceOfQuery)
  | ({ type: "withinBoundingBox" } & WithinBoundingBoxQuery)
  | ({ type: "intersectsBoundingBox" } & IntersectsBoundingBoxQuery)
  | ({ type: "doesNotIntersectBoundingBox" } & DoesNotIntersectBoundingBoxQuery)
  | ({ type: "withinPolygon" } & WithinPolygonQuery)
  | ({ type: "intersectsPolygon" } & IntersectsPolygonQuery)
  | ({ type: "doesNotIntersectPolygon" } & DoesNotIntersectPolygonQuery);

/**
 * Details about some property of an object.
 *
 * Log Safety: UNSAFE
 */
export interface Property {
  description?: string;
  displayName?: DisplayName;
  baseType: ValueType;
}

/**
 * Returns objects where the specified field contains a point within the distance provided of the center point.
 *
 * Log Safety: UNSAFE
 */
export interface WithinDistanceOfQuery {
  field: PropertyApiName;
  value: CenterPoint;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsRequestV2 {
  where?: SearchJsonQueryV2;
  orderBy?: SearchOrderByV2;
  pageSize?: PageSize;
  pageToken?: PageToken;
  select: Array<PropertyApiName>;
  excludeRid?: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export type OntologyApiName = LooselyBrandedString<"OntologyApiName">;

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * The attachment metadata response
 *
 * Log Safety: UNSAFE
 */
export type AttachmentMetadataResponse =
  | ({ type: "single" } & AttachmentV2)
  | ({ type: "multiple" } & ListAttachmentsResponseV2);

/**
   * Represents the value of a property filter. For instance, false is the FilterValue in
properties.{propertyApiName}.isNull=false.
   *
   * Log Safety: UNSAFE
   */
export type FilterValue = LooselyBrandedString<"FilterValue">;

/**
 * Abstract type for all GeoJSon object except Feature and FeatureCollection
 *
 * Log Safety: UNSAFE
 */
export type Geometry =
  | ({ type: "Point" } & GeoPoint)
  | ({ type: "MultiPoint" } & MultiPoint)
  | ({ type: "LineString" } & LineString)
  | ({ type: "MultiLineString" } & MultiLineString)
  | ({ type: "Polygon" } & Polygon)
  | ({ type: "MultiPolygon" } & MultiPolygon)
  | ({ type: "GeometryCollection" } & GeometryCollection);

/**
 * Log Safety: UNSAFE
 */
export interface ListActionTypesResponseV2 {
  nextPageToken?: PageToken;
  data: Array<ActionTypeV2>;
}

/**
 * Log Safety: SAFE
 */
export type LinkTypeSideCardinality = "ONE" | "MANY";

/**
   * The version of the given Function, written <major>.<minor>.<patch>-<tag>, where -<tag> is optional.
Examples: 1.2.3, 1.2.3-rc1.
   *
   * Log Safety: UNSAFE
   */
export type FunctionVersion = LooselyBrandedString<"FunctionVersion">;

/**
 * Log Safety: UNSAFE
 */
export interface MultiLineString {
  coordinates: Array<LineStringCoordinates>;
  bbox?: BBox;
}

/**
 * A reference to the linked entity. This can either be an object or an interface type.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceLinkTypeLinkedEntityApiName =
  | ({ type: "interfaceTypeApiName" } & LinkedInterfaceTypeApiName)
  | ({ type: "objectTypeApiName" } & LinkedObjectTypeApiName);

/**
 * Log Safety: SAFE
 */
export interface BatchApplyActionRequestOptions {
  returnEdits?: ReturnEditsMode;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyMapType {
  keyType: OntologyDataType;
  valueType: OntologyDataType;
}

/**
   * The unique identifier of the parameter. Parameters are used as inputs when an action or query is applied.
Parameters can be viewed and managed in the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ParameterId = LooselyBrandedString<"ParameterId">;

/**
 * Represents an interface type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface InterfaceType {
  rid: InterfaceTypeRid;
  apiName: InterfaceTypeApiName;
  displayName: DisplayName;
  description?: string;
  properties: Record<SharedPropertyTypeApiName, SharedPropertyType>;
  extendsInterfaces: Array<InterfaceTypeApiName>;
  links: Record<InterfaceLinkTypeApiName, InterfaceLinkType>;
}

/**
 * The unique resource identifier for an action.
 *
 * Log Safety: SAFE
 */
export type ActionRid = LooselyBrandedString<"ActionRid">;

/**
 * Log Safety: UNSAFE
 */
export interface ListQueryTypesResponseV2 {
  nextPageToken?: PageToken;
  data: Array<QueryTypeV2>;
}

/**
 * Log Safety: UNSAFE
 */
export type SdkPackageName = LooselyBrandedString<"SdkPackageName">;

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
export interface LinkSideObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListObjectTypesV2Response {
  nextPageToken?: PageToken;
  data: Array<ObjectTypeV2>;
}

/**
 * A string indicating the API name to use for the interface link.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceLinkTypeApiName = LooselyBrandedString<
  "InterfaceLinkTypeApiName"
>;

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponse {
  excludedItems?: number;
  nextPageToken?: PageToken;
  data: Array<AggregateObjectsResponseItem>;
}

/**
   * Contains the status of the submission criteria.
Submission criteria are the prerequisites that need to be satisfied before an Action can be applied.
These are configured in the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export interface SubmissionCriteriaEvaluation {
  configuredFailureMessage?: string;
  result: ValidationResult;
}

/**
 * Computes the sum of values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SumAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * A union of the types supported by time series properties.
 *
 * Log Safety: UNSAFE
 */
export type TimeSeriesItemType =
  | ({ type: "double" } & DoubleType)
  | ({ type: "string" } & StringType);

/**
 * Log Safety: SAFE
 */
export type ApplyActionMode = "VALIDATE_ONLY" | "VALIDATE_AND_EXECUTE";

/**
 * Log Safety: SAFE
 */
export interface ObjectSetStaticType {
  objects: Array<ObjectRid>;
}

/**
 * Log Safety: SAFE
 */
export interface GeoPointType {}

/**
 * Log Safety: UNSAFE
 */
export interface DeleteObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Returns objects where the specified field is greater than a value.
 *
 * Log Safety: UNSAFE
 */
export interface GtQuery {
  field: FieldNameV1;
  value: any;
}

/**
 * A union of all the types supported by Ontology Object properties.
 *
 * Log Safety: UNSAFE
 */
export type ObjectPropertyType =
  | ({ type: "array" } & OntologyObjectArrayType)
  | ({ type: "attachment" } & AttachmentType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "byte" } & ByteType)
  | ({ type: "date" } & DateType)
  | ({ type: "decimal" } & DecimalType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "float" } & FloatType)
  | ({ type: "geopoint" } & GeoPointType)
  | ({ type: "geoshape" } & GeoShapeType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "long" } & LongType)
  | ({ type: "marking" } & MarkingType)
  | ({ type: "short" } & ShortType)
  | ({ type: "string" } & StringType)
  | ({ type: "timestamp" } & TimestampType)
  | ({ type: "timeseries" } & TimeseriesType);

/**
 * Details about a parameter of an action.
 *
 * Log Safety: UNSAFE
 */
export interface ActionParameterV2 {
  description?: string;
  dataType: ActionParameterType;
  required: boolean;
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
   * The parameter value must have a length within the defined range.
This range is always inclusive.
   *
   * Log Safety: UNSAFE
   */
export interface StringLengthConstraint {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchOrdering {
  field: FieldNameV1;
  direction?: string;
}

/**
 * The name of the Query in the API.
 *
 * Log Safety: UNSAFE
 */
export type QueryApiName = LooselyBrandedString<"QueryApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface QueryTwoDimensionalAggregation {
  groups: Array<QueryAggregation>;
}

/**
 * Returns objects where the specified field contains the provided value as a substring.
 *
 * Log Safety: UNSAFE
 */
export interface PhraseQuery {
  field: FieldNameV1;
  value: string;
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
 * A reference to the linked interface type.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedInterfaceTypeApiName {
  apiName: InterfaceTypeApiName;
}

/**
 * Computes an approximate number of distinct values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface ApproximateDistinctAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * A property type that can be shared across object types.
 *
 * Log Safety: UNSAFE
 */
export interface SharedPropertyType {
  rid: SharedPropertyTypeRid;
  apiName: SharedPropertyTypeApiName;
  displayName: DisplayName;
  description?: string;
  dataType: ObjectPropertyType;
}

/**
 * Returns objects where every query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface AndQueryV2 {
  value: Array<SearchJsonQueryV2>;
}

/**
 * The parameter value must be the primary key of an object found within an object set.
 *
 * Log Safety: SAFE
 */
export interface ObjectQueryResultConstraint {}

/**
 * Log Safety: UNSAFE
 */
export interface ListOutgoingLinkTypesResponseV2 {
  nextPageToken?: PageToken;
  data: Array<LinkTypeSideV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModifyObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * A relative time range for a time series query.
 *
 * Log Safety: UNSAFE
 */
export interface RelativeTimeRange {
  startTime?: RelativeTime;
  endTime?: RelativeTime;
}

/**
 * A Foundry User ID.
 *
 * Log Safety: SAFE
 */
export type UserId = string;

/**
 * Log Safety: UNSAFE
 */
export interface SyncApplyActionResponseV2 {
  validation?: ValidateActionResponseV2;
  edits?: ActionResults;
}

/**
 * Setting fuzzy to true allows approximate matching in search queries that support it.
 *
 * Log Safety: SAFE
 */
export type Fuzzy = boolean;

/**
 * A user-specified alias for an aggregation metric name.
 *
 * Log Safety: UNSAFE
 */
export type AggregationMetricName = LooselyBrandedString<
  "AggregationMetricName"
>;

/**
 * Returns objects where the specified field is less than a value.
 *
 * Log Safety: UNSAFE
 */
export interface LtQueryV2 {
  field: PropertyApiName;
  value: any;
}

/**
 * Specifies a range from an inclusive start value to an exclusive end value.
 *
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRange {
  startValue?: any;
  endValue?: any;
}

/**
 * A UUID representing a custom type in a given Function.
 *
 * Log Safety: SAFE
 */
export type CustomTypeId = LooselyBrandedString<"CustomTypeId">;

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * Computes the minimum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MinAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

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
 * Log Safety: UNSAFE
 */
export interface QueryStructType {
  fields: Array<QueryStructField>;
}

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

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
   * The media type of the file or attachment.
Examples: application/json, application/pdf, application/octet-stream, image/jpeg
   *
   * Log Safety: SAFE
   */
export type MediaType = LooselyBrandedString<"MediaType">;

/**
 * The name of a file or attachment.
 *
 * Log Safety: UNSAFE
 */
export type Filename = LooselyBrandedString<"Filename">;

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
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesPointsRequest {
  range?: TimeRange;
}

/**
 * Represents the definition of an ObjectSet in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export type ObjectSet =
  | ({ type: "base" } & ObjectSetBaseType)
  | ({ type: "static" } & ObjectSetStaticType)
  | ({ type: "reference" } & ObjectSetReferenceType)
  | ({ type: "filter" } & ObjectSetFilterType)
  | ({ type: "union" } & ObjectSetUnionType)
  | ({ type: "intersect" } & ObjectSetIntersectionType)
  | ({ type: "subtract" } & ObjectSetSubtractType)
  | ({ type: "searchAround" } & ObjectSetSearchAroundType);

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
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsRequest {
  aggregation: Array<Aggregation>;
  query?: SearchJsonQuery;
  groupBy: Array<AggregationGroupBy>;
}

/**
 * Log Safety: SAFE
 */
export interface ApplyActionResponse {}

/**
 * Log Safety: SAFE
 */
export interface LocalFilePath {}

/**
 * Log Safety: SAFE
 */
export interface BatchApplyActionResponse {}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsRequestV2 {
  aggregation: Array<AggregationV2>;
  where?: SearchJsonQueryV2;
  groupBy: Array<AggregationGroupByV2>;
  accuracy?: AggregationAccuracyRequest;
}

/**
 * Log Safety: SAFE
 */
export type AsyncApplyActionOperationV2 = undefined; // {"name":"AsyncApplyActionOperationV2","type":{"type":"asyncOperation","asyncOperation":{"operationType":"applyActionAsyncV2","resultType":"AsyncApplyActionOperationResponseV2","stageType":"AsyncActionStatus"}},"safety":"SAFE","documentation":{}}

/**
 * Returns objects based on the existence of the specified field.
 *
 * Log Safety: UNSAFE
 */
export interface IsNullQuery {
  field: FieldNameV1;
  value: boolean;
}

/**
 * A relative time, such as "3 days before" or "2 hours after" the current moment.
 *
 * Log Safety: UNSAFE
 */
export interface RelativeTime {
  when: RelativeTimeRelation;
  value: number;
  unit: RelativeTimeSeriesTimeUnit;
}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationValueType =
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * Represents the value of a property in string format. This is used in URL parameters.
 *
 * Log Safety: UNSAFE
 */
export type PropertyValueEscapedString = LooselyBrandedString<
  "PropertyValueEscapedString"
>;

/**
 * Returns objects where the specified field does not intersect the bounding box provided.
 *
 * Log Safety: UNSAFE
 */
export interface DoesNotIntersectBoundingBoxQuery {
  field: PropertyApiName;
  value: BoundingBoxValue;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTemporaryObjectSetRequestV2 {
  objectSet: ObjectSet;
}

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
 * The parameter value must be the user id of a member belonging to at least one of the groups defined by the constraint.
 *
 * Log Safety: SAFE
 */
export interface GroupMemberConstraint {}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationKeyType =
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "string" } & StringType)
  | ({ type: "timestamp" } & TimestampType)
  | ({ type: "range" } & QueryAggregationRangeType);

/**
 * Specifies a grouping for aggregation results.
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupByV2 =
  | ({ type: "fixedWidth" } & AggregationFixedWidthGroupingV2)
  | ({ type: "ranges" } & AggregationRangesGroupingV2)
  | ({ type: "exact" } & AggregationExactGroupingV2)
  | ({ type: "duration" } & AggregationDurationGroupingV2);

/**
 * Represents the API response when loading an ObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsResponse {
  data: Array<OntologyObject>;
  nextPageToken?: PageToken;
}

/**
 * The representation of an attachment as a data type.
 *
 * Log Safety: SAFE
 */
export interface AttachmentProperty {
  rid: AttachmentRid;
}

/**
   * The immutable ID of a property. Property IDs are only used to identify properties in the Ontology Manager
application and assign them API names. In every other case, API names should be used instead of property IDs.
   *
   * Log Safety: UNSAFE
   */
export type PropertyId = LooselyBrandedString<"PropertyId">;

/**
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequestItem {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * A possible value for the parameter. This is defined in the Ontology Manager by Actions admins.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterOption {
  displayName?: DisplayName;
  value?: any;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologySetType {
  itemType: OntologyDataType;
}

/**
 * Computes the total count of objects.
 *
 * Log Safety: UNSAFE
 */
export interface CountAggregation {
  name?: AggregationMetricName;
}

/**
 * Log Safety: UNSAFE
 */
export type PolygonValue = { type: "Polygon" } & Polygon;

/**
 * Returns objects where the specified field is greater than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface GteQuery {
  field: FieldNameV1;
  value: any;
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
 * A union of all the primitive types used by Palantir's Ontology-based products.
 *
 * Log Safety: UNSAFE
 */
export type OntologyDataType =
  | ({ type: "any" } & AnyType)
  | ({ type: "binary" } & BinaryType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "byte" } & ByteType)
  | ({ type: "date" } & DateType)
  | ({ type: "decimal" } & DecimalType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "float" } & FloatType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "long" } & LongType)
  | ({ type: "marking" } & MarkingType)
  | ({ type: "short" } & ShortType)
  | ({ type: "string" } & StringType)
  | ({ type: "timestamp" } & TimestampType)
  | ({ type: "array" } & OntologyArrayType)
  | ({ type: "map" } & OntologyMapType)
  | ({ type: "set" } & OntologySetType)
  | ({ type: "struct" } & OntologyStructType)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "unsupported" } & UnsupportedType);

/**
 * The unique resource identifier of a Function, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type FunctionRid = LooselyBrandedString<"FunctionRid">;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectArrayType {
  subType: ObjectPropertyType;
}

/**
 * Returns objects where the specified field intersects the bounding box provided.
 *
 * Log Safety: UNSAFE
 */
export interface IntersectsBoundingBoxQuery {
  field: PropertyApiName;
  value: BoundingBoxValue;
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
export interface DateType {}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseItemV2 {
  group: Record<AggregationGroupKeyV2, AggregationGroupValueV2>;
  metrics: Array<AggregationMetricResultV2>;
}

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupKeyV2 = LooselyBrandedString<
  "AggregationGroupKeyV2"
>;

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
export interface ListObjectTypesResponse {
  nextPageToken?: PageToken;
  data: Array<ObjectType>;
}

/**
 * An absolute or relative range for a time series query.
 *
 * Log Safety: UNSAFE
 */
export type TimeRange =
  | ({ type: "absolute" } & AbsoluteTimeRange)
  | ({ type: "relative" } & RelativeTimeRange);

/**
 * The parameter value must be a property value of an object found within an object set.
 *
 * Log Safety: SAFE
 */
export interface ObjectPropertyValueConstraint {}

/**
 * Computes the sum of values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SumAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
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
export interface TwoDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: QueryAggregationValueType;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyArrayType {
  itemType: OntologyDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Returns objects where at least 1 query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface OrQuery {
  value: Array<SearchJsonQuery>;
}

/**
 * Represents the primary key value that is used as a unique identifier for an object.
 *
 * Log Safety: UNSAFE
 */
export type PrimaryKeyValue = any;

/**
 * Log Safety: UNSAFE
 */
export interface QueryAggregation {
  key: any;
  value: any;
}

/**
 * Computes the maximum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MaxAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * Computes the total count of objects.
 *
 * Log Safety: UNSAFE
 */
export interface CountAggregationV2 {
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

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
 * Log Safety: UNSAFE
 */
export interface ObjectSetSubtractType {
  objectSets: Array<ObjectSet>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregationOrderBy {
  metricName: string;
}

/**
 * Specifies an aggregation function.
 *
 * Log Safety: UNSAFE
 */
export type AggregationV2 =
  | ({ type: "max" } & MaxAggregationV2)
  | ({ type: "min" } & MinAggregationV2)
  | ({ type: "avg" } & AvgAggregationV2)
  | ({ type: "sum" } & SumAggregationV2)
  | ({ type: "count" } & CountAggregationV2)
  | ({ type: "approximateDistinct" } & ApproximateDistinctAggregationV2)
  | ({ type: "approximatePercentile" } & ApproximatePercentileAggregationV2);

/**
 * Log Safety: UNSAFE
 */
export interface ApplyActionRequestV2 {
  options?: ApplyActionRequestOptions;
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
   * Returns objects where the specified field contains any of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAnyTermQuery {
  field: PropertyApiName;
  value: string;
  fuzzy?: FuzzyV2;
}

/**
 * Either an ontology rid or an ontology api name.
 *
 * Log Safety: UNSAFE
 */
export type OntologyIdentifier = LooselyBrandedString<"OntologyIdentifier">;

/**
 * Log Safety: UNSAFE
 */
export interface LineString {
  coordinates?: LineStringCoordinates;
  bbox?: BBox;
}

/**
 * Log Safety: SAFE
 */
export type AggregationAccuracyRequest =
  | "REQUIRE_ACCURATE"
  | "ALLOW_APPROXIMATE";

/**
 * Returns objects where the specified field is less than a value.
 *
 * Log Safety: UNSAFE
 */
export interface LtQuery {
  field: FieldNameV1;
  value: any;
}

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupValue = any;

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsForInterfaceRequest {
  where?: SearchJsonQueryV2;
  orderBy?: SearchOrderByV2;
  augmentedProperties: Record<ObjectTypeApiName, Array<PropertyApiName>>;
  augmentedSharedPropertyTypes: Record<
    InterfaceTypeApiName,
    Array<SharedPropertyTypeApiName>
  >;
  selectedSharedPropertyTypes: Array<SharedPropertyTypeApiName>;
  selectedObjectTypes: Array<ObjectTypeApiName>;
  otherInterfaceTypes: Array<InterfaceTypeApiName>;
  pageSize?: PageSize;
  pageToken?: PageToken;
}

/**
 * Log Safety: SAFE
 */
export type ContentType = LooselyBrandedString<"ContentType">;

/**
 * Log Safety: UNSAFE
 */
export type LogicRule =
  | ({ type: "createObject" } & CreateObjectRule)
  | ({ type: "modifyObject" } & ModifyObjectRule)
  | ({ type: "deleteObject" } & DeleteObjectRule)
  | ({ type: "createLink" } & CreateLinkRule)
  | ({ type: "deleteLink" } & DeleteLinkRule);

/**
 * The parameter value must match a predefined regular expression.
 *
 * Log Safety: UNSAFE
 */
export interface StringRegexMatchConstraint {
  regex: string;
  configuredFailureMessage?: string;
}

/**
 * Log Safety: UNSAFE
 */
export type ActionResults =
  | ({ type: "edits" } & ObjectEdits)
  | ({ type: "largeScaleEdits" } & ObjectTypeEdits);

/**
   * The page token indicates where to start paging. This should be omitted from the first page's request.
To fetch the next page, clients should take the value from the nextPageToken field of the previous response
and populate the next request's pageToken field with it.
   *
   * Log Safety: UNSAFE
   */
export type PageToken = LooselyBrandedString<"PageToken">;

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupKey = LooselyBrandedString<"AggregationGroupKey">;

/**
 * Represents the state of a validation.
 *
 * Log Safety: SAFE
 */
export type ValidationResult = "VALID" | "INVALID";

/**
 * Log Safety: UNSAFE
 */
export interface ObjectTypeFullMetadata {
  objectType: ObjectTypeV2;
  linkTypes: Array<LinkTypeSideV2>;
  implementsInterfaces: Array<InterfaceTypeApiName>;
  implementsInterfaces2: Record<
    InterfaceTypeApiName,
    ObjectTypeInterfaceImplementation
  >;
  sharedPropertyTypeMapping: Record<SharedPropertyTypeApiName, PropertyApiName>;
}

/**
 * Computes the average value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface AvgAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchOrderingV2 {
  field: PropertyApiName;
  direction?: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseItem {
  group: Record<AggregationGroupKey, AggregationGroupValue>;
  metrics: Array<AggregationMetricResult>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ValidateActionResponseV2 {
  result: ValidationResult;
  submissionCriteria: Array<SubmissionCriteriaEvaluation>;
  parameters: Record<ParameterId, ParameterEvaluationResult>;
}

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
 * Log Safety: UNSAFE
 */
export interface ObjectTypeInterfaceImplementation {
  properties: Record<SharedPropertyTypeApiName, PropertyApiName>;
}

/**
 * Log Safety: SAFE
 */
export type AsyncActionOperation = undefined; // {"name":"AsyncActionOperation","type":{"type":"asyncOperation","asyncOperation":{"operationType":"applyActionAsync","resultType":"AsyncApplyActionResponse","stageType":"AsyncActionStatus"}},"safety":"SAFE","documentation":{}}

/**
 * Returns objects where the specified field starts with the provided value.
 *
 * Log Safety: UNSAFE
 */
export interface StartsWithQuery {
  field: PropertyApiName;
  value: string;
}

/**
 * Log Safety: SAFE
 */
export interface ShortType {}

/**
 * Log Safety: SAFE
 */
export interface AsyncApplyActionResponseV2 {
  operationId: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetSearchAroundType {
  objectSet: ObjectSet;
  link: LinkTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export type FeaturePropertyKey = LooselyBrandedString<"FeaturePropertyKey">;

/**
 * Divides objects into groups according to an exact value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationExactGroupingV2 {
  field: PropertyApiName;
  maxGroupCount?: number;
}

/**
 * Returns objects where the specified array contains a value.
 *
 * Log Safety: UNSAFE
 */
export interface ContainsQuery {
  field: FieldNameV1;
  value: any;
}

/**
 * Log Safety: UNSAFE
 */
export type Coordinate = number;

/**
 * Log Safety: SAFE
 */
export interface DecimalType {
  precision?: number;
  scale?: number;
}

/**
 * Returns objects where the specified field is less than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface LteQuery {
  field: FieldNameV1;
  value: any;
}

/**
 * Returns objects where every query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface AndQuery {
  value: Array<SearchJsonQuery>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListLinkedObjectsResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: PageToken;
}

/**
 * The representation of an attachment.
 *
 * Log Safety: UNSAFE
 */
export interface AttachmentV2 {
  rid: AttachmentRid;
  filename: Filename;
  sizeBytes: SizeBytes;
  mediaType: MediaType;
}

/**
 * Specifies an aggregation function.
 *
 * Log Safety: UNSAFE
 */
export type Aggregation =
  | ({ type: "max" } & MaxAggregation)
  | ({ type: "min" } & MinAggregation)
  | ({ type: "avg" } & AvgAggregation)
  | ({ type: "sum" } & SumAggregation)
  | ({ type: "count" } & CountAggregation)
  | ({ type: "approximateDistinct" } & ApproximateDistinctAggregation);

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
 * Returns objects where the specified field contains a point within the polygon provided.
 *
 * Log Safety: UNSAFE
 */
export interface WithinPolygonQuery {
  field: PropertyApiName;
  value: PolygonValue;
}

/**
 * Returns objects where the specified field does not intersect the polygon provided.
 *
 * Log Safety: UNSAFE
 */
export interface DoesNotIntersectPolygonQuery {
  field: PropertyApiName;
  value: PolygonValue;
}

/**
 * Log Safety: SAFE
 */
export interface AsyncApplyActionResponse {}

/**
 * GeoJSon fundamental geometry construct, array of two or more positions.
 *
 * Log Safety: UNSAFE
 */
export type LineStringCoordinates = Array<Position>;

/**
   * A command representing the list of properties to order by. Properties should be delimited by commas and
prefixed by p or properties. The format expected format is
orderBy=properties.{property}:{sortDirection},properties.{property}:{sortDirection}...
By default, the ordering for a property is ascending, and this can be explicitly specified by appending
:asc (for ascending) or :desc (for descending).
Example: use orderBy=properties.lastName:asc to order by a single property,
orderBy=properties.lastName,properties.firstName,properties.age:desc to order by multiple properties.
You may also use the shorthand p instead of properties such as orderBy=p.lastName:asc.
   *
   * Log Safety: UNSAFE
   */
export type OrderBy = LooselyBrandedString<"OrderBy">;

/**
 * Returns objects where the specified field intersects the polygon provided.
 *
 * Log Safety: UNSAFE
 */
export interface IntersectsPolygonQuery {
  field: PropertyApiName;
  value: PolygonValue;
}

/**
 * Returns objects where the query is not satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface NotQueryV2 {
  value: SearchJsonQueryV2;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetBaseType {
  objectType: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListOntologiesResponse {
  data: Array<Ontology>;
}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequestV2 {
  options?: BatchApplyActionRequestOptions;
  requests: Array<BatchApplyActionRequestItem>;
}

/**
 * The format of an archive file.
 *
 * Log Safety: SAFE
 */
export type ArchiveFileFormat = "ZIP";

/**
 * Log Safety: UNSAFE
 */
export interface ListActionTypesResponse {
  nextPageToken?: PageToken;
  data: Array<ActionType>;
}

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
 * Log Safety: UNSAFE
 */
export type WithinBoundingBoxPoint = { type: "Point" } & GeoPoint;

/**
 * Specifies a range from an inclusive start value to an exclusive end value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangeV2 {
  startValue: any;
  endValue: any;
}

/**
 * Specifies the ordering of search results by a field and an ordering direction.
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrderBy {
  fields: Array<SearchOrdering>;
}

/**
 * The time at which the resource was most recently updated.
 *
 * Log Safety: SAFE
 */
export type UpdatedTime = LooselyBrandedString<"UpdatedTime">;

/**
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

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
export interface OntologyStructType {
  fields: Array<OntologyStructField>;
}

/**
 * The time at which the resource was created.
 *
 * Log Safety: SAFE
 */
export type CreatedTime = LooselyBrandedString<"CreatedTime">;

/**
 * Log Safety: SAFE
 */
export type ReturnEditsMode = "ALL" | "NONE";

/**
 * Represents an action type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ActionType {
  apiName: ActionTypeApiName;
  description?: string;
  displayName?: DisplayName;
  status: ReleaseStatus;
  parameters: Record<ParameterId, Parameter>;
  rid: ActionTypeRid;
  operations: Array<LogicRule>;
}

/**
 * The unique resource identifier of an object, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ObjectRid = LooselyBrandedString<"ObjectRid">;

/**
 * Log Safety: UNSAFE
 */
export interface NestedQueryAggregation {
  key: any;
  groups: Array<QueryAggregation>;
}

/**
 * Setting fuzzy to true allows approximate matching in search queries that support it.
 *
 * Log Safety: SAFE
 */
export type FuzzyV2 = boolean;

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
 * The name of a field in a Struct.
 *
 * Log Safety: UNSAFE
 */
export type StructFieldName = LooselyBrandedString<"StructFieldName">;

/**
 * Log Safety: UNSAFE
 */
export interface CountObjectsResponseV2 {
  count?: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregationMetricResult {
  name: string;
  value?: number;
}

/**
 * Returns objects where the specified field is equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface EqualsQuery {
  field: FieldNameV1;
  value: any;
}

/**
   * Returns objects where the specified field contains all of the terms in the order provided,
but they do have to be adjacent to each other.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAllTermsInOrderQuery {
  field: PropertyApiName;
  value: string;
}

/**
   * Returns objects where the specified field contains all of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAllTermsQuery {
  field: PropertyApiName;
  value: string;
  fuzzy?: FuzzyV2;
}

/**
 * Log Safety: SAFE
 */
export interface AsyncApplyActionOperationResponseV2 {}

/**
 * A union of all the types supported by Ontology Query parameters or outputs.
 *
 * Log Safety: UNSAFE
 */
export type QueryDataType =
  | ({ type: "array" } & QueryArrayType)
  | ({ type: "attachment" } & AttachmentType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "float" } & FloatType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "long" } & LongType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "set" } & QuerySetType)
  | ({ type: "string" } & StringType)
  | ({ type: "struct" } & QueryStructType)
  | ({ type: "threeDimensionalAggregation" } & ThreeDimensionalAggregation)
  | ({ type: "timestamp" } & TimestampType)
  | ({ type: "twoDimensionalAggregation" } & TwoDimensionalAggregation)
  | ({ type: "union" } & QueryUnionType)
  | ({ type: "null" } & NullType)
  | ({ type: "unsupported" } & UnsupportedType);

/**
 * Divides objects into groups with the specified width.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationFixedWidthGroupingV2 {
  field: PropertyApiName;
  fixedWidth: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetFilterType {
  objectSet: ObjectSet;
  where: SearchJsonQueryV2;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListOutgoingLinkTypesResponse {
  nextPageToken?: PageToken;
  data: Array<LinkTypeSide>;
}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequest {
  requests: Array<ApplyActionRequest>;
}

/**
 * Returns objects based on the existence of the specified field.
 *
 * Log Safety: UNSAFE
 */
export interface IsNullQueryV2 {
  field: PropertyApiName;
  value: boolean;
}

/**
 * Log Safety: SAFE
 */
export type AsyncActionStatus =
  | "RUNNING_SUBMISSION_CHECKS"
  | "EXECUTING_WRITE_BACK_WEBHOOK"
  | "COMPUTING_ONTOLOGY_EDITS"
  | "COMPUTING_FUNCTION"
  | "WRITING_ONTOLOGY_EDITS"
  | "EXECUTING_SIDE_EFFECT_WEBHOOK"
  | "SENDING_NOTIFICATIONS";

/**
 * The unique resource identifier of an action type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ActionTypeRid = LooselyBrandedString<"ActionTypeRid">;

/**
 * Log Safety: SAFE
 */
export interface NullType {}

/**
 * The size of the file or attachment in bytes.
 *
 * Log Safety: SAFE
 */
export type SizeBytes = string;

/**
 * Represents a query type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface QueryType {
  apiName: QueryApiName;
  description?: string;
  displayName?: DisplayName;
  parameters: Record<ParameterId, Parameter>;
  output?: OntologyDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * Returns objects where the specified field contains a point within the bounding box provided.
 *
 * Log Safety: UNSAFE
 */
export interface WithinBoundingBoxQuery {
  field: PropertyApiName;
  value: BoundingBoxValue;
}

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
   * Returns objects where the specified field contains any of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching.
   *
   * Log Safety: UNSAFE
   */
export interface AnyTermQuery {
  field: FieldNameV1;
  value: string;
  fuzzy?: Fuzzy;
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
   * A link type constraint defined at the interface level where the implementation of the links is provided
by the implementing object types.
   *
   * Log Safety: UNSAFE
   */
export interface InterfaceLinkType {
  rid: InterfaceLinkTypeRid;
  apiName: InterfaceLinkTypeApiName;
  displayName: DisplayName;
  description?: string;
  linkedEntityApiName: InterfaceLinkTypeLinkedEntityApiName;
  cardinality: InterfaceLinkTypeCardinality;
  required: boolean;
}

/**
 * Log Safety: SAFE
 */
export type AggregationAccuracy = "ACCURATE" | "APPROXIMATE";

/**
 * Log Safety: UNSAFE
 */
export interface ListQueryTypesResponse {
  nextPageToken?: PageToken;
  data: Array<QueryType>;
}

/**
 * The unique resource identifier of an interface, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type InterfaceTypeRid = LooselyBrandedString<"InterfaceTypeRid">;

/**
 * Log Safety: UNSAFE
 */
export interface LinkTypeSide {
  apiName: LinkTypeApiName;
  displayName: DisplayName;
  status: ReleaseStatus;
  objectTypeApiName: ObjectTypeApiName;
  cardinality: LinkTypeSideCardinality;
  foreignKeyPropertyApiName?: PropertyApiName;
}

/**
 * The display name of the entity.
 *
 * Log Safety: UNSAFE
 */
export type DisplayName = LooselyBrandedString<"DisplayName">;

/**
   * The parameter cannot be evaluated because it depends on another parameter or object set that can't be evaluated.
This can happen when a parameter's allowed values are defined by another parameter that is missing or invalid.
   *
   * Log Safety: SAFE
   */
export interface UnevaluableConstraint {}

/**
   * A constraint that an action parameter value must satisfy in order to be considered valid.
Constraints can be configured on action parameters in the Ontology Manager.
Applicable constraints are determined dynamically based on parameter inputs.
Parameter values are evaluated against the final set of constraints.
The type of the constraint.
| Type                  | Description                                                                                                                                                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| arraySize           | The parameter expects an array of values and the size of the array must fall within the defined range.                                                                                                                          |
| groupMember         | The parameter value must be the user id of a member belonging to at least one of the groups defined by the constraint.                                                                                                          |
| objectPropertyValue | The parameter value must be a property value of an object found within an object set.                                                                                                                                           |
| objectQueryResult   | The parameter value must be the primary key of an object found within an object set.                                                                                                                                            |
| oneOf               | The parameter has a manually predefined set of options.                                                                                                                                                                         |
| range               | The parameter value must be within the defined range.                                                                                                                                                                           |
| stringLength        | The parameter value must have a length within the defined range.                                                                                                                                                                |
| stringRegexMatch    | The parameter value must match a predefined regular expression.                                                                                                                                                                 |
| unevaluable         | The parameter cannot be evaluated because it depends on another parameter or object set that can't be evaluated. This can happen when a parameter's allowed values are defined by another parameter that is missing or invalid. |
   *
   * Log Safety: UNSAFE
   */
export type ParameterEvaluatedConstraint =
  | ({ type: "arraySize" } & ArraySizeConstraint)
  | ({ type: "groupMember" } & GroupMemberConstraint)
  | ({ type: "objectPropertyValue" } & ObjectPropertyValueConstraint)
  | ({ type: "objectQueryResult" } & ObjectQueryResultConstraint)
  | ({ type: "oneOf" } & OneOfConstraint)
  | ({ type: "range" } & RangeConstraint)
  | ({ type: "stringLength" } & StringLengthConstraint)
  | ({ type: "stringRegexMatch" } & StringRegexMatchConstraint)
  | ({ type: "unevaluable" } & UnevaluableConstraint);

/**
 * Log Safety: SAFE
 */
export interface AnyType {}

/**
 * The path to a File within Foundry. Examples: my-file.txt, path/to/my-file.jpg, dataframe.snappy.parquet.
 *
 * Log Safety: UNSAFE
 */
export type FilePath = LooselyBrandedString<"FilePath">;

/**
   * The name of the interface type in the API in UpperCamelCase format. To find the API name for your interface
type, use the List interface types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type InterfaceTypeApiName = LooselyBrandedString<"InterfaceTypeApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface ListOntologiesV2Response {
  data: Array<OntologyV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ActionParameterArrayType {
  subType: ActionParameterType;
}

/**
 * The unique resource identifier of an shared property type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type SharedPropertyTypeRid = LooselyBrandedString<
  "SharedPropertyTypeRid"
>;

/**
 * The unique resource identifier of an object type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeRid = LooselyBrandedString<"ObjectTypeRid">;

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
export interface ApplyActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Returns objects where the specified field starts with the provided value.
 *
 * Log Safety: UNSAFE
 */
export interface PrefixQuery {
  field: FieldNameV1;
  value: string;
}

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * Log Safety: SAFE
 */
export type ContentLength = string;

/**
 * Log Safety: UNSAFE
 */
export interface ModifyObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}
