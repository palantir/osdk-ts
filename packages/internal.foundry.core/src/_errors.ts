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
 * At least one of requested filters are malformed. Please look at the documentation of PropertyFilter.
 *
 * Log Safety: UNSAFE
 */
export interface MalformedPropertyFilters {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MalformedPropertyFilters";
  errorInstanceId: string;
  parameters: {
    malformedPropertyFilter: unknown;
  };
}

/**
 * Aggregation value does not conform to the expected underlying type.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidAggregationRangeValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidAggregationRangeValue";
  errorInstanceId: string;
  parameters: {
    property: unknown;
    objectType: unknown;
    propertyBaseType: unknown;
  };
}

/**
 * The given object could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceObjectMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceObjectMappingNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
   * Duration groupBy value is invalid. Units larger than day must have value 1 and date properties do not support
filtering on units smaller than day. As examples, neither bucketing by every two weeks nor bucketing a date by
every two hours are allowed.
   *
   * Log Safety: SAFE
   */
export interface InvalidDurationGroupByValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDurationGroupByValue";
  errorInstanceId: string;
  parameters: {};
}

/**
   * Results could not be filtered by the requested properties. Please mark the properties as Searchable and
Selectable in the Ontology Manager to be able to filter on those properties. There may be a short delay
between the time a property is marked Searchable and Selectable and when it can be used.
   *
   * Log Safety: UNSAFE
   */
export interface PropertiesNotFilterable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertiesNotFilterable";
  errorInstanceId: string;
  parameters: {
    properties: unknown;
  };
}

/**
   * The provided parameter ID was not found for the action. Please look at the configuredParameterIds field
to see which ones are available.
   *
   * Log Safety: UNSAFE
   */
export interface ParametersNotFound {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ParametersNotFound";
  errorInstanceId: string;
  parameters: {
    actionType: unknown;
    unknownParameterIds: unknown;
    configuredParameterIds: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface ApplyActionFailed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ApplyActionFailed";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The search on the property types are not supported. See the Search Objects documentation for
a list of supported search queries on different property types.
   *
   * Log Safety: UNSAFE
   */
export interface PropertyTypesSearchNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertyTypesSearchNotSupported";
  errorInstanceId: string;
  parameters: {
    parameters: unknown;
  };
}

/**
   * The value of the given parameter is invalid. See the documentation of DataValue for details on
how parameters are represented.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidParameterValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameterValue";
  errorInstanceId: string;
  parameters: {
    parameterBaseType: unknown;
    parameterDataType: unknown;
    parameterId: unknown;
    parameterValue: unknown;
  };
}

/**
 * The requested object set is not supported.
 *
 * Log Safety: SAFE
 */
export interface UnsupportedObjectSet {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnsupportedObjectSet";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The requested shared property type is not found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface SharedPropertyTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SharedPropertyTypeNotFound";
  errorInstanceId: string;
  parameters: {
    apiName: unknown;
    rid: unknown;
  };
}

/**
 * Time limits were exceeded for the Query execution.
 *
 * Log Safety: UNSAFE
 */
export interface QueryTimeExceededLimit {
  errorCode: "TIMEOUT";
  errorName: "QueryTimeExceededLimit";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
   * Primary keys consisting of multiple properties are not supported by this API. If you need support for this,
please reach out to Palantir Support.
   *
   * Log Safety: UNSAFE
   */
export interface CompositePrimaryKeyNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CompositePrimaryKeyNotSupported";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    primaryKey: unknown;
  };
}

/**
   * The type of the requested property is not currently supported by this API. If you need support for this,
please reach out to Palantir Support.
   *
   * Log Safety: UNSAFE
   */
export interface PropertyBaseTypeNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertyBaseTypeNotSupported";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    property: unknown;
    propertyBaseType: unknown;
  };
}

/**
 * The authored Query failed to execute because of a runtime error.
 *
 * Log Safety: UNSAFE
 */
export interface QueryRuntimeError {
  errorCode: "INVALID_ARGUMENT";
  errorName: "QueryRuntimeError";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
    message: unknown;
    stacktrace: unknown;
    parameters: unknown;
  };
}

/**
   * Search is not enabled on the specified properties. Please mark the properties as Searchable
in the Ontology Manager to enable search on them. There may be a short delay
between the time a property is marked Searchable and when it can be used.
   *
   * Log Safety: UNSAFE
   */
export interface PropertiesNotSearchable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertiesNotSearchable";
  errorInstanceId: string;
  parameters: {
    propertyApiNames: unknown;
  };
}

/**
   * The requested attachment is not found, or the client token does not have access to it.
Attachments that are not attached to any objects are deleted after two weeks.
Attachments that have not been attached to an object can only be viewed by the user who uploaded them.
Attachments that have been attached to an object can be viewed by users who can view the object.
   *
   * Log Safety: SAFE
   */
export interface AttachmentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AttachmentNotFound";
  errorInstanceId: string;
  parameters: {
    attachmentRid: unknown;
  };
}

/**
 * The given action request has multiple edits on the same object.
 *
 * Log Safety: SAFE
 */
export interface ActionContainsDuplicateEdits {
  errorCode: "CONFLICT";
  errorName: "ActionContainsDuplicateEdits";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The requested object type is not found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ObjectTypeNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    objectTypeRid: unknown;
  };
}

/**
 * The user does not have permission to parent attachments.
 *
 * Log Safety: SAFE
 */
export interface ParentAttachmentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ParentAttachmentPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The provided value for a group id must be a UUID.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidGroupId {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidGroupId";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
   * The requested object type has been changed in the Ontology Manager and changes are currently being applied. Wait a
few seconds and try again.
   *
   * Log Safety: UNSAFE
   */
export interface OntologySyncing {
  errorCode: "CONFLICT";
  errorName: "OntologySyncing";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
  };
}

/**
 * Invalid property type for duration groupBy.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidDurationGroupByPropertyType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDurationGroupByPropertyType";
  errorInstanceId: string;
  parameters: {
    property: unknown;
    objectType: unknown;
    propertyBaseType: unknown;
  };
}

/**
 * The action is not found, or the user does not have access to it.
 *
 * Log Safety: SAFE
 */
export interface ActionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ActionNotFound";
  errorInstanceId: string;
  parameters: {
    actionRid: unknown;
  };
}

/**
 * The parameter object set RID is not found, or the client token does not have access to it.
 *
 * Log Safety: SAFE
 */
export interface ParameterObjectSetRidNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ParameterObjectSetRidNotFound";
  errorInstanceId: string;
  parameters: {
    objectSetRid: unknown;
  };
}

/**
 * Aggregation ordering can only be applied to metrics with exactly one groupBy clause.
 *
 * Log Safety: SAFE
 */
export interface InvalidAggregationOrdering {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidAggregationOrdering";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The object the user is attempting to create already exists.
 *
 * Log Safety: SAFE
 */
export interface ObjectAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "ObjectAlreadyExists";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The requested object set is not found, or the client token does not have access to it.
 *
 * Log Safety: SAFE
 */
export interface ObjectSetNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ObjectSetNotFound";
  errorInstanceId: string;
  parameters: {
    objectSetRid: unknown;
  };
}

/**
 * The link type is not found, or the user does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface LinkTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "LinkTypeNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    linkType: unknown;
  };
}

/**
 * The given query could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceQueryMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceQueryMappingNotFound";
  errorInstanceId: string;
  parameters: {
    queryType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
 * The specified query range filter is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidRangeQuery {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidRangeQuery";
  errorInstanceId: string;
  parameters: {
    lt: unknown;
    gt: unknown;
    lte: unknown;
    gte: unknown;
    field: unknown;
  };
}

/**
 * The parameter object reference or parameter default value is not found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface ActionParameterObjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ActionParameterObjectNotFound";
  errorInstanceId: string;
  parameters: {
    parameterId: unknown;
  };
}

/**
   * The value of the given property is invalid. See the documentation of PropertyValue for details on
how properties are represented.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidPropertyValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyValue";
  errorInstanceId: string;
  parameters: {
    propertyBaseType: unknown;
    property: unknown;
    propertyValue: unknown;
  };
}

/**
   * Results could not be ordered by the requested properties. Please mark the properties as Searchable and
Sortable in the Ontology Manager to enable their use in orderBy parameters. There may be a short delay
between the time a property is set to Searchable and Sortable and when it can be used.
   *
   * Log Safety: UNSAFE
   */
export interface PropertiesNotSortable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertiesNotSortable";
  errorInstanceId: string;
  parameters: {
    properties: unknown;
  };
}

/**
 * An object used by this Action was changed by someone else while the Action was running.
 *
 * Log Safety: SAFE
 */
export interface ObjectChanged {
  errorCode: "CONFLICT";
  errorName: "ObjectChanged";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Log Safety: UNSAFE
 */
export interface FunctionExecutionTimedOut {
  errorCode: "TIMEOUT";
  errorName: "FunctionExecutionTimedOut";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
 * The given options are individually valid but cannot be used in the given combination.
 *
 * Log Safety: SAFE
 */
export interface InvalidApplyActionOptionCombination {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidApplyActionOptionCombination";
  errorInstanceId: string;
  parameters: {
    invalidCombination: unknown;
  };
}

/**
 * The given action could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceActionMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceActionMappingNotFound";
  errorInstanceId: string;
  parameters: {
    actionType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
   * The value of the given field does not match the expected pattern. For example, an Ontology object property id
should be written properties.id.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidFields {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidFields";
  errorInstanceId: string;
  parameters: {
    properties: unknown;
  };
}

/**
   * The value of the given parameter is invalid. See the documentation of DataValue for details on
how parameters are represented.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidQueryParameterValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidQueryParameterValue";
  errorInstanceId: string;
  parameters: {
    parameterDataType: unknown;
    parameterId: unknown;
    parameterValue: unknown;
  };
}

/**
 * The action type is not found, or the user does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface ActionTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ActionTypeNotFound";
  errorInstanceId: string;
  parameters: {
    actionType: unknown;
    rid: unknown;
  };
}

/**
 * The given link could not be mapped to a Marketplace installation.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceLinkMappingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceLinkMappingNotFound";
  errorInstanceId: string;
  parameters: {
    linkType: unknown;
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
   * The requested object type is not synced into the ontology. Please reach out to your Ontology
Administrator to re-index the object type in Ontology Management Application.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectTypeNotSynced {
  errorCode: "CONFLICT";
  errorName: "ObjectTypeNotSynced";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
  };
}

/**
   * The number of edits to the Ontology exceeded the allowed limit.
This may happen because of the request or because the Action is modifying too many objects.
Please change the size of your request or contact the Ontology administrator.
   *
   * Log Safety: UNSAFE
   */
export interface OntologyEditsExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "OntologyEditsExceededLimit";
  errorInstanceId: string;
  parameters: {
    editsCount: unknown;
    editsLimit: unknown;
  };
}

/**
   * The number of groups in the aggregations grouping exceeded the allowed limit. This can typically be fixed by
adjusting your query to reduce the number of groups created by your aggregation. For instance:

If you are using multiple groupBy clauses, try reducing the number of clauses.
If you are using a groupBy clause with a high cardinality property, try filtering the data first
to reduce the number of groups.
   *
   * Log Safety: SAFE
   */
export interface AggregationGroupCountExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "AggregationGroupCountExceededLimit";
  errorInstanceId: string;
  parameters: {
    groupsCount: unknown;
    groupsLimit: unknown;
  };
}

/**
   * The Content-Type cannot be inferred from the request content and filename.
Please check your request content and filename to ensure they are compatible.
   *
   * Log Safety: SAFE
   */
export interface InvalidContentType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidContentType";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The requested properties are not found on the object type.
 *
 * Log Safety: UNSAFE
 */
export interface PropertiesNotFound {
  errorCode: "NOT_FOUND";
  errorName: "PropertiesNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    properties: unknown;
  };
}

/**
 * Log Safety: UNSAFE
 */
export interface FunctionInvalidInput {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FunctionInvalidInput";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
   * The requested sort order of one or more properties is invalid. Valid sort orders are 'asc' or 'desc'. Sort
order can also be omitted, and defaults to 'asc'.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidSortOrder {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidSortOrder";
  errorInstanceId: string;
  parameters: {
    invalidSortOrder: unknown;
  };
}

/**
 * The provided filters cannot be used together.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidPropertyFiltersCombination {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyFiltersCombination";
  errorInstanceId: string;
  parameters: {
    propertyFilters: unknown;
    property: unknown;
  };
}

/**
   * There are more objects, but they cannot be returned by this API. Only 10,000 objects are available through this
API for a given request.
   *
   * Log Safety: SAFE
   */
export interface ObjectsExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ObjectsExceededLimit";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The requested sort order includes duplicate properties.
 *
 * Log Safety: UNSAFE
 */
export interface DuplicateOrderBy {
  errorCode: "INVALID_ARGUMENT";
  errorName: "DuplicateOrderBy";
  errorInstanceId: string;
  parameters: {
    properties: unknown;
  };
}

/**
   * The authored function failed to execute because of a user induced error. The message argument
is meant to be displayed to the user.
   *
   * Log Safety: UNSAFE
   */
export interface FunctionEncounteredUserFacingError {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FunctionEncounteredUserFacingError";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
    message: unknown;
  };
}

/**
 * The provided value for a user id must be a UUID.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidUserId {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidUserId";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * The query is not found, or the user does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface QueryNotFound {
  errorCode: "NOT_FOUND";
  errorName: "QueryNotFound";
  errorInstanceId: string;
  parameters: {
    query: unknown;
  };
}

/**
   * One or more requested object types have been changed in the Ontology Manager and changes are currently being
applied. Wait a few seconds and try again.
   *
   * Log Safety: UNSAFE
   */
export interface OntologySyncingObjectTypes {
  errorCode: "CONFLICT";
  errorName: "OntologySyncingObjectTypes";
  errorInstanceId: string;
  parameters: {
    objectTypes: unknown;
  };
}

/**
 * Aggregation range should include one lt or lte and one gt or gte.
 *
 * Log Safety: SAFE
 */
export interface InvalidAggregationRange {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidAggregationRange";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The parameter object reference or parameter default value is not found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterObjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ParameterObjectNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    primaryKey: unknown;
  };
}

/**
 * Memory limits were exceeded for the Query execution.
 *
 * Log Safety: UNSAFE
 */
export interface QueryMemoryExceededLimit {
  errorCode: "TIMEOUT";
  errorName: "QueryMemoryExceededLimit";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
 * A Content-Length header is required for all uploads, but was missing or invalid.
 *
 * Log Safety: SAFE
 */
export interface InvalidContentLength {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidContentLength";
  errorInstanceId: string;
  parameters: {};
}

/**
   * One of the requested property filters does not support multiple values. Please include only a single value for
it.
   *
   * Log Safety: UNSAFE
   */
export interface MultiplePropertyValuesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MultiplePropertyValuesNotSupported";
  errorInstanceId: string;
  parameters: {
    propertyFilter: unknown;
    property: unknown;
  };
}

/**
 * The user does not have permission to edit this ObjectType.
 *
 * Log Safety: SAFE
 */
export interface EditObjectPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "EditObjectPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Properties used in ordering must have the same ids. Temporary restriction imposed due to OSS limitations.
 *
 * Log Safety: UNSAFE
 */
export interface PropertiesHaveDifferentIds {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertiesHaveDifferentIds";
  errorInstanceId: string;
  parameters: {
    properties: unknown;
  };
}

/**
 * The requested Ontology is not found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyNotFound {
  errorCode: "NOT_FOUND";
  errorName: "OntologyNotFound";
  errorInstanceId: string;
  parameters: {
    ontologyRid: unknown;
    apiName: unknown;
  };
}

/**
 * The given marketplace installation could not be found or the user does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceInstallationNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceInstallationNotFound";
  errorInstanceId: string;
  parameters: {
    artifactRepository: unknown;
    packageName: unknown;
  };
}

/**
 * The given property type is not of the expected type.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidPropertyType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyType";
  errorInstanceId: string;
  parameters: {
    propertyBaseType: unknown;
    property: unknown;
  };
}

/**
 * The parameter references an object type that could not be found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface ActionParameterObjectTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ActionParameterObjectTypeNotFound";
  errorInstanceId: string;
  parameters: {
    parameterId: unknown;
  };
}

/**
   * The provided parameters were not found. Please look at the knownParameters field
to see which ones are available.
   *
   * Log Safety: UNSAFE
   */
export interface UnknownParameter {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnknownParameter";
  errorInstanceId: string;
  parameters: {
    unknownParameters: unknown;
    expectedParameters: unknown;
  };
}

/**
 * Log Safety: UNSAFE
 */
export interface FunctionExecutionFailed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FunctionExecutionFailed";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
 * The given action request performs edits on a type that is read-only or does not allow edits.
 *
 * Log Safety: SAFE
 */
export interface ActionEditsReadOnlyEntity {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ActionEditsReadOnlyEntity";
  errorInstanceId: string;
  parameters: {
    entityTypeRid: unknown;
  };
}

/**
 * The requested sort type of one or more clauses is invalid. Valid sort types are 'p' or 'properties'.
 *
 * Log Safety: SAFE
 */
export interface InvalidSortType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidSortType";
  errorInstanceId: string;
  parameters: {
    invalidSortType: unknown;
  };
}

/**
 * The given Ontology API name is not unique. Use the Ontology RID in place of the Ontology API name.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyApiNameNotUnique {
  errorCode: "INVALID_ARGUMENT";
  errorName: "OntologyApiNameNotUnique";
  errorInstanceId: string;
  parameters: {
    ontologyApiName: unknown;
  };
}

/**
   * The amount of memory used in the request exceeded the limit. The number of groups in the aggregations grouping exceeded the allowed limit. This can typically be fixed by
adjusting your query to reduce the number of groups created by your aggregation. For instance:

If you are using multiple groupBy clauses, try reducing the number of clauses.
If you are using a groupBy clause with a high cardinality property, try filtering the data first
to reduce the number of groups.
   *
   * Log Safety: SAFE
   */
export interface AggregationMemoryExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "AggregationMemoryExceededLimit";
  errorInstanceId: string;
  parameters: {
    memoryUsedBytes: unknown;
    memoryLimitBytes: unknown;
  };
}

/**
   * At least one of the requested property filters are not supported. See the documentation of PropertyFilter for
a list of supported property filters.
   *
   * Log Safety: UNSAFE
   */
export interface PropertyFiltersNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertyFiltersNotSupported";
  errorInstanceId: string;
  parameters: {
    propertyFilters: unknown;
    property: unknown;
  };
}

/**
 * The link the user is attempting to create already exists.
 *
 * Log Safety: SAFE
 */
export interface LinkAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "LinkAlreadyExists";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The provided token does not have permission to view any data sources backing this object type. Ensure the object
type has backing data sources configured and visible.
   *
   * Log Safety: UNSAFE
   */
export interface ViewObjectPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ViewObjectPermissionDenied";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
  };
}

/**
   * The validation failed for the given action parameters. Please use the validateAction endpoint for more
details.
   *
   * Log Safety: UNSAFE
   */
export interface ActionValidationFailed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ActionValidationFailed";
  errorInstanceId: string;
  parameters: {
    actionType: unknown;
  };
}

/**
 * Aggregation cannot group by on the same field multiple times.
 *
 * Log Safety: UNSAFE
 */
export interface MultipleGroupByOnFieldNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MultipleGroupByOnFieldNotSupported";
  errorInstanceId: string;
  parameters: {
    duplicateFields: unknown;
  };
}

/**
 * The linked object with the given primary key is not found, or the user does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedObjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "LinkedObjectNotFound";
  errorInstanceId: string;
  parameters: {
    linkType: unknown;
    linkedObjectType: unknown;
    linkedObjectPrimaryKey: unknown;
  };
}

/**
   * Actions attempted to edit properties that could not be found on the object type.
Please contact the Ontology administrator to resolve this issue.
   *
   * Log Safety: SAFE
   */
export interface ActionEditedPropertiesNotFound {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ActionEditedPropertiesNotFound";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The value of the given property filter is invalid. For instance, 2 is an invalid value for
isNull in properties.address.isNull=2 because the isNull filter expects a value of boolean type.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidPropertyFilterValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyFilterValue";
  errorInstanceId: string;
  parameters: {
    expectedType: unknown;
    propertyFilter: unknown;
    propertyFilterValue: unknown;
    property: unknown;
  };
}

/**
   * The authored Query failed to execute because of a user induced error. The message argument
is meant to be displayed to the user.
   *
   * Log Safety: UNSAFE
   */
export interface QueryEncounteredUserFacingError {
  errorCode: "CONFLICT";
  errorName: "QueryEncounteredUserFacingError";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
    message: unknown;
  };
}

/**
   * One or more of the requested object types are not synced into the ontology. Please reach out to your Ontology
Administrator to re-index the object type(s) in Ontology Management Application.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectTypesNotSynced {
  errorCode: "CONFLICT";
  errorName: "ObjectTypesNotSynced";
  errorInstanceId: string;
  parameters: {
    objectTypes: unknown;
  };
}

/**
 * The requested shared property types are not present on every object type.
 *
 * Log Safety: UNSAFE
 */
export interface SharedPropertiesNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SharedPropertiesNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    missingSharedProperties: unknown;
  };
}

/**
 * The requested interface type is not found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface InterfaceTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "InterfaceTypeNotFound";
  errorInstanceId: string;
  parameters: {
    apiName: unknown;
    rid: unknown;
  };
}

/**
   * The file is too large to be uploaded as an attachment.
The maximum attachment size is 200MB.
   *
   * Log Safety: UNSAFE
   */
export interface AttachmentSizeExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "AttachmentSizeExceededLimit";
  errorInstanceId: string;
  parameters: {
    fileSizeBytes: unknown;
    fileLimitBytes: unknown;
  };
}

/**
 * The requested object is not found, or the client token does not have access to it.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ObjectNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: unknown;
    primaryKey: unknown;
  };
}

/**
   * A property that was required to have an API name, such as a primary key, is missing one. You can set an API
name for it using the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export interface PropertyApiNameNotFound {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertyApiNameNotFound";
  errorInstanceId: string;
  parameters: {
    propertyId: unknown;
    propertyBaseType: unknown;
  };
}

/**
   * The type of the requested parameter is not currently supported by this API. If you need support for this,
please reach out to Palantir Support.
   *
   * Log Safety: UNSAFE
   */
export interface ParameterTypeNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ParameterTypeNotSupported";
  errorInstanceId: string;
  parameters: {
    parameterId: unknown;
    parameterBaseType: unknown;
  };
}

/**
 * Range group by is not supported by property type.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidAggregationRangePropertyType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidAggregationRangePropertyType";
  errorInstanceId: string;
  parameters: {
    property: unknown;
    objectType: unknown;
    propertyBaseType: unknown;
  };
}

/**
   * Required parameters are missing. Please look at the parameters field to see which required parameters are
missing from the request.
   *
   * Log Safety: UNSAFE
   */
export interface MissingParameter {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingParameter";
  errorInstanceId: string;
  parameters: {
    parameters: unknown;
  };
}

/**
 * The provided resource name is already in use by another resource in the same folder.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceNameAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "ResourceNameAlreadyExists";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
    resourceName: unknown;
  };
}

/**
   * This feature is only supported in preview mode. Please use preview=true in the query
parameters to call this endpoint.
   *
   * Log Safety: SAFE
   */
export interface ApiFeaturePreviewUsageOnly {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ApiFeaturePreviewUsageOnly";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The provided page size was zero or negative. Page sizes must be greater than zero.
 *
 * Log Safety: SAFE
 */
export interface InvalidPageSize {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPageSize";
  errorInstanceId: string;
  parameters: {
    pageSize: unknown;
  };
}

/**
 * The requested folder could not be found, or the client token does not have access to it.
 *
 * Log Safety: SAFE
 */
export interface FolderNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FolderNotFound";
  errorInstanceId: string;
  parameters: {
    folderRid: unknown;
  };
}

/**
 * The provided page token could not be used to retrieve the next page of results.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidPageToken {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPageToken";
  errorInstanceId: string;
  parameters: {
    pageToken: unknown;
  };
}

/**
 * An unknown distance unit was provided.
 *
 * Log Safety: UNSAFE
 */
export interface UnknownDistanceUnit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnknownDistanceUnit";
  errorInstanceId: string;
  parameters: {
    unknownUnit: unknown;
    knownUnits: unknown;
  };
}

/**
 * A post body is required for this endpoint, but was not found in the request.
 *
 * Log Safety: SAFE
 */
export interface MissingPostBody {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingPostBody";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given parameters are individually valid but cannot be used in the given combination.
 *
 * Log Safety: SAFE
 */
export interface InvalidParameterCombination {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameterCombination";
  errorInstanceId: string;
  parameters: {
    validCombinations: unknown;
    providedParameters: unknown;
  };
}

/**
 * You are not allowed to use Palantir APIs.
 *
 * Log Safety: SAFE
 */
export interface ApiUsageDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ApiUsageDenied";
  errorInstanceId: string;
  parameters: {};
}
