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

import type { ActionApplyClientPreferences } from "./ActionApplyClientPreferences.mjs";
import type { ActionLogConfiguration } from "./ActionLogConfiguration.mjs";
import type { ActionNotificationSettings } from "./ActionNotificationSettings.mjs";
import type { ActionTypeApiName } from "./ActionTypeApiName.mjs";
import type { ActionTypeDisplayMetadata } from "./ActionTypeDisplayMetadata.mjs";
import type { ActionTypeEntities } from "./ActionTypeEntities.mjs";
import type { ActionTypeRid } from "./ActionTypeRid.mjs";
import type { ActionTypeStatus } from "./ActionTypeStatus.mjs";
import type { ActionTypeVersion } from "./ActionTypeVersion.mjs";
import type { FormContent } from "./FormContent.mjs";
import type { Parameter } from "./Parameter.mjs";
import type { ParameterId } from "./ParameterId.mjs";
import type { Section } from "./Section.mjs";
import type { SectionId } from "./SectionId.mjs";

export interface ActionTypeMetadata {
  rid: ActionTypeRid;
  apiName: ActionTypeApiName;
  version: ActionTypeVersion;
  displayMetadata: ActionTypeDisplayMetadata;
  parameters: Map<ParameterId, Parameter>;
  sections: Map<SectionId, Section>;
  parameterOrdering: Array<ParameterId>;
  formContentOrdering: Array<FormContent>;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  status: ActionTypeStatus;
  entities: ActionTypeEntities | undefined;
  actionApplyClientSettings: ActionApplyClientPreferences | undefined;
  notificationSettings: ActionNotificationSettings;
}
