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

import type {
  ActionTypeApiName,
  DisplayMetadataConfigurationDefaultLayout,
  DisplayMetadataConfigurationDisplayAndFormat,
  OntologyIrActionTypeEntities,
  OntologyIrFormContent,
  OntologyIrLogicRule,
  OntologyIrValidationRule,
  SectionId,
} from "@osdk/client.unstable";
import type { RequiredFields } from "../../util/RequiredFields.js";
import type { BlueprintIcon } from "../common/BlueprintIcons.js";
import type { OntologyEntityBase } from "../common/OntologyEntityBase.js";
import type { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type { TypeClass } from "../common/TypeClass.js";
import type { ActionParameter } from "./ActionParameter.js";
import type { ActionSection } from "./ActionSection.js";
import type { ActionStatus } from "./ActionStatus.js";
import type { SubmissionMetadata } from "./SubmissionMetadata.js";

interface ActionTypeInner {
  apiName: ActionTypeApiName;
  displayName: string;
  description: string;
  icon: { locator: BlueprintIcon; color: string };
  parameters: Array<ActionParameter>;
  rules: Array<OntologyIrLogicRule>;
  sections: Record<SectionId, ActionSection>;
  status: ActionStatus;
  entities: OntologyIrActionTypeEntities;
  parameterOrdering: Array<string>;
  formContentOrdering: Array<OntologyIrFormContent>;
  validation: Array<OntologyIrValidationRule>;
  typeClasses: Array<TypeClass>;
  defaultFormat: DisplayMetadataConfigurationDefaultLayout;
  enableLayoutSwitch: boolean;
  displayAndFormat: DisplayMetadataConfigurationDisplayAndFormat;
  submissionMetadata: SubmissionMetadata;
}

export type ActionType =
  & OntologyEntityBase
  & RequiredFields<
    Partial<ActionTypeInner>,
    "apiName" | "displayName" | "rules" | "status"
  >
  & {
    __type: OntologyEntityTypeEnum.ACTION_TYPE;
  };
