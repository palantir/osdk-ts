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

import type { ActionTypeRichTextComponent } from "./ActionTypeRichTextComponent.js";
import type { AllEditedObjectsFieldMapping } from "./AllEditedObjectsFieldMapping.js";
import type { Empty } from "./Empty.js";
import type { InterfaceParameterPropertyValueModification } from "./InterfaceParameterPropertyValueModification.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ParameterId } from "./ParameterId.js";
export interface ActionLogValueModification_parameterValue {
  type: "parameterValue";
  parameterValue: ParameterId;
}

export interface ActionLogValueModification_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ActionLogValueModification_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}

export interface ActionLogValueModification_editedObjects {
  type: "editedObjects";
  editedObjects: ObjectTypeId;
}

export interface ActionLogValueModification_allEditedObjects {
  type: "allEditedObjects";
  allEditedObjects: AllEditedObjectsFieldMapping;
}

export interface ActionLogValueModification_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: Empty;
}

export interface ActionLogValueModification_actionRid {
  type: "actionRid";
  actionRid: Empty;
}

export interface ActionLogValueModification_actionTypeVersion {
  type: "actionTypeVersion";
  actionTypeVersion: Empty;
}

export interface ActionLogValueModification_actionTimestamp {
  type: "actionTimestamp";
  actionTimestamp: Empty;
}

export interface ActionLogValueModification_actionUser {
  type: "actionUser";
  actionUser: Empty;
}

export interface ActionLogValueModification_isReverted {
  type: "isReverted";
  isReverted: Empty;
}

export interface ActionLogValueModification_revertUser {
  type: "revertUser";
  revertUser: Empty;
}

export interface ActionLogValueModification_revertTimestamp {
  type: "revertTimestamp";
  revertTimestamp: Empty;
}

export interface ActionLogValueModification_synchronousWebhookInstanceId {
  type: "synchronousWebhookInstanceId";
  synchronousWebhookInstanceId: Empty;
}

export interface ActionLogValueModification_asynchronousWebhookInstanceIds {
  type: "asynchronousWebhookInstanceIds";
  asynchronousWebhookInstanceIds: Empty;
}

export interface ActionLogValueModification_notifiedUsers {
  type: "notifiedUsers";
  notifiedUsers: Empty;
}

export interface ActionLogValueModification_notificationIds {
  type: "notificationIds";
  notificationIds: Empty;
}

export interface ActionLogValueModification_scenarioRid {
  type: "scenarioRid";
  scenarioRid: Empty;
}

export interface ActionLogValueModification_summary {
  type: "summary";
  summary: Array<ActionTypeRichTextComponent>;
}
export type ActionLogValueModification =
  | ActionLogValueModification_parameterValue
  | ActionLogValueModification_objectParameterPropertyValue
  | ActionLogValueModification_interfaceParameterPropertyValue
  | ActionLogValueModification_editedObjects
  | ActionLogValueModification_allEditedObjects
  | ActionLogValueModification_actionTypeRid
  | ActionLogValueModification_actionRid
  | ActionLogValueModification_actionTypeVersion
  | ActionLogValueModification_actionTimestamp
  | ActionLogValueModification_actionUser
  | ActionLogValueModification_isReverted
  | ActionLogValueModification_revertUser
  | ActionLogValueModification_revertTimestamp
  | ActionLogValueModification_synchronousWebhookInstanceId
  | ActionLogValueModification_asynchronousWebhookInstanceIds
  | ActionLogValueModification_notifiedUsers
  | ActionLogValueModification_notificationIds
  | ActionLogValueModification_scenarioRid
  | ActionLogValueModification_summary;
