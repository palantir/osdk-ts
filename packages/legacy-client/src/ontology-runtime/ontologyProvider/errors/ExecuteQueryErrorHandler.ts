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
  InvalidParameterValue,
  MissingParameter,
  ParameterObjectNotFound,
  ParameterObjectSetRidNotFound,
  ParameterTypeNotSupported,
  PermissionDenied,
  PropertyBaseTypeNotSupported,
  QueryEncounteredUserFacingError,
  QueryMemoryExceededLimit,
  QueryNotFound,
  QueryTimeExceededLimit,
  Unauthorized,
  UnknownError,
} from "../Errors";
export class ExecuteQueryErrorHandler {
  handleParameterObjectSetRidNotFound(
    error: PalantirApiError,
    objectSetRid: string,
  ): ParameterObjectSetRidNotFound {
    throw new Error("not implemented");
  }

  handlePropertyBaseTypeNotSupported(
    error: PalantirApiError,
    objectType: string,
    property: string,
    propertyBaseType: ValueType,
  ): PropertyBaseTypeNotSupported {
    throw new Error("not implemented");
  }

  handleQueryTimeExceededLimit(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): QueryTimeExceededLimit {
    throw new Error("not implemented");
  }

  handleInvalidParameterValue(
    error: PalantirApiError,
    parameterId: string,
    parameterBaseType?: ValueType,
    parameterDataType?: object,
    parameterValue?: any,
  ): InvalidParameterValue {
    throw new Error("not implemented");
  }

  handleQueryNotFound(error: PalantirApiError, query: string): QueryNotFound {
    throw new Error("not implemented");
  }

  handleParameterObjectNotFound(
    error: PalantirApiError,
    objectType: string,
    primaryKey: {
      [key: string]: string;
    },
  ): ParameterObjectNotFound {
    throw new Error("not implemented");
  }

  handleQueryMemoryExceededLimit(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): QueryMemoryExceededLimit {
    throw new Error("not implemented");
  }

  handleQueryEncounteredUserFacingError(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
    message: string,
  ): QueryEncounteredUserFacingError {
    throw new Error("not implemented");
  }

  handleParameterTypeNotSupported(
    error: PalantirApiError,
    parameterId: string,
    parameterBaseType: ValueType,
  ): ParameterTypeNotSupported {
    throw new Error("not implemented");
  }

  handleMissingParameter(
    error: PalantirApiError,
    parameters: string[],
  ): MissingParameter {
    throw new Error("not implemented");
  }

  handlePermissionDenied(error: PalantirApiError): PermissionDenied {
    throw new Error("not implemented");
  }

  handleUnauthorized(error: PalantirApiError): Unauthorized {
    throw new Error("not implemented");
  }

  handleUnknownError(error: PalantirApiError): UnknownError {
    throw new Error("not implemented");
  }
}
