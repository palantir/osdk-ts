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
  PermissionDenied,
  PropertiesNotFound,
  PropertyApiNameNotFound,
  PropertyBaseTypeNotSupported,
  Unauthorized,
  UnknownError,
  UnknownParameter,
} from "../Errors";

export class ExecuteActionErrorHandler {
  handleActionValidationFailed(
    error: PalantirApiError,
    actionType: string,
  ): ActionValidationFailed {
    throw new Error("not implemented");
  }

  handleActionTypeNotFound(
    error: PalantirApiError,
    actionType: string,
  ): ActionTypeNotFound {
    throw new Error("not implemented");
  }

  handlePropertyApiNameNotFound(
    error: PalantirApiError,
    propertyId: string,
    propertyBaseType: ValueType,
  ): PropertyApiNameNotFound {
    throw new Error("not implemented");
  }

  handleActionParameterObjectTypeNotFound(
    error: PalantirApiError,
    parameterId: string,
  ): ActionParameterObjectTypeNotFound {
    throw new Error("not implemented");
  }

  handleInvalidUserId(error: PalantirApiError, userId: string): InvalidUserId {
    throw new Error("not implemented");
  }

  handleFunctionEncounteredUserFacingError(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
    message: string,
  ): FunctionEncounteredUserFacingError {
    throw new Error("not implemented");
  }

  handleFunctionInvalidInput(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): FunctionInvalidInput {
    throw new Error("not implemented");
  }

  handlePropertiesNotFound(
    error: PalantirApiError,
    objectType: string,
    properties: string[],
  ): PropertiesNotFound {
    throw new Error("not implemented");
  }

  handleOntologyEditsExceededLimit(
    error: PalantirApiError,
    editsCount: number,
    editsLimit: number,
  ): OntologyEditsExceededLimit {
    throw new Error("not implemented");
  }

  handleActionNotFound(
    error: PalantirApiError,
    actionRid: string,
  ): ActionNotFound {
    throw new Error("not implemented");
  }

  handleInvalidGroupId(
    error: PalantirApiError,
    groupId: string,
  ): InvalidGroupId {
    throw new Error("not implemented");
  }

  handleActionParameterObjectNotFound(
    error: PalantirApiError,
    parameterId: string,
  ): ActionParameterObjectNotFound {
    throw new Error("not implemented");
  }

  handleFunctionExecutionTimedOut(
    error: PalantirApiError,
    functionRid: string,
    functionVersion: string,
  ): FunctionExecutionTimedOut {
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

  handleApplyActionFailed(error: PalantirApiError): ApplyActionFailed {
    throw new Error("not implemented");
  }

  handleParametersNotFound(
    error: PalantirApiError,
    actionType: string,
    unknownParameterIds: string[],
    configuredParameterIds: string[],
  ): ParametersNotFound {
    throw new Error("not implemented");
  }

  handleParameterObjectNotFound(
    error: PalantirApiError,
    objectType: string,
    primaryKey: any,
  ): ParameterObjectNotFound {
    throw new Error("not implemented");
  }

  handleUnknownParameter(
    error: PalantirApiError,
    unknownParameters: string[],
    expectedParameters: string[],
  ): UnknownParameter {
    throw new Error("not implemented");
  }

  handleActionEditedPropertiesNotFound(
    error: PalantirApiError,
  ): ActionEditedPropertiesNotFound {
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
