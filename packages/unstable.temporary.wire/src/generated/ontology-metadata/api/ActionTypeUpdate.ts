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

import type { ActionApplyClientPreferences } from "./ActionApplyClientPreferences.js";
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
import type { EditSectionRequest } from "./EditSectionRequest.js";
import type { FormContent } from "./FormContent.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterRid } from "./ParameterRid.js";
import type { PutParameterRequest } from "./PutParameterRequest.js";
import type { PutSectionRequest } from "./PutSectionRequest.js";
import type { SectionId } from "./SectionId.js";
import type { SectionRid } from "./SectionRid.js";
import type { ValidationRuleIdentifier } from "./ValidationRuleIdentifier.js";
import type { ValidationRuleIdInRequest } from "./ValidationRuleIdInRequest.js";
import type { ValidationRuleModification } from "./ValidationRuleModification.js";
import type { ValidationRuleRid } from "./ValidationRuleRid.js";

/**
 * Request object to edit existing Action Types.
 */
export interface ActionTypeUpdate {
  apiName: ActionTypeApiName;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  displayMetadata: ActionTypeDisplayMetadata;
  parametersToCreate: Record<ParameterId, PutParameterRequest>;
  sectionsToCreate: Record<SectionId, PutSectionRequest>;
  parametersToDelete: Array<ParameterRid>;
  sectionsToDelete: Array<SectionRid>;
  parametersToUpdate: Record<ParameterRid, EditParameterRequest>;
  sectionsToUpdate: Record<SectionRid, EditSectionRequest>;
  parameterOrdering: Array<ParameterId>;
  formContentOrdering: Array<FormContent> | undefined;
  logic: ActionLogic;
  validationsToCreate: Record<
    ValidationRuleIdInRequest,
    ValidationRuleModification
  >;
  validationsToDelete: Array<ValidationRuleRid>;
  validationsToUpdate: Record<ValidationRuleRid, ValidationRuleModification>;
  validationsOrdering: Array<ValidationRuleIdentifier>;
  status: ActionTypeStatus | undefined;
  webhooks: ActionWebhooks | undefined;
  notifications: Array<ActionNotification>;
  actionApplyClientSettings: ActionApplyClientPreferences | undefined;
  notificationSettings: ActionNotificationSettings | undefined;
  revert: ActionRevert | undefined;
}
