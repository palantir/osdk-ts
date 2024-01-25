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

import type { ValueType } from "@osdk/gateway/types";
import type {
  DuplicateOrderBy,
  InvalidPropertyFiltersCombination,
  InvalidPropertyFilterValue,
  InvalidPropertyValue,
  InvalidRangeQuery,
  InvalidSortOrder,
  InvalidSortType,
  MalformedPropertyFilters,
  OntologySyncing,
  PropertiesNotFilterable,
  PropertiesNotSearchable,
  PropertiesNotSortable,
  PropertyFiltersNotSupported,
  PropertyTypesSearchNotSupported,
  QueryDepthExceededLimit,
} from "../ApiErrors.js";
import type { PalantirApiError } from "../Errors.js";
import { DefaultErrorHandler } from "./DefaultErrorHandler.js";
export class SearchObjectsErrorHandler extends DefaultErrorHandler {
  handlePropertiesNotSearchable(
    error: PalantirApiError,
    properties: string[],
  ): PropertiesNotSearchable {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertiesNotSearchable",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      propertyApiNames: properties,
    };
  }

  handlePropertyTypesSearchNotSupported(
    error: PalantirApiError,
    parameters: any,
  ): PropertyTypesSearchNotSupported {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertyTypesSearchNotSupported",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      parameters,
    };
  }

  handlePropertiesNotFilterable(
    error: PalantirApiError,
    properties: string[],
  ): PropertiesNotFilterable {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertiesNotFilterable",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      properties,
    };
  }

  handleMalformedPropertyFilters(
    error: PalantirApiError,
    malformedPropertyFilter: string,
  ): MalformedPropertyFilters {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "MalformedPropertyFilters",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      malformedPropertyFilter,
    };
  }

  handleOntologySyncing(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): OntologySyncing {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "OntologySyncing",
      errorType: "CONFLICT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
    };
  }

  handleInvalidRangeQuery(
    error: PalantirApiError,
    field: string,
    lt?: any,
    gt?: any,
    lte?: any,
    gte?: any,
  ): InvalidRangeQuery {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidRangeQuery",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      field,
      lt,
      gt,
      lte,
      gte,
    };
  }

  handleInvalidPropertyValue(
    error: PalantirApiError,
    propertyBaseType: ValueType,
    property: string,
    propertyValue: string,
  ): InvalidPropertyValue {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidPropertyValue",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      propertyBaseType,
      property,
      propertyValue,
    };
  }

  handlePropertiesNotSortable(
    error: PalantirApiError,
    properties: string[],
  ): PropertiesNotSortable {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertiesNotSortable",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      properties,
    };
  }

  handleInvalidSortOrder(
    error: PalantirApiError,
    invalidSortOrder: string,
  ): InvalidSortOrder {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidSortOrder",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      invalidSortOrder,
    };
  }

  handleQueryDepthExceededLimit(
    error: PalantirApiError,
    depth: number,
    depthLimit: number,
  ): QueryDepthExceededLimit {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "QueryDepthExceededLimit",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      depth,
      depthLimit,
    };
  }

  handleInvalidPropertyFiltersCombination(
    error: PalantirApiError,
    propertyFilters: string[],
    property: string,
  ): InvalidPropertyFiltersCombination {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidPropertyFiltersCombination",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      propertyFilters,
      property,
    };
  }

  handleDuplicateOrderBy(
    error: PalantirApiError,
    properties: string[],
  ): DuplicateOrderBy {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "DuplicateOrderBy",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      properties,
    };
  }

  handleInvalidSortType(
    error: PalantirApiError,
    invalidSortType: string,
  ): InvalidSortType {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidSortType",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      invalidSortType,
    };
  }

  handlePropertyFiltersNotSupported(
    error: PalantirApiError,
    propertyFilters: string[],
    property: string,
  ): PropertyFiltersNotSupported {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertyFiltersNotSupported",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      propertyFilters,
      property,
    };
  }

  handleInvalidPropertyFilterValue(
    error: PalantirApiError,
    expectedType: ValueType,
    propertyFilter: string,
    propertyFilterValue: string,
    property: string,
  ): InvalidPropertyFilterValue {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidPropertyFilterValue",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      expectedType,
      property,
      propertyFilter,
      propertyFilterValue,
    };
  }
}
