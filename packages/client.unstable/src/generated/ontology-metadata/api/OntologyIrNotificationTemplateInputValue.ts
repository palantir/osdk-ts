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

import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { UserValue } from "./UserValue.js";
export interface OntologyIrNotificationTemplateInputValue_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: OntologyIrLogicRuleValue;
}

export interface OntologyIrNotificationTemplateInputValue_recipientValue {
  type: "recipientValue";
  recipientValue: UserValue;
}

export interface OntologyIrNotificationTemplateInputValue_actionTriggererValue {
  type: "actionTriggererValue";
  actionTriggererValue: UserValue;
}
/**
 * All the types that can be used as a value for a Notification template's inputs.
 */
export type OntologyIrNotificationTemplateInputValue =
  | OntologyIrNotificationTemplateInputValue_logicRuleValue
  | OntologyIrNotificationTemplateInputValue_recipientValue
  | OntologyIrNotificationTemplateInputValue_actionTriggererValue;
