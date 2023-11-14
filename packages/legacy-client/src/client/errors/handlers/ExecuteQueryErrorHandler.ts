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
  InvalidParameterValue,
  MissingParameter,
  ParameterObjectNotFound,
  ParameterObjectSetRidNotFound,
  ParameterTypeNotSupported,
  PropertyBaseTypeNotSupported,
  QueryEncounteredUserFacingError,
  QueryMemoryExceededLimit,
  QueryNotFound,
  QueryTimeExceededLimit,
} from "../ApiErrors";
import type { PalantirApiError } from "../Errors";
import { DefaultErrorHandler } from "./DefaultErrorHandler";

export class ExecuteQueryErrorHandler extends DefaultErrorHandler {
  handleParameterObjectSetRidNotFound(
    error: PalantirApiError,
    objectSetRid: string,
  ): ParameterObjectSetRidNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ParameterObjectSetRidNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectSetRid,
    };
  }

  handlePropertyBaseTypeNotSupported(
    error: PalantirApiError,
    objectType: string,
    property: string,
    propertyBaseType: ValueType,
  ): PropertyBaseTypeNotSupported {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertyBaseTypeNotSupported",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType,
      property,
      propertyBaseType,
    };
  }

  handleQueryTimeExceededLimit(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): QueryTimeExceededLimit {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "QueryTimeExceededLimit",
      errorType: "TIMEOUT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      functionRid,
      functionVersion,
    };
  }

  handleInvalidParameterValue(
    error: PalantirApiError,
    parameterId: string,
    parameterBaseType?: ValueType,
    parameterDataType?: object,
    parameterValue?: any,
  ): InvalidParameterValue {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidParameterValue",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      parameterId,
      parameterBaseType,
      parameterDataType,
      parameterValue,
    };
  }

  handleQueryNotFound(error: PalantirApiError, query: string): QueryNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "QueryNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      query,
    };
  }

  handleParameterObjectNotFound(
    error: PalantirApiError,
    objectType: string,
    primaryKey: {
      [key: string]: string;
    },
  ): ParameterObjectNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ParameterObjectNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      objectType,
      primaryKey,
    };
  }

  handleQueryMemoryExceededLimit(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): QueryMemoryExceededLimit {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "QueryMemoryExceededLimit",
      errorType: "TIMEOUT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      functionRid,
      functionVersion,
    };
  }

  handleQueryEncounteredUserFacingError(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
    message: string,
  ): QueryEncounteredUserFacingError {
    return {
      name: error.errorName,
      errorName: "QueryEncounteredUserFacingError",
      errorType: "CONFLICT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      functionRid,
      functionVersion,
      message,
    };
  }

  handleParameterTypeNotSupported(
    error: PalantirApiError,
    parameterId: string,
    parameterBaseType: ValueType,
  ): ParameterTypeNotSupported {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ParameterTypeNotSupported",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      parameterId,
      parameterBaseType,
    };
  }

  handleMissingParameter(
    error: PalantirApiError,
    parameters: string[],
  ): MissingParameter {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "MissingParameter",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      parameters,
    };
  }
}
