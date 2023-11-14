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

import type { PalantirApiError } from "../Errors";

import type {
  ActionError,
  AggregateObjectsError,
  AttachmentsError,
  GetLinkedObjectError,
  GetObjectError,
  ListLinkedObjectsError,
  ListObjectsError,
  LoadObjectSetError,
  QueryError,
  SearchObjectsError,
  TimeSeriesError,
} from "../ApiErrors";
import type { AggregateObjectsErrorHandler } from "./AggregateObjectsErrorHandler";
import type { AttachmentsErrorHandler } from "./AttachmentsErrorHandler";
import type { ExecuteActionErrorHandler } from "./ExecuteActionErrorHandler";
import type { ExecuteQueryErrorHandler } from "./ExecuteQueryErrorHandler";
import type { GetLinkedObjectErrorHandler } from "./GetLinkedObjectErrorHandler";
import type { GetObjectErrorHandler } from "./GetObjectErrorHandler";
import type { ListLinkedObjectsErrorHandler } from "./ListLinkedObjectsErrorHandler";
import type { ListObjectsErrorHandler } from "./ListObjectsErrorHandler";
import type { LoadObjectSetErrorHandler } from "./LoadObjectSetErrorHandler";
import type { SearchObjectsErrorHandler } from "./SearchObjectsErrorHandler";
import type { TimeSeriesErrorHandler } from "./TimeSeriesErrorHandler";

export function handleGetObjectError(
  handler: GetObjectErrorHandler,
  error: PalantirApiError,
  parameters: any,
): GetObjectError {
  switch (error.errorName) {
    case "ObjectTypeNotFound":
      return handler.handleObjectTypeNotFound(error, parameters.objectType);
    case "ObjectTypeNotSynced":
      return handler.handleObjectTypeNotSynced(error, parameters.objectType);
    case "PropertiesNotSortable":
      return handler.handlePropertiesNotSortable(error, parameters.properties);
    case "CompositePrimaryKeyNotSupported":
      return handler.handleCompositePrimaryKeyNotSupported(
        error,
        parameters.objectType,
        parameters.primaryKey,
      );
    case "OntologySyncing":
      return handler.handleOntologySyncing(error, parameters.objectType);
    case "ObjectNotFound":
      return handler.handleObjectNotFound(
        error,
        parameters.objectType,
        parameters.primaryKey,
      );
    case "PropertiesNotFound":
      return handler.handlePropertiesNotFound(
        error,
        parameters.objectType,
        parameters.properties,
      );
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleListObjectsError(
  handler: ListObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): ListObjectsError {
  switch (error.errorName) {
    case "ObjectTypeNotFound":
      return handler.handleObjectTypeNotFound(error, parameters.objectType);
    case "ObjectTypeNotSynced":
      return handler.handleObjectTypeNotSynced(error, parameters.objectType);
    case "ObjectsExceededLimit":
      return handler.handleObjectsExceededLimit(error);
    case "OntologySyncing":
      return handler.handleOntologySyncing(error, parameters.objectType);
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleLoadObjectSetError(
  handler: LoadObjectSetErrorHandler,
  error: PalantirApiError,
  parameters: any,
): LoadObjectSetError {
  switch (error.errorName) {
    case "ObjectTypeNotFound":
      return handler.handleObjectTypeNotFound(error, parameters.objectType);
    case "ObjectTypeNotSynced":
      return handler.handleObjectTypeNotSynced(error, parameters.objectType);
    case "ObjectsExceededLimit":
      return handler.handleObjectsExceededLimit(error);
    case "PropertiesNotSearchable":
      return handler.handlePropertiesNotSearchable(
        error,
        parameters.properties,
      );
    case "PropertyTypesSearchNotSupported":
      return handler.handlePropertyTypesSearchNotSupported(error, parameters);
    case "PropertiesNotFilterable":
      return handler.handlePropertiesNotFilterable(
        error,
        parameters.properties,
      );
    case "MalformedPropertyFilters":
      return handler.handleMalformedPropertyFilters(
        error,
        parameters.malformedPropertyFilter,
      );
    case "InvalidRangeQuery":
      return handler.handleInvalidRangeQuery(
        error,
        parameters.field,
        parameters.lt,
        parameters.gt,
        parameters.lte,
        parameters.gte,
      );
    case "InvalidPropertyValue":
      return handler.handleInvalidPropertyValue(
        error,
        parameters.propertyBaseType,
        parameters.property,
        parameters.propertyValue,
      );
    case "PropertiesNotSortable":
      return handler.handlePropertiesNotSortable(error, parameters.properties);
    case "InvalidSortOrder":
      return handler.handleInvalidSortOrder(error, parameters.invalidSortOrder);
    case "QueryDepthExceededLimit":
      return handler.handleQueryDepthExceededLimit(
        error,
        parameters.depth,
        parameters.depthLimit,
      );
    case "InvalidPropertyFiltersCombination":
      return handler.handleInvalidPropertyFiltersCombination(
        error,
        parameters.propertyFilters,
        parameters.property,
      );
    case "DuplicateOrderBy":
      return handler.handleDuplicateOrderBy(error, parameters.properties);
    case "InvalidSortType":
      return handler.handleInvalidSortType(error, parameters.invalidSortType);
    case "PropertyFiltersNotSupported":
      return handler.handlePropertyFiltersNotSupported(
        error,
        parameters.propertyFilters,
        parameters.property,
      );
    case "InvalidPropertyFilterValue":
      return handler.handleInvalidPropertyFilterValue(
        error,
        parameters.expectedType,
        parameters.propertyFilter,
        parameters.propertyFilterValue,
        parameters.property,
      );
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleGetLinkedObjectError(
  handler: GetLinkedObjectErrorHandler,
  error: PalantirApiError,
  parameters: any,
): GetLinkedObjectError {
  switch (error.errorName) {
    case "ObjectTypeNotFound":
      return handler.handleObjectTypeNotFound(error, parameters.objectType);
    case "ObjectTypeNotSynced":
      return handler.handleObjectTypeNotSynced(error, parameters.objectType);
    case "PropertiesNotSortable":
      return handler.handlePropertiesNotSortable(error, parameters.properties);
    case "CompositePrimaryKeyNotSupported":
      return handler.handleCompositePrimaryKeyNotSupported(
        error,
        parameters.objectType,
        parameters.primaryKey,
      );
    case "OntologySyncing":
      return handler.handleOntologySyncing(error, parameters.objectType);
    case "LinkedObjectNotFound":
      return handler.handleLinkedObjectNotFound(
        error,
        parameters.linkType,
        parameters.linkedObjectType,
        parameters.linkedObjectPrimaryKey,
      );
    case "PropertiesNotFound":
      return handler.handlePropertiesNotFound(
        error,
        parameters.objectType,
        parameters.properties,
      );
    case "ObjectsExceeded":
      return handler.handleObjectsExceeded(error);
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleListLinkedObjectsError(
  handler: ListLinkedObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): ListLinkedObjectsError {
  switch (error.errorName) {
    case "ObjectTypeNotFound":
      return handler.handleObjectTypeNotFound(error, parameters.objectType);
    case "ObjectTypeNotSynced":
      return handler.handleObjectTypeNotSynced(error, parameters.objectType);
    case "ObjectsExceededLimit":
      return handler.handleObjectsExceededLimit(error);
    case "OntologySyncing":
      return handler.handleOntologySyncing(error, parameters.objectType);
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleAggregateObjectsError(
  handler: AggregateObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): AggregateObjectsError {
  switch (error.errorName) {
    case "PropertiesNotSearchable":
      return handler.handlePropertiesNotSearchable(
        error,
        parameters.properties,
      );
    case "PropertyTypesSearchNotSupported":
      return handler.handlePropertyTypesSearchNotSupported(error, parameters);
    case "PropertiesNotFilterable":
      return handler.handlePropertiesNotFilterable(
        error,
        parameters.properties,
      );
    case "InvalidAggregationRangeValue":
      return handler.handleInvalidAggregationRangeValue(
        error,
        parameters.property,
        parameters.objectType,
        parameters.propertyBaseType,
      );
    case "OntologySyncing":
      return handler.handleOntologySyncing(error, parameters.objectType);
    case "InvalidRangeQuery":
      return handler.handleInvalidRangeQuery(
        error,
        parameters.field,
        parameters.lt,
        parameters.gt,
        parameters.lte,
        parameters.gte,
      );
    case "InvalidPropertyValue":
      return handler.handleInvalidPropertyValue(
        error,
        parameters.propertyBaseType,
        parameters.property,
        parameters.propertyValue,
      );
    case "PropertiesNotSortable":
      return handler.handlePropertiesNotSortable(error, parameters.properties);
    case "InvalidFields":
      return handler.handleInvalidFields(error, parameters.field);
    case "AggregationGroupCountExceededLimit":
      return handler.handleAggregationGroupCountExceededLimit(
        error,
        parameters.groupCount,
        parameters.groupCountLimit,
      );
    case "InvalidSortOrder":
      return handler.handleInvalidSortOrder(error, parameters.invalidSortOrder);
    case "QueryDepthExceededLimit":
      return handler.handleQueryDepthExceededLimit(
        error,
        parameters.depth,
        parameters.depthLimit,
      );
    case "InvalidPropertyFiltersCombination":
      return handler.handleInvalidPropertyFiltersCombination(
        error,
        parameters.propertyFilters,
        parameters.property,
      );
    case "DuplicateOrderBy":
      return handler.handleDuplicateOrderBy(error, parameters.properties);
    case "InvalidAggregationRange":
      return handler.handleInvalidAggregationRange(error);
    case "InvalidSortType":
      return handler.handleInvalidSortType(error, parameters.invalidSortType);
    case "PropertyFiltersNotSupported":
      return handler.handlePropertyFiltersNotSupported(
        error,
        parameters.propertyFilters,
        parameters.property,
      );
    case "MultipleGroupByOnFieldNotSupported":
      return handler.handleMultipleGroupByOnFieldNotSupported(
        error,
        parameters.field,
      );
    case "InvalidPropertyFilterValue":
      return handler.handleInvalidPropertyFilterValue(
        error,
        parameters.expectedType,
        parameters.propertyFilter,
        parameters.propertyFilterValue,
        parameters.property,
      );
    case "InvalidAggregationRangePropertyType":
      return handler.handleInvalidAggregationRangePropertyType(
        error,
        parameters.property,
        parameters.objectType,
        parameters.propertyBaseType,
      );
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleSearchObjectsError(
  handler: SearchObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): SearchObjectsError {
  switch (error.errorName) {
    case "PropertiesNotSearchable":
      return handler.handlePropertiesNotSearchable(
        error,
        parameters.properties,
      );
    case "PropertyTypesSearchNotSupported":
      return handler.handlePropertyTypesSearchNotSupported(error, parameters);
    case "PropertiesNotFilterable":
      return handler.handlePropertiesNotFilterable(
        error,
        parameters.properties,
      );
    case "MalformedPropertyFilters":
      return handler.handleMalformedPropertyFilters(
        error,
        parameters.malformedPropertyFilter,
      );
    case "OntologySyncing":
      return handler.handleOntologySyncing(error, parameters.objectType);
    case "InvalidRangeQuery":
      return handler.handleInvalidRangeQuery(
        error,
        parameters.field,
        parameters.lt,
        parameters.gt,
        parameters.lte,
        parameters.gte,
      );
    case "InvalidPropertyValue":
      return handler.handleInvalidPropertyValue(
        error,
        parameters.propertyBaseType,
        parameters.property,
        parameters.propertyValue,
      );
    case "PropertiesNotSortable":
      return handler.handlePropertiesNotSortable(error, parameters.properties);
    case "InvalidSortOrder":
      return handler.handleInvalidSortOrder(error, parameters.invalidSortOrder);
    case "QueryDepthExceededLimit":
      return handler.handleQueryDepthExceededLimit(
        error,
        parameters.depth,
        parameters.depthLimit,
      );
    case "InvalidPropertyFiltersCombination":
      return handler.handleInvalidPropertyFiltersCombination(
        error,
        parameters.propertyFilters,
        parameters.property,
      );
    case "DuplicateOrderBy":
      return handler.handleDuplicateOrderBy(error, parameters.properties);
    case "InvalidSortType":
      return handler.handleInvalidSortType(error, parameters.invalidSortType);
    case "PropertyFiltersNotSupported":
      return handler.handlePropertyFiltersNotSupported(
        error,
        parameters.propertyFilters,
        parameters.property,
      );
    case "InvalidPropertyFilterValue":
      return handler.handleInvalidPropertyFilterValue(
        error,
        parameters.expectedType,
        parameters.propertyFilter,
        parameters.propertyFilterValue,
        parameters.property,
      );
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleExecuteActionError(
  handler: ExecuteActionErrorHandler,
  error: PalantirApiError,
  parameters: any,
): ActionError {
  switch (error.errorName) {
    case "ActionTypeNotFound":
      return handler.handleActionTypeNotFound(error, parameters.actionType);
    case "PropertyApiNameNotFound":
      return handler.handlePropertyApiNameNotFound(
        error,
        parameters.propertyId,
        parameters.propertyBaseType,
      );
    case "ActionParameterObjectTypeNotFound":
      return handler.handleActionParameterObjectTypeNotFound(
        error,
        parameters.parameterId,
      );
    case "InvalidUserId":
      return handler.handleInvalidUserId(error, parameters.userId);
    case "FunctionEncounteredUserFacingError":
      return handler.handleFunctionEncounteredUserFacingError(
        error,
        parameters.functionRid,
        parameters.functionVersion,
        parameters.message,
      );
    case "FunctionInvalidInput":
      return handler.handleFunctionInvalidInput(
        error,
        parameters.functionRid,
        parameters.functionVersion,
      );
    case "PropertiesNotFound":
      return handler.handlePropertiesNotFound(
        error,
        parameters.objectType,
        parameters.properties,
      );
    case "OntologyEditsExceededLimit":
      return handler.handleOntologyEditsExceededLimit(
        error,
        parameters.editsCount,
        parameters.editsLimit,
      );
    case "ActionNotFound":
      return handler.handleActionNotFound(error, parameters.actionRid);
    case "InvalidGroupId":
      return handler.handleInvalidGroupId(error, parameters.groupId);
    case "ActionParameterObjectNotFound":
      return handler.handleActionParameterObjectNotFound(
        error,
        parameters.parameterId,
      );
    case "FunctionExecutionTimedOut":
      return handler.handleFunctionExecutionTimedOut(
        error,
        parameters.functionRid,
        parameters.functionVersion,
      );
    case "PropertyBaseTypeNotSupported":
      return handler.handlePropertyBaseTypeNotSupported(
        error,
        parameters.object,
        parameters.property,
        parameters.propertyBaseType,
      );
    case "ApplyActionFailed":
      return handler.handleApplyActionFailed(error);
    case "ParametersNotFound":
      return handler.handleParametersNotFound(
        error,
        parameters.actionType,
        parameters.unknownParameterIds,
        parameters.configuredParameterIds,
      );
    case "ParameterObjectNotFound":
      return handler.handleParameterObjectNotFound(
        error,
        parameters.objectType,
        parameters.primaryKey,
      );
    case "UnknownParameter":
      return handler.handleUnknownParameter(
        error,
        parameters.unknownParameters,
        parameters.expectedParameters,
      );
    case "ActionValidationFailed":
      return handler.handleActionValidationFailed(error, parameters.actionType);
    case "ActionEditedPropertiesNotFound":
      return handler.handleActionEditedPropertiesNotFound(error);
    case "MissingParameter":
      return handler.handleMissingParameter(error, parameters.parameters);
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleAttachmentsError(
  handler: AttachmentsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): AttachmentsError {
  switch (error.errorName) {
    case "AttachmentSizeExceededLimit":
      return handler.handleAttachmentSizeExceededLimit(
        error,
        parameters.fileSizeBytes,
        parameters.fileLimitBytes,
      );
    case "InvalidContentLength":
      return handler.handleInvalidContentLength(error);
    case "InvalidContentType":
      return handler.handleInvalidContentType(error);
    case "AttachmentNotFound":
      return handler.handleAttachmentNotFound(error, parameters.attachmentRid);
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleExecuteQueryError(
  handler: ExecuteQueryErrorHandler,
  error: PalantirApiError,
  parameters: any,
): QueryError {
  switch (error.errorName) {
    case "ParameterObjectSetRidNotFound":
      return handler.handleParameterObjectSetRidNotFound(
        error,
        parameters.parameterSetRid,
      );
    case "PropertyBaseTypeNotSupported":
      return handler.handlePropertyBaseTypeNotSupported(
        error,
        parameters.objectType,
        parameters.property,
        parameters.propertyBaseType,
      );
    case "QueryTimeExceededLimit":
      return handler.handleQueryTimeExceededLimit(
        error,
        parameters.functionRid,
        parameters.functionVersion,
      );
    case "InvalidParameterValue":
      return handler.handleInvalidParameterValue(error, parameters.parameterId);
    case "QueryNotFound":
      return handler.handleQueryNotFound(error, parameters.queryId);
    case "ParameterObjectNotFound":
      return handler.handleParameterObjectNotFound(
        error,
        parameters.objectType,
        parameters.primaryKey,
      );
    case "QueryMemoryExceededLimit":
      return handler.handleQueryMemoryExceededLimit(
        error,
        parameters.functionRid,
        parameters.functionVersion,
      );
    case "QueryEncounteredUserFacingError":
      return handler.handleQueryEncounteredUserFacingError(
        error,
        parameters.queryRid,
        parameters.queryVersion,
        parameters.message,
      );
    case "ParameterTypeNotSupported":
      return handler.handleParameterTypeNotSupported(
        error,
        parameters.parameterId,
        parameters.parameterBaseType,
      );
    case "MissingParameter":
      return handler.handleMissingParameter(error, parameters.parameters);
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error);
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error);
  }
}

export function handleTimeSeriesError(
  handler: TimeSeriesErrorHandler,
  error: PalantirApiError,
  parameters: any,
): TimeSeriesError {
  switch (error.errorName) {
    case "PermissionDenied":
      return handler.handlePermissionDenied(error);
    case "Unauthorized":
      return handler.handleUnauthorized(error);
    case "UnknownError":
      return handler.handleUnknownError(error) as TimeSeriesError;
    default:
      const _: never = error.errorName as never;
      return handler.handleUnknownError(error) as TimeSeriesError;
  }
}
