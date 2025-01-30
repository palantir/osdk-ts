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
import type { FormContent } from "./FormContent.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { ParameterId } from "./ParameterId.js";
import type { PutParameterRequestModification } from "./PutParameterRequestModification.js";
import type { PutSectionRequestModification } from "./PutSectionRequestModification.js";
import type { SectionId } from "./SectionId.js";
import type { TypeGroupRidOrIdInRequest } from "./TypeGroupRidOrIdInRequest.js";
import type { ValidationRuleIdInRequest } from "./ValidationRuleIdInRequest.js";
import type { ValidationRuleModification } from "./ValidationRuleModification.js";

/**
 * A ActionTypeCreate is used to create ActionTypes.
 */
export interface ActionTypeCreate {
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadataModification;
  parameters: Record<ParameterId, PutParameterRequestModification>;
  sections: Record<SectionId, PutSectionRequestModification>;
  parameterOrdering: Array<ParameterId>;
  formContentOrdering: Array<FormContent>;
  logic: ActionLogicModification;
  validations: Record<ValidationRuleIdInRequest, ValidationRuleModification>;
  validationsOrdering: Array<ValidationRuleIdInRequest>;
  webhooks: ActionWebhooksModification | undefined;
  notifications: Array<ActionNotificationModification>;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  status: ActionTypeStatus | undefined;
  actionApplyClientSettings: ActionApplyClientPreferences | undefined;
  notificationSettings: ActionNotificationSettings | undefined;
  revert: ActionRevert | undefined;
  packageRid: OntologyPackageRid | undefined;
  provenance: ActionTypeProvenanceModification | undefined;
  typeGroups: Array<TypeGroupRidOrIdInRequest>;
}
