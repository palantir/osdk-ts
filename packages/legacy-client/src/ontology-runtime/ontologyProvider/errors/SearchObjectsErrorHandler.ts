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
import type { PalantirApiError } from "../../../Errors";
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
  PermissionDenied,
  PropertiesNotFilterable,
  PropertiesNotSearchable,
  PropertiesNotSortable,
  PropertyFiltersNotSupported,
  PropertyTypesSearchNotSupported,
  QueryDepthExceededLimit,
  Unauthorized,
  UnknownError,
} from "../Errors";
export class SearchObjectsErrorHandler {
  handlePropertiesNotSearchable(
    error: PalantirApiError,
    properties: string[],
  ): PropertiesNotSearchable {
    throw new Error("not implemented");
  }

  handlePropertyTypesSearchNotSupported(
    error: PalantirApiError,
    parameters: any,
  ): PropertyTypesSearchNotSupported {
    throw new Error("not implemented");
  }

  handlePropertiesNotFilterable(
    errror: PalantirApiError,
    properties: string[],
  ): PropertiesNotFilterable {
    throw new Error("not implemented");
  }

  handleMalformedPropertyFilters(
    error: PalantirApiError,
    malformedPropertyFilter: string,
  ): MalformedPropertyFilters {
    throw new Error("not implemented");
  }

  handleOntologySyncing(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): OntologySyncing {
    throw new Error("not implemented");
  }

  handleInvalidRangeQuery(
    error: PalantirApiError,
    field: string,
    lt?: any,
    gt?: any,
    lte?: any,
    gte?: any,
  ): InvalidRangeQuery {
    throw new Error("not implemented");
  }

  handleInvalidPropertyValue(
    error: PalantirApiError,
    propertyBaseType: ValueType,
    property: string,
    propertyValue: string,
  ): InvalidPropertyValue {
    throw new Error("not implemented");
  }

  handlePropertiesNotSortable(
    error: PalantirApiError,
    properties: string[],
  ): PropertiesNotSortable {
    throw new Error("not implemented");
  }

  handleInvalidSortOrder(
    error: PalantirApiError,
    invalidSortOrder: string,
  ): InvalidSortOrder {
    throw new Error("not implemented");
  }

  handleQueryDepthExceededLimit(
    error: PalantirApiError,
    depth: number,
    depthLimit: number,
  ): QueryDepthExceededLimit {
    throw new Error("not implemented");
  }

  handleInvalidPropertyFiltersCombination(
    error: PalantirApiError,
    propertyFilters: string[],
    property: string,
  ): InvalidPropertyFiltersCombination {
    throw new Error("not implemented");
  }

  handleDuplicateOrderBy(
    error: PalantirApiError,
    properties: string[],
  ): DuplicateOrderBy {
    throw new Error("not implemented");
  }

  handleInvalidSortType(
    error: PalantirApiError,
    invalidSortType: string,
  ): InvalidSortType {
    throw new Error("not implemented");
  }

  handlePropertyFiltersNotSupported(
    error: PalantirApiError,
    propertyFilters: string[],
    property: string,
  ): PropertyFiltersNotSupported {
    throw new Error("not implemented");
  }

  handleInvalidPropertyFilterValue(
    error: PalantirApiError,
    expectedType: ValueType,
    propertyFilter: string,
    propertyFilterValue: string,
    property: string,
  ): InvalidPropertyFilterValue {
    throw new Error("not implemented");
  }

  handleUnauthorized(error: PalantirApiError): Unauthorized {
    throw new Error("not implemented");
  }

  handlePermissionDenied(error: PalantirApiError): PermissionDenied {
    throw new Error("not implemented");
  }

  handleUnknownError(error: PalantirApiError): UnknownError {
    throw new Error("not implemented");
  }
}
