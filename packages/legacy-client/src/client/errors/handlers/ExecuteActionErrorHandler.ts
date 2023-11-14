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
  ActionEditedPropertiesNotFound,
  ActionNotFound,
  ActionParameterObjectNotFound,
  ActionParameterObjectTypeNotFound,
  ActionTypeNotFound,
  ActionValidationFailed,
  ApplyActionFailed,
  FunctionEncounteredUserFacingError,
  FunctionExecutionTimedOut,
  FunctionInvalidInput,
  InvalidGroupId,
  InvalidUserId,
  MissingParameter,
  OntologyEditsExceededLimit,
  ParameterObjectNotFound,
  ParametersNotFound,
  PropertiesNotFound,
  PropertyApiNameNotFound,
  PropertyBaseTypeNotSupported,
  UnknownParameter,
} from "../ApiErrors";
import type { PalantirApiError } from "../Errors";
import { DefaultErrorHandler } from "./DefaultErrorHandler";

export class ExecuteActionErrorHandler extends DefaultErrorHandler {
  handleActionValidationFailed(
    error: PalantirApiError,
    actionType: string,
  ): ActionValidationFailed {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ActionValidationFailed",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      actionType,
    };
  }

  handleActionTypeNotFound(
    error: PalantirApiError,
    actionType: string,
  ): ActionTypeNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ActionTypeNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      actionType,
    };
  }

  handlePropertyApiNameNotFound(
    error: PalantirApiError,
    propertyId: string,
    propertyBaseType: ValueType,
  ): PropertyApiNameNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "PropertyApiNameNotFound",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      propertyId,
      propertyBaseType,
    };
  }

  handleActionParameterObjectTypeNotFound(
    error: PalantirApiError,
    parameterId: string,
  ): ActionParameterObjectTypeNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ActionParameterObjectTypeNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      parameterId,
    };
  }

  handleInvalidUserId(error: PalantirApiError, userId: string): InvalidUserId {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidUserId",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      userId,
    };
  }

  handleFunctionEncounteredUserFacingError(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
    message: string,
  ): FunctionEncounteredUserFacingError {
    return {
      name: error.errorName,
      message,
      errorName: "FunctionEncounteredUserFacingError",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      functionRid,
      functionVersion,
    };
  }

  handleFunctionInvalidInput(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): FunctionInvalidInput {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "FunctionInvalidInput",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      functionRid,
      functionVersion,
    };
  }

  handlePropertiesNotFound(
    error: PalantirApiError,
    objectType: string,
    properties: string[],
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

  handleOntologyEditsExceededLimit(
    error: PalantirApiError,
    editsCount: number,
    editsLimit: number,
  ): OntologyEditsExceededLimit {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "OntologyEditsExceededLimit",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      editsCount,
      editsLimit,
    };
  }

  handleActionNotFound(
    error: PalantirApiError,
    actionRid: string,
  ): ActionNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ActionNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      actionRid,
    };
  }

  handleInvalidGroupId(
    error: PalantirApiError,
    groupId: string,
  ): InvalidGroupId {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidGroupId",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      groupId,
    };
  }

  handleActionParameterObjectNotFound(
    error: PalantirApiError,
    parameterId: string,
  ): ActionParameterObjectNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ActionParameterObjectNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      parameterId,
    };
  }

  handleFunctionExecutionTimedOut(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): FunctionExecutionTimedOut {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "FunctionExecutionTimedOut",
      errorType: "TIMEOUT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      functionRid,
      functionVersion,
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

  handleApplyActionFailed(error: PalantirApiError): ApplyActionFailed {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ApplyActionFailed",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
    };
  }

  handleParametersNotFound(
    error: PalantirApiError,
    actionType: string,
    unknownParameterIds: string[],
    configuredParameterIds: string[],
  ): ParametersNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ParametersNotFound",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      actionType,
      unknownParameterIds,
      configuredParameterIds,
    };
  }

  handleParameterObjectNotFound(
    error: PalantirApiError,
    objectType: string,
    primaryKey: any,
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

  handleUnknownParameter(
    error: PalantirApiError,
    unknownParameters: string[],
    expectedParameters: string[],
  ): UnknownParameter {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "UnknownParameter",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      unknownParameters,
      expectedParameters,
    };
  }

  handleActionEditedPropertiesNotFound(
    error: PalantirApiError,
  ): ActionEditedPropertiesNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "ActionEditedPropertiesNotFound",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
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
