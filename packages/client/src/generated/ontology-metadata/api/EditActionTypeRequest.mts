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

import type { ActionLogConfiguration } from "./ActionLogConfiguration.mjs";
import type { ActionLogic } from "./ActionLogic.mjs";
import type { ActionNotification } from "./ActionNotification.mjs";
import type { ActionNotificationSettings } from "./ActionNotificationSettings.mjs";
import type { ActionRevert } from "./ActionRevert.mjs";
import type { ActionTypeApiName } from "./ActionTypeApiName.mjs";
import type { ActionTypeDisplayMetadata } from "./ActionTypeDisplayMetadata.mjs";
import type { ActionTypeStatus } from "./ActionTypeStatus.mjs";
import type { ActionWebhooks } from "./ActionWebhooks.mjs";
import type { EditParameterRequest } from "./EditParameterRequest.mjs";
import type { EditValidationRuleRequest } from "./EditValidationRuleRequest.mjs";
import type { ParameterId } from "./ParameterId.mjs";
import type { ParameterRid } from "./ParameterRid.mjs";
import type { PutParameterRequest } from "./PutParameterRequest.mjs";
import type { ValidationRule } from "./ValidationRule.mjs";
import type { ValidationRuleRid } from "./ValidationRuleRid.mjs";

export interface EditActionTypeRequest {
  apiName: ActionTypeApiName;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  revert: ActionRevert | undefined;
  displayMetadata: ActionTypeDisplayMetadata;
  parametersToAdd: Map<ParameterId, PutParameterRequest>;
  parametersToDelete: Array<ParameterRid>;
  parametersToEdit: Map<ParameterRid, EditParameterRequest>;
  parameterOrdering: Array<ParameterId>;
  logic: ActionLogic;
  validationsToAdd: Array<ValidationRule>;
  validationsToDelete: Array<ValidationRuleRid>;
  validationsToEdit: Map<ValidationRuleRid, EditValidationRuleRequest>;
  status: ActionTypeStatus | undefined;
  webhooks: ActionWebhooks | undefined;
  notifications: Array<ActionNotification>;
  notificationSettings: ActionNotificationSettings | undefined;
}
