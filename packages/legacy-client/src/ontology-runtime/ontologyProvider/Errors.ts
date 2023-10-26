/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

// FIXME: This valuetype is not as strict as the old one
import type { ValueType } from "@osdk/gateway/types";

export interface FoundryApiError extends Error {
  errorName: string;
  errorType: string;
  errorInstanceId?: string;
  statusCode?: number;
}

export class FoundryApiError extends Error implements FoundryApiError {
  errorName: string;
  errorType: string;
  errorInstanceId?: string;
  statusCode?: number;

  constructor(
    errorName: string,
    errorType: string,
    statusCode: number,
    errorInstanceId?: string,
  ) {
    super();
    this.errorName = errorName;
    this.errorType = errorType;
    this.errorInstanceId = errorInstanceId;
    this.statusCode = statusCode;
  }
}

export type CommonApiError =
  | PermissionDenied
  | Unauthorized
  | UnknownError;
export type OntologiesError = OntologyNotFound | CommonApiError;
export type GetObjectError =
  | ObjectTypeNotFound
  | ObjectTypeNotSynced
  | PropertiesNotSortable
  | CompositePrimaryKeyNotSupported
  | OntologySyncing
  | ObjectNotFound
  | PropertiesNotFound
  | CommonApiError;
export type ListObjectsError =
  | ObjectsExceededLimit
  | ObjectTypeNotFound
  | ObjectTypeNotSynced
  | OntologySyncing
  | CommonApiError;
export type LoadObjectSetError =
  | ObjectsExceededLimit
  | ObjectTypeNotFound
  | ObjectTypeNotSynced
  | PropertiesNotSearchable
  | PropertyTypesSearchNotSupported
  | PropertiesNotFilterable
  | MalformedPropertyFilters
  | OntologySyncing
  | InvalidRangeQuery
  | InvalidPropertyValue
  | PropertiesNotSortable
  | InvalidSortOrder
  | QueryDepthExceededLimit
  | InvalidPropertyFiltersCombination
  | DuplicateOrderBy
  | InvalidSortType
  | PropertyFiltersNotSupported
  | InvalidPropertyFilterValue
  | CommonApiError;
export type GetLinkedObjectError =
  | ObjectTypeNotFound
  | ObjectTypeNotSynced
  | PropertiesNotSortable
  | CompositePrimaryKeyNotSupported
  | OntologySyncing
  | LinkedObjectNotFound
  | PropertiesNotFound
  | CommonApiError;
export type ListLinkedObjectsError =
  | ObjectsExceededLimit
  | ObjectTypeNotFound
  | ObjectTypeNotSynced
  | OntologySyncing
  | CommonApiError;
export type AttachmentsError =
  | AttachmentSizeExceededLimit
  | InvalidContentLength
  | InvalidContentType
  | AttachmentNotFound
  | CommonApiError;
/**
 * @deprecated Use {@link LoadObjectSetError} instead.
 */
export type SearchObjectsError =
  | LoadObjectSetError
  | PropertiesNotSearchable
  | PropertyTypesSearchNotSupported
  | PropertiesNotFilterable
  | MalformedPropertyFilters
  | OntologySyncing
  | InvalidRangeQuery
  | InvalidPropertyValue
  | PropertiesNotSortable
  | InvalidSortOrder
  | QueryDepthExceededLimit
  | InvalidPropertyFiltersCombination
  | DuplicateOrderBy
  | InvalidSortType
  | PropertyFiltersNotSupported
  | InvalidPropertyFilterValue
  | CommonApiError;
export type AggregateObjectsError =
  | PropertiesNotSearchable
  | PropertyTypesSearchNotSupported
  | PropertiesNotFilterable
  | InvalidAggregationRangeValue
  | OntologySyncing
  | InvalidRangeQuery
  | InvalidPropertyValue
  | PropertiesNotSortable
  | InvalidFields
  | AggregationGroupCountExceededLimit
  | InvalidSortOrder
  | QueryDepthExceededLimit
  | InvalidPropertyFiltersCombination
  | DuplicateOrderBy
  | InvalidAggregationRange
  | InvalidSortType
  | PropertyFiltersNotSupported
  | MultipleGroupByOnFieldNotSupported
  | InvalidPropertyFilterValue
  | InvalidAggregationRangePropertyType
  | CommonApiError;
export type QueryError =
  | ParameterObjectSetRidNotFound
  | PropertyBaseTypeNotSupported
  | QueryTimeExceededLimit
  | InvalidParameterValue
  | QueryNotFound
  | ParameterObjectNotFound
  | QueryMemoryExceededLimit
  | QueryEncounteredUserFacingError
  | ParameterTypeNotSupported
  | MissingParameter
  | CommonApiError;
export type ActionError =
  | ActionTypeNotFound
  | PropertyApiNameNotFound
  | ActionParameterObjectTypeNotFound
  | InvalidUserId
  | FunctionEncounteredUserFacingError
  | FunctionInvalidInput
  | PropertiesNotFound
  | OntologyEditsExceededLimit
  | ActionNotFound
  | InvalidGroupId
  | ActionParameterObjectNotFound
  | FunctionExecutionTimedOut
  | PropertyBaseTypeNotSupported
  | ApplyActionFailed
  | ParametersNotFound
  | ParameterObjectNotFound
  | UnknownParameter
  | ActionEditedPropertiesNotFound
  | MissingParameter
  | ActionValidationFailed
  | CommonApiError;
export type TimeSeriesError = CommonApiError;
export interface PermissionDenied extends FoundryApiError {
  errorType: "PERMISSION_DENIED";
  errorName: "PermissionDenied";
}
export interface Unauthorized extends FoundryApiError {
  errorType: "UNAUTHORIZED";
  errorName: "Unauthorized";
}
export interface UnknownError extends Error {
  errorType: "UNKNOWN";
  errorName: "UnknownError";
  originalError: any;
}
export interface InvalidAggregationRangeValue extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidAggregationRangeValue";
  property: string;
  objectType: string;
  propertyBaseType: ValueType;
}
export interface MalformedPropertyFilters extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "MalformedPropertyFilters";
  malformedPropertyFilter: string;
}
export interface PropertiesNotFilterable extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "PropertiesNotFilterable";
  properties: string[];
}
export interface ParametersNotFound extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "ParametersNotFound";
  actionType: string;
  unknownParameterIds: string[];
  configuredParameterIds: string[];
}
export interface ApplyActionFailed extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "ApplyActionFailed";
}
export interface PropertyTypesSearchNotSupported extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "PropertyTypesSearchNotSupported";
  parameters: {
    [key: string]: string;
  };
}
export interface InvalidParameterValue extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidParameterValue";
  parameterBaseType?: ValueType;
  parameterDataType?: object;
  parameterId: string;
  parameterValue?: any;
}
export interface QueryTimeExceededLimit extends FoundryApiError {
  errorType: "TIMEOUT";
  errorName: "QueryTimeExceededLimit";
  functionRid: string;
  functionVersion: string;
}
export interface CompositePrimaryKeyNotSupported extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "CompositePrimaryKeyNotSupported";
  objectType: string;
  primaryKey: string[];
}
export interface PropertyBaseTypeNotSupported extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "PropertyBaseTypeNotSupported";
  objectType: string;
  property: string;
  propertyBaseType: ValueType;
}
export interface PropertiesNotSearchable extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "PropertiesNotSearchable";
  propertyApiNames: string[];
}
export interface AttachmentNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "AttachmentNotFound";
  attachmentRid: string;
}
export interface ObjectTypeNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ObjectTypeNotFound";
  objectType: string;
}
export interface InvalidGroupId extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidGroupId";
  groupId: string;
}
export interface OntologySyncing extends FoundryApiError {
  errorType: "CONFLICT";
  errorName: "OntologySyncing";
  objectType: string;
}
export interface ActionNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ActionNotFound";
  actionRid: string;
}
export interface ParameterObjectSetRidNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ParameterObjectSetRidNotFound";
  objectSetRid: string;
}
export interface LinkTypeNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "LinkTypeNotFound";
  objectType: string;
  linkType: string;
}
export interface InvalidRangeQuery extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidRangeQuery";
  lt?: any;
  gt?: any;
  lte?: any;
  gte?: any;
  field: string;
}
export interface ActionParameterObjectNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ActionParameterObjectNotFound";
  parameterId: string;
}
export interface InvalidPropertyValue extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyValue";
  propertyBaseType: ValueType;
  property: string;
  propertyValue: string;
}
export interface PropertiesNotSortable extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "PropertiesNotSortable";
  properties: string[];
}
export interface FunctionExecutionTimedOut extends FoundryApiError {
  errorType: "TIMEOUT";
  errorName: "FunctionExecutionTimedOut";
  functionRid: string;
  functionVersion: string;
}
export interface InvalidFields extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidFields";
  properties: string[];
}
export interface ActionTypeNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ActionTypeNotFound";
  actionType: string;
}
export interface ObjectTypeNotSynced extends FoundryApiError {
  errorType: "CONFLICT";
  errorName: "ObjectTypeNotSynced";
  objectType: string;
}
export interface OntologyEditsExceededLimit extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "OntologyEditsExceededLimit";
  editsCount: number;
  editsLimit: number;
}
export interface AggregationGroupCountExceededLimit extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "AggregationGroupCountExceededLimit";
  groupsCount: number;
  groupsLimit: number;
}
export interface InvalidContentType extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidContentType";
}
export interface PropertiesNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "PropertiesNotFound";
  objectType: string;
  properties: string[];
}
export interface FunctionInvalidInput extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "FunctionInvalidInput";
  functionRid: string;
  functionVersion: string;
}
export interface InvalidSortOrder extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidSortOrder";
  invalidSortOrder: string;
}
export interface QueryDepthExceededLimit extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "QueryDepthExceededLimit";
  depth: number;
  depthLimit: number;
}
export interface InvalidPropertyFiltersCombination extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyFiltersCombination";
  propertyFilters: string[];
  property: string;
}
export interface ObjectsExceededLimit extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "ObjectsExceededLimit";
}
export interface DuplicateOrderBy extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "DuplicateOrderBy";
  properties: string[];
}
export interface FunctionEncounteredUserFacingError extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "FunctionEncounteredUserFacingError";
  functionRid: string;
  functionVersion: string;
  message: string;
}
export interface InvalidUserId extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidUserId";
  userId: string;
}
export interface QueryNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "QueryNotFound";
  query: string;
}
export interface InvalidAggregationRange extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidAggregationRange";
}
export interface ParameterObjectNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ParameterObjectNotFound";
  objectType: string;
  primaryKey: {
    [key: string]: string;
  };
}
export interface QueryMemoryExceededLimit extends FoundryApiError {
  errorType: "TIMEOUT";
  errorName: "QueryMemoryExceededLimit";
  functionRid: string;
  functionVersion: string;
}
export interface InvalidContentLength extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidContentLength";
}
export interface OntologyNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "OntologyNotFound";
  ontologyRid?: string;
  apiName?: string;
}
export interface ActionParameterObjectTypeNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ActionParameterObjectTypeNotFound";
  parameterId: string;
}
export interface UnknownParameter extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "UnknownParameter";
  unknownParameters: string[];
  expectedParameters: string[];
}
export interface InvalidSortType extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidSortType";
  invalidSortType: string;
}
export interface PropertyFiltersNotSupported extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "PropertyFiltersNotSupported";
  propertyFilters: string[];
  property: string;
}
export interface ActionValidationFailed extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "ActionValidationFailed";
  actionType: string;
}
export interface MultipleGroupByOnFieldNotSupported extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "MultipleGroupByOnFieldNotSupported";
  duplicateFields: string[];
}
export interface LinkedObjectNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "LinkedObjectNotFound";
  linkType: string;
  linkedObjectType: string;
  linkedObjectPrimaryKey: {
    [key: string]: string;
  };
}
export interface ActionEditedPropertiesNotFound extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "ActionEditedPropertiesNotFound";
}
export interface InvalidPropertyFilterValue extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyFilterValue";
  expectedType: ValueType;
  propertyFilter: string;
  propertyFilterValue: string;
  property: string;
}
export interface QueryEncounteredUserFacingError extends FoundryApiError {
  errorType: "CONFLICT";
  errorName: "QueryEncounteredUserFacingError";
  functionRid: string;
  functionVersion: string;
  message: string;
}
export interface AttachmentSizeExceededLimit extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "AttachmentSizeExceededLimit";
  fileSizeBytes: string;
  fileLimitBytes: string;
}
export interface ObjectNotFound extends FoundryApiError {
  errorType: "NOT_FOUND";
  errorName: "ObjectNotFound";
  objectType: string;
  primaryKey: {
    [key: string]: string;
  };
}
export interface PropertyApiNameNotFound extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "PropertyApiNameNotFound";
  propertyId: string;
  propertyBaseType: ValueType;
}
export interface ParameterTypeNotSupported extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "ParameterTypeNotSupported";
  parameterId: string;
  parameterBaseType: ValueType;
}
export interface InvalidAggregationRangePropertyType extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "InvalidAggregationRangePropertyType";
  property: string;
  objectType: string;
  propertyBaseType: ValueType;
}
export interface MissingParameter extends FoundryApiError {
  errorType: "INVALID_ARGUMENT";
  errorName: "MissingParameter";
  parameters: string[];
}
