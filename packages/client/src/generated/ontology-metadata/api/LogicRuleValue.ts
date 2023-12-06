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

import type { CurrentTime } from "./CurrentTime.js";
import type { CurrentUser } from "./CurrentUser.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { StaticValue } from "./StaticValue.js";
import type { UniqueIdentifier } from "./UniqueIdentifier.js";
import type { WebhookOutputParamName } from "./WebhookOutputParamName.js";
export interface LogicRuleValue_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface LogicRuleValue_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface LogicRuleValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface LogicRuleValue_currentUser {
  type: "currentUser";
  currentUser: CurrentUser;
}

export interface LogicRuleValue_currentTime {
  type: "currentTime";
  currentTime: CurrentTime;
}

export interface LogicRuleValue_uniqueIdentifier {
  type: "uniqueIdentifier";
  uniqueIdentifier: UniqueIdentifier;
}

export interface LogicRuleValue_synchronousWebhookOutput {
  type: "synchronousWebhookOutput";
  synchronousWebhookOutput: WebhookOutputParamName;
}
/**
 * These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
 * effects.
 */
export type LogicRuleValue =
  | LogicRuleValue_parameterId
  | LogicRuleValue_staticValue
  | LogicRuleValue_objectParameterPropertyValue
  | LogicRuleValue_currentUser
  | LogicRuleValue_currentTime
  | LogicRuleValue_uniqueIdentifier
  | LogicRuleValue_synchronousWebhookOutput;
