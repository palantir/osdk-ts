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

import type { ActionApplyClientPreferences } from "./ActionApplyClientPreferences.js";
import type { ActionLogConfiguration } from "./ActionLogConfiguration.js";
import type { ActionLogicModification } from "./ActionLogicModification.js";
import type { ActionNotificationModification } from "./ActionNotificationModification.js";
import type { ActionNotificationSettings } from "./ActionNotificationSettings.js";
import type { ActionRevert } from "./ActionRevert.js";
import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeDisplayMetadataModification } from "./ActionTypeDisplayMetadataModification.js";
import type { ActionTypeProvenanceModification } from "./ActionTypeProvenanceModification.js";
import type { ActionTypeStatus } from "./ActionTypeStatus.js";
import type { ActionWebhooksModification } from "./ActionWebhooksModification.js";
import type { EditParameterRequestModification } from "./EditParameterRequestModification.js";
import type { EditSectionRequestModification } from "./EditSectionRequestModification.js";
import type { FormContent } from "./FormContent.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterRid } from "./ParameterRid.js";
import type { PutParameterRequestModification } from "./PutParameterRequestModification.js";
import type { PutSectionRequestModification } from "./PutSectionRequestModification.js";
import type { SectionId } from "./SectionId.js";
import type { SectionRid } from "./SectionRid.js";
import type { TypeGroupRidOrIdInRequest } from "./TypeGroupRidOrIdInRequest.js";
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
  displayMetadata: ActionTypeDisplayMetadataModification;
  parametersToCreate: Record<ParameterId, PutParameterRequestModification>;
  sectionsToCreate: Record<SectionId, PutSectionRequestModification>;
  parametersToDelete: Array<ParameterRid>;
  sectionsToDelete: Array<SectionRid>;
  parametersToUpdate: Record<ParameterRid, EditParameterRequestModification>;
  sectionsToUpdate: Record<SectionRid, EditSectionRequestModification>;
  parameterOrdering: Array<ParameterId>;
  formContentOrdering: Array<FormContent> | undefined;
  logic: ActionLogicModification;
  validationsToCreate: Record<
    ValidationRuleIdInRequest,
    ValidationRuleModification
  >;
  validationsToDelete: Array<ValidationRuleRid>;
  validationsToUpdate: Record<ValidationRuleRid, ValidationRuleModification>;
  validationsOrdering: Array<ValidationRuleIdentifier>;
  status: ActionTypeStatus | undefined;
  webhooks: ActionWebhooksModification | undefined;
  notifications: Array<ActionNotificationModification>;
  actionApplyClientSettings: ActionApplyClientPreferences | undefined;
  notificationSettings: ActionNotificationSettings | undefined;
  revert: ActionRevert | undefined;
  provenance: ActionTypeProvenanceModification | undefined;
  typeGroups: Array<TypeGroupRidOrIdInRequest>;
}
