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

import type { ActionApplyClientPreferences } from "../ActionApplyClientPreferences.mjs";
import type { ActionLogConfiguration } from "../ActionLogConfiguration.mjs";
import type { ActionLogic } from "../ActionLogic.mjs";
import type { ActionNotification } from "../ActionNotification.mjs";
import type { ActionNotificationSettings } from "../ActionNotificationSettings.mjs";
import type { ActionRevert } from "../ActionRevert.mjs";
import type { ActionTypeApiName } from "../ActionTypeApiName.mjs";
import type { ActionTypeDisplayMetadata } from "../ActionTypeDisplayMetadata.mjs";
import type { ActionTypeStatus } from "../ActionTypeStatus.mjs";
import type { ActionWebhooks } from "../ActionWebhooks.mjs";
import type { EditParameterRequest } from "../EditParameterRequest.mjs";
import type { EditSectionRequest } from "../EditSectionRequest.mjs";
import type { FormContent } from "../FormContent.mjs";
import type { ParameterId } from "../ParameterId.mjs";
import type { ParameterRid } from "../ParameterRid.mjs";
import type { SectionRid } from "../SectionRid.mjs";
import type { ValidationRuleModification } from "../ValidationRuleModification.mjs";
import type { ValidationRuleRid } from "../ValidationRuleRid.mjs";
import type { PutParameterRequestWithId } from "./PutParameterRequestWithId.mjs";
import type { PutSectionRequestWithId } from "./PutSectionRequestWithId.mjs";
import type { ValidationRuleModificationWithIdInRequest } from "./ValidationRuleModificationWithIdInRequest.mjs";

export interface ActionTypeModification {
  apiName: ActionTypeApiName;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  actionApplyClientSettings: ActionApplyClientPreferences | undefined;
  displayMetadata: ActionTypeDisplayMetadata;
  parametersToCreate: Map<ParameterRid, PutParameterRequestWithId>;
  sectionsToCreate: Map<SectionRid, PutSectionRequestWithId>;
  parametersToDelete: Array<ParameterRid>;
  sectionsToDelete: Array<SectionRid>;
  parametersToUpdate: Map<ParameterRid, EditParameterRequest>;
  sectionsToUpdate: Map<SectionRid, EditSectionRequest>;
  parameterOrdering: Array<ParameterId>;
  formContentOrdering: Array<FormContent> | undefined;
  logic: ActionLogic;
  validationsToCreate: Map<
    ValidationRuleRid,
    ValidationRuleModificationWithIdInRequest
  >;
  validationsToDelete: Array<ValidationRuleRid>;
  validationsToUpdate: Map<ValidationRuleRid, ValidationRuleModification>;
  validationsOrdering: Array<ValidationRuleRid>;
  revert: ActionRevert | undefined;
  status: ActionTypeStatus | undefined;
  webhooks: ActionWebhooks | undefined;
  notifications: Array<ActionNotification>;
  notificationSettings: ActionNotificationSettings | undefined;
}
