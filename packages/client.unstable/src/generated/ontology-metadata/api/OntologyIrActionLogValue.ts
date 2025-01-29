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
import type { Empty } from "./Empty.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyIrAllEditedObjectsFieldMapping } from "./OntologyIrAllEditedObjectsFieldMapping.js";
import type { OntologyIrInterfaceParameterPropertyValue } from "./OntologyIrInterfaceParameterPropertyValue.js";
import type { ParameterId } from "./ParameterId.js";
export interface OntologyIrActionLogValue_parameterValue {
  type: "parameterValue";
  parameterValue: ParameterId;
}

export interface OntologyIrActionLogValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface OntologyIrActionLogValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}

export interface OntologyIrActionLogValue_editedObjects {
  type: "editedObjects";
  editedObjects: ObjectTypeId;
}

export interface OntologyIrActionLogValue_allEditedObjects {
  type: "allEditedObjects";
  allEditedObjects: OntologyIrAllEditedObjectsFieldMapping;
}

export interface OntologyIrActionLogValue_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: Empty;
}

export interface OntologyIrActionLogValue_actionRid {
  type: "actionRid";
  actionRid: Empty;
}

export interface OntologyIrActionLogValue_actionTypeVersion {
  type: "actionTypeVersion";
  actionTypeVersion: Empty;
}

export interface OntologyIrActionLogValue_actionTimestamp {
  type: "actionTimestamp";
  actionTimestamp: Empty;
}

export interface OntologyIrActionLogValue_actionUser {
  type: "actionUser";
  actionUser: Empty;
}

export interface OntologyIrActionLogValue_isReverted {
  type: "isReverted";
  isReverted: Empty;
}

export interface OntologyIrActionLogValue_revertUser {
  type: "revertUser";
  revertUser: Empty;
}

export interface OntologyIrActionLogValue_revertTimestamp {
  type: "revertTimestamp";
  revertTimestamp: Empty;
}

export interface OntologyIrActionLogValue_synchronousWebhookInstanceId {
  type: "synchronousWebhookInstanceId";
  synchronousWebhookInstanceId: Empty;
}

export interface OntologyIrActionLogValue_asynchronousWebhookInstanceIds {
  type: "asynchronousWebhookInstanceIds";
  asynchronousWebhookInstanceIds: Empty;
}

export interface OntologyIrActionLogValue_notifiedUsers {
  type: "notifiedUsers";
  notifiedUsers: Empty;
}

export interface OntologyIrActionLogValue_notificationIds {
  type: "notificationIds";
  notificationIds: Empty;
}

export interface OntologyIrActionLogValue_scenarioRid {
  type: "scenarioRid";
  scenarioRid: Empty;
}

export interface OntologyIrActionLogValue_summary {
  type: "summary";
  summary: Array<ActionTypeRichTextComponent>;
}
export type OntologyIrActionLogValue =
  | OntologyIrActionLogValue_parameterValue
  | OntologyIrActionLogValue_objectParameterPropertyValue
  | OntologyIrActionLogValue_interfaceParameterPropertyValue
  | OntologyIrActionLogValue_editedObjects
  | OntologyIrActionLogValue_allEditedObjects
  | OntologyIrActionLogValue_actionTypeRid
  | OntologyIrActionLogValue_actionRid
  | OntologyIrActionLogValue_actionTypeVersion
  | OntologyIrActionLogValue_actionTimestamp
  | OntologyIrActionLogValue_actionUser
  | OntologyIrActionLogValue_isReverted
  | OntologyIrActionLogValue_revertUser
  | OntologyIrActionLogValue_revertTimestamp
  | OntologyIrActionLogValue_synchronousWebhookInstanceId
  | OntologyIrActionLogValue_asynchronousWebhookInstanceIds
  | OntologyIrActionLogValue_notifiedUsers
  | OntologyIrActionLogValue_notificationIds
  | OntologyIrActionLogValue_scenarioRid
  | OntologyIrActionLogValue_summary;
