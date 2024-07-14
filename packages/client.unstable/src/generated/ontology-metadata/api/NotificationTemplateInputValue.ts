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

import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { UserValue } from "./UserValue.js";
export interface NotificationTemplateInputValue_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValue;
}

export interface NotificationTemplateInputValue_recipientValue {
  type: "recipientValue";
  recipientValue: UserValue;
}

export interface NotificationTemplateInputValue_actionTriggererValue {
  type: "actionTriggererValue";
  actionTriggererValue: UserValue;
}
/**
 * All the types that can be used as a value for a Notification template's inputs.
 */
export type NotificationTemplateInputValue =
  | NotificationTemplateInputValue_logicRuleValue
  | NotificationTemplateInputValue_recipientValue
  | NotificationTemplateInputValue_actionTriggererValue;
