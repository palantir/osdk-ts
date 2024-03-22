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
  LinkedObjectNotFound,
  ObjectsExceededLimit,
  ObjectTypeNotFound,
  ObjectTypeNotSynced,
  OntologySyncing,
  PropertiesNotFound,
  PropertiesNotSortable,
} from "../ApiErrors.js";
import type { PalantirApiError } from "../Errors.js";
import { DefaultErrorHandler } from "./DefaultErrorHandler.js";

export class GetLinkedObjectErrorHandler extends DefaultErrorHandler {
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
      name: error.errorName!,
      message: error.message,
      errorName: "ObjectTypeNotSynced",
      errorType: "CONFLICT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
    };
  }

  handleCompositePrimaryKeyNotSupported(
    error: PalantirApiError,
    objectTypeApiName: string,
    primaryKey: string[],
  ): CompositePrimaryKeyNotSupported {
    return {
      name: error.errorName!,
      message: error.message,
      errorName: "CompositePrimaryKeyNotSupported",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
      primaryKey,
    };
  }

  handlePropertiesNotSortable(
    error: PalantirApiError,
    properties: string[],
  ): PropertiesNotSortable {
    return {
      name: error.errorName!,
      message: error.message,
      errorName: "PropertiesNotSortable",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      properties,
    };
  }

  handleOntologySyncing(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): OntologySyncing {
    return {
      name: error.errorName!,
      message: error.message,
      errorName: "OntologySyncing",
      errorType: "CONFLICT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType: objectTypeApiName,
    };
  }

  handleLinkedObjectNotFound(
    error: PalantirApiError,
    linkType: string,
    linkedObjectType: string,
    linkedObjectPrimaryKey: {
      [key: string]: string;
    },
  ): LinkedObjectNotFound {
    return {
      name: error.errorName!,
      message: error.message,
      errorName: "LinkedObjectNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      linkType,
      linkedObjectType,
      linkedObjectPrimaryKey,
    };
  }

  handlePropertiesNotFound(
    error: PalantirApiError,
    objectType: string,
    properties: any,
  ): PropertiesNotFound {
    return {
      name: error.errorName!,
      message: error.message,
      errorName: "PropertiesNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType,
      properties,
    };
  }

  handleObjectsExceeded(error: PalantirApiError): ObjectsExceededLimit {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ObjectsExceededLimit",
      errorType: "INVALID_ARGUMENT",
    };
  }
}
