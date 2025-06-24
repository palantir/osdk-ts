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
 * The aggregation result is accurate.
 */
export interface AccurateAggregateResultAccuracy {
}
/**
 * A derived property that references an aggregation on a set of linked objects.
 * The linked object is specified by a LinkDefinition.
 */
export interface AggregatedPropertyDefinition {
  aggregation: DerivedPropertyAggregation;
  linkDefinition: LinkDefinition;
}
export interface AggregateRequest {
  aggregation: RootAggregation;
  derivedProperties?: TypedDerivedProperties | null | undefined;
  executionMode?: AggregationExecutionMode | null | undefined;
  objectSet: ObjectSet;
  objectSetContext?: ObjectSetContext | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
}
export interface AggregateResponse {
  objectSetEntities?: ObjectSetEntities | null | undefined;
  result: AggregateResult;
  usageCost?: UsageCost | null | undefined;
}
/**
 * The result of an aggregation.
 */
export interface AggregateResult {
  metrics: Record<MetricName, MetricResult | null | undefined>;
  subAggregations: Record<AggregationName, SubAggregateResult>;
}
export interface AggregateResultAccuracy_accurate {
  type: "accurate";
  accurate: AccurateAggregateResultAccuracy;
}

export interface AggregateResultAccuracy_approximate {
  type: "approximate";
  approximate: ApproximateAggregateResultAccuracy;
}
/**
 * The accuracy of an aggregation result.
 */
export type AggregateResultAccuracy =
  | AggregateResultAccuracy_accurate
  | AggregateResultAccuracy_approximate;

export interface Aggregation_metrics {
  type: "metrics";
  metrics: MetricsAggregation;
}

export interface Aggregation_nested {
  type: "nested";
  nested: NestedAggregation;
}
/**
 * Either metrics or a nested aggregation.
 */
export type Aggregation = Aggregation_metrics | Aggregation_nested;

/**
 * Whether speed or accuracy should be prioritized when computing an aggregation.
 */
export type AggregationExecutionMode = "PREFER_SPEED" | "PREFER_ACCURACY";
export interface AggregationFilter_or {
  type: "or";
  or: OrAggregationFilter;
}

export interface AggregationFilter_and {
  type: "and";
  and: AndAggregationFilter;
}

export interface AggregationFilter_not {
  type: "not";
  not: NotAggregationFilter;
}

export interface AggregationFilter_exactMatch {
  type: "exactMatch";
  exactMatch: ExactMatchAggregationFilter;
}

export interface AggregationFilter_range {
  type: "range";
  range: RangeAggregationFilter;
}

export interface AggregationFilter_hasProperty {
  type: "hasProperty";
  hasProperty: HasPropertyAggregationFilter;
}
/**
 * Defines filtering of objects when computing an aggregated metric value.
 */
export type AggregationFilter =
  | AggregationFilter_or
  | AggregationFilter_and
  | AggregationFilter_not
  | AggregationFilter_exactMatch
  | AggregationFilter_range
  | AggregationFilter_hasProperty;

export interface AggregationFilterValue_string {
  type: "string";
  string: StringFilterValue;
}

export interface AggregationFilterValue_integer {
  type: "integer";
  integer: IntegerFilterValue;
}

export interface AggregationFilterValue_long {
  type: "long";
  long: LongFilterValue;
}

export interface AggregationFilterValue_double {
  type: "double";
  double: DoubleFilterValue;
}

export interface AggregationFilterValue_decimal {
  type: "decimal";
  decimal: DecimalFilterValue;
}

export interface AggregationFilterValue_boolean {
  type: "boolean";
  boolean: BooleanFilterValue;
}

export interface AggregationFilterValue_date {
  type: "date";
  date: DateFilterValue;
}

export interface AggregationFilterValue_timestamp {
  type: "timestamp";
  timestamp: TimestampFilterValue;
}
/**
 * A value used by an aggregation filter to compare to object fields when filtering objects.
 */
export type AggregationFilterValue =
  | AggregationFilterValue_string
  | AggregationFilterValue_integer
  | AggregationFilterValue_long
  | AggregationFilterValue_double
  | AggregationFilterValue_decimal
  | AggregationFilterValue_boolean
  | AggregationFilterValue_date
  | AggregationFilterValue_timestamp;

/**
 * Identifier of an aggregation.
 */
export type AggregationName = string;

/**
 * Use all properties.
 */
export interface AllPropertiesPropertySet {
}
/**
 * DEPRECATED
 *
 * Use all properties, including runtime derived properties.
 */
export interface AllPropertiesPropertySetV2 {
}
/**
 * An object matches this filter iff it matches all of the contained filters.
 */
export interface AndAggregationFilter {
  filters: Array<AggregationFilter>;
}
/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an AndFilter iff it matches all of the filters.
 */
export interface AndFilter {
  filters: Array<ObjectSetFilter>;
}
/**
 * The aggregation result is approximate.
 */
export interface ApproximateAggregateResultAccuracy {
}
/**
 * An object matches an ApproximateLinkPresenceFilter iff it contains a link to any object along the provided RelationId
 * and if the starting object is on the provided RelationSide of the relation.
 *
 * WARNING: Due to the performance constraints, this filter does not always check if the linked object actually exists.
 * As a consequence it is possible that ApproximateLinkPresenceFilter will yield more objects, including those which are
 * linked to non-existent ones. Hence, whenever this filter is used, result set should be treated as approximate.
 *
 * It is guaranteed that no links will be missed during filtering, so in order to make results accurate, it is enough for
 * clients to filter out results linked to non-existing objects.
 *
 * If use case relies on linked objects existence and requires accurate results, clients are encouraged to use ObjectSetLinkFilter instead.
 */
export interface ApproximateLinkPresenceFilter {
  relationId: RelationId;
  relationSide: RelationSide;
}
/**
 * An object property value whose type is array.
 */
export type ArrayPropertyValue = Array<PropertyValue>;

/**
 * Cast the provided object set to the raw object types. This drops interface views on interface-based
 * object sets and convert them into unions of the underlying object types. This also disallows referring
 * to interface property API names and forces property selection to use object type property API names.
 */
export interface AsBaseObjectTypesObjectSet {
  objectSet: ObjectSet;
}
/**
 * Cast the provided object set to the provided object type or interface type which results in a new scope of the
 * object set, controlling what properties you can reference in sorts or filters. Objects which cannot be cast as
 * the provided type are dropped. Objects can be cast to an object type if they are of that type or to an
 * interface if their object type implements said interface or a child interface of it.
 *
 * For example, suppose "Vehicle" is an interface and "Car" implements it. "Vehicle" declares a property
 * "capacity", and on Cars, the local property "seats" fulfills the interface property. It is not possible to
 * select "capacity" when the object set is "Base(Car)". However it is possible to query "capacity" if the object
 * set is cast to "Car" via "AsType(Base(Car), type="Vehicle")".
 */
export interface AsTypeObjectSet {
  objectSet: ObjectSet;
  type: ObjectTypeOrInterfaceTypeIdentifier;
}
/**
 * The rid of an Attachment.
 */
export type AttachmentPropertyValue = string;

/**
 * The backend to run a query against.
 */
export type Backend = "PHONOGRAPH" | "HIGHBURY";

/**
 * Object Set containing all objects with a given ObjectTypeId.
 */
export interface BaseObjectSet {
  objectTypeId: ObjectTypeId;
}
/**
 * A filter value whose type is boolean (true-false).
 */
export type BooleanFilterValue = boolean;

/**
 * An object property value whose type is boolean (true-false).
 */
export type BooleanPropertyValue = boolean;

/**
 * A property to compute a bounding box metric for.
 */
export interface BoundingBoxMetric {
  coordinateType: BoundingBoxMetricCoordinateType;
  filter?: AggregationFilter | null | undefined;
  propertyId: PropertyId;
}
/**
 * The type of coordinate to be returned in this metric entry.
 */
export type BoundingBoxMetricCoordinateType =
  | "TOP_LEFT_LATITUDE"
  | "TOP_LEFT_LONGITUDE"
  | "BOTTOM_RIGHT_LATITUDE"
  | "BOTTOM_RIGHT_LONGITUDE";

/**
 * A bucket that data was grouped into and the aggregations computed for the data in that bucket.
 */
export interface Bucket {
  key: string;
  metrics: Record<MetricName, MetricResult | null | undefined>;
  subAggregations: Record<AggregationName, SubAggregateResult>;
}
/**
 * The max number of buckets to return.
 *
 * This limit cannot exceed 10_000 buckets.
 */
export type BucketCountLimit = number;
export interface Bucketing_exactValue {
  type: "exactValue";
  exactValue: StringBucketing;
}

export interface Bucketing_keywords {
  type: "keywords";
  keywords: StringBucketing;
}

export interface Bucketing_geoHash {
  type: "geoHash";
  geoHash: GeoHashBucketing;
}

export interface Bucketing_numeric {
  type: "numeric";
  numeric: NumericBucketing;
}

export interface Bucketing_date {
  type: "date";
  date: DateBucketing;
}
/**
 * How to assign values of a property into buckets.
 */
export type Bucketing =
  | Bucketing_exactValue
  | Bucketing_keywords
  | Bucketing_geoHash
  | Bucketing_numeric
  | Bucketing_date;

/**
 * Range of one bucket in RangeBucketing.
 */
export interface BucketRange {
  fromValue?: number | "NaN" | "Infinity" | "-Infinity" | null | undefined;
  toValue?: number | "NaN" | "Infinity" | "-Infinity" | null | undefined;
}
export interface CalculatedPropertyDefinition_numeric {
  type: "numeric";
  numeric: NumericOutputCalculation;
}

export interface CalculatedPropertyDefinition_datetime {
  type: "datetime";
  datetime: DateTimeOutputCalculation;
}
/**
 * A derived property that is calculated from other properties.
 * It can be a literal, a reference to another property or an operation.
 */
export type CalculatedPropertyDefinition =
  | CalculatedPropertyDefinition_numeric
  | CalculatedPropertyDefinition_datetime;

/**
 * Reference to a specific catalog file
 */
export interface CatalogFileReference {
  datasetRid: DatasetRid;
  endTransactionRid: TransactionRid;
  logicalFilePath: string;
}
/**
 * A bulk request for checking if the user has operation permission on the given versioned object set rids.
 */
export interface CheckBulkOperationPermissionsRequest {
  operation: VersionedObjectSetOperation;
  versionedObjectSetRids: Array<VersionedObjectSetRid>;
}
/**
 * A map from versioned object set RID to whether the user has permission to perform the requested operation.
 */
export interface CheckBulkOperationPermissionsResponse {
  hasOperationOnVersionedObjectSet: Record<VersionedObjectSetRid, boolean>;
}
/**
 * This property type represents an encrypted or plain text value used by the Cipher Service.
 */
export type CipherTextPropertyValue = string;

/**
 * Total count of objects
 */
export interface CountMetric {
  filter?: AggregationFilter | null | undefined;
}
export interface CreateObjectSetRequest {
  objectSet: ObjectSet;
  registerObjectSetRidInGatekeeper?: boolean | null | undefined;
  securityRid: string;
}
export interface CreateObjectSetResponse {
  objectSetRid: ObjectSetRid;
}
export interface CreateTemporaryObjectSetRequest {
  objectSet: ObjectSet;
  objectSetFilterContext?: ObjectSetFilterContext | null | undefined;
  timeToLive: TimeToLive;
}
export interface CreateTemporaryObjectSetResponse {
  objectSetRid: ObjectSetRid;
}
export interface CreateVersionedObjectSetRequest {
  objectSet: ObjectSet;
  path: string;
}
export interface CreateVersionedObjectSetResponse {
  objectSetRid: ObjectSetRid;
  rid: VersionedObjectSetRid;
  version: ObjectSetVersion;
}
export interface CreateVersionedObjectSetWithParentRequest {
  objectSet: ObjectSet;
  parentRid: string;
}
/**
 * Used to record custom provenance information.
 */
export interface CustomProvenance {
  identifier: CustomProvenanceIdentifier;
  parameters: Record<string, any>;
}
/**
 * Identifies a custom provenance record.
 */
export type CustomProvenanceIdentifier = string;

/**
 * Reference to a dataset containing the media with an optional thumbnail reference.
 */
export interface DatasetFileReference {
  fileReference: CatalogFileReference;
  thumbnailReference?: CatalogFileReference | null | undefined;
}
/**
 * The identifier of a foundry dataset
 */
export type DatasetRid = string;

/**
 * A unique identifier for a datasource.
 */
export type DatasourceRid = string;

/**
 * Bucketing by a date or time interval.
 */
export interface DateBucketing {
  excludeEmptyBuckets?: boolean | null | undefined;
  interval: Interval;
  shouldCreateNullValueBucket?: boolean | null | undefined;
  timeZoneId?: TimeZoneId | null | undefined;
}
/**
 * String representation of an ISO-8601 formatted date in a YYYY-MM-DD format.
 */
export type DateFilterValue = string;

/**
 * String representation of an ISO-8601 formatted date in a YYYY-MM-DD format.
 */
export type DateLiteral = string;

/**
 * A specific part of a date (such as day, month, or year)
 */
export type DatePart = "DAY" | "MONTH" | "QUARTER" | "YEAR";

/**
 * String representation of an ISO-8601 formatted date in a YYYY-MM-DD format.
 */
export type DatePropertyValue = string;

/**
 * An operation on two property nodes of type datetime for the purposes of defining a derived property.
 */
export interface DateTimeBinaryOperation {
  leftOperand: DateTimeOutputCalculation;
  rightOperand: DateTimeOutputCalculation;
}
export interface DateTimeLiteral_date {
  type: "date";
  date: DateLiteral;
}

export interface DateTimeLiteral_timestamp {
  type: "timestamp";
  timestamp: TimestampLiteral;
}
/**
 * A literal value for the purposes of defining a derived property via a date operation.
 */
export type DateTimeLiteral = DateTimeLiteral_date | DateTimeLiteral_timestamp;

export interface DateTimeOperation_max {
  type: "max";
  max: DateTimeBinaryOperation;
}

export interface DateTimeOperation_min {
  type: "min";
  min: DateTimeBinaryOperation;
}
/**
 * An operation on one or two property nodes of type datetime for the purposes of defining a derived property.
 */
export type DateTimeOperation = DateTimeOperation_max | DateTimeOperation_min;

export interface DateTimeOutputCalculation_literal {
  type: "literal";
  literal: DateTimeLiteral;
}

export interface DateTimeOutputCalculation_propertyIdentifier {
  type: "propertyIdentifier";
  propertyIdentifier: PropertyIdentifier;
}

export interface DateTimeOutputCalculation_operation {
  type: "operation";
  operation: DateTimeOperation;
}
/**
 * A calculation node that is used to define a derived property via an operation which returns a date output.
 */
export type DateTimeOutputCalculation =
  | DateTimeOutputCalculation_literal
  | DateTimeOutputCalculation_propertyIdentifier
  | DateTimeOutputCalculation_operation;

export interface DateTimeToNumericCalculation_extractDatePart {
  type: "extractDatePart";
  extractDatePart: ExtractDatePartCalculation;
}
/**
 * A calculation node that is used to define a derived property via an operation which takes a date input and
 * returns a numeric output.
 */
export type DateTimeToNumericCalculation =
  DateTimeToNumericCalculation_extractDatePart;

/**
 * String representation of a decimal value. This value can be returned in a scientific notation with the exponent
 * proceeded by a letter 'E' followed by a '+'/'-' sign (for example 4.321E+8 or 0.332E-5).
 */
export type DecimalFilterValue = string;

/**
 * String representation of a decimal value. This value can be returned in a scientific notation with the exponent
 * preceded by a letter 'E' followed by a '+'/'-' sign (for example 4.321E+8 or 0.332E-5).
 */
export type DecimalPropertyValue = string;

/**
 * A collection of derived properties that can be referenced inside a FilteredObjectSet.
 * They are ephemeral and only exist for the lifetime of a request.
 *
 * Note: There may only be a single entry for a given property identifier. An exception will be thrown
 * otherwise.
 *
 * A derived property id may not overlap with any existing PropertyIdentifier that is already defined in the
 * Ontology for a given object type. An exception will be thrown at runtime if this limitation is not
 * respected. NB: This may lead to sudden breaks if the Ontology is updated to include a property that shares
 * a propertyIdentifier already contained in a user defined property definition.
 */
export type DerivedProperties = Array<DerivedPropertiesEntry>;

/**
 * A derived property that can be referenced in an object set or aggregation.
 * It is ephemeral and only exists for the lifetime of a request.
 */
export interface DerivedPropertiesEntry {
  definition: DerivedPropertyDefinition;
  propertyIdentifier: PropertyIdentifier;
}
export interface DerivedPropertyAggregation_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface DerivedPropertyAggregation_avg {
  type: "avg";
  avg: LinkedPropertyMetric;
}

export interface DerivedPropertyAggregation_max {
  type: "max";
  max: LinkedPropertyMetric;
}

export interface DerivedPropertyAggregation_min {
  type: "min";
  min: LinkedPropertyMetric;
}

export interface DerivedPropertyAggregation_sum {
  type: "sum";
  sum: LinkedPropertyMetric;
}

export interface DerivedPropertyAggregation_percentile {
  type: "percentile";
  percentile: LinkedPercentileMetric;
}

export interface DerivedPropertyAggregation_cardinality {
  type: "cardinality";
  cardinality: LinkedPropertyMetric;
}

export interface DerivedPropertyAggregation_exactCardinality {
  type: "exactCardinality";
  exactCardinality: LinkedPropertyMetric;
}

export interface DerivedPropertyAggregation_standardDeviation {
  type: "standardDeviation";
  standardDeviation: LinkedDispersionMetric;
}

export interface DerivedPropertyAggregation_variance {
  type: "variance";
  variance: LinkedDispersionMetric;
}

export interface DerivedPropertyAggregation_collectList {
  type: "collectList";
  collectList: LinkedCollection;
}

export interface DerivedPropertyAggregation_collectSet {
  type: "collectSet";
  collectSet: LinkedCollection;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property).
 */
export type DerivedPropertyAggregation =
  | DerivedPropertyAggregation_count
  | DerivedPropertyAggregation_avg
  | DerivedPropertyAggregation_max
  | DerivedPropertyAggregation_min
  | DerivedPropertyAggregation_sum
  | DerivedPropertyAggregation_percentile
  | DerivedPropertyAggregation_cardinality
  | DerivedPropertyAggregation_exactCardinality
  | DerivedPropertyAggregation_standardDeviation
  | DerivedPropertyAggregation_variance
  | DerivedPropertyAggregation_collectList
  | DerivedPropertyAggregation_collectSet;

export interface DerivedPropertyDefinition_nativeProperty {
  type: "nativeProperty";
  nativeProperty: PropertyIdentifier;
}

export interface DerivedPropertyDefinition_linkedObjectProperty {
  type: "linkedObjectProperty";
  linkedObjectProperty: LinkedObjectPropertyDefinition;
}

export interface DerivedPropertyDefinition_linkedObjectsAggregationProperty {
  type: "linkedObjectsAggregationProperty";
  linkedObjectsAggregationProperty: LinkedObjectsAggregationPropertyDefinition;
}

export interface DerivedPropertyDefinition_calculatedProperty {
  type: "calculatedProperty";
  calculatedProperty: CalculatedPropertyDefinition;
}

export interface DerivedPropertyDefinition_linkedProperty {
  type: "linkedProperty";
  linkedProperty: LinkedPropertyDefinition;
}

export interface DerivedPropertyDefinition_aggregatedProperty {
  type: "aggregatedProperty";
  aggregatedProperty: AggregatedPropertyDefinition;
}
/**
 * The definition of a derived property. It can be a native property, linked object property,
 * linked objects aggregation property or a calculated property.
 */
export type DerivedPropertyDefinition =
  | DerivedPropertyDefinition_nativeProperty
  | DerivedPropertyDefinition_linkedObjectProperty
  | DerivedPropertyDefinition_linkedObjectsAggregationProperty
  | DerivedPropertyDefinition_calculatedProperty
  | DerivedPropertyDefinition_linkedProperty
  | DerivedPropertyDefinition_aggregatedProperty;

export interface Dimension_propertyValue {
  type: "propertyValue";
  propertyValue: PropertyValueDimension;
}

export interface Dimension_objectType {
  type: "objectType";
  objectType: ObjectTypeDimension;
}
/**
 * How to divide objects into buckets.
 */
export type Dimension = Dimension_propertyValue | Dimension_objectType;

/**
 * A Foundry link with link side specified.
 *
 * Returned in the context of a GetBulkLinksPageRequest, where the direction of the links to objects is
 * specified. Meaning the object specified in the request will appear on the specified LinkSide of the response's
 * DirectedFoundryLink.
 */
export interface DirectedFoundryLink {
  link: FoundryLink;
  linkSide: LinkSide;
}
/**
 * Information that specifies side of the given link type rid. Used in the context of a GetBulkLinksPageRequest,
 * where a set of links is loaded for a given set of objects and link types.
 */
export interface DirectedLinkTypeRid {
  linkSide: LinkSide;
  linkTypeRid: LinkTypeRid;
}
/**
 * Information that specifies side of the given relation. Used in the context of a GetLinksRequest, where a set
 * of links is loaded for a given set of objects and link types.
 */
export interface DirectedRelation {
  linkSide: LinkSide;
  relationId: RelationId;
}
/**
 * A property to compute a dispersion metric for.
 */
export interface DispersionMetric {
  filter?: AggregationFilter | null | undefined;
  method: DispersionMetricMethod;
  propertyId: PropertyId;
}
/**
 * Method to be used to provide final value for standard deviation or variance.
 * Use POPULATION when you have the entire set of data to work with OR
 * Use SAMPLE when you have an incomplete set of data (with at least 2 values) to work with.
 * An in depth explanation here: https://en.wikipedia.org/wiki/Bessel%27s_correction
 */
export type DispersionMetricMethod = "POPULATION" | "SAMPLE";

/**
 * Geospatial distance.
 */
export interface Distance {
  unit: DistanceUnit;
  value: number | "NaN" | "Infinity" | "-Infinity";
}
/**
 * A unit of geospatial distance.
 */
export type DistanceUnit =
  | "MILLIMETER"
  | "CENTIMETER"
  | "METER"
  | "KILOMETER"
  | "INCH"
  | "FOOT"
  | "YARD"
  | "MILE"
  | "NAUTICAL_MILE";

/**
 * A filter value whose type is double-precision floating point.
 */
export type DoubleFilterValue = number | "NaN" | "Infinity" | "-Infinity";

/**
 * A literal double value for the purposes of defining a derived property via a numeric operation.
 */
export type DoubleLiteral = number | "NaN" | "Infinity" | "-Infinity";

/**
 * An object property value whose type is double-precision floating point.
 */
export type DoublePropertyValue = number | "NaN" | "Infinity" | "-Infinity";

/**
 * Information necessary to uniquely identify an object or a many-to-many link.
 */
export interface EntityLocator {
  entityPrimarykey: EntityPrimaryKey;
  entityTypeRid: EntityTypeRid;
}
/**
 * The primary key of an object or a link.
 */
export type EntityPrimaryKey = Record<PropertyTypeRid, PropertyValue>;

/**
 * ObjectTypeId or LinkTypeId.
 */
export type EntityTypeId = string;

/**
 * A unique identifier of an object type or a link type.
 */
export type EntityTypeRid = string;
export interface EntityVersion_v1 {
  type: "v1";
  v1: EntityVersionV1;
}
/**
 * Version of the returned object or many-to-many link.
 * It is guaranteed that the entity has not changed as long as the returned value is the same.
 */
export type EntityVersion = EntityVersion_v1;

/**
 * Token representing a version of the returned object or many-to-many link.
 */
export type EntityVersionV1 = string;

/**
 * An object matches iff the value of the provided property is exactly equal to one of the provided terms.
 *
 * If the property is of string type, it should have `supportsExactMatching` set to true on the object type definition in OMS.
 *
 * Throws if no terms are provided.
 */
export interface ExactMatchAggregationFilter {
  propertyId: PropertyId;
  terms: Array<AggregationFilterValue>;
}
/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, it should have `supportsExactMatching` set to true on the object type definition in OMS.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface ExactMatchFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  terms: Array<any>;
}
/**
 * Buckets will only be created for values not matching the provided regex.
 *
 * Throws if the regex pattern is invalid, or longer than 1000 characters.
 *
 * Warning: to avoid bad query performance, avoid using wildcard patterns (e.g. `.*`) without prefix or suffix.
 */
export interface ExcludeByRegexStringBucketingValueFilter {
  regex: RegexPattern;
}
/**
 * Buckets will only be created for values other than the provided ones.
 */
export interface ExcludeValuesStringBucketingValueFilter {
  values: Array<string>;
}
/**
 * A calculation node that is used to define a derived property via a date part extraction operation.
 */
export interface ExtractDatePartCalculation {
  dateOperand: DateTimeOutputCalculation;
  datePart: DatePart;
}
/**
 * Object Set containing objects in provided Object Set that match the provided filter.
 */
export interface FilteredObjectSet {
  derivedProperties?: TypedDerivedProperties | null | undefined;
  filter: ObjectSetFilter;
  objectSet: ObjectSet;
  runtimeDerivedProperties?: LegacyDerivedProperties | null | undefined;
}
export interface FilterParameter_unresolved {
  type: "unresolved";
  unresolved: UnresolvedFilterParameter;
}

export interface FilterParameter_resolved {
  type: "resolved";
  resolved: ResolvedFilterParameter;
}
/**
 * A filter parameter.
 */
export type FilterParameter =
  | FilterParameter_unresolved
  | FilterParameter_resolved;

/**
 * A value to match on in a filter.
 */
export type FilterValue = any;

/**
 * Bucketing dividing objects into the given number of buckets.
 */
export interface FixedBucketCountBucketing {
  numBuckets: number;
  preferHumanFriendlyRanges?: boolean | null | undefined;
  shouldCreateNullValueBucket?: boolean | null | undefined;
}
/**
 * Bucketing dividing objects into buckets with fixed width.
 */
export interface FixedWidthBucketing {
  bucketWidth: number | "NaN" | "Infinity" | "-Infinity";
  excludeEmptyBuckets?: boolean | null | undefined;
  maxBuckets?: BucketCountLimit | null | undefined;
  shouldCreateNullValueBucket?: boolean | null | undefined;
}
/**
 * A unique identifier for a Trident fork.
 */
export type ForkRid = string;

/**
 * A Foundry link.
 */
export interface FoundryLink {
  linkTypeRid: EntityTypeRid;
  objectSideA: FoundryObjectReference;
  objectSideB: FoundryObjectReference;
  primaryKey: EntityPrimaryKey;
  version: EntityVersion;
}
/**
 * A Foundry object.
 */
export interface FoundryObject {
  objectRid?: ObjectRid | null | undefined;
  objectTypeRid: ObjectTypeRid;
  primaryKey: ObjectPrimaryKeyV2;
  properties: Record<PropertyTypeRid, PropertyValue>;
  runtimeDerivedProperties: Record<PropertyId, PropertyValue>;
  score?: number | "NaN" | "Infinity" | "-Infinity" | null | undefined;
  title: string;
  version: ObjectVersion;
}
/**
 * Identifiers that reference a single `FoundryObject`.
 *
 * The ObjectRid will be returned based on the setting of the ObjectLoadingResponseOptions#shouldLoadObjectRids
 * flag in the request. It will always be returned by default unless specifically opted out and clients
 * can upgrade by throwing in the empty case.
 */
export interface FoundryObjectReference {
  objectLocatorV2: ObjectLocatorV2;
  objectRid?: ObjectRid | null | undefined;
}
/**
 * Parameters used to control fuzzy searching.
 */
export interface Fuzziness {
  maxEditDistance: MaxEditDistance;
}
/**
 * An object matches a GeoBoundingBoxFilter iff the value of the provided property is within the provided bounds.
 * This filter is only supported on geo_point property types.
 */
export interface GeoBoundingBoxFilter {
  bottomRight: string;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  topLeft: string;
}
/**
 * An object matches a GeoDistanceFilter iff the value of the provided property is within the provided distance
 * of the provided location i.e. sits within a circle centered at the provided location.
 */
export interface GeoDistanceFilter {
  distance: Distance;
  location: string;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * Bucketing into grid cells by a geohash property.
 */
export interface GeoHashBucketing {
  maxBuckets: BucketCountLimit;
  precision: GeoHashPrecision;
}
/**
 * A number between 1 and 12 describing how many letters of a geohash to use when distributing into buckets.
 */
export type GeoHashPrecision = number;

/**
 * A filter value that represents a latitude-longitude pair.
 */
export interface GeoPointFilterValue {
  latitude: number | "NaN" | "Infinity" | "-Infinity";
  longitude: number | "NaN" | "Infinity" | "-Infinity";
}
/**
 * An object property value that represents a latitude-longitude pair.
 */
export interface GeoPointPropertyValue {
  latitude: number | "NaN" | "Infinity" | "-Infinity";
  longitude: number | "NaN" | "Infinity" | "-Infinity";
}
/**
 * An object matches a GeoPolygonFilter iff the value of the provided property is within bounds of the provided
 * polygon. This filter is only supported on geo_point property types.
 */
export interface GeoPolygonFilter {
  polygon: Array<string>;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * Filter properties of type geo_shape or geo_point.
 */
export interface GeoShapeFilter {
  geoShapeQuery: GeoShapeQuery;
  spatialFilterMode: GeoShapeSpatialFilterMode;
}
/**
 * A filter value that represents a geoshape. This value will valid GeoJSON.
 */
export type GeoShapeFilterValue = any;

/**
 * An object property value that represents a geoshape. This value is guaranteed to be a valid GeoJSON.
 */
export type GeoShapePropertyValue = any;
export interface GeoShapeQuery_geoBoundingBoxFilter {
  type: "geoBoundingBoxFilter";
  geoBoundingBoxFilter: GeoBoundingBoxFilter;
}

export interface GeoShapeQuery_geoPolygonFilter {
  type: "geoPolygonFilter";
  geoPolygonFilter: GeoPolygonFilter;
}
/**
 * Union type for valid queries over geo shape properties.
 */
export type GeoShapeQuery =
  | GeoShapeQuery_geoBoundingBoxFilter
  | GeoShapeQuery_geoPolygonFilter;

/**
 * Geometry operation under which to evaluate the geo shape query.
 */
export type GeoShapeSpatialFilterMode = "INTERSECTS" | "DISJOINT" | "WITHIN";

/**
 * The ID for a Geotime series within an integration; this can be written into Geotime by an end user
 * and is therefore unsafe.
 */
export type GeotimeSeriesId = string;

/**
 * A reference to a Geotime integration; this is randomly generated and is therefore safe to log.
 */
export type GeotimeSeriesIntegrationRid = string;

/**
 * The property value for a Geotime series reference
 */
export interface GeotimeSeriesReference {
  geotimeSeriesId: GeotimeSeriesId;
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}
/**
 * An object property value that represents a GeotimeSeriesReference.
 */
export type GeotimeSeriesReferencePropertyValue = GeotimeSeriesReference;
export interface GetAllObjectsInitialPageRequest {
  objectLoadingResponseOptions?:
    | ObjectLoadingResponseOptions
    | null
    | undefined;
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
  pageSize: number;
  propertySet: PropertySetV2;
  responseOptions?: ResponseOptions | null | undefined;
}
export interface GetAllObjectsInitialPageResponse {
  interfaceViews: Record<
    InterfaceTypeRid,
    Record<ObjectTypeRid, InterfaceView>
  >;
  nextPageToken?: PageToken | null | undefined;
  objectSetEntities?: ObjectSetEntities | null | undefined;
  results: Array<FoundryObject>;
  totalResults: number;
  usageCost?: UsageCost | null | undefined;
}
export interface GetAllObjectsNextPageRequest {
  objectLoadingResponseOptions?:
    | ObjectLoadingResponseOptions
    | null
    | undefined;
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
  pageSize: number;
  pageToken: PageToken;
  propertySet: PropertySetV2;
  responseOptions?: ResponseOptions | null | undefined;
}
export interface GetAllObjectsNextPageResponse {
  interfaceViews: Record<
    InterfaceTypeRid,
    Record<ObjectTypeRid, InterfaceView>
  >;
  nextPageToken?: PageToken | null | undefined;
  results: Array<FoundryObject>;
  usageCost?: UsageCost | null | undefined;
}
/**
 * A bulk request for getting versioned object sets identified by given versioned object set rids.
 */
export interface GetBulkLatestVersionRequest {
  versionedObjectSetRids: Array<VersionedObjectSetRid>;
}
/**
 * Response to GetBulkLatestVersionRequest, containing a map from from versioned object set rid to responses for queried versioned object sets.
 */
export interface GetBulkLatestVersionResponse {
  latestVersionResponses: Record<
    VersionedObjectSetRid,
    GetBulkLatestVersionResponseEntry
  >;
}
/**
 * Information necessary to identify the latest version of a versioned object set.
 */
export interface GetBulkLatestVersionResponseEntry {
  latestVersion?: LatestVersionResponse | null | undefined;
}
export interface GetBulkLinksPageRequest {
  linksRequests: Array<GetBulkLinksPageRequestEntry>;
  objectLoadingResponseOptions?:
    | ObjectLoadingResponseOptions
    | null
    | undefined;
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSetContext: ObjectSetContext;
  pageSize: number;
  pageToken?: GetBulkLinksPageToken | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
}
/**
 * A single query entry for paging links. Query specifies the link types with link side and object selection,
 * where the objects in the object selection are expected to appear on the link side of the corresponding link
 * types.
 */
export interface GetBulkLinksPageRequestEntry {
  directedLinkTypes: Array<DirectedLinkTypeRid>;
  objects: ObjectsSelection;
}
/**
 * Results contains a list of LoadedObjectLinksResultV2 that includes requested ObjectIdentifier and a list of
 * found DirectedFoundryLinks. The sum of all links will not exceed 100_000 in a single page.
 */
export interface GetBulkLinksPageResponse {
  pageToken?: GetBulkLinksPageToken | null | undefined;
  results: Array<LoadedObjectLinksResultV2>;
  usageCost?: UsageCost | null | undefined;
}
export interface GetBulkLinksPageToken_pageToken {
  type: "pageToken";
  pageToken: PageToken;
}
/**
 * A token for paging links.
 */
export type GetBulkLinksPageToken = GetBulkLinksPageToken_pageToken;

/**
 * A bulk request for getting object sets identified by given object set rids.
 */
export interface GetBulkObjectSetRequest {
  objectSetRids: Array<ObjectSetRid>;
}
/**
 * Response to GetBulkObjectSetRequest, containing a map from object set rid to responses for queried object sets.
 */
export interface GetBulkObjectSetResponse {
  objectSetResponses: Record<ObjectSetRid, GetObjectSetResponse>;
}
export interface GetLinksRequest {
  directedRelation: DirectedRelation;
  objectIdentifiers: Array<ObjectIdentifier>;
  objectLoadingResponseOptions?:
    | ObjectLoadingResponseOptions
    | null
    | undefined;
  objectSetContext: ObjectSetContext;
  pageSize: number;
  responseOptions?: ResponseOptions | null | undefined;
}
export interface GetLinksResponse {
  results: Array<ObjectLinksResult>;
  totalLinks: number;
  usageCost?: UsageCost | null | undefined;
}
/**
 * Initial request to scroll through objects in an ObjectSet.
 */
export interface GetObjectLocatorsInitialScrollRequest {
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSet: ObjectSet;
  objectSetContext?: ObjectSetContext | null | undefined;
  pageSize: number;
  responseOptions?: ResponseOptions | null | undefined;
  sort?: Array<PropertySort> | null | undefined;
}
/**
 * Subsequent request to scroll through objects in an ObjectSet.
 */
export interface GetObjectLocatorsNextScrollRequest {
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
  scrollId: ScrollId;
}
export interface GetObjectLocatorsScrollResponse {
  objectLocators: Array<ObjectLocator>;
  objectSetEntities?: ObjectSetEntities | null | undefined;
  scrollId: ScrollId;
  totalObjects: number;
  usageCost?: UsageCost | null | undefined;
}
export interface GetObjectSetResponse {
  objectSet?: SavedObjectSet | null | undefined;
}
/**
 * Initial request to scroll through objects in an ObjectSet.
 */
export interface GetObjectsInitialScrollRequest {
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSet: ObjectSet;
  objectSetContext?: ObjectSetContext | null | undefined;
  pageSize: number;
  responseOptions?: ResponseOptions | null | undefined;
  sort?: Array<PropertySort> | null | undefined;
}
/**
 * Subsequent request to scroll through objects in an ObjectSet.
 */
export interface GetObjectsNextScrollRequest {
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
  scrollId: ScrollId;
}
export interface GetObjectsPageRequest {
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSet: ObjectSet;
  objectSetContext?: ObjectSetContext | null | undefined;
  pageSize: number;
  pageToken?: PageToken | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
  sort?: Array<PropertySort> | null | undefined;
}
export interface GetObjectsPageResponse {
  objectRids: Array<ObjectRid>;
  objectSetEntities?: ObjectSetEntities | null | undefined;
  pageToken?: PageToken | null | undefined;
  totalObjects: number;
  usageCost?: UsageCost | null | undefined;
}
export interface GetObjectsScrollResponse {
  objectRids: Array<ObjectRid>;
  objectSetEntities?: ObjectSetEntities | null | undefined;
  scrollId: ScrollId;
  totalObjects: number;
  usageCost?: UsageCost | null | undefined;
}
export interface GetObjectTypesRequest {
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
}
/**
 * The objectTypeIds and objectTypeRids lists are guaranteed to match up.  Specifically, the id at objectTypeIds[i] and the rid at objectTypeRids[i] represent the same object type for all i, and the lists are the same length. There are guaranteed to be no duplicates in either list.
 */
export interface GetObjectTypesResponse {
  objectTypeIds: Array<ObjectTypeId>;
  objectTypeRids: Array<ObjectTypeRid>;
}
export interface GetReferencedEntitiesRequest {
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
}
export interface GetReferencedEntitiesResponse {
  linkTypeRids: Array<LinkTypeRid>;
  objectTypeRids: Array<ObjectTypeRid>;
}
export interface GetTopObjectsInitialPageRequest {
  derivedProperties?: TypedDerivedProperties | null | undefined;
  objectLoadingResponseOptions?:
    | ObjectLoadingResponseOptions
    | null
    | undefined;
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
  pageSize: number;
  propertySet: PropertySetV2;
  referenceSigningOptions?: ReferenceSigningOptions | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
  resultOrdering: ResultOrdering;
  runtimeDerivedProperties: Record<ObjectTypeId, LegacyDerivedProperties>;
}
export interface GetTopObjectsInitialPageResponse {
  interfaceViews: Record<
    InterfaceTypeRid,
    Record<ObjectTypeRid, InterfaceView>
  >;
  nextPageToken?: PageToken | null | undefined;
  objectSetEntities?: ObjectSetEntities | null | undefined;
  results: Array<FoundryObject>;
  totalResults: number;
  usageCost?: UsageCost | null | undefined;
}
export interface GetTopObjectsNextPageRequest {
  derivedProperties?: TypedDerivedProperties | null | undefined;
  objectLoadingResponseOptions?:
    | ObjectLoadingResponseOptions
    | null
    | undefined;
  objectPagingResponseOptions?: ObjectPagingResponseOptions | null | undefined;
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
  pageSize: number;
  pageToken: PageToken;
  propertySet: PropertySetV2;
  referenceSigningOptions?: ReferenceSigningOptions | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
  resultOrdering: ResultOrdering;
  runtimeDerivedProperties: Record<ObjectTypeId, LegacyDerivedProperties>;
}
export interface GetTopObjectsNextPageResponse {
  interfaceViews: Record<
    InterfaceTypeRid,
    Record<ObjectTypeRid, InterfaceView>
  >;
  nextPageToken?: PageToken | null | undefined;
  results: Array<FoundryObject>;
  totalResults: number;
  usageCost?: UsageCost | null | undefined;
}
/**
 * An object matches iff the value of the provided property exists and is not null.
 */
export interface HasPropertyAggregationFilter {
  propertyId: PropertyId;
}
/**
 * An object matches a HasPropertyFilter iff it has the provided property and its value is non-null.
 */
export interface HasPropertyFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * Buckets will only be created for values matching the provided regex.
 *
 * Throws if the regex pattern is invalid, or longer than 1000 characters.
 *
 * Warning: to avoid bad query performance, avoid using wildcard patterns (e.g. `.*`) without prefix or suffix.
 */
export interface IncludeByRegexStringBucketingValueFilter {
  regex: RegexPattern;
}
/**
 * Buckets will only be created for the provided values.
 */
export interface IncludeValuesStringBucketingValueFilter {
  values: Array<string>;
}
/**
 * A filter value whose type is integer.
 */
export type IntegerFilterValue = number;

/**
 * An object property value whose type is integer.
 */
export type IntegerPropertyValue = number;

/**
 * Object Set containing all objects of object types which implement the supplied interface or a child interface
 * of it.
 */
export interface InterfaceBaseObjectSet {
  interfaceTypeRid: InterfaceTypeRid;
}
/**
 * ObjectSet containing all objects that are linked to the Interface objects in provided object set via
 * an Interface Link Type, and are on the opposite side of the Interface objects in the object set. The provided
 * object set's scope must contain the Interface that is being searched around. If performed on Object Types
 * implementing the Interface, the object set must be first cast to the Interface with AsTypeObjectSet.
 */
export interface InterfaceLinkSearchAroundObjectSet {
  interfaceLinkTypeRid: InterfaceLinkTypeRid;
  objectSet: ObjectSet;
}
/**
 * Resource Identifier of an interface link type.
 */
export type InterfaceLinkTypeRid = string;

/**
 * An object matches an InterfaceTypeFilter iff the set of interfaces it implements contains the provided
 * interface.
 */
export interface InterfaceTypeFilter {
  interfaceTypeRid: InterfaceTypeRid;
}
/**
 * Resource Identifier of an interface type.
 */
export type InterfaceTypeRid = string;
export type InterfaceTypeTemplateId = TemplateId;

/**
 * Views of how an object type implements an interface. This is a mapping from the
 * interface property type required by an interface to the object type's property type that fulfills
 * this requirement.
 */
export interface InterfaceView {
  view: Record<SharedPropertyTypeRid, PropertyTypeRid>;
}
/**
 * Object Set containing objects present in all provided Object Sets. When the provided Object Sets have
 * different types, the objects along with the interface views of all interfaces involved in the
 * intersection are returned.
 *
 * For example, in "Intersected(InterfaceBase(Drivable), InterfaceBase(Flyable))", the interface views
 * provided in the response will contain the views for each object type that implements both the Drivable and
 * Flyable interfaces.
 */
export interface IntersectedObjectSet {
  objectSets: Array<ObjectSet>;
}
/**
 * A date or time interval.
 */
export interface Interval {
  unit: TimeUnit;
  value: number;
}
/**
 * An ordering by aggregation keys.
 */
export interface KeyOrdering {
  direction: OrderingDirection;
}
/**
 * WARNING: this feature is supported only for object types stored in Object Storage V2
 *
 * ObjectSet containing the top k objects with propertyId nearest to the given vector.
 */
export interface KnnObjectSet {
  kValue: number;
  objectSet: ObjectSet;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  vector: Vector;
}
/**
 * ObjectSet containing the top k objects with propertyId nearest to the given vector.
 */
export interface KnnObjectSetV2 {
  kValue: number;
  objectSet: ObjectSet;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  query: KnnQuery;
}
export interface KnnQuery_vector {
  type: "vector";
  vector: Vector;
}

export interface KnnQuery_text {
  type: "text";
  text: string;
}
/**
 * Supported ways to query using knn. Can either use a vector directly, or use text which will get embedding using
 * the model specified in the Ontology.
 */
export type KnnQuery = KnnQuery_vector | KnnQuery_text;

export interface LatestVersionResponse {
  latestObjectSetRid: ObjectSetRid;
  latestVersion: ObjectSetVersion;
}
/**
 * A collection of derived properties that can be referenced in an object set or aggregation.
 * They are ephemeral and only exist for the lifetime of a request.
 */
export type LegacyDerivedProperties = Record<
  PropertyId,
  DerivedPropertyDefinition
>;
export interface LinkDefinition_nativeLink {
  type: "nativeLink";
  nativeLink: NativeLinkDefinition;
}

export interface LinkDefinition_methodLink {
  type: "methodLink";
  methodLink: MethodLinkDefinition;
}
/**
 * Describes which objects are linked together.
 * Formally, link can be modelled as a function `f: object -> ObjectSet`
 * Links can be defined statically at write-time or dynamically as a result of a computation.
 */
export type LinkDefinition =
  | LinkDefinition_nativeLink
  | LinkDefinition_methodLink;

/**
 * A collection of values of a property.
 */
export interface LinkedCollection {
  limit: number;
  property: PropertyIdentifier;
}
/**
 * Total count of objects
 */
export interface LinkedCountMetric {
}
/**
 * A property to compute a dispersion metric for.
 */
export interface LinkedDispersionMetric {
  method: LinkedDispersionMetricMethod;
  property?: DerivedPropertyDefinition | null | undefined;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * Method to be used to provide final value for standard deviation or variance.
 * Use POPULATION when you have the entire set of data to work with OR
 * Use SAMPLE when you have an incomplete set of data (with at least 2 values) to work with.
 * An in depth explanation here: https://en.wikipedia.org/wiki/Bessel%27s_correction
 */
export type LinkedDispersionMetricMethod = "POPULATION" | "SAMPLE";

/**
 * A derived property that references a property on a linked object.
 * The linked object is specified by a link type and direction.
 *
 * NB: The contract for this derived property is that it may not change the cardinality of the source object set.
 * This means that only one-to-one and one-to-many link types are supported. Additionally, the target property
 * must be on the 'one' side of the link in the latter case.
 *
 * If the desired target property is on the 'many' side of a link, then either a linked objects aggregation
 * should be considered, or the link direction should be reversed (one-to-many case only).
 */
export interface LinkedObjectPropertyDefinition {
  relationId?: RelationId | null | undefined;
  relationIdentifier?: RelationIdentifier | null | undefined;
  relationSide?: LinkedPropertyRelationSide | null | undefined;
  targetObjectSet: ObjectSet;
  targetProperty?: DerivedPropertyDefinition | null | undefined;
  targetPropertyId?: PropertyId | null | undefined;
}
/**
 * A derived property that references an aggregation on a set of linked objects.
 * The linked objects are specified by a link type and direction.
 */
export interface LinkedObjectsAggregationPropertyDefinition {
  metric: DerivedPropertyAggregation;
  relationId?: RelationId | null | undefined;
  relationIdentifier?: RelationIdentifier | null | undefined;
  relationSide: LinkedPropertyRelationSide;
  targetObjectSet: ObjectSet;
}
/**
 * A property to compute a percentile metric for.
 */
export interface LinkedPercentileMetric {
  percentile: number | "NaN" | "Infinity" | "-Infinity";
  property?: DerivedPropertyDefinition | null | undefined;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * A derived property that references a property on a linked object.
 * The linked object is specified by a LinkDefinition.
 */
export interface LinkedPropertyDefinition {
  linkDefinition: LinkDefinition;
  linkedPropertyIdentifier: PropertyIdentifier;
}
/**
 * A property to compute a metric for.
 */
export interface LinkedPropertyMetric {
  property?: DerivedPropertyDefinition | null | undefined;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * Side of a relation linking to a linked derived property.
 *
 * For many-to-many link types SOURCE corresponds to object type A in the OMS many to many link definition, and
 * TARGET corresponds to object type B.
 *
 * For one-to-many link types SOURCE generally corresponds to the ONE (or primary key) side in the OMS one to
 * many link definition, and TARGET corresponds to the MANY (or foreign key) side.
 * WARNING: In the self-referential one-to-many join case, this is inverted.
 */
export type LinkedPropertyRelationSide = "SOURCE" | "TARGET";

/**
 * Side of a link.
 *
 * For many-to-many link types SOURCE corresponds to object type A in the OMS many to many link definition, and
 * TARGET corresponds to object type B.
 *
 * For one-to-many link types SOURCE generally corresponds to the ONE (or primary key) side in the OMS one to
 * many link definition, and TARGET corresponds to the MANY (or foreign key) side.
 * WARNING: In the self-referential one-to-many join case, this is inverted.
 */
export type LinkSide = "SOURCE" | "TARGET";

/**
 * A unique identifier of a link type.
 */
export type LinkTypeRid = string;

/**
 * Successful links retrieval result for a requested object.
 */
export interface LoadedObjectLinksResult {
  links: Array<FoundryLink>;
  objectIdentifier: ObjectIdentifier;
}
/**
 * Successful links retrieval result for a requested object.
 */
export interface LoadedObjectLinksResultV2 {
  links: Array<DirectedFoundryLink>;
  objectIdentifier: ObjectIdentifier;
}
export interface LoadObjectsRequest {
  objectIdentifiers: Array<ObjectIdentifier>;
  objectLoadingResponseOptions?:
    | ObjectLoadingResponseOptions
    | null
    | undefined;
  objectSetContext: ObjectSetContext;
  propertySet: PropertySetV2;
  referenceSigningOptions?: ReferenceSigningOptions | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
}
export interface LoadObjectsResponse {
  results: Array<FoundryObject | null | undefined>;
  usageCost?: UsageCost | null | undefined;
}
/**
 * String representation of a 64-bit long value. This value has no formatting of any kind, and contains only
 * digits (with an optional leading '-' sign for negative numbers).
 */
export type LongFilterValue = string;

/**
 * String representation of a 64-bit long value. This value has no formatting of any kind, and contains only
 * digits (with an optional leading '-' sign for negative numbers).
 */
export type LongPropertyValue = string;

/**
 * An object property value representing a marking. This value cannot be used as a primary key.
 */
export type MarkingPropertyValue = string;

/**
 * This static object set was created via materializing some other object set.
 */
export interface MaterializationProvenance {
  materializationTime: string;
  objectSetRid: ObjectSetRid;
}
export interface MaterializeObjectSetRequest {
  objectSetContext?: ObjectSetContext | null | undefined;
  objectSetRid: ObjectSetRid;
  securityRid: string;
}
export interface MaterializeObjectSetResponse {
  objectSetRid: ObjectSetRid;
}
/**
 * Maximum number of buckets to return.
 */
export interface MaxBucketsBucketing {
  maxBuckets: BucketCountLimit;
}
/**
 * The maximum distance between words to consider them to be a match.
 *
 * The distance is measured as the minimum number of operations required to change one word into another. Operations consist of insertions,
 * deletions or substitutions of a single character, or transposition of two adjacent characters. (Damerau–Levenshtein distance)
 *
 * The AUTO strategy determines the max edit distance based on the length of the term:
 * - terms of length {0, 1, 2} must match exactly,
 * - terms of length {3, 4, 5} have one edit allowed,
 * - terms longer than 5 have two edits allowed.
 *
 * AUTO should generally be the preferred value for the edit distance.
 */
export type MaxEditDistance =
  | "AUTO"
  | "LEVENSHTEIN_ZERO"
  | "LEVENSHTEIN_ONE"
  | "LEVENSHTEIN_TWO";

/**
 * A token that can be used to access the media item. This token is only valid for a limited time and can be used to access the media item without authentication repeatedly during the lifetime of the token.
 * This token will only be present if explicitly requested by the client by setting  `referenceSigningOptions.signMediaReferences` to true in the endpoints that support it.
 * This token can only be generated for media items that are backed by a media set view datasource.
 * This token will not be generated for media items in arrays.
 * NOTE: This token is generated for the calling user and should not be shared.
 */
export type MediaItemReadToken = string;

/**
 * Reference to a media set item containing the media
 */
export interface MediaItemReference {
  mediaItemRid: MediaItemRid;
  mediaSetRid: MediaSetRid;
}
/**
 * The identifier of the media item in the media set backing the media
 */
export type MediaItemRid = string;

/**
 * A reference to an immutable piece of media.
 */
export interface MediaReference {
  mimeType: MimeType;
  reference: MediaValueReference;
}
/**
 * An object property value that represents a MediaReference.
 */
export type MediaReferencePropertyValue = MediaReference;

/**
 * The identifier of the media set backing the media
 */
export type MediaSetRid = string;

/**
 * The identifier of the media set view backing the media
 */
export type MediaSetViewRid = string;
export interface MediaValueReference_mediaItem {
  type: "mediaItem";
  mediaItem: MediaItemReference;
}

export interface MediaValueReference_mediaViewItem {
  type: "mediaViewItem";
  mediaViewItem: MediaViewItemReference;
}

export interface MediaValueReference_datasetFile {
  type: "datasetFile";
  datasetFile: DatasetFileReference;
}
/**
 * A reference to media contained in either a media set or a dataset.
 */
export type MediaValueReference =
  | MediaValueReference_mediaItem
  | MediaValueReference_mediaViewItem
  | MediaValueReference_datasetFile;

/**
 * Reference to a media set view item containing the media
 */
export interface MediaViewItemReference {
  mediaItemRid: MediaItemRid;
  mediaSetRid: MediaSetRid;
  mediaSetViewRid: MediaSetViewRid;
  token?: MediaItemReadToken | null | undefined;
}
/**
 * Object Set which has not yet been resolved into a concrete definition and acts as a method input parameter.
 *
 * Allows for constructing object-sets which can act as methods.
 *
 * An attempt to compute such object-set in object loading or aggregation endpoints will end up with an error.
 */
export interface MethodInputObjectSet {
}
/**
 * Defines links computed at runtime based on the supplied object set method.
 */
export interface MethodLinkDefinition {
  method: ObjectSet;
}
export interface Metric_count {
  type: "count";
  count: CountMetric;
}

export interface Metric_avg {
  type: "avg";
  avg: PropertyMetric;
}

export interface Metric_max {
  type: "max";
  max: PropertyMetric;
}

export interface Metric_min {
  type: "min";
  min: PropertyMetric;
}

export interface Metric_sum {
  type: "sum";
  sum: PropertyMetric;
}

export interface Metric_percentile {
  type: "percentile";
  percentile: PercentileMetric;
}

export interface Metric_cardinality {
  type: "cardinality";
  cardinality: PropertyMetric;
}

export interface Metric_exactCardinality {
  type: "exactCardinality";
  exactCardinality: PropertyMetric;
}

export interface Metric_standardDeviation {
  type: "standardDeviation";
  standardDeviation: DispersionMetric;
}

export interface Metric_variance {
  type: "variance";
  variance: DispersionMetric;
}

export interface Metric_boundingBox {
  type: "boundingBox";
  boundingBox: BoundingBoxMetric;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property).
 */
export type Metric =
  | Metric_count
  | Metric_avg
  | Metric_max
  | Metric_min
  | Metric_sum
  | Metric_percentile
  | Metric_cardinality
  | Metric_exactCardinality
  | Metric_standardDeviation
  | Metric_variance
  | Metric_boundingBox;

/**
 * Identifier of a metric.
 */
export type MetricName = string;

/**
 * The result of a named metric.
 */
export type MetricResult = number | "NaN" | "Infinity" | "-Infinity";

/**
 * A grouping of items that collects metrics for each bucket, and possibly has sub-aggregations.
 */
export interface MetricsAggregation {
  dimension: Dimension;
  filter?: AggregationFilter | null | undefined;
  metrics: Record<MetricName, Metric>;
  ordering: Array<Ordering>;
  subAggregations: Record<AggregationName, Aggregation>;
}
/**
 * Expected to match mime format from  https://www.iana.org/assignments/media-types/media-types.xhtml
 */
export type MimeType = string;

/**
 * This filter analyzes the query string.
 * The output of the analysis of a string are called tokens, for example the string "The Quick Brown Fox"
 * produces the tokens "the", "quick", "brown", "fox" using the default analyzer.
 *
 * An object matches a MultiMatchFilter iff the tokens for the specified query match exactly
 * any of the tokens from values in the properties specified in the PropertySet.
 *
 * For example, a query with "The Quick Brown Fox" for a property with the default analyzer
 * queries for `"the" OR "quick" OR "brown" OR "fox"`, so would match "The brown fox jumped over the fence".
 *
 * Additional Japanese query behavior:
 *
 * Custom tokenization gets applied against properties that use the standard analyzer
 * if the query includes at least one Han or hiragana character
 * and contains no characters that are not Han, hiragana, katakana, alphanumerics, or punctuation.
 *
 * In the custom tokenization, a sequence of the following characters is considered one token: Han and
 * hiragana, katakana, alphabets, or numbers. For example, the string "はねだ空港ターミナルA発バス231" produces the
 * tokens "はねだ空港", "ターミナル", "A", "発", "バス", "231."
 *
 * Each token is treated as a PhraseFilter, so any multi-token Japanese query string results in
 * AndFilter or OrFilter of PhraseFilters, depending upon the MultiMatch operator used.
 * The PhraseFilter's PhraseMatch mode is determined by the following rules:
 *
 * - Any token except for the last token is treated with PhraseMatchMode.PHRASE.
 * - If the last token is a Han/hiragana sequence, PhraseMatchMode.PHRASE gets applied to the token.
 * - If the last token is katakana or alphanumeric, PhraseMatchMode.PHRASE_PREFIX get applied to the token.
 *
 * If all properties uses the standard analyzer, the And/Or of PhraseFilters is applied across all properties,
 * which means that if multiple properties are included in the PropertySet, the operator is AND, and the full set
 * of tokens in the query exists across the PropertySet properties, the Japanese behavior will return a match,
 * even if the full set of tokens are not present within the value of any one property,
 */
export interface MultiMatchFilter {
  fuzziness?: Fuzziness | null | undefined;
  fuzzy?: boolean | null | undefined;
  operator?: MultiMatchFilterOperator | null | undefined;
  propertySet: PropertySet;
  query: string;
}
/**
 * AND or OR.
 */
export type MultiMatchFilterOperator = "AND" | "OR";

/**
 * Ordering based on values of a property with a specified property id which can be present on multiple object
 * types. May also reference derived properties.
 * Sorting is not allowed on any ARRAY or GEOHASH properties as defined in the Ontology.
 * Sorting on string properties is only allowed as long as the property is marked as supporting exact matching
 * in the Ontology.
 * Do note that in case of multi-object-type object sets, the property has to exist on all involved object types
 * and has to be of the same type.
 */
export interface MultiObjectTypePropertyOrdering {
  order: SortOrder;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * The current user's attributes under the given key. This resolves to a list of values.
 */
export interface MultipassAttribute {
  key: MultipassAttributeKey;
}
/**
 * The key of the Multipass attribute.
 */
export type MultipassAttributeKey = string;

/**
 * The current user's Multipass user id.
 */
export interface MultipassUserId {
}
/**
 * Defines links based on the supplied relation identifier.
 */
export interface NativeLinkDefinition {
  linkedRelationSide?: LinkedPropertyRelationSide | null | undefined;
  relationIdentifier: RelationIdentifier;
}
/**
 * An intermediate grouping that does not collect any metrics, but only has sub-aggregations.
 */
export interface NestedAggregation {
  dimension: Dimension;
  filter?: AggregationFilter | null | undefined;
  ordering: Array<KeyOrdering>;
  subAggregations: Record<AggregationName, Aggregation>;
}
/**
 * An object matches this filter iff it does not match the contained filter.
 */
export interface NotAggregationFilter {
  filter: AggregationFilter;
}
/**
 * An object matches a NotFilter iff it does not match the provided filter.
 */
export interface NotFilter {
  filter: ObjectSetFilter;
}
export interface NotSupported {
}
/**
 * Variant representing a null value. Null values are currently expected to only be returned inside array
 * property values - no property value will be otherwise returned for properties that do not have a value, or
 * where that value is null.
 */
export interface NullPropertyValue {
}
/**
 * A bucket that data was grouped into and the aggregations computed for the data in that bucket. This bucket  does not have a key and represents aggregations computed for data with null value for the corresponding field.
 */
export interface NullValueBucket {
  metrics: Record<MetricName, MetricResult | null | undefined>;
  subAggregations: Record<AggregationName, SubAggregateResult>;
}
/**
 * An operation on two property nodes for the purposes of defining a derived property.
 */
export interface NumericBinaryOperation {
  leftOperand: NumericOutputCalculation;
  rightOperand: NumericOutputCalculation;
}
export interface NumericBucketing_fixedBucketCount {
  type: "fixedBucketCount";
  fixedBucketCount: FixedBucketCountBucketing;
}

export interface NumericBucketing_fixedWidth {
  type: "fixedWidth";
  fixedWidth: FixedWidthBucketing;
}

export interface NumericBucketing_range {
  type: "range";
  range: RangeBucketing;
}
/**
 * Bucketing based upon a numeric property
 */
export type NumericBucketing =
  | NumericBucketing_fixedBucketCount
  | NumericBucketing_fixedWidth
  | NumericBucketing_range;

export interface NumericLiteral_double {
  type: "double";
  double: DoubleLiteral;
}
/**
 * A literal value for the purposes of defining a derived property via a numeric operation.
 */
export type NumericLiteral = NumericLiteral_double;

export interface NumericOperation_add {
  type: "add";
  add: NumericBinaryOperation;
}

export interface NumericOperation_subtract {
  type: "subtract";
  subtract: NumericBinaryOperation;
}

export interface NumericOperation_divide {
  type: "divide";
  divide: NumericBinaryOperation;
}

export interface NumericOperation_multiply {
  type: "multiply";
  multiply: NumericBinaryOperation;
}

export interface NumericOperation_negate {
  type: "negate";
  negate: NumericUnaryOperation;
}

export interface NumericOperation_absolute {
  type: "absolute";
  absolute: NumericUnaryOperation;
}

export interface NumericOperation_max {
  type: "max";
  max: NumericBinaryOperation;
}

export interface NumericOperation_min {
  type: "min";
  min: NumericBinaryOperation;
}
/**
 * An operation on one or two property nodes for the purposes of defining a derived property.
 */
export type NumericOperation =
  | NumericOperation_add
  | NumericOperation_subtract
  | NumericOperation_divide
  | NumericOperation_multiply
  | NumericOperation_negate
  | NumericOperation_absolute
  | NumericOperation_max
  | NumericOperation_min;

export interface NumericOutputCalculation_operation {
  type: "operation";
  operation: NumericOperation;
}

export interface NumericOutputCalculation_literal {
  type: "literal";
  literal: NumericLiteral;
}

export interface NumericOutputCalculation_propertyId {
  type: "propertyId";
  propertyId: PropertyId;
}

export interface NumericOutputCalculation_property {
  type: "property";
  property: DerivedPropertyDefinition;
}

export interface NumericOutputCalculation_fromDateTimeCalculation {
  type: "fromDateTimeCalculation";
  fromDateTimeCalculation: DateTimeToNumericCalculation;
}
/**
 * A calculation node that is used to define a derived property via a numeric operation.
 */
export type NumericOutputCalculation =
  | NumericOutputCalculation_operation
  | NumericOutputCalculation_literal
  | NumericOutputCalculation_propertyId
  | NumericOutputCalculation_property
  | NumericOutputCalculation_fromDateTimeCalculation;

/**
 * An operation on one property node for the purposes of defining a derived property.
 */
export interface NumericUnaryOperation {
  operand: NumericOutputCalculation;
}
export interface ObjectIdentifier_objectRid {
  type: "objectRid";
  objectRid: ObjectRid;
}

export interface ObjectIdentifier_objectLocatorV2 {
  type: "objectLocatorV2";
  objectLocatorV2: ObjectLocatorV2;
}
/**
 * Information necessary to uniquely identify an object.
 */
export type ObjectIdentifier =
  | ObjectIdentifier_objectRid
  | ObjectIdentifier_objectLocatorV2;

export interface ObjectLinksResult_loaded {
  type: "loaded";
  loaded: LoadedObjectLinksResult;
}
/**
 * Links retrieval result for a requested object.
 */
export type ObjectLinksResult = ObjectLinksResult_loaded;

/**
 * Optional features to toggle when generating the object loading response.
 */
export interface ObjectLoadingResponseOptions {
  shouldLoadObjectRids?: boolean | null | undefined;
}
/**
 * Information necessary to uniquely identify an object.
 */
export interface ObjectLocator {
  objectPrimaryKey: ObjectPrimaryKey;
  objectTypeId: ObjectTypeId;
}
/**
 * Information necessary to uniquely identify an object.
 */
export interface ObjectLocatorV2 {
  objectPrimaryKey: ObjectPrimaryKeyV2;
  objectTypeRid: ObjectTypeRid;
}
/**
 * Optional features to toggle when generating paging responses.
 */
export interface ObjectPagingResponseOptions {
  enableMemoryBasedPaging: boolean;
  requireConsistentPaging?: boolean | null | undefined;
}
/**
 * The primary key of an object.
 */
export type ObjectPrimaryKey = Record<PropertyId, any>;

/**
 * The primary key of an object.
 */
export type ObjectPrimaryKeyV2 = Record<PropertyTypeRid, PropertyValue>;

/**
 * Resource identifier of an object.
 */
export type ObjectRid = string;
export interface ObjectSet_base {
  type: "base";
  base: BaseObjectSet;
}

export interface ObjectSet_interfaceBase {
  type: "interfaceBase";
  interfaceBase: InterfaceBaseObjectSet;
}

export interface ObjectSet_static {
  type: "static";
  static: StaticObjectSet;
}

export interface ObjectSet_referenced {
  type: "referenced";
  referenced: ReferencedObjectSet;
}

export interface ObjectSet_filtered {
  type: "filtered";
  filtered: FilteredObjectSet;
}

export interface ObjectSet_intersected {
  type: "intersected";
  intersected: IntersectedObjectSet;
}

export interface ObjectSet_subtracted {
  type: "subtracted";
  subtracted: SubtractedObjectSet;
}

export interface ObjectSet_unioned {
  type: "unioned";
  unioned: UnionedObjectSet;
}

export interface ObjectSet_searchAround {
  type: "searchAround";
  searchAround: SearchAroundObjectSet;
}

export interface ObjectSet_softLinkSearchAround {
  type: "softLinkSearchAround";
  softLinkSearchAround: SoftLinkSearchAroundObjectSet;
}

export interface ObjectSet_interfaceLinkSearchAround {
  type: "interfaceLinkSearchAround";
  interfaceLinkSearchAround: InterfaceLinkSearchAroundObjectSet;
}

export interface ObjectSet_asType {
  type: "asType";
  asType: AsTypeObjectSet;
}

export interface ObjectSet_asBaseObjectTypes {
  type: "asBaseObjectTypes";
  asBaseObjectTypes: AsBaseObjectTypesObjectSet;
}

export interface ObjectSet_knn {
  type: "knn";
  knn: KnnObjectSet;
}

export interface ObjectSet_knnV2 {
  type: "knnV2";
  knnV2: KnnObjectSetV2;
}

export interface ObjectSet_methodInput {
  type: "methodInput";
  methodInput: MethodInputObjectSet;
}

export interface ObjectSet_withProperties {
  type: "withProperties";
  withProperties: WithPropertiesObjectSet;
}
/**
 * Supported Object Sets and Object Set operations. Refer to documentation of a particular Object Set for details.
 */
export type ObjectSet =
  | ObjectSet_base
  | ObjectSet_interfaceBase
  | ObjectSet_static
  | ObjectSet_referenced
  | ObjectSet_filtered
  | ObjectSet_intersected
  | ObjectSet_subtracted
  | ObjectSet_unioned
  | ObjectSet_searchAround
  | ObjectSet_softLinkSearchAround
  | ObjectSet_interfaceLinkSearchAround
  | ObjectSet_asType
  | ObjectSet_asBaseObjectTypes
  | ObjectSet_knn
  | ObjectSet_knnV2
  | ObjectSet_methodInput
  | ObjectSet_withProperties;

export interface ObjectSetBlockCreationError_multipassAttributesNotSupported {
  type: "multipassAttributesNotSupported";
  multipassAttributesNotSupported:
    ObjectSetBlockCreationErrorMultipassAttributeKeysNotSupported;
}

export interface ObjectSetBlockCreationError_notFound {
  type: "notFound";
  notFound: ObjectSetBlockCreationErrorNotFound;
}

export interface ObjectSetBlockCreationError_referencedObjectSetNotFound {
  type: "referencedObjectSetNotFound";
  referencedObjectSetNotFound:
    ObjectSetBlockCreationErrorReferencedObjectSetNotFound;
}

export interface ObjectSetBlockCreationError_staticObjectSetsNotSupported {
  type: "staticObjectSetsNotSupported";
  staticObjectSetsNotSupported:
    ObjectSetBlockCreationErrorStaticObjectSetsNotSupported;
}

export interface ObjectSetBlockCreationError_runtimeDerivedPropertiesNotSupported {
  type: "runtimeDerivedPropertiesNotSupported";
  runtimeDerivedPropertiesNotSupported:
    ObjectSetBlockCreationErrorRuntimeDerivedPropertiesNotSupported;
}
export type ObjectSetBlockCreationError =
  | ObjectSetBlockCreationError_multipassAttributesNotSupported
  | ObjectSetBlockCreationError_notFound
  | ObjectSetBlockCreationError_referencedObjectSetNotFound
  | ObjectSetBlockCreationError_staticObjectSetsNotSupported
  | ObjectSetBlockCreationError_runtimeDerivedPropertiesNotSupported;

export interface ObjectSetBlockCreationErrorMultipassAttributeKeysNotSupported {
}
export interface ObjectSetBlockCreationErrorNotFound {
  objectSetRid: ObjectSetRid;
}
export interface ObjectSetBlockCreationErrorReferencedObjectSetNotFound {
  objectSetRid: ObjectSetRid;
}
export interface ObjectSetBlockCreationErrorRuntimeDerivedPropertiesNotSupported {
}
export interface ObjectSetBlockCreationErrorStaticObjectSetsNotSupported {
}
export interface ObjectSetBlockData_v1 {
  type: "v1";
  v1: ObjectSetBlockDataV1;
}
export type ObjectSetBlockData = ObjectSetBlockData_v1;

/**
 * The data generated by packaging all the object sets contained in a single ObjectSetCreateBlockRequest request
 * to market place. The request can contain multiple object sets, which are packaged into a single
 * SingleObjectSetBlockData block.
 */
export interface ObjectSetBlockDataV1 {
  singleObjectSetBlockDatas: Array<SingleObjectSetBlockData>;
}
/**
 * This is serialized as a compass url variable key, as well as the value of the `objectSetType` key.
 */
export type ObjectSetCompassType =
  | "PARAMETERIZED_DYNAMIC_OBJECT_SET"
  | "DYNAMIC_OBJECT_SET"
  | "STATIC_OBJECT_SET";

/**
 * Additional context used to execute object set request queries.
 */
export interface ObjectSetContext {
  forkRid?: ForkRid | null | undefined;
  objectSetFilterContext?: ObjectSetFilterContext | null | undefined;
  ontologyBranchRid?: OntologyBranchRid | null | undefined;
  owningRid?: OwningRid | null | undefined;
  reportUsage?: boolean | null | undefined;
  snapshotId?: SnapshotId | null | undefined;
  workstateRid?: WorkstateRid | null | undefined;
}
/**
 * The entities used within an object set. i.e. object type rids, link type rids, and interface type rids.
 *
 * Note that relations belonging to an object set can change over time - this information should be treated as
 * dynamic and should not be persisted or treated as immutable.
 *
 * This result includes all object type rids that implements the included interface types.
 */
export interface ObjectSetEntities {
  interfaceTypeRids: Array<InterfaceTypeRid>;
  linkTypeRids: Array<LinkTypeRid>;
  objectTypeRids: Array<ObjectTypeRid>;
}
export interface ObjectSetFilter_or {
  type: "or";
  or: OrFilter;
}

export interface ObjectSetFilter_and {
  type: "and";
  and: AndFilter;
}

export interface ObjectSetFilter_not {
  type: "not";
  not: NotFilter;
}

export interface ObjectSetFilter_range {
  type: "range";
  range: RangeFilter;
}

export interface ObjectSetFilter_wildcard {
  type: "wildcard";
  wildcard: WildcardFilter;
}

export interface ObjectSetFilter_terms {
  type: "terms";
  terms: TermsFilter;
}

export interface ObjectSetFilter_exactMatch {
  type: "exactMatch";
  exactMatch: ExactMatchFilter;
}

export interface ObjectSetFilter_phrase {
  type: "phrase";
  phrase: PhraseFilter;
}

export interface ObjectSetFilter_prefixOnLastToken {
  type: "prefixOnLastToken";
  prefixOnLastToken: PrefixOnLastTokenFilter;
}

export interface ObjectSetFilter_geoBoundingBox {
  type: "geoBoundingBox";
  geoBoundingBox: GeoBoundingBoxFilter;
}

export interface ObjectSetFilter_geoDistance {
  type: "geoDistance";
  geoDistance: GeoDistanceFilter;
}

export interface ObjectSetFilter_geoPolygon {
  type: "geoPolygon";
  geoPolygon: GeoPolygonFilter;
}

export interface ObjectSetFilter_geoShape {
  type: "geoShape";
  geoShape: GeoShapeFilter;
}

export interface ObjectSetFilter_objectType {
  type: "objectType";
  objectType: ObjectTypeFilter;
}

export interface ObjectSetFilter_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeFilter;
}

export interface ObjectSetFilter_hasProperty {
  type: "hasProperty";
  hasProperty: HasPropertyFilter;
}

export interface ObjectSetFilter_linkPresence {
  type: "linkPresence";
  linkPresence: ApproximateLinkPresenceFilter;
}

export interface ObjectSetFilter_objectSetLink {
  type: "objectSetLink";
  objectSetLink: ObjectSetLinkFilter;
}

export interface ObjectSetFilter_objectSetInterfaceLink {
  type: "objectSetInterfaceLink";
  objectSetInterfaceLink: ObjectSetInterfaceLinkFilter;
}

export interface ObjectSetFilter_multiMatch {
  type: "multiMatch";
  multiMatch: MultiMatchFilter;
}

export interface ObjectSetFilter_relativeDateRange {
  type: "relativeDateRange";
  relativeDateRange: RelativeDateRangeFilter;
}

export interface ObjectSetFilter_relativeTimeRange {
  type: "relativeTimeRange";
  relativeTimeRange: RelativeTimeRangeFilter;
}

export interface ObjectSetFilter_parameterizedRange {
  type: "parameterizedRange";
  parameterizedRange: ParameterizedRangeFilter;
}

export interface ObjectSetFilter_parameterizedWildcard {
  type: "parameterizedWildcard";
  parameterizedWildcard: ParameterizedWildcardFilter;
}

export interface ObjectSetFilter_parameterizedTerms {
  type: "parameterizedTerms";
  parameterizedTerms: ParameterizedTermsFilter;
}

export interface ObjectSetFilter_parameterizedExactMatch {
  type: "parameterizedExactMatch";
  parameterizedExactMatch: ParameterizedExactMatchFilter;
}

export interface ObjectSetFilter_parameterizedPrefixOnLastToken {
  type: "parameterizedPrefixOnLastToken";
  parameterizedPrefixOnLastToken: ParameterizedPrefixOnLastTokenFilter;
}

export interface ObjectSetFilter_userContext {
  type: "userContext";
  userContext: UserContextFilter;
}
/**
 * Filter to be applied to an Object Set. Refer to documentation of a particular ObjectSetFilter for details.
 */
export type ObjectSetFilter =
  | ObjectSetFilter_or
  | ObjectSetFilter_and
  | ObjectSetFilter_not
  | ObjectSetFilter_range
  | ObjectSetFilter_wildcard
  | ObjectSetFilter_terms
  | ObjectSetFilter_exactMatch
  | ObjectSetFilter_phrase
  | ObjectSetFilter_prefixOnLastToken
  | ObjectSetFilter_geoBoundingBox
  | ObjectSetFilter_geoDistance
  | ObjectSetFilter_geoPolygon
  | ObjectSetFilter_geoShape
  | ObjectSetFilter_objectType
  | ObjectSetFilter_interfaceType
  | ObjectSetFilter_hasProperty
  | ObjectSetFilter_linkPresence
  | ObjectSetFilter_objectSetLink
  | ObjectSetFilter_objectSetInterfaceLink
  | ObjectSetFilter_multiMatch
  | ObjectSetFilter_relativeDateRange
  | ObjectSetFilter_relativeTimeRange
  | ObjectSetFilter_parameterizedRange
  | ObjectSetFilter_parameterizedWildcard
  | ObjectSetFilter_parameterizedTerms
  | ObjectSetFilter_parameterizedExactMatch
  | ObjectSetFilter_parameterizedPrefixOnLastToken
  | ObjectSetFilter_userContext;

/**
 * Overrides for unresolved filter parameters in used parameterized object set filters.
 */
export interface ObjectSetFilterContext {
  parameterOverrides: Record<UnresolvedFilterParameterId, FilterValue>;
}
/**
 * Matches iff it contains a link to any object in the provided objectSet, along the provided Interface Link
 * Type specified by the InterfaceLinkTypeRid, and if the starting object is on the SOURCE side of the
 * Interface Link Type.
 *
 * The SOURCE side is the Interface Type that the Interface Link Type belongs to.
 */
export interface ObjectSetInterfaceLinkFilter {
  interfaceLinkTypeRid: InterfaceLinkTypeRid;
  objectSet: ObjectSet;
}
/**
 * Matches iff it contains a link to any object in the provided objectSet, along the provided RelationId, and if
 * the starting object is on the provided RelationSide of the relation.
 */
export interface ObjectSetLinkFilter {
  objectSet: ObjectSet;
  relationId: RelationId;
  relationSide: RelationSide;
}
/**
 * Resource identifier of an Object Set.
 */
export type ObjectSetRid = string;
export type ObjectSetTemplateId = TemplateId;

/**
 * A specific version of a versioned object set. Resolves to a concrete object set.
 */
export type ObjectSetVersion = string;
export interface ObjectsSelection_objects {
  type: "objects";
  objects: Array<ObjectIdentifier>;
}
/**
 * Union type for selecting objects to be queried along links.
 */
export type ObjectsSelection = ObjectsSelection_objects;

/**
 * Dimension where objects get divided into buckets based on their object type.
 */
export interface ObjectTypeDimension {
  bucketing: MaxBucketsBucketing;
}
/**
 * An object matches an ObjectTypeFilter iff its ObjectTypeId matches the provided ObjectTypeId.
 */
export interface ObjectTypeFilter {
  objectTypeId: ObjectTypeId;
}
/**
 * Id of an object type.
 */
export type ObjectTypeId = string;
export interface ObjectTypeOrInterfaceTypeIdentifier_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}

export interface ObjectTypeOrInterfaceTypeIdentifier_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: InterfaceTypeRid;
}
/**
 * Identifier of an object type or interface type.
 */
export type ObjectTypeOrInterfaceTypeIdentifier =
  | ObjectTypeOrInterfaceTypeIdentifier_objectTypeRid
  | ObjectTypeOrInterfaceTypeIdentifier_interfaceTypeRid;

/**
 * A unique identifier of an object type.
 */
export type ObjectTypeRid = string;
export type ObjectTypeTemplateId = TemplateId;
export interface ObjectVersion_v1 {
  type: "v1";
  v1: ObjectVersionV1;
}
/**
 * Version of the returned object.
 * It is guaranteed that the object has not changed as long as the returned value is the same.
 */
export type ObjectVersion = ObjectVersion_v1;

/**
 * Token representing a version of the returned object.
 */
export type ObjectVersionV1 = string;

/**
 * A unique identifier for an ontology branch.
 */
export type OntologyBranchRid = string;

/**
 * List of ontology types that can be selected to allowlist which properties to return during a query.
 */
export type OntologyTypeSelection =
  | "ALL_PRIMITIVE_PROPERTY_TYPES"
  | "ARRAY"
  | "GEOSHAPE"
  | "GEOTIME_SERIES_REFERENCE"
  | "MARKING"
  | "MEDIA_REFERENCE"
  | "VECTOR"
  | "CIPHER"
  | "STRUCT";

/**
 * The ontology version associated with an entity.
 */
export type OntologyVersion = string;

/**
 * An object matches this filter iff it matches at least one of the contained filters.
 */
export interface OrAggregationFilter {
  filters: Array<AggregationFilter>;
}
export interface Ordering_keyOrdering {
  type: "keyOrdering";
  keyOrdering: KeyOrdering;
}

export interface Ordering_valueOrdering {
  type: "valueOrdering";
  valueOrdering: ValueOrdering;
}
/**
 * How sorting buckets should be ordered.
 */
export type Ordering = Ordering_keyOrdering | Ordering_valueOrdering;

/**
 * Either ascending or descending.
 */
export type OrderingDirection = "ASCENDING" | "DESCENDING";

/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an OrFilter iff it matches at least one of the filters.
 */
export interface OrFilter {
  filters: Array<ObjectSetFilter>;
}
/**
 * Resource identifier of a gatekeeper resource which OSS can use to permission additional metadata about
 * the execution of requests.
 * For requests that run with Backend.HIGHBURY, this owning rid will be used as Spark Reporter's
 * "owning rid" and therefore anyone who has the "foundry:read-data" operation on this rid as well as the
 * data involved in the queried object set will be able to see associated metadata, for example spark query
 * plans and rdd graphs.
 * For requests which require embeddings generation through LMS, this owning rid will be used as the attribution
 * rid for the request to LMS. If no owning rid is provided, user attribution is used instead for the LMS request.
 */
export type OwningRid = string;

/**
 * A reference to the next page of results.
 */
export type PageToken = string;

/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface ParameterizedExactMatchFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  terms: Array<FilterParameter>;
}
/**
 * Behaves the same as PrefixOnLastTokenFilter, except the query is parameterized.
 *
 * Consult PrefixOnLastTokenFilter docs for more details.
 */
export interface ParameterizedPrefixOnLastTokenFilter {
  propertyIdentifier: PropertyIdentifier;
  query: FilterParameter;
}
/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
export interface ParameterizedRangeFilter {
  gt?: FilterParameter | null | undefined;
  gte?: FilterParameter | null | undefined;
  lt?: FilterParameter | null | undefined;
  lte?: FilterParameter | null | undefined;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided
 * terms, or in case when no property is provided - iff analyzed value of any of the native properties matches
 * any of the provided terms; runtime derived properties will be ignored.
 *
 * If no terms are provided, this filter will match ALL objects.
 */
export interface ParameterizedTermsFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  terms: Array<FilterParameter>;
}
/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in
 * case when no property is provided - iff any of the native properties match the provided term; runtime derived
 * properties will be ignored.
 */
export interface ParameterizedWildcardFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  term: FilterParameter;
}
/**
 * A property to compute a percentile metric for.
 */
export interface PercentileMetric {
  filter?: AggregationFilter | null | undefined;
  percentile: number | "NaN" | "Infinity" | "-Infinity";
  propertyId: PropertyId;
}
/**
 * This filter analyzes the query string if the underlying property is searchable. Otherwise, the filter is
 * effectively an ExactMatch filter in PhraseMatchMode.PHRASE mode and a WildcardFilter in
 * PhraseMatchMode.PHRASE_PREFIX mode.
 *
 * The output of the analysis of a string are called tokens, for example the string "The Quick Brown Fox"
 * produces the tokens "the", "quick", "brown", "fox" using the default analyzer.
 *
 * An object matches a PhraseFilter iff tokens from specified phrase match tokens for the specified property set
 * according to the PhraseMatchMode specified.
 *
 * For example, a query with phrase "The Quick Brown Fox" and PhraseMatchMode.PHRASE for a property with the
 * default analyzer will match `"the" followed by "quick" followed by "brown" followed by "fox"`.
 * So this would match "The quick brown fox is climbing the tree",
 * but not "The Quick brown foxy bear" (does not include term "fox"),
 * nor "the brown rabbit met the quick fox near the river" (not the expected order of tokens),
 * nor "the quick smart and fast brown fox" (more terms than expected in-between prior terms).
 *
 * With PhraseMatchMode.PHRASE_PREFIX and phrase "The Quick Brown F" for a property with the default analyzer,
 * the query would match `"the" followed by "quick" followed by "brown" followed by "f*"`.
 * However, note that "f*" has a behavior different than the wildcard filter:
 *
 * - Against Phonograph, this will result in a `match_phrase_prefix` Elasticsearch query, which means that
 * "f*" matches only the first 50 tokens, in alphabetical order, that begin with "f" amongst all tokens for
 * all values for the specified properties.
 * - Against Highbury, this will use a lucene `SpanNearQuery`, which has the same behavior.
 *
 * So this filter could not match an object with "I saw the quick brown fox climbing the tree" if there more
 * than 50 tokens that start with "f" before "fox", e.g. "face", "fail", "fair".
 * We recommend using the `PrefixOnLastTokenFilter` instead, which does not have the same token order guarantees
 * as the phrase filter, but does allow for a wildcard matches on the last term.
 *
 * Unless MultiMatchFilter and PrefixOnLastTokenFilter, PhraseFilter has no special behavior for Japanese
 * text queries, because results match user expectations without the need for extra logic.
 */
export interface PhraseFilter {
  matchMode?: PhraseMatchMode | null | undefined;
  phrase: string;
  propertySet?: PropertySet | null | undefined;
}
/**
 * Defines how phrase search matches results.
 */
export type PhraseMatchMode = "PHRASE" | "PHRASE_PREFIX";

/**
 * This filter analyzes the query string if the underlying property is searchable. Otherwise, the filter
 * effectively works like a simple prefix query and the query string isn't tokenized.
 *
 * The output of the analysis of a string are called tokens, for example the string "The Quick Brown Fox"
 * produces the tokens "the", "quick", "brown", "fox" using the default analyzer.
 *
 * An object matches a PrefixOnLastTokenFilter iff the tokens for the specified query match all tokens from
 * the specified property, using exact match for every token except for the last, and prefix match for the last
 * token.
 * Ordering of tokens in the query string is not checked when performing the matches.
 * If the field is not analyzed, the filter will be equivalent to a Wildcard filter, as we analyze the query
 * string with the property analyzer (which is identity for a non-analyzed property).
 *
 * For example, a query with "The Quick Brown F" for a property with the default analyzer queries for
 * `"the" AND "quick" AND "brown" AND "f*"`, so would match "the brown fox reached the quick rabbit" but not
 * "the fox quickly jumped over the brown fence".
 *
 * Only works on string properties. OSS will throw an exception if the property type is not string.
 *
 * Additional Japanese query behavior:
 *
 * Custom tokenization gets applied iff a filter has Japanese query string and uses standard analyzer. If it uses
 * non-standard analyzer, it does not tokenize the string, assuming the given analyzer can handle Japanese query.
 *
 * In the custom tokenization, a sequence of the following characters is considered as one token: Han and
 * Hiragana, Katakana, Alphabets, or numbers. For example, the string "はねだ空港ターミナルA発バス231" produces the
 * tokens "はねだ空港", "ターミナル", "A", "発", "バス", "231" using JapaneseTokenization.
 *
 * Each tokenized string are treated as PhraseFilter, so any multi-token Japanese query string results in
 * AndFilter of PhraseFilters of each token. Also, in tokenized AndFilter, phrase mode for each token
 * PhraseFilter depends on its character type it sets the phrase mode is set following the rules below:
 *
 * - Any token except for the last token is treated with PhraseMatchMode.PHRASE.
 * - If the last token is Han and Hiragana, PhraseMatchMode.PHRASE gets applied to the token.
 * - If the last token is Katakana or Alphanumerics, PhraseMatchMode.PHRASE_PREFIX get applied to the token.
 */
export interface PrefixOnLastTokenFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  query: string;
}
/**
 * Indicates that all suggested values should match a PrefixOnLastTokenFilter on the suggest property with the
 * given query.
 */
export interface PrefixOnLastTokenSuggestInput {
  query: string;
}
/**
 * Specifies the primary key property of an object type which is present on all object types.
 */
export interface PrimaryKeyProperty {
}
/**
 * API name of a property type or shared property type.
 */
export type PropertyApiName = string;

/**
 * Id of a property.
 */
export type PropertyId = string;
export interface PropertyIdentifier_propertyId {
  type: "propertyId";
  propertyId: PropertyId;
}

export interface PropertyIdentifier_propertyApiName {
  type: "propertyApiName";
  propertyApiName: PropertyApiName;
}

export interface PropertyIdentifier_structFieldSelector {
  type: "structFieldSelector";
  structFieldSelector: StructFieldSelector;
}

export interface PropertyIdentifier_titleProperty {
  type: "titleProperty";
  titleProperty: TitleProperty;
}

export interface PropertyIdentifier_primaryKeyProperty {
  type: "primaryKeyProperty";
  primaryKeyProperty: PrimaryKeyProperty;
}
/**
 * Identifier of a property.
 */
export type PropertyIdentifier =
  | PropertyIdentifier_propertyId
  | PropertyIdentifier_propertyApiName
  | PropertyIdentifier_structFieldSelector
  | PropertyIdentifier_titleProperty
  | PropertyIdentifier_primaryKeyProperty;

/**
 * A set of PropertyIdentifiers. May also reference runtime derived properties.
 */
export interface PropertyIdentifiersPropertySelection {
  propertyIdentifiers: Array<PropertyIdentifier>;
}
/**
 * A set of PropertyIds referencing Ontology properties and / or runtime derived properties.
 */
export interface PropertyIdPropertySelection {
  propertyIds: Array<PropertyId>;
}
/**
 * A mapping from the property of one ObjectType to the property of another. The two properties must share
 * the same Shared Property Type. One of the properties must be a primary key.
 */
export interface PropertyMapping {
  fromProperty: PropertyTypeIdentifier;
  toProperty: PropertyTypeIdentifier;
}
/**
 * A property to compute a metric for.
 */
export interface PropertyMetric {
  filter?: AggregationFilter | null | undefined;
  propertyId: PropertyId;
}
export interface PropertyOrdering_multiObjectTypeProperty {
  type: "multiObjectTypeProperty";
  multiObjectTypeProperty: MultiObjectTypePropertyOrdering;
}

export interface PropertyOrdering_singleObjectTypeProperty {
  type: "singleObjectTypeProperty";
  singleObjectTypeProperty: SingleObjectTypePropertyOrdering;
}
/**
 * Ordering which causes objects to be returned in a specific order on the basis of the values of a property.
 */
export type PropertyOrdering =
  | PropertyOrdering_multiObjectTypeProperty
  | PropertyOrdering_singleObjectTypeProperty;

export interface PropertySelection_propertyId {
  type: "propertyId";
  propertyId: PropertyIdPropertySelection;
}

export interface PropertySelection_propertyIdentifier {
  type: "propertyIdentifier";
  propertyIdentifier: PropertyIdentifiersPropertySelection;
}

export interface PropertySelection_propertyTypeRid {
  type: "propertyTypeRid";
  propertyTypeRid: PropertyTypeRidPropertySelection;
}
/**
 * Specify a subset of properties by PropertyId.
 */
export type PropertySelection =
  | PropertySelection_propertyId
  | PropertySelection_propertyIdentifier
  | PropertySelection_propertyTypeRid;

export interface PropertySet_propertyWhitelist {
  type: "propertyWhitelist";
  propertyWhitelist: PropertyWhitelistPropertySet;
}

export interface PropertySet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}
/**
 * Specification of a subset of properties to use.
 */
export type PropertySet =
  | PropertySet_propertyWhitelist
  | PropertySet_allProperties;

export interface PropertySetV2_selected {
  type: "selected";
  selected: SelectedPropertiesPropertySetV2;
}

export interface PropertySetV2_selectedTypes {
  type: "selectedTypes";
  selectedTypes: SelectedTypesOrPropertiesPropertySetV2;
}

export interface PropertySetV2_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySetV2;
}
/**
 * Specification of a subset of properties to load.
 */
export type PropertySetV2 =
  | PropertySetV2_selected
  | PropertySetV2_selectedTypes
  | PropertySetV2_allProperties;

/**
 * Describes how an object set should be sorted by a property.
 *
 * For array properties, ASCENDING order compares the min element of the arrays, DESCENDING the max.
 */
export interface PropertySort {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  sortOrder: SortOrder;
}
export type PropertyTemplateId = TemplateId;

/**
 * An identifier of a PropertyType including the ObjectTypeRid it belongs to.
 */
export interface PropertyTypeIdentifier {
  objectTypeRid: ObjectTypeRid;
  propertyTypeRid: PropertyTypeRid;
}
/**
 * A unique identifier of a property type.
 */
export type PropertyTypeRid = string;

/**
 * A set of PropertyTypeRids.
 */
export interface PropertyTypeRidPropertySelection {
  propertyTypeRids: Array<PropertyTypeRid>;
}
export interface PropertyValue_array {
  type: "array";
  array: ArrayPropertyValue;
}

export interface PropertyValue_attachment {
  type: "attachment";
  attachment: AttachmentPropertyValue;
}

export interface PropertyValue_boolean {
  type: "boolean";
  boolean: BooleanPropertyValue;
}

export interface PropertyValue_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyValue;
}

export interface PropertyValue_date {
  type: "date";
  date: DatePropertyValue;
}

export interface PropertyValue_decimal {
  type: "decimal";
  decimal: DecimalPropertyValue;
}

export interface PropertyValue_double {
  type: "double";
  double: DoublePropertyValue;
}

export interface PropertyValue_geoPoint {
  type: "geoPoint";
  geoPoint: GeoPointPropertyValue;
}

export interface PropertyValue_geoShape {
  type: "geoShape";
  geoShape: GeoShapePropertyValue;
}

export interface PropertyValue_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyValue;
}

export interface PropertyValue_integer {
  type: "integer";
  integer: IntegerPropertyValue;
}

export interface PropertyValue_long {
  type: "long";
  long: LongPropertyValue;
}

export interface PropertyValue_marking {
  type: "marking";
  marking: MarkingPropertyValue;
}

export interface PropertyValue_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyValue;
}

export interface PropertyValue_null {
  type: "null";
  null: NullPropertyValue;
}

export interface PropertyValue_string {
  type: "string";
  string: StringPropertyValue;
}

export interface PropertyValue_struct {
  type: "struct";
  struct: StructPropertyValue;
}

export interface PropertyValue_timeDependent {
  type: "timeDependent";
  timeDependent: TimeDependentPropertyValue;
}

export interface PropertyValue_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyValue;
}

export interface PropertyValue_vector {
  type: "vector";
  vector: VectorPropertyValue;
}
/**
 * The value of an object property.
 */
export type PropertyValue =
  | PropertyValue_array
  | PropertyValue_attachment
  | PropertyValue_boolean
  | PropertyValue_cipherText
  | PropertyValue_date
  | PropertyValue_decimal
  | PropertyValue_double
  | PropertyValue_geoPoint
  | PropertyValue_geoShape
  | PropertyValue_geotimeSeriesReference
  | PropertyValue_integer
  | PropertyValue_long
  | PropertyValue_marking
  | PropertyValue_mediaReference
  | PropertyValue_null
  | PropertyValue_string
  | PropertyValue_struct
  | PropertyValue_timeDependent
  | PropertyValue_timestamp
  | PropertyValue_vector;

/**
 * Dimension where objects get divided into buckets based on the value of a property.
 */
export interface PropertyValueDimension {
  bucketing: Bucketing;
  propertyId: PropertyId;
}
/**
 * Ordering which causes objects to be returned in an order determined by values of provided properties in set
 * order. If property ordering is empty, the results will be sorted in an unspecified but deterministic order
 */
export interface PropertyValueResultOrdering {
  propertyOrdering: Array<PropertyOrdering>;
}
/**
 * Use a specified subset of properties.
 */
export interface PropertyWhitelistPropertySet {
  properties: Array<PropertyId>;
  propertyIdentifiers?: Array<PropertyIdentifier> | null | undefined;
}
/**
 * Codex seriesId qualified with a time series syncRid
 */
export interface QualifiedSeriesIdPropertyValue {
  seriesId: SeriesIdPropertyValue;
  syncRid: TimeSeriesSyncRid;
}
/**
 * An object matches iff the value of the provided property is within the provided bounds.
 */
export interface RangeAggregationFilter {
  gt?: RangeAggregationFilterValue | null | undefined;
  gte?: RangeAggregationFilterValue | null | undefined;
  lt?: RangeAggregationFilterValue | null | undefined;
  lte?: RangeAggregationFilterValue | null | undefined;
  propertyId: PropertyId;
}
export interface RangeAggregationFilterValue_integer {
  type: "integer";
  integer: IntegerFilterValue;
}

export interface RangeAggregationFilterValue_long {
  type: "long";
  long: LongFilterValue;
}

export interface RangeAggregationFilterValue_double {
  type: "double";
  double: DoubleFilterValue;
}

export interface RangeAggregationFilterValue_decimal {
  type: "decimal";
  decimal: DecimalFilterValue;
}

export interface RangeAggregationFilterValue_date {
  type: "date";
  date: DateFilterValue;
}

export interface RangeAggregationFilterValue_timestamp {
  type: "timestamp";
  timestamp: TimestampFilterValue;
}
/**
 * A value used by a range aggregation filter to compare to object fields when filtering objects.
 */
export type RangeAggregationFilterValue =
  | RangeAggregationFilterValue_integer
  | RangeAggregationFilterValue_long
  | RangeAggregationFilterValue_double
  | RangeAggregationFilterValue_decimal
  | RangeAggregationFilterValue_date
  | RangeAggregationFilterValue_timestamp;

/**
 * Bucketing dividing objects into buckets according to specified ranges.
 */
export interface RangeBucketing {
  ranges: Array<BucketRange>;
  shouldCreateNullValueBucket?: boolean | null | undefined;
}
/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
export interface RangeFilter {
  gt?: any | null | undefined;
  gte?: any | null | undefined;
  lt?: any | null | undefined;
  lte?: any | null | undefined;
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
}
/**
 * Object Set referencing a saved Object Set with a given ObjectSetRid.
 */
export interface ReferencedObjectSet {
  objectSetRid: ObjectSetRid;
}
/**
 * Options for signing references.
 */
export interface ReferenceSigningOptions {
  signMediaReferences?: boolean | null | undefined;
}
/**
 * A regular expression is a way to match patterns in data using placeholder characters.
 */
export type RegexPattern = string;

/**
 * Id of a relation.
 */
export type RelationId = string;
export interface RelationIdentifier_relationId {
  type: "relationId";
  relationId: RelationId;
}

export interface RelationIdentifier_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: InterfaceLinkTypeRid;
}
/**
 * Identifier of a relation.
 *
 * Note: this is currently under development and is not supported!
 */
export type RelationIdentifier =
  | RelationIdentifier_relationId
  | RelationIdentifier_interfaceLinkType;

/**
 * Side of a relation.
 *
 * For many-to-many link types SOURCE corresponds to object type A in the OMS many to many link definition, and
 * TARGET corresponds to object type B.
 *
 * For one-to-many link types SOURCE generally corresponds to the ONE (or primary key) side in the OMS one to
 * many link definition, and TARGET corresponds to the MANY (or foreign key) side.
 * WARNING: In the self-referential one-to-many join case, this is inverted.
 */
export type RelationSide = "SOURCE" | "TARGET" | "EITHER";
export type RelationTemplateId = TemplateId;

/**
 * An object matches a RelativeDateRangeFilter iff the value of the provided date property is within the provided
 * time range.
 */
export interface RelativeDateRangeFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  sinceRelativePointInTime?: RelativePointInTime | null | undefined;
  timeZoneId: TimeZoneId;
  untilRelativePointInTime?: RelativePointInTime | null | undefined;
}
/**
 * A point in time specified in terms of distance from the time of query.
 */
export interface RelativePointInTime {
  timeUnit: RelativeTimeUnit;
  value: number;
}
/**
 * An object matches a RelativeTimeRangeFilter iff the value of the provided timestamp property is within the
 * provided time range.
 */
export interface RelativeTimeRangeFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  sinceRelativeMillis?: number | null | undefined;
  untilRelativeMillis?: number | null | undefined;
}
/**
 * A relative time unit
 */
export type RelativeTimeUnit = "DAY" | "WEEK" | "MONTH" | "YEAR";

/**
 * Ordering which causes objects to be returned in an order which represents how closely they matched filters
 * present in an object set.
 * Please note that no such guarantees are provided whenever an object set contains objects of multiple types.
 */
export interface RelevancyResultOrdering {
}
/**
 * A resolved filter parameter.
 */
export interface ResolvedFilterParameter {
  value: FilterValue;
}
/**
 * Optional features to enable when generating the response.
 */
export interface ResponseOptions {
  includeObjectSetEntities: boolean;
  includeUsageCost?: boolean | null | undefined;
}
export interface ResultOrdering_relevancy {
  type: "relevancy";
  relevancy: RelevancyResultOrdering;
}

export interface ResultOrdering_propertyValue {
  type: "propertyValue";
  propertyValue: PropertyValueResultOrdering;
}

export interface ResultOrdering_unspecified {
  type: "unspecified";
  unspecified: UnspecifiedResultOrdering;
}
/**
 * Describes how results should be ordered.
 */
export type ResultOrdering =
  | ResultOrdering_relevancy
  | ResultOrdering_propertyValue
  | ResultOrdering_unspecified;

/**
 * A container for all aggregations to compute in a batch.
 */
export interface RootAggregation {
  metrics: Record<MetricName, Metric>;
  subAggregations: Record<AggregationName, Aggregation>;
}
/**
 * Object Set along with a resource identifier used to permission it.
 */
export interface SavedObjectSet {
  objectSet: ObjectSet;
  securityRid: string;
}
/**
 * A scroll id that should be used to retrieve further pages of objects.
 */
export type ScrollId = string;

/**
 * ObjectSet containing all objects that are linked to objects in provided object set, and are
 * on the opposite side of the provided relation side (or in case of either, any of the sides).
 */
export interface SearchAroundObjectSet {
  objectSet: ObjectSet;
  relationId: RelationId;
  relationSide: RelationSide;
}
export type SecurityRidTemplateId = TemplateId;

/**
 * Use a specified subset of properties.
 */
export interface SelectedPropertiesPropertySetV2 {
  propertySelection: PropertySelection;
}
/**
 * Specify a subset of properties by their types.
 *
 * Specific propertyId and propertyRids can be optionally specified to be included regardless of the selected
 * ontology types.
 *
 * Runtime derived properties must be explicitly selected, regardless of their property type.
 */
export interface SelectedTypesOrPropertiesPropertySetV2 {
  propertyOntologyTypes: Array<OntologyTypeSelection>;
  propertySelection?: PropertySelection | null | undefined;
}
/**
 * Codex seriesId.
 */
export type SeriesIdPropertyValue = string;

/**
 * A unique identifier of a shared property type.
 */
export type SharedPropertyTypeRid = string;

/**
 * The data generated by packaging a single object set for market place.
 */
export interface SingleObjectSetBlockData {
  objectSetTemplateId: ObjectSetTemplateId;
  securityRidTemplateId: SecurityRidTemplateId;
  templatedObjectSet: any;
}
/**
 * Ordering based on values of a property with a specified property rid.
 * Sorting is not allowed on any ARRAY or GEOHASH properties as defined in the Ontology.
 * Sorting on string properties is only allowed as long as the property is marked as supporting exact matching
 * in the Ontology.
 * Do note that this ordering is not supported for multi-object-type object sets - an exception will be thrown
 * when this ordering is used together with a multi-object-type object set.
 */
export interface SingleObjectTypePropertyOrdering {
  order: SortOrder;
  propertyTypeRid: PropertyTypeRid;
}
/**
 * A snapshot id uniquely identifies a Funnel snapshot, which represents object types versions at a specific
 * point in time. Snapshot ids should be used for scrolls, or point-in-time searches in order to guarantee
 * consistent results across view requests.
 */
export type SnapshotId = string;

/**
 * ObjectSet containing all objects that are linked to objects in the provided object set, using property
 * mappings provided at runtime as opposed to providing a predefined relation.
 */
export interface SoftLinkSearchAroundObjectSet {
  objectSet: ObjectSet;
  propertyMapping: PropertyMapping;
}
/**
 * ASCENDING or DESCENDING
 */
export type SortOrder = "ASCENDING" | "DESCENDING";

/**
 * Object Set containing objects with given ObjectRids.
 *
 * Note: It's more performant to use FilteredObjectSet with ExactMatchFilter on primary keys, as it saves on
 * resolving the ObjectRids to ObjectLocators which can add 100s of milliseconds to the request runtime.
 */
export interface StaticObjectSet {
  objectRids: Array<ObjectRid>;
  provenance?: StaticObjectSetProvenance | null | undefined;
}
export interface StaticObjectSetProvenance_materialization {
  type: "materialization";
  materialization: MaterializationProvenance;
}

export interface StaticObjectSetProvenance_custom {
  type: "custom";
  custom: CustomProvenance;
}
/**
 * Describes the origin of the particular set of objects in a static object set.
 */
export type StaticObjectSetProvenance =
  | StaticObjectSetProvenance_materialization
  | StaticObjectSetProvenance_custom;

/**
 * Bucketing based upon a string property.
 */
export interface StringBucketing {
  defaultValue?: string | null | undefined;
  maxBuckets: BucketCountLimit;
  shouldCreateNullValueBucket?: boolean | null | undefined;
  valueFilter?: StringBucketingValueFilter | null | undefined;
}
export interface StringBucketingValueFilter_includeValues {
  type: "includeValues";
  includeValues: IncludeValuesStringBucketingValueFilter;
}

export interface StringBucketingValueFilter_excludeValues {
  type: "excludeValues";
  excludeValues: ExcludeValuesStringBucketingValueFilter;
}

export interface StringBucketingValueFilter_includeByRegex {
  type: "includeByRegex";
  includeByRegex: IncludeByRegexStringBucketingValueFilter;
}

export interface StringBucketingValueFilter_excludeByRegex {
  type: "excludeByRegex";
  excludeByRegex: ExcludeByRegexStringBucketingValueFilter;
}
/**
 * Available value filters to use when doing aggregations with string bucketing.
 * Please refer to documentation of particular filters for more details.
 */
export type StringBucketingValueFilter =
  | StringBucketingValueFilter_includeValues
  | StringBucketingValueFilter_excludeValues
  | StringBucketingValueFilter_includeByRegex
  | StringBucketingValueFilter_excludeByRegex;

/**
 * A filter value whose type is string.
 */
export type StringFilterValue = string;

/**
 * An object property value whose type is string.
 */
export type StringPropertyValue = string;

/**
 * A list of StructElements
 */
export interface Struct {
  structElements: Array<StructElement>;
}
/**
 * Represents an entry in a struct.
 */
export interface StructElement {
  structElementRid: StructFieldRid;
  structElementValue: PropertyValue;
}
/**
 * API name of a struct field.
 */
export type StructFieldApiName = string;

/**
 * A unique identifier for a field of a struct property type or struct shared property type
 */
export type StructFieldRid = string;

/**
 * Used to specify a specific struct field to submit a query against.
 * This feature is not supported in OSv1 (Phonograph) and will throw.
 */
export interface StructFieldSelector {
  structPropertyField: StructPropertyField;
  structPropertyIdentifier: StructPropertyIdentifier;
}
/**
 * Provides means of specifying a struct field.
 */
export interface StructPropertyField {
  structPropertyFieldIdentifier: StructPropertyFieldIdentifier;
}
export interface StructPropertyFieldIdentifier_apiName {
  type: "apiName";
  apiName: StructFieldApiName;
}
/**
 * Struct fields can be specified by the rid or API name.
 */
export type StructPropertyFieldIdentifier =
  StructPropertyFieldIdentifier_apiName;

export interface StructPropertyIdentifier_apiName {
  type: "apiName";
  apiName: PropertyApiName;
}
/**
 * Structs can only be specified by API name for now.
 */
export type StructPropertyIdentifier = StructPropertyIdentifier_apiName;

/**
 * An object property value whose type is struct.
 */
export type StructPropertyValue = Struct;

/**
 * Results of a sub-aggregation.
 */
export interface SubAggregateResult {
  buckets: Array<Bucket>;
  itemsInOtherBuckets: number;
  nullValueBucket?: NullValueBucket | null | undefined;
  resultAccuracy: AggregateResultAccuracy;
}
/**
 * Object Set containing objects present in first provided Object Set and no other Object Sets. The return type
 * is the same as the type of the first provided Object Set.
 */
export interface SubtractedObjectSet {
  objectSets: Array<ObjectSet>;
}
export interface SuggestInput_prefixOnLastToken {
  type: "prefixOnLastToken";
  prefixOnLastToken: PrefixOnLastTokenSuggestInput;
}
/**
 * The input that will be used to match suggested values.
 */
export type SuggestInput = SuggestInput_prefixOnLastToken;

export interface SuggestRequest {
  numRequestedValues: number;
  objectSet: ObjectSet;
  objectSetContext: ObjectSetContext;
  propertyId: PropertyId;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  responseOptions?: ResponseOptions | null | undefined;
  suggestInput: SuggestInput;
}
export interface SuggestResponse {
  suggestedValues: Array<string>;
  usageCost?: UsageCost | null | undefined;
}
export type TemplateId = string;

/**
 * A unique identifier of a codex template and optionally a codex template version which resolves to a derived
 * series. If no version is provided, the latest version is used.
 */
export interface TemplateRidPropertyValue {
  templateRid: string;
  templateVersion?: string | null | undefined;
}
/**
 * This filter does not analyze the query string.
 *
 * An object matches a TermsFilter iff the tokens of the provided property match any of the provided terms.
 *
 * For example, a property with value "The Quick Brown Fox", using the default analyzer, would produce the tokens
 * ["the", "quick", "brown", "fox"], and would therefore match a terms filter with "brown" as a term,
 * but not one with "Brown" or "Brown Fox" as a term.
 * It is recommended to use filter only against properties which support exact matches.
 *
 * If no property is provided, this filter will consider the tokens for all native properties; runtime derived
 * properties will be ignored.
 * If no terms are provided, this filter will match all objects.
 */
export interface TermsFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  terms: Array<any>;
}
export interface TimeDependentPropertyValue_seriesId {
  type: "seriesId";
  seriesId: SeriesIdPropertyValue;
}

export interface TimeDependentPropertyValue_templateRid {
  type: "templateRid";
  templateRid: TemplateRidPropertyValue;
}

export interface TimeDependentPropertyValue_qualifiedSeriesId {
  type: "qualifiedSeriesId";
  qualifiedSeriesId: QualifiedSeriesIdPropertyValue;
}
/**
 * Identifies a time series in codex.
 * The qualifiedSeriesId variant should be used when there are multiple time series datasources backing this
 * property value (and therefore we need to specify which one to qualify with).
 */
export type TimeDependentPropertyValue =
  | TimeDependentPropertyValue_seriesId
  | TimeDependentPropertyValue_templateRid
  | TimeDependentPropertyValue_qualifiedSeriesId;

/**
 * A rid identifying a time series sync.
 */
export type TimeSeriesSyncRid = string;

/**
 * Number of milliseconds since Unix epoch.
 */
export type TimestampFilterValue = number;

/**
 * Number of milliseconds since Unix epoch.
 */
export interface TimestampLiteral {
  timestamp: number;
}
/**
 * Number of milliseconds since Unix epoch.
 */
export type TimestampPropertyValue = number;

/**
 * Time to live for a temporary object set.
 */
export type TimeToLive = "ONE_HOUR" | "ONE_DAY";

/**
 * A unit of time.
 */
export type TimeUnit =
  | "SECOND"
  | "MINUTE"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "QUARTER"
  | "YEAR";

/**
 * An identifier of a time zone, e.g. "Europe/London" as defined by the Time Zone Database.
 */
export type TimeZoneId = string;

/**
 * Specifies the title property of an object type which is present on all object types.
 */
export interface TitleProperty {
}
/**
 * The identifier of a transaction in a foundry dataset
 */
export type TransactionRid = string;

/**
 * A collection of derived properties that can be referenced in an object set or aggregation.
 * They are ephemeral and only exist for the lifetime of a request.
 *
 * Note: There may only be a single entry for a given object type or interface type. An exception will be thrown
 * otherwise
 *
 * However, just as with properties defined in the Ontology, it is valid to add derived properties that share
 * the same PropertyIdentifier to multiple object types. We do not enforce that these derived properties should
 * share the same definition or indeed the same data type.
 */
export type TypedDerivedProperties = Array<TypedDerivedPropertiesEntry>;

/**
 * A collection of derived properties acting on a single interface or object type.
 * They are ephemeral and only exist for the lifetime of a request.
 */
export interface TypedDerivedPropertiesEntry {
  derivedProperties: DerivedProperties;
  objectTypeOrInterfaceIdentifier: ObjectTypeOrInterfaceTypeIdentifier;
}
/**
 * Object Set containing objects present in at least one of the provided Object Sets. When the provided Object
 * Sets have different types, the objects along with the interface views of all interfaces involved in the
 * intersection are returned.
 *
 * For example, in "Intersected(InterfaceBase(Drivable), InterfaceBase(Flyable))", the interface views
 * provided in the response will contain the views for each object type that implements at least one of the
 * Drivable and Flyable interfaces. The views for an object type will contain both the Driable view and the
 * Flyable view if the object type implements both.
 */
export interface UnionedObjectSet {
  objectSets: Array<ObjectSet>;
}
/**
 * An unresolved filter parameter.
 */
export interface UnresolvedFilterParameter {
  defaultValue?: FilterValue | null | undefined;
  description?: string | null | undefined;
  name: string;
  parameterId: UnresolvedFilterParameterId;
}
/**
 * Id of an unresolved filter parameter.
 */
export type UnresolvedFilterParameterId = string;

/**
 * Ordering which causes objects to be returned in an arbitrary order - no assumptions should be made about
 * the ordering of returned objects.
 * Consider using this whenever there's no need to have the results be returned in any specific ordering as it
 * can cause the request to complete faster.
 */
export interface UnspecifiedResultOrdering {
}
export interface UpdateLatestVersionRequest {
  currentLatestVersion?: ObjectSetVersion | null | undefined;
  objectSet: ObjectSet;
}
/**
 * WARNING: this feature is not yet supported
 *
 * Estimate of the usage cost generated by this request.
 *
 * Recorded values are influenced by how much data and compute was required to carry out the request as well
 * as the owner of the resource determined by the provided `owningRid`.
 *
 * NOTE: The reported usage does not account for the Object Storage V1 cost.
 *
 * Please refer to resource management documentation for more details.
 */
export interface UsageCost {
  computeUsage?: number | "NaN" | "Infinity" | "-Infinity" | null | undefined;
}
/**
 * An object matches an UserContextFilter iff the value of the provided property is exactly equal to the provided user context.
 */
export interface UserContextFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  userContext: UserContextValue;
}
export interface UserContextValue_multipassUserId {
  type: "multipassUserId";
  multipassUserId: MultipassUserId;
}

export interface UserContextValue_multipassAttribute {
  type: "multipassAttribute";
  multipassAttribute: MultipassAttribute;
}
/**
 * Represents a value that is resolved at runtime via the context of who is querying the object set.
 */
export type UserContextValue =
  | UserContextValue_multipassUserId
  | UserContextValue_multipassAttribute;

/**
 * An ordering by aggregation results.
 */
export interface ValueOrdering {
  direction: OrderingDirection;
  metricName: MetricName;
}
export interface Vector_doubleVector {
  type: "doubleVector";
  doubleVector: Array<number | "NaN" | "Infinity" | "-Infinity">;
}
/**
 * A vector of values.
 */
export type Vector = Vector_doubleVector;

/**
 * An object property value whose type is vector.
 */
export type VectorPropertyValue = Vector;

/**
 * Actions on versioned object sets.
 */
export type VersionedObjectSetOperation = "READ" | "EDIT";

/**
 * Security schema wrapper for object set version parent RIDs
 */
export type VersionedObjectSetParentRid = string;

/**
 * Resource identifier for a versioned object set.
 */
export type VersionedObjectSetRid = string;

/**
 * This filter does not analyze the query string.
 *
 * An object matches a WildcardFilter iff the tokens of the provided property matches the term with a wildcard
 * suffix.
 *
 * For example, a query with value "The Quick Brown F" will search for tokens which match "The Quick Brown F*".
 * If searched on a property with the default analyzer with value "The Quick Brown Fox", it will not match
 * as the value tokens are ["the", "quick", "brown", "fox"].
 * It is recommended to use filter only against properties which support exact matches.
 *
 * If no property is provided, this filter will consider the tokens for all native properties; runtime derived
 * properties will be ignored.
 */
export interface WildcardFilter {
  propertyId?: PropertyId | null | undefined;
  propertyIdentifier?: PropertyIdentifier | null | undefined;
  term: string;
}
/**
 * Object set with extra derived properties defined in the query.
 */
export interface WithPropertiesObjectSet {
  derivedProperties: TypedDerivedProperties;
  objectSet: ObjectSet;
}
/**
 * Resource identifier of a Phonograph2 workstate.
 */
export type WorkstateRid = string;
