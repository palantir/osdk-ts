/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeButtonTextTooLongError } from "./ActionTypeButtonTextTooLongError.js";
import type { ActionTypeDefaultStringTooLongError } from "./ActionTypeDefaultStringTooLongError.js";
import type { ActionTypeFailureMessageTooLongError } from "./ActionTypeFailureMessageTooLongError.js";
import type { ActionTypeStaticValueTooLongError } from "./ActionTypeStaticValueTooLongError.js";
import type { ActionTypeSuccessMessageTooLongError } from "./ActionTypeSuccessMessageTooLongError.js";
import type { ActionTypeTooManyLogicRulesError } from "./ActionTypeTooManyLogicRulesError.js";
import type { ActionTypeTooManyParametersError } from "./ActionTypeTooManyParametersError.js";
import type { ActionTypeTooManySectionsError } from "./ActionTypeTooManySectionsError.js";
import type { ActionTypeTooManySubmissionCriteriaError } from "./ActionTypeTooManySubmissionCriteriaError.js";
export interface ActionTypeLimitsError_actionTypeButtonTextError {
  type: "actionTypeButtonTextError";
  actionTypeButtonTextError: ActionTypeButtonTextTooLongError;
}

export interface ActionTypeLimitsError_actionTypeSuccessMessageError {
  type: "actionTypeSuccessMessageError";
  actionTypeSuccessMessageError: ActionTypeSuccessMessageTooLongError;
}

export interface ActionTypeLimitsError_actionTypeTooManyLogicRulesError {
  type: "actionTypeTooManyLogicRulesError";
  actionTypeTooManyLogicRulesError: ActionTypeTooManyLogicRulesError;
}

export interface ActionTypeLimitsError_actionTypeTooManyParametersError {
  type: "actionTypeTooManyParametersError";
  actionTypeTooManyParametersError: ActionTypeTooManyParametersError;
}

export interface ActionTypeLimitsError_actionTypeTooManySectionsError {
  type: "actionTypeTooManySectionsError";
  actionTypeTooManySectionsError: ActionTypeTooManySectionsError;
}

export interface ActionTypeLimitsError_actionTypeTooManySubmissionCriteriaError {
  type: "actionTypeTooManySubmissionCriteriaError";
  actionTypeTooManySubmissionCriteriaError:
    ActionTypeTooManySubmissionCriteriaError;
}

export interface ActionTypeLimitsError_actionTypeFailureMessageError {
  type: "actionTypeFailureMessageError";
  actionTypeFailureMessageError: ActionTypeFailureMessageTooLongError;
}

export interface ActionTypeLimitsError_actionTypeStaticValueError {
  type: "actionTypeStaticValueError";
  actionTypeStaticValueError: ActionTypeStaticValueTooLongError;
}

export interface ActionTypeLimitsError_actionTypeDefaultStringError {
  type: "actionTypeDefaultStringError";
  actionTypeDefaultStringError: ActionTypeDefaultStringTooLongError;
}
export type ActionTypeLimitsError =
  | ActionTypeLimitsError_actionTypeButtonTextError
  | ActionTypeLimitsError_actionTypeSuccessMessageError
  | ActionTypeLimitsError_actionTypeTooManyLogicRulesError
  | ActionTypeLimitsError_actionTypeTooManyParametersError
  | ActionTypeLimitsError_actionTypeTooManySectionsError
  | ActionTypeLimitsError_actionTypeTooManySubmissionCriteriaError
  | ActionTypeLimitsError_actionTypeFailureMessageError
  | ActionTypeLimitsError_actionTypeStaticValueError
  | ActionTypeLimitsError_actionTypeDefaultStringError;
