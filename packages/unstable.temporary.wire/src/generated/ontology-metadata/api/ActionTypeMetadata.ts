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
import type { ActionNotificationSettings } from "./ActionNotificationSettings.js";
import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeDisplayMetadata } from "./ActionTypeDisplayMetadata.js";
import type { ActionTypeEntities } from "./ActionTypeEntities.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { ActionTypeStatus } from "./ActionTypeStatus.js";
import type { ActionTypeVersion } from "./ActionTypeVersion.js";
import type { FormContent } from "./FormContent.js";
import type { Parameter } from "./Parameter.js";
import type { ParameterId } from "./ParameterId.js";
import type { Section } from "./Section.js";
import type { SectionId } from "./SectionId.js";

/**
 * An ActionType defines the schema of the edits that can be made to Phonograph.
 */
export interface ActionTypeMetadata {
  rid: ActionTypeRid;
  apiName: ActionTypeApiName;
  version: ActionTypeVersion;
  displayMetadata: ActionTypeDisplayMetadata;
  parameters: Record<ParameterId, Parameter>;
  sections: Record<SectionId, Section>;
  parameterOrdering: Array<ParameterId>;
  formContentOrdering: Array<FormContent>;
  actionLogConfiguration: ActionLogConfiguration | undefined;
  status: ActionTypeStatus;
  entities: ActionTypeEntities | undefined;
  actionApplyClientSettings: ActionApplyClientPreferences | undefined;
  notificationSettings: ActionNotificationSettings;
}
