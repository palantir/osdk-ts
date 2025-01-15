/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeDoesNotHaveActionTypeLevelValidationError } from "./ActionTypeDoesNotHaveActionTypeLevelValidationError.js";
import type { ActionTypesAlreadyExistError } from "./ActionTypesAlreadyExistError.js";
import type { ActionTypesNotFoundError } from "./ActionTypesNotFoundError.js";
import type { DeletingAndEditingTheSameActionTypeError } from "./DeletingAndEditingTheSameActionTypeError.js";
import type { InlineActionTypeCannotBeReferencedByMultipleObjectTypesError } from "./InlineActionTypeCannotBeReferencedByMultipleObjectTypesError.js";
import type { NonExistentParametersUsedInParameterPrefillError } from "./NonExistentParametersUsedInParameterPrefillError.js";
import type { ParametersDoNotMatchParameterOrderingError } from "./ParametersDoNotMatchParameterOrderingError.js";
import type { ParameterValidationNotFoundError } from "./ParameterValidationNotFoundError.js";
import type { ParameterValidationReferencesLaterParametersError } from "./ParameterValidationReferencesLaterParametersError.js";
import type { VersionedActionTypesNotFoundError } from "./VersionedActionTypesNotFoundError.js";
export interface ActionTypeError_versionedActionTypesNotFound {
  type: "versionedActionTypesNotFound";
  versionedActionTypesNotFound: VersionedActionTypesNotFoundError;
}

export interface ActionTypeError_actionTypesNotFound {
  type: "actionTypesNotFound";
  actionTypesNotFound: ActionTypesNotFoundError;
}

export interface ActionTypeError_actionTypesAlreadyExist {
  type: "actionTypesAlreadyExist";
  actionTypesAlreadyExist: ActionTypesAlreadyExistError;
}

export interface ActionTypeError_inlineActionTypeCannotBeReferencedByMultipleObjectTypes {
  type: "inlineActionTypeCannotBeReferencedByMultipleObjectTypes";
  inlineActionTypeCannotBeReferencedByMultipleObjectTypes:
    InlineActionTypeCannotBeReferencedByMultipleObjectTypesError;
}

export interface ActionTypeError_actionTypeDoesNotHaveActionTypeLevelValidation {
  type: "actionTypeDoesNotHaveActionTypeLevelValidation";
  actionTypeDoesNotHaveActionTypeLevelValidation:
    ActionTypeDoesNotHaveActionTypeLevelValidationError;
}

export interface ActionTypeError_parameterValidationNotFound {
  type: "parameterValidationNotFound";
  parameterValidationNotFound: ParameterValidationNotFoundError;
}

export interface ActionTypeError_parameterValidationReferencesLaterParameters {
  type: "parameterValidationReferencesLaterParameters";
  parameterValidationReferencesLaterParameters:
    ParameterValidationReferencesLaterParametersError;
}

export interface ActionTypeError_parametersDoNotMatchParameterOrdering {
  type: "parametersDoNotMatchParameterOrdering";
  parametersDoNotMatchParameterOrdering:
    ParametersDoNotMatchParameterOrderingError;
}

export interface ActionTypeError_nonExistentParametersUsedInParameterPrefill {
  type: "nonExistentParametersUsedInParameterPrefill";
  nonExistentParametersUsedInParameterPrefill:
    NonExistentParametersUsedInParameterPrefillError;
}

export interface ActionTypeError_deletingAndEditingTheSameActionType {
  type: "deletingAndEditingTheSameActionType";
  deletingAndEditingTheSameActionType: DeletingAndEditingTheSameActionTypeError;
}
export type ActionTypeError =
  | ActionTypeError_versionedActionTypesNotFound
  | ActionTypeError_actionTypesNotFound
  | ActionTypeError_actionTypesAlreadyExist
  | ActionTypeError_inlineActionTypeCannotBeReferencedByMultipleObjectTypes
  | ActionTypeError_actionTypeDoesNotHaveActionTypeLevelValidation
  | ActionTypeError_parameterValidationNotFound
  | ActionTypeError_parameterValidationReferencesLaterParameters
  | ActionTypeError_parametersDoNotMatchParameterOrdering
  | ActionTypeError_nonExistentParametersUsedInParameterPrefill
  | ActionTypeError_deletingAndEditingTheSameActionType;
