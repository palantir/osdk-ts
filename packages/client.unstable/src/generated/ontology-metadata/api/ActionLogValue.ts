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

import type { ActionTypeRichTextComponent } from "./ActionTypeRichTextComponent.js";
import type { Empty } from "./Empty.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ParameterId } from "./ParameterId.js";
export interface ActionLogValue_parameterValue {
  type: "parameterValue";
  parameterValue: ParameterId;
}

export interface ActionLogValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ActionLogValue_editedObjects {
  type: "editedObjects";
  editedObjects: ObjectTypeId;
}

export interface ActionLogValue_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: Empty;
}

export interface ActionLogValue_actionRid {
  type: "actionRid";
  actionRid: Empty;
}

export interface ActionLogValue_actionTypeVersion {
  type: "actionTypeVersion";
  actionTypeVersion: Empty;
}

export interface ActionLogValue_actionTimestamp {
  type: "actionTimestamp";
  actionTimestamp: Empty;
}

export interface ActionLogValue_actionUser {
  type: "actionUser";
  actionUser: Empty;
}

export interface ActionLogValue_isReverted {
  type: "isReverted";
  isReverted: Empty;
}

export interface ActionLogValue_revertUser {
  type: "revertUser";
  revertUser: Empty;
}

export interface ActionLogValue_revertTimestamp {
  type: "revertTimestamp";
  revertTimestamp: Empty;
}

export interface ActionLogValue_synchronousWebhookInstanceId {
  type: "synchronousWebhookInstanceId";
  synchronousWebhookInstanceId: Empty;
}

export interface ActionLogValue_asynchronousWebhookInstanceIds {
  type: "asynchronousWebhookInstanceIds";
  asynchronousWebhookInstanceIds: Empty;
}

export interface ActionLogValue_notifiedUsers {
  type: "notifiedUsers";
  notifiedUsers: Empty;
}

export interface ActionLogValue_notificationIds {
  type: "notificationIds";
  notificationIds: Empty;
}

export interface ActionLogValue_scenarioRid {
  type: "scenarioRid";
  scenarioRid: Empty;
}

export interface ActionLogValue_summary {
  type: "summary";
  summary: Array<ActionTypeRichTextComponent>;
}
export type ActionLogValue =
  | ActionLogValue_parameterValue
  | ActionLogValue_objectParameterPropertyValue
  | ActionLogValue_editedObjects
  | ActionLogValue_actionTypeRid
  | ActionLogValue_actionRid
  | ActionLogValue_actionTypeVersion
  | ActionLogValue_actionTimestamp
  | ActionLogValue_actionUser
  | ActionLogValue_isReverted
  | ActionLogValue_revertUser
  | ActionLogValue_revertTimestamp
  | ActionLogValue_synchronousWebhookInstanceId
  | ActionLogValue_asynchronousWebhookInstanceIds
  | ActionLogValue_notifiedUsers
  | ActionLogValue_notificationIds
  | ActionLogValue_scenarioRid
  | ActionLogValue_summary;
