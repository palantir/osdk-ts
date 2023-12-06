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

import type { ActionLogConfiguration } from "./ActionLogConfiguration.js";
import type { ActionLogic } from "./ActionLogic.js";
import type { ActionNotification } from "./ActionNotification.js";
import type { ActionNotificationSettings } from "./ActionNotificationSettings.js";
import type { ActionRevert } from "./ActionRevert.js";
import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeDisplayMetadata } from "./ActionTypeDisplayMetadata.js";
import type { ActionTypeStatus } from "./ActionTypeStatus.js";
import type { ActionWebhooks } from "./ActionWebhooks.js";
import type { EditParameterRequest } from "./EditParameterRequest.js";
import type { EditValidationRuleRequest } from "./EditValidationRuleRequest.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterRid } from "./ParameterRid.js";
import type { PutParameterRequest } from "./PutParameterRequest.js";
import type { ValidationRule } from "./ValidationRule.js";
import type { ValidationRuleRid } from "./ValidationRuleRid.js";

/**
 * Request object to edit existing Action Types.
 */
export interface EditActionTypeRequest {
  apiName: ActionTypeApiName;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  revert: ActionRevert | undefined;
  displayMetadata: ActionTypeDisplayMetadata;
  parametersToAdd: Record<ParameterId, PutParameterRequest>;
  parametersToDelete: Array<ParameterRid>;
  parametersToEdit: Record<ParameterRid, EditParameterRequest>;
  parameterOrdering: Array<ParameterId>;
  logic: ActionLogic;
  validationsToAdd: Array<ValidationRule>;
  validationsToDelete: Array<ValidationRuleRid>;
  validationsToEdit: Record<ValidationRuleRid, EditValidationRuleRequest>;
  status: ActionTypeStatus | undefined;
  webhooks: ActionWebhooks | undefined;
  notifications: Array<ActionNotification>;
  notificationSettings: ActionNotificationSettings | undefined;
}
