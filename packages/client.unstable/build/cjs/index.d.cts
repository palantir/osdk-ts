import { ConjureContext } from 'conjure-lite';

/**
 * Side of a link.
 */
type LinkSide = "SOURCE" | "TARGET";

/**
 * A unique identifier of a link type.
 */
type LinkTypeRid$1 = string;

/**
 * Information that specifies side of the given link type rid
 */
interface DirectedLinkTypeRid {
    linkTypeRid: LinkTypeRid$1;
    linkSide: LinkSide;
}

/**
 * A unique identifier of a property type.
 */
type PropertyTypeRid$1 = string;

/**
 * An object property value whose type is array.
 */
type ArrayPropertyValue = Array<PropertyValue>;

/**
 * The rid of an Attachment.
 */
type AttachmentPropertyValue = string;

/**
 * An object property value whose type is boolean (true-false).
 */
type BooleanPropertyValue = boolean;

/**
 * This property type represents an encrypted or plain text value used by the Cipher Service.
 */
type CipherTextPropertyValue = string;

/**
 * String representation of an ISO-8601 formatted date in a YYYY-MM-DD format.
 */
type DatePropertyValue = string;

/**
 * String representation of a decimal value. This value can be returned in a scientific notation with the exponent
 * proceeded by a letter 'E' followed by a '+'/'-' sign (for example 4.321E+8 or 0.332E-5).
 */
type DecimalPropertyValue = string;

/**
 * An object property value whose type is double-precision floating point.
 */
type DoublePropertyValue = number;

/**
 * An object property value that represents a latitude-longitude pair.
 */
interface GeoPointPropertyValue {
    latitude: number;
    longitude: number;
}

/**
 * An object property value that represents a geoshape. This value is guaranteed to be a valid GeoJSON.
 */
type GeoShapePropertyValue = any;

/**
 * The ID for a Geotime series within an integration; this can be written into Geotime by an end user
 * and is therefore unsafe.
 */
type GeotimeSeriesId = string;

/**
 * A reference to a Geotime integration; this is randomly generated and is therefore safe to log.
 */
type GeotimeSeriesIntegrationRid$1 = string;

/**
 * The property value for a Geotime series reference
 */
interface GeotimeSeriesReference {
    geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid$1;
    geotimeSeriesId: GeotimeSeriesId;
}

/**
 * An object property value that represents a GeotimeSeriesReference.
 */
type GeotimeSeriesReferencePropertyValue = GeotimeSeriesReference;

/**
 * An object property value whose type is integer.
 */
type IntegerPropertyValue = number;

/**
 * String representation of a 64-bit long value. This value has no formatting of any kind, and contains only
 * digits (with an optional leading '-' sign for negative numbers).
 */
type LongPropertyValue = string;

/**
 * An object property value representing a marking. This value cannot be used as a primary key.
 */
type MarkingPropertyValue = string;

/**
 * The identifier of a foundry dataset
 */
type DatasetRid$1 = string;

/**
 * The identifier of a transaction in a foundry dataset
 */
type TransactionRid = string;

/**
 * Reference to a specific catalog file
 */
interface CatalogFileReference {
    datasetRid: DatasetRid$1;
    endTransactionRid: TransactionRid;
    logicalFilePath: string;
}

/**
 * Reference to a dataset containing the media with an optional thumbnail reference.
 */
interface DatasetFileReference {
    fileReference: CatalogFileReference;
    thumbnailReference: CatalogFileReference | undefined;
}

/**
 * The identifier of the media item in the media set backing the media
 */
type MediaItemRid$1 = string;

/**
 * The identifier of the media set backing the media
 */
type MediaSetRid$1 = string;

/**
 * Reference to a media set item containing the media
 */
interface MediaItemReference {
    mediaSetRid: MediaSetRid$1;
    mediaItemRid: MediaItemRid$1;
}

/**
 * A token that can be used to access the media item. This token is only valid for a limited time and can be used to access the media item without authentication repeatedly during the lifetime of the token.
 * This token will only be present if explicitly requested by the client by setting  `referenceSigningOptions.signMediaReferences` to true in the endpoints that support it.
 * This token can only be generated for media items that are backed by a media set view datasource.
 * This token will not be generated for media items in arrays.
 * NOTE: This token is generated for the calling user and should not be shared.
 */
type MediaItemReadToken = string;

/**
 * The identifier of the media set view backing the media
 */
type MediaSetViewRid$1 = string;

/**
 * Reference to a media set view item containing the media
 */
interface MediaViewItemReference$1 {
    mediaSetRid: MediaSetRid$1;
    mediaSetViewRid: MediaSetViewRid$1;
    mediaItemRid: MediaItemRid$1;
    token: MediaItemReadToken | undefined;
}

interface MediaValueReference_mediaItem {
    type: "mediaItem";
    mediaItem: MediaItemReference;
}
interface MediaValueReference_mediaViewItem {
    type: "mediaViewItem";
    mediaViewItem: MediaViewItemReference$1;
}
interface MediaValueReference_datasetFile {
    type: "datasetFile";
    datasetFile: DatasetFileReference;
}
/**
 * A reference to media contained in either a media set or a dataset.
 */
type MediaValueReference = MediaValueReference_mediaItem | MediaValueReference_mediaViewItem | MediaValueReference_datasetFile;

/**
 * Expected to match mime format from  https://www.iana.org/assignments/media-types/media-types.xhtml
 */
type MimeType$1 = string;

/**
 * A reference to an immutable piece of media.
 */
interface MediaReference$1 {
    mimeType: MimeType$1;
    reference: MediaValueReference;
}

/**
 * An object property value that represents a MediaReference.
 */
type MediaReferencePropertyValue = MediaReference$1;

/**
 * Variant representing a null value. Null values are currently expected to only be returned inside array
 * property values - no property value will be otherwise returned for properties that do not have a value, or
 * where that value is null.
 */
interface NullPropertyValue {
}

/**
 * An object property value whose type is string.
 */
type StringPropertyValue = string;

/**
 * Represents an entry in a struct.
 */
interface StructElement$1 {
    structElementRid: PropertyTypeRid$1;
    structElementValue: PropertyValue;
}

/**
 * A list of StructElements
 */
interface Struct {
    structElements: Array<StructElement$1>;
}

/**
 * An object property value whose type is struct.
 */
type StructPropertyValue = Struct;

/**
 * Codex seriesId.
 */
type SeriesIdPropertyValue$1 = string;

/**
 * A rid identifying a time series sync.
 */
type TimeSeriesSyncRid$1 = string;

/**
 * Codex seriesId qualified with a time series syncRid
 */
interface QualifiedSeriesIdPropertyValue$1 {
    seriesId: SeriesIdPropertyValue$1;
    syncRid: TimeSeriesSyncRid$1;
}

/**
 * A unique identifier of a codex template which resolves to a derived series.
 */
interface TemplateRidPropertyValue$1 {
    templateRid: string;
}

interface TimeDependentPropertyValue_seriesId$1 {
    type: "seriesId";
    seriesId: SeriesIdPropertyValue$1;
}
interface TimeDependentPropertyValue_templateRid$1 {
    type: "templateRid";
    templateRid: TemplateRidPropertyValue$1;
}
interface TimeDependentPropertyValue_qualifiedSeriesId$1 {
    type: "qualifiedSeriesId";
    qualifiedSeriesId: QualifiedSeriesIdPropertyValue$1;
}
/**
 * Identifies a time series in codex.
 * The qualifiedSeriesId variant should be used when there are multiple time series datasources backing this
 * property value (and therefore we need to specify which one to qualify with).
 */
type TimeDependentPropertyValue$1 = TimeDependentPropertyValue_seriesId$1 | TimeDependentPropertyValue_templateRid$1 | TimeDependentPropertyValue_qualifiedSeriesId$1;

/**
 * Number of milliseconds since Unix epoch.
 */
type TimestampPropertyValue = number;

interface Vector_doubleVector {
    type: "doubleVector";
    doubleVector: Array<number>;
}
/**
 * A vector of values.
 */
type Vector = Vector_doubleVector;

/**
 * An object property value whose type is vector.
 */
type VectorPropertyValue = Vector;

interface PropertyValue_array {
    type: "array";
    array: ArrayPropertyValue;
}
interface PropertyValue_attachment {
    type: "attachment";
    attachment: AttachmentPropertyValue;
}
interface PropertyValue_boolean {
    type: "boolean";
    boolean: BooleanPropertyValue;
}
interface PropertyValue_cipherText {
    type: "cipherText";
    cipherText: CipherTextPropertyValue;
}
interface PropertyValue_date {
    type: "date";
    date: DatePropertyValue;
}
interface PropertyValue_decimal {
    type: "decimal";
    decimal: DecimalPropertyValue;
}
interface PropertyValue_double {
    type: "double";
    double: DoublePropertyValue;
}
interface PropertyValue_geoPoint {
    type: "geoPoint";
    geoPoint: GeoPointPropertyValue;
}
interface PropertyValue_geoShape {
    type: "geoShape";
    geoShape: GeoShapePropertyValue;
}
interface PropertyValue_geotimeSeriesReference {
    type: "geotimeSeriesReference";
    geotimeSeriesReference: GeotimeSeriesReferencePropertyValue;
}
interface PropertyValue_integer {
    type: "integer";
    integer: IntegerPropertyValue;
}
interface PropertyValue_long {
    type: "long";
    long: LongPropertyValue;
}
interface PropertyValue_marking {
    type: "marking";
    marking: MarkingPropertyValue;
}
interface PropertyValue_mediaReference {
    type: "mediaReference";
    mediaReference: MediaReferencePropertyValue;
}
interface PropertyValue_null {
    type: "null";
    null: NullPropertyValue;
}
interface PropertyValue_string {
    type: "string";
    string: StringPropertyValue;
}
interface PropertyValue_struct {
    type: "struct";
    struct: StructPropertyValue;
}
interface PropertyValue_timeDependent {
    type: "timeDependent";
    timeDependent: TimeDependentPropertyValue$1;
}
interface PropertyValue_timestamp {
    type: "timestamp";
    timestamp: TimestampPropertyValue;
}
interface PropertyValue_vector {
    type: "vector";
    vector: VectorPropertyValue;
}
/**
 * The value of an object property.
 */
type PropertyValue = PropertyValue_array | PropertyValue_attachment | PropertyValue_boolean | PropertyValue_cipherText | PropertyValue_date | PropertyValue_decimal | PropertyValue_double | PropertyValue_geoPoint | PropertyValue_geoShape | PropertyValue_geotimeSeriesReference | PropertyValue_integer | PropertyValue_long | PropertyValue_marking | PropertyValue_mediaReference | PropertyValue_null | PropertyValue_string | PropertyValue_struct | PropertyValue_timeDependent | PropertyValue_timestamp | PropertyValue_vector;

/**
 * The primary key of an object.
 */
type ObjectPrimaryKeyV2 = Record<PropertyTypeRid$1, PropertyValue>;

/**
 * A unique identifier of an object type.
 */
type ObjectTypeRid$1 = string;

/**
 * Information necessary to uniquely identify an object.
 */
interface ObjectLocatorV2 {
    objectTypeRid: ObjectTypeRid$1;
    objectPrimaryKey: ObjectPrimaryKeyV2;
}

/**
 * Resource identifier of an object.
 */
type ObjectRid$1 = string;

/**
 * Identifiers that reference single `FoundryObject`.
 */
interface FoundryObjectReference {
    objectRid: ObjectRid$1;
    objectLocatorV2: ObjectLocatorV2;
}

interface ObjectIdentifier_objectRid {
    type: "objectRid";
    objectRid: ObjectRid$1;
}
interface ObjectIdentifier_objectLocatorV2 {
    type: "objectLocatorV2";
    objectLocatorV2: ObjectLocatorV2;
}
/**
 * Information necessary to uniquely identify an object.
 */
type ObjectIdentifier = ObjectIdentifier_objectRid | ObjectIdentifier_objectLocatorV2;

interface ObjectsSelection_objects {
    type: "objects";
    objects: Array<ObjectIdentifier>;
}
/**
 * Union type for selecting objects to be queried along links.
 */
type ObjectsSelection = ObjectsSelection_objects;

/**
 * A single query entry for paging links. Query specifies the link types with link side and object selection.
 */
interface GetBulkLinksPageRequestEntry {
    directedLinkTypes: Array<DirectedLinkTypeRid>;
    objects: ObjectsSelection;
}

/**
 * A reference to the next page of results.
 */
type PageToken = string;

interface GetBulkLinksPageToken_pageToken {
    type: "pageToken";
    pageToken: PageToken;
}
/**
 * A token for paging links.
 */
type GetBulkLinksPageToken = GetBulkLinksPageToken_pageToken;

/**
 * A unique identifier for a Trident fork.
 */
type ForkRid = string;

/**
 * A value to match on in a filter.
 */
type FilterValue$1 = any;

/**
 * Id of an unresolved filter parameter.
 */
type UnresolvedFilterParameterId = string;

/**
 * Overrides for unresolved filter parameters in used parameterized object set filters.
 */
interface ObjectSetFilterContext {
    parameterOverrides: Record<UnresolvedFilterParameterId, FilterValue$1>;
}

/**
 * A unique identifier for an ontology branch.
 */
type OntologyBranchRid$1 = string;

/**
 * Resource identifier of a gatekeeper resource which OSS can use to permission additional metadata about
 * the execution of requests.
 * For requests that run with Backend.HIGHBURY, this owning rid will be used as Spark Reporter's
 * "owning rid" and therefore anyone who has the "foundry:read-data" operation on this rid as well as the
 * data involved in the queried object set will be able to see associated metadata, for example spark query
 * plans and rdd graphs.
 * NOTE: This rid has to be safe for logging purposes.
 */
type OwningRid = string;

/**
 * Resource identifier of a Phonograph2 workstate.
 */
type WorkstateRid = string;

/**
 * Additional context used to execute object set request queries.
 */
interface ObjectSetContext {
    objectSetFilterContext: ObjectSetFilterContext | undefined;
    workstateRid: WorkstateRid | undefined;
    owningRid: OwningRid | undefined;
    reportUsage: boolean | undefined;
    forkRid: ForkRid | undefined;
    ontologyBranchRid: OntologyBranchRid$1 | undefined;
}

/**
 * Optional features to enable when generating the response.
 */
interface ResponseOptions {
    includeObjectSetEntities: boolean;
    includeUsageCost: boolean | undefined;
}

interface GetBulkLinksPageRequest {
    linksRequests: Array<GetBulkLinksPageRequestEntry>;
    objectSetContext: ObjectSetContext;
    pageSize: number;
    pageToken: GetBulkLinksPageToken | undefined;
    responseOptions: ResponseOptions | undefined;
}

/**
 * Id of an object type.
 */
type ObjectTypeId$1 = string;

/**
 * Object Set containing all objects with a given ObjectTypeId.
 */
interface BaseObjectSet {
    objectTypeId: ObjectTypeId$1;
}

/**
 * A literal double value for the purposes of defining a derived property via a numeric operation.
 */
type DoubleLiteral = number;

interface NumericLiteral_double {
    type: "double";
    double: DoubleLiteral;
}
/**
 * A literal value for the purposes of defining a derived property via a numeric operation.
 */
type NumericLiteral = NumericLiteral_double;

/**
 * An operation on two property nodes for the purposes of defining a derived property.
 */
interface NumericBinaryOperation {
    leftOperand: NumericCalculation;
    rightOperand: NumericCalculation;
}

/**
 * An operation on one property node for the purposes of defining a derived property.
 */
interface NumericUnaryOperation {
    operand: NumericCalculation;
}

interface NumericOperation_add {
    type: "add";
    add: NumericBinaryOperation;
}
interface NumericOperation_subtract {
    type: "subtract";
    subtract: NumericBinaryOperation;
}
interface NumericOperation_divide {
    type: "divide";
    divide: NumericBinaryOperation;
}
interface NumericOperation_multiply {
    type: "multiply";
    multiply: NumericBinaryOperation;
}
interface NumericOperation_negate {
    type: "negate";
    negate: NumericUnaryOperation;
}
interface NumericOperation_absolute {
    type: "absolute";
    absolute: NumericUnaryOperation;
}
/**
 * An operation on one or two property nodes for the purposes of defining a derived property.
 */
type NumericOperation = NumericOperation_add | NumericOperation_subtract | NumericOperation_divide | NumericOperation_multiply | NumericOperation_negate | NumericOperation_absolute;

/**
 * Id of a property.
 */
type PropertyId$1 = string;

interface NumericCalculation_operation {
    type: "operation";
    operation: NumericOperation;
}
interface NumericCalculation_literal {
    type: "literal";
    literal: NumericLiteral;
}
interface NumericCalculation_propertyId {
    type: "propertyId";
    propertyId: PropertyId$1;
}
/**
 * A calculation node that is used to define a derived property via a numeric operation.
 */
type NumericCalculation = NumericCalculation_operation | NumericCalculation_literal | NumericCalculation_propertyId;

interface CalculatedPropertyDefinition_numeric {
    type: "numeric";
    numeric: NumericCalculation;
}
/**
 * A derived property that is calculated from other properties.
 * It can be a literal, a reference to another property or an operation.
 */
type CalculatedPropertyDefinition = CalculatedPropertyDefinition_numeric;

/**
 * Side of a relation linking to a linked derived property.
 */
type LinkedPropertyRelationSide = "SOURCE" | "TARGET";

/**
 * Id of a relation.
 */
type RelationId$1 = string;

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
interface LinkedObjectPropertyDefinition {
    relationId: RelationId$1;
    targetPropertyId: PropertyId$1;
    targetObjectSet: ObjectSet;
    relationSide: LinkedPropertyRelationSide | undefined;
}

/**
 * Total count of objects
 */
interface LinkedCountMetric$1 {
}

/**
 * Method to be used to provide final value for standard deviation or variance.
 * Use POPULATION when you have the entire set of data to work with OR
 * Use SAMPLE when you have an incomplete set of data (with at least 2 values) to work with.
 * An in depth explanation here: https://en.wikipedia.org/wiki/Bessel%27s_correction
 */
type LinkedDispersionMetricMethod = "POPULATION" | "SAMPLE";

/**
 * A property to compute a dispersion metric for.
 */
interface LinkedDispersionMetric {
    propertyId: PropertyId$1;
    method: LinkedDispersionMetricMethod;
}

/**
 * A property to compute a percentile metric for.
 */
interface LinkedPercentileMetric {
    propertyId: PropertyId$1;
    percentile: number;
}

/**
 * A property to compute a metric for.
 */
interface LinkedPropertyMetric {
    propertyId: PropertyId$1;
}

interface LinkedMetric_count {
    type: "count";
    count: LinkedCountMetric$1;
}
interface LinkedMetric_avg {
    type: "avg";
    avg: LinkedPropertyMetric;
}
interface LinkedMetric_max {
    type: "max";
    max: LinkedPropertyMetric;
}
interface LinkedMetric_min {
    type: "min";
    min: LinkedPropertyMetric;
}
interface LinkedMetric_sum {
    type: "sum";
    sum: LinkedPropertyMetric;
}
interface LinkedMetric_percentile {
    type: "percentile";
    percentile: LinkedPercentileMetric;
}
interface LinkedMetric_cardinality {
    type: "cardinality";
    cardinality: LinkedPropertyMetric;
}
interface LinkedMetric_exactCardinality {
    type: "exactCardinality";
    exactCardinality: LinkedPropertyMetric;
}
interface LinkedMetric_standardDeviation {
    type: "standardDeviation";
    standardDeviation: LinkedDispersionMetric;
}
interface LinkedMetric_variance {
    type: "variance";
    variance: LinkedDispersionMetric;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property).
 */
type LinkedMetric = LinkedMetric_count | LinkedMetric_avg | LinkedMetric_max | LinkedMetric_min | LinkedMetric_sum | LinkedMetric_percentile | LinkedMetric_cardinality | LinkedMetric_exactCardinality | LinkedMetric_standardDeviation | LinkedMetric_variance;

/**
 * A derived property that references an aggregation on a set of linked objects.
 * The linked objects are specified by a link type and direction.
 */
interface LinkedObjectsAggregationPropertyDefinition {
    relationId: RelationId$1;
    relationSide: LinkedPropertyRelationSide;
    metric: LinkedMetric;
    targetObjectSet: ObjectSet;
}

interface DerivedPropertyDefinition_linkedObjectProperty {
    type: "linkedObjectProperty";
    linkedObjectProperty: LinkedObjectPropertyDefinition;
}
interface DerivedPropertyDefinition_linkedObjectsAggregationProperty {
    type: "linkedObjectsAggregationProperty";
    linkedObjectsAggregationProperty: LinkedObjectsAggregationPropertyDefinition;
}
interface DerivedPropertyDefinition_calculatedProperty {
    type: "calculatedProperty";
    calculatedProperty: CalculatedPropertyDefinition;
}
/**
 * The definition of a derived property. It can be a linked object property,
 * linked objects aggregation property or a calculated property.
 */
type DerivedPropertyDefinition = DerivedPropertyDefinition_linkedObjectProperty | DerivedPropertyDefinition_linkedObjectsAggregationProperty | DerivedPropertyDefinition_calculatedProperty;

/**
 * A collection of derived properties that can be referenced in an object set or aggregation.
 * They are ephemeral and only exist for the lifetime of a request.
 */
type DerivedProperties = Record<PropertyId$1, DerivedPropertyDefinition>;

/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an AndFilter iff it matches all of the filters.
 */
interface AndFilter$1 {
    filters: Array<ObjectSetFilter$1>;
}

/**
 * Side of a relation.
 */
type RelationSide$1 = "SOURCE" | "TARGET" | "EITHER";

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
interface ApproximateLinkPresenceFilter {
    relationId: RelationId$1;
    relationSide: RelationSide$1;
}

/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, it should have `supportsExactMatching` set to true on the object type definition in OMS.
 * If no terms are provided, this filter will match ALL objects.
 */
interface ExactMatchFilter$1 {
    propertyId: PropertyId$1;
    terms: Array<any>;
}

/**
 * An object matches a GeoBoundingBoxFilter iff the value of the provided property is within the provided bounds.
 * This filter is only supported on geo_point property types.
 */
interface GeoBoundingBoxFilter$1 {
    propertyId: PropertyId$1;
    topLeft: string;
    bottomRight: string;
}

/**
 * A unit of geospatial distance.
 */
type DistanceUnit$1 = "MILLIMETER" | "CENTIMETER" | "METER" | "KILOMETER" | "INCH" | "FOOT" | "YARD" | "MILE" | "NAUTICAL_MILE";

/**
 * Geospatial distance.
 */
interface Distance$1 {
    value: number;
    unit: DistanceUnit$1;
}

/**
 * An object matches a GeoDistanceFilter iff the value of the provided property is within the provided distance
 * of the provided location i.e. sits within a circle centered at the provided location.
 */
interface GeoDistanceFilter$1 {
    propertyId: PropertyId$1;
    location: string;
    distance: Distance$1;
}

/**
 * An object matches a GeoPolygonFilter iff the value of the provided property is within bounds of the provided polygon.
 * This filter is only supported on geo_point property types.
 */
interface GeoPolygonFilter$1 {
    propertyId: PropertyId$1;
    polygon: Array<string>;
}

interface GeoShapeQuery_geoBoundingBoxFilter$1 {
    type: "geoBoundingBoxFilter";
    geoBoundingBoxFilter: GeoBoundingBoxFilter$1;
}
interface GeoShapeQuery_geoPolygonFilter$1 {
    type: "geoPolygonFilter";
    geoPolygonFilter: GeoPolygonFilter$1;
}
/**
 * Union type for valid queries over geo shape properties.
 */
type GeoShapeQuery$1 = GeoShapeQuery_geoBoundingBoxFilter$1 | GeoShapeQuery_geoPolygonFilter$1;

/**
 * Geometry operation under which to evaluate the geo shape query.
 */
type GeoShapeSpatialFilterMode$1 = "INTERSECTS" | "DISJOINT" | "WITHIN";

/**
 * Filter properties of type geo_shape or geo_point.
 */
interface GeoShapeFilter$1 {
    geoShapeQuery: GeoShapeQuery$1;
    spatialFilterMode: GeoShapeSpatialFilterMode$1;
}

/**
 * An object matches a HasPropertyFilter iff it has a non-null property with the provided PropertyId.
 */
interface HasPropertyFilter$1 {
    propertyId: PropertyId$1;
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
type MaxEditDistance = "AUTO" | "LEVENSHTEIN_ZERO" | "LEVENSHTEIN_ONE" | "LEVENSHTEIN_TWO";

/**
 * Parameters used to control fuzzy searching.
 */
interface Fuzziness {
    maxEditDistance: MaxEditDistance;
}

/**
 * AND or OR.
 */
type MultiMatchFilterOperator$1 = "AND" | "OR";

/**
 * Use all properties.
 */
interface AllPropertiesPropertySet$1 {
}

/**
 * Use a specified subset of properties.
 */
interface PropertyWhitelistPropertySet$1 {
    properties: Array<PropertyId$1>;
}

interface PropertySet_propertyWhitelist$1 {
    type: "propertyWhitelist";
    propertyWhitelist: PropertyWhitelistPropertySet$1;
}
interface PropertySet_allProperties$1 {
    type: "allProperties";
    allProperties: AllPropertiesPropertySet$1;
}
/**
 * Specification of a subset of properties to use.
 */
type PropertySet$1 = PropertySet_propertyWhitelist$1 | PropertySet_allProperties$1;

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
 *
 * If the original PhraseFilter uses both standard analyzer and non-standard analyzer for different properties,
 * it creates a mix of tokenized filters or MultiMatchFilters using provided analyzer for corresponding
 * properties, and it combines them into one filter in Or condition.
 */
interface MultiMatchFilter$1 {
    query: string;
    propertySet: PropertySet$1;
    fuzzy: boolean | undefined;
    fuzziness: Fuzziness | undefined;
    operator: MultiMatchFilterOperator$1 | undefined;
}

/**
 * An object matches a NotFilter iff it does not match the provided filter.
 */
interface NotFilter$1 {
    filter: ObjectSetFilter$1;
}

/**
 * Matches iff it contains a link to any object in the provided objectSet, along the provided RelationId, and if
 * the starting object is on the provided RelationSide of the relation.
 */
interface ObjectSetLinkFilter {
    objectSet: ObjectSet;
    relationId: RelationId$1;
    relationSide: RelationSide$1;
}

/**
 * An object matches an ObjectTypeFilter iff its ObjectTypeId matches the provided ObjectTypeId.
 */
interface ObjectTypeFilter$1 {
    objectTypeId: ObjectTypeId$1;
}

/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an OrFilter iff it matches at least one of the filters.
 */
interface OrFilter$1 {
    filters: Array<ObjectSetFilter$1>;
}

/**
 * A resolved filter parameter.
 */
interface ResolvedFilterParameter$1 {
    value: FilterValue$1;
}

/**
 * An unresolved filter parameter.
 */
interface UnresolvedFilterParameter$1 {
    parameterId: UnresolvedFilterParameterId;
    name: string;
    description: string | undefined;
    defaultValue: FilterValue$1 | undefined;
}

interface FilterParameter_unresolved$1 {
    type: "unresolved";
    unresolved: UnresolvedFilterParameter$1;
}
interface FilterParameter_resolved$1 {
    type: "resolved";
    resolved: ResolvedFilterParameter$1;
}
/**
 * A filter parameter.
 */
type FilterParameter$1 = FilterParameter_unresolved$1 | FilterParameter_resolved$1;

/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
interface ParameterizedExactMatchFilter$1 {
    propertyId: PropertyId$1;
    terms: Array<FilterParameter$1>;
}

/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
interface ParameterizedRangeFilter$1 {
    propertyId: PropertyId$1;
    lt: FilterParameter$1 | undefined;
    lte: FilterParameter$1 | undefined;
    gt: FilterParameter$1 | undefined;
    gte: FilterParameter$1 | undefined;
}

/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
interface ParameterizedTermsFilter$1 {
    propertyId: PropertyId$1 | undefined;
    terms: Array<FilterParameter$1>;
}

/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
interface ParameterizedWildcardFilter$1 {
    propertyId: PropertyId$1 | undefined;
    term: FilterParameter$1;
}

/**
 * Defines how phrase search matches results.
 */
type PhraseMatchMode$1 = "PHRASE" | "PHRASE_PREFIX";

/**
 * This filter analyzes the query string.
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
 *
 * If the original PhraseFilter uses both standard analyzer and non-standard analyzer for different properties,
 * it creates a mix of tokenized filters or PhraseFilters using provided analyzer for corresponding properties,
 * and it combines them into one filter in Or condition.
 */
interface PhraseFilter$1 {
    phrase: string;
    propertySet: PropertySet$1 | undefined;
    matchMode: PhraseMatchMode$1 | undefined;
}

/**
 * This filter analyzes the query string.
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
interface PrefixOnLastTokenFilter$1 {
    propertyId: PropertyId$1;
    query: string;
}

/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
interface RangeFilter$1 {
    propertyId: PropertyId$1;
    lt: any | undefined;
    lte: any | undefined;
    gt: any | undefined;
    gte: any | undefined;
}

/**
 * A relative time unit
 */
type RelativeTimeUnit$2 = "DAY" | "WEEK" | "MONTH" | "YEAR";

/**
 * A point in time specified in terms of distance from the time of query.
 */
interface RelativePointInTime$2 {
    value: number;
    timeUnit: RelativeTimeUnit$2;
}

/**
 * An identifier of a time zone, e.g. "Europe/London" as defined by the Time Zone Database.
 */
type TimeZoneId$2 = string;

/**
 * An object matches a RelativeDateRangeFilter iff the value of the provided date property is within the provided time range.
 */
interface RelativeDateRangeFilter$1 {
    propertyId: PropertyId$1;
    sinceRelativePointInTime: RelativePointInTime$2 | undefined;
    untilRelativePointInTime: RelativePointInTime$2 | undefined;
    timeZoneId: TimeZoneId$2;
}

/**
 * An object matches a RelativeTimeRangeFilter iff the value of the provided timestamp property is within the provided time range.
 */
interface RelativeTimeRangeFilter$1 {
    propertyId: PropertyId$1;
    sinceRelativeMillis: number | undefined;
    untilRelativeMillis: number | undefined;
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
 * If no property is provided, this filter will consider the tokens for all properties.
 * If no terms are provided, this filter will match all objects.
 */
interface TermsFilter$1 {
    propertyId: PropertyId$1 | undefined;
    terms: Array<any>;
}

/**
 * The key of the Multipass attribute.
 */
type MultipassAttributeKey = string;

/**
 * The current user's attributes under the given key. This resolves to a list of values.
 */
interface MultipassAttribute$1 {
    key: MultipassAttributeKey;
}

/**
 * The current user's Multipass user id.
 */
interface MultipassUserId$1 {
}

interface UserContextValue_multipassUserId$1 {
    type: "multipassUserId";
    multipassUserId: MultipassUserId$1;
}
interface UserContextValue_multipassAttribute$1 {
    type: "multipassAttribute";
    multipassAttribute: MultipassAttribute$1;
}
/**
 * Represents a value that is resolved at runtime via the context of who is querying the object set.
 */
type UserContextValue$1 = UserContextValue_multipassUserId$1 | UserContextValue_multipassAttribute$1;

/**
 * An object matches an UserContextFilter iff the value of the provided property is exactly equal to the provided user context.
 */
interface UserContextFilter$1 {
    propertyId: PropertyId$1;
    userContext: UserContextValue$1;
}

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
 * If no property is provided, this filter will consider the tokens for all properties.
 */
interface WildcardFilter$1 {
    propertyId: PropertyId$1 | undefined;
    term: string;
}

interface ObjectSetFilter_or$1 {
    type: "or";
    or: OrFilter$1;
}
interface ObjectSetFilter_and$1 {
    type: "and";
    and: AndFilter$1;
}
interface ObjectSetFilter_not$1 {
    type: "not";
    not: NotFilter$1;
}
interface ObjectSetFilter_range$1 {
    type: "range";
    range: RangeFilter$1;
}
interface ObjectSetFilter_wildcard$1 {
    type: "wildcard";
    wildcard: WildcardFilter$1;
}
interface ObjectSetFilter_terms$1 {
    type: "terms";
    terms: TermsFilter$1;
}
interface ObjectSetFilter_exactMatch$1 {
    type: "exactMatch";
    exactMatch: ExactMatchFilter$1;
}
interface ObjectSetFilter_phrase$1 {
    type: "phrase";
    phrase: PhraseFilter$1;
}
interface ObjectSetFilter_prefixOnLastToken$1 {
    type: "prefixOnLastToken";
    prefixOnLastToken: PrefixOnLastTokenFilter$1;
}
interface ObjectSetFilter_geoBoundingBox$1 {
    type: "geoBoundingBox";
    geoBoundingBox: GeoBoundingBoxFilter$1;
}
interface ObjectSetFilter_geoDistance$1 {
    type: "geoDistance";
    geoDistance: GeoDistanceFilter$1;
}
interface ObjectSetFilter_geoPolygon$1 {
    type: "geoPolygon";
    geoPolygon: GeoPolygonFilter$1;
}
interface ObjectSetFilter_geoShape$1 {
    type: "geoShape";
    geoShape: GeoShapeFilter$1;
}
interface ObjectSetFilter_objectType$1 {
    type: "objectType";
    objectType: ObjectTypeFilter$1;
}
interface ObjectSetFilter_hasProperty$1 {
    type: "hasProperty";
    hasProperty: HasPropertyFilter$1;
}
interface ObjectSetFilter_linkPresence$1 {
    type: "linkPresence";
    linkPresence: ApproximateLinkPresenceFilter;
}
interface ObjectSetFilter_objectSetLink {
    type: "objectSetLink";
    objectSetLink: ObjectSetLinkFilter;
}
interface ObjectSetFilter_multiMatch$1 {
    type: "multiMatch";
    multiMatch: MultiMatchFilter$1;
}
interface ObjectSetFilter_relativeDateRange$1 {
    type: "relativeDateRange";
    relativeDateRange: RelativeDateRangeFilter$1;
}
interface ObjectSetFilter_relativeTimeRange$1 {
    type: "relativeTimeRange";
    relativeTimeRange: RelativeTimeRangeFilter$1;
}
interface ObjectSetFilter_parameterizedRange$1 {
    type: "parameterizedRange";
    parameterizedRange: ParameterizedRangeFilter$1;
}
interface ObjectSetFilter_parameterizedWildcard$1 {
    type: "parameterizedWildcard";
    parameterizedWildcard: ParameterizedWildcardFilter$1;
}
interface ObjectSetFilter_parameterizedTerms$1 {
    type: "parameterizedTerms";
    parameterizedTerms: ParameterizedTermsFilter$1;
}
interface ObjectSetFilter_parameterizedExactMatch$1 {
    type: "parameterizedExactMatch";
    parameterizedExactMatch: ParameterizedExactMatchFilter$1;
}
interface ObjectSetFilter_userContext$1 {
    type: "userContext";
    userContext: UserContextFilter$1;
}
/**
 * Filter to be applied to an Object Set. Refer to documentation of a particular ObjectSetFilter for details.
 */
type ObjectSetFilter$1 = ObjectSetFilter_or$1 | ObjectSetFilter_and$1 | ObjectSetFilter_not$1 | ObjectSetFilter_range$1 | ObjectSetFilter_wildcard$1 | ObjectSetFilter_terms$1 | ObjectSetFilter_exactMatch$1 | ObjectSetFilter_phrase$1 | ObjectSetFilter_prefixOnLastToken$1 | ObjectSetFilter_geoBoundingBox$1 | ObjectSetFilter_geoDistance$1 | ObjectSetFilter_geoPolygon$1 | ObjectSetFilter_geoShape$1 | ObjectSetFilter_objectType$1 | ObjectSetFilter_hasProperty$1 | ObjectSetFilter_linkPresence$1 | ObjectSetFilter_objectSetLink | ObjectSetFilter_multiMatch$1 | ObjectSetFilter_relativeDateRange$1 | ObjectSetFilter_relativeTimeRange$1 | ObjectSetFilter_parameterizedRange$1 | ObjectSetFilter_parameterizedWildcard$1 | ObjectSetFilter_parameterizedTerms$1 | ObjectSetFilter_parameterizedExactMatch$1 | ObjectSetFilter_userContext$1;

/**
 * Object Set containing objects in provided Object Set that match the provided filter.
 */
interface FilteredObjectSet {
    filter: ObjectSetFilter$1;
    objectSet: ObjectSet;
    runtimeDerivedProperties: DerivedProperties | undefined;
}

/**
 * Object Set containing objects present in all provided Object Sets.
 */
interface IntersectedObjectSet {
    objectSets: Array<ObjectSet>;
}

/**
 * WARNING: this feature is supported only for object types stored in Object Storage V2
 *
 * ObjectSet containing the top k objects with propertyId nearest to the given vector.
 */
interface KnnObjectSet {
    objectSet: ObjectSet;
    propertyId: PropertyId$1;
    kValue: number;
    vector: Vector;
}

interface KnnQuery_vector {
    type: "vector";
    vector: Vector;
}
interface KnnQuery_text {
    type: "text";
    text: string;
}
/**
 * Supported ways to query using knn. Can either use a vector directly, or use text which will get embedding using
 * the model specified in the Ontology.
 */
type KnnQuery = KnnQuery_vector | KnnQuery_text;

/**
 * ObjectSet containing the top k objects with propertyId nearest to the given vector.
 */
interface KnnObjectSetV2 {
    objectSet: ObjectSet;
    propertyId: PropertyId$1;
    kValue: number;
    query: KnnQuery;
}

/**
 * Resource identifier of an Object Set.
 */
type ObjectSetRid = string;

/**
 * Object Set referencing a saved Object Set with a given ObjectSetRid.
 */
interface ReferencedObjectSet {
    objectSetRid: ObjectSetRid;
}

/**
 * ObjectSet containing all objects that are linked to objects in provided object set, and are
 * on the opposite side of the provided relation side (or in case of either, any of the sides).
 */
interface SearchAroundObjectSet {
    objectSet: ObjectSet;
    relationId: RelationId$1;
    relationSide: RelationSide$1;
}

/**
 * An identifier of a PropertyType including the ObjectTypeRid it belongs to.
 */
interface PropertyTypeIdentifier$1 {
    objectTypeRid: ObjectTypeRid$1;
    propertyTypeRid: PropertyTypeRid$1;
}

/**
 * A mapping from the property of one ObjectType to the property of another. The two properties must share
 * the same Shared Property Type. One of the properties must be a primary key.
 */
interface PropertyMapping {
    fromProperty: PropertyTypeIdentifier$1;
    toProperty: PropertyTypeIdentifier$1;
}

/**
 * ObjectSet containing all objects that are linked to objects in the provided object set, using property
 * mappings provided at runtime as opposed to providing a predefined relation.
 */
interface SoftLinkSearchAroundObjectSet {
    objectSet: ObjectSet;
    propertyMapping: PropertyMapping;
}

/**
 * Identifies a custom provenance record.
 */
type CustomProvenanceIdentifier = string;

/**
 * Used to record custom provenance information.
 */
interface CustomProvenance {
    identifier: CustomProvenanceIdentifier;
    parameters: Record<string, any>;
}

/**
 * This static object set was created via materializing some other object set.
 */
interface MaterializationProvenance {
    objectSetRid: ObjectSetRid;
    materializationTime: string;
}

interface StaticObjectSetProvenance_materialization {
    type: "materialization";
    materialization: MaterializationProvenance;
}
interface StaticObjectSetProvenance_custom {
    type: "custom";
    custom: CustomProvenance;
}
/**
 * Describes the origin of the particular set of objects in a static object set.
 */
type StaticObjectSetProvenance = StaticObjectSetProvenance_materialization | StaticObjectSetProvenance_custom;

/**
 * Object Set containing objects with given ObjectRids.
 */
interface StaticObjectSet {
    objectRids: Array<ObjectRid$1>;
    provenance: StaticObjectSetProvenance | undefined;
}

/**
 * Object Set containing objects present in first provided Object Set and no other Object Sets.
 */
interface SubtractedObjectSet {
    objectSets: Array<ObjectSet>;
}

/**
 * Object Set containing objects present in at least one of the provided Object Sets.
 */
interface UnionedObjectSet {
    objectSets: Array<ObjectSet>;
}

interface ObjectSet_base {
    type: "base";
    base: BaseObjectSet;
}
interface ObjectSet_static {
    type: "static";
    static: StaticObjectSet;
}
interface ObjectSet_referenced {
    type: "referenced";
    referenced: ReferencedObjectSet;
}
interface ObjectSet_filtered {
    type: "filtered";
    filtered: FilteredObjectSet;
}
interface ObjectSet_intersected {
    type: "intersected";
    intersected: IntersectedObjectSet;
}
interface ObjectSet_subtracted {
    type: "subtracted";
    subtracted: SubtractedObjectSet;
}
interface ObjectSet_unioned {
    type: "unioned";
    unioned: UnionedObjectSet;
}
interface ObjectSet_searchAround {
    type: "searchAround";
    searchAround: SearchAroundObjectSet;
}
interface ObjectSet_softLinkSearchAround {
    type: "softLinkSearchAround";
    softLinkSearchAround: SoftLinkSearchAroundObjectSet;
}
interface ObjectSet_knn {
    type: "knn";
    knn: KnnObjectSet;
}
interface ObjectSet_knnV2 {
    type: "knnV2";
    knnV2: KnnObjectSetV2;
}
/**
 * Supported Object Sets and Object Set operations. Refer to documentation of a particular Object Set for details.
 */
type ObjectSet = ObjectSet_base | ObjectSet_static | ObjectSet_referenced | ObjectSet_filtered | ObjectSet_intersected | ObjectSet_subtracted | ObjectSet_unioned | ObjectSet_searchAround | ObjectSet_softLinkSearchAround | ObjectSet_knn | ObjectSet_knnV2;

/**
 * Indicates the level of visibility for ObjectType(s), LinkType(s) and PropertyType(s). This
 * may be used by Hubble and various plugins when rendering those Ontology entities in the front-end.
 */
type Visibility = "PROMINENT" | "NORMAL" | "HIDDEN";

interface LinkTypeDisplayMetadata {
    displayName: string;
    groupDisplayName: string | undefined;
    pluralDisplayName: string;
    visibility: Visibility;
}

/**
 * A string indicating the API Name to use for the given entity that will be a field of an ObjectType.
 * This API name will be used to access the entity in programming languages.
 * It must adhere to the following rules:
 * - Match the unicode identifier syntax: https://unicode.org/reports/tr31/
 * - Contain at most 100 characters.
 */
type ObjectTypeFieldApiName$1 = string;

/**
 * Type Classes comprise a kind and name field, where the kind field can provide a useful namespace for
 * the TypeClass. Type Classes are normally used to store additional metadata on the properties which
 * may be used by Hubble and various plugins when rendering the property in the front-end.
 */
interface TypeClass {
    kind: string;
    name: string;
}

interface LinkTypeMetadata {
    displayMetadata: LinkTypeDisplayMetadata;
    typeClasses: Array<TypeClass>;
    apiName: ObjectTypeFieldApiName$1 | undefined;
}

/**
 * A string indicating the API Name to use for the given Ontology. This API name will be used to access the
 * Ontology in programming languages. It is not guaranteed to be unique across Ontologies. It must adhere
 * to the following rules:
 * - Must only contain the following ASCII characters: a-z and 0-9.
 * - Must not start with a number.
 * - Must have a maximum length of 100.
 * - Must be kebab-case.
 * - Must not be one of the reserved keywords: "ontology", "object", "property", "link", "relation", "rid", "primarykey", "typeid", "ontologyobject".
 */
type OntologyApiName = string;

/**
 * An rid identifying a branch of a particular Ontology. This rid is a randomly generated identifier
 * and is safe to log. Access to the Ontology is also controlled by checking operations on this rid.
 */
type OntologyBranchRid = string;

/**
 * The version of an Ontology.
 */
type OntologyVersion = string;

/**
 * Information about an Ontology.
 */
interface OntologyInformation {
    apiName: OntologyApiName;
    displayName: string;
    description: string;
    currentOntologyVersion: OntologyVersion;
    defaultBranchRid: OntologyBranchRid;
}

/**
 * An rid identifying an Ontology. This rid is generated randomly and is safe for logging purposes. Access
 * to the Ontology is also controlled by checking operations on this rid. The OntologyRid for an
 * Ontology is immutable.
 */
type OntologyRid = string;

/**
 * Response to LoadAllOntologiesRequest. This includes information
 * about the Ontologies where the user has the "ontology:view-ontology"
 * permission on the OntologyRid.
 */
interface LoadAllOntologiesResponse {
    ontologies: Record<OntologyRid, OntologyInformation>;
}

/**
 * An immutable rid identifying the interface. This rid is generated randomly and is safe for logging purposes.
 */
type InterfaceTypeRid = string;

/**
 * A string indicating the API Name to use for the given ObjectType. This API name will be used to access the
 * ObjectType in programming languages.
 * It must adhere to the following rules:
 * - Match the unicode identifier syntax: https://unicode.org/reports/tr31/
 * - Contain at most 100 characters.
 */
type ObjectTypeApiName = string;

interface BlueprintIcon {
    color: string;
    locator: string;
}

interface Icon_blueprint {
    type: "blueprint";
    blueprint: BlueprintIcon;
}
type Icon = Icon_blueprint;

/**
 * This includes metadata which can be used by front-ends when displaying the ObjectType.
 */
interface ObjectTypeDisplayMetadata {
    description: string | undefined;
    displayName: string;
    groupDisplayName: string | undefined;
    icon: Icon;
    pluralDisplayName: string;
    visibility: Visibility;
}

/**
 * This is a human readable id for the ObjectType. ObjectTypeIds can be made up of lower case letters,
 * numbers and dashes, but they should start with an alphabet. Once you create an ObjectType, the
 * ObjectTypeId is immutable. To change the ObjectTypeId you need to delete the ObjectType and re-create
 * it. In future we plan to make it mutable, hence you should use the ObjectTypeRid for cases where
 * you need to rely on on an immutable identifier.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
type ObjectTypeId = string;

/**
 * ResourceIdentifier for an InterfaceLinkType.
 */
type InterfaceLinkTypeRid = string;

/**
 * An rid identifying the PropertyType. This rid is generated randomly and is safe for logging purposes.
 * The PropertyTypeRid for a PropertyType is immutable.
 */
type PropertyTypeRid = string;

interface InterfacePropertyImplementation {
    propertyTypeRid: PropertyTypeRid;
}

/**
 * A string indicating the API name to use for the interface. This API name will be used to reference the
 * interface in programming languages. Typically this is the name of the interface in pascal case. This must be
 * unique across all interfaces in an ontology.
 */
type InterfaceTypeApiName = string;

/**
 * This is a human readable id for the LinkType. LinkTypeIds can be made up of lower case letters,
 * numbers and dashes, but they should start with an alphabet. The LinkTypeId is immutable for now.
 * To change the LinkTypeId you need to delete the LinkType and re-create it. In future we plan to
 * make it mutable, hence you should use the LinkTypeRid for cases where you need to rely on an
 * immutable identifier.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
type LinkTypeId = string;

/**
 * An rid identifying the SharedPropertyType. This rid is generated randomly and is safe for logging purposes.
 * The SharedPropertyTypeRid for a SharedPropertyType is immutable.
 */
type SharedPropertyTypeRid = string;

/**
 * An interface that an object type implements and metadata on how it implements it.
 */
interface ObjectTypeInterfaceImplementation {
    interfaceTypeRid: InterfaceTypeRid;
    interfaceTypeApiName: InterfaceTypeApiName;
    properties: Record<SharedPropertyTypeRid, InterfacePropertyImplementation>;
    links: Record<InterfaceLinkTypeRid, Array<LinkTypeId>>;
}

/**
 * An rid identifying the ObjectType. This rid is generated randomly and is safe for logging purposes. Access
 * to the ObjectType is also controlled by checking operations on this rid. The ObjectTypeRid for an
 * ObjectType is immutable. If an ObjectType is deleted and recreated with the same ObjectTypeId, the
 * ObjectTypeRid will be different.
 */
type ObjectTypeRid = string;

/**
 * This status indicates that the ObjectType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
interface ActiveObjectTypeStatus {
}

/**
 * This status indicates that the ObjectType is reaching the end of its life and will be removed as per the deadline specified.
 */
interface DeprecatedObjectTypeStatus {
    message: string;
    deadline: string;
    replacedBy: ObjectTypeRid | undefined;
}

/**
 * This status indicates that the ObjectType is endorsed as a part of "core" ontology by ontology-level owners and provides even better guarantees than the Active status.
 */
interface EndorsedObjectTypeStatus {
}

/**
 * This status indicates that the ObjectType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
interface ExampleObjectTypeStatus {
}

/**
 * This status indicates that the ObjectType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
interface ExperimentalObjectTypeStatus {
}

interface ObjectTypeStatus_experimental {
    type: "experimental";
    experimental: ExperimentalObjectTypeStatus;
}
interface ObjectTypeStatus_active {
    type: "active";
    active: ActiveObjectTypeStatus;
}
interface ObjectTypeStatus_deprecated {
    type: "deprecated";
    deprecated: DeprecatedObjectTypeStatus;
}
interface ObjectTypeStatus_example {
    type: "example";
    example: ExampleObjectTypeStatus;
}
interface ObjectTypeStatus_endorsed {
    type: "endorsed";
    endorsed: EndorsedObjectTypeStatus;
}
/**
 * The status to indicate whether the ObjectType is either Experimental, Active, Deprecated, Example or Endorsed.
 */
type ObjectTypeStatus = ObjectTypeStatus_experimental | ObjectTypeStatus_active | ObjectTypeStatus_deprecated | ObjectTypeStatus_example | ObjectTypeStatus_endorsed;

/**
 * The rid for an ActionType, autogenerated by Ontology-Metadata-Service and used for permissioning and logging.
 */
type ActionTypeRid = string;

/**
 * This signals to OMA that the Object Type will be regenerated as the Action Type changes, rather than modified
 * directly by the user. Also, OMA should not validate that the backing dataset has the required columns, as
 * these will instead be generated on save.
 */
interface ActionLogMetadata {
    actionTypeRids: Array<ActionTypeRid>;
}

/**
 * Describes how to treat an object of this type as an event.
 */
interface EventMetadata {
    description: PropertyTypeRid | undefined;
    endTimePropertyTypeRid: PropertyTypeRid;
    eventIdPropertyTypeRid: PropertyTypeRid;
    startTimePropertyTypeRid: PropertyTypeRid;
}

/**
 * An identifier for a peered ObjectType used for establishing a mapping between local ObjectTypes and remote
 * ObjectTypes for Peering. Before a Object can be peered, a user must configure a mapping between the local and
 * remote ObjectType for that Object. If the local and remote ObjectType share the same ObjectTypePeeringRid,
 * Peering will suggest forming a mapping between those types.
 *
 * ObjectTypePeeringRids are preserved in Marketplace blocks, so ObjectTypes installed from the same Marketplace
 * definition on different stacks will share a ObjectTypePeeringRid if the original ObjectType packaged in
 * Marketplace has a ObjectTypePeeringRid.
 */
type ObjectTypePeeringRid = string;

interface ObjectTypePeeringMetadataV1 {
    enabled: boolean;
    peeringRid: ObjectTypePeeringRid;
}

interface ObjectTypePeeringMetadata_v1 {
    type: "v1";
    v1: ObjectTypePeeringMetadataV1;
}
type ObjectTypePeeringMetadata = ObjectTypePeeringMetadata_v1;

interface SensorTrait {
    readingPropertyTypeRid: PropertyTypeRid;
}

/**
 * Describes how to treat an object of this type as a time series.
 */
interface TimeSeriesMetadata {
    measurePropertyTypeRid: PropertyTypeRid | undefined;
    timeSeriesIdPropertyTypeRid: PropertyTypeRid;
    valueUnitsPropertyTypeRid: PropertyTypeRid | undefined;
}

/**
 * An human readable id uniquely identifying a `WorkflowObjectTypeTrait`. This is guaranteed to be unique and the maximum size
 * allowed is 100 characters. This is a human readable field and is safe to log.
 */
type WorkflowObjectTypeTraitId = string;

/**
 * An id uniquely identifying a `WorkflowObjectTypeTraitProperty`. This is a human readable field with a maximum allowed
 * size of 100 characters. This is safe to log.
 */
type WorkflowObjectTypeTraitPropertyId = string;

/**
 * This represents the version of the `WorkflowObjectTypeTrait`. This is a human readable field and is safe to log.
 */
type WorkflowObjectTypeTraitVersion = string;

/**
 * A type to uniquely identify a specific version of a `WorkflowObjectTypeTrait` in an `ObjectTypeArchetype` definition.
 */
interface WorkflowObjectTypeTraitReference {
    traitId: WorkflowObjectTypeTraitId;
    version: WorkflowObjectTypeTraitVersion;
}

/**
 * A mapping between the `WorkflowObjectTypeTraitPropertyId` of the `WorkflowObjectTypeTrait` to the `PropertyRid` of the `ObjectType` it is to be associated with.
 */
interface WorkflowObjectTypeTraitImpl {
    mapping: Record<WorkflowObjectTypeTraitPropertyId, PropertyTypeRid>;
    reference: WorkflowObjectTypeTraitReference;
}

interface ObjectTypeTraits {
    eventMetadata: EventMetadata | undefined;
    actionLogMetadata: ActionLogMetadata | undefined;
    timeSeriesMetadata: TimeSeriesMetadata | undefined;
    peeringMetadata: ObjectTypePeeringMetadata | undefined;
    sensorTrait: SensorTrait | undefined;
    workflowObjectTypeTraits: Record<WorkflowObjectTypeTraitId, Record<WorkflowObjectTypeTraitVersion, WorkflowObjectTypeTraitImpl>>;
}

interface BooleanFormatter {
    valueIfTrue: string;
    valueIfFalse: string;
}

type DatetimeLocalizedFormat = "DATE_FORMAT_RELATIVE_TO_NOW" | "DATE_FORMAT_DATE" | "DATE_FORMAT_YEAR_AND_MONTH" | "DATE_FORMAT_DATE_TIME" | "DATE_FORMAT_DATE_TIME_SHORT" | "DATE_FORMAT_TIME" | "DATE_FORMAT_ISO_INSTANT";

/**
 * A valid format string composed of the following subset of patterns, taken from the java DateTimeFormatter docs:
 *
 * ```
 * Symbol  Meaning                     Presentation      Examples
 * ------  -------                     ------------      -------
 * y       year-of-era                 year              2004; 04
 * M       month-of-year               number/text       7; 07; Jul; July; J
 * d       day-of-month                number            10
 * E       day-of-week                 text              Tue; Tuesday; T
 * e       localized day-of-week       number/text       2; 02; Tue; Tuesday;
 *
 * a       am-pm-of-day                text              PM
 * h       clock-hour-of-am-pm (1-12)  number            12
 * H       hour-of-day (0-23)          number            0
 * m       minute-of-hour              number            30
 * s       second-of-minute            number            55
 * S       fraction-of-second          fraction          97
 *
 * z       time-zone name              zone-name         Pacific Standard Time; PST
 * Z       zone-offset                 offset-Z          +0000; -0800; -08:00
 * ```
 *
 * And the following separators: "/", ":", "-", "." and " " (single space).
 */
type DatetimeStringFormat = string;

interface DatetimeFormat_stringFormat {
    type: "stringFormat";
    stringFormat: DatetimeStringFormat;
}
interface DatetimeFormat_localizedFormat {
    type: "localizedFormat";
    localizedFormat: DatetimeLocalizedFormat;
}
type DatetimeFormat = DatetimeFormat_stringFormat | DatetimeFormat_localizedFormat;

interface DateFormatter {
    format: DatetimeFormat;
}

/**
 * Convert Multipass Ids into usernames.
 */
interface FormatterUserId {
}

/**
 * Convert any Foundry supported Resource Identifiers to human-readable format (e.g dataset name).
 * Only to be used for users working in Workspace. E.g. an alert inbox to triage dataset-based data alerts.
 */
interface AllFoundryRids {
}

/**
 * Convert only Resource Identifiers with vetted/good interactions within the objects ecosystem to
 * human-readable format (e.g object set name). This ensures objects/carbon-only users are not
 * accidentally sent to workspace.
 */
interface ObjectsPlatformRids {
}

interface RidFormatter_objectsPlatformRids {
    type: "objectsPlatformRids";
    objectsPlatformRids: ObjectsPlatformRids;
}
interface RidFormatter_allFoundryRids {
    type: "allFoundryRids";
    allFoundryRids: AllFoundryRids;
}
/**
 * Convert Resource Identifiers into human-readable format. For example,
 * show the display name of an Object Set as opposed to its Rid.
 */
type RidFormatter = RidFormatter_objectsPlatformRids | RidFormatter_allFoundryRids;

interface KnownFormatter_userId {
    type: "userId";
    userId: FormatterUserId;
}
interface KnownFormatter_ridFormatter {
    type: "ridFormatter";
    ridFormatter: RidFormatter;
}
/**
 * Contains a known format that informs the Front-End consumer to use a specific formatter.
 */
type KnownFormatter = KnownFormatter_userId | KnownFormatter_ridFormatter;

type NumberFormatNotation = "STANDARD" | "SCIENTIFIC" | "ENGINEERING" | "COMPACT";

/**
 * Specifies how to round numbers. Only applicable when needing to round decimal places
 */
type NumberRoundingMode = "CEIL" | "FLOOR" | "ROUND_CLOSEST";

/**
 * Configure standard rendering of numbers, informed by the locale. Heavily inspired by browser Intl APIs.
 */
interface NumberFormatBase {
    useGrouping: boolean | undefined;
    convertNegativeToParenthesis: boolean | undefined;
    minimumIntegerDigits: number | undefined;
    minimumFractionDigits: number | undefined;
    maximumFractionDigits: number | undefined;
    minimumSignificantDigits: number | undefined;
    maximumSignificantDigits: number | undefined;
    notation: NumberFormatNotation | undefined;
    roundingMode: NumberRoundingMode | undefined;
}

/**
 * Display the value as basis points, multiplying by 10,000 and append "bps" suffix. For example, 0.01 will be displayed as "100bps".
 */
interface NumberFormatBasisPoint {
    base: NumberFormatBase;
}

/**
 * Scale the numeric value to billions and append a suffix. For example, 1500000000 will be displayed as "1.5B".
 */
interface NumberFormatBillions {
    base: NumberFormatBase;
}

/**
 * Currency rendering hints.
 *
 * - STANDARD: Render the number as-is
 * - COMPACT: Locale/currency-aware compact notation (e.g. 42000000$ -> 42M$)
 */
type NumberFormatCurrencyStyle = "STANDARD" | "COMPACT";

/**
 * This is a human readable id for the PropertyType. ids.PropertyTypeIds can be made up of lower or upper case
 * letters, numbers, dashes and underscores. ids.PropertyTypeId(s) are mutable at the moment. However, changing
 * it has the same effect as deleting and creating a new PropertyType. You should be careful when changing
 * it as there may be consumers (Hubble object views, plugins) that may be referencing it.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
type PropertyTypeId = string;

interface PropertyTypeReferenceOrStringConstant_constant {
    type: "constant";
    constant: string;
}
interface PropertyTypeReferenceOrStringConstant_propertyType {
    type: "propertyType";
    propertyType: PropertyTypeId;
}
type PropertyTypeReferenceOrStringConstant = PropertyTypeReferenceOrStringConstant_constant | PropertyTypeReferenceOrStringConstant_propertyType;

/**
 * Note that non-visual features e.g. sorting & histograms, are not guaranteed to be currency-aware. They can
 * group the same number together even if they have different currencies.
 */
interface NumberFormatCurrency {
    base: NumberFormatBase;
    style: NumberFormatCurrencyStyle;
    currencyCode: PropertyTypeReferenceOrStringConstant;
}

/**
 * For units that aren't accepted by NumberFormatUnit.
 * No auto-conversion will ever be attempted.
 * This is mostly a label providing instruction on which values can share an axis.
 */
interface NumberFormatCustomUnit {
    base: NumberFormatBase;
    unit: PropertyTypeReferenceOrStringConstant;
}

/**
 * Specifies the unit of the input duration value, ensuring that the formatter correctly interprets the number.
 */
type DurationBaseValue = "SECONDS" | "MILLISECONDS";

interface HumanReadableFormat {
    showFullUnits: boolean | undefined;
}

interface TimeCodeFormat {
}

interface DurationFormatStyle_humanReadable {
    type: "humanReadable";
    humanReadable: HumanReadableFormat;
}
interface DurationFormatStyle_timecode {
    type: "timecode";
    timecode: TimeCodeFormat;
}
/**
 * The style in which the duration is formatted.
 */
type DurationFormatStyle = DurationFormatStyle_humanReadable | DurationFormatStyle_timecode;

/**
 * Specifies the maximum precision to apply when formatting a written duration.
 */
type DurationPrecision = "DAYS" | "HOURS" | "MINUTES" | "SECONDS" | "AUTO";

/**
 * Formatter applied to numeric properties representing time durations.
 */
interface NumberFormatDuration {
    base: NumberFormatBase;
    formatStyle: DurationFormatStyle;
    precision: DurationPrecision | undefined;
    baseValue: DurationBaseValue;
}

/**
 * Scale the numeric value to millions and append a suffix. For example, 1500000 will be displayed as "1.5M".
 */
interface NumberFormatMillions {
    base: NumberFormatBase;
}

/**
 * Map integer to human-interpretable values. For example:
 * - 0 -> Not assigned
 * - 1 -> Assigned
 * - 2 -> Closed
 *
 * Ontology design note: string enums are preferable. Like any formatter that changes the rendered values, this
 * can behave strangely for certain features (e.g. sorting won't be alphabetic, but on the underlying ordering).
 */
interface NumberFormatOrdinal {
    values: Record<number, string>;
}

/**
 * Render number as a percentage. Will multiply the number by 100 before displaying & attach a "%" suffix. For
 * example, `0.15` corresponds to `15%`.
 */
interface NumberFormatPercentage {
    base: NumberFormatBase;
}

/**
 * Render number as a per mille. Will multiply the number by 1000 before displaying & attach a "‰" suffix. For
 * example, `0.015` corresponds to `15‰`.
 */
interface NumberFormatPerMille {
    base: NumberFormatBase;
}

interface PrePostFix {
    prefix: PropertyTypeReferenceOrStringConstant | undefined;
    postfix: PropertyTypeReferenceOrStringConstant | undefined;
}

/**
 * Consider using currency/unit instead of this formatter.
 *
 * Attach an arbitrary constant pre/post-fix.
 */
interface NumberFormatPrePostFix {
    base: NumberFormatBase;
    prePostFix: PrePostFix;
}

/**
 * Scale the numeric value to thousands and append a suffix. For example, 1500 will be displayed as "1.5K".
 */
interface NumberFormatThousands {
    base: NumberFormatBase;
}

/**
 * Note that this formatter breaks e.g. sorting features if used in combination with auto-conversion.
 */
interface NumberFormatUnit {
    base: NumberFormatBase;
    unit: PropertyTypeReferenceOrStringConstant;
}

interface NumberFormatter_base {
    type: "base";
    base: NumberFormatBase;
}
interface NumberFormatter_percentage {
    type: "percentage";
    percentage: NumberFormatPercentage;
}
interface NumberFormatter_perMille {
    type: "perMille";
    perMille: NumberFormatPerMille;
}
interface NumberFormatter_ordinal {
    type: "ordinal";
    ordinal: NumberFormatOrdinal;
}
interface NumberFormatter_currency {
    type: "currency";
    currency: NumberFormatCurrency;
}
interface NumberFormatter_unit {
    type: "unit";
    unit: NumberFormatUnit;
}
interface NumberFormatter_customUnit {
    type: "customUnit";
    customUnit: NumberFormatCustomUnit;
}
interface NumberFormatter_prePost {
    type: "prePost";
    prePost: NumberFormatPrePostFix;
}
interface NumberFormatter_duration {
    type: "duration";
    duration: NumberFormatDuration;
}
interface NumberFormatter_thousands {
    type: "thousands";
    thousands: NumberFormatThousands;
}
interface NumberFormatter_millions {
    type: "millions";
    millions: NumberFormatMillions;
}
interface NumberFormatter_billions {
    type: "billions";
    billions: NumberFormatBillions;
}
interface NumberFormatter_basisPoint {
    type: "basisPoint";
    basisPoint: NumberFormatBasisPoint;
}
type NumberFormatter = NumberFormatter_base | NumberFormatter_percentage | NumberFormatter_perMille | NumberFormatter_ordinal | NumberFormatter_currency | NumberFormatter_unit | NumberFormatter_customUnit | NumberFormatter_prePost | NumberFormatter_duration | NumberFormatter_thousands | NumberFormatter_millions | NumberFormatter_billions | NumberFormatter_basisPoint;

/**
 * Similar to a unit, but for non-numeric properties. For example, two properties which both represent
 * severities might share the same set of possible values, say 'HIGH', 'MEDIUM' or 'LOW'. You could then
 * plot these together on the same axis on a chart with "Severity" as the label by specifying "Severity"
 * as the `valueTypeLabel` for both properties.
 *
 * This can be a maximum of 50 characters.
 */
type ValueTypeLabel = string;

/**
 * Formatter applied to STRING properties. Currently only used for labeling, e.g. on chart axes —
 * does not change the displayed string.
 */
interface StringFormatter {
    valueTypeLabel: ValueTypeLabel;
}

/**
 * The unit to accompany the non-numeric value of a Time Dependent property. Can be provided by a property or a
 * user-inputted constant.
 */
interface NonNumericSeriesValueUnit {
    customUnit: PropertyTypeReferenceOrStringConstant;
}

/**
 * How to infer series values between adjacent data points.
 */
type NonNumericInternalInterpolation = "NEAREST" | "PREVIOUS" | "NEXT" | "NONE";

interface PropertyTypeReferenceOrNonNumericInternalInterpolation_propertyType {
    type: "propertyType";
    propertyType: PropertyTypeId;
}
interface PropertyTypeReferenceOrNonNumericInternalInterpolation_internalInterpolation {
    type: "internalInterpolation";
    internalInterpolation: NonNumericInternalInterpolation;
}
type PropertyTypeReferenceOrNonNumericInternalInterpolation = PropertyTypeReferenceOrNonNumericInternalInterpolation_propertyType | PropertyTypeReferenceOrNonNumericInternalInterpolation_internalInterpolation;

/**
 * Configuration for non-numeric series.
 */
interface TimeDependentNonNumericSeriesFormat {
    defaultInternalInterpolation: PropertyTypeReferenceOrNonNumericInternalInterpolation;
    unit: NonNumericSeriesValueUnit | undefined;
}

/**
 * Configuration for either numeric or non-numeric series.
 */
interface TimeDependentNumericOrNonNumericSeriesFormat {
    defaultInternalInterpolationPropertyTypeId: PropertyTypeId;
    unitPropertyTypeId: PropertyTypeId;
    isNonNumericPropertyTypeId: PropertyTypeId;
}

/**
 * Configuration for either numeric or non-numeric series.
 */
interface TimeDependentNumericOrNonNumericSeriesFormatV2 {
    defaultInternalInterpolationPropertyTypeId: PropertyTypeId | undefined;
    unitPropertyTypeId: PropertyTypeId | undefined;
}

interface NumericSeriesValueUnit_standardUnit {
    type: "standardUnit";
    standardUnit: NumberFormatUnit;
}
interface NumericSeriesValueUnit_customUnit {
    type: "customUnit";
    customUnit: NumberFormatCustomUnit;
}
/**
 * The unit to accompany the numeric value of a Time Dependent property. Can be a standardized NumberFormatUnit
 * or a user-inputted NumberFormatCustomUnit for Numeric series. Either can be provided by a property or a
 * user-inputted constant.
 */
type NumericSeriesValueUnit = NumericSeriesValueUnit_standardUnit | NumericSeriesValueUnit_customUnit;

/**
 * How to infer series values between adjacent data points.
 */
type NumericInternalInterpolation = "LINEAR" | "NEAREST" | "PREVIOUS" | "NEXT" | "NONE";

interface PropertyTypeReferenceOrNumericInternalInterpolation_propertyType {
    type: "propertyType";
    propertyType: PropertyTypeId;
}
interface PropertyTypeReferenceOrNumericInternalInterpolation_internalInterpolation {
    type: "internalInterpolation";
    internalInterpolation: NumericInternalInterpolation;
}
type PropertyTypeReferenceOrNumericInternalInterpolation = PropertyTypeReferenceOrNumericInternalInterpolation_propertyType | PropertyTypeReferenceOrNumericInternalInterpolation_internalInterpolation;

/**
 * Configuration for numeric series.
 */
interface TimeDependentNumericSeriesFormat {
    defaultInternalInterpolation: PropertyTypeReferenceOrNumericInternalInterpolation;
    unit: NumericSeriesValueUnit | undefined;
}

interface TimeDependentSeriesFormat_numeric {
    type: "numeric";
    numeric: TimeDependentNumericSeriesFormat;
}
interface TimeDependentSeriesFormat_nonNumeric {
    type: "nonNumeric";
    nonNumeric: TimeDependentNonNumericSeriesFormat;
}
interface TimeDependentSeriesFormat_numericOrNonNumeric {
    type: "numericOrNonNumeric";
    numericOrNonNumeric: TimeDependentNumericOrNonNumericSeriesFormat;
}
interface TimeDependentSeriesFormat_numericOrNonNumericV2 {
    type: "numericOrNonNumericV2";
    numericOrNonNumericV2: TimeDependentNumericOrNonNumericSeriesFormatV2;
}
type TimeDependentSeriesFormat = TimeDependentSeriesFormat_numeric | TimeDependentSeriesFormat_nonNumeric | TimeDependentSeriesFormat_numericOrNonNumeric | TimeDependentSeriesFormat_numericOrNonNumericV2;

/**
 * Formatter applied to TIME DEPENDENT properties.
 */
interface TimeDependentFormatter {
    timeDependentSeriesFormat: TimeDependentSeriesFormat;
}

interface DatetimeTimezoneDefinition_zoneId {
    type: "zoneId";
    zoneId: PropertyTypeReferenceOrStringConstant;
}
type DatetimeTimezoneDefinition = DatetimeTimezoneDefinition_zoneId;

interface UserTimezone {
}

interface DatetimeTimezone_static {
    type: "static";
    static: DatetimeTimezoneDefinition;
}
interface DatetimeTimezone_user {
    type: "user";
    user: UserTimezone;
}
type DatetimeTimezone = DatetimeTimezone_static | DatetimeTimezone_user;

interface TimestampFormatter {
    format: DatetimeFormat;
    displayTimezone: DatetimeTimezone;
}

interface BaseFormatter_knownFormatter {
    type: "knownFormatter";
    knownFormatter: KnownFormatter;
}
interface BaseFormatter_number {
    type: "number";
    number: NumberFormatter;
}
interface BaseFormatter_timestamp {
    type: "timestamp";
    timestamp: TimestampFormatter;
}
interface BaseFormatter_date {
    type: "date";
    date: DateFormatter;
}
interface BaseFormatter_string {
    type: "string";
    string: StringFormatter;
}
interface BaseFormatter_timeDependent {
    type: "timeDependent";
    timeDependent: TimeDependentFormatter;
}
interface BaseFormatter_boolean {
    type: "boolean";
    boolean: BooleanFormatter;
}
/**
 * The basic formatting behavior.
 */
type BaseFormatter = BaseFormatter_knownFormatter | BaseFormatter_number | BaseFormatter_timestamp | BaseFormatter_date | BaseFormatter_string | BaseFormatter_timeDependent | BaseFormatter_boolean;

type DataNullability = "NO_EXPLICIT_NULLS";

interface DataNullabilityV2 {
    noNulls: boolean | undefined;
    noEmptyCollections: boolean | undefined;
}

interface FailureMessage$1 {
    message: string;
}

type ArrayTypeElementsUniqueConstraint$1 = boolean;

interface RangeSizeConstraint$1 {
    minSize: number | undefined;
    maxSize: number | undefined;
}

type ArrayTypeSizeConstraint$1 = RangeSizeConstraint$1;

interface ArrayTypeDataConstraints$1 {
    size: ArrayTypeSizeConstraint$1 | undefined;
    elementsConstraint: PropertyTypeDataConstraints | undefined;
    elementsUnique: ArrayTypeElementsUniqueConstraint$1 | undefined;
}

type BooleanTypeDataConstraintValue$1 = "TRUE_VALUE" | "FALSE_VALUE" | "NULL_VALUE";

interface BooleanTypeDataConstraints$1 {
    allowedValues: Array<BooleanTypeDataConstraintValue$1>;
}

/**
 * ISO 8601 date.
 */
type DateTypeDataValue$1 = string;

interface DateTypeRangeConstraint$1 {
    min: DateTypeDataValue$1 | undefined;
    max: DateTypeDataValue$1 | undefined;
}

interface DateTypeDataConstraints$1 {
    range: DateTypeRangeConstraint$1;
}

type DecimalTypeDataValue$1 = string;

interface DecimalTypeRangeConstraint$1 {
    min: DecimalTypeDataValue$1 | undefined;
    max: DecimalTypeDataValue$1 | undefined;
}

interface OneOfDecimalTypeConstraint$1 {
    values: Array<DecimalTypeDataValue$1>;
}

interface DecimalTypeDataConstraints_range$1 {
    type: "range";
    range: DecimalTypeRangeConstraint$1;
}
interface DecimalTypeDataConstraints_oneOf$1 {
    type: "oneOf";
    oneOf: OneOfDecimalTypeConstraint$1;
}
type DecimalTypeDataConstraints$1 = DecimalTypeDataConstraints_range$1 | DecimalTypeDataConstraints_oneOf$1;

type DoubleTypeDataValue$1 = number;

interface DoubleTypeRangeConstraint$1 {
    min: DoubleTypeDataValue$1 | undefined;
    max: DoubleTypeDataValue$1 | undefined;
}

interface OneOfDoubleTypeConstraint$1 {
    values: Array<DoubleTypeDataValue$1>;
}

interface DoubleTypeDataConstraints_range$1 {
    type: "range";
    range: DoubleTypeRangeConstraint$1;
}
interface DoubleTypeDataConstraints_oneOf$1 {
    type: "oneOf";
    oneOf: OneOfDoubleTypeConstraint$1;
}
type DoubleTypeDataConstraints$1 = DoubleTypeDataConstraints_range$1 | DoubleTypeDataConstraints_oneOf$1;

type FloatTypeDataValue$1 = number;

interface FloatTypeRangeConstraint$1 {
    min: FloatTypeDataValue$1 | undefined;
    max: FloatTypeDataValue$1 | undefined;
}

interface OneOfFloatTypeConstraint$1 {
    values: Array<FloatTypeDataValue$1>;
}

interface FloatTypeDataConstraints_range$1 {
    type: "range";
    range: FloatTypeRangeConstraint$1;
}
interface FloatTypeDataConstraints_oneOf$1 {
    type: "oneOf";
    oneOf: OneOfFloatTypeConstraint$1;
}
type FloatTypeDataConstraints$1 = FloatTypeDataConstraints_range$1 | FloatTypeDataConstraints_oneOf$1;

type IntegerTypeDataValue$1 = number;

interface IntegerTypeRangeConstraint$1 {
    min: IntegerTypeDataValue$1 | undefined;
    max: IntegerTypeDataValue$1 | undefined;
}

interface OneOfIntegerTypeConstraint$1 {
    values: Array<IntegerTypeDataValue$1>;
}

interface IntegerTypeDataConstraints_range$1 {
    type: "range";
    range: IntegerTypeRangeConstraint$1;
}
interface IntegerTypeDataConstraints_oneOf$1 {
    type: "oneOf";
    oneOf: OneOfIntegerTypeConstraint$1;
}
type IntegerTypeDataConstraints$1 = IntegerTypeDataConstraints_range$1 | IntegerTypeDataConstraints_oneOf$1;

type LongTypeDataValue$1 = number;

interface LongTypeRangeConstraint$1 {
    min: LongTypeDataValue$1 | undefined;
    max: LongTypeDataValue$1 | undefined;
}

interface OneOfLongTypeConstraint$1 {
    values: Array<LongTypeDataValue$1>;
}

interface LongTypeDataConstraints_range$1 {
    type: "range";
    range: LongTypeRangeConstraint$1;
}
interface LongTypeDataConstraints_oneOf$1 {
    type: "oneOf";
    oneOf: OneOfLongTypeConstraint$1;
}
type LongTypeDataConstraints$1 = LongTypeDataConstraints_range$1 | LongTypeDataConstraints_oneOf$1;

type ShortTypeDataValue$1 = number;

interface OneOfShortTypeConstraint$1 {
    values: Array<ShortTypeDataValue$1>;
}

interface ShortTypeRangeConstraint$1 {
    min: ShortTypeDataValue$1 | undefined;
    max: ShortTypeDataValue$1 | undefined;
}

interface ShortTypeDataConstraints_range$1 {
    type: "range";
    range: ShortTypeRangeConstraint$1;
}
interface ShortTypeDataConstraints_oneOf$1 {
    type: "oneOf";
    oneOf: OneOfShortTypeConstraint$1;
}
type ShortTypeDataConstraints$1 = ShortTypeDataConstraints_range$1 | ShortTypeDataConstraints_oneOf$1;

type StringTypeDataValue$1 = string;

interface OneOfStringTypeConstraint$1 {
    values: Array<StringTypeDataValue$1>;
    useIgnoreCase: boolean | undefined;
}

interface RegexConstraint$1 {
    regexPattern: string;
    usePartialMatch: boolean | undefined;
}

interface StringTypeIsRidConstraint$1 {
}

interface StringTypeIsUuidConstraint$1 {
}

type StringTypeLengthConstraint$1 = RangeSizeConstraint$1;

interface StringTypeDataConstraints_regex$1 {
    type: "regex";
    regex: RegexConstraint$1;
}
interface StringTypeDataConstraints_oneOf$1 {
    type: "oneOf";
    oneOf: OneOfStringTypeConstraint$1;
}
interface StringTypeDataConstraints_length$1 {
    type: "length";
    length: StringTypeLengthConstraint$1;
}
interface StringTypeDataConstraints_isUuid$1 {
    type: "isUuid";
    isUuid: StringTypeIsUuidConstraint$1;
}
interface StringTypeDataConstraints_isRid$1 {
    type: "isRid";
    isRid: StringTypeIsRidConstraint$1;
}
type StringTypeDataConstraints$1 = StringTypeDataConstraints_regex$1 | StringTypeDataConstraints_oneOf$1 | StringTypeDataConstraints_length$1 | StringTypeDataConstraints_isUuid$1 | StringTypeDataConstraints_isRid$1;

/**
 * A string identifier used to map struct property fields to their respective constraints.
 * This identifier is intentionally generically typed. Constraints used on ontology types should interpret the
 * identifier as a struct field API name and pipeline builder should interpret the identifier as a dataset
 * struct column field name.
 */
type StructFieldIdentifier$1 = string;

/**
 * Map of constraints declared on struct elements keyed by the struct field identifier.
 */
type StructTypeElementsConstraint$1 = Record<StructFieldIdentifier$1, DataConstraints>;

interface StructTypeDataConstraints$1 {
    elementConstraints: StructTypeElementsConstraint$1;
}

type TimestampTypeDataValue$1 = string;

interface TimestampTypeRangeConstraint$1 {
    min: TimestampTypeDataValue$1 | undefined;
    max: TimestampTypeDataValue$1 | undefined;
}

interface TimestampTypeDataConstraints$1 {
    range: TimestampTypeRangeConstraint$1;
}

interface PropertyTypeDataConstraints_array {
    type: "array";
    array: ArrayTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_boolean {
    type: "boolean";
    boolean: BooleanTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_date {
    type: "date";
    date: DateTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_decimal {
    type: "decimal";
    decimal: DecimalTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_double {
    type: "double";
    double: DoubleTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_float {
    type: "float";
    float: FloatTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_integer {
    type: "integer";
    integer: IntegerTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_long {
    type: "long";
    long: LongTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_short {
    type: "short";
    short: ShortTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_string {
    type: "string";
    string: StringTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_struct {
    type: "struct";
    struct: StructTypeDataConstraints$1;
}
interface PropertyTypeDataConstraints_timestamp {
    type: "timestamp";
    timestamp: TimestampTypeDataConstraints$1;
}
type PropertyTypeDataConstraints = PropertyTypeDataConstraints_array | PropertyTypeDataConstraints_boolean | PropertyTypeDataConstraints_date | PropertyTypeDataConstraints_decimal | PropertyTypeDataConstraints_double | PropertyTypeDataConstraints_float | PropertyTypeDataConstraints_integer | PropertyTypeDataConstraints_long | PropertyTypeDataConstraints_short | PropertyTypeDataConstraints_string | PropertyTypeDataConstraints_struct | PropertyTypeDataConstraints_timestamp;

interface PropertyTypeDataConstraintsWrapper {
    failureMessage: FailureMessage$1 | undefined;
    constraints: PropertyTypeDataConstraints;
}

interface DataConstraints {
    nullability: DataNullability | undefined;
    nullabilityV2: DataNullabilityV2 | undefined;
    propertyTypeConstraints: Array<PropertyTypeDataConstraintsWrapper>;
}

interface InlineActionDisplayOptions {
    displayErrors: boolean;
}

/**
 * The id for a Parameter which uniquely identifies the Parameter per ActionType.
 */
type ParameterId = string;

interface InlineActionType {
    rid: ActionTypeRid;
    displayOptions: InlineActionDisplayOptions;
    parameterId: ParameterId | undefined;
}

/**
 * This includes metadata which can be used by front-ends when displaying the PropertyType.
 */
interface PropertyTypeDisplayMetadata {
    description: string | undefined;
    displayName: string;
    visibility: Visibility;
}

/**
 * This status indicates that the PropertyType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
interface ActivePropertyTypeStatus {
}

/**
 * This status indicates that the PropertyType is reaching the end of its life and will be removed as per the deadline specified.
 */
interface DeprecatedPropertyTypeStatus {
    message: string;
    deadline: string;
    replacedBy: PropertyTypeRid | undefined;
}

/**
 * This status indicates that the PropertyType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
interface ExamplePropertyTypeStatus {
}

/**
 * This status indicates that the PropertyType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
interface ExperimentalPropertyTypeStatus {
}

interface PropertyTypeStatus_experimental {
    type: "experimental";
    experimental: ExperimentalPropertyTypeStatus;
}
interface PropertyTypeStatus_active {
    type: "active";
    active: ActivePropertyTypeStatus;
}
interface PropertyTypeStatus_deprecated {
    type: "deprecated";
    deprecated: DeprecatedPropertyTypeStatus;
}
interface PropertyTypeStatus_example {
    type: "example";
    example: ExamplePropertyTypeStatus;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
 */
type PropertyTypeStatus = PropertyTypeStatus_experimental | PropertyTypeStatus_active | PropertyTypeStatus_deprecated | PropertyTypeStatus_example;

/**
 * Reference to a rule set rid.
 */
type RuleSetRid = string;

/**
 * Reference to a value source. This is bound to e.g. a property.
 */
type ValueReferenceId = string;

interface ValueReferenceSource_propertyTypeRid {
    type: "propertyTypeRid";
    propertyTypeRid: PropertyTypeRid;
}
type ValueReferenceSource = ValueReferenceSource_propertyTypeRid;

/**
 * Bind a rule set to a practical use. This enables re-use of rule sets in various contexts (e.g. values can
 * be bound to properties, or to actions). The `it` value is considered special & have semantic meaning at the
 * binding point (e.g. the property to which the rule set is bound).
 */
interface RuleSetBinding {
    ruleSetRid: RuleSetRid;
    bindings: Record<ValueReferenceId, ValueReferenceSource>;
}

interface ArrayPropertyType {
    subtype: Type;
}

interface AttachmentPropertyType {
}

interface BooleanPropertyType {
}

interface BytePropertyType {
}

interface CipherTextPropertyType {
    plainTextType: Type;
    defaultCipherChannelRid: string | undefined;
}

interface DatePropertyType {
}

interface DecimalPropertyType {
    precision: number | undefined;
    scale: number | undefined;
}

interface DoublePropertyType {
}

/**
 * Configuration for non-numeric series.
 */
interface NonNumericSeriesValueMetadata {
    defaultInternalInterpolation: PropertyTypeReferenceOrNonNumericInternalInterpolation;
}

/**
 * Configuration for a sensor time series property that can contain either numeric or non-numeric data at the
 * sensor level.
 */
interface NumericOrNonNumericSeriesValueMetadata {
}

/**
 * Configuration for a time series property that can contain either numeric or non-numeric data. A boolean property
 * reference is required to determine if the series is numeric or non-numeric.
 */
interface NumericOrNonNumericSeriesValueMetadataV2 {
    isNonNumericPropertyTypeId: PropertyTypeId;
}

/**
 * Configuration for numeric series.
 */
interface NumericSeriesValueMetadata {
    defaultInternalInterpolation: PropertyTypeReferenceOrNumericInternalInterpolation;
}

interface SeriesValueMetadata_numeric {
    type: "numeric";
    numeric: NumericSeriesValueMetadata;
}
interface SeriesValueMetadata_enum {
    type: "enum";
    enum: NonNumericSeriesValueMetadata;
}
interface SeriesValueMetadata_numericOrNonNumeric {
    type: "numericOrNonNumeric";
    numericOrNonNumeric: NumericOrNonNumericSeriesValueMetadata;
}
interface SeriesValueMetadata_numericOrNonNumericV2 {
    type: "numericOrNonNumericV2";
    numericOrNonNumericV2: NumericOrNonNumericSeriesValueMetadataV2;
}
type SeriesValueMetadata = SeriesValueMetadata_numeric | SeriesValueMetadata_enum | SeriesValueMetadata_numericOrNonNumeric | SeriesValueMetadata_numericOrNonNumericV2;

/**
 * Note this is experimental, should not be used without consulting the product team and format can
 * change/break without notice.
 */
interface ExperimentalTimeDependentPropertyTypeV1 {
    seriesValueMetadata: SeriesValueMetadata;
    sensorLinkTypeId: LinkTypeId | undefined;
}

interface FloatPropertyType {
}

interface GeohashPropertyType {
}

/**
 * The geo_shape data type facilitates the indexing of and searching with arbitrary geo shapes such as rectangles
 * and polygons.
 * Shapes must be represented as GeoJSON (see https://geojson.org for more information).
 * We support the following types of GeoJson shape:
 * - Point, A single geographic coordinate. Only WGS-84 coordinates are supported.
 * - LineString, An arbitrary line given two or more points.
 * - Polygon, A closed polygon whose first and last point must match, thus requiring n + 1 vertices to create an n-sided polygon and a minimum of 4 vertices.
 * - MultiPoint, An array of unconnected, but likely related points.
 * - MultiLineString, An array of separate linestrings.
 * - MultiPolygon, An array of separate polygons.
 * - GeometryCollection, A GeoJSON shape similar to the multi* shapes except that multiple types can coexist (e.g., a Point and a LineString).
 * Note: we do not support the GeoJSON types Feature and FeatureCollection
 * The underlying foundry type must be a string.
 */
interface GeoshapePropertyType {
}

/**
 * Type for properties containing references to a Geotime series.
 */
interface GeotimeSeriesReferencePropertyType {
}

interface IntegerPropertyType {
}

interface LongPropertyType {
}

/**
 * This follows com.palantir.gps.api.policy.MarkingType
 */
type MarkingType$1 = "MANDATORY" | "CBAC";

interface MarkingPropertyType {
    markingType: MarkingType$1;
}

/**
 * This follows com.palantir.media.MediaReference
 */
interface MediaReferencePropertyType {
}

interface ShortPropertyType {
}

/**
 * A language-specific analyzer. Since some aren't provided natively with Elasticsearch, ontology-metadata cannot
 * guarantee that a given language-specific analyzer will be available for use.
 */
type LanguageAnalyzer = "FRENCH" | "JAPANESE" | "ARABIC" | "COMBINED_ARABIC_ENGLISH";

/**
 * This indicates that the StringPropertyType should not be analyzed for full text search. Only
 * exact match queries can be made on such StringPropertyType(s).
 */
interface NotAnalyzedAnalyzer {
}

/**
 * The simple analyzer breaks text into terms whenever it encounters a character which is not a letter
 * and also lower cases it.
 */
interface SimpleAnalyzer {
}

/**
 * This is the default analyzer which is used when no analyzerOverride is specified. It tokenizes the
 * text based on grammar and also lower cases it. This is expected to work well for most purposes.
 */
interface StandardAnalyzer {
}

/**
 * The whitespace analyzer breaks the text into terms whenever it encounters a whitespace character.
 * Please note that it does not change the casing of the text.
 */
interface WhitespaceAnalyzer {
}

interface Analyzer_notAnalyzed {
    type: "notAnalyzed";
    notAnalyzed: NotAnalyzedAnalyzer;
}
interface Analyzer_simpleAnalyzer {
    type: "simpleAnalyzer";
    simpleAnalyzer: SimpleAnalyzer;
}
interface Analyzer_standardAnalyzer {
    type: "standardAnalyzer";
    standardAnalyzer: StandardAnalyzer;
}
interface Analyzer_whitespaceAnalyzer {
    type: "whitespaceAnalyzer";
    whitespaceAnalyzer: WhitespaceAnalyzer;
}
interface Analyzer_languageAnalyzer {
    type: "languageAnalyzer";
    languageAnalyzer: LanguageAnalyzer;
}
/**
 * Union wrapping the various analyzer configurations available for StringPropertyType(s).
 * The analyzer determines how the PropertyType is indexed and made available for searches.
 */
type Analyzer = Analyzer_notAnalyzed | Analyzer_simpleAnalyzer | Analyzer_standardAnalyzer | Analyzer_whitespaceAnalyzer | Analyzer_languageAnalyzer;

interface StringPropertyType {
    analyzerOverride: Analyzer | undefined;
    isLongText: boolean;
    supportsExactMatching: boolean;
    supportsEfficientLeadingWildcard: boolean | undefined;
    enableAsciiFolding: boolean | undefined;
}

type Alias = string;

type StructFieldAlias = Alias;

/**
 * This includes metadata which can be used by front-ends when displaying a struct property type field.
 */
interface StructFieldDisplayMetadata {
    description: string | undefined;
    displayName: string;
}

/**
 * A rid identifying a field of a struct property type. This rid is generated randomly and is safe for logging purposes.
 */
type StructFieldRid = string;

/**
 * Represents an ordered set of fields and values.
 */
interface StructFieldType {
    structFieldRid: StructFieldRid;
    displayMetadata: StructFieldDisplayMetadata;
    apiName: ObjectTypeFieldApiName$1;
    fieldType: Type;
    aliases: Array<StructFieldAlias>;
    typeClasses: Array<TypeClass>;
}

interface StructPropertyType {
    structFields: Array<StructFieldType>;
}

interface TimestampPropertyType {
}

type LiveDeploymentRid = string;

interface FoundryLiveDeployment {
    rid: LiveDeploymentRid;
    inputParamName: string;
    outputParamName: string;
}

type LmsEmbeddingModel = "OPENAI_TEXT_EMBEDDING_ADA_002" | "TEXT_EMBEDDING_3_SMALL" | "SNOWFLAKE_ARCTIC_EMBED_M" | "INSTRUCTOR_LARGE" | "BGE_BASE_EN_V1_5";

interface TextEmbeddingModel_lms {
    type: "lms";
    lms: LmsEmbeddingModel;
}
interface TextEmbeddingModel_foundryLiveDeployment {
    type: "foundryLiveDeployment";
    foundryLiveDeployment: FoundryLiveDeployment;
}
type TextEmbeddingModel = TextEmbeddingModel_lms | TextEmbeddingModel_foundryLiveDeployment;

interface EmbeddingModel_text {
    type: "text";
    text: TextEmbeddingModel;
}
type EmbeddingModel = EmbeddingModel_text;

type VectorSimilarityFunction = "COSINE_SIMILARITY" | "DOT_PRODUCT" | "EUCLIDEAN_DISTANCE";

/**
 * Represents a fixed size vector of floats. These can be used for vector similarity searches.
 */
interface VectorPropertyType {
    dimension: number;
    supportsSearchWith: Array<VectorSimilarityFunction>;
    embeddingModel: EmbeddingModel | undefined;
}

interface Type_array {
    type: "array";
    array: ArrayPropertyType;
}
interface Type_boolean {
    type: "boolean";
    boolean: BooleanPropertyType;
}
interface Type_byte {
    type: "byte";
    byte: BytePropertyType;
}
interface Type_date {
    type: "date";
    date: DatePropertyType;
}
interface Type_decimal {
    type: "decimal";
    decimal: DecimalPropertyType;
}
interface Type_double {
    type: "double";
    double: DoublePropertyType;
}
interface Type_float {
    type: "float";
    float: FloatPropertyType;
}
interface Type_geohash {
    type: "geohash";
    geohash: GeohashPropertyType;
}
interface Type_geoshape {
    type: "geoshape";
    geoshape: GeoshapePropertyType;
}
interface Type_integer {
    type: "integer";
    integer: IntegerPropertyType;
}
interface Type_long {
    type: "long";
    long: LongPropertyType;
}
interface Type_short {
    type: "short";
    short: ShortPropertyType;
}
interface Type_string {
    type: "string";
    string: StringPropertyType;
}
interface Type_experimentalTimeDependentV1 {
    type: "experimentalTimeDependentV1";
    experimentalTimeDependentV1: ExperimentalTimeDependentPropertyTypeV1;
}
interface Type_timestamp {
    type: "timestamp";
    timestamp: TimestampPropertyType;
}
interface Type_attachment {
    type: "attachment";
    attachment: AttachmentPropertyType;
}
interface Type_marking {
    type: "marking";
    marking: MarkingPropertyType;
}
interface Type_cipherText {
    type: "cipherText";
    cipherText: CipherTextPropertyType;
}
interface Type_mediaReference {
    type: "mediaReference";
    mediaReference: MediaReferencePropertyType;
}
interface Type_vector {
    type: "vector";
    vector: VectorPropertyType;
}
interface Type_geotimeSeriesReference {
    type: "geotimeSeriesReference";
    geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}
interface Type_struct {
    type: "struct";
    struct: StructPropertyType;
}
/**
 * Wrapper type for the various supported property types.
 *
 * Note: this type also encodes information on how to store the property. Use `DataType` if only the raw type
 * information matters (e.g. this format condition input must be a string).
 */
type Type = Type_array | Type_boolean | Type_byte | Type_date | Type_decimal | Type_double | Type_float | Type_geohash | Type_geoshape | Type_integer | Type_long | Type_short | Type_string | Type_experimentalTimeDependentV1 | Type_timestamp | Type_attachment | Type_marking | Type_cipherText | Type_mediaReference | Type_vector | Type_geotimeSeriesReference | Type_struct;

type ValueTypeRid$1 = string;

type ValueTypeVersionId$1 = string;

interface ValueTypeReference$1 {
    rid: ValueTypeRid$1;
    versionId: ValueTypeVersionId$1;
}

/**
 * A PropertyType is a typed attribute of an ObjectType.
 */
interface PropertyType {
    rid: PropertyTypeRid;
    id: PropertyTypeId;
    apiName: ObjectTypeFieldApiName$1 | undefined;
    sharedPropertyTypeApiName: ObjectTypeFieldApiName$1 | undefined;
    displayMetadata: PropertyTypeDisplayMetadata;
    indexedForSearch: boolean;
    ruleSetBinding: RuleSetBinding | undefined;
    baseFormatter: BaseFormatter | undefined;
    type: Type;
    typeClasses: Array<TypeClass>;
    status: PropertyTypeStatus;
    inlineAction: InlineActionType | undefined;
    dataConstraints: DataConstraints | undefined;
    sharedPropertyTypeRid: SharedPropertyTypeRid | undefined;
    valueType: ValueTypeReference$1 | undefined;
}

/**
 * ResourceIdentifier for a TypeGroup.
 */
type TypeGroupRid = string;

/**
 * An ObjectType is a model that represents a real world concept. For example, there could be
 * an Employees ObjectType to represent the employees in a business organization.
 */
interface ObjectType {
    displayMetadata: ObjectTypeDisplayMetadata;
    id: ObjectTypeId;
    primaryKeys: Array<PropertyTypeRid>;
    propertyTypes: Record<PropertyTypeRid, PropertyType>;
    rid: ObjectTypeRid;
    titlePropertyTypeRid: PropertyTypeRid;
    traits: ObjectTypeTraits;
    apiName: ObjectTypeApiName | undefined;
    status: ObjectTypeStatus;
    redacted: boolean | undefined;
    implementsInterfaces: Array<InterfaceTypeRid>;
    implementsInterfaces2: Array<ObjectTypeInterfaceImplementation>;
    allImplementsInterfaces: Record<InterfaceTypeRid, ObjectTypeInterfaceImplementation>;
    typeGroups: Array<TypeGroupRid>;
}

type GothamPropertyComponentUri = string;

type GothamPropertyTypeUri = string;

interface SharedPropertyTypeGothamMapping {
    uri: GothamPropertyTypeUri;
    structApiNameToComponentUriMapping: Record<ObjectTypeFieldApiName$1, GothamPropertyComponentUri>;
}

/**
 * Time to live for a temporary object set.
 */
type TimeToLive = "ONE_HOUR" | "ONE_DAY";

interface CreateTemporaryObjectSetRequest {
    objectSet: ObjectSet;
    timeToLive: TimeToLive;
    objectSetFilterContext: ObjectSetFilterContext | undefined;
}

interface CreateTemporaryObjectSetResponse {
    objectSetRid: ObjectSetRid;
}

/**
 * Creates a temporary object set that will live for at least as long as the provided TTL, and will get deleted
 * at some point after that.
 *
 * Temporary object sets can only be accessed by users who have created them; a gatekeeper resource is registered
 * for every temporary object set. NOTE: The same gatekeeper resource may be reused for the same userId across
 * different createTemporaryObjectSet requests.
 *
 * Whenever an object set (temporary, or otherwise) referencing a temporary object set gets saved or used in
 * versioned object sets, the reference gets replaced with a full definition of the previously saved temporary
 * object. This is to ensure that they do not inherit the TTL of temporary object sets they reference.
 *
 * Please consider using temporary object sets whenever there is a need to save an object set just to be able to
 * pass it to another service without a need to persist it indefinitely.
 */
declare function createTemporaryObjectSet(ctx: ConjureContext, request: CreateTemporaryObjectSetRequest): Promise<CreateTemporaryObjectSetResponse>;

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
interface UsageCost {
    computeUsage: number | undefined;
}

/**
 * The primary key of an object or a link.
 */
type EntityPrimaryKey = Record<PropertyTypeRid$1, PropertyValue>;

/**
 * A unique identifier of an object type or a link type.
 */
type EntityTypeRid = string;

/**
 * Token representing a version of the returned object or many-to-many link.
 */
type EntityVersionV1 = string;

interface EntityVersion_v1 {
    type: "v1";
    v1: EntityVersionV1;
}
/**
 * Version of the returned object or many-to-many link.
 * It is guaranteed that the entity has not changed as long as the returned value is the same.
 */
type EntityVersion = EntityVersion_v1;

/**
 * A Foundry link.
 */
interface FoundryLink {
    linkTypeRid: EntityTypeRid;
    primaryKey: EntityPrimaryKey;
    objectSideA: FoundryObjectReference;
    objectSideB: FoundryObjectReference;
    version: EntityVersion;
}

/**
 * A Foundry link with link side specified
 */
interface DirectedFoundryLink {
    linkSide: LinkSide;
    link: FoundryLink;
}

/**
 * Successful links retrieval result for a requested object.
 */
interface LoadedObjectLinksResultV2 {
    objectIdentifier: ObjectIdentifier;
    links: Array<DirectedFoundryLink>;
}

/**
 * Results contains a list of LoadedObjectLinksResultV2 that includes requested ObjectIdentifier and a list of
 * found DirectedFoundryLinks. The sum of all links will not exceed 100_000 in a single page.
 */
interface GetBulkLinksPageResponse {
    results: Array<LoadedObjectLinksResultV2>;
    pageToken: GetBulkLinksPageToken | undefined;
    usageCost: UsageCost | undefined;
}

/**
 * Returns a page of all `FoundryLink`s for a given relation based on a list of object identifiers.
 * The API supports fetching links for maximum 5_000 ObjectIdentifiers in a single request.
 * Results are always limited to the maximum of 100_000 links, without applying any particular order. Specifically,
 * this means that if total links count is above 100_000 then the whole result set should be considered partial,
 * i.e. there is no guarantee that for a given object all links have been retrieved.
 * Note that this endpoint does not check if objects referenced by the returned links actually exist. For instance,
 * when primary keys in the join table become stale, it will still return links based on the stale join table records.
 *
 * Note that this API does not support OSv1 links and will throw an exception if links provided are backed by OSv1.
 */
declare function getBulkLinksPage(ctx: ConjureContext, request: GetBulkLinksPageRequest): Promise<GetBulkLinksPageResponse>;

interface VersionReference_ontologyVersion {
    type: "ontologyVersion";
    ontologyVersion: OntologyVersion;
}
interface VersionReference_ontologyBranch {
    type: "ontologyBranch";
    ontologyBranch: OntologyBranchRid;
}
/**
 * Union type to represent various ways to reference the version of an Ontology entity.
 */
type VersionReference = VersionReference_ontologyVersion | VersionReference_ontologyBranch;

interface ActionTypeLoadRequestV2 {
    rid: ActionTypeRid;
    versionReference: VersionReference | undefined;
}

type DatasourceType = "DATASET" | "RESTRICTED_VIEW" | "TIME_SERIES" | "STREAM" | "STREAM_V2" | "DATASET_V2" | "RESTRICTED_VIEW_V2" | "RESTRICTED_STREAM" | "MEDIA" | "MEDIA_SET_VIEW" | "GEOTIME_SERIES" | "TABLE" | "EDITS_ONLY" | "DIRECT" | "DERIVED" | "DATASET_V3";

/**
 * Specifies how EntityMetadatas should be loaded.
 */
interface EntityMetadataLoadRequest {
    generateGothamMappings: boolean | undefined;
}

interface InterfaceTypeLoadRequest {
    rid: InterfaceTypeRid;
    versionReference: VersionReference | undefined;
}

/**
 * An rid identifying the LinkType. This rid is generated randomly and is safe for logging purposes. The
 * LinkTypeRid for a LinkType is immutable. If a LinkType is deleted and recreated with the same LinkTypeId,
 * the LinkTypeRid will be different.
 */
type LinkTypeRid = string;

interface LinkTypeIdentifier_linkTypeId {
    type: "linkTypeId";
    linkTypeId: LinkTypeId;
}
interface LinkTypeIdentifier_linkTypeRid {
    type: "linkTypeRid";
    linkTypeRid: LinkTypeRid;
}
/**
 * Union type to represent the different identifiers for LinkType(s) in load requests.
 */
type LinkTypeIdentifier = LinkTypeIdentifier_linkTypeId | LinkTypeIdentifier_linkTypeRid;

/**
 * Request to load an LinkType.
 */
interface LinkTypeLoadRequest {
    identifier: LinkTypeIdentifier;
    versionReference: VersionReference | undefined;
}

interface ObjectTypeIdentifier_objectTypeId {
    type: "objectTypeId";
    objectTypeId: ObjectTypeId;
}
interface ObjectTypeIdentifier_objectTypeRid {
    type: "objectTypeRid";
    objectTypeRid: ObjectTypeRid;
}
/**
 * Union type to represent the different identifiers for ObjectType(s) in load requests.
 */
type ObjectTypeIdentifier = ObjectTypeIdentifier_objectTypeId | ObjectTypeIdentifier_objectTypeRid;

/**
 * Request to load an ObjectType.
 */
interface ObjectTypeLoadRequest {
    identifier: ObjectTypeIdentifier;
    versionReference: VersionReference | undefined;
}

/**
 * Request to load a SharedPropertyType.
 */
interface SharedPropertyTypeLoadRequest {
    rid: SharedPropertyTypeRid;
    versionReference: VersionReference | undefined;
}

interface TypeGroupLoadRequest {
    rid: TypeGroupRid;
    versionReference: VersionReference | undefined;
}

/**
 * Request to batch load Ontology entities. If any of the requested
 * entities are not available in the specified version or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty.
 */
interface OntologyBulkLoadEntitiesRequest {
    datasourceTypes: Array<DatasourceType>;
    objectTypes: Array<ObjectTypeLoadRequest>;
    linkTypes: Array<LinkTypeLoadRequest>;
    sharedPropertyTypes: Array<SharedPropertyTypeLoadRequest>;
    interfaceTypes: Array<InterfaceTypeLoadRequest>;
    typeGroups: Array<TypeGroupLoadRequest>;
    actionTypes: Array<ActionTypeLoadRequestV2>;
    loadRedacted: boolean | undefined;
    includeObjectTypeCount: boolean | undefined;
    includeTypeGroupEntitiesCount: boolean | undefined;
    includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
    includeEntityMetadata: boolean | undefined;
    entityMetadata: EntityMetadataLoadRequest | undefined;
}

/**
 * Indicates that this value in the rendered string should be, quite simply, the given string.
 */
type ActionTypeRichTextMessage = string;

interface ObjectParameterPropertyValue {
    parameterId: ParameterId;
    propertyTypeId: PropertyTypeId;
}

/**
 * Indicates that this value in the rendered string should be replaced with the specified Object Parameter's
 * property value.
 */
type ActionTypeRichTextParameterPropertyReference = ObjectParameterPropertyValue;

/**
 * Indicates that this value in the rendered string should be replaced with the Parameter with the given
 * ParameterId.
 */
type ActionTypeRichTextParameterReference = ParameterId;

interface ActionTypeRichTextComponent_message {
    type: "message";
    message: ActionTypeRichTextMessage;
}
interface ActionTypeRichTextComponent_parameter {
    type: "parameter";
    parameter: ActionTypeRichTextParameterReference;
}
interface ActionTypeRichTextComponent_parameterProperty {
    type: "parameterProperty";
    parameterProperty: ActionTypeRichTextParameterPropertyReference;
}
/**
 * Generic type that can used to define a string that should have Action execution details injected into it when
 * it is rendered.
 */
type ActionTypeRichTextComponent = ActionTypeRichTextComponent_message | ActionTypeRichTextComponent_parameter | ActionTypeRichTextComponent_parameterProperty;

/**
 * The mapping which designated what struct fields will get which values in the all edited properties log.
 */
interface AllEditedObjectsFieldMapping {
    objectTypeRid: StructFieldRid;
    primaryKeyValue: StructFieldRid;
    primaryKeyType: StructFieldRid;
}

interface Empty {
}

interface InterfaceParameterPropertyValue {
    parameterId: ParameterId;
    sharedPropertyTypeRid: SharedPropertyTypeRid;
}

interface ActionLogValue_parameterValue {
    type: "parameterValue";
    parameterValue: ParameterId;
}
interface ActionLogValue_objectParameterPropertyValue {
    type: "objectParameterPropertyValue";
    objectParameterPropertyValue: ObjectParameterPropertyValue;
}
interface ActionLogValue_interfaceParameterPropertyValue {
    type: "interfaceParameterPropertyValue";
    interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}
interface ActionLogValue_editedObjects {
    type: "editedObjects";
    editedObjects: ObjectTypeId;
}
interface ActionLogValue_allEditedObjects {
    type: "allEditedObjects";
    allEditedObjects: AllEditedObjectsFieldMapping;
}
interface ActionLogValue_actionTypeRid {
    type: "actionTypeRid";
    actionTypeRid: Empty;
}
interface ActionLogValue_actionRid {
    type: "actionRid";
    actionRid: Empty;
}
interface ActionLogValue_actionTypeVersion {
    type: "actionTypeVersion";
    actionTypeVersion: Empty;
}
interface ActionLogValue_actionTimestamp {
    type: "actionTimestamp";
    actionTimestamp: Empty;
}
interface ActionLogValue_actionUser {
    type: "actionUser";
    actionUser: Empty;
}
interface ActionLogValue_isReverted {
    type: "isReverted";
    isReverted: Empty;
}
interface ActionLogValue_revertUser {
    type: "revertUser";
    revertUser: Empty;
}
interface ActionLogValue_revertTimestamp {
    type: "revertTimestamp";
    revertTimestamp: Empty;
}
interface ActionLogValue_synchronousWebhookInstanceId {
    type: "synchronousWebhookInstanceId";
    synchronousWebhookInstanceId: Empty;
}
interface ActionLogValue_asynchronousWebhookInstanceIds {
    type: "asynchronousWebhookInstanceIds";
    asynchronousWebhookInstanceIds: Empty;
}
interface ActionLogValue_notifiedUsers {
    type: "notifiedUsers";
    notifiedUsers: Empty;
}
interface ActionLogValue_notificationIds {
    type: "notificationIds";
    notificationIds: Empty;
}
interface ActionLogValue_scenarioRid {
    type: "scenarioRid";
    scenarioRid: Empty;
}
interface ActionLogValue_summary {
    type: "summary";
    summary: Array<ActionTypeRichTextComponent>;
}
type ActionLogValue = ActionLogValue_parameterValue | ActionLogValue_objectParameterPropertyValue | ActionLogValue_interfaceParameterPropertyValue | ActionLogValue_editedObjects | ActionLogValue_allEditedObjects | ActionLogValue_actionTypeRid | ActionLogValue_actionRid | ActionLogValue_actionTypeVersion | ActionLogValue_actionTimestamp | ActionLogValue_actionUser | ActionLogValue_isReverted | ActionLogValue_revertUser | ActionLogValue_revertTimestamp | ActionLogValue_synchronousWebhookInstanceId | ActionLogValue_asynchronousWebhookInstanceIds | ActionLogValue_notifiedUsers | ActionLogValue_notificationIds | ActionLogValue_scenarioRid | ActionLogValue_summary;

/**
 * Users can optionally configure an ActionLogicRule for their ActionType that defines how Action parameters and
 * their properties should be mapped to properties of their Action Log Object Type.
 */
interface ActionLogRule {
    actionLogObjectTypeId: ObjectTypeId;
    propertyValues: Record<PropertyTypeId, ActionLogValue>;
    reasonCodes: Array<PropertyTypeId>;
    editedObjectRelations: Record<ObjectTypeId, LinkTypeId>;
    enabled: boolean;
}

interface AddInterfaceLinkRule {
    interfaceTypeRid: InterfaceTypeRid;
    interfaceLinkTypeRid: InterfaceLinkTypeRid;
    sourceObject: ParameterId;
    targetObject: ParameterId;
}

/**
 * The time that the user submits the Action will be used for this value.
 */
interface CurrentTime {
}

/**
 * The user executing the Action will be used for this value.
 */
interface CurrentUser {
}

/**
 * A parameter type that consists of a list of Attachment rids.
 */
interface AttachmentListValue {
    attachments: Array<string>;
}

/**
 * A parameter type that consists of an Attachment rid.
 */
interface AttachmentValue {
    attachment: string;
}

/**
 * A parameter value type that consists of a list of Booleans.
 */
interface BooleanListValue {
    booleans: Array<boolean>;
}

/**
 * A parameter value type that is a Boolean.
 */
type BooleanValue = boolean;

/**
 * A parameter value type that consists of a list of strings representing dates.
 */
interface DateListValue {
    dates: Array<string>;
}

/**
 * A parameter value type that is a String representation of a date.
 */
interface DateValue {
    dateValue: string;
}

/**
 * A parameter value type that consists of a lists of Doubles.
 */
interface DoubleListValue {
    doubles: Array<number>;
}

/**
 * A parameter value type that is a Double.
 */
type DoubleValue = number;

/**
 * A parameter value type that consists of a list of Geohashes. Only WGS-84 coordinates are supported.
 */
interface GeohashListValue {
    geohashes: Array<string>;
}

/**
 * A parameter value type that is a Geohash. Only WGS-84 coordinates are supported.
 */
interface GeohashValue {
    geohash: string;
}

/**
 * This value is guaranteed to be a valid GeoJSON.
 */
type Geoshape = any;

/**
 * A parameter value type that consists of a list of Geoshapes.
 */
interface GeoshapeListValue {
    geoshapes: Array<Geoshape>;
}

/**
 * A parameter value type that is a Geoshape.
 */
interface GeoshapeValue {
    geoshape: Geoshape;
}

/**
 * A parameter type that consists of a GeotimeSeriesReference.
 */
interface GeotimeSeriesReferenceValue {
    integrationRid: string;
    seriesId: string;
}

/**
 * A parameter type that consists of a list of GeotimeSeriesReferences.
 */
interface GeotimeSeriesReferenceListValue {
    geotimeSeriesReferences: Array<GeotimeSeriesReferenceValue>;
}

/**
 * A parameter value type that consists of a lists of Integers.
 */
interface IntegerListValue {
    integers: Array<number>;
}

/**
 * A parameter value type that is an Integer.
 */
type IntegerValue = number;

/**
 * A parameter value type that consists of a lists of Longs.
 */
interface LongListValue {
    longs: Array<number>;
}

/**
 * A parameter value type that is a Long.
 */
type LongValue = number;

/**
 * A parameter type that consists of a list of Marking values.
 */
interface MarkingListValue {
    markings: Array<string>;
}

/**
 * A parameter type that consists of Marking Values.
 */
interface MarkingValue {
    marking: string;
}

/**
 * An rid identifying a specific item within a media set. This rid is a randomly generated identifier and is
 * safe to log.
 */
type MediaItemRid = string;

/**
 * An rid identifying a media set. This rid is a randomly generated identifier and is safe to log.
 */
type MediaSetRid = string;

/**
 * An rid identifying a media set view. This rid is a randomly generated identifier and is safe to log.
 */
type MediaSetViewRid = string;

interface MediaViewItemReference {
    mediaSetRid: MediaSetRid;
    mediaSetViewRid: MediaSetViewRid;
    mediaItemRid: MediaItemRid;
}

interface MediaReference_mediaSetViewItem {
    type: "mediaSetViewItem";
    mediaSetViewItem: MediaViewItemReference;
}
type MediaReference = MediaReference_mediaSetViewItem;

/**
 * Expected to match mime format from  https://www.iana.org/assignments/media-types/media-types.xhtml
 */
type MimeType = string;

/**
 * A parameter type that consists of a MediaReference.
 */
interface MediaReferenceValue {
    mimeType: MimeType;
    mediaReference: MediaReference;
}

/**
 * A parameter type that consists of a list of MediaReferences.
 */
interface MediaReferenceListValue {
    mediaReferences: Array<MediaReferenceValue>;
}

/**
 * A parameter value type representing null.
 */
interface NullValue {
}

/**
 * A parameter value type that is a String.
 */
type StringValue = string;

/**
 * A parameter value type that is a Timestamp.
 */
type TimestampValue = string;

interface PrimaryKeyValue_boolean {
    type: "boolean";
    boolean: BooleanValue;
}
interface PrimaryKeyValue_integer {
    type: "integer";
    integer: IntegerValue;
}
interface PrimaryKeyValue_long {
    type: "long";
    long: LongValue;
}
interface PrimaryKeyValue_double {
    type: "double";
    double: DoubleValue;
}
interface PrimaryKeyValue_string {
    type: "string";
    string: StringValue;
}
interface PrimaryKeyValue_date {
    type: "date";
    date: DateValue;
}
interface PrimaryKeyValue_timestamp {
    type: "timestamp";
    timestamp: TimestampValue;
}
type PrimaryKeyValue = PrimaryKeyValue_boolean | PrimaryKeyValue_integer | PrimaryKeyValue_long | PrimaryKeyValue_double | PrimaryKeyValue_string | PrimaryKeyValue_date | PrimaryKeyValue_timestamp;

type ObjectPrimaryKey = Record<PropertyTypeId, PrimaryKeyValue>;

interface ObjectLocator {
    objectTypeId: ObjectTypeId;
    primaryKey: ObjectPrimaryKey;
}

/**
 * A parameter value type that consists of a list of ObjectLocators.
 */
interface ObjectLocatorListValue {
    objectLocatorList: Array<ObjectLocator>;
}

/**
 * A parameter value type that is an ObjectLocator.
 */
type ObjectLocatorValue = ObjectLocator;

/**
 * A parameter value that references a specific object type.
 */
interface ObjectTypeValue {
    objectTypeId: ObjectTypeId;
}

/**
 * A parameter value type that consists of a list of Strings.
 */
interface StringListValue {
    strings: Array<string>;
}

interface StructFieldDataValue_boolean {
    type: "boolean";
    boolean: BooleanValue;
}
interface StructFieldDataValue_integer {
    type: "integer";
    integer: IntegerValue;
}
interface StructFieldDataValue_long {
    type: "long";
    long: LongValue;
}
interface StructFieldDataValue_double {
    type: "double";
    double: DoubleValue;
}
interface StructFieldDataValue_string {
    type: "string";
    string: StringValue;
}
interface StructFieldDataValue_date {
    type: "date";
    date: DateValue;
}
interface StructFieldDataValue_geohash {
    type: "geohash";
    geohash: GeohashValue;
}
interface StructFieldDataValue_timestamp {
    type: "timestamp";
    timestamp: TimestampValue;
}
interface StructFieldDataValue_null {
    type: "null";
    null: NullValue;
}
/**
 * DataValue types that are allowed as struct parameter field. Each struct field in a struct parameter is mapped
 * mapped to a StructFieldDataValue. See StructFieldBaseParameterType for which types are supported for struct
 * parameter fields.
 */
type StructFieldDataValue = StructFieldDataValue_boolean | StructFieldDataValue_integer | StructFieldDataValue_long | StructFieldDataValue_double | StructFieldDataValue_string | StructFieldDataValue_date | StructFieldDataValue_geohash | StructFieldDataValue_timestamp | StructFieldDataValue_null;

/**
 * An API name that identifies a struct field in a struct parameter.
 */
type StructParameterFieldApiName = string;

/**
 * A struct field of a struct parameter.
 */
interface StructParameterField {
    structFieldApiName: StructParameterFieldApiName;
    structFieldDataValue: StructFieldDataValue;
}

/**
 * A parameter type that consists of a Struct.
 */
interface StructValue {
    structFields: Array<StructParameterField>;
}

/**
 * A parameter type that consists of a list of Structs.
 */
interface StructListValue {
    structs: Array<StructValue>;
}

/**
 * Codex seriesId.
 */
type SeriesIdPropertyValue = string;

/**
 * An rid identifying a time series sync. This rid is a randomly generated identifier and is safe to log.
 */
type TimeSeriesSyncRid = string;

/**
 * Codex seriesId qualified with a time series syncRid
 */
interface QualifiedSeriesIdPropertyValue {
    seriesId: SeriesIdPropertyValue;
    syncRid: TimeSeriesSyncRid;
}

/**
 * A unique identifier of a codex template and optionally a codex template version which resolves to a derived
 * series. If no version is provided, the latest version is used.
 */
interface TemplateRidPropertyValue {
    templateRid: string;
    templateVersion: string | undefined;
}

interface TimeDependentPropertyValue_seriesId {
    type: "seriesId";
    seriesId: SeriesIdPropertyValue;
}
interface TimeDependentPropertyValue_templateRid {
    type: "templateRid";
    templateRid: TemplateRidPropertyValue;
}
interface TimeDependentPropertyValue_qualifiedSeriesId {
    type: "qualifiedSeriesId";
    qualifiedSeriesId: QualifiedSeriesIdPropertyValue;
}
/**
 * Identifies a time series in codex.
 * The qualifiedSeriesId variant should be used when there are multiple time series datasources backing this
 * property value (and therefore we need to specify which one to qualify with).
 */
type TimeDependentPropertyValue = TimeDependentPropertyValue_seriesId | TimeDependentPropertyValue_templateRid | TimeDependentPropertyValue_qualifiedSeriesId;

/**
 * A parameter type that consists of a TimeDependentPropertyValue.
 */
interface TimeSeriesReferenceValue {
    timeSeriesReference: TimeDependentPropertyValue;
}

/**
 * A parameter value type that consists of a list of Timestamps.
 */
interface TimestampListValue {
    timestamps: Array<string>;
}

interface DataValue_boolean {
    type: "boolean";
    boolean: BooleanValue;
}
interface DataValue_booleanList {
    type: "booleanList";
    booleanList: BooleanListValue;
}
interface DataValue_integer {
    type: "integer";
    integer: IntegerValue;
}
interface DataValue_integerList {
    type: "integerList";
    integerList: IntegerListValue;
}
interface DataValue_long {
    type: "long";
    long: LongValue;
}
interface DataValue_longList {
    type: "longList";
    longList: LongListValue;
}
interface DataValue_double {
    type: "double";
    double: DoubleValue;
}
interface DataValue_doubleList {
    type: "doubleList";
    doubleList: DoubleListValue;
}
interface DataValue_string {
    type: "string";
    string: StringValue;
}
interface DataValue_stringList {
    type: "stringList";
    stringList: StringListValue;
}
interface DataValue_date {
    type: "date";
    date: DateValue;
}
interface DataValue_dateList {
    type: "dateList";
    dateList: DateListValue;
}
interface DataValue_geohash {
    type: "geohash";
    geohash: GeohashValue;
}
interface DataValue_geohashList {
    type: "geohashList";
    geohashList: GeohashListValue;
}
interface DataValue_geoshape {
    type: "geoshape";
    geoshape: GeoshapeValue;
}
interface DataValue_geoshapeList {
    type: "geoshapeList";
    geoshapeList: GeoshapeListValue;
}
interface DataValue_timeSeriesReference {
    type: "timeSeriesReference";
    timeSeriesReference: TimeSeriesReferenceValue;
}
interface DataValue_timestamp {
    type: "timestamp";
    timestamp: TimestampValue;
}
interface DataValue_timestampList {
    type: "timestampList";
    timestampList: TimestampListValue;
}
interface DataValue_null {
    type: "null";
    null: NullValue;
}
interface DataValue_objectLocator {
    type: "objectLocator";
    objectLocator: ObjectLocatorValue;
}
interface DataValue_objectLocatorList {
    type: "objectLocatorList";
    objectLocatorList: ObjectLocatorListValue;
}
interface DataValue_objectType {
    type: "objectType";
    objectType: ObjectTypeValue;
}
interface DataValue_attachment {
    type: "attachment";
    attachment: AttachmentValue;
}
interface DataValue_attachmentList {
    type: "attachmentList";
    attachmentList: AttachmentListValue;
}
interface DataValue_marking {
    type: "marking";
    marking: MarkingValue;
}
interface DataValue_markingList {
    type: "markingList";
    markingList: MarkingListValue;
}
interface DataValue_mediaReference {
    type: "mediaReference";
    mediaReference: MediaReferenceValue;
}
interface DataValue_mediaReferenceList {
    type: "mediaReferenceList";
    mediaReferenceList: MediaReferenceListValue;
}
interface DataValue_geotimeSeriesReference {
    type: "geotimeSeriesReference";
    geotimeSeriesReference: GeotimeSeriesReferenceValue;
}
interface DataValue_geotimeSeriesReferenceList {
    type: "geotimeSeriesReferenceList";
    geotimeSeriesReferenceList: GeotimeSeriesReferenceListValue;
}
interface DataValue_struct {
    type: "struct";
    struct: StructValue;
}
interface DataValue_structList {
    type: "structList";
    structList: StructListValue;
}
type DataValue = DataValue_boolean | DataValue_booleanList | DataValue_integer | DataValue_integerList | DataValue_long | DataValue_longList | DataValue_double | DataValue_doubleList | DataValue_string | DataValue_stringList | DataValue_date | DataValue_dateList | DataValue_geohash | DataValue_geohashList | DataValue_geoshape | DataValue_geoshapeList | DataValue_timeSeriesReference | DataValue_timestamp | DataValue_timestampList | DataValue_null | DataValue_objectLocator | DataValue_objectLocatorList | DataValue_objectType | DataValue_attachment | DataValue_attachmentList | DataValue_marking | DataValue_markingList | DataValue_mediaReference | DataValue_mediaReferenceList | DataValue_geotimeSeriesReference | DataValue_geotimeSeriesReferenceList | DataValue_struct | DataValue_structList;

type StaticValue = DataValue;

/**
 * An auto generated UUID will be used for this value.
 */
interface UniqueIdentifier {
    linkId: string | undefined;
}

/**
 * Name of a parameter output to a Webhook. Not safe to log.
 */
type WebhookOutputParamName = string;

interface LogicRuleValue_parameterId {
    type: "parameterId";
    parameterId: ParameterId;
}
interface LogicRuleValue_staticValue {
    type: "staticValue";
    staticValue: StaticValue;
}
interface LogicRuleValue_objectParameterPropertyValue {
    type: "objectParameterPropertyValue";
    objectParameterPropertyValue: ObjectParameterPropertyValue;
}
interface LogicRuleValue_interfaceParameterPropertyValue {
    type: "interfaceParameterPropertyValue";
    interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}
interface LogicRuleValue_currentUser {
    type: "currentUser";
    currentUser: CurrentUser;
}
interface LogicRuleValue_currentTime {
    type: "currentTime";
    currentTime: CurrentTime;
}
interface LogicRuleValue_uniqueIdentifier {
    type: "uniqueIdentifier";
    uniqueIdentifier: UniqueIdentifier;
}
interface LogicRuleValue_synchronousWebhookOutput {
    type: "synchronousWebhookOutput";
    synchronousWebhookOutput: WebhookOutputParamName;
}
/**
 * These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
 * effects.
 */
type LogicRuleValue = LogicRuleValue_parameterId | LogicRuleValue_staticValue | LogicRuleValue_objectParameterPropertyValue | LogicRuleValue_interfaceParameterPropertyValue | LogicRuleValue_currentUser | LogicRuleValue_currentTime | LogicRuleValue_uniqueIdentifier | LogicRuleValue_synchronousWebhookOutput;

interface StructListParameterFieldValue {
    parameterId: ParameterId;
    structFieldApiName: StructParameterFieldApiName;
}

interface StructParameterFieldValue {
    parameterId: ParameterId;
    structFieldApiName: StructParameterFieldApiName;
}

interface StructFieldLogicRuleValue_structParameterFieldValue {
    type: "structParameterFieldValue";
    structParameterFieldValue: StructParameterFieldValue;
}
interface StructFieldLogicRuleValue_structListParameterFieldValue {
    type: "structListParameterFieldValue";
    structListParameterFieldValue: StructListParameterFieldValue;
}
/**
 * LogicRuleValues that are allowed for struct fields.
 */
type StructFieldLogicRuleValue = StructFieldLogicRuleValue_structParameterFieldValue | StructFieldLogicRuleValue_structListParameterFieldValue;

interface AddInterfaceRule {
    interfaceTypeRid: InterfaceTypeRid;
    objectType: ParameterId;
    sharedPropertyValues: Record<SharedPropertyTypeRid, LogicRuleValue>;
    structFieldValues: Record<SharedPropertyTypeRid, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}

interface AddLinkRule {
    linkTypeId: LinkTypeId;
    sourceObject: ParameterId;
    targetObject: ParameterId;
}

interface AddObjectRule {
    objectTypeId: ObjectTypeId;
    propertyValues: Record<PropertyTypeId, LogicRuleValue>;
    structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}

interface AddOrModifyObjectRule {
    objectTypeId: ObjectTypeId;
    propertyValues: Record<PropertyTypeId, LogicRuleValue>;
    structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}

interface AddOrModifyObjectRuleV2 {
    objectToModify: ParameterId;
    propertyValues: Record<PropertyTypeId, LogicRuleValue>;
    structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}

/**
 * Name of an Input to a Function. Not safe to log.
 */
type FunctionInputName = string;

interface ExperimentalDeclarativeEditInformation {
    objectSetRidParameter: FunctionInputName;
}

/**
 * The rid for a Function. Safe to log.
 */
type FunctionRid = string;

interface BulkExecutionModeConfig {
    bulkFunctionInputName: FunctionInputName;
}

interface FunctionRuleCustomExecutionMode_bulkExecutionModeConfig {
    type: "bulkExecutionModeConfig";
    bulkExecutionModeConfig: BulkExecutionModeConfig;
}
type FunctionRuleCustomExecutionMode = FunctionRuleCustomExecutionMode_bulkExecutionModeConfig;

/**
 * The version of a Function. Not safe to log.
 */
type FunctionVersion = string;

/**
 * A Function to be executed with action input parameters.
 */
interface FunctionRule {
    functionRid: FunctionRid;
    functionVersion: FunctionVersion;
    functionInputValues: Record<FunctionInputName, LogicRuleValue>;
    customExecutionMode: FunctionRuleCustomExecutionMode | undefined;
    experimentalDeclarativeEditInformation: ExperimentalDeclarativeEditInformation | undefined;
}

interface BatchedFunctionRule {
    objectSetRidInputName: FunctionInputName;
    functionDetails: FunctionRule;
}

interface DeleteInterfaceLinkRule {
    interfaceTypeRid: InterfaceTypeRid;
    interfaceLinkTypeRid: InterfaceLinkTypeRid;
    sourceObject: ParameterId;
    targetObject: ParameterId;
}

interface DeleteLinkRule {
    linkTypeId: LinkTypeId;
    sourceObject: ParameterId;
    targetObject: ParameterId;
}

interface DeleteObjectRule {
    objectToDelete: ParameterId;
}

interface ModifyInterfaceRule {
    interfaceObjectToModify: ParameterId;
    sharedPropertyValues: Record<SharedPropertyTypeRid, LogicRuleValue>;
    structFieldValues: Record<SharedPropertyTypeRid, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}

interface ModifyObjectRule {
    objectToModify: ParameterId;
    propertyValues: Record<PropertyTypeId, LogicRuleValue>;
    structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}

interface LogicRule_addObjectRule {
    type: "addObjectRule";
    addObjectRule: AddObjectRule;
}
interface LogicRule_addOrModifyObjectRule {
    type: "addOrModifyObjectRule";
    addOrModifyObjectRule: AddOrModifyObjectRule;
}
interface LogicRule_addOrModifyObjectRuleV2 {
    type: "addOrModifyObjectRuleV2";
    addOrModifyObjectRuleV2: AddOrModifyObjectRuleV2;
}
interface LogicRule_modifyObjectRule {
    type: "modifyObjectRule";
    modifyObjectRule: ModifyObjectRule;
}
interface LogicRule_deleteObjectRule {
    type: "deleteObjectRule";
    deleteObjectRule: DeleteObjectRule;
}
interface LogicRule_addInterfaceRule {
    type: "addInterfaceRule";
    addInterfaceRule: AddInterfaceRule;
}
interface LogicRule_modifyInterfaceRule {
    type: "modifyInterfaceRule";
    modifyInterfaceRule: ModifyInterfaceRule;
}
interface LogicRule_addLinkRule {
    type: "addLinkRule";
    addLinkRule: AddLinkRule;
}
interface LogicRule_deleteLinkRule {
    type: "deleteLinkRule";
    deleteLinkRule: DeleteLinkRule;
}
interface LogicRule_addInterfaceLinkRule {
    type: "addInterfaceLinkRule";
    addInterfaceLinkRule: AddInterfaceLinkRule;
}
interface LogicRule_deleteInterfaceLinkRule {
    type: "deleteInterfaceLinkRule";
    deleteInterfaceLinkRule: DeleteInterfaceLinkRule;
}
interface LogicRule_functionRule {
    type: "functionRule";
    functionRule: FunctionRule;
}
interface LogicRule_batchedFunctionRule {
    type: "batchedFunctionRule";
    batchedFunctionRule: BatchedFunctionRule;
}
type LogicRule = LogicRule_addObjectRule | LogicRule_addOrModifyObjectRule | LogicRule_addOrModifyObjectRuleV2 | LogicRule_modifyObjectRule | LogicRule_deleteObjectRule | LogicRule_addInterfaceRule | LogicRule_modifyInterfaceRule | LogicRule_addLinkRule | LogicRule_deleteLinkRule | LogicRule_addInterfaceLinkRule | LogicRule_deleteInterfaceLinkRule | LogicRule_functionRule | LogicRule_batchedFunctionRule;

/**
 * The ActionLogic in an ActionType map the Parameters to what edits should be made in Phonograph. It employs
 * LogicRules for the core Action logic and, optionally, an ActionLogRule for capturing a record of the Action
 * execution. We don't allow the mixing of FunctionRule with other LogicRules in the same ActionType.
 */
interface ActionLogic {
    rules: Array<LogicRule>;
    actionLogRule: ActionLogRule | undefined;
}

/**
 * The representation of a notification's recipient.
 */
interface NotificationRecipient {
}

interface FunctionExecutionWithRecipientInput_logicRuleValue {
    type: "logicRuleValue";
    logicRuleValue: LogicRuleValue;
}
interface FunctionExecutionWithRecipientInput_recipient {
    type: "recipient";
    recipient: NotificationRecipient;
}
/**
 * Encapsulates either a LogicRuleValue or a NotificationRecipient.
 */
type FunctionExecutionWithRecipientInput = FunctionExecutionWithRecipientInput_logicRuleValue | FunctionExecutionWithRecipientInput_recipient;

/**
 * A Function to be executed with action input parameters or the recipient of the notification.
 */
interface ActionNotificationBodyFunctionExecution {
    functionRid: FunctionRid;
    functionVersion: FunctionVersion;
    functionInputValues: Record<FunctionInputName, FunctionExecutionWithRecipientInput>;
}

/**
 * The body of a notification based on the result of a function execution.
 */
interface FunctionGeneratedNotificationBody {
    functionExecution: ActionNotificationBodyFunctionExecution;
}

/**
 * A URL target for a Foundry rid with query params.
 */
interface RidUrlTarget {
    rid: LogicRuleValue;
    queryParams: Record<string, LogicRuleValue>;
}

interface CarbonWorkspaceComponentUrlTarget_rid {
    type: "rid";
    rid: RidUrlTarget;
}
/**
 * The second part of a carbon workspace Url target.
 */
type CarbonWorkspaceComponentUrlTarget = CarbonWorkspaceComponentUrlTarget_rid;

/**
 * A URL target for a carbon workspace.
 */
interface CarbonWorkspaceUrlTarget {
    resource: CarbonWorkspaceComponentUrlTarget | undefined;
}

/**
 * The id for a Property.
 */
type PropertyId = string;

/**
 * A URL target for a newly created object.
 */
interface NewObjectUrlTarget {
    objectTypeId: ObjectTypeId;
    keys: Record<PropertyId, LogicRuleValue>;
}

interface UrlTarget_logicRuleValue {
    type: "logicRuleValue";
    logicRuleValue: LogicRuleValue;
}
interface UrlTarget_rid {
    type: "rid";
    rid: RidUrlTarget;
}
interface UrlTarget_relativeUrlString {
    type: "relativeUrlString";
    relativeUrlString: string;
}
interface UrlTarget_newObject {
    type: "newObject";
    newObject: NewObjectUrlTarget;
}
interface UrlTarget_carbonWorkspace {
    type: "carbonWorkspace";
    carbonWorkspace: CarbonWorkspaceUrlTarget;
}
/**
 * The target for generating a URL.
 */
type UrlTarget = UrlTarget_logicRuleValue | UrlTarget_rid | UrlTarget_relativeUrlString | UrlTarget_newObject | UrlTarget_carbonWorkspace;

interface NotificationResultTypeLink {
    url: UrlTarget;
    message: string;
}

/**
 * A basic action notification's email body. Uses Handlebars templating.
 */
interface BasicEmailBody {
    subject: string;
    emailContent: string;
    links: Array<NotificationResultTypeLink>;
}

interface EmailBody_basic {
    type: "basic";
    basic: BasicEmailBody;
}
/**
 * An action notification's email body. Uses Handlebars templating.
 */
type EmailBody = EmailBody_basic;

/**
 * Represents a Handlebars template input value name. This value should only contain alphanumeric characters,
 * should contain at most 100 characters, and is case sensitive.
 */
type HandlebarsInputName = string;

/**
 * A value related to a user.
 */
type UserValue = "USERNAME" | "FIRST_NAME" | "LAST_NAME";

interface NotificationTemplateInputValue_logicRuleValue {
    type: "logicRuleValue";
    logicRuleValue: LogicRuleValue;
}
interface NotificationTemplateInputValue_recipientValue {
    type: "recipientValue";
    recipientValue: UserValue;
}
interface NotificationTemplateInputValue_actionTriggererValue {
    type: "actionTriggererValue";
    actionTriggererValue: UserValue;
}
/**
 * All the types that can be used as a value for a Notification template's inputs.
 */
type NotificationTemplateInputValue = NotificationTemplateInputValue_logicRuleValue | NotificationTemplateInputValue_recipientValue | NotificationTemplateInputValue_actionTriggererValue;

/**
 * An action notification's structured short body.
 */
interface StructuredShortBody {
    heading: string;
    content: string;
    links: Array<NotificationResultTypeLink>;
}

interface ShortBody_basic {
    type: "basic";
    basic: StructuredShortBody;
}
/**
 * An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
 * templating.
 */
type ShortBody = ShortBody_basic;

/**
 * The body of a notification based on a template.
 */
interface TemplateNotificationBody {
    inputs: Record<HandlebarsInputName, NotificationTemplateInputValue>;
    emailBody: EmailBody;
    shortBody: ShortBody;
}

interface ActionNotificationBody_templateNotification {
    type: "templateNotification";
    templateNotification: TemplateNotificationBody;
}
interface ActionNotificationBody_functionGenerated {
    type: "functionGenerated";
    functionGenerated: FunctionGeneratedNotificationBody;
}
/**
 * The body of an action's notification
 */
type ActionNotificationBody = ActionNotificationBody_templateNotification | ActionNotificationBody_functionGenerated;

/**
 * Notification recipients determined from a Function execution.
 */
interface FunctionGeneratedActionNotificationRecipients {
    functionExecution: FunctionRule;
}

/**
 * Notification recipients determined from Action's inputs.
 */
interface ParameterActionNotificationRecipients {
    principalIds: LogicRuleValue;
}

interface ActionNotificationRecipients_parameter {
    type: "parameter";
    parameter: ParameterActionNotificationRecipients;
}
interface ActionNotificationRecipients_functionGenerated {
    type: "functionGenerated";
    functionGenerated: FunctionGeneratedActionNotificationRecipients;
}
/**
 * A notification's recipients.
 */
type ActionNotificationRecipients = ActionNotificationRecipients_parameter | ActionNotificationRecipients_functionGenerated;

/**
 * A notification that will be triggered on successful completion of an action.
 */
interface ActionNotification {
    toRecipients: ActionNotificationRecipients;
    body: ActionNotificationBody;
}

type TemporalUnit = "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK";

interface Duration {
    value: number;
    unit: TemporalUnit;
}

/**
 * Configurations for allowing the original action applier to revert the action.
 */
interface ActionApplierRevertConfig {
    withinDuration: Duration | undefined;
}

interface ActionRevertEnabledFor_actionApplier {
    type: "actionApplier";
    actionApplier: ActionApplierRevertConfig;
}
type ActionRevertEnabledFor = ActionRevertEnabledFor_actionApplier;

/**
 * This provides the conditions under which the Action Type can be reverted. Note that matching one of these
 * conditions is necessary but not sufficient for an action to be reverted, as it is also required that none of
 * the modified entities have received further edits after the action was applied.
 *
 * The list of conditions is not permitted to be empty, and any such modifications will fail.
 */
interface ActionRevert {
    enabledFor: Array<ActionRevertEnabledFor>;
}

/**
 * The postition of the condition in an AND or OR condition set. Zero based.
 */
type ConditionIndex = number;

/**
 * Condititon Display Metadata. This is used in rendering the conditions in display.
 */
interface ConditionDisplayMetadata {
    index: ConditionIndex;
}

interface AndCondition$1 {
    conditions: Array<Condition$1>;
    displayMetadata: ConditionDisplayMetadata | undefined;
}

type ComparisonOperator = "LESS_THAN_EQUALS" | "LESS_THAN" | "EQUALS" | "NOT_EQUALS" | "GREATER_THAN_EQUALS" | "GREATER_THAN" | "INTERSECTS" | "IS_OF_OBJECT_TYPE";

interface ParameterLength_parameterId {
    type: "parameterId";
    parameterId: ParameterId;
}
/**
 * This is used to inspect the size of collection types.
 */
type ParameterLength = ParameterLength_parameterId;

interface UserPropertyId_currentUser {
    type: "currentUser";
    currentUser: Empty;
}
type UserPropertyId = UserPropertyId_currentUser;

/**
 * The user's attributes
 */
interface UserAttributes {
    attributeKey: string;
}

interface UserPropertyValue_userId {
    type: "userId";
    userId: Empty;
}
interface UserPropertyValue_groupIds {
    type: "groupIds";
    groupIds: Empty;
}
interface UserPropertyValue_userName {
    type: "userName";
    userName: Empty;
}
interface UserPropertyValue_groupNames {
    type: "groupNames";
    groupNames: Empty;
}
interface UserPropertyValue_userAttributes {
    type: "userAttributes";
    userAttributes: UserAttributes;
}
interface UserPropertyValue_organizationMarkingIds {
    type: "organizationMarkingIds";
    organizationMarkingIds: Empty;
}
type UserPropertyValue = UserPropertyValue_userId | UserPropertyValue_groupIds | UserPropertyValue_userName | UserPropertyValue_groupNames | UserPropertyValue_userAttributes | UserPropertyValue_organizationMarkingIds;

interface UserProperty {
    userId: UserPropertyId;
    propertyValue: UserPropertyValue;
}

interface ConditionValue_parameterId {
    type: "parameterId";
    parameterId: ParameterId;
}
interface ConditionValue_staticValue {
    type: "staticValue";
    staticValue: StaticValue;
}
interface ConditionValue_objectParameterPropertyValue {
    type: "objectParameterPropertyValue";
    objectParameterPropertyValue: ObjectParameterPropertyValue;
}
interface ConditionValue_interfaceParameterPropertyValue {
    type: "interfaceParameterPropertyValue";
    interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}
interface ConditionValue_userProperty {
    type: "userProperty";
    userProperty: UserProperty;
}
interface ConditionValue_parameterLength {
    type: "parameterLength";
    parameterLength: ParameterLength;
}
type ConditionValue = ConditionValue_parameterId | ConditionValue_staticValue | ConditionValue_objectParameterPropertyValue | ConditionValue_interfaceParameterPropertyValue | ConditionValue_userProperty | ConditionValue_parameterLength;

interface ComparisonCondition {
    operator: ComparisonOperator;
    left: ConditionValue;
    right: ConditionValue;
    displayMetadata: ConditionDisplayMetadata | undefined;
}

/**
 * The type of user markings to use in the markings condition check. This can be the users CBAC or
 * MANDATORY markings.
 */
interface MarkingTypesFilter {
    markingTypes: Array<MarkingType$1>;
}

interface MarkingFilter_markingTypes {
    type: "markingTypes";
    markingTypes: MarkingTypesFilter;
}
/**
 * A filter on what user markings to process in the Marking condition.
 */
type MarkingFilter = MarkingFilter_markingTypes;

/**
 * True if the user satisfies the markings represented by the value field.
 * This follows com.palantir.gps.api.policy.MarkingsCondition
 */
interface MarkingsCondition {
    value: ConditionValue;
    filters: MarkingFilter;
    displayMetadata: ConditionDisplayMetadata | undefined;
}

interface NotCondition$1 {
    condition: Condition$1;
    displayMetadata: ConditionDisplayMetadata | undefined;
}

interface OrCondition$1 {
    conditions: Array<Condition$1>;
    displayMetadata: ConditionDisplayMetadata | undefined;
}

/**
 * The user does not have permission to view this part of the Action Type.
 */
interface Redacted {
}

interface RegexCondition {
    value: ConditionValue;
    regex: string;
    displayMetadata: ConditionDisplayMetadata | undefined;
}

interface TrueCondition {
    displayMetadata: ConditionDisplayMetadata | undefined;
}

interface Condition_true {
    type: "true";
    true: TrueCondition;
}
interface Condition_or$1 {
    type: "or";
    or: OrCondition$1;
}
interface Condition_and$1 {
    type: "and";
    and: AndCondition$1;
}
interface Condition_not$1 {
    type: "not";
    not: NotCondition$1;
}
interface Condition_comparison {
    type: "comparison";
    comparison: ComparisonCondition;
}
interface Condition_markings {
    type: "markings";
    markings: MarkingsCondition;
}
interface Condition_regex {
    type: "regex";
    regex: RegexCondition;
}
interface Condition_redacted {
    type: "redacted";
    redacted: Redacted;
}
type Condition$1 = Condition_true | Condition_or$1 | Condition_and$1 | Condition_not$1 | Condition_comparison | Condition_markings | Condition_regex | Condition_redacted;

interface ValidationRuleDisplayMetadata {
    failureMessage: string;
    typeClasses: Array<TypeClass>;
}

interface ValidationRule {
    displayMetadata: ValidationRuleDisplayMetadata;
    condition: Condition$1;
}

type ValidationRuleRid = string;

interface ActionTypeLevelValidation {
    rules: Record<ValidationRuleRid, ValidationRule>;
    ordering: Array<ValidationRuleRid>;
}

interface MustBeEmpty {
}

interface ParameterAttachment {
    maxSizeBytes: number | undefined;
}

interface ParameterAttachmentOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterAttachmentOrEmpty_attachment {
    type: "attachment";
    attachment: ParameterAttachment;
}
type ParameterAttachmentOrEmpty = ParameterAttachmentOrEmpty_empty | ParameterAttachmentOrEmpty_attachment;

interface ParameterBoolean {
}

interface ParameterBooleanOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterBooleanOrEmpty_boolean {
    type: "boolean";
    boolean: ParameterBoolean;
}
type ParameterBooleanOrEmpty = ParameterBooleanOrEmpty_empty | ParameterBooleanOrEmpty_boolean;

/**
 * Contains a non-empty MarkingList Value that represent the max classification of this parameter.
 * It must be present and must contain a valid set of cbac markings.
 */
interface ParameterCbacConstraint {
    markingsValue: ConditionValue | undefined;
}

interface ParameterCbacMarking {
    classificationConstraint: ParameterCbacConstraint | undefined;
}

interface ParameterCbacMarkingOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterCbacMarkingOrEmpty_cbacMarking {
    type: "cbacMarking";
    cbacMarking: ParameterCbacMarking;
}
/**
 * Allows values that satisfy the cbacMarking max classification. If empty, it will only allow empty values.
 */
type ParameterCbacMarkingOrEmpty = ParameterCbacMarkingOrEmpty_empty | ParameterCbacMarkingOrEmpty_cbacMarking;

type RelativeDateRangeTense = "FUTURE" | "PAST";

interface RelativeDateRangeValue {
    duration: number;
    unit: TemporalUnit;
    tense: RelativeDateRangeTense;
}

interface NowValue {
}

interface DateRangeValue_fixed {
    type: "fixed";
    fixed: ConditionValue;
}
interface DateRangeValue_relative {
    type: "relative";
    relative: RelativeDateRangeValue;
}
interface DateRangeValue_now {
    type: "now";
    now: NowValue;
}
type DateRangeValue = DateRangeValue_fixed | DateRangeValue_relative | DateRangeValue_now;

interface ParameterDateRangeValue {
    value: DateRangeValue;
    inclusive: boolean;
}

interface ParameterDateTimeRange {
    minimum: ParameterDateRangeValue | undefined;
    maximum: ParameterDateRangeValue | undefined;
}

interface ParameterDateTimeRangeOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterDateTimeRangeOrEmpty_datetime {
    type: "datetime";
    datetime: ParameterDateTimeRange;
}
type ParameterDateTimeRangeOrEmpty = ParameterDateTimeRangeOrEmpty_empty | ParameterDateTimeRangeOrEmpty_datetime;

interface ParameterTextRegex {
    regex: string;
    failureMessage: string;
}

interface ParameterFreeText {
    minLength: number | undefined;
    maxLength: number | undefined;
    regex: ParameterTextRegex | undefined;
}

interface ParameterFreeTextOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterFreeTextOrEmpty_text {
    type: "text";
    text: ParameterFreeText;
}
type ParameterFreeTextOrEmpty = ParameterFreeTextOrEmpty_empty | ParameterFreeTextOrEmpty_text;

interface ParameterGeohash {
}

interface ParameterGeohashOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterGeohashOrEmpty_geohash {
    type: "geohash";
    geohash: ParameterGeohash;
}
type ParameterGeohashOrEmpty = ParameterGeohashOrEmpty_empty | ParameterGeohashOrEmpty_geohash;

interface ParameterGeoshape {
}

interface ParameterGeoshapeOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterGeoshapeOrEmpty_geoshape {
    type: "geoshape";
    geoshape: ParameterGeoshape;
}
type ParameterGeoshapeOrEmpty = ParameterGeoshapeOrEmpty_empty | ParameterGeoshapeOrEmpty_geoshape;

interface ParameterGeotimeSeriesReference {
}

interface ParameterGeotimeSeriesReferenceOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterGeotimeSeriesReferenceOrEmpty_geotimeSeries {
    type: "geotimeSeries";
    geotimeSeries: ParameterGeotimeSeriesReference;
}
type ParameterGeotimeSeriesReferenceOrEmpty = ParameterGeotimeSeriesReferenceOrEmpty_empty | ParameterGeotimeSeriesReferenceOrEmpty_geotimeSeries;

/**
 * This is a WIP and will be extended to only allow objects in a dynamic interface object set once interfaces
 * are supported in OSS.
 */
interface ParameterInterfaceObjectQuery {
}

interface ParameterInterfaceObjectQueryOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterInterfaceObjectQueryOrEmpty_interfaceObjectQuery {
    type: "interfaceObjectQuery";
    interfaceObjectQuery: ParameterInterfaceObjectQuery;
}
/**
 * [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
 * values.
 */
type ParameterInterfaceObjectQueryOrEmpty = ParameterInterfaceObjectQueryOrEmpty_empty | ParameterInterfaceObjectQueryOrEmpty_interfaceObjectQuery;

/**
 * This is a temporary type and will only be supported for a short time until interfaces are available in OSS.
 */
interface UnrestrictedParameterInterfacePropertyValue {
}

interface ParameterInterfacePropertyValueOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterInterfacePropertyValueOrEmpty_unrestricted {
    type: "unrestricted";
    unrestricted: UnrestrictedParameterInterfacePropertyValue;
}
/**
 * [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
 * values.
 */
type ParameterInterfacePropertyValueOrEmpty = ParameterInterfacePropertyValueOrEmpty_empty | ParameterInterfacePropertyValueOrEmpty_unrestricted;

interface ParameterMandatoryMarking {
}

interface ParameterMandatoryMarkingOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterMandatoryMarkingOrEmpty_mandatoryMarking {
    type: "mandatoryMarking";
    mandatoryMarking: ParameterMandatoryMarking;
}
type ParameterMandatoryMarkingOrEmpty = ParameterMandatoryMarkingOrEmpty_empty | ParameterMandatoryMarkingOrEmpty_mandatoryMarking;

interface ParameterMediaReference {
}

interface ParameterMediaReferenceOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterMediaReferenceOrEmpty_mediaReference {
    type: "mediaReference";
    mediaReference: ParameterMediaReference;
}
type ParameterMediaReferenceOrEmpty = ParameterMediaReferenceOrEmpty_empty | ParameterMediaReferenceOrEmpty_mediaReference;

interface ParameterMultipassGroup {
}

interface ParameterMultipassGroupOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterMultipassGroupOrEmpty_group {
    type: "group";
    group: ParameterMultipassGroup;
}
type ParameterMultipassGroupOrEmpty = ParameterMultipassGroupOrEmpty_empty | ParameterMultipassGroupOrEmpty_group;

interface MultipassUserInGroupFilter {
    groupId: ConditionValue;
}

interface MultipassUserFilter_groupFilter {
    type: "groupFilter";
    groupFilter: MultipassUserInGroupFilter;
}
type MultipassUserFilter = MultipassUserFilter_groupFilter;

interface ParameterMultipassUser {
    filter: Array<MultipassUserFilter>;
}

interface ParameterMultipassUserOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterMultipassUserOrEmpty_user {
    type: "user";
    user: ParameterMultipassUser;
}
type ParameterMultipassUserOrEmpty = ParameterMultipassUserOrEmpty_empty | ParameterMultipassUserOrEmpty_user;

interface ParameterObjectList {
}

interface ParameterObjectListOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterObjectListOrEmpty_objectList {
    type: "objectList";
    objectList: ParameterObjectList;
}
type ParameterObjectListOrEmpty = ParameterObjectListOrEmpty_empty | ParameterObjectListOrEmpty_objectList;

/**
 * Depicts an ObjectSet with all objects of this ObjectType
 */
interface DynamicObjectSetInputBase {
    objectTypeId: ObjectTypeId;
}

/**
 * A parameter holding an ObjectReference or ObjectReferenceList depicting a set of the specified Object(s).
 */
interface DynamicObjectSetInputParameter {
    parameterId: ParameterId;
}

/**
 * Depicts an ObjectSet which is a union of all ObjectSets provided.
 */
interface DynamicObjectSetInputUnioned {
    dynamicObjectSets: Array<DynamicObjectSet>;
}

interface DynamicObjectSetInput_base {
    type: "base";
    base: DynamicObjectSetInputBase;
}
interface DynamicObjectSetInput_parameter {
    type: "parameter";
    parameter: DynamicObjectSetInputParameter;
}
interface DynamicObjectSetInput_unioned {
    type: "unioned";
    unioned: DynamicObjectSetInputUnioned;
}
/**
 * A wrapper used to reference an ObjectSet
 */
type DynamicObjectSetInput = DynamicObjectSetInput_base | DynamicObjectSetInput_parameter | DynamicObjectSetInput_unioned;

/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an AndFilter iff it matches all of the filters.
 */
interface AndFilter {
    filters: Array<ObjectSetFilter>;
}

/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
interface ExactMatchFilter {
    propertyId: PropertyTypeId;
    terms: Array<any>;
}

/**
 * An object matches a GeoBoundingBoxFilter iff the value of the provided property is within the provided bounds.
 * Works on geohash properties.
 */
interface GeoBoundingBoxFilter {
    propertyId: PropertyTypeId;
    topLeft: string;
    bottomRight: string;
}

type DistanceUnit = "MILLIMETER" | "CENTIMETER" | "METER" | "KILOMETER" | "INCH" | "FOOT" | "YARD" | "MILE" | "NAUTICAL_MILE";

interface Distance {
    value: number;
    unit: DistanceUnit;
}

/**
 * An object matches a GeoDistanceFilter iff the value of the provided property is within the provided distance
 * of the provided location i.e. sits within a circle centered at the provided location.
 */
interface GeoDistanceFilter {
    propertyId: PropertyTypeId;
    location: string;
    distance: Distance;
}

/**
 * An object matches a GeoPolygonFilter iff the value of the provided property is within bounds of the provided polygon.
 */
interface GeoPolygonFilter {
    propertyId: PropertyTypeId;
    polygon: Array<string>;
}

interface GeoShapeQuery_geoBoundingBoxFilter {
    type: "geoBoundingBoxFilter";
    geoBoundingBoxFilter: GeoBoundingBoxFilter;
}
interface GeoShapeQuery_geoPolygonFilter {
    type: "geoPolygonFilter";
    geoPolygonFilter: GeoPolygonFilter;
}
/**
 * Union type for valid queries over geo shape properties.
 */
type GeoShapeQuery = GeoShapeQuery_geoBoundingBoxFilter | GeoShapeQuery_geoPolygonFilter;

/**
 * Geometry operation under which to evaluate the geo shape query.
 */
type GeoShapeSpatialFilterMode = "INTERSECTS" | "DISJOINT" | "WITHIN";

/**
 * Filter properties of type geo_shape or geo_point.
 */
interface GeoShapeFilter {
    geoShapeQuery: GeoShapeQuery;
    spatialFilterMode: GeoShapeSpatialFilterMode;
}

/**
 * An object matches a HasPropertyFilter iff it has a property with the provided PropertyId.
 */
interface HasPropertyFilter {
    propertyId: PropertyTypeId;
}

/**
 * The id for a Relation or BidirectionalRelation.
 */
type RelationId = string;

/**
 * Side of a relation.
 */
type RelationSide = "SOURCE" | "TARGET" | "EITHER";

/**
 * An object matches a LinkPresenceFilter iff it contains a link to any object along the provided RelationId
 * and if the starting object is on the provided RelationSide of the relation.
 */
interface LinkPresenceFilter {
    relationId: RelationId;
    relationSide: RelationSide;
}

type MultiMatchFilterOperator = "AND" | "OR";

interface AllPropertiesPropertySet {
}

interface PropertyWhitelistPropertySet {
    properties: Array<PropertyTypeId>;
}

interface PropertySet_propertyWhitelist {
    type: "propertyWhitelist";
    propertyWhitelist: PropertyWhitelistPropertySet;
}
interface PropertySet_allProperties {
    type: "allProperties";
    allProperties: AllPropertiesPropertySet;
}
type PropertySet = PropertySet_propertyWhitelist | PropertySet_allProperties;

/**
 * An object matches a MultiMatchFilter iff any of the fields matches the query, or in the case where a
 * property whitelist is provided - iff any of the specifed fields matches the query.
 */
interface MultiMatchFilter {
    query: string;
    propertySet: PropertySet;
    fuzzy: boolean;
    operator: MultiMatchFilterOperator | undefined;
}

/**
 * An object matches a NotFilter iff it does not match the provided filter.
 */
interface NotFilter {
    filter: ObjectSetFilter;
}

/**
 * An object matches an ObjectTypeFilter iff its ObjectTypeId matches the provided ObjectTypeId.
 */
interface ObjectTypeFilter {
    objectTypeId: ObjectTypeId;
}

/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an OrFilter iff it matches at least one of the filters.
 */
interface OrFilter {
    filters: Array<ObjectSetFilter>;
}

type FilterValue = any;

interface ResolvedFilterParameter {
    value: FilterValue;
}

/**
 * An id for ConditionValues stored in ObjectSetFilters
 */
type ConditionValueId = string;

interface UnresolvedFilterParameter {
    parameterId: ConditionValueId;
    name: string;
    description: string | undefined;
    defaultValue: FilterValue | undefined;
}

interface FilterParameter_unresolved {
    type: "unresolved";
    unresolved: UnresolvedFilterParameter;
}
interface FilterParameter_resolved {
    type: "resolved";
    resolved: ResolvedFilterParameter;
}
type FilterParameter = FilterParameter_unresolved | FilterParameter_resolved;

/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
interface ParameterizedExactMatchFilter {
    propertyId: PropertyTypeId;
    terms: Array<FilterParameter>;
}

/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
interface ParameterizedRangeFilter {
    propertyId: PropertyTypeId;
    lt: FilterParameter | undefined;
    lte: FilterParameter | undefined;
    gt: FilterParameter | undefined;
    gte: FilterParameter | undefined;
}

/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
interface ParameterizedTermsFilter {
    propertyId: PropertyTypeId | undefined;
    terms: Array<FilterParameter>;
}

/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
interface ParameterizedWildcardFilter {
    propertyId: PropertyTypeId | undefined;
    term: FilterParameter;
}

/**
 * Defines how phrase search matches results.
 */
type PhraseMatchMode = "PHRASE" | "PHRASE_PREFIX";

/**
 * An object matches a PhraseFilter iff the specified phrase matches it according to the PhraseMatchMode specified.
 */
interface PhraseFilter {
    phrase: string;
    propertySet: PropertySet | undefined;
    matchMode: PhraseMatchMode | undefined;
}

/**
 * An object matches a PrefixOnLastTokenFilter iff the specified property matches all tokens in the query string,
 * using exact match for every token except for the last, and prefix match for the last token. The tokens are
 * generated by analyzing the query string using the analyzer for the property being searched on. Ordering of
 * tokens in the query string is not checked when performing the matches. If the field is not analyzed, the
 * filter will be equivalent to a Phrase filter.
 * Only works on string properties. OSS will throw an exception if the property type is not string.
 */
interface PrefixOnLastTokenFilter {
    propertyId: PropertyTypeId;
    query: string;
}

/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
interface RangeFilter {
    propertyId: PropertyTypeId;
    lt: any | undefined;
    lte: any | undefined;
    gt: any | undefined;
    gte: any | undefined;
}

type RelativeTimeUnit$1 = "DAY" | "WEEK" | "MONTH" | "YEAR";

interface RelativePointInTime$1 {
    value: number;
    timeUnit: RelativeTimeUnit$1;
}

/**
 * An identifier of a time zone, e.g. "Europe/London" as defined by the Time Zone Database.
 */
type TimeZoneId$1 = string;

/**
 * An object matches a RelativeDateRangeFilter iff the value of the provided date property is within the provided time range.
 */
interface RelativeDateRangeFilter {
    propertyId: PropertyTypeId;
    sinceRelativePointInTime: RelativePointInTime$1 | undefined;
    untilRelativePointInTime: RelativePointInTime$1 | undefined;
    timeZoneId: TimeZoneId$1;
}

/**
 * An object matches a RelativeTimeRangeFilter iff the value of the provided timestamp property is within the provided time range.
 */
interface RelativeTimeRangeFilter {
    propertyId: PropertyTypeId;
    sinceRelativeMillis: number | undefined;
    untilRelativeMillis: number | undefined;
}

/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
interface TermsFilter {
    propertyId: PropertyTypeId | undefined;
    terms: Array<any>;
}

/**
 * The current user's attributes under the given key. This resolves to a list of values.
 */
interface MultipassAttribute {
    key: string;
}

/**
 * The current user's Multipass user id.
 */
interface MultipassUserId {
}

interface UserContextValue_multipassUserId {
    type: "multipassUserId";
    multipassUserId: MultipassUserId;
}
interface UserContextValue_multipassAttribute {
    type: "multipassAttribute";
    multipassAttribute: MultipassAttribute;
}
/**
 * Represents a value that is resolved at runtime via the context of who is querying the object set.
 */
type UserContextValue = UserContextValue_multipassUserId | UserContextValue_multipassAttribute;

/**
 * An object matches an UserContextFilter iff the value of the provided property is exactly equal to the provided user context.
 */
interface UserContextFilter {
    propertyId: PropertyId;
    userContext: UserContextValue;
}

/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
interface WildcardFilter {
    propertyId: PropertyTypeId | undefined;
    term: string;
}

interface ObjectSetFilter_or {
    type: "or";
    or: OrFilter;
}
interface ObjectSetFilter_and {
    type: "and";
    and: AndFilter;
}
interface ObjectSetFilter_not {
    type: "not";
    not: NotFilter;
}
interface ObjectSetFilter_range {
    type: "range";
    range: RangeFilter;
}
interface ObjectSetFilter_wildcard {
    type: "wildcard";
    wildcard: WildcardFilter;
}
interface ObjectSetFilter_terms {
    type: "terms";
    terms: TermsFilter;
}
interface ObjectSetFilter_exactMatch {
    type: "exactMatch";
    exactMatch: ExactMatchFilter;
}
interface ObjectSetFilter_phrase {
    type: "phrase";
    phrase: PhraseFilter;
}
interface ObjectSetFilter_prefixOnLastToken {
    type: "prefixOnLastToken";
    prefixOnLastToken: PrefixOnLastTokenFilter;
}
interface ObjectSetFilter_geoBoundingBox {
    type: "geoBoundingBox";
    geoBoundingBox: GeoBoundingBoxFilter;
}
interface ObjectSetFilter_geoDistance {
    type: "geoDistance";
    geoDistance: GeoDistanceFilter;
}
interface ObjectSetFilter_geoPolygon {
    type: "geoPolygon";
    geoPolygon: GeoPolygonFilter;
}
interface ObjectSetFilter_geoShape {
    type: "geoShape";
    geoShape: GeoShapeFilter;
}
interface ObjectSetFilter_objectType {
    type: "objectType";
    objectType: ObjectTypeFilter;
}
interface ObjectSetFilter_hasProperty {
    type: "hasProperty";
    hasProperty: HasPropertyFilter;
}
interface ObjectSetFilter_linkPresence {
    type: "linkPresence";
    linkPresence: LinkPresenceFilter;
}
interface ObjectSetFilter_multiMatch {
    type: "multiMatch";
    multiMatch: MultiMatchFilter;
}
interface ObjectSetFilter_relativeDateRange {
    type: "relativeDateRange";
    relativeDateRange: RelativeDateRangeFilter;
}
interface ObjectSetFilter_relativeTimeRange {
    type: "relativeTimeRange";
    relativeTimeRange: RelativeTimeRangeFilter;
}
interface ObjectSetFilter_parameterizedRange {
    type: "parameterizedRange";
    parameterizedRange: ParameterizedRangeFilter;
}
interface ObjectSetFilter_parameterizedWildcard {
    type: "parameterizedWildcard";
    parameterizedWildcard: ParameterizedWildcardFilter;
}
interface ObjectSetFilter_parameterizedTerms {
    type: "parameterizedTerms";
    parameterizedTerms: ParameterizedTermsFilter;
}
interface ObjectSetFilter_parameterizedExactMatch {
    type: "parameterizedExactMatch";
    parameterizedExactMatch: ParameterizedExactMatchFilter;
}
interface ObjectSetFilter_userContext {
    type: "userContext";
    userContext: UserContextFilter;
}
/**
 * Filter to be applied to an Object Set. Refer to documentation of a particular ObjectSetFilter for details.
 */
type ObjectSetFilter = ObjectSetFilter_or | ObjectSetFilter_and | ObjectSetFilter_not | ObjectSetFilter_range | ObjectSetFilter_wildcard | ObjectSetFilter_terms | ObjectSetFilter_exactMatch | ObjectSetFilter_phrase | ObjectSetFilter_prefixOnLastToken | ObjectSetFilter_geoBoundingBox | ObjectSetFilter_geoDistance | ObjectSetFilter_geoPolygon | ObjectSetFilter_geoShape | ObjectSetFilter_objectType | ObjectSetFilter_hasProperty | ObjectSetFilter_linkPresence | ObjectSetFilter_multiMatch | ObjectSetFilter_relativeDateRange | ObjectSetFilter_relativeTimeRange | ObjectSetFilter_parameterizedRange | ObjectSetFilter_parameterizedWildcard | ObjectSetFilter_parameterizedTerms | ObjectSetFilter_parameterizedExactMatch | ObjectSetFilter_userContext;

/**
 * Transforms objects in the ObjectSet to all objects on the other end of the specified Relation.
 */
interface ObjectSetSearchAround {
    relationId: LinkTypeId;
    relationSide: RelationSide;
    objectTypeId: ObjectTypeId;
}

interface ObjectSetTransform_propertyFilter {
    type: "propertyFilter";
    propertyFilter: ObjectSetFilter;
}
interface ObjectSetTransform_searchAround {
    type: "searchAround";
    searchAround: ObjectSetSearchAround;
}
/**
 * Transforms an ObjectSet by Filtering or performing a SearchAround.
 */
type ObjectSetTransform = ObjectSetTransform_propertyFilter | ObjectSetTransform_searchAround;

/**
 * An ObjectSet gotten as a result of performing a sequence of Transforms on a base ObjectSet.
 * Each transforms is either a PropertyFilter or a SearchAround.
 * There is a limit of 3 SearchArounds.
 */
interface DynamicObjectSet {
    startingObjectSet: DynamicObjectSetInput;
    transforms: Array<ObjectSetTransform>;
}

/**
 * A wrapper for DynamicObjectSet that includes a ConditionValueMap
 */
interface ActionsObjectSet {
    objectSet: DynamicObjectSet;
    conditionValues: Record<ConditionValueId, ConditionValue>;
}

interface OtherValueAllowed {
    allowed: boolean;
}

/**
 * Generates a set of allowed values from the specified property of the objects in the objectSet.
 * For example All the names from the `assignedTo` property of tickets in an objectSet.
 */
interface ParameterObjectPropertyValue {
    objectSet: ActionsObjectSet;
    propertyTypeId: PropertyTypeId;
    otherValueAllowed: OtherValueAllowed | undefined;
}

interface ParameterObjectPropertyValueOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterObjectPropertyValueOrEmpty_objectPropertyValue {
    type: "objectPropertyValue";
    objectPropertyValue: ParameterObjectPropertyValue;
}
/**
 * Allows values that satisfy the objectPropertyValue. If empty, it will only allow empty values.
 */
type ParameterObjectPropertyValueOrEmpty = ParameterObjectPropertyValueOrEmpty_empty | ParameterObjectPropertyValueOrEmpty_objectPropertyValue;

/**
 * Only allows Objects that are in this Dynamic Object Set at Execution time.
 */
interface ParameterObjectQuery {
    objectSet: ActionsObjectSet | undefined;
}

interface ParameterObjectQueryOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterObjectQueryOrEmpty_objectQuery {
    type: "objectQuery";
    objectQuery: ParameterObjectQuery;
}
/**
 * Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
 */
type ParameterObjectQueryOrEmpty = ParameterObjectQueryOrEmpty_empty | ParameterObjectQueryOrEmpty_objectQuery;

/**
 * In future ObjectSetRid validations may be added.
 */
interface ParameterObjectSetRid {
}

interface ParameterObjectSetRidOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterObjectSetRidOrEmpty_objectSetRid {
    type: "objectSetRid";
    objectSetRid: ParameterObjectSetRid;
}
type ParameterObjectSetRidOrEmpty = ParameterObjectSetRidOrEmpty_empty | ParameterObjectSetRidOrEmpty_objectSetRid;

/**
 * Allows ObjectTypeReference values where the object type implements the specified interfaces.
 */
interface ParameterObjectTypeReference {
    interfaceTypeRids: Array<InterfaceTypeRid>;
}

interface ParameterObjectTypeReferenceOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterObjectTypeReferenceOrEmpty_objectTypeReference {
    type: "objectTypeReference";
    objectTypeReference: ParameterObjectTypeReference;
}
type ParameterObjectTypeReferenceOrEmpty = ParameterObjectTypeReferenceOrEmpty_empty | ParameterObjectTypeReferenceOrEmpty_objectTypeReference;

interface ParameterRangeValue {
    value: ConditionValue;
    inclusive: boolean;
}

interface ParameterRange {
    minimum: ParameterRangeValue | undefined;
    maximum: ParameterRangeValue | undefined;
}

interface ParameterRangeOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterRangeOrEmpty_range {
    type: "range";
    range: ParameterRange;
}
type ParameterRangeOrEmpty = ParameterRangeOrEmpty_empty | ParameterRangeOrEmpty_range;

interface DelegateToAllowedStructFieldValues {
}

interface ParameterStructOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterStructOrEmpty_delegateToAllowedStructFieldValues {
    type: "delegateToAllowedStructFieldValues";
    delegateToAllowedStructFieldValues: DelegateToAllowedStructFieldValues;
}
/**
 * Allowed values that satisfy struct parameters. If empty, it will only allow empty values. Otherwise, indicates
 * that AllowedStructFieldValues for each struct field should be checked.
 */
type ParameterStructOrEmpty = ParameterStructOrEmpty_empty | ParameterStructOrEmpty_delegateToAllowedStructFieldValues;

interface ParameterTimeSeriesReference {
}

interface ParameterTimeSeriesReferenceOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterTimeSeriesReferenceOrEmpty_timeSeriesReference {
    type: "timeSeriesReference";
    timeSeriesReference: ParameterTimeSeriesReference;
}
type ParameterTimeSeriesReferenceOrEmpty = ParameterTimeSeriesReferenceOrEmpty_empty | ParameterTimeSeriesReferenceOrEmpty_timeSeriesReference;

interface LabelledValue {
    label: string;
    value: StaticValue;
}

interface ParameterValueOneOf {
    labelledValues: Array<LabelledValue>;
    otherValueAllowed: OtherValueAllowed;
}

interface ParameterValueOneOfOrEmpty_empty {
    type: "empty";
    empty: MustBeEmpty;
}
interface ParameterValueOneOfOrEmpty_oneOf {
    type: "oneOf";
    oneOf: ParameterValueOneOf;
}
type ParameterValueOneOfOrEmpty = ParameterValueOneOfOrEmpty_empty | ParameterValueOneOfOrEmpty_oneOf;

interface AllowedParameterValues_oneOf {
    type: "oneOf";
    oneOf: ParameterValueOneOfOrEmpty;
}
interface AllowedParameterValues_range {
    type: "range";
    range: ParameterRangeOrEmpty;
}
interface AllowedParameterValues_objectQuery {
    type: "objectQuery";
    objectQuery: ParameterObjectQueryOrEmpty;
}
interface AllowedParameterValues_interfaceObjectQuery {
    type: "interfaceObjectQuery";
    interfaceObjectQuery: ParameterInterfaceObjectQueryOrEmpty;
}
interface AllowedParameterValues_objectPropertyValue {
    type: "objectPropertyValue";
    objectPropertyValue: ParameterObjectPropertyValueOrEmpty;
}
interface AllowedParameterValues_interfacePropertyValue {
    type: "interfacePropertyValue";
    interfacePropertyValue: ParameterInterfacePropertyValueOrEmpty;
}
interface AllowedParameterValues_objectList {
    type: "objectList";
    objectList: ParameterObjectListOrEmpty;
}
interface AllowedParameterValues_user {
    type: "user";
    user: ParameterMultipassUserOrEmpty;
}
interface AllowedParameterValues_multipassGroup {
    type: "multipassGroup";
    multipassGroup: ParameterMultipassGroupOrEmpty;
}
interface AllowedParameterValues_text {
    type: "text";
    text: ParameterFreeTextOrEmpty;
}
interface AllowedParameterValues_datetime {
    type: "datetime";
    datetime: ParameterDateTimeRangeOrEmpty;
}
interface AllowedParameterValues_boolean {
    type: "boolean";
    boolean: ParameterBooleanOrEmpty;
}
interface AllowedParameterValues_objectSetRid {
    type: "objectSetRid";
    objectSetRid: ParameterObjectSetRidOrEmpty;
}
interface AllowedParameterValues_attachment {
    type: "attachment";
    attachment: ParameterAttachmentOrEmpty;
}
interface AllowedParameterValues_cbacMarking {
    type: "cbacMarking";
    cbacMarking: ParameterCbacMarkingOrEmpty;
}
interface AllowedParameterValues_mandatoryMarking {
    type: "mandatoryMarking";
    mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}
interface AllowedParameterValues_mediaReference {
    type: "mediaReference";
    mediaReference: ParameterMediaReferenceOrEmpty;
}
interface AllowedParameterValues_objectTypeReference {
    type: "objectTypeReference";
    objectTypeReference: ParameterObjectTypeReferenceOrEmpty;
}
interface AllowedParameterValues_timeSeriesReference {
    type: "timeSeriesReference";
    timeSeriesReference: ParameterTimeSeriesReferenceOrEmpty;
}
interface AllowedParameterValues_geohash {
    type: "geohash";
    geohash: ParameterGeohashOrEmpty;
}
interface AllowedParameterValues_geoshape {
    type: "geoshape";
    geoshape: ParameterGeoshapeOrEmpty;
}
interface AllowedParameterValues_geotimeSeriesReference {
    type: "geotimeSeriesReference";
    geotimeSeriesReference: ParameterGeotimeSeriesReferenceOrEmpty;
}
interface AllowedParameterValues_redacted {
    type: "redacted";
    redacted: Redacted;
}
interface AllowedParameterValues_struct {
    type: "struct";
    struct: ParameterStructOrEmpty;
}
type AllowedParameterValues = AllowedParameterValues_oneOf | AllowedParameterValues_range | AllowedParameterValues_objectQuery | AllowedParameterValues_interfaceObjectQuery | AllowedParameterValues_objectPropertyValue | AllowedParameterValues_interfacePropertyValue | AllowedParameterValues_objectList | AllowedParameterValues_user | AllowedParameterValues_multipassGroup | AllowedParameterValues_text | AllowedParameterValues_datetime | AllowedParameterValues_boolean | AllowedParameterValues_objectSetRid | AllowedParameterValues_attachment | AllowedParameterValues_cbacMarking | AllowedParameterValues_mandatoryMarking | AllowedParameterValues_mediaReference | AllowedParameterValues_objectTypeReference | AllowedParameterValues_timeSeriesReference | AllowedParameterValues_geohash | AllowedParameterValues_geoshape | AllowedParameterValues_geotimeSeriesReference | AllowedParameterValues_redacted | AllowedParameterValues_struct;

interface AllowedValuesOverride {
    allowedValues: AllowedParameterValues;
}

/**
 * Computes the result of an ObjectSet and suggests the value(s) to the user for a parameter.
 */
interface ObjectQueryPrefill {
    objectSet: ActionsObjectSet;
}

/**
 * Suggests the property value of the object set to the user for a parameter.
 */
interface ObjectQueryPropertyValue {
    objectSet: ActionsObjectSet;
    propertyTypeId: PropertyTypeId;
}

/**
 * Generates an ObjectSetRid, from the provided ObjectSet definition, that would be used as the default value
 * for a ObjectSetRidParameter.
 */
interface ObjectSetRidPrefill {
    objectSet: ActionsObjectSet;
}

/**
 * The rid for an Object. Safe to log.
 */
type ObjectRid = string;

/**
 * StaticObjectPrefill specifies the Object that should be suggested to the user for a parameter.
 */
type StaticObjectPrefill = ObjectRid;

interface ParameterPrefill_staticValue {
    type: "staticValue";
    staticValue: StaticValue;
}
interface ParameterPrefill_staticObject {
    type: "staticObject";
    staticObject: StaticObjectPrefill;
}
interface ParameterPrefill_objectParameterPropertyValue {
    type: "objectParameterPropertyValue";
    objectParameterPropertyValue: ObjectParameterPropertyValue;
}
interface ParameterPrefill_interfaceParameterPropertyValue {
    type: "interfaceParameterPropertyValue";
    interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}
interface ParameterPrefill_objectQueryPrefill {
    type: "objectQueryPrefill";
    objectQueryPrefill: ObjectQueryPrefill;
}
interface ParameterPrefill_objectQueryPropertyValue {
    type: "objectQueryPropertyValue";
    objectQueryPropertyValue: ObjectQueryPropertyValue;
}
interface ParameterPrefill_objectSetRidPrefill {
    type: "objectSetRidPrefill";
    objectSetRidPrefill: ObjectSetRidPrefill;
}
interface ParameterPrefill_redacted {
    type: "redacted";
    redacted: Redacted;
}
/**
 * ParameterPrefill specifies what should initially suggested to users for this Parameter.
 */
type ParameterPrefill = ParameterPrefill_staticValue | ParameterPrefill_staticObject | ParameterPrefill_objectParameterPropertyValue | ParameterPrefill_interfaceParameterPropertyValue | ParameterPrefill_objectQueryPrefill | ParameterPrefill_objectQueryPropertyValue | ParameterPrefill_objectSetRidPrefill | ParameterPrefill_redacted;

interface ParameterPrefillOverride {
    prefill: ParameterPrefill;
}

/**
 * Optionally specifies the min and max parameter list lengths permitted for a parameter. This type is only
 * usable with list type parameters.
 */
interface ListLengthValidation {
    minLength: number | undefined;
    maxLength: number | undefined;
}

interface ParameterNotRequired {
}

interface ParameterRequired {
}

interface ParameterRequiredConfiguration_required {
    type: "required";
    required: ParameterRequired;
}
interface ParameterRequiredConfiguration_notRequired {
    type: "notRequired";
    notRequired: ParameterNotRequired;
}
interface ParameterRequiredConfiguration_listLengthValidation {
    type: "listLengthValidation";
    listLengthValidation: ListLengthValidation;
}
/**
 * Specifies the number of values that are valid for a given parameter.
 */
type ParameterRequiredConfiguration = ParameterRequiredConfiguration_required | ParameterRequiredConfiguration_notRequired | ParameterRequiredConfiguration_listLengthValidation;

interface ParameterRequiredOverride {
    required: ParameterRequiredConfiguration;
}

interface ParameterDisabled {
}

interface ParameterEditable {
}

interface ParameterHidden {
}

interface ParameterVisibility_editable {
    type: "editable";
    editable: ParameterEditable;
}
interface ParameterVisibility_disabled {
    type: "disabled";
    disabled: ParameterDisabled;
}
interface ParameterVisibility_hidden {
    type: "hidden";
    hidden: ParameterHidden;
}
type ParameterVisibility = ParameterVisibility_editable | ParameterVisibility_disabled | ParameterVisibility_hidden;

interface VisibilityOverride {
    visibility: ParameterVisibility;
}

interface ParameterValidationBlockOverride_parameterRequired {
    type: "parameterRequired";
    parameterRequired: ParameterRequiredOverride;
}
interface ParameterValidationBlockOverride_visibility {
    type: "visibility";
    visibility: VisibilityOverride;
}
interface ParameterValidationBlockOverride_allowedValues {
    type: "allowedValues";
    allowedValues: AllowedValuesOverride;
}
interface ParameterValidationBlockOverride_prefill {
    type: "prefill";
    prefill: ParameterPrefillOverride;
}
type ParameterValidationBlockOverride = ParameterValidationBlockOverride_parameterRequired | ParameterValidationBlockOverride_visibility | ParameterValidationBlockOverride_allowedValues | ParameterValidationBlockOverride_prefill;

interface ConditionalOverride {
    condition: Condition$1;
    parameterBlockOverrides: Array<ParameterValidationBlockOverride>;
}

interface ParameterValidation {
    required: ParameterRequiredConfiguration;
    allowedValues: AllowedParameterValues;
}

interface CbacMarkingPicker {
}

type MultipleChoiceItemLayoutOptions = "STACKED" | "INLINE";

interface Checkbox {
    layout: MultipleChoiceItemLayoutOptions | undefined;
}

interface DateTimePicker {
}

interface Dropdown {
}

interface FilePicker {
}

interface MandatoryMarkingPicker {
}

interface NumericInput {
}

interface Radio {
    layout: MultipleChoiceItemLayoutOptions | undefined;
}

interface ResourcePicker {
}

interface TextArea {
}

interface TextInput {
}

interface UserDropdown {
}

interface ParameterRenderHint_dropdown {
    type: "dropdown";
    dropdown: Dropdown;
}
interface ParameterRenderHint_userDropdown {
    type: "userDropdown";
    userDropdown: UserDropdown;
}
interface ParameterRenderHint_radio {
    type: "radio";
    radio: Radio;
}
interface ParameterRenderHint_checkbox {
    type: "checkbox";
    checkbox: Checkbox;
}
interface ParameterRenderHint_numericInput {
    type: "numericInput";
    numericInput: NumericInput;
}
interface ParameterRenderHint_textInput {
    type: "textInput";
    textInput: TextInput;
}
interface ParameterRenderHint_textArea {
    type: "textArea";
    textArea: TextArea;
}
interface ParameterRenderHint_dateTimePicker {
    type: "dateTimePicker";
    dateTimePicker: DateTimePicker;
}
interface ParameterRenderHint_filePicker {
    type: "filePicker";
    filePicker: FilePicker;
}
interface ParameterRenderHint_resourcePicker {
    type: "resourcePicker";
    resourcePicker: ResourcePicker;
}
interface ParameterRenderHint_cbacMarkingPicker {
    type: "cbacMarkingPicker";
    cbacMarkingPicker: CbacMarkingPicker;
}
interface ParameterRenderHint_mandatoryMarkingPicker {
    type: "mandatoryMarkingPicker";
    mandatoryMarkingPicker: MandatoryMarkingPicker;
}
type ParameterRenderHint = ParameterRenderHint_dropdown | ParameterRenderHint_userDropdown | ParameterRenderHint_radio | ParameterRenderHint_checkbox | ParameterRenderHint_numericInput | ParameterRenderHint_textInput | ParameterRenderHint_textArea | ParameterRenderHint_dateTimePicker | ParameterRenderHint_filePicker | ParameterRenderHint_resourcePicker | ParameterRenderHint_cbacMarkingPicker | ParameterRenderHint_mandatoryMarkingPicker;

/**
 * These values provide details about how parameter fields should be displayed in the form. They are not used to
 * evaluate correctness of submitted parameters.
 */
interface ParameterValidationDisplayMetadata {
    visibility: ParameterVisibility;
    renderHint: ParameterRenderHint;
    prefill: ParameterPrefill | undefined;
}

interface ParameterValidationBlock {
    display: ParameterValidationDisplayMetadata;
    validation: ParameterValidation;
}

interface AllowedStructFieldValues_oneOf {
    type: "oneOf";
    oneOf: ParameterValueOneOfOrEmpty;
}
interface AllowedStructFieldValues_range {
    type: "range";
    range: ParameterRangeOrEmpty;
}
interface AllowedStructFieldValues_text {
    type: "text";
    text: ParameterFreeTextOrEmpty;
}
interface AllowedStructFieldValues_datetime {
    type: "datetime";
    datetime: ParameterDateTimeRangeOrEmpty;
}
interface AllowedStructFieldValues_boolean {
    type: "boolean";
    boolean: ParameterBooleanOrEmpty;
}
interface AllowedStructFieldValues_geohash {
    type: "geohash";
    geohash: ParameterGeohashOrEmpty;
}
type AllowedStructFieldValues = AllowedStructFieldValues_oneOf | AllowedStructFieldValues_range | AllowedStructFieldValues_text | AllowedStructFieldValues_datetime | AllowedStructFieldValues_boolean | AllowedStructFieldValues_geohash;

interface AllowedStructFieldValuesOverride {
    allowedValues: AllowedStructFieldValues;
}

/**
 * Reference to a struct field of a struct property.
 */
interface ObjectParameterStructFieldValue {
    parameterId: ParameterId;
    propertyTypeId: PropertyTypeId;
    structFieldRid: StructFieldRid;
}

/**
 * Reference to a struct field of a struct list property.
 */
interface ObjectParameterStructListFieldValue {
    parameterId: ParameterId;
    propertyTypeId: PropertyTypeId;
    structFieldRid: StructFieldRid;
}

interface StructFieldPrefill_objectParameterStructFieldValue {
    type: "objectParameterStructFieldValue";
    objectParameterStructFieldValue: ObjectParameterStructFieldValue;
}
interface StructFieldPrefill_objectParameterStructListFieldValue {
    type: "objectParameterStructListFieldValue";
    objectParameterStructListFieldValue: ObjectParameterStructListFieldValue;
}
/**
 * StructFieldPrefill specifies what should initially suggested to users for a struct parameter's field.
 */
type StructFieldPrefill = StructFieldPrefill_objectParameterStructFieldValue | StructFieldPrefill_objectParameterStructListFieldValue;

interface StructFieldPrefillOverride {
    prefill: StructFieldPrefill;
}

interface StructFieldValidationBlockOverride_parameterRequired {
    type: "parameterRequired";
    parameterRequired: ParameterRequiredOverride;
}
interface StructFieldValidationBlockOverride_visibility {
    type: "visibility";
    visibility: VisibilityOverride;
}
interface StructFieldValidationBlockOverride_allowedValues {
    type: "allowedValues";
    allowedValues: AllowedStructFieldValuesOverride;
}
interface StructFieldValidationBlockOverride_prefill {
    type: "prefill";
    prefill: StructFieldPrefillOverride;
}
type StructFieldValidationBlockOverride = StructFieldValidationBlockOverride_parameterRequired | StructFieldValidationBlockOverride_visibility | StructFieldValidationBlockOverride_allowedValues | StructFieldValidationBlockOverride_prefill;

interface StructFieldConditionalOverride {
    condition: Condition$1;
    structFieldBlockOverrides: Array<StructFieldValidationBlockOverride>;
}

interface StructFieldValidation {
    required: ParameterRequiredConfiguration;
    allowedValues: AllowedStructFieldValues;
}

/**
 * These values provide details about how struct parameter nested fields should be displayed in the form.
 */
interface StructFieldValidationDisplayMetadata {
    visibility: ParameterVisibility;
    renderHint: ParameterRenderHint;
    prefill: StructFieldPrefill | undefined;
}

interface StructFieldValidationBlock {
    display: StructFieldValidationDisplayMetadata;
    validation: StructFieldValidation;
}

interface StructFieldConditionalValidationBlock {
    conditionalOverrides: Array<StructFieldConditionalOverride>;
    defaultValidation: StructFieldValidationBlock;
}

interface ConditionalValidationBlock {
    conditionalOverrides: Array<ConditionalOverride>;
    defaultValidation: ParameterValidationBlock;
    structFieldValidations: Record<StructParameterFieldApiName, StructFieldConditionalValidationBlock>;
}

interface SectionHidden {
}

interface SectionVisible {
}

interface SectionVisibility_visible {
    type: "visible";
    visible: SectionVisible;
}
interface SectionVisibility_hidden {
    type: "hidden";
    hidden: SectionHidden;
}
/**
 * Specifies if the section is visible or hidden
 */
type SectionVisibility = SectionVisibility_visible | SectionVisibility_hidden;

/**
 * Information about how the section and its content should be displayed in the form.
 */
interface SectionVisibilityOverride {
    visibility: SectionVisibility;
}

interface SectionDisplayBlockOverride_visibility {
    type: "visibility";
    visibility: SectionVisibilityOverride;
}
/**
 * The display parameters for a section override
 */
type SectionDisplayBlockOverride = SectionDisplayBlockOverride_visibility;

/**
 * This block contains a conditional override for a section.
 * This includes the condition to test and the new display parameters to use if the condition passes.
 */
interface SectionConditionalOverride {
    condition: Condition$1;
    sectionBlockOverrides: Array<SectionDisplayBlockOverride>;
}

/**
 * Information about how the section and its content should be displayed in the form.
 */
interface SectionValidationDisplayMetadata {
    visibility: SectionVisibility;
}

/**
 * Contains information about the section display and any conditional overrides set on the section.
 * If more than one conditional override is passed. The first one with a passing condition will take priority.
 */
interface SectionDisplayBlock {
    conditionalOverrides: Array<SectionConditionalOverride>;
    defaultDisplayMetadata: SectionValidationDisplayMetadata;
}

/**
 * The id for a Section which uniquely identifies the Section per ActionType. The size limit for the section id is 30 characters. Not safe for logging.
 */
type SectionId = string;

interface ActionValidation {
    actionTypeLevelValidation: ActionTypeLevelValidation;
    parameterValidations: Record<ParameterId, ConditionalValidationBlock>;
    sectionValidations: Record<SectionId, SectionDisplayBlock>;
}

/**
 * Name of a parameter input to a Webhook. Not safe to log.
 */
type WebhookInputParamName = string;

/**
 * The rid for a Webhook, autogenerated by Webhook-Service and used for permissioning and logging.
 */
type WebhookRid = string;

/**
 * The version of a Webhook. Safe to log.
 */
type WebhookVersion = number;

/**
 * This webhook config will run the webhook given the input mapping provided. The webhook input parameters map
 * to Action logic rule values, such as parameters.
 */
interface StaticWebhookWithDirectInput {
    webhookRid: WebhookRid;
    webhookVersion: WebhookVersion;
    webhookInputValues: Record<WebhookInputParamName, LogicRuleValue>;
}

/**
 * This webhook config will run the function given the input mapping provided. It will then run the webhook given
 * the result of the function as input. It expects a custom type containing all the expected webhook inputs.
 * e.g. An example of the expected return type from the Function:
 * ```
 * export interface WebhookResult {
 * arg1: string;
 * arg2: string;
 * }
 * export class MyFunctions {
 * @Function()
 * public createWebhookRequest(person: Person): WebhookResult {
 * return {
 * arg1: person.someProperty,
 * arg2: person.someOtherProperty,
 * };
 * }
 * }
 * If one of the Webhook inputs is a RecordType, it must have expectedFields defined and match exactly the custom
 * type.
 * ```
 */
interface StaticWebhookWithFunctionResultInput {
    webhookRid: WebhookRid;
    webhookVersion: WebhookVersion;
    functionRid: FunctionRid;
    functionVersion: FunctionVersion;
    functionInputValues: Record<FunctionInputName, LogicRuleValue>;
}

interface AsynchronousPostWritebackWebhook_staticDirectInput {
    type: "staticDirectInput";
    staticDirectInput: StaticWebhookWithDirectInput;
}
interface AsynchronousPostWritebackWebhook_staticFunctionInput {
    type: "staticFunctionInput";
    staticFunctionInput: StaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring webhook(s) which will be executed asynchronously,
 * post writeback. If any fail, this is not surfaced during the apply Action call.
 */
type AsynchronousPostWritebackWebhook = AsynchronousPostWritebackWebhook_staticDirectInput | AsynchronousPostWritebackWebhook_staticFunctionInput;

interface SynchronousPreWritebackWebhook_staticDirectInput {
    type: "staticDirectInput";
    staticDirectInput: StaticWebhookWithDirectInput;
}
interface SynchronousPreWritebackWebhook_staticFunctionInput {
    type: "staticFunctionInput";
    staticFunctionInput: StaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring a webhook which will be executed synchronously,
 * prior to writeback. If it fails, the Foundry writeback will be cancelled. This webhook is executed after
 * validations run and pass successfully.
 */
type SynchronousPreWritebackWebhook = SynchronousPreWritebackWebhook_staticDirectInput | SynchronousPreWritebackWebhook_staticFunctionInput;

/**
 * ActionWebhooks contains the definition for webhooks that are executed as part of running an Action.
 */
interface ActionWebhooks {
    synchronousPreWritebackWebhook: SynchronousPreWritebackWebhook | undefined;
    asynchronousPostWritebackWebhooks: Array<AsynchronousPostWritebackWebhook>;
}

interface ActionTypeLogic {
    logic: ActionLogic;
    validation: ActionValidation;
    revert: ActionRevert | undefined;
    webhooks: ActionWebhooks | undefined;
    notifications: Array<ActionNotification>;
}

interface ObjectMonitoringFrontendConsumer {
}

interface ActionTypeFrontendConsumer_objectMonitoring {
    type: "objectMonitoring";
    objectMonitoring: ObjectMonitoringFrontendConsumer;
}
/**
 * The different Action type frontends.
 */
type ActionTypeFrontendConsumer = ActionTypeFrontendConsumer_objectMonitoring;

interface ActionApplyDisallowedClients {
    disallowedFrontendConsumer: Array<ActionTypeFrontendConsumer>;
}

interface ActionApplyClientPreferences_disallowedClients {
    type: "disallowedClients";
    disallowedClients: ActionApplyDisallowedClients;
}
type ActionApplyClientPreferences = ActionApplyClientPreferences_disallowedClients;

type ActionLogMessage = string;

type ActionLogParameterReference = ParameterId;

interface ActionLogSummaryPart_message {
    type: "message";
    message: ActionLogMessage;
}
interface ActionLogSummaryPart_parameter {
    type: "parameter";
    parameter: ActionLogParameterReference;
}
type ActionLogSummaryPart = ActionLogSummaryPart_message | ActionLogSummaryPart_parameter;

interface ActionLogConfiguration {
    actionLogSummary: Array<ActionLogSummaryPart>;
}

interface EveryoneTrustedRedactionOverride {
}

interface RedactionOverrideOptions_everyoneTrusted {
    type: "everyoneTrusted";
    everyoneTrusted: EveryoneTrustedRedactionOverride;
}
type RedactionOverrideOptions = RedactionOverrideOptions_everyoneTrusted;

/**
 * Specifies that notifications to all recipients must render before Action can be executed
 */
interface AllNotificationRenderingMustSucceed {
}

/**
 * Specifies that Action will be executed even if notifications fail to render for some/all recipients
 */
interface AnyNotificationRenderingCanFail {
}

interface RenderingSettings_allNotificationRenderingMustSucceed {
    type: "allNotificationRenderingMustSucceed";
    allNotificationRenderingMustSucceed: AllNotificationRenderingMustSucceed;
}
interface RenderingSettings_anyNotificationRenderingCanFail {
    type: "anyNotificationRenderingCanFail";
    anyNotificationRenderingCanFail: AnyNotificationRenderingCanFail;
}
/**
 * Settings that determine the rendering behaviour for notifications in current ActionType
 */
type RenderingSettings = RenderingSettings_allNotificationRenderingMustSucceed | RenderingSettings_anyNotificationRenderingCanFail;

/**
 * Settings that would be applied to a notification
 */
interface ActionNotificationSettings {
    renderingSettings: RenderingSettings;
    redactionOverride: RedactionOverrideOptions | undefined;
}

/**
 * In this mode, all apply action requests need to be valid (also considered as the collection) in order for the
 * submission to go through. In other words, this mode respects the atomicity property, i.e. actions are applied
 * either completely, or none at all. It also mirrors the V1 endpoint behaviour.
 */
interface SubmitAllValidOrNothingThrowingMode {
}

/**
 * Submits the set of all valid apply action requests defined in the parent request order until the first invalid
 * apply action request or the first request which makes the overall parent request container invalid, e.g.
 * duplicate conflicting edits on the same object. Subsequent requests will not be processed and returned
 * as unattempted.
 */
interface SubmitValidEntriesInOrderUntilFirstFailureMode {
}

interface ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure {
    type: "submitValidEntriesInOrderUntilFirstFailure";
    submitValidEntriesInOrderUntilFirstFailure: SubmitValidEntriesInOrderUntilFirstFailureMode;
}
interface ActionTableSubmissionMode_submitAllValidOrNothingThrowing {
    type: "submitAllValidOrNothingThrowing";
    submitAllValidOrNothingThrowing: SubmitAllValidOrNothingThrowingMode;
}
/**
 * Submission mode defining the validation and processing result handling of action application requests.
 */
type ActionTableSubmissionMode = ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure | ActionTableSubmissionMode_submitAllValidOrNothingThrowing;

/**
 * Submission Mode configuration in OMA for bulk actions applied via tableEditApplyActionV2
 */
interface ActionTableSubmissionModeConfiguration {
    submissionMode: ActionTableSubmissionMode;
}

/**
 * Configuration options related to the submission of an action type
 */
interface ActionSubmissionConfiguration {
    tableSubmissionModeConfiguration: ActionTableSubmissionModeConfiguration | undefined;
}

/**
 * The name of an ActionType that can be referenced in code. Valid API names have the following conditions:
 * * All lower case kebab-case
 * * Numbers are permitted, but not as the first character.
 * * No special characters are allowed.
 * * API names cannot be longer than 100 characters.
 * API names must be unique - requests that attempt to re-use an existing API name will be rejected.
 */
type ActionTypeApiName = string;

/**
 * Default layout that should be shown when interacting with action inline widget
 */
type DisplayMetadataConfigurationDefaultLayout = "FORM" | "TABLE";

/**
 * The rid for a Parameter, autogenerated by Ontology-Metadata-Service and used for permissioning and logging.
 */
type ParameterRid = string;

/**
 * Various settings for the table layout
 */
interface TableDisplayAndFormat {
    columnWidthByParameterRid: Record<ParameterRid, number>;
    enableFileImport: boolean;
    fitHorizontally: boolean;
    frozenColumnCount: number;
    rowHeightInLines: number;
}

/**
 * Separate configuration for each applicable layout
 */
interface DisplayMetadataConfigurationDisplayAndFormat {
    table: TableDisplayAndFormat;
}

/**
 * Config info for rendering and configuring the layouts of the (inline) action widgets
 */
interface ActionTypeDisplayMetadataConfiguration {
    defaultLayout: DisplayMetadataConfigurationDefaultLayout;
    displayAndFormat: DisplayMetadataConfigurationDisplayAndFormat;
    enableLayoutUserSwitch: boolean;
}

/**
 * Visual intent color to apply to element.
 */
type Intent$1 = "PRIMARY" | "SUCCESS" | "WARNING" | "DANGER";

interface ButtonDisplayMetadata {
    text: string;
    intent: Intent$1;
}

/**
 * DisplayMetadata shape used in responses
 */
interface ActionTypeDisplayMetadata {
    displayName: string;
    description: string;
    icon: Icon | undefined;
    typeClasses: Array<TypeClass>;
    successMessage: Array<ActionTypeRichTextComponent>;
    submitButtonDisplayMetadata: ButtonDisplayMetadata | undefined;
    undoButtonConfiguration: boolean | undefined;
    configuration: ActionTypeDisplayMetadataConfiguration;
}

interface ActionTypeEntities {
    affectedObjectTypes: Array<ObjectTypeId>;
    affectedLinkTypes: Array<LinkTypeId>;
    affectedInterfaceTypes: Array<InterfaceTypeRid>;
    typeGroups: Array<TypeGroupRid>;
}

/**
 * This status indicates that the ActionType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
interface ActiveActionTypeStatus {
}

/**
 * This status indicates that the ActionType is reaching the end of its life and will be removed as per the deadline specified.
 */
interface DeprecatedActionTypeStatus {
    message: string;
    deadline: string;
    replacedBy: ActionTypeRid | undefined;
}

/**
 * This status indicates that the ActionType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
interface ExampleActionTypeStatus {
}

/**
 * This status indicates that the ActionType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
interface ExperimentalActionTypeStatus {
}

interface ActionTypeStatus_experimental {
    type: "experimental";
    experimental: ExperimentalActionTypeStatus;
}
interface ActionTypeStatus_active {
    type: "active";
    active: ActiveActionTypeStatus;
}
interface ActionTypeStatus_deprecated {
    type: "deprecated";
    deprecated: DeprecatedActionTypeStatus;
}
interface ActionTypeStatus_example {
    type: "example";
    example: ExampleActionTypeStatus;
}
/**
 * The status to indicate whether the ActionType is either Experimental, Active, Deprecated, or Example.
 */
type ActionTypeStatus = ActionTypeStatus_experimental | ActionTypeStatus_active | ActionTypeStatus_deprecated | ActionTypeStatus_example;

/**
 * The version of a specific ActionType.
 * This is a legacy versioning from before action types were integrated into OMS.
 * It is deprecated now in favor of ontology versions.
 */
type ActionTypeVersion = string;

type MarketplaceBlockSetInstallationRid = string;

/**
 * Provenance of an entity originating from Marketplace product installation.
 */
interface MarketplaceEntityProvenance {
    installationRid: MarketplaceBlockSetInstallationRid;
}

interface ActionTypeProvenanceSource_marketplace {
    type: "marketplace";
    marketplace: MarketplaceEntityProvenance;
}
/**
 * Information describing the source provenance of an ontology entity modeled as an extensible union.
 * Each service or client which defines the definition of an ontology entity can declare their custom
 * representation of provenance metadata. Examples may include references to resources, their versions,
 * timestamps etc.
 */
type ActionTypeProvenanceSource = ActionTypeProvenanceSource_marketplace;

/**
 * Information describing the provenance of an action type.
 */
interface ActionTypeProvenance {
    source: ActionTypeProvenanceSource;
}

interface FormContent_parameterId {
    type: "parameterId";
    parameterId: ParameterId;
}
interface FormContent_sectionId {
    type: "sectionId";
    sectionId: SectionId;
}
/**
 * Items that we can place on the action form.
 */
type FormContent = FormContent_parameterId | FormContent_sectionId;

interface StructParameterFieldDisplayMetadata {
    displayName: string;
}

interface ParameterDisplayMetadata {
    displayName: string;
    typeClasses: Array<TypeClass>;
    description: string;
    structFields: Record<StructParameterFieldApiName, StructParameterFieldDisplayMetadata>;
}

/**
 * AttachmentListType specifies that this parameter must be a list of Attachment rids.
 */
interface AttachmentListType {
}

/**
 * AttachmentType specifies that this parameter must be the rid of an Attachment.
 */
interface AttachmentType {
}

/**
 * BooleanListType specifies that this parameter must be a list of Booleans.
 */
interface BooleanListType {
}

/**
 * BooleanType specifies that this parameter must be a Boolean.
 */
interface BooleanType$1 {
}

/**
 * DateListType specifies that this parameter must be a list of Dates.
 */
interface DateListType {
}

/**
 * DateType specifies that this parameter must be a Date.
 */
interface DateType$1 {
}

/**
 * DoubleListType specifies that this parameter must be a list of Doubles.
 */
interface DoubleListType {
}

/**
 * DoubleType specifies that this parameter must be a Double.
 */
interface DoubleType$1 {
}

/**
 * GeohashListType specifies that this parameter must be a list of Geohashes.
 */
interface GeohashListType {
}

/**
 * GeohashType specifies that this parameter must be a Geohash.
 */
interface GeohashType {
}

/**
 * GeoshapeListType specifies that this parameter must be a list of Geoshapes.
 */
interface GeoshapeListType {
}

/**
 * GeoshapeType specifies that this parameter must be a Geoshape.
 */
interface GeoshapeType {
}

/**
 * GeotimeSeriesReferenceListType specifies that this parameter must be a list of GeotimeSeriesReferences.
 * valid allowedParameterValues: ParameterGeotimeSeriesReferenceOrEmpty
 * valid prefill DataValues: None
 */
interface GeotimeSeriesReferenceListType {
}

/**
 * GeotimeSeriesReferenceType specifies that this parameter must be a GeotimeSeriesReference.
 * valid allowedParameterValues: ParameterGeotimeSeriesReferenceOrEmpty
 * valid prefill DataValues: None
 */
interface GeotimeSeriesReferenceType {
}

/**
 * IntegerListType specifies that this parameter must be a list of Integers.
 */
interface IntegerListType {
}

/**
 * IntegerType specifies that this parameter must be an Integer.
 */
interface IntegerType$1 {
}

interface InterfaceReferenceListType {
    interfaceTypeRid: InterfaceTypeRid;
}

interface InterfaceReferenceType {
    interfaceTypeRid: InterfaceTypeRid;
}

/**
 * LongListType specifies that this parameter must be a list of Longs.
 */
interface LongListType {
}

/**
 * LongType specifies that this parameter must be a Long.
 */
interface LongType$1 {
}

/**
 * MarkingListType specifies that this parameter must be a list of Markings.
 */
interface MarkingListType {
}

/**
 * MarkingType specifies that this parameter must be a CBAC or Madatory Marking type.
 */
interface MarkingType {
}

/**
 * MediaReferenceListType specifies that this parameter must be a list of MediaReferences.
 */
interface MediaReferenceListType {
}

/**
 * MediaReferenceType specifies that this parameter must be a MediaReference.
 */
interface MediaReferenceType {
}

/**
 * ObjectReferenceListType specifies that this parameter must be a list of ObjectLocators.
 */
interface ObjectReferenceListType {
    objectTypeId: ObjectTypeId;
}

/**
 * AutoGenerated is a type used to denote the user has opted for auto-generated PKs. Primary keys will be auto-generated with a random UUID. UUID primary key generation and object creation will be handled within Actions Service.
 */
interface AutoGenerated {
}

/**
 * UserInput is a type used to denote the user has opted for user-inputted PKs. Object creation will be handled within Actions Service.
 */
interface UserInput {
}

interface CreateObjectOption_autoGenerated {
    type: "autoGenerated";
    autoGenerated: AutoGenerated;
}
interface CreateObjectOption_userInput {
    type: "userInput";
    userInput: UserInput;
}
type CreateObjectOption = CreateObjectOption_autoGenerated | CreateObjectOption_userInput;

/**
 * ObjectReferenceType specifies that this parameter must be an ObjectLocator. An additional optional field maybeCreateObjectOption is included for handling upsert action types by providing flexibility of object creation from a user-specified PK or auto-generated UID PK.
 */
interface ObjectReferenceType {
    objectTypeId: ObjectTypeId;
    maybeCreateObjectOption: CreateObjectOption | undefined;
}

/**
 * ObjectSetRidType specifies that this parameter must be an ObjectSetRid.
 */
interface ObjectSetRidType {
    objectTypeId: ObjectTypeId;
}

/**
 * An ObjectTypeReferenceType can be used to supply an object type to a function. This is useful for
 * addInterfaceRule where you need to specify what type of object you're creating.
 * NOTE: this is NOT an object instance.
 */
interface ObjectTypeReferenceType {
}

/**
 * StringListType specifies that this parameter must be a list of Strings.
 */
interface StringListType {
}

/**
 * StringType specifies that this parameter must be a String.
 */
interface StringType$1 {
}

/**
 * Object representing that the timezone should always be displayed to the user relative to their system timezone
 */
interface LocalTimezone {
}

interface SpecifiedTimezone {
    timezone: string;
}

interface DefaultTimezone_localTimezone {
    type: "localTimezone";
    localTimezone: LocalTimezone;
}
interface DefaultTimezone_setTimezone {
    type: "setTimezone";
    setTimezone: SpecifiedTimezone;
}
type DefaultTimezone = DefaultTimezone_localTimezone | DefaultTimezone_setTimezone;

/**
 * Object representing that the time format should be in 12 hour format
 */
interface TimeFormat12Hour {
}

/**
 * Object representing that the time format should be in 24 hour format
 */
interface TimeFormat24Hour {
}

interface TimeFormat_timeFormat24Hour {
    type: "timeFormat24Hour";
    timeFormat24Hour: TimeFormat24Hour;
}
interface TimeFormat_timeFormat12Hour {
    type: "timeFormat12Hour";
    timeFormat12Hour: TimeFormat12Hour;
}
type TimeFormat = TimeFormat_timeFormat24Hour | TimeFormat_timeFormat12Hour;

/**
 * The timezone configuration of a timestamp value
 */
interface TimestampConfiguration {
    canUserModifyTimezone: boolean;
    defaultTimezone: DefaultTimezone;
    timeFormat: TimeFormat | undefined;
}

/**
 * TimestampType specifies that this parameter must be a Timestamp.
 */
interface TimestampType$1 {
    configuration: TimestampConfiguration | undefined;
}

interface StructFieldBaseParameterType_boolean {
    type: "boolean";
    boolean: BooleanType$1;
}
interface StructFieldBaseParameterType_integer {
    type: "integer";
    integer: IntegerType$1;
}
interface StructFieldBaseParameterType_long {
    type: "long";
    long: LongType$1;
}
interface StructFieldBaseParameterType_double {
    type: "double";
    double: DoubleType$1;
}
interface StructFieldBaseParameterType_string {
    type: "string";
    string: StringType$1;
}
interface StructFieldBaseParameterType_geohash {
    type: "geohash";
    geohash: GeohashType;
}
interface StructFieldBaseParameterType_timestamp {
    type: "timestamp";
    timestamp: TimestampType$1;
}
interface StructFieldBaseParameterType_date {
    type: "date";
    date: DateType$1;
}
/**
 * All of the possible types for fields of a Struct Parameter. This should be the intersection of allowed struct
 * property field types (https://www.palantir.com/docs/foundry/object-link-types/structs-overview/), and the
 * inhabitants of the BaseParameterType union.
 */
type StructFieldBaseParameterType = StructFieldBaseParameterType_boolean | StructFieldBaseParameterType_integer | StructFieldBaseParameterType_long | StructFieldBaseParameterType_double | StructFieldBaseParameterType_string | StructFieldBaseParameterType_geohash | StructFieldBaseParameterType_timestamp | StructFieldBaseParameterType_date;

/**
 * StructListType specifies that this parameter must be a list of Structs.
 */
interface StructListType {
    structFieldTypes: Record<StructParameterFieldApiName, StructFieldBaseParameterType>;
}

/**
 * StructType specifies that this parameter must be a Struct.
 */
interface StructType$1 {
    structFieldTypes: Record<StructParameterFieldApiName, StructFieldBaseParameterType>;
}

/**
 * TimeSeriesReferenceType specifies that this parameter must be a TimeSeriesReference.
 */
interface TimeSeriesReferenceType {
}

/**
 * TimestampListType specifies that this parameter must be a list of Timestamps.
 */
interface TimestampListType {
    configuration: TimestampConfiguration | undefined;
}

interface BaseParameterType_boolean {
    type: "boolean";
    boolean: BooleanType$1;
}
interface BaseParameterType_booleanList {
    type: "booleanList";
    booleanList: BooleanListType;
}
interface BaseParameterType_integer {
    type: "integer";
    integer: IntegerType$1;
}
interface BaseParameterType_integerList {
    type: "integerList";
    integerList: IntegerListType;
}
interface BaseParameterType_long {
    type: "long";
    long: LongType$1;
}
interface BaseParameterType_longList {
    type: "longList";
    longList: LongListType;
}
interface BaseParameterType_double {
    type: "double";
    double: DoubleType$1;
}
interface BaseParameterType_doubleList {
    type: "doubleList";
    doubleList: DoubleListType;
}
interface BaseParameterType_string {
    type: "string";
    string: StringType$1;
}
interface BaseParameterType_stringList {
    type: "stringList";
    stringList: StringListType;
}
interface BaseParameterType_geohash {
    type: "geohash";
    geohash: GeohashType;
}
interface BaseParameterType_geohashList {
    type: "geohashList";
    geohashList: GeohashListType;
}
interface BaseParameterType_geoshape {
    type: "geoshape";
    geoshape: GeoshapeType;
}
interface BaseParameterType_geoshapeList {
    type: "geoshapeList";
    geoshapeList: GeoshapeListType;
}
interface BaseParameterType_timeSeriesReference {
    type: "timeSeriesReference";
    timeSeriesReference: TimeSeriesReferenceType;
}
interface BaseParameterType_timestamp {
    type: "timestamp";
    timestamp: TimestampType$1;
}
interface BaseParameterType_timestampList {
    type: "timestampList";
    timestampList: TimestampListType;
}
interface BaseParameterType_date {
    type: "date";
    date: DateType$1;
}
interface BaseParameterType_dateList {
    type: "dateList";
    dateList: DateListType;
}
interface BaseParameterType_objectReference {
    type: "objectReference";
    objectReference: ObjectReferenceType;
}
interface BaseParameterType_objectReferenceList {
    type: "objectReferenceList";
    objectReferenceList: ObjectReferenceListType;
}
interface BaseParameterType_objectSetRid {
    type: "objectSetRid";
    objectSetRid: ObjectSetRidType;
}
interface BaseParameterType_interfaceReference {
    type: "interfaceReference";
    interfaceReference: InterfaceReferenceType;
}
interface BaseParameterType_interfaceReferenceList {
    type: "interfaceReferenceList";
    interfaceReferenceList: InterfaceReferenceListType;
}
interface BaseParameterType_objectTypeReference {
    type: "objectTypeReference";
    objectTypeReference: ObjectTypeReferenceType;
}
interface BaseParameterType_attachment {
    type: "attachment";
    attachment: AttachmentType;
}
interface BaseParameterType_attachmentList {
    type: "attachmentList";
    attachmentList: AttachmentListType;
}
interface BaseParameterType_marking {
    type: "marking";
    marking: MarkingType;
}
interface BaseParameterType_markingList {
    type: "markingList";
    markingList: MarkingListType;
}
interface BaseParameterType_mediaReference {
    type: "mediaReference";
    mediaReference: MediaReferenceType;
}
interface BaseParameterType_mediaReferenceList {
    type: "mediaReferenceList";
    mediaReferenceList: MediaReferenceListType;
}
interface BaseParameterType_geotimeSeriesReference {
    type: "geotimeSeriesReference";
    geotimeSeriesReference: GeotimeSeriesReferenceType;
}
interface BaseParameterType_geotimeSeriesReferenceList {
    type: "geotimeSeriesReferenceList";
    geotimeSeriesReferenceList: GeotimeSeriesReferenceListType;
}
interface BaseParameterType_struct {
    type: "struct";
    struct: StructType$1;
}
interface BaseParameterType_structList {
    type: "structList";
    structList: StructListType;
}
/**
 * All of the possible types for Parameters.
 */
type BaseParameterType = BaseParameterType_boolean | BaseParameterType_booleanList | BaseParameterType_integer | BaseParameterType_integerList | BaseParameterType_long | BaseParameterType_longList | BaseParameterType_double | BaseParameterType_doubleList | BaseParameterType_string | BaseParameterType_stringList | BaseParameterType_geohash | BaseParameterType_geohashList | BaseParameterType_geoshape | BaseParameterType_geoshapeList | BaseParameterType_timeSeriesReference | BaseParameterType_timestamp | BaseParameterType_timestampList | BaseParameterType_date | BaseParameterType_dateList | BaseParameterType_objectReference | BaseParameterType_objectReferenceList | BaseParameterType_objectSetRid | BaseParameterType_interfaceReference | BaseParameterType_interfaceReferenceList | BaseParameterType_objectTypeReference | BaseParameterType_attachment | BaseParameterType_attachmentList | BaseParameterType_marking | BaseParameterType_markingList | BaseParameterType_mediaReference | BaseParameterType_mediaReferenceList | BaseParameterType_geotimeSeriesReference | BaseParameterType_geotimeSeriesReferenceList | BaseParameterType_struct | BaseParameterType_structList;

/**
 * Parameters of an ActionType represent what inputs the ActionType requires.
 */
interface Parameter {
    id: ParameterId;
    rid: ParameterRid;
    type: BaseParameterType;
    displayMetadata: ParameterDisplayMetadata;
}

interface SectionContent_parameterId {
    type: "parameterId";
    parameterId: ParameterId;
}
/**
 * Items that we can place in a section.
 */
type SectionContent = SectionContent_parameterId;

interface SectionStyle_box {
    type: "box";
    box: Empty;
}
interface SectionStyle_minimal {
    type: "minimal";
    minimal: Empty;
}
/**
 * Visual rendering style of the Section within an Action Form
 */
type SectionStyle = SectionStyle_box | SectionStyle_minimal;

/**
 * Additional Section Metadata. This is used in rendering the section display.
 */
interface SectionDisplayMetadata {
    displayName: string;
    description: string;
    columnCount: number;
    showTitleBar: boolean;
    collapsedByDefault: boolean;
    style: SectionStyle | undefined;
}

/**
 * The rid for a Section, autogenerated by Ontology-Metadata-Service and used for permissioning and logging.
 */
type SectionRid = string;

/**
 * A physical and logical grouping of parameters on the action form.
 */
interface Section {
    id: SectionId;
    rid: SectionRid;
    content: Array<SectionContent>;
    displayMetadata: SectionDisplayMetadata;
}

/**
 * An ActionType defines the schema of the edits that can be made to Phonograph.
 */
interface ActionTypeMetadata {
    rid: ActionTypeRid;
    apiName: ActionTypeApiName;
    version: ActionTypeVersion;
    displayMetadata: ActionTypeDisplayMetadata;
    parameters: Record<ParameterId, Parameter>;
    sections: Record<SectionId, Section>;
    parameterOrdering: Array<ParameterId>;
    formContentOrdering: Array<FormContent>;
    actionLogConfiguration: ActionLogConfiguration | undefined;
    status: ActionTypeStatus;
    entities: ActionTypeEntities | undefined;
    actionApplyClientSettings: ActionApplyClientPreferences | undefined;
    notificationSettings: ActionNotificationSettings;
    provenance: ActionTypeProvenance | undefined;
    submissionConfiguration: ActionSubmissionConfiguration | undefined;
}

interface ActionType {
    actionTypeLogic: ActionTypeLogic;
    metadata: ActionTypeMetadata;
}

interface ActionTypeLoadResponseV2 {
    actionType: ActionType;
    ontologyRid: OntologyRid;
    ontologyVersion: OntologyVersion;
}

/**
 * The cardinality of the link in the given direction. Cardinality can be "single", meaning an object can link
 * to zero or one other objects, or "many", meaning an object can link to any number of other objects.
 */
type InterfaceLinkTypeCardinality = "SINGLE" | "MANY";

/**
 * A string indicating the API name to use for the interface link. This API name will be used to reference the
 * interface link in programming languages. The name should be given in lowerCamelCase and should be unique
 * across the interface and the superset of its parent interfaces.
 */
type InterfaceLinkTypeApiName = string;

interface InterfaceLinkTypeMetadata {
    displayName: string;
    description: string;
    apiName: InterfaceLinkTypeApiName;
}

interface LinkedEntityTypeId_objectType {
    type: "objectType";
    objectType: ObjectTypeId;
}
interface LinkedEntityTypeId_interfaceType {
    type: "interfaceType";
    interfaceType: InterfaceTypeRid;
}
/**
 * A reference to a linked entity in InterfaceLinkTypes.
 */
type LinkedEntityTypeId = LinkedEntityTypeId_objectType | LinkedEntityTypeId_interfaceType;

interface InterfaceLinkType {
    rid: InterfaceLinkTypeRid;
    metadata: InterfaceLinkTypeMetadata;
    linkedEntityTypeId: LinkedEntityTypeId;
    cardinality: InterfaceLinkTypeCardinality;
    required: boolean;
}

type BuilderPipelineRid = string;

/**
 * Provenance of an entity originating from Builder pipeline.
 */
interface BuilderEntityProvenance {
    pipelineRid: BuilderPipelineRid;
}

/**
 * Edits History
 */
interface EditsHistoryProvenance {
    objectTypeRid: ObjectTypeRid;
}

interface EntityProvenanceSource_builder {
    type: "builder";
    builder: BuilderEntityProvenance;
}
interface EntityProvenanceSource_marketplace {
    type: "marketplace";
    marketplace: MarketplaceEntityProvenance;
}
interface EntityProvenanceSource_editsHistory {
    type: "editsHistory";
    editsHistory: EditsHistoryProvenance;
}
/**
 * Information describing the source provenance of an ontology entity modeled as an extensible union.
 * Each service or client which defines the definition of an ontology entity can declare their custom
 * representation of provenance metadata. Examples may include references to resources, their versions,
 * timestamps etc.
 */
type EntityProvenanceSource = EntityProvenanceSource_builder | EntityProvenanceSource_marketplace | EntityProvenanceSource_editsHistory;

/**
 * Information describing the provenance of an ontology entity.
 */
interface EntityProvenance {
    source: EntityProvenanceSource;
}

type SharedPropertyTypeAlias = Alias;

/**
 * This includes metadata which can be used by front-ends when displaying the SharedPropertyType.
 */
interface SharedPropertyTypeDisplayMetadata {
    description: string | undefined;
    displayName: string;
    visibility: Visibility;
}

/**
 * A property type that can be shared across object types.
 */
interface SharedPropertyType {
    rid: SharedPropertyTypeRid;
    apiName: ObjectTypeFieldApiName$1;
    displayMetadata: SharedPropertyTypeDisplayMetadata;
    indexedForSearch: boolean;
    baseFormatter: BaseFormatter | undefined;
    type: Type;
    typeClasses: Array<TypeClass>;
    dataConstraints: DataConstraints | undefined;
    gothamMapping: SharedPropertyTypeGothamMapping | undefined;
    valueType: ValueTypeReference$1 | undefined;
    aliases: Array<SharedPropertyTypeAlias>;
    provenance: EntityProvenance | undefined;
}

interface InterfaceSharedPropertyType {
    sharedPropertyType: SharedPropertyType;
    required: boolean;
}

/**
 * This includes metadata which can be used by front-ends when displaying an interface.
 */
interface InterfaceTypeDisplayMetadata {
    displayName: string;
    description: string | undefined;
    icon: Icon | undefined;
}

/**
 * This status indicates that breaking changes should not be made to the interface and it should be safe to use
 * in user facing workflows. The interface will not be removed without first being deprecated.
 */
interface ActiveInterfaceTypeStatus {
}

/**
 * This status indicates that the interface is reaching the end of its life and will be removed as per the
 * deadline specified.
 */
interface DeprecatedInterfaceTypeStatus {
    message: string;
    deadline: string;
    replacedBy: InterfaceTypeRid | undefined;
}

/**
 * This status indicates that the interface is an example.
 * It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
interface ExampleInterfaceTypeStatus {
}

/**
 * This status indicates that the interface is in development. Please refrain from using it in critical workflows
 * as breaking changes can be made at anytime.
 */
interface ExperimentalInterfaceTypeStatus {
}

interface InterfaceTypeStatus_experimental {
    type: "experimental";
    experimental: ExperimentalInterfaceTypeStatus;
}
interface InterfaceTypeStatus_active {
    type: "active";
    active: ActiveInterfaceTypeStatus;
}
interface InterfaceTypeStatus_deprecated {
    type: "deprecated";
    deprecated: DeprecatedInterfaceTypeStatus;
}
interface InterfaceTypeStatus_example {
    type: "example";
    example: ExampleInterfaceTypeStatus;
}
type InterfaceTypeStatus = InterfaceTypeStatus_experimental | InterfaceTypeStatus_active | InterfaceTypeStatus_deprecated | InterfaceTypeStatus_example;

/**
 * Represents a collection of properties that object types can implement. If an object type implements an
 * interface, it is guaranteed to have the conform to the interface shape.
 */
interface InterfaceType {
    rid: InterfaceTypeRid;
    apiName: InterfaceTypeApiName;
    displayMetadata: InterfaceTypeDisplayMetadata;
    status: InterfaceTypeStatus;
    properties: Array<SharedPropertyType>;
    allProperties: Array<SharedPropertyType>;
    propertiesV2: Record<SharedPropertyTypeRid, InterfaceSharedPropertyType>;
    allPropertiesV2: Record<SharedPropertyTypeRid, InterfaceSharedPropertyType>;
    extendsInterfaces: Array<InterfaceTypeRid>;
    allExtendsInterfaces: Array<InterfaceTypeRid>;
    links: Array<InterfaceLinkType>;
    allLinks: Array<InterfaceLinkType>;
}

interface InterfaceTypeLoadResponse {
    interfaceType: InterfaceType;
    ontologyRid: OntologyRid;
    ontologyVersion: OntologyVersion;
}

/**
 * Represents the type of ObjectDb, for example Highbury or Writeback. The value corresponds to the type field
 * advertised by the ObjectDb in the "funnel-sync-manager" discovery role.
 *
 * The maximum size of the objects DB type is 20 bytes, when encoded in UTF-8.
 */
type ObjectDbType = string;

/**
 * Identifier for an ObjectDb
 *
 * The maximum size of the objects database rid is 80 bytes, when encoded in UTF-8.
 */
type ObjectDbRid = string;

/**
 * Configuration for one instance of an ObjectDb, for example for one Highbury cluster.
 * If `configValue` is left empty, the ObjectDb should apply the default configuration for this entity.
 * If `configValue` is present, interpretation of the string is responsibility of the ObjectDb.
 */
interface ObjectDbConfig {
    configValue: string | undefined;
}

/**
 * Configuration for one type of ObjectDb which contains the individual configurations for each cluster
 * of the particular ObjectDbType.
 */
interface ObjectDbTypeConfig {
    objectDbConfigs: Record<ObjectDbRid, ObjectDbConfig>;
}

/**
 * Contains ObjectDb configurations for a particular ObjectType or LinkType.
 */
interface EntityConfig {
    objectDbTypeConfigs: Record<ObjectDbType, ObjectDbTypeConfig>;
}

/**
 * Entity can be stored in Phonograph. Note that it is not guaranteed that the object type or link type is
 * currently registered with Phonograph. There is no guarantee the object type or link type has finished
 * syncing and is queryable via Phonograph.
 */
interface ObjectStorageV1 {
}

/**
 * Contains configuration to import edits history from Phonograph to Funnel/Highbury.
 */
interface EditsHistoryImportConfiguration {
}

/**
 * Entity can be stored in Phonograph and Highbury though the data is read-only. Edits are disabled.
 * This is a legacy state which should not be used anymore. OMS guarantees that the latest version of each
 * ontology does not return this state for any object type or link type.
 */
interface ReadOnlyV1V2 {
}

interface EntityMigrationCategory_objectStorageV1 {
    type: "objectStorageV1";
    objectStorageV1: ObjectStorageV1;
}
interface EntityMigrationCategory_readOnlyV1V2 {
    type: "readOnlyV1V2";
    readOnlyV1V2: ReadOnlyV1V2;
}
/**
 * Migration category depending on the previous targetStorageBackend setting.
 */
type EntityMigrationCategory = EntityMigrationCategory_objectStorageV1 | EntityMigrationCategory_readOnlyV1V2;

type DayOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

interface DayTime {
    day: DayOfWeek;
    time: string;
    zoneId: string;
}

/**
 * An interval between two times. A start and end time that are exactly the same mean all day.
 */
interface TransitionWindow {
    start: DayTime;
    end: DayTime;
}

/**
 * A set of TransitionWindows during which the migration state machine can do possibly disruptive transitions.
 * An empty set means that it is always safe to do the transitions. Examples of disruptive transitions are
 * temporarily disabling edits and perf degradation when interacting with migrating ontology entity.
 */
interface TransitionWindows {
    timeIntervals: Array<TransitionWindow>;
}

/**
 * Contains configuration for Phonograph to Funnel/Highbury migration.
 */
interface MigrationConfiguration {
    entityMigrationCategory: EntityMigrationCategory;
    minMigrationDuration: string;
    transitionWindows: TransitionWindows;
    transitionRetryLimit: number;
}

/**
 * Entity can be stored in Highbury and other V2 Object DBs. It is not possible to store the entity in Phonograph.
 * Edits can be enabled or disabled using the `arePatchesEnabled` field in ObjectTypeEntityMetadata/LinkTypeEntityMetadata.
 *
 * Note that this field indicates a target state. There is no guarantee that the object type or link type has
 * finished syncing. A migration may currently be in progress and queries may still be served by Phonograph during
 * particular stages of the migration process.
 *
 * In order to determine whether the object type or link type can be queried via OSv2 the Funnel getCurrentView
 * endpoint can be used.
 */
interface ObjectStorageV2 {
    migrationConfiguration: MigrationConfiguration | undefined;
    editsHistoryImportConfiguration: EditsHistoryImportConfiguration | undefined;
}

interface StorageBackend_objectStorageV1 {
    type: "objectStorageV1";
    objectStorageV1: ObjectStorageV1;
}
interface StorageBackend_readOnlyV1V2 {
    type: "readOnlyV1V2";
    readOnlyV1V2: ReadOnlyV1V2;
}
interface StorageBackend_objectStorageV2 {
    type: "objectStorageV2";
    objectStorageV2: ObjectStorageV2;
}
/**
 * Storage backend intended to be used for the Entity. This is used to indicate whether
 * an entity can be stored in Phonograph or Highbury.
 */
type StorageBackend = StorageBackend_objectStorageV1 | StorageBackend_readOnlyV1V2 | StorageBackend_objectStorageV2;

/**
 * Contains additional metadata associated with a LinkType.
 */
interface LinkTypeEntityMetadata {
    entityConfig: EntityConfig;
    arePatchesEnabled: boolean;
    targetStorageBackend: StorageBackend;
    provenance: EntityProvenance | undefined;
    redacted: boolean | undefined;
}

/**
 * Represents a link between two ObjectTypes with an intermediary ObjectType acting as a bridge.
 * This LinkType can be used to jump from ObjectType A to B without specifying two separate search-arounds.
 * This LinkType can also be used to simulate a ManyToMany LinkType backed by an RV, or a ManyToMany LinkType
 * with properties.
 *
 * If any special interaction is required on the intermediary ObjectType (for example filtering) the two
 * connecting LinkTypes should be used instead.
 */
interface IntermediaryLinkDefinition {
    objectTypeAToBLinkMetadata: LinkTypeMetadata;
    objectTypeBToALinkMetadata: LinkTypeMetadata;
    intermediaryObjectTypeRid: ObjectTypeRid;
    objectTypeRidA: ObjectTypeRid;
    objectTypeRidB: ObjectTypeRid;
    aToIntermediaryLinkTypeRid: LinkTypeRid;
    intermediaryToBLinkTypeRid: LinkTypeRid;
}

/**
 * An identifier for a peered LinkType used for establishing a mapping between local LinkTypes and remote
 * LinkTypes for Peering. Before a link can be peered, a user must configure a mapping between the local and
 * remote LinkType for that link. If the local and remote LinkType share the same LinkTypePeeringRid, Peering
 * will suggest forming a mapping between those types.
 *
 * LinkTypePeeringRids are preserved in Marketplace blocks, so LinkTypes installed from the same Marketplace
 * definition on different stacks will share a LinkTypePeeringRid if the original LinkType packaged in
 * Marketplace has a LinkTypePeeringRid.
 */
type LinkTypePeeringRid = string;

interface LinkTypePeeringMetadataV1 {
    enabled: boolean;
    peeringRid: LinkTypePeeringRid;
}

interface LinkTypePeeringMetadata_v1 {
    type: "v1";
    v1: LinkTypePeeringMetadataV1;
}
type LinkTypePeeringMetadata = LinkTypePeeringMetadata_v1;

interface ManyToManyLinkDefinition {
    objectTypeAToBLinkMetadata: LinkTypeMetadata;
    objectTypeBToALinkMetadata: LinkTypeMetadata;
    objectTypeRidA: ObjectTypeRid;
    objectTypeRidB: ObjectTypeRid;
    objectTypeAPrimaryKeyPropertyMapping: Record<PropertyTypeRid, PropertyTypeRid>;
    objectTypeBPrimaryKeyPropertyMapping: Record<PropertyTypeRid, PropertyTypeRid>;
    peeringMetadata: LinkTypePeeringMetadata | undefined;
}

/**
 * This hint can be used to inform consumers whether the number of links on the many side of a
 * OneToManyLinkDefinition is intended to be one or more.
 */
type OneToManyLinkCardinalityHint = "ONE_TO_ONE" | "ONE_TO_MANY";

interface OneToManyLinkDefinition {
    cardinalityHint: OneToManyLinkCardinalityHint;
    manyToOneLinkMetadata: LinkTypeMetadata;
    objectTypeRidManySide: ObjectTypeRid;
    objectTypeRidOneSide: ObjectTypeRid;
    oneToManyLinkMetadata: LinkTypeMetadata;
    oneSidePrimaryKeyToManySidePropertyMapping: Record<PropertyTypeRid, PropertyTypeRid>;
}

interface LinkDefinition_manyToMany {
    type: "manyToMany";
    manyToMany: ManyToManyLinkDefinition;
}
interface LinkDefinition_oneToMany {
    type: "oneToMany";
    oneToMany: OneToManyLinkDefinition;
}
interface LinkDefinition_intermediary {
    type: "intermediary";
    intermediary: IntermediaryLinkDefinition;
}
type LinkDefinition$1 = LinkDefinition_manyToMany | LinkDefinition_oneToMany | LinkDefinition_intermediary;

/**
 * This status indicates that the LinkType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
interface ActiveLinkTypeStatus {
}

/**
 * This status indicates that the LinkType is reaching the end of its life and will be removed as per the deadline specified.
 */
interface DeprecatedLinkTypeStatus {
    message: string;
    deadline: string;
    replacedBy: LinkTypeRid | undefined;
}

/**
 * This status indicates that the LinkType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
interface ExampleLinkTypeStatus {
}

/**
 * This status indicates that the LinkType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
interface ExperimentalLinkTypeStatus {
}

interface LinkTypeStatus_experimental {
    type: "experimental";
    experimental: ExperimentalLinkTypeStatus;
}
interface LinkTypeStatus_active {
    type: "active";
    active: ActiveLinkTypeStatus;
}
interface LinkTypeStatus_deprecated {
    type: "deprecated";
    deprecated: DeprecatedLinkTypeStatus;
}
interface LinkTypeStatus_example {
    type: "example";
    example: ExampleLinkTypeStatus;
}
/**
 * The status to indicate whether the LinkType is either Experimental, Active, Deprecated, or Example.
 */
type LinkTypeStatus = LinkTypeStatus_experimental | LinkTypeStatus_active | LinkTypeStatus_deprecated | LinkTypeStatus_example;

/**
 * LinkType(s) are models for relationships between ObjectType(s).
 */
interface LinkType {
    definition: LinkDefinition$1;
    id: LinkTypeId;
    rid: LinkTypeRid;
    status: LinkTypeStatus;
    redacted: boolean | undefined;
}

/**
 * An rid identifying a datasource for an Ontology entity. This rid is a randomly generated identifier
 * and is safe to log.
 */
type DatasourceRid = string;

/**
 * Contains configuration options for how edits behave in phonograph.
 */
interface EditsConfiguration {
    onlyAllowPrivilegedEdits: boolean;
}

/**
 * A string indicating the branch name. This is not safe to log as it is user-inputted and may
 * contain sensitive information.
 */
type BranchId = string;

/**
 * A string identifying a column name in a Foundry dataset. This is not safe to log as it is
 * user-inputted and may contain sensitive information.
 */
type ColumnName = string;

/**
 * An rid identifying a Foundry dataset. This rid is a randomly generated identifier and is safe to log.
 */
type DatasetRid = string;

/**
 * Many to many link type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
 * branch.
 */
interface ManyToManyLinkTypeDatasetDatasource {
    branchId: BranchId;
    datasetRid: DatasetRid;
    objectTypeAPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
    objectTypeBPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
    writebackDatasetRid: DatasetRid | undefined;
}

/**
 * All data will be retained.
 */
interface NoRetentionPolicy {
}

/**
 * A retention policy where the datasource will contain at least data from the specified time window.
 */
interface TimeBasedRetentionPolicy {
    window: string;
}

interface RetentionPolicy_time {
    type: "time";
    time: TimeBasedRetentionPolicy;
}
interface RetentionPolicy_none {
    type: "none";
    none: NoRetentionPolicy;
}
type RetentionPolicy = RetentionPolicy_time | RetentionPolicy_none;

/**
 * An rid identifying a Foundry stream. This rid is a randomly generated identifier and is safe to log.
 */
type StreamLocatorRid = string;

/**
 * Representing a stream locator which is uniquely defined by its rid and branch id.
 */
interface StreamLocator {
    streamLocatorRid: StreamLocatorRid;
    branchId: BranchId;
}

/**
 * Many to many link type datasource that is backed by a stream, uniquely identified by its StreamLocator.
 */
interface ManyToManyLinkTypeStreamDatasource {
    retentionPolicy: RetentionPolicy;
    streamLocator: StreamLocator;
    objectTypeAPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
    objectTypeBPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
}

interface ManyToManyLinkTypeDatasourceDefinition_dataset {
    type: "dataset";
    dataset: ManyToManyLinkTypeDatasetDatasource;
}
interface ManyToManyLinkTypeDatasourceDefinition_stream {
    type: "stream";
    stream: ManyToManyLinkTypeStreamDatasource;
}
/**
 * Wrapper type for all supported many to many link type datasource types.
 */
type ManyToManyLinkTypeDatasourceDefinition = ManyToManyLinkTypeDatasourceDefinition_dataset | ManyToManyLinkTypeDatasourceDefinition_stream;

interface ManyToManyLinkTypeDatasource {
    rid: DatasourceRid;
    datasource: ManyToManyLinkTypeDatasourceDefinition;
    editsConfiguration: EditsConfiguration | undefined;
    redacted: boolean | undefined;
}

/**
 * Response to LinkTypeLoadRequest.
 */
interface LinkTypeLoadResponse {
    linkType: LinkType;
    ontologyRid: OntologyRid;
    ontologyVersion: OntologyVersion;
    datasources: Array<ManyToManyLinkTypeDatasource>;
    entityMetadata: LinkTypeEntityMetadata | undefined;
}

type GothamIntrinsicV2 = "GOTHAM_INTRINSIC_START_DATE" | "GOTHAM_INTRINSIC_END_DATE" | "GOTHAM_INTRINSIC_LAT_LONG" | "GOTHAM_INTRINSIC_MGRS";

/**
 * This property represents a Gotham End Date Intrinsic. This should be mapped from a Timestamp property.
 */
interface GothamIntrinsicEndDate {
}

/**
 * This property represents a Gotham Lat/Long Intrinsic. This should be mapped from a GeoHash property.
 */
interface GothamIntrinsicLatLong {
}

/**
 * This property represents a Gotham MGRS Intrinsic. This should be mapped from a String property.
 */
interface GothamIntrinsicMgrs {
}

/**
 * This property represents a Gotham Start Date Intrinsic. This should be mapped from a Timestamp property.
 */
interface GothamIntrinsicStartDate {
}

interface GothamIntrinsic_startDate {
    type: "startDate";
    startDate: GothamIntrinsicStartDate;
}
interface GothamIntrinsic_endDate {
    type: "endDate";
    endDate: GothamIntrinsicEndDate;
}
interface GothamIntrinsic_latLong {
    type: "latLong";
    latLong: GothamIntrinsicLatLong;
}
interface GothamIntrinsic_mgrs {
    type: "mgrs";
    mgrs: GothamIntrinsicMgrs;
}
type GothamIntrinsic = GothamIntrinsic_startDate | GothamIntrinsic_endDate | GothamIntrinsic_latLong | GothamIntrinsic_mgrs;

/**
 * A foundry property that represents an object level intrinsic in Gotham. These are read from TypeClasses.
 */
interface GothamObjectIntrinsicMapping {
    gothamIntrinsicType: GothamIntrinsic;
}

type GothamObjectTypeUri = string;

/**
 * These values represent the 3 base object types from Gotham ontology.
 */
type GothamOntologyParentType = "ENTITY" | "DOCUMENT" | "EVENT";

type GothamOntologyParentTypeUri = string;

type GothamDatasourceMetadata = "GOTHAM_DSR_DATASOURCE_NAME" | "GOTHAM_DSR_OBJECT_GID" | "GOTHAM_DSR_CREATED_BY" | "GOTHAM_DSR_LAST_UPDATED_BY" | "GOTHAM_DSR_CREATED_AT" | "GOTHAM_DSR_LAST_UPDATED_AT";

interface GothamPropertyDatasourceMappingProperty {
    propertyMappings: Record<GothamDatasourceMetadata, PropertyTypeRid>;
}

interface GothamPropertyDatasourceMappingStruct {
    propertyMappings: Record<GothamDatasourceMetadata, StructFieldRid>;
}

interface GothamPropertyDatasourceMapping_property {
    type: "property";
    property: GothamPropertyDatasourceMappingProperty;
}
interface GothamPropertyDatasourceMapping_struct {
    type: "struct";
    struct: GothamPropertyDatasourceMappingStruct;
}
type GothamPropertyDatasourceMapping = GothamPropertyDatasourceMapping_property | GothamPropertyDatasourceMapping_struct;

/**
 * A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
 * The propertyMappings field stores which other properties this intrinsic should be set for in Gotham.
 */
interface GothamPropertyIntrinsicMapping {
    gothamIntrinsicType: GothamIntrinsic;
    propertyMappings: Array<PropertyTypeRid>;
}

/**
 * The propertyMappings field stores which properties populate the intrinsic values for specific Gotham
 * intrinsics.
 *
 * A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
 */
interface GothamPropertyIntrinsicMappingV2 {
    propertyMappings: Record<GothamIntrinsicV2, PropertyTypeRid>;
}

/**
 * The propertyMappings field stores which struct fields populate the Gotham intrinsic values for this property.
 * Struct fields that are marked as intrinsics here will be ignored during type mapping. This means if you had a
 * struct like {age: int, startDate: timestamp (intrinsic), location: geohash (intrinsic)}, Gotham would ignore
 * the latter 2 fields and map this as an integer property type, not a struct property type.
 */
interface GothamPropertyIntrinsicMappingV3 {
    propertyMappings: Record<GothamIntrinsicV2, StructFieldRid>;
}

interface PropertyTypeGothamMapping {
    uri: GothamPropertyTypeUri;
    structApiNameToComponentUriMapping: Record<ObjectTypeFieldApiName$1, GothamPropertyComponentUri>;
}

type RevDbIntegrationState = "ENABLED" | "PAUSED" | "DISABLED";

interface ObjectTypeGothamMapping {
    uri: GothamObjectTypeUri;
    parentType: GothamOntologyParentType;
    parentTypeUri: GothamOntologyParentTypeUri | undefined;
    gothamMappingEnabled: boolean | undefined;
    propertyMapping: Record<PropertyTypeRid, PropertyTypeGothamMapping>;
    objectLevelIntrinsics: Record<PropertyTypeRid, GothamObjectIntrinsicMapping>;
    propertyLevelIntrinsics: Record<PropertyTypeRid, GothamPropertyIntrinsicMapping>;
    objectLevelIntrinsicsV2: Record<GothamIntrinsicV2, PropertyTypeRid>;
    propertyLevelIntrinsicsV2: Record<PropertyTypeRid, GothamPropertyIntrinsicMappingV2>;
    propertyLevelIntrinsicsV3: Record<PropertyTypeRid, GothamPropertyIntrinsicMappingV3>;
    propertyLevelDatasources: Record<PropertyTypeRid, GothamPropertyDatasourceMapping>;
    dataSource: PropertyTypeRid | undefined;
    gothamTitleProperty: PropertyTypeRid | undefined;
    revDbIntegrationState: RevDbIntegrationState;
}

/**
 * Action Log is not required for this ObjectType.
 */
interface ActionLogNotRequired {
}

/**
 * Action Log is required for this ObjectType.
 */
interface ActionLogRequiredForObjectType {
}

interface ActionLogRequirednessSetting_actionLogNotRequired {
    type: "actionLogNotRequired";
    actionLogNotRequired: ActionLogNotRequired;
}
interface ActionLogRequirednessSetting_actionLogRequiredForObjectType {
    type: "actionLogRequiredForObjectType";
    actionLogRequiredForObjectType: ActionLogRequiredForObjectType;
}
/**
 * Types of Action Log requiredness. Currently logging is either required or not but in future other kinds of
 * requiredness may be introduced.
 */
type ActionLogRequirednessSetting = ActionLogRequirednessSetting_actionLogNotRequired | ActionLogRequirednessSetting_actionLogRequiredForObjectType;

/**
 * Types of Action Log requiredness. Currently logging is either required or not but in future other kinds of
 * requiredness, such as property-level logging requiredness, may be introduced.
 */
interface ActionLogRequirednessMetadata {
    actionLogRequirednessSetting: ActionLogRequirednessSetting;
    lastUpdated: string;
}

/**
 * Edits history tracking is enabled for this entity with the specified configuration. All action edits
 * for objects of this object type will be available for querying from the point the history was enabled.
 */
interface EditsHistoryConfig {
    store: ObjectTypeRid;
}

/**
 * Edits history is disabled for this entity.
 */
interface NoEditsHistory {
}

interface EditsHistory_config {
    type: "config";
    config: EditsHistoryConfig;
}
interface EditsHistory_none {
    type: "none";
    none: NoEditsHistory;
}
type EditsHistory = EditsHistory_config | EditsHistory_none;

/**
 * For this strategy, the datasource value should be used when the time in the given timestamp property is
 * more recent than the time the patch is applied.
 */
interface TimestampPropertyStrategy {
    timestampPropertyRid: PropertyTypeRid;
}

interface EditsResolutionStrategy_timestampProperty {
    type: "timestampProperty";
    timestampProperty: TimestampPropertyStrategy;
}
/**
 * The strategy used when resolving conflicts between user edits and datasource values.
 */
type EditsResolutionStrategy = EditsResolutionStrategy_timestampProperty;

/**
 * Wrapper for multiple strategies as objects can have multiple datasources.
 */
interface EditsResolutionStrategies {
    strategies: Record<DatasourceRid, EditsResolutionStrategy>;
}

type ObjectTypeAlias = Alias;

/**
 * Delegates the selected transform profile to Funnel.
 */
interface AutomaticTransformProfile {
}

/**
 * Funnel jobs for this object types will be run with the largest possible transform profile. Note that this
 * value is designed as a break-the-glass option for failing jobs and should be used carefully. Unnecessary
 * usage of this option could lead to expensive builds and hog resources from other builds/services.
 */
interface ExtraLargeTransformProfile {
}

interface TransformProfileConfig_automatic {
    type: "automatic";
    automatic: AutomaticTransformProfile;
}
interface TransformProfileConfig_extraLarge {
    type: "extraLarge";
    extraLarge: ExtraLargeTransformProfile;
}
/**
 * A transform profile is an abstraction over the set of Spark profiles to be used for a Funnel job. The exact
 * Spark profiles used may be defined elsewhere (e.g. Funnel).
 */
type TransformProfileConfig = TransformProfileConfig_automatic | TransformProfileConfig_extraLarge;

/**
 * Settings related to indexing object types in Funnel.
 */
interface ObjectTypeIndexingSettings {
    transformProfileConfig: TransformProfileConfig | undefined;
}

/**
 * Contains additional metadata associated with an ObjectType.
 */
interface ObjectTypeEntityMetadata {
    entityConfig: EntityConfig;
    arePatchesEnabled: boolean;
    targetStorageBackend: StorageBackend;
    redacted: boolean | undefined;
    actionLogRequirednessMetadata: ActionLogRequirednessMetadata | undefined;
    diffEdits: boolean;
    gothamMapping: ObjectTypeGothamMapping | undefined;
    provenance: EntityProvenance | undefined;
    editsResolutionStrategies: EditsResolutionStrategies;
    aliases: Array<ObjectTypeAlias>;
    editsHistory: EditsHistory;
    objectTypeIndexingSettings: ObjectTypeIndexingSettings | undefined;
}

/**
 * A Cbac, Mandatory or Organization marking ID
 */
type MarkingId = string;

/**
 * Contains a set of markings that represents the max classification of this datasource.
 */
interface ClassificationConstraint {
    markings: Array<MarkingId>;
    allowEmptyMarkings: boolean | undefined;
}

/**
 * All mandatory marking properties linked to this datasource must only contain values within this set. It must have at least one marking specified. Note that Organization MarkingIds are not allowed in this set.
 */
interface MandatoryMarkingConstraint {
    markingIds: Array<MarkingId>;
}

/**
 * Contains information about the different security controls applied on data in this datasource. Note that
 * currently this is only allowed on Restricted View-like datasources.
 */
interface DataSecurity {
    markingConstraint: MandatoryMarkingConstraint | undefined;
    classificationConstraint: ClassificationConstraint | undefined;
}

/**
 * Object type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
 * branch.
 * Deprecated in favor of ObjectTypeDatasetDatasourceV2
 */
interface ObjectTypeDatasetDatasource {
    branchId: BranchId;
    datasetRid: DatasetRid;
    propertyMapping: Record<PropertyTypeRid, ColumnName>;
    writebackDatasetRid: DatasetRid | undefined;
}

/**
 * A property type without a backing dataset column. It can only be populated via Actions.
 */
interface EditOnlyPropertyType {
}

type StructFieldName = string;

interface NestedStructFieldApiNameMapping {
    apiName: ObjectTypeFieldApiName$1;
    mappings: Record<StructFieldName, NestedStructFieldApiNameMapping>;
}

/**
 * A mapping from the backing column struct field names to the struct property type field api names. Optionally
 * allows specifying nested fields, although OMS will throw in practice since this is only to avoid an API break
 * in the future if we want to support nested structs.
 */
interface StructFieldApiNameMapping {
    column: ColumnName;
    mapping: Record<StructFieldName, NestedStructFieldApiNameMapping>;
}

interface PropertyTypeMappingInfo_column {
    type: "column";
    column: ColumnName;
}
interface PropertyTypeMappingInfo_editOnly {
    type: "editOnly";
    editOnly: EditOnlyPropertyType;
}
interface PropertyTypeMappingInfo_struct {
    type: "struct";
    struct: StructFieldApiNameMapping;
}
/**
 * This indicates whether the property type is backed by a dataset column, or is unbacked and hence an
 * edit only property type.
 */
type PropertyTypeMappingInfo = PropertyTypeMappingInfo_column | PropertyTypeMappingInfo_editOnly | PropertyTypeMappingInfo_struct;

/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
interface ObjectTypeDatasetDatasourceV2 {
    branchId: BranchId;
    datasetRid: DatasetRid;
    propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
}

/**
 * A randomly generated rid that identifies a unique PropertySecurityGroup.
 */
type PropertySecurityGroupRid = string;

interface SecurityGroupAndCondition {
    conditions: Array<SecurityGroupGranularCondition>;
}

type SecurityGroupComparisonOperator = "EQUAL" | "INTERSECTS" | "SUPERSET_OF" | "SUBSET_OF";

interface SecurityGroupComparisonConstant_string {
    type: "string";
    string: string;
}
interface SecurityGroupComparisonConstant_boolean {
    type: "boolean";
    boolean: boolean;
}
interface SecurityGroupComparisonConstant_strings {
    type: "strings";
    strings: Array<string>;
}
/**
 * A value represented by a constant.
 */
type SecurityGroupComparisonConstant = SecurityGroupComparisonConstant_string | SecurityGroupComparisonConstant_boolean | SecurityGroupComparisonConstant_strings;

/**
 * Unique Identifier for a Multipass group
 */
type GroupId = string;

/**
 * Specifies a comparison against the user's multipass groupIds.
 */
interface SecurityGroupGroupIdsUserProperty {
    parentGroupId: GroupId | undefined;
}

/**
 * The user's group IDs
 */
interface SecurityGroupGroupNamesUserProperty {
    realm: string;
    parentGroupId: string | undefined;
}

/**
 * The user's attributes.
 */
interface SecurityGroupUserAttributesUserProperty {
    attributeKey: string;
}

/**
 * Specifies a comparison against the user's multipass userId.
 */
interface SecurityGroupUserIdUserProperty {
}

/**
 * The user's username
 */
interface SecurityGroupUsernameUserProperty {
    realm: string;
}

interface SecurityGroupComparisonUserProperty_userId {
    type: "userId";
    userId: SecurityGroupUserIdUserProperty;
}
interface SecurityGroupComparisonUserProperty_username {
    type: "username";
    username: SecurityGroupUsernameUserProperty;
}
interface SecurityGroupComparisonUserProperty_groupIds {
    type: "groupIds";
    groupIds: SecurityGroupGroupIdsUserProperty;
}
interface SecurityGroupComparisonUserProperty_groupNames {
    type: "groupNames";
    groupNames: SecurityGroupGroupNamesUserProperty;
}
interface SecurityGroupComparisonUserProperty_userAttributes {
    type: "userAttributes";
    userAttributes: SecurityGroupUserAttributesUserProperty;
}
/**
 * A value represented by a property of a user.
 */
type SecurityGroupComparisonUserProperty = SecurityGroupComparisonUserProperty_userId | SecurityGroupComparisonUserProperty_username | SecurityGroupComparisonUserProperty_groupIds | SecurityGroupComparisonUserProperty_groupNames | SecurityGroupComparisonUserProperty_userAttributes;

interface SecurityGroupComparisonValue_constant {
    type: "constant";
    constant: SecurityGroupComparisonConstant;
}
interface SecurityGroupComparisonValue_property {
    type: "property";
    property: PropertyTypeRid;
}
interface SecurityGroupComparisonValue_userProperty {
    type: "userProperty";
    userProperty: SecurityGroupComparisonUserProperty;
}
type SecurityGroupComparisonValue = SecurityGroupComparisonValue_constant | SecurityGroupComparisonValue_property | SecurityGroupComparisonValue_userProperty;

interface SecurityGroupComparisonCondition {
    operator: SecurityGroupComparisonOperator;
    left: SecurityGroupComparisonValue;
    right: SecurityGroupComparisonValue;
}

/**
 * Condition that specifies that user's markings must be evaluated against the marking(s) contained on each
 * object's 'property'.
 *
 * Note that the specified property's propertyType must be of type MarkingPropertyType or ArrayPropertyType
 * of MarkingPropertyTypes.
 */
interface SecurityGroupMarkingsCondition {
    property: PropertyTypeRid;
}

/**
 * True if the condition is false. This condition cannot have an empty property type.
 */
interface SecurityGroupNotCondition {
    condition: SecurityGroupGranularCondition;
}

interface SecurityGroupOrCondition {
    conditions: Array<SecurityGroupGranularCondition>;
}

/**
 * Always evaluates to true.
 */
interface SecurityGroupTrueCondition {
}

interface SecurityGroupGranularCondition_not {
    type: "not";
    not: SecurityGroupNotCondition;
}
interface SecurityGroupGranularCondition_true {
    type: "true";
    true: SecurityGroupTrueCondition;
}
interface SecurityGroupGranularCondition_and {
    type: "and";
    and: SecurityGroupAndCondition;
}
interface SecurityGroupGranularCondition_or {
    type: "or";
    or: SecurityGroupOrCondition;
}
interface SecurityGroupGranularCondition_markings {
    type: "markings";
    markings: SecurityGroupMarkingsCondition;
}
interface SecurityGroupGranularCondition_comparison {
    type: "comparison";
    comparison: SecurityGroupComparisonCondition;
}
/**
 * This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
 * Note that more conditions can and will be added in the future, as the need arises.
 */
type SecurityGroupGranularCondition = SecurityGroupGranularCondition_not | SecurityGroupGranularCondition_true | SecurityGroupGranularCondition_and | SecurityGroupGranularCondition_or | SecurityGroupGranularCondition_markings | SecurityGroupGranularCondition_comparison;

interface SecurityGroupMandatoryPolicy {
    markings: Array<MarkingId>;
    assumedMarkings: Array<MarkingId>;
}

/**
 * Ontology-managed granular security applied to the properties in the group. User must also first satisfy the
 * additionalMandatory security markings, if any are specified, to have visibility to the properties within
 * this group that are allowed by the granular policy.
 *
 * The granular policy specified must be authorized by the overall ObjectTypeDatasource's dataSecurity for
 * every "row" (object or relation).
 */
interface SecurityGroupGranularPolicy {
    granularPolicyCondition: SecurityGroupGranularCondition;
    additionalMandatory: SecurityGroupMandatoryPolicy;
}

/**
 * Ontology-managed granular policy applied to the properties in the group.
 */
interface SecurityGroupGranularSecurityDefinition {
    viewPolicy: SecurityGroupGranularPolicy;
}

/**
 * Ontology-managed mandatory security applied to the properties in the security group.
 */
interface SecurityGroupMandatoryOnlySecurityDefinition {
    policy: SecurityGroupMandatoryPolicy;
}

interface SecurityGroupSecurityDefinition_mandatoryOnly {
    type: "mandatoryOnly";
    mandatoryOnly: SecurityGroupMandatoryOnlySecurityDefinition;
}
interface SecurityGroupSecurityDefinition_granular {
    type: "granular";
    granular: SecurityGroupGranularSecurityDefinition;
}
type SecurityGroupSecurityDefinition = SecurityGroupSecurityDefinition_mandatoryOnly | SecurityGroupSecurityDefinition_granular;

/**
 * Defines a grouping of properties sharing the same security.
 *
 * One and exactly one of the specified groups must contain the primary key property(ies). If there
 * are multiple primary key properties, they must belong to the same property group. The security of the
 * property group that includes the primary key also specifies overall object visibility: if the user does not
 * pass this property group's security, the entire object is invisible, regardless of visibility of other
 * property groups.
 */
interface PropertySecurityGroup {
    rid: PropertySecurityGroupRid;
    properties: Array<PropertyTypeRid>;
    security: SecurityGroupSecurityDefinition;
}

/**
 * Groupings of properties into different security "buckets." Every property of the entity type must belong
 * to one and only one property security group.
 */
interface PropertySecurityGroups {
    groups: Array<PropertySecurityGroup>;
}

/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch, and uses PropertySecurityGroups to allow grouping those properties
 * into different security levels. It is only compatible with object storage v2, hence does not have a
 * writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
interface ObjectTypeDatasetDatasourceV3 {
    branchId: BranchId;
    datasetRid: DatasetRid;
    propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
    propertySecurityGroups: PropertySecurityGroups | undefined;
}

interface PropertyTypeIdentifier_propertyType {
    type: "propertyType";
    propertyType: PropertyTypeRid;
}
type PropertyTypeIdentifier = PropertyTypeIdentifier_propertyType;

/**
 * A collection of values of a property type.
 */
interface LinkedCollection {
    linkedProperty: PropertyTypeIdentifier;
    limit: number;
}

/**
 * Total count of objects
 */
interface LinkedCountMetric {
}

interface DerivedPropertyAggregation_count {
    type: "count";
    count: LinkedCountMetric;
}
interface DerivedPropertyAggregation_avg {
    type: "avg";
    avg: PropertyTypeIdentifier;
}
interface DerivedPropertyAggregation_max {
    type: "max";
    max: PropertyTypeIdentifier;
}
interface DerivedPropertyAggregation_min {
    type: "min";
    min: PropertyTypeIdentifier;
}
interface DerivedPropertyAggregation_sum {
    type: "sum";
    sum: PropertyTypeIdentifier;
}
interface DerivedPropertyAggregation_approximateCardinality {
    type: "approximateCardinality";
    approximateCardinality: PropertyTypeIdentifier;
}
interface DerivedPropertyAggregation_exactCardinality {
    type: "exactCardinality";
    exactCardinality: PropertyTypeIdentifier;
}
interface DerivedPropertyAggregation_collectList {
    type: "collectList";
    collectList: LinkedCollection;
}
interface DerivedPropertyAggregation_collectSet {
    type: "collectSet";
    collectSet: LinkedCollection;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
 */
type DerivedPropertyAggregation = DerivedPropertyAggregation_count | DerivedPropertyAggregation_avg | DerivedPropertyAggregation_max | DerivedPropertyAggregation_min | DerivedPropertyAggregation_sum | DerivedPropertyAggregation_approximateCardinality | DerivedPropertyAggregation_exactCardinality | DerivedPropertyAggregation_collectList | DerivedPropertyAggregation_collectSet;

interface DerivedPropertyLinkTypeIdentifier_linkType {
    type: "linkType";
    linkType: LinkTypeRid;
}
type DerivedPropertyLinkTypeIdentifier = DerivedPropertyLinkTypeIdentifier_linkType;

/**
 * Specifies a side of a link type to indicate a direction derived property is going from. Its semantic
 * meaning depends on the context of usage.
 *
 * For many-to-many link types SOURCE corresponds to object type A in the link type definition, and
 * TARGET corresponds to object type B.
 *
 * For one-to-many link types SOURCE generally corresponds to the ONE (or primary key) side in the
 * link type definition, and TARGET corresponds to the MANY (or foreign key) side.
 * EXCEPTION: In self-referential one-to-many link types, this is inverted: SOURCE corresponds to the MANY side
 * and TARGET corresponds to the ONE side in self-referential one-to-many link types.
 *
 * See also: `https://github.palantir.build/foundry/ontology-metadata-service/blob/develop/docs/adr/0055-link-type-side-semantics.md`
 * for more context surrounding this decision.
 */
type DerivedPropertyLinkTypeSide = "SOURCE" | "TARGET";

interface LinkTypeLinkDefinition {
    linkTypeIdentifier: DerivedPropertyLinkTypeIdentifier;
    linkTypeSide: DerivedPropertyLinkTypeSide;
}

interface SearchAroundStep {
    linkTypeIdentifier: DerivedPropertyLinkTypeIdentifier;
    linkTypeSide: DerivedPropertyLinkTypeSide;
}

interface MultiHopStepDefinition_searchAround {
    type: "searchAround";
    searchAround: SearchAroundStep;
}
type MultiHopStepDefinition = MultiHopStepDefinition_searchAround;

/**
 * A link definition formed from sequentially traversing one or more multi hop steps.
 */
interface MultiHopLinkDefinition {
    steps: Array<MultiHopStepDefinition>;
}

interface LinkDefinition_linkTypeLink {
    type: "linkTypeLink";
    linkTypeLink: LinkTypeLinkDefinition;
}
interface LinkDefinition_multiHopLink {
    type: "multiHopLink";
    multiHopLink: MultiHopLinkDefinition;
}
type LinkDefinition = LinkDefinition_linkTypeLink | LinkDefinition_multiHopLink;

/**
 * A derived property that references aggregations on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
interface AggregatedPropertiesDefinition {
    propertyTypeMapping: Record<PropertyTypeRid, DerivedPropertyAggregation>;
    linkDefinition: LinkDefinition;
}

/**
 * A derived property definition that references property types on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
interface LinkedPropertiesDefinition {
    propertyTypeMapping: Record<PropertyTypeRid, PropertyTypeIdentifier>;
    linkDefinition: LinkDefinition;
}

interface DerivedPropertiesDefinition_linkedProperties {
    type: "linkedProperties";
    linkedProperties: LinkedPropertiesDefinition;
}
interface DerivedPropertiesDefinition_aggregatedProperties {
    type: "aggregatedProperties";
    aggregatedProperties: AggregatedPropertiesDefinition;
}
type DerivedPropertiesDefinition = DerivedPropertiesDefinition_linkedProperties | DerivedPropertiesDefinition_aggregatedProperties;

/**
 * Object type datasource which is backed by derived properties definition.
 *
 * This source provides property values that are derived from property types on other object type(s)
 * via links or additional aggregations and computations.
 *
 * Note: if a property type is backed by an ObjectTypeDerivedPropertiesDatasource, the Type of the property
 * type will be resolved by OMS automatically. The TypeForModification will be ignored for that property type.
 *
 * This type is only compatible with object storage v2.
 */
interface ObjectTypeDerivedPropertiesDatasource {
    definition: DerivedPropertiesDefinition;
}

/**
 * A rid specifying a direct write datasource, such as an edge pipeline.
 */
type DirectSourceRid = string;

/**
 * Object type datasource which is backed by a "direct write" source, such as an edge pipeline. This type
 * of a datasource uses PropertySecurityGroups to allow grouping its properties into different security levels.
 * This type is only compatible with object storage v2.
 */
interface ObjectTypeDirectDatasource {
    directSourceRid: DirectSourceRid;
    propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
    propertySecurityGroups: PropertySecurityGroups;
}

/**
 * A RID representing an edits-only "datasource". If this RID is specified at datasource creation time, it
 * must be a valid Compass project RID. If one is not specified, DatasourceRid will be used.
 */
type EditsOnlyRid = string;

/**
 * Object type datasource which is not backed by any dataset or restricted view. This type of a "datasource"
 * only supports edits-only properties, and uses PropertySecurityGroups to allow grouping those properties into
 * different security levels.
 *
 * This type is only compatible with object storage v2.
 */
interface ObjectTypeEditsOnlyDatasource {
    editsOnlyRid: EditsOnlyRid | undefined;
    properties: Array<PropertyTypeRid>;
    propertySecurityGroups: PropertySecurityGroups;
}

/**
 * A rid identifying a Geotime integration, which parents one or more Geotime series. This rid is a randomly
 * generated identifier and is safe to log.
 */
type GeotimeSeriesIntegrationRid = string;

/**
 * Object type datasource that is backed by a Geotime integration, uniquely identified by its rid.
 */
interface ObjectTypeGeotimeSeriesDatasource {
    geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
    properties: Array<PropertyTypeRid>;
}

interface MediaSourceRid_mediaSetRid {
    type: "mediaSetRid";
    mediaSetRid: MediaSetRid;
}
interface MediaSourceRid_datasetRid {
    type: "datasetRid";
    datasetRid: DatasetRid;
}
/**
 * A rid identifying the resource backing a media reference.
 */
type MediaSourceRid = MediaSourceRid_mediaSetRid | MediaSourceRid_datasetRid;

/**
 * Object type datasource that is backed by media, uniquely identified by its rid.
 */
interface ObjectTypeMediaDatasource {
    mediaSourceRids: Array<MediaSourceRid>;
    properties: Array<PropertyTypeRid>;
}

/**
 * An rid identifying a media set branch. This rid is a randomly generated identifier and is safe to log.
 */
type MediaSetBranchRid = string;

/**
 * A locator for a media set view. This is a combination of the media set rid, view rid and the branch rid.
 */
interface MediaSetViewLocator {
    mediaSetRid: MediaSetRid;
    mediaSetViewRid: MediaSetViewRid;
    mediaSetBranchRid: MediaSetBranchRid;
}

/**
 * Object type datasource that is backed by a media set view, uniquely identified by its rid. This datasource
 * differs from ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
 * has access to a property backed by this datasource, they will be able to see the media item it references.
 */
interface ObjectTypeMediaSetViewDatasource {
    mediaSetViewLocator: MediaSetViewLocator;
    properties: Array<PropertyTypeRid>;
    assumedMarkings: Array<MarkingId>;
}

/**
 * The version of a GPS Policy.
 */
type PolicyVersion = string;

/**
 * An rid identifying a Foundry restricted view. This rid is a randomly generated identifier and is safe to log.
 */
type RestrictedViewRid = string;

/**
 * Object type datasource representing a restricted view on top of a stream.
 */
interface ObjectTypeRestrictedStreamDatasource {
    restrictedViewRid: RestrictedViewRid;
    policyVersion: PolicyVersion;
    streamLocator: StreamLocator;
    propertyMapping: Record<PropertyTypeRid, ColumnName>;
    retentionPolicy: RetentionPolicy;
}

/**
 * Object type datasource that is backed by a restricted view in foundry, uniquely identified by its rid.
 * Deprecated in favor of ObjectTypeRestrictedViewDatasourceV2
 */
interface ObjectTypeRestrictedViewDatasource {
    restrictedViewRid: RestrictedViewRid;
    propertyMapping: Record<PropertyTypeRid, ColumnName>;
    writebackDatasetRid: DatasetRid | undefined;
}

/**
 * Object type datasource supporting edit only property types, that is backed by a restricted view in foundry,
 * uniquely identified by its rid. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
interface ObjectTypeRestrictedViewDatasourceV2 {
    restrictedViewRid: RestrictedViewRid;
    propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
}

/**
 * Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
 */
interface ObjectTypeStreamDatasource {
    streamLocator: StreamLocator;
    propertyMapping: Record<PropertyTypeRid, ColumnName>;
    retentionPolicy: RetentionPolicy;
}

/**
 * Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
 * Supports property security groups and should be used instead of ObjectTypeRestrictedStreamDatasource
 * when granular policies are needed.
 */
interface ObjectTypeStreamDatasourceV2 {
    streamLocator: StreamLocator;
    propertyMapping: Record<PropertyTypeRid, ColumnName>;
    propertySecurityGroups: PropertySecurityGroups | undefined;
    retentionPolicy: RetentionPolicy;
}

/**
 * A rid identifying a table. This rid is a randomly generated identifier and is safe to log.
 */
type TableRid = string;

/**
 * Object type datasource that is backed by a table in foundry, uniquely identified by its locator.
 * Supports edit only property types through PropertyTypeMappingInfo.
 */
interface ObjectTypeTableDatasource {
    branchId: BranchId;
    propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
    tableRid: TableRid;
}

/**
 * Object type datasource that is backed by a time series sync, uniquely identified by its rid.
 */
interface ObjectTypeTimeSeriesDatasource {
    timeSeriesSyncRid: TimeSeriesSyncRid;
    properties: Array<PropertyTypeRid>;
    assumedMarkings: Array<MarkingId>;
}

interface ObjectTypeDatasourceDefinition_dataset {
    type: "dataset";
    dataset: ObjectTypeDatasetDatasource;
}
interface ObjectTypeDatasourceDefinition_stream {
    type: "stream";
    stream: ObjectTypeStreamDatasource;
}
interface ObjectTypeDatasourceDefinition_streamV2 {
    type: "streamV2";
    streamV2: ObjectTypeStreamDatasourceV2;
}
interface ObjectTypeDatasourceDefinition_restrictedView {
    type: "restrictedView";
    restrictedView: ObjectTypeRestrictedViewDatasource;
}
interface ObjectTypeDatasourceDefinition_timeSeries {
    type: "timeSeries";
    timeSeries: ObjectTypeTimeSeriesDatasource;
}
interface ObjectTypeDatasourceDefinition_datasetV2 {
    type: "datasetV2";
    datasetV2: ObjectTypeDatasetDatasourceV2;
}
interface ObjectTypeDatasourceDefinition_datasetV3 {
    type: "datasetV3";
    datasetV3: ObjectTypeDatasetDatasourceV3;
}
interface ObjectTypeDatasourceDefinition_restrictedViewV2 {
    type: "restrictedViewV2";
    restrictedViewV2: ObjectTypeRestrictedViewDatasourceV2;
}
interface ObjectTypeDatasourceDefinition_restrictedStream {
    type: "restrictedStream";
    restrictedStream: ObjectTypeRestrictedStreamDatasource;
}
interface ObjectTypeDatasourceDefinition_media {
    type: "media";
    media: ObjectTypeMediaDatasource;
}
interface ObjectTypeDatasourceDefinition_mediaSetView {
    type: "mediaSetView";
    mediaSetView: ObjectTypeMediaSetViewDatasource;
}
interface ObjectTypeDatasourceDefinition_geotimeSeries {
    type: "geotimeSeries";
    geotimeSeries: ObjectTypeGeotimeSeriesDatasource;
}
interface ObjectTypeDatasourceDefinition_table {
    type: "table";
    table: ObjectTypeTableDatasource;
}
interface ObjectTypeDatasourceDefinition_editsOnly {
    type: "editsOnly";
    editsOnly: ObjectTypeEditsOnlyDatasource;
}
interface ObjectTypeDatasourceDefinition_direct {
    type: "direct";
    direct: ObjectTypeDirectDatasource;
}
interface ObjectTypeDatasourceDefinition_derived {
    type: "derived";
    derived: ObjectTypeDerivedPropertiesDatasource;
}
/**
 * Wrapper type for all supported object type datasource types.
 */
type ObjectTypeDatasourceDefinition = ObjectTypeDatasourceDefinition_dataset | ObjectTypeDatasourceDefinition_stream | ObjectTypeDatasourceDefinition_streamV2 | ObjectTypeDatasourceDefinition_restrictedView | ObjectTypeDatasourceDefinition_timeSeries | ObjectTypeDatasourceDefinition_datasetV2 | ObjectTypeDatasourceDefinition_datasetV3 | ObjectTypeDatasourceDefinition_restrictedViewV2 | ObjectTypeDatasourceDefinition_restrictedStream | ObjectTypeDatasourceDefinition_media | ObjectTypeDatasourceDefinition_mediaSetView | ObjectTypeDatasourceDefinition_geotimeSeries | ObjectTypeDatasourceDefinition_table | ObjectTypeDatasourceDefinition_editsOnly | ObjectTypeDatasourceDefinition_direct | ObjectTypeDatasourceDefinition_derived;

interface ObjectTypeDatasource {
    rid: DatasourceRid;
    datasource: ObjectTypeDatasourceDefinition;
    editsConfiguration: EditsConfiguration | undefined;
    redacted: boolean | undefined;
    dataSecurity: DataSecurity | undefined;
}

/**
 * Response to ObjectTypeLoadRequest.
 */
interface ObjectTypeLoadResponse {
    objectType: ObjectType;
    ontologyRid: OntologyRid;
    ontologyVersion: OntologyVersion;
    datasources: Array<ObjectTypeDatasource>;
    entityMetadata: ObjectTypeEntityMetadata | undefined;
}

/**
 * Response to a SharedPropertyTypeLoadRequest.
 */
interface SharedPropertyTypeLoadResponse {
    sharedPropertyType: SharedPropertyType;
    ontologyRid: OntologyRid;
    ontologyVersion: OntologyVersion;
}

/**
 * The colors used to render the icon for the type group. All colors are expected to be in hex format.
 */
interface TypeGroupIconColors {
    firstColor: string | undefined;
    secondColor: string | undefined;
    thirdColor: string | undefined;
    fourthColor: string | undefined;
}

/**
 * This includes metadata which can be used by front-ends when displaying a type group.
 */
interface TypeGroupDisplayMetadata {
    displayName: string;
    description: string | undefined;
    iconColors: TypeGroupIconColors;
}

/**
 * A type group is a collection of entities that are related to each other. Type groups are used to organize
 * entities into logical groups. This is useful for displaying entities in the UI, or for querying entities
 * within a certain scope.
 */
interface TypeGroup {
    rid: TypeGroupRid;
    displayMetadata: TypeGroupDisplayMetadata;
}

interface TypeGroupLoadResponse {
    typeGroup: TypeGroup;
    ontologyRid: OntologyRid;
    ontologyVersion: OntologyVersion;
    numberOfObjectTypes: number | undefined;
    numberOfActionTypes: number | undefined;
}

/**
 * Response to OntologyBulkLoadEntitiesRequest. If any of the requested
 * entities are not available in the specified version or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty.
 */
interface OntologyBulkLoadEntitiesResponse {
    objectTypes: Array<ObjectTypeLoadResponse | undefined>;
    linkTypes: Array<LinkTypeLoadResponse | undefined>;
    sharedPropertyTypes: Array<SharedPropertyTypeLoadResponse | undefined>;
    interfaceTypes: Array<InterfaceTypeLoadResponse | undefined>;
    typeGroups: Array<TypeGroupLoadResponse | undefined>;
    actionTypes: Array<ActionTypeLoadResponseV2 | undefined>;
}

/**
 * Endpoint to load Ontology entities in bulk. The returned OntologyBulkLoadEntitiesResponse will only
 * contain entities that actually exist and are visible to the user. If the user has requested entities at
 * invalid versions or entities that do not exist in the specified versions, those will not be present
 * in the response.
 *
 * There are limits on the number of entities that can be loaded in one request. Please refer to
 * documentation of OntologyBulkLoadEntitiesRequest for the values of these limits.
 */
declare function bulkLoadOntologyEntities(ctx: ConjureContext, onBehalfOf: string | undefined, request: OntologyBulkLoadEntitiesRequest): Promise<OntologyBulkLoadEntitiesResponse>;

/**
 * Request to batch get LinkType(s) for ObjectType(s).
 */
interface GetLinkTypesForObjectTypesRequest {
    objectTypeVersions: Record<ObjectTypeRid, OntologyVersion | undefined>;
    objectTypeBranches: Record<ObjectTypeRid, OntologyBranchRid | undefined>;
    loadRedacted: boolean | undefined;
    includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}

/**
 * Response to GetLinkTypesForObjectTypesRequest.
 */
interface GetLinkTypesForObjectTypesResponse {
    linkTypes: Record<ObjectTypeRid, Array<LinkType>>;
}

/**
 * Endpoint to batch load links associated to given ObjectTypeRid(s). The GetLinkTypesForObjectTypesResponse
 * will only contain links that are visible to the user. If the user has requested to get link types at
 * invalid ontology versions or for ObjectTypeRid(s) that do not exist in the specified versions, those entries
 * will include an empty set of link types.
 *
 * The includeObjectTypesWithoutSearchableDatasources flag is respected if present in the request,
 * else we set it to a default (false) unless the user-agent is blocklisted.
 * The flag is set to true for blocklisted user agents. Currently the blocklist
 * includes functions-typescript-gradle-plugin only.
 */
declare function getLinkTypesForObjectTypes(ctx: ConjureContext, request: GetLinkTypesForObjectTypesRequest): Promise<GetLinkTypesForObjectTypesResponse>;

/**
 * Request to load all visible Ontologies.
 */
interface LoadAllOntologiesRequest {
}

/**
 * Endpoint to load metadata about the Ontologies a user has access to. The response will contain
 * only Ontologies on which the user has `ontology:view-ontology`. Note that the returned
 * LoadAllOntologiesResponse may be empty if there is no Ontology yet.
 */
declare function loadAllOntologies(ctx: ConjureContext, request: LoadAllOntologiesRequest): Promise<LoadAllOntologiesResponse>;

interface ArrayType {
    elementType: BaseType;
}

interface BinaryType {
}

interface BooleanType {
}

interface ByteType {
}

interface DateType {
}

interface DecimalType {
    precision: number;
    scale: number;
}

interface DoubleType {
}

interface FloatType {
}

interface IntegerType {
}

interface LongType {
}

interface MapType {
    keyType: BaseType;
    valueType: BaseType;
}

interface OptionalType {
    wrappedType: BaseType;
}

/**
 * The rid for a Value Type, autogenerated by the service.
 */
type ValueTypeRid = string;

/**
 * The version id of a Value Type, autogenerated by the service.
 */
type ValueTypeVersionId = string;

interface VersionedReferencedType {
    rid: ValueTypeRid;
    version: ValueTypeVersionId;
}

interface ReferencedType_versionedReferencedType {
    type: "versionedReferencedType";
    versionedReferencedType: VersionedReferencedType;
}
type ReferencedType = ReferencedType_versionedReferencedType;

interface ShortType {
}

interface StringType {
}

type StructElementName = string;

interface StructElement {
    name: StructElementName;
    type: BaseType;
}

interface StructType {
    fields: Array<StructElement>;
}

/**
 * A string identifier used to map struct property fields to their respective base types and constraints.
 * This identifier is intentionally generically typed. Constraints used on ontology types should interpret the
 * identifier as a struct field API name and pipeline builder should interpret the identifier as a dataset
 * struct column field name.
 */
type StructFieldIdentifier = string;

interface StructElementV2 {
    identifier: StructFieldIdentifier;
    baseType: BaseType;
}

interface StructTypeV2 {
    fields: Array<StructElementV2>;
}

interface TimestampType {
}

/**
 * It is not possible to define constraints on a union type. Instead define each member as its own value
 * type with constraints, and reference those value types in the union.
 */
interface UnionType {
    memberTypes: Array<BaseType>;
}

interface BaseType_array {
    type: "array";
    array: ArrayType;
}
interface BaseType_boolean {
    type: "boolean";
    boolean: BooleanType;
}
interface BaseType_binary {
    type: "binary";
    binary: BinaryType;
}
interface BaseType_byte {
    type: "byte";
    byte: ByteType;
}
interface BaseType_date {
    type: "date";
    date: DateType;
}
interface BaseType_decimal {
    type: "decimal";
    decimal: DecimalType;
}
interface BaseType_double {
    type: "double";
    double: DoubleType;
}
interface BaseType_float {
    type: "float";
    float: FloatType;
}
interface BaseType_integer {
    type: "integer";
    integer: IntegerType;
}
interface BaseType_long {
    type: "long";
    long: LongType;
}
interface BaseType_map {
    type: "map";
    map: MapType;
}
interface BaseType_optional {
    type: "optional";
    optional: OptionalType;
}
interface BaseType_referenced {
    type: "referenced";
    referenced: ReferencedType;
}
interface BaseType_short {
    type: "short";
    short: ShortType;
}
interface BaseType_string {
    type: "string";
    string: StringType;
}
interface BaseType_struct {
    type: "struct";
    struct: StructType;
}
interface BaseType_structV2 {
    type: "structV2";
    structV2: StructTypeV2;
}
interface BaseType_timestamp {
    type: "timestamp";
    timestamp: TimestampType;
}
interface BaseType_union {
    type: "union";
    union: UnionType;
}
/**
 * Base physical (data) type, representing the lowest layer in the type system.
 */
type BaseType = BaseType_array | BaseType_boolean | BaseType_binary | BaseType_byte | BaseType_date | BaseType_decimal | BaseType_double | BaseType_float | BaseType_integer | BaseType_long | BaseType_map | BaseType_optional | BaseType_referenced | BaseType_short | BaseType_string | BaseType_struct | BaseType_structV2 | BaseType_timestamp | BaseType_union;

type ArrayTypeElementsUniqueConstraint = boolean;

interface RangeSizeConstraint {
    minSize: number | undefined;
    maxSize: number | undefined;
}

type ArrayTypeSizeConstraint = RangeSizeConstraint;

interface ArrayTypeDataConstraints {
    size: ArrayTypeSizeConstraint | undefined;
    elementsConstraint: DataConstraint | undefined;
    elementsUnique: ArrayTypeElementsUniqueConstraint | undefined;
}

type BinaryTypeSizeConstraint = RangeSizeConstraint;

interface BinaryTypeDataConstraints {
    size: BinaryTypeSizeConstraint;
}

type BooleanTypeDataConstraintValue = "TRUE_VALUE" | "FALSE_VALUE" | "NULL_VALUE";

interface BooleanTypeDataConstraints {
    allowedValues: Array<BooleanTypeDataConstraintValue>;
}

/**
 * ISO 8601 date.
 */
type DateTypeDataValue = string;

interface DateTypeRangeConstraint {
    min: DateTypeDataValue | undefined;
    max: DateTypeDataValue | undefined;
}

interface DateTypeDataConstraints {
    range: DateTypeRangeConstraint;
}

type DecimalTypeDataValue = string;

interface DecimalTypeRangeConstraint {
    min: DecimalTypeDataValue | undefined;
    max: DecimalTypeDataValue | undefined;
}

interface OneOfDecimalTypeConstraint {
    values: Array<DecimalTypeDataValue>;
}

interface DecimalTypeDataConstraints_range {
    type: "range";
    range: DecimalTypeRangeConstraint;
}
interface DecimalTypeDataConstraints_oneOf {
    type: "oneOf";
    oneOf: OneOfDecimalTypeConstraint;
}
type DecimalTypeDataConstraints = DecimalTypeDataConstraints_range | DecimalTypeDataConstraints_oneOf;

type DoubleTypeDataValue = number;

interface DoubleTypeRangeConstraint {
    min: DoubleTypeDataValue | undefined;
    max: DoubleTypeDataValue | undefined;
}

interface OneOfDoubleTypeConstraint {
    values: Array<DoubleTypeDataValue>;
}

interface DoubleTypeDataConstraints_range {
    type: "range";
    range: DoubleTypeRangeConstraint;
}
interface DoubleTypeDataConstraints_oneOf {
    type: "oneOf";
    oneOf: OneOfDoubleTypeConstraint;
}
type DoubleTypeDataConstraints = DoubleTypeDataConstraints_range | DoubleTypeDataConstraints_oneOf;

type FloatTypeDataValue = number;

interface FloatTypeRangeConstraint {
    min: FloatTypeDataValue | undefined;
    max: FloatTypeDataValue | undefined;
}

interface OneOfFloatTypeConstraint {
    values: Array<FloatTypeDataValue>;
}

interface FloatTypeDataConstraints_range {
    type: "range";
    range: FloatTypeRangeConstraint;
}
interface FloatTypeDataConstraints_oneOf {
    type: "oneOf";
    oneOf: OneOfFloatTypeConstraint;
}
type FloatTypeDataConstraints = FloatTypeDataConstraints_range | FloatTypeDataConstraints_oneOf;

type IntegerTypeDataValue = number;

interface IntegerTypeRangeConstraint {
    min: IntegerTypeDataValue | undefined;
    max: IntegerTypeDataValue | undefined;
}

interface OneOfIntegerTypeConstraint {
    values: Array<IntegerTypeDataValue>;
}

interface IntegerTypeDataConstraints_range {
    type: "range";
    range: IntegerTypeRangeConstraint;
}
interface IntegerTypeDataConstraints_oneOf {
    type: "oneOf";
    oneOf: OneOfIntegerTypeConstraint;
}
type IntegerTypeDataConstraints = IntegerTypeDataConstraints_range | IntegerTypeDataConstraints_oneOf;

type LongTypeDataValue = number;

interface LongTypeRangeConstraint {
    min: LongTypeDataValue | undefined;
    max: LongTypeDataValue | undefined;
}

interface OneOfLongTypeConstraint {
    values: Array<LongTypeDataValue>;
}

interface LongTypeDataConstraints_range {
    type: "range";
    range: LongTypeRangeConstraint;
}
interface LongTypeDataConstraints_oneOf {
    type: "oneOf";
    oneOf: OneOfLongTypeConstraint;
}
type LongTypeDataConstraints = LongTypeDataConstraints_range | LongTypeDataConstraints_oneOf;

interface MapUniqueValuesConstraint {
    value: boolean;
}

interface MapTypeDataConstraints {
    keyTypeDataConstraints: Array<DataConstraint>;
    valueTypeDataConstraints: Array<DataConstraint>;
    uniqueValues: MapUniqueValuesConstraint | undefined;
}

type NullableOption = "NULLABLE" | "NOT_NULLABLE";

interface NullableDataConstraint {
    option: NullableOption;
}

type ShortTypeDataValue = number;

interface OneOfShortTypeConstraint {
    values: Array<ShortTypeDataValue>;
}

interface ShortTypeRangeConstraint {
    min: ShortTypeDataValue | undefined;
    max: ShortTypeDataValue | undefined;
}

interface ShortTypeDataConstraints_range {
    type: "range";
    range: ShortTypeRangeConstraint;
}
interface ShortTypeDataConstraints_oneOf {
    type: "oneOf";
    oneOf: OneOfShortTypeConstraint;
}
type ShortTypeDataConstraints = ShortTypeDataConstraints_range | ShortTypeDataConstraints_oneOf;

type StringTypeDataValue = string;

interface OneOfStringTypeConstraint {
    values: Array<StringTypeDataValue>;
    useIgnoreCase: boolean | undefined;
}

interface RegexConstraint {
    regexPattern: string;
    usePartialMatch: boolean | undefined;
}

interface StringTypeIsRidConstraint {
}

interface StringTypeIsUuidConstraint {
}

type StringTypeLengthConstraint = RangeSizeConstraint;

interface StringTypeDataConstraints_regex {
    type: "regex";
    regex: RegexConstraint;
}
interface StringTypeDataConstraints_oneOf {
    type: "oneOf";
    oneOf: OneOfStringTypeConstraint;
}
interface StringTypeDataConstraints_length {
    type: "length";
    length: StringTypeLengthConstraint;
}
interface StringTypeDataConstraints_isUuid {
    type: "isUuid";
    isUuid: StringTypeIsUuidConstraint;
}
interface StringTypeDataConstraints_isRid {
    type: "isRid";
    isRid: StringTypeIsRidConstraint;
}
type StringTypeDataConstraints = StringTypeDataConstraints_regex | StringTypeDataConstraints_oneOf | StringTypeDataConstraints_length | StringTypeDataConstraints_isUuid | StringTypeDataConstraints_isRid;

/**
 * Map of constraints declared on struct elements keyed by the struct field (element) name.
 */
type StructTypeElementsConstraint = Record<StructElementName, DataConstraint>;

interface StructTypeDataConstraints {
    elementConstraints: StructTypeElementsConstraint;
}

/**
 * Reference representing a specific version of a Value Type. When versionId is omitted, we assume it is referencing the latest version available at the time.
 */
interface ValueTypeReference {
    rid: ValueTypeRid;
    versionId: ValueTypeVersionId | undefined;
}

/**
 * Map of value types declared on struct elements keyed by the struct field identifier.
 */
type StructTypeV2ElementsConstraint = Record<StructFieldIdentifier, ValueTypeReference>;

interface StructTypeV2DataConstraints {
    elementConstraints: StructTypeV2ElementsConstraint;
}

type TimestampTypeDataValue = string;

interface TimestampTypeRangeConstraint {
    min: TimestampTypeDataValue | undefined;
    max: TimestampTypeDataValue | undefined;
}

interface TimestampTypeDataConstraints {
    range: TimestampTypeRangeConstraint;
}

interface DataConstraint_array {
    type: "array";
    array: ArrayTypeDataConstraints;
}
interface DataConstraint_boolean {
    type: "boolean";
    boolean: BooleanTypeDataConstraints;
}
interface DataConstraint_binary {
    type: "binary";
    binary: BinaryTypeDataConstraints;
}
interface DataConstraint_date {
    type: "date";
    date: DateTypeDataConstraints;
}
interface DataConstraint_decimal {
    type: "decimal";
    decimal: DecimalTypeDataConstraints;
}
interface DataConstraint_double {
    type: "double";
    double: DoubleTypeDataConstraints;
}
interface DataConstraint_float {
    type: "float";
    float: FloatTypeDataConstraints;
}
interface DataConstraint_integer {
    type: "integer";
    integer: IntegerTypeDataConstraints;
}
interface DataConstraint_long {
    type: "long";
    long: LongTypeDataConstraints;
}
interface DataConstraint_map {
    type: "map";
    map: MapTypeDataConstraints;
}
interface DataConstraint_nullable {
    type: "nullable";
    nullable: NullableDataConstraint;
}
interface DataConstraint_short {
    type: "short";
    short: ShortTypeDataConstraints;
}
interface DataConstraint_string {
    type: "string";
    string: StringTypeDataConstraints;
}
interface DataConstraint_struct {
    type: "struct";
    struct: StructTypeDataConstraints;
}
interface DataConstraint_structV2 {
    type: "structV2";
    structV2: StructTypeV2DataConstraints;
}
interface DataConstraint_timestamp {
    type: "timestamp";
    timestamp: TimestampTypeDataConstraints;
}
type DataConstraint = DataConstraint_array | DataConstraint_boolean | DataConstraint_binary | DataConstraint_date | DataConstraint_decimal | DataConstraint_double | DataConstraint_float | DataConstraint_integer | DataConstraint_long | DataConstraint_map | DataConstraint_nullable | DataConstraint_short | DataConstraint_string | DataConstraint_struct | DataConstraint_structV2 | DataConstraint_timestamp;

interface FailureMessage {
    message: string;
}

interface DataConstraintWrapper {
    failureMessage: FailureMessage | undefined;
    constraint: DataConstraint;
}

type ArrayTypeDataValue = Array<BaseTypeDataValue>;

type BinaryTypeDataValue = Blob;

type BooleanTypeDataValue = boolean;

type ByteTypeDataValue = number;

interface MapTypeDataValue_byte {
    type: "byte";
    byte: Record<ByteTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_date {
    type: "date";
    date: Record<DateTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_double {
    type: "double";
    double: Record<DoubleTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_decimal {
    type: "decimal";
    decimal: Record<DecimalTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_float {
    type: "float";
    float: Record<FloatTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_integer {
    type: "integer";
    integer: Record<IntegerTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_short {
    type: "short";
    short: Record<ShortTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_string {
    type: "string";
    string: Record<StringTypeDataValue, BaseTypeDataValue>;
}
interface MapTypeDataValue_timestamp {
    type: "timestamp";
    timestamp: Record<TimestampTypeDataValue, BaseTypeDataValue>;
}
type MapTypeDataValue = MapTypeDataValue_byte | MapTypeDataValue_date | MapTypeDataValue_double | MapTypeDataValue_decimal | MapTypeDataValue_float | MapTypeDataValue_integer | MapTypeDataValue_short | MapTypeDataValue_string | MapTypeDataValue_timestamp;

type OptionalTypeDataValue = BaseTypeDataValue | undefined;

interface StructElementTypeDataValue {
    name: string;
    value: BaseTypeDataValue;
}

interface StructTypeDataValue {
    fields: Array<StructElementTypeDataValue>;
}

interface BaseTypeDataValue_array {
    type: "array";
    array: ArrayTypeDataValue;
}
interface BaseTypeDataValue_boolean {
    type: "boolean";
    boolean: BooleanTypeDataValue;
}
interface BaseTypeDataValue_binary {
    type: "binary";
    binary: BinaryTypeDataValue;
}
interface BaseTypeDataValue_byte {
    type: "byte";
    byte: ByteTypeDataValue;
}
interface BaseTypeDataValue_date {
    type: "date";
    date: DateTypeDataValue;
}
interface BaseTypeDataValue_decimal {
    type: "decimal";
    decimal: DecimalTypeDataValue;
}
interface BaseTypeDataValue_double {
    type: "double";
    double: DoubleTypeDataValue;
}
interface BaseTypeDataValue_float {
    type: "float";
    float: FloatTypeDataValue;
}
interface BaseTypeDataValue_integer {
    type: "integer";
    integer: IntegerTypeDataValue;
}
interface BaseTypeDataValue_long {
    type: "long";
    long: LongTypeDataValue;
}
interface BaseTypeDataValue_map {
    type: "map";
    map: MapTypeDataValue;
}
interface BaseTypeDataValue_optional {
    type: "optional";
    optional: OptionalTypeDataValue;
}
interface BaseTypeDataValue_short {
    type: "short";
    short: ShortTypeDataValue;
}
interface BaseTypeDataValue_string {
    type: "string";
    string: StringTypeDataValue;
}
interface BaseTypeDataValue_struct {
    type: "struct";
    struct: StructTypeDataValue;
}
interface BaseTypeDataValue_timestamp {
    type: "timestamp";
    timestamp: TimestampTypeDataValue;
}
/**
 * Data values representation of the base types. Used for defining the actual data constraints and to represent
 * actual data values.
 */
type BaseTypeDataValue = BaseTypeDataValue_array | BaseTypeDataValue_boolean | BaseTypeDataValue_binary | BaseTypeDataValue_byte | BaseTypeDataValue_date | BaseTypeDataValue_decimal | BaseTypeDataValue_double | BaseTypeDataValue_float | BaseTypeDataValue_integer | BaseTypeDataValue_long | BaseTypeDataValue_map | BaseTypeDataValue_optional | BaseTypeDataValue_short | BaseTypeDataValue_string | BaseTypeDataValue_struct | BaseTypeDataValue_timestamp;

/**
 * Example values for a value type. Used for documentation purposes.
 */
interface ExampleValue {
    value: BaseTypeDataValue;
}

type ValueTypeApiName = string;

interface ValueTypeDataConstraint {
    constraint: DataConstraintWrapper;
}

type Description = string;

type DisplayName = string;

interface ValueTypeDisplayMetadata {
    displayName: DisplayName;
    description: Description | undefined;
}

/**
 * This status indicates that the ValueType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
interface ActiveValueTypeStatus {
}

/**
 * This status indicates that the ValueType is reaching the end of its life and will be removed as per the deadline specified.
 */
interface DeprecatedValueTypeStatus {
    message: string;
    deadline: string;
    replacedBy: ValueTypeRid | undefined;
}

interface ValueTypeStatus_active {
    type: "active";
    active: ActiveValueTypeStatus;
}
interface ValueTypeStatus_deprecated {
    type: "deprecated";
    deprecated: DeprecatedValueTypeStatus;
}
/**
 * The status to indicate whether the Value Type is either Experimental, Active or Deprecated.
 */
type ValueTypeStatus = ValueTypeStatus_active | ValueTypeStatus_deprecated;

type ValueTypeVersion = string;

type ActionParameterShapeId = string;

interface ActionTypeBlockDataV2 {
    actionType: ActionType;
    parameterIds: Record<ActionParameterShapeId, ParameterId>;
}

/**
 * ResourceIdentifier for an Ontology Package.
 */
type OntologyPackageRid = string;

interface ActionTypeRestrictionStatus {
    hasRolesApplied: boolean;
    ontologyPackageRid: OntologyPackageRid | undefined;
}

interface ActionTypePermissionInformation {
    restrictionStatus: ActionTypeRestrictionStatus;
}

type BlockInternalId = string;

interface LinkTypeRestrictionStatus {
    restrictedByDatasources: boolean;
    ontologyPackageRid: OntologyPackageRid | undefined;
    editRestrictedByDatasources: boolean;
}

interface LinkTypePermissionInformation {
    restrictionStatus: LinkTypeRestrictionStatus;
}

interface ObjectTypeRestrictionStatus {
    restrictedByDatasources: boolean;
    editRestrictedByDatasources: boolean;
    ontologyPackageRid: OntologyPackageRid | undefined;
}

interface ObjectTypePermissionInformation {
    restrictionStatus: ObjectTypeRestrictionStatus;
}

interface BlockPermissionInformation {
    actionTypes: Record<ActionTypeRid, ActionTypePermissionInformation>;
    objectTypes: Record<ObjectTypeRid, ObjectTypePermissionInformation>;
    linkTypes: Record<LinkTypeRid, LinkTypePermissionInformation>;
}

type BlockShapeId = BlockInternalId;

/**
 * API_NAME_FORMATTED is the recommended option for most use cases. API_NAME_FORMATTED uses the snake case format
 * of property api names while API_NAME uses the default camel case format. DATASOURCE_COLUMN_NAME uses the
 * column names of the backing datasource. However, it will use API_NAME_FORMATTED for columns that do not have
 * a backing column name (eg. edit-only properties). DATASOURCE_COLUMN_NAME should generally only be used for
 * migration of writeback datasets from V1 backend. PROPERTY_ID is deprecated.
 */
type ColumnNameType = "PROPERTY_RID" | "PROPERTY_ID" | "API_NAME" | "API_NAME_FORMATTED" | "DATASOURCE_COLUMN_NAME";

/**
 * Will only match if there is a single datasource that matches the output type (e.g. a dataset datasource
 * with an export dataset, or a restricted view datasource with an export restricted view). In the case of exporting
 * an RV datasource as a dataset, use DatasourcePredicate#hasRid instead.
 */
interface IsOnlyDatasource {
}

interface DatasourcePredicate_or {
    type: "or";
    or: Array<DatasourcePredicate>;
}
interface DatasourcePredicate_hasRid {
    type: "hasRid";
    hasRid: DatasourceRid;
}
interface DatasourcePredicate_isOnlyDatasource {
    type: "isOnlyDatasource";
    isOnlyDatasource: IsOnlyDatasource;
}
type DatasourcePredicate = DatasourcePredicate_or | DatasourcePredicate_hasRid | DatasourcePredicate_isOnlyDatasource;

type PropertyRid = string;

interface PropertyPredicate_and {
    type: "and";
    and: Array<PropertyPredicate>;
}
interface PropertyPredicate_or {
    type: "or";
    or: Array<PropertyPredicate>;
}
interface PropertyPredicate_not {
    type: "not";
    not: PropertyPredicate;
}
interface PropertyPredicate_hasId {
    type: "hasId";
    hasId: PropertyId;
}
interface PropertyPredicate_hasRid {
    type: "hasRid";
    hasRid: PropertyRid;
}
type PropertyPredicate = PropertyPredicate_and | PropertyPredicate_or | PropertyPredicate_not | PropertyPredicate_hasId | PropertyPredicate_hasRid;

interface DataFilter {
    datasourceFilter: DatasourcePredicate;
    propertyFilter: PropertyPredicate;
}

/**
 * Ontology as code uses this as a stable ID for the datasource input
 */
type DataSetName = string;

/**
 * Ontology as code uses this as a stable ID for GeotimeSeriesIntegration inputs
 */
type GeotimeSeriesIntegrationName = string;

type InstallLocationBlockShapeId = BlockShapeId;

interface InterfaceTypeBlockDataV2 {
    interfaceType: InterfaceType;
}

/**
 * ResourceIdentifier for a Workshop Module.
 */
type ModuleRid = string;

interface KnownMarketplaceIdentifiers {
    objectTypes: Record<ObjectTypeRid, BlockInternalId>;
    sharedPropertyTypes: Record<SharedPropertyTypeRid, BlockInternalId>;
    valueTypes: Record<ValueTypeRid$1, Record<ValueTypeVersionId$1, BlockInternalId>>;
    propertyTypes: Record<PropertyTypeRid, BlockInternalId>;
    linkTypes: Record<LinkTypeRid, BlockInternalId>;
    actionTypes: Record<ActionTypeRid, BlockInternalId>;
    actionParameters: Record<ParameterRid, BlockInternalId>;
    workshopModules: Record<ModuleRid, BlockInternalId>;
    functions: Record<FunctionRid, Record<FunctionVersion, BlockInternalId>>;
    groupIds: Record<GroupId, BlockInternalId>;
    objectTypeIds: Record<ObjectTypeId, BlockInternalId>;
    propertyTypeIds: Record<ObjectTypeId, Record<PropertyTypeId, BlockInternalId>>;
    linkTypeIds: Record<LinkTypeId, BlockInternalId>;
    actionParameterIds: Record<ActionTypeRid, Record<ParameterId, BlockInternalId>>;
    datasources: Record<BlockInternalId, any>;
    filesDatasources: Record<BlockInternalId, any>;
    datasourceColumns: Record<BlockInternalId, any>;
    timeSeriesSyncs: Record<TimeSeriesSyncRid, BlockInternalId>;
    webhooks: Record<WebhookRid, BlockInternalId>;
    interfaceTypes: Record<InterfaceTypeRid, BlockInternalId>;
    interfaceLinkTypes: Record<InterfaceLinkTypeRid, BlockInternalId>;
    shapeIdForInstallPrefix: BlockShapeId | undefined;
    shapeIdForOntologyAllowSchemaMigrations: BlockShapeId | undefined;
}

interface LinkTypeBlockDataV2 {
    linkType: LinkType;
    datasources: Array<ManyToManyLinkTypeDatasource>;
    entityMetadata: LinkTypeEntityMetadata | undefined;
}

/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
interface MarketplaceObjectTypeEntityMetadata {
    entityConfig: EntityConfig;
    arePatchesEnabled: boolean;
    targetStorageBackend: StorageBackend;
    redacted: boolean | undefined;
    actionLogRequirednessMetadata: ActionLogRequirednessMetadata | undefined;
    diffEdits: boolean;
    gothamMapping: ObjectTypeGothamMapping | undefined;
    provenance: EntityProvenance | undefined;
    editsResolutionStrategies: EditsResolutionStrategies | undefined;
    aliases: Array<ObjectTypeAlias>;
    editsHistory: EditsHistory | undefined;
}

/**
 * Ontology as code uses this as a stable ID for MediaSetView inputs
 */
type MediaSetViewName = string;

type OutputMode = "RESTRICTED_VIEW" | "DATASET";

type WritebackDatasetRid = string;

interface PatchesConfiguration {
    lowLatencyUpdatesEnabled: boolean;
}

interface SchemaConfiguration {
    columnNameType: ColumnNameType;
}

interface WritebackDatasetSpec {
    filter: DataFilter;
    schemaConfiguration: SchemaConfiguration;
    patchesConfiguration: PatchesConfiguration | undefined;
}

interface ObjectsWritebackDataset {
    rid: WritebackDatasetRid;
    objectTypeRid: ObjectTypeRid;
    spec: WritebackDatasetSpec;
    outputMode: OutputMode;
    columnMapping: Record<PropertyTypeRid, ColumnName>;
}

/**
 * The schema version of an entity. Is automatically increased when a new schema migration is added.
 */
type SchemaVersion = number;

/**
 * Identifier for a schema migration.
 */
type SchemaMigrationRid = string;

/**
 * Migration to cast a property to another type.
 */
interface CastMigration {
    property: PropertyTypeRid;
    source: Type;
    target: Type;
}

/**
 * Migration to drop all patches applied to the ObjectType.
 */
interface DropAllPatchesMigration {
}

/**
 * Migration to drop the given datasource.
 */
interface DropDatasourceMigration {
    datasource: DatasourceRid;
}

/**
 * Migration to drop the given property.
 */
interface DropPropertyMigration {
    property: PropertyTypeRid;
}

/**
 * An ID referencing a backup stored in Funnel.
 */
type BackupId = string;

/**
 * Contains the information that can be used to restore patches that were deleted by mistake.
 */
interface PatchBackup {
    backupId: BackupId;
    objectTypeRid: ObjectTypeRid;
    ontologyVersion: OntologyVersion;
}

interface InitializationSource_backup {
    type: "backup";
    backup: PatchBackup;
}
/**
 * Metadata regarding the source of data that can be used to run a one time initialization of an ontology entity.
 */
type InitializationSource = InitializationSource_backup;

/**
 * Migration to rename one property to another.
 */
interface RenamePropertyMigration {
    source: PropertyTypeRid;
    target: PropertyTypeRid;
}

interface ObjectTypePrimaryKeyRename {
    rename: RenamePropertyMigration;
}

interface PrimaryKeyRenames_objectType {
    type: "objectType";
    objectType: ObjectTypePrimaryKeyRename;
}
type PrimaryKeyRenames = PrimaryKeyRenames_objectType;

/**
 * Migration to rename one datasource to another.
 */
interface RenameDatasourceMigration {
    source: DatasourceRid;
    target: DatasourceRid;
}

/**
 * Migration that can be used to initialize an ontology entity with data that's stored in the initialization
 * source.
 */
interface InitializePatchesMigration {
    datasourceRenames: Array<RenameDatasourceMigration>;
    propertyRenames: Array<RenamePropertyMigration>;
    primaryKeyRenames: PrimaryKeyRenames;
    initializationSource: InitializationSource;
}

/**
 * A migration that will permanently delete patches applied on an object type. This is a required migration to be present if changing or modifying the primary key of an object type that has received edits.
 */
interface PermanentlyDeletePatchesMigration {
}

interface NonRevertibleMigration_initializePatches {
    type: "initializePatches";
    initializePatches: InitializePatchesMigration;
}
interface NonRevertibleMigration_permanentlyDeletePatches {
    type: "permanentlyDeletePatches";
    permanentlyDeletePatches: PermanentlyDeletePatchesMigration;
}
/**
 * Migration that cannot be reverted in future, this migration type implies that all migrations before it will be checkpointed.
 */
type NonRevertibleMigration = NonRevertibleMigration_initializePatches | NonRevertibleMigration_permanentlyDeletePatches;

/**
 * Revert a previous migration.
 */
interface RevertMigration {
    revert: SchemaMigrationRid;
}

/**
 * Update the edits resolution strategy of an object type from edits always win to latest timestamp.
 */
interface EditsWinToLatestTimestamp {
    datasourceRid: DatasourceRid;
    datasourceProperties: Array<PropertyTypeRid>;
    timestampPropertyRid: PropertyTypeRid;
    timestampValue: any;
}

/**
 * Update the edits resolution strategy of an object type from latest timestamp to edits always win.
 */
interface LatestTimestampToEditsWin {
    datasourceRid: DatasourceRid;
    timestampPropertyRid: PropertyTypeRid;
}

interface UpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin {
    type: "latestTimestampToEditsWin";
    latestTimestampToEditsWin: LatestTimestampToEditsWin;
}
interface UpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp {
    type: "editsWinToLatestTimestamp";
    editsWinToLatestTimestamp: EditsWinToLatestTimestamp;
}
/**
 * Migration to communicate to Funnel that the edits resolution strategy for an object type has changed. Funnel
 * will handle this accordingly by updating their internal patch structure.
 *
 * This migration is set internally and automatically by OMS and therefore should not be manually defined by
 * users.
 */
type UpdateEditsResolutionStrategyMigration = UpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin | UpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp;

interface SchemaMigrationInstruction_dropProperty {
    type: "dropProperty";
    dropProperty: DropPropertyMigration;
}
interface SchemaMigrationInstruction_dropDatasource {
    type: "dropDatasource";
    dropDatasource: DropDatasourceMigration;
}
interface SchemaMigrationInstruction_dropAllPatches {
    type: "dropAllPatches";
    dropAllPatches: DropAllPatchesMigration;
}
interface SchemaMigrationInstruction_renameDatasource {
    type: "renameDatasource";
    renameDatasource: RenameDatasourceMigration;
}
interface SchemaMigrationInstruction_renameProperty {
    type: "renameProperty";
    renameProperty: RenamePropertyMigration;
}
interface SchemaMigrationInstruction_cast {
    type: "cast";
    cast: CastMigration;
}
interface SchemaMigrationInstruction_revert {
    type: "revert";
    revert: RevertMigration;
}
interface SchemaMigrationInstruction_nonRevertible {
    type: "nonRevertible";
    nonRevertible: NonRevertibleMigration;
}
interface SchemaMigrationInstruction_updateEditsResolutionStrategy {
    type: "updateEditsResolutionStrategy";
    updateEditsResolutionStrategy: UpdateEditsResolutionStrategyMigration;
}
/**
 * One out of potentially many instructions on how to transition from one version to another.
 */
type SchemaMigrationInstruction = SchemaMigrationInstruction_dropProperty | SchemaMigrationInstruction_dropDatasource | SchemaMigrationInstruction_dropAllPatches | SchemaMigrationInstruction_renameDatasource | SchemaMigrationInstruction_renameProperty | SchemaMigrationInstruction_cast | SchemaMigrationInstruction_revert | SchemaMigrationInstruction_nonRevertible | SchemaMigrationInstruction_updateEditsResolutionStrategy;

/**
 * A SchemaMigrationInstruction with a unique identifier.
 */
interface SchemaMigration {
    rid: SchemaMigrationRid;
    instruction: SchemaMigrationInstruction;
}

/**
 * Instructions on how to transition from one schema version to another.
 */
interface SchemaTransition {
    source: SchemaVersion;
    target: SchemaVersion;
    migrations: Array<SchemaMigration>;
}

interface SchemaTransitionsWithSchemaVersion {
    schemaTransitions: Array<SchemaTransition>;
    schemaVersion: SchemaVersion;
}

interface SchemaMigrationBlockData {
    schemaMigrations: SchemaTransitionsWithSchemaVersion;
    propertyTypeRidsToIds: Record<PropertyTypeRid, PropertyTypeId>;
}

interface ObjectTypeBlockDataV2 {
    objectType: ObjectType;
    datasources: Array<ObjectTypeDatasource>;
    writebackDatasets: Array<ObjectsWritebackDataset>;
    entityMetadata: MarketplaceObjectTypeEntityMetadata | undefined;
    schemaMigrations: SchemaMigrationBlockData | undefined;
}

type BasePropertyType = "BOOLEAN" | "BYTE" | "DATE" | "DECIMAL" | "DOUBLE" | "FLOAT" | "GEOHASH" | "GEOSHAPE" | "INTEGER" | "LONG" | "SHORT" | "STRING" | "STRUCT" | "TIME_DEPENDENT" | "TIMESTAMP" | "ATTACHMENT" | "MARKING" | "CIPHER_TEXT" | "MEDIA_REFERENCE" | "VECTOR" | "GEOTIME_SERIES_REFERENCE";

interface DataType_baseType {
    type: "baseType";
    baseType: BasePropertyType;
}
/**
 * Data type corresponding to `Type`. Differently from `Type` this only encodes the type of data, without
 * encoding e.g. analyzer settings. Prefer this to `Type` whenever e.g. type-checking against object properties.
 */
type DataType = DataType_baseType;

/**
 * Always true.
 */
interface AlwaysCondition {
}

/**
 * True if all conditions are true.
 */
interface AndCondition {
    conditions: Array<Condition>;
}

/**
 * Reference to the property this rule is being applied to.
 */
interface It {
}

interface ValueReference_it {
    type: "it";
    it: It;
}
interface ValueReference_valueReferenceId {
    type: "valueReferenceId";
    valueReferenceId: ValueReferenceId;
}
type ValueReference = ValueReference_it | ValueReference_valueReferenceId;

interface ValueReferenceOrStringConstant_constant {
    type: "constant";
    constant: string;
}
interface ValueReferenceOrStringConstant_reference {
    type: "reference";
    reference: ValueReference;
}
type ValueReferenceOrStringConstant = ValueReferenceOrStringConstant_constant | ValueReferenceOrStringConstant_reference;

interface DateRangeCondition {
    property: ValueReference;
    since: ValueReferenceOrStringConstant | undefined;
    until: ValueReferenceOrStringConstant | undefined;
}

interface ExactBooleanMatchCondition {
    property: ValueReference;
    value: boolean;
}

interface ExactDateMatchCondition {
    property: ValueReference;
    value: string;
}

interface ValueReferenceOrDoubleConstant_constant {
    type: "constant";
    constant: number;
}
interface ValueReferenceOrDoubleConstant_reference {
    type: "reference";
    reference: ValueReference;
}
type ValueReferenceOrDoubleConstant = ValueReferenceOrDoubleConstant_constant | ValueReferenceOrDoubleConstant_reference;

interface ExactNumericMatchCondition {
    property: ValueReference;
    value: ValueReferenceOrDoubleConstant;
}

/**
 * True if the value of the referenced property is null for the user. This can happen either if the underlying
 * value is null, or the user cannot access the data source that generates the referenced property.
 */
interface IsNullCondition {
    property: ValueReference;
}

type MathOperator = "EQUAL" | "NOT_EQUAL" | "GREATER_THAN" | "LESS_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN_OR_EQUAL";

type MathBinaryOperator = "PLUS" | "MINUS" | "TIMES" | "DIVIDE";

interface MathBinaryOperation {
    left: MathValue;
    op: MathBinaryOperator;
    right: MathValue;
}

type MathUnaryOperator = "MINUS" | "ABS";

interface MathUnaryOperation {
    property: MathValue;
    op: MathUnaryOperator;
}

interface MathValue_reference {
    type: "reference";
    reference: ValueReference;
}
interface MathValue_constant {
    type: "constant";
    constant: number;
}
interface MathValue_binaryOperation {
    type: "binaryOperation";
    binaryOperation: MathBinaryOperation;
}
interface MathValue_unaryOperation {
    type: "unaryOperation";
    unaryOperation: MathUnaryOperation;
}
type MathValue = MathValue_reference | MathValue_constant | MathValue_binaryOperation | MathValue_unaryOperation;

interface MathComparison {
    left: MathValue;
    op: MathOperator;
    right: MathValue;
}

interface MathCondition {
    comparison: MathComparison;
}

/**
 * Flip the result of the condition.
 */
interface NotCondition {
    condition: Condition;
}

interface NumericRangeCondition {
    property: ValueReference;
    from: ValueReferenceOrDoubleConstant | undefined;
    until: ValueReferenceOrDoubleConstant | undefined;
}

/**
 * True if at least one condition is true.
 */
interface OrCondition {
    conditions: Array<Condition>;
}

type RelativeTimeUnit = "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

interface RelativePointInTime {
    value: number;
    timeUnit: RelativeTimeUnit;
}

/**
 * An identifier of a time zone, e.g. "Europe/London" as defined by the Time Zone Database.
 */
type TimeZoneId = string;

interface RelativeDateRangeCondition {
    property: ValueReference;
    sinceRelative: RelativePointInTime | undefined;
    untilRelative: RelativePointInTime | undefined;
    timeZoneId: TimeZoneId;
}

interface RelativeTimestampRangeCondition {
    property: ValueReference;
    sinceRelativeMillis: number | undefined;
    untilRelativeMillis: number | undefined;
}

/**
 * Value used for string operators. If there is more than one value in the `values`
 * property, the operator will OR all the values.
 */
interface StringConditionValue {
    values: Array<ValueReferenceOrStringConstant>;
}

interface StringComparisonOperator_contains {
    type: "contains";
    contains: StringConditionValue;
}
interface StringComparisonOperator_startsWith {
    type: "startsWith";
    startsWith: StringConditionValue;
}
interface StringComparisonOperator_endsWith {
    type: "endsWith";
    endsWith: StringConditionValue;
}
interface StringComparisonOperator_exactly {
    type: "exactly";
    exactly: StringConditionValue;
}
type StringComparisonOperator = StringComparisonOperator_contains | StringComparisonOperator_startsWith | StringComparisonOperator_endsWith | StringComparisonOperator_exactly;

/**
 * Compare a string to a set of static values.
 */
interface StringComparisonCondition {
    property: ValueReference;
    operator: StringComparisonOperator;
    caseSensitive: boolean;
}

interface ValueReferenceOrDatetimeConstant_constant {
    type: "constant";
    constant: string;
}
interface ValueReferenceOrDatetimeConstant_reference {
    type: "reference";
    reference: ValueReference;
}
type ValueReferenceOrDatetimeConstant = ValueReferenceOrDatetimeConstant_constant | ValueReferenceOrDatetimeConstant_reference;

interface TimestampRangeCondition {
    property: ValueReference;
    from: ValueReferenceOrDatetimeConstant | undefined;
    until: ValueReferenceOrDatetimeConstant | undefined;
}

interface Condition_always {
    type: "always";
    always: AlwaysCondition;
}
interface Condition_and {
    type: "and";
    and: AndCondition;
}
interface Condition_or {
    type: "or";
    or: OrCondition;
}
interface Condition_not {
    type: "not";
    not: NotCondition;
}
interface Condition_isNull {
    type: "isNull";
    isNull: IsNullCondition;
}
interface Condition_stringComparison {
    type: "stringComparison";
    stringComparison: StringComparisonCondition;
}
interface Condition_exactBooleanMatch {
    type: "exactBooleanMatch";
    exactBooleanMatch: ExactBooleanMatchCondition;
}
interface Condition_exactNumericMatch {
    type: "exactNumericMatch";
    exactNumericMatch: ExactNumericMatchCondition;
}
interface Condition_exactDateMatch {
    type: "exactDateMatch";
    exactDateMatch: ExactDateMatchCondition;
}
interface Condition_numericRange {
    type: "numericRange";
    numericRange: NumericRangeCondition;
}
interface Condition_dateRange {
    type: "dateRange";
    dateRange: DateRangeCondition;
}
interface Condition_timestampRange {
    type: "timestampRange";
    timestampRange: TimestampRangeCondition;
}
interface Condition_relativeDateRange {
    type: "relativeDateRange";
    relativeDateRange: RelativeDateRangeCondition;
}
interface Condition_relativeTimestampRange {
    type: "relativeTimestampRange";
    relativeTimestampRange: RelativeTimestampRangeCondition;
}
interface Condition_math {
    type: "math";
    math: MathCondition;
}
type Condition = Condition_always | Condition_and | Condition_or | Condition_not | Condition_isNull | Condition_stringComparison | Condition_exactBooleanMatch | Condition_exactNumericMatch | Condition_exactDateMatch | Condition_numericRange | Condition_dateRange | Condition_timestampRange | Condition_relativeDateRange | Condition_relativeTimestampRange | Condition_math;

type Alignment = "LEFT" | "CENTER" | "RIGHT";

type Intent = "HIGHLIGHT" | "SUCCESS" | "WARNING" | "DANGER";

/**
 * No color style should be applied. This can be thought of as an empty 'optional<ColorStyle>'.
 */
interface NoColorStyle {
}

interface RgbColor {
    red: number;
    green: number;
    blue: number;
}

interface ColorStyle_intent {
    type: "intent";
    intent: Intent;
}
interface ColorStyle_primaryRgb {
    type: "primaryRgb";
    primaryRgb: RgbColor;
}
interface ColorStyle_none {
    type: "none";
    none: NoColorStyle;
}
type ColorStyle = ColorStyle_intent | ColorStyle_primaryRgb | ColorStyle_none;

interface FormatStyle {
    color: ColorStyle;
    alignment: Alignment | undefined;
}

/**
 * A formatting rule. Apply the format if the condition evaluates to true.
 */
interface Rule {
    condition: Condition;
    style: FormatStyle;
}

/**
 * A rule chain will evaluate rules one-by-one first-to-last. The first matching rule (for which the condition
 * is true) will apply the format, stopping evaluation of this chain. Use this to implement conditionals.
 */
interface RuleChain {
    rules: Array<Rule>;
}

interface RuleSetNamedType {
    name: string;
    id: ValueReferenceId;
    type: DataType;
}

/**
 * A set of rules that can be applied to a property. This should correspond to a semantic set of formatting
 * rules.
 *
 * For example:
 * - Number (accounting): renders negative numbers with "()", and sets the right amount of parentheses.
 * - Number (compact): renders millions as `$nM`
 * - ...
 *
 * These rules can be re-used in different contexts by re-binding the value references as required.
 */
interface RuleSet {
    rid: RuleSetRid;
    name: string;
    description: string | undefined;
    itType: DataType | undefined;
    namedTypes: Record<ValueReferenceId, RuleSetNamedType>;
    chains: Array<RuleChain>;
}

interface SharedPropertyTypeBlockDataV2 {
    sharedPropertyType: SharedPropertyType;
}

interface OntologyBlockDataV2 {
    objectTypes: Record<ObjectTypeRid, ObjectTypeBlockDataV2>;
    sharedPropertyTypes: Record<SharedPropertyTypeRid, SharedPropertyTypeBlockDataV2>;
    linkTypes: Record<LinkTypeRid, LinkTypeBlockDataV2>;
    ruleSets: Record<RuleSetRid, RuleSet>;
    actionTypes: Record<ActionTypeRid, ActionTypeBlockDataV2>;
    interfaceTypes: Record<InterfaceTypeRid, InterfaceTypeBlockDataV2>;
    blockOutputCompassLocations: Record<BlockShapeId, InstallLocationBlockShapeId>;
    knownIdentifiers: KnownMarketplaceIdentifiers;
    blockPermissionInformation: BlockPermissionInformation | undefined;
}

/**
 * Ontology as code uses this as a stable ID for TimeSeriesSync inputs
 */
type TimeSeriesSyncName = string;

interface OntologyIrArrayPropertyType$1 {
    subtype: OntologyIrType$1;
}

interface OntologyIrCipherTextPropertyType {
    plainTextType: OntologyIrType$1;
    defaultCipherChannelRid: string | undefined;
}

/**
 * Represents an ordered set of fields and values.
 */
interface OntologyIrStructFieldType$1 {
    displayMetadata: StructFieldDisplayMetadata;
    apiName: ObjectTypeFieldApiName$1;
    fieldType: OntologyIrType$1;
    aliases: Array<StructFieldAlias>;
    typeClasses: Array<TypeClass>;
}

interface OntologyIrStructPropertyType$1 {
    structFields: Array<OntologyIrStructFieldType$1>;
}

interface OntologyIrType_array {
    type: "array";
    array: OntologyIrArrayPropertyType$1;
}
interface OntologyIrType_boolean {
    type: "boolean";
    boolean: BooleanPropertyType;
}
interface OntologyIrType_byte {
    type: "byte";
    byte: BytePropertyType;
}
interface OntologyIrType_date {
    type: "date";
    date: DatePropertyType;
}
interface OntologyIrType_decimal {
    type: "decimal";
    decimal: DecimalPropertyType;
}
interface OntologyIrType_double {
    type: "double";
    double: DoublePropertyType;
}
interface OntologyIrType_float {
    type: "float";
    float: FloatPropertyType;
}
interface OntologyIrType_geohash {
    type: "geohash";
    geohash: GeohashPropertyType;
}
interface OntologyIrType_geoshape {
    type: "geoshape";
    geoshape: GeoshapePropertyType;
}
interface OntologyIrType_integer {
    type: "integer";
    integer: IntegerPropertyType;
}
interface OntologyIrType_long {
    type: "long";
    long: LongPropertyType;
}
interface OntologyIrType_short {
    type: "short";
    short: ShortPropertyType;
}
interface OntologyIrType_string {
    type: "string";
    string: StringPropertyType;
}
interface OntologyIrType_experimentalTimeDependentV1 {
    type: "experimentalTimeDependentV1";
    experimentalTimeDependentV1: ExperimentalTimeDependentPropertyTypeV1;
}
interface OntologyIrType_timestamp {
    type: "timestamp";
    timestamp: TimestampPropertyType;
}
interface OntologyIrType_attachment {
    type: "attachment";
    attachment: AttachmentPropertyType;
}
interface OntologyIrType_marking {
    type: "marking";
    marking: MarkingPropertyType;
}
interface OntologyIrType_cipherText {
    type: "cipherText";
    cipherText: OntologyIrCipherTextPropertyType;
}
interface OntologyIrType_mediaReference {
    type: "mediaReference";
    mediaReference: MediaReferencePropertyType;
}
interface OntologyIrType_vector {
    type: "vector";
    vector: VectorPropertyType;
}
interface OntologyIrType_geotimeSeriesReference {
    type: "geotimeSeriesReference";
    geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}
interface OntologyIrType_struct {
    type: "struct";
    struct: OntologyIrStructPropertyType$1;
}
/**
 * Wrapper type for the various supported property types.
 *
 * Note: this type also encodes information on how to store the property. Use `DataType` if only the raw type
 * information matters (e.g. this format condition input must be a string).
 */
type OntologyIrType$1 = OntologyIrType_array | OntologyIrType_boolean | OntologyIrType_byte | OntologyIrType_date | OntologyIrType_decimal | OntologyIrType_double | OntologyIrType_float | OntologyIrType_geohash | OntologyIrType_geoshape | OntologyIrType_integer | OntologyIrType_long | OntologyIrType_short | OntologyIrType_string | OntologyIrType_experimentalTimeDependentV1 | OntologyIrType_timestamp | OntologyIrType_attachment | OntologyIrType_marking | OntologyIrType_cipherText | OntologyIrType_mediaReference | OntologyIrType_vector | OntologyIrType_geotimeSeriesReference | OntologyIrType_struct;

interface ValueTypeApiNameReference {
    apiName: string;
    version: string;
}

/**
 * A property type that can be shared across object types.
 */
interface OntologyIrSharedPropertyType$1 {
    apiName: ObjectTypeFieldApiName$1;
    displayMetadata: SharedPropertyTypeDisplayMetadata;
    indexedForSearch: boolean;
    baseFormatter: BaseFormatter | undefined;
    type: OntologyIrType$1;
    typeClasses: Array<TypeClass>;
    dataConstraints: DataConstraints | undefined;
    gothamMapping: SharedPropertyTypeGothamMapping | undefined;
    valueType: ValueTypeApiNameReference | undefined;
    aliases: Array<SharedPropertyTypeAlias>;
}

interface OntologyIrInterfaceSharedPropertyType {
    sharedPropertyType: OntologyIrSharedPropertyType$1;
    required: boolean;
}

/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
interface OntologyIrMarketplaceObjectTypeEntityMetadata {
    arePatchesEnabled: boolean;
}

interface OntologyIrInterfacePropertyImplementation {
    propertyTypeRid: ObjectTypeFieldApiName$1;
}

/**
 * An interface that an object type implements and metadata on how it implements it.
 */
interface OntologyIrObjectTypeInterfaceImplementation {
    interfaceTypeApiName: InterfaceTypeApiName;
    properties: Record<ObjectTypeFieldApiName$1, OntologyIrInterfacePropertyImplementation>;
}

/**
 * This status indicates that the ObjectType is reaching the end of its life and will be removed as per the deadline specified.
 */
interface OntologyIrDeprecatedObjectTypeStatus {
    message: string;
    deadline: string;
    replacedBy: ObjectTypeApiName | undefined;
}

interface OntologyIrObjectTypeStatus_experimental {
    type: "experimental";
    experimental: ExperimentalObjectTypeStatus;
}
interface OntologyIrObjectTypeStatus_active {
    type: "active";
    active: ActiveObjectTypeStatus;
}
interface OntologyIrObjectTypeStatus_deprecated {
    type: "deprecated";
    deprecated: OntologyIrDeprecatedObjectTypeStatus;
}
interface OntologyIrObjectTypeStatus_example {
    type: "example";
    example: ExampleObjectTypeStatus;
}
interface OntologyIrObjectTypeStatus_endorsed {
    type: "endorsed";
    endorsed: EndorsedObjectTypeStatus;
}
/**
 * The status to indicate whether the ObjectType is either Experimental, Active, Deprecated, Example or Endorsed.
 */
type OntologyIrObjectTypeStatus = OntologyIrObjectTypeStatus_experimental | OntologyIrObjectTypeStatus_active | OntologyIrObjectTypeStatus_deprecated | OntologyIrObjectTypeStatus_example | OntologyIrObjectTypeStatus_endorsed;

/**
 * This status indicates that the PropertyType is reaching the end of its life and will be removed as per the deadline specified.
 */
interface OntologyIrDeprecatedPropertyTypeStatus {
    message: string;
    deadline: string;
    replacedBy: ObjectTypeFieldApiName$1 | undefined;
}

interface OntologyIrPropertyTypeStatus_experimental {
    type: "experimental";
    experimental: ExperimentalPropertyTypeStatus;
}
interface OntologyIrPropertyTypeStatus_active {
    type: "active";
    active: ActivePropertyTypeStatus;
}
interface OntologyIrPropertyTypeStatus_deprecated {
    type: "deprecated";
    deprecated: OntologyIrDeprecatedPropertyTypeStatus;
}
interface OntologyIrPropertyTypeStatus_example {
    type: "example";
    example: ExamplePropertyTypeStatus;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
 */
type OntologyIrPropertyTypeStatus = OntologyIrPropertyTypeStatus_experimental | OntologyIrPropertyTypeStatus_active | OntologyIrPropertyTypeStatus_deprecated | OntologyIrPropertyTypeStatus_example;

interface OntologyIrValueReferenceSource_propertyTypeRid {
    type: "propertyTypeRid";
    propertyTypeRid: ObjectTypeFieldApiName$1;
}
type OntologyIrValueReferenceSource = OntologyIrValueReferenceSource_propertyTypeRid;

/**
 * Bind a rule set to a practical use. This enables re-use of rule sets in various contexts (e.g. values can
 * be bound to properties, or to actions). The `it` value is considered special & have semantic meaning at the
 * binding point (e.g. the property to which the rule set is bound).
 */
interface OntologyIrRuleSetBinding {
    ruleSetRid: RuleSetRid;
    bindings: Record<ValueReferenceId, OntologyIrValueReferenceSource>;
}

/**
 * A PropertyType is a typed attribute of an ObjectType.
 */
interface OntologyIrPropertyType {
    apiName: ObjectTypeFieldApiName$1 | undefined;
    sharedPropertyTypeApiName: ObjectTypeFieldApiName$1 | undefined;
    displayMetadata: PropertyTypeDisplayMetadata;
    indexedForSearch: boolean;
    ruleSetBinding: OntologyIrRuleSetBinding | undefined;
    baseFormatter: BaseFormatter | undefined;
    type: OntologyIrType$1;
    typeClasses: Array<TypeClass>;
    status: OntologyIrPropertyTypeStatus;
    inlineAction: InlineActionType | undefined;
    dataConstraints: DataConstraints | undefined;
    sharedPropertyTypeRid: ObjectTypeFieldApiName$1 | undefined;
    valueType: ValueTypeApiNameReference | undefined;
}

/**
 * An ObjectType is a model that represents a real world concept. For example, there could be
 * an Employees ObjectType to represent the employees in a business organization.
 */
interface OntologyIrObjectType {
    displayMetadata: ObjectTypeDisplayMetadata;
    primaryKeys: Array<ObjectTypeFieldApiName$1>;
    propertyTypes: Record<ObjectTypeFieldApiName$1, OntologyIrPropertyType>;
    titlePropertyTypeRid: ObjectTypeFieldApiName$1;
    apiName: ObjectTypeApiName | undefined;
    status: OntologyIrObjectTypeStatus;
    redacted: boolean | undefined;
    implementsInterfaces2: Array<OntologyIrObjectTypeInterfaceImplementation>;
    allImplementsInterfaces: Record<InterfaceTypeApiName, OntologyIrObjectTypeInterfaceImplementation>;
}

/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
interface OntologyIrObjectTypeDatasetDatasourceV2 {
    datasetRid: DataSetName;
    propertyMapping: Record<ObjectTypeFieldApiName$1, PropertyTypeMappingInfo>;
}

interface OntologyIrSecurityGroupAndCondition {
    conditions: Array<OntologyIrSecurityGroupGranularCondition>;
}

interface OntologyIrSecurityGroupComparisonValue_constant {
    type: "constant";
    constant: SecurityGroupComparisonConstant;
}
interface OntologyIrSecurityGroupComparisonValue_property {
    type: "property";
    property: ObjectTypeFieldApiName$1;
}
interface OntologyIrSecurityGroupComparisonValue_userProperty {
    type: "userProperty";
    userProperty: SecurityGroupComparisonUserProperty;
}
type OntologyIrSecurityGroupComparisonValue = OntologyIrSecurityGroupComparisonValue_constant | OntologyIrSecurityGroupComparisonValue_property | OntologyIrSecurityGroupComparisonValue_userProperty;

interface OntologyIrSecurityGroupComparisonCondition {
    operator: SecurityGroupComparisonOperator;
    left: OntologyIrSecurityGroupComparisonValue;
    right: OntologyIrSecurityGroupComparisonValue;
}

/**
 * Condition that specifies that user's markings must be evaluated against the marking(s) contained on each
 * object's 'property'.
 *
 * Note that the specified property's propertyType must be of type MarkingPropertyType or ArrayPropertyType
 * of MarkingPropertyTypes.
 */
interface OntologyIrSecurityGroupMarkingsCondition {
    property: ObjectTypeFieldApiName$1;
}

/**
 * True if the condition is false. This condition cannot have an empty property type.
 */
interface OntologyIrSecurityGroupNotCondition {
    condition: OntologyIrSecurityGroupGranularCondition;
}

interface OntologyIrSecurityGroupOrCondition {
    conditions: Array<OntologyIrSecurityGroupGranularCondition>;
}

interface OntologyIrSecurityGroupGranularCondition_not {
    type: "not";
    not: OntologyIrSecurityGroupNotCondition;
}
interface OntologyIrSecurityGroupGranularCondition_true {
    type: "true";
    true: SecurityGroupTrueCondition;
}
interface OntologyIrSecurityGroupGranularCondition_and {
    type: "and";
    and: OntologyIrSecurityGroupAndCondition;
}
interface OntologyIrSecurityGroupGranularCondition_or {
    type: "or";
    or: OntologyIrSecurityGroupOrCondition;
}
interface OntologyIrSecurityGroupGranularCondition_markings {
    type: "markings";
    markings: OntologyIrSecurityGroupMarkingsCondition;
}
interface OntologyIrSecurityGroupGranularCondition_comparison {
    type: "comparison";
    comparison: OntologyIrSecurityGroupComparisonCondition;
}
/**
 * This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
 * Note that more conditions can and will be added in the future, as the need arises.
 */
type OntologyIrSecurityGroupGranularCondition = OntologyIrSecurityGroupGranularCondition_not | OntologyIrSecurityGroupGranularCondition_true | OntologyIrSecurityGroupGranularCondition_and | OntologyIrSecurityGroupGranularCondition_or | OntologyIrSecurityGroupGranularCondition_markings | OntologyIrSecurityGroupGranularCondition_comparison;

/**
 * Ontology-managed granular security applied to the properties in the group. User must also first satisfy the
 * additionalMandatory security markings, if any are specified, to have visibility to the properties within
 * this group that are allowed by the granular policy.
 *
 * The granular policy specified must be authorized by the overall ObjectTypeDatasource's dataSecurity for
 * every "row" (object or relation).
 */
interface OntologyIrSecurityGroupGranularPolicy {
    granularPolicyCondition: OntologyIrSecurityGroupGranularCondition;
    additionalMandatory: SecurityGroupMandatoryPolicy;
}

/**
 * Ontology-managed granular policy applied to the properties in the group.
 */
interface OntologyIrSecurityGroupGranularSecurityDefinition {
    viewPolicy: OntologyIrSecurityGroupGranularPolicy;
}

interface OntologyIrSecurityGroupSecurityDefinition_mandatoryOnly {
    type: "mandatoryOnly";
    mandatoryOnly: SecurityGroupMandatoryOnlySecurityDefinition;
}
interface OntologyIrSecurityGroupSecurityDefinition_granular {
    type: "granular";
    granular: OntologyIrSecurityGroupGranularSecurityDefinition;
}
type OntologyIrSecurityGroupSecurityDefinition = OntologyIrSecurityGroupSecurityDefinition_mandatoryOnly | OntologyIrSecurityGroupSecurityDefinition_granular;

/**
 * Defines a grouping of properties sharing the same security.
 *
 * One and exactly one of the specified groups must contain the primary key property(ies). If there
 * are multiple primary key properties, they must belong to the same property group. The security of the
 * property group that includes the primary key also specifies overall object visibility: if the user does not
 * pass this property group's security, the entire object is invisible, regardless of visibility of other
 * property groups.
 */
interface OntologyIrPropertySecurityGroup {
    rid: PropertySecurityGroupRid;
    properties: Array<ObjectTypeFieldApiName$1>;
    security: OntologyIrSecurityGroupSecurityDefinition;
}

/**
 * Groupings of properties into different security "buckets." Every property of the entity type must belong
 * to one and only one property security group.
 */
interface OntologyIrPropertySecurityGroups {
    groups: Array<OntologyIrPropertySecurityGroup>;
}

/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch, and uses PropertySecurityGroups to allow grouping those properties
 * into different security levels. It is only compatible with object storage v2, hence does not have a
 * writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
interface OntologyIrObjectTypeDatasetDatasourceV3 {
    branchId: BranchId;
    datasetRid: DataSetName;
    propertyMapping: Record<ObjectTypeFieldApiName$1, PropertyTypeMappingInfo>;
    propertySecurityGroups: OntologyIrPropertySecurityGroups | undefined;
}

interface OntologyIrPropertyTypeIdentifier_propertyType {
    type: "propertyType";
    propertyType: ObjectTypeFieldApiName$1;
}
type OntologyIrPropertyTypeIdentifier = OntologyIrPropertyTypeIdentifier_propertyType;

/**
 * A collection of values of a property type.
 */
interface OntologyIrLinkedCollection {
    linkedProperty: OntologyIrPropertyTypeIdentifier;
    limit: number;
}

interface OntologyIrDerivedPropertyAggregation_count {
    type: "count";
    count: LinkedCountMetric;
}
interface OntologyIrDerivedPropertyAggregation_avg {
    type: "avg";
    avg: OntologyIrPropertyTypeIdentifier;
}
interface OntologyIrDerivedPropertyAggregation_max {
    type: "max";
    max: OntologyIrPropertyTypeIdentifier;
}
interface OntologyIrDerivedPropertyAggregation_min {
    type: "min";
    min: OntologyIrPropertyTypeIdentifier;
}
interface OntologyIrDerivedPropertyAggregation_sum {
    type: "sum";
    sum: OntologyIrPropertyTypeIdentifier;
}
interface OntologyIrDerivedPropertyAggregation_approximateCardinality {
    type: "approximateCardinality";
    approximateCardinality: OntologyIrPropertyTypeIdentifier;
}
interface OntologyIrDerivedPropertyAggregation_exactCardinality {
    type: "exactCardinality";
    exactCardinality: OntologyIrPropertyTypeIdentifier;
}
interface OntologyIrDerivedPropertyAggregation_collectList {
    type: "collectList";
    collectList: OntologyIrLinkedCollection;
}
interface OntologyIrDerivedPropertyAggregation_collectSet {
    type: "collectSet";
    collectSet: OntologyIrLinkedCollection;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
 */
type OntologyIrDerivedPropertyAggregation = OntologyIrDerivedPropertyAggregation_count | OntologyIrDerivedPropertyAggregation_avg | OntologyIrDerivedPropertyAggregation_max | OntologyIrDerivedPropertyAggregation_min | OntologyIrDerivedPropertyAggregation_sum | OntologyIrDerivedPropertyAggregation_approximateCardinality | OntologyIrDerivedPropertyAggregation_exactCardinality | OntologyIrDerivedPropertyAggregation_collectList | OntologyIrDerivedPropertyAggregation_collectSet;

interface OntologyIrDerivedPropertyLinkTypeIdentifier_linkType {
    type: "linkType";
    linkType: LinkTypeId;
}
type OntologyIrDerivedPropertyLinkTypeIdentifier = OntologyIrDerivedPropertyLinkTypeIdentifier_linkType;

interface OntologyIrLinkTypeLinkDefinition {
    linkTypeIdentifier: OntologyIrDerivedPropertyLinkTypeIdentifier;
    linkTypeSide: DerivedPropertyLinkTypeSide;
}

interface OntologyIrSearchAroundStep {
    linkTypeIdentifier: OntologyIrDerivedPropertyLinkTypeIdentifier;
    linkTypeSide: DerivedPropertyLinkTypeSide;
}

interface OntologyIrMultiHopStepDefinition_searchAround {
    type: "searchAround";
    searchAround: OntologyIrSearchAroundStep;
}
type OntologyIrMultiHopStepDefinition = OntologyIrMultiHopStepDefinition_searchAround;

/**
 * A link definition formed from sequentially traversing one or more multi hop steps.
 */
interface OntologyIrMultiHopLinkDefinition {
    steps: Array<OntologyIrMultiHopStepDefinition>;
}

interface OntologyIrLinkDefinition_linkTypeLink {
    type: "linkTypeLink";
    linkTypeLink: OntologyIrLinkTypeLinkDefinition;
}
interface OntologyIrLinkDefinition_multiHopLink {
    type: "multiHopLink";
    multiHopLink: OntologyIrMultiHopLinkDefinition;
}
type OntologyIrLinkDefinition = OntologyIrLinkDefinition_linkTypeLink | OntologyIrLinkDefinition_multiHopLink;

/**
 * A derived property that references aggregations on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
interface OntologyIrAggregatedPropertiesDefinition {
    propertyTypeMapping: Record<ObjectTypeFieldApiName$1, OntologyIrDerivedPropertyAggregation>;
    linkDefinition: OntologyIrLinkDefinition;
}

/**
 * A derived property definition that references property types on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
interface OntologyIrLinkedPropertiesDefinition {
    propertyTypeMapping: Record<ObjectTypeFieldApiName$1, OntologyIrPropertyTypeIdentifier>;
    linkDefinition: OntologyIrLinkDefinition;
}

interface OntologyIrDerivedPropertiesDefinition_linkedProperties {
    type: "linkedProperties";
    linkedProperties: OntologyIrLinkedPropertiesDefinition;
}
interface OntologyIrDerivedPropertiesDefinition_aggregatedProperties {
    type: "aggregatedProperties";
    aggregatedProperties: OntologyIrAggregatedPropertiesDefinition;
}
type OntologyIrDerivedPropertiesDefinition = OntologyIrDerivedPropertiesDefinition_linkedProperties | OntologyIrDerivedPropertiesDefinition_aggregatedProperties;

/**
 * Object type datasource which is backed by derived properties definition.
 *
 * This source provides property values that are derived from property types on other object type(s)
 * via links or additional aggregations and computations.
 *
 * Note: if a property type is backed by an ObjectTypeDerivedPropertiesDatasource, the Type of the property
 * type will be resolved by OMS automatically. The TypeForModification will be ignored for that property type.
 *
 * This type is only compatible with object storage v2.
 */
interface OntologyIrObjectTypeDerivedPropertiesDatasource {
    definition: OntologyIrDerivedPropertiesDefinition;
}

/**
 * Object type datasource which is backed by a "direct write" source, such as an edge pipeline. This type
 * of a datasource uses PropertySecurityGroups to allow grouping its properties into different security levels.
 * This type is only compatible with object storage v2.
 */
interface OntologyIrObjectTypeDirectDatasource {
    directSourceRid: DirectSourceRid;
    propertyMapping: Record<ObjectTypeFieldApiName$1, PropertyTypeMappingInfo>;
    propertySecurityGroups: OntologyIrPropertySecurityGroups;
}

/**
 * Object type datasource which is not backed by any dataset or restricted view. This type of a "datasource"
 * only supports edits-only properties, and uses PropertySecurityGroups to allow grouping those properties into
 * different security levels.
 *
 * This type is only compatible with object storage v2.
 */
interface OntologyIrObjectTypeEditsOnlyDatasource {
    editsOnlyRid: EditsOnlyRid | undefined;
    properties: Array<ObjectTypeFieldApiName$1>;
    propertySecurityGroups: OntologyIrPropertySecurityGroups;
}

/**
 * Object type datasource that is backed by a Geotime integration, uniquely identified by its rid.
 */
interface OntologyIrObjectTypeGeotimeSeriesDatasource {
    geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationName;
    properties: Array<ObjectTypeFieldApiName$1>;
}

/**
 * Object type datasource that is backed by a media set view, uniquely identified by its rid. This datasource
 * differs from ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
 * has access to a property backed by this datasource, they will be able to see the media item it references.
 */
interface OntologyIrObjectTypeMediaSetViewDatasource {
    mediaSetViewLocator: MediaSetViewName;
    properties: Array<ObjectTypeFieldApiName$1>;
    assumedMarkings: Array<MarkingId>;
}

/**
 * Ontology as code uses this as a stable ID for the restricted view input
 */
type RestrictedViewName = string;

/**
 * Ontology as code uses this as a stable ID for the stream input
 */
type StreamName = string;

/**
 * Object type datasource representing a restricted view on top of a stream.
 */
interface OntologyIrObjectTypeRestrictedStreamDatasource {
    restrictedViewRid: RestrictedViewName;
    policyVersion: PolicyVersion;
    streamLocator: StreamName;
    propertyMapping: Record<ObjectTypeFieldApiName$1, ColumnName>;
    retentionPolicy: RetentionPolicy;
}

/**
 * Object type datasource supporting edit only property types, that is backed by a restricted view in foundry,
 * uniquely identified by its rid. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
interface OntologyIrObjectTypeRestrictedViewDatasourceV2 {
    restrictedViewRid: RestrictedViewName;
    propertyMapping: Record<ObjectTypeFieldApiName$1, PropertyTypeMappingInfo>;
}

/**
 * Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
 * Supports property security groups and should be used instead of ObjectTypeRestrictedStreamDatasource
 * when granular policies are needed.
 */
interface OntologyIrObjectTypeStreamDatasourceV2 {
    streamLocator: StreamName;
    propertyMapping: Record<ObjectTypeFieldApiName$1, ColumnName>;
    propertySecurityGroups: OntologyIrPropertySecurityGroups | undefined;
    retentionPolicy: RetentionPolicy;
}

/**
 * Object type datasource that is backed by a table in foundry, uniquely identified by its locator.
 * Supports edit only property types through PropertyTypeMappingInfo.
 */
interface OntologyIrObjectTypeTableDatasource {
    branchId: BranchId;
    propertyMapping: Record<ObjectTypeFieldApiName$1, PropertyTypeMappingInfo>;
    tableRid: TableRid;
}

/**
 * Object type datasource that is backed by a time series sync, uniquely identified by its rid.
 */
interface OntologyIrObjectTypeTimeSeriesDatasource {
    timeSeriesSyncRid: TimeSeriesSyncName;
    properties: Array<ObjectTypeFieldApiName$1>;
    assumedMarkings: Array<MarkingId>;
}

interface OntologyIrObjectTypeDatasourceDefinition_streamV2 {
    type: "streamV2";
    streamV2: OntologyIrObjectTypeStreamDatasourceV2;
}
interface OntologyIrObjectTypeDatasourceDefinition_timeSeries {
    type: "timeSeries";
    timeSeries: OntologyIrObjectTypeTimeSeriesDatasource;
}
interface OntologyIrObjectTypeDatasourceDefinition_datasetV2 {
    type: "datasetV2";
    datasetV2: OntologyIrObjectTypeDatasetDatasourceV2;
}
interface OntologyIrObjectTypeDatasourceDefinition_datasetV3 {
    type: "datasetV3";
    datasetV3: OntologyIrObjectTypeDatasetDatasourceV3;
}
interface OntologyIrObjectTypeDatasourceDefinition_restrictedViewV2 {
    type: "restrictedViewV2";
    restrictedViewV2: OntologyIrObjectTypeRestrictedViewDatasourceV2;
}
interface OntologyIrObjectTypeDatasourceDefinition_restrictedStream {
    type: "restrictedStream";
    restrictedStream: OntologyIrObjectTypeRestrictedStreamDatasource;
}
interface OntologyIrObjectTypeDatasourceDefinition_mediaSetView {
    type: "mediaSetView";
    mediaSetView: OntologyIrObjectTypeMediaSetViewDatasource;
}
interface OntologyIrObjectTypeDatasourceDefinition_geotimeSeries {
    type: "geotimeSeries";
    geotimeSeries: OntologyIrObjectTypeGeotimeSeriesDatasource;
}
interface OntologyIrObjectTypeDatasourceDefinition_table {
    type: "table";
    table: OntologyIrObjectTypeTableDatasource;
}
interface OntologyIrObjectTypeDatasourceDefinition_editsOnly {
    type: "editsOnly";
    editsOnly: OntologyIrObjectTypeEditsOnlyDatasource;
}
interface OntologyIrObjectTypeDatasourceDefinition_direct {
    type: "direct";
    direct: OntologyIrObjectTypeDirectDatasource;
}
interface OntologyIrObjectTypeDatasourceDefinition_derived {
    type: "derived";
    derived: OntologyIrObjectTypeDerivedPropertiesDatasource;
}
/**
 * Wrapper type for all supported object type datasource types.
 */
type OntologyIrObjectTypeDatasourceDefinition = OntologyIrObjectTypeDatasourceDefinition_streamV2 | OntologyIrObjectTypeDatasourceDefinition_timeSeries | OntologyIrObjectTypeDatasourceDefinition_datasetV2 | OntologyIrObjectTypeDatasourceDefinition_datasetV3 | OntologyIrObjectTypeDatasourceDefinition_restrictedViewV2 | OntologyIrObjectTypeDatasourceDefinition_restrictedStream | OntologyIrObjectTypeDatasourceDefinition_mediaSetView | OntologyIrObjectTypeDatasourceDefinition_geotimeSeries | OntologyIrObjectTypeDatasourceDefinition_table | OntologyIrObjectTypeDatasourceDefinition_editsOnly | OntologyIrObjectTypeDatasourceDefinition_direct | OntologyIrObjectTypeDatasourceDefinition_derived;

interface OntologyIrObjectTypeDatasource {
    rid: DatasourceRid;
    datasource: OntologyIrObjectTypeDatasourceDefinition;
    editsConfiguration: EditsConfiguration | undefined;
    redacted: boolean | undefined;
}

interface OntologyIrObjectTypeBlockDataV2 {
    objectType: OntologyIrObjectType;
    datasources: Array<OntologyIrObjectTypeDatasource>;
    entityMetadata: OntologyIrMarketplaceObjectTypeEntityMetadata | undefined;
}

type ObjectTypeFieldApiName = string;
interface OntologyIr {
    blockData: OntologyIrOntologyBlockDataV2;
    importedTypes: ImportedTypes;
}
interface OntologyIrOntologyBlockDataV2 extends ReplaceKeys<Omit<OntologyBlockDataV2, "knownIdentifiers" | "linkTypes" | "ruleSets" | "actionTypes" | "blockOutputCompassLocations">, {
    objectTypes: Record<string, OntologyIrObjectTypeBlockDataV2>;
    interfaceTypes: Record<string, OntologyIrInterfaceTypeBlockDataV2>;
    sharedPropertyTypes: Record<string, OntologyIrSharedPropertyTypeBlockDataV2>;
}> {
}
interface OntologyIrInterfaceType extends ReplaceKeys<Omit<InterfaceType, "rid">, {
    properties: OntologyIrSharedPropertyType[];
    allProperties: OntologyIrSharedPropertyType[];
    extendsInterfaces: string[];
    allExtendsInterfaces: string[];
    links: OntologyIrInterfaceLinkType[];
    allLinks: OntologyIrInterfaceLinkType[];
    propertiesV2: Record<ObjectTypeFieldApiName, {
        sharedPropertyType: OntologyIrSharedPropertyType;
        required: boolean;
    }>;
}> {
}
type ApiNameValueTypeReference = {
    apiName: ValueTypeApiName;
    version: ValueTypeVersion;
};
interface OntologyIrSharedPropertyType extends ReplaceKeys<Omit<SharedPropertyType, "rid" | "valueType">, {
    type: OntologyIrType;
}> {
    valueType?: ApiNameValueTypeReference;
}
type OntologyIrType = Exclude<Type, Type_struct | Type_array> | {
    type: "struct";
    struct: OntologyIrStructPropertyType;
} | {
    type: "array";
    array: OntologyIrArrayPropertyType;
};
type OntologyIrArrayPropertyType = ReplaceKeys<ArrayPropertyType, {
    subtype: OntologyIrType;
}>;
type OntologyIrStructPropertyType = ReplaceKeys<StructPropertyType, {
    structFields: Array<OntologyIrStructFieldType>;
}>;
type OntologyIrStructFieldType = ReplaceKeys<Omit<StructFieldType, "structFieldRid">, {
    fieldType: OntologyIrType;
}>;
interface OntologyIrInterfaceLinkType extends Omit<InterfaceLinkType, "rid"> {
}
interface OntologyIrInterfaceTypeBlockDataV2 extends ReplaceKeys<InterfaceTypeBlockDataV2, {
    interfaceType: OntologyIrInterfaceType;
}> {
}
interface OntologyIrSharedPropertyTypeBlockDataV2 extends ReplaceKeys<SharedPropertyTypeBlockDataV2, {
    sharedPropertyType: OntologyIrSharedPropertyType;
}> {
}
type ReplaceKeys<T, Z extends {
    [K in keyof T]?: unknown;
}> = {
    [K in keyof T]: K extends keyof Z ? Z[K] : T[K];
};
type OntologyIrPackagedValueType = {
    version: ValueTypeVersion;
    baseType: BaseType;
    constraints: ValueTypeDataConstraint[];
    exampleValues: ExampleValue[];
};
type OntologyIrPackagedValueTypeMetadata = {
    apiName: ValueTypeApiName;
    displayMetadata: ValueTypeDisplayMetadata;
    status: ValueTypeStatus;
};
type OntologyIrValueTypeBlockDataEntry = {
    metadata: OntologyIrPackagedValueTypeMetadata;
    versions: OntologyIrPackagedValueType[];
};
type OntologyIrValueTypeBlockData = {
    valueTypes: OntologyIrValueTypeBlockDataEntry[];
};
type ImportedTypes = {
    sharedPropertyTypes: ImportedSharedPropertyTypes[];
};
type ImportedSharedPropertyTypes = {
    apiName: string;
    packageName: string;
};

export { type ApiNameValueTypeReference, type BaseType, type DataConstraint, type DataConstraintWrapper, type DirectedLinkTypeRid, type ExampleValue, type FailureMessage, type FoundryObjectReference, type GetBulkLinksPageRequest, type ImportedSharedPropertyTypes, type ImportedTypes, type InterfaceSharedPropertyType, type InterfaceTypeRid, type InterfaceTypeStatus, type InterfaceTypeStatus_active, type InterfaceTypeStatus_deprecated, type InterfaceTypeStatus_experimental, type LinkTypeMetadata, type LoadAllOntologiesResponse, type ObjectIdentifier, type ObjectSet, type ObjectSetFilter$1 as ObjectSetFilter, type ObjectType, type OntologyIr, type OntologyIrInterfaceSharedPropertyType, type OntologyIrInterfaceType, type OntologyIrInterfaceTypeBlockDataV2, type OntologyIrObjectType, type OntologyIrObjectTypeBlockDataV2, type OntologyIrObjectTypeDatasource, type OntologyIrObjectTypeDatasourceDefinition, type OntologyIrObjectTypeInterfaceImplementation, type OntologyIrOntologyBlockDataV2, type OntologyIrPackagedValueType, type OntologyIrPackagedValueTypeMetadata, type OntologyIrPropertyType, type OntologyIrSharedPropertyType, type OntologyIrSharedPropertyTypeBlockDataV2, type OntologyIrStructFieldType, type OntologyIrType, type OntologyIrValueTypeBlockData, type OntologyIrValueTypeBlockDataEntry, type PropertyTypeMappingInfo, type SharedPropertyTypeGothamMapping, type StructFieldType, type Type, type ValueTypeApiName, type ValueTypeDataConstraint, type ValueTypeDisplayMetadata, type ValueTypeStatus, type ValueTypeVersion, type Visibility, bulkLoadOntologyEntities, createTemporaryObjectSet, getBulkLinksPage, getLinkTypesForObjectTypes, loadAllOntologies };
