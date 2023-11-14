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

import type {
  CompositePrimaryKeyNotSupported,
  ObjectNotFound,
  ObjectTypeNotFound,
  ObjectTypeNotSynced,
  OntologySyncing,
  PropertiesNotFound,
  PropertiesNotSortable,
} from "../ApiErrors";
import type { PalantirApiError } from "../Errors";
import { DefaultErrorHandler } from "./DefaultErrorHandler";

export class GetObjectErrorHandler extends DefaultErrorHandler {
  handleObjectTypeNotFound(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): ObjectTypeNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ObjectTypeNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
    };
  }

  handleObjectTypeNotSynced(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): ObjectTypeNotSynced {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ObjectTypeNotSynced",
      errorType: "CONFLICT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
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

  handleCompositePrimaryKeyNotSupported(
    error: PalantirApiError,
    objectTypeApiName: string,
    primaryKey: string[],
  ): CompositePrimaryKeyNotSupported {
    return {
      name: error.errorName,
      message: error.message,
      errorType: "INVALID_ARGUMENT",
      errorName: "CompositePrimaryKeyNotSupported",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
      primaryKey,
    };
  }

  handleOntologySyncing(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): OntologySyncing {
    return {
      name: error.errorName,
      message: error.message,
      errorType: "CONFLICT",
      errorName: "OntologySyncing",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
    };
  }

  handleObjectNotFound(
    error: PalantirApiError,
    objectTypeApiName: string,
    primaryKey: any,
  ): ObjectNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ObjectNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      primaryKey,
      objectType: objectTypeApiName,
    };
  }

  handlePropertiesNotFound(
    error: PalantirApiError,
    objectType: string,
    properties: any,
  ): PropertiesNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertiesNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType,
      properties,
    };
  }
}
