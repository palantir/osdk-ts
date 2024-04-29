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
import type { FormContent } from "./FormContent.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { ParameterId } from "./ParameterId.js";
import type { PutParameterRequest } from "./PutParameterRequest.js";
import type { PutSectionRequest } from "./PutSectionRequest.js";
import type { SectionId } from "./SectionId.js";
import type { ValidationRuleIdInRequest } from "./ValidationRuleIdInRequest.js";
import type { ValidationRuleModification } from "./ValidationRuleModification.js";

/**
 * A ActionTypeCreate is used to create ActionTypes.
 */
export interface ActionTypeCreate {
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadata;
  parameters: Record<ParameterId, PutParameterRequest>;
  sections: Record<SectionId, PutSectionRequest>;
  parameterOrdering: Array<ParameterId>;
  formContentOrdering: Array<FormContent>;
  logic: ActionLogic;
  validations: Record<ValidationRuleIdInRequest, ValidationRuleModification>;
  validationsOrdering: Array<ValidationRuleIdInRequest>;
  webhooks: ActionWebhooks | undefined;
  notifications: Array<ActionNotification>;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  status: ActionTypeStatus | undefined;
  actionApplyClientSettings: ActionApplyClientPreferences | undefined;
  notificationSettings: ActionNotificationSettings | undefined;
  revert: ActionRevert | undefined;
  packageRid: OntologyPackageRid | undefined;
}
