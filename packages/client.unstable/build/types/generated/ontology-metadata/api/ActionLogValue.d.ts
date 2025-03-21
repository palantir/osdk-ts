import type { ActionTypeRichTextComponent } from "./ActionTypeRichTextComponent.js";
import type { AllEditedObjectsFieldMapping } from "./AllEditedObjectsFieldMapping.js";
import type { Empty } from "./Empty.js";
import type { InterfaceParameterPropertyValue } from "./InterfaceParameterPropertyValue.js";
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
export interface ActionLogValue_interfaceParameterPropertyValue {
	type: "interfaceParameterPropertyValue";
	interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}
export interface ActionLogValue_editedObjects {
	type: "editedObjects";
	editedObjects: ObjectTypeId;
}
export interface ActionLogValue_allEditedObjects {
	type: "allEditedObjects";
	allEditedObjects: AllEditedObjectsFieldMapping;
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
export type ActionLogValue = ActionLogValue_parameterValue | ActionLogValue_objectParameterPropertyValue | ActionLogValue_interfaceParameterPropertyValue | ActionLogValue_editedObjects | ActionLogValue_allEditedObjects | ActionLogValue_actionTypeRid | ActionLogValue_actionRid | ActionLogValue_actionTypeVersion | ActionLogValue_actionTimestamp | ActionLogValue_actionUser | ActionLogValue_isReverted | ActionLogValue_revertUser | ActionLogValue_revertTimestamp | ActionLogValue_synchronousWebhookInstanceId | ActionLogValue_asynchronousWebhookInstanceIds | ActionLogValue_notifiedUsers | ActionLogValue_notificationIds | ActionLogValue_scenarioRid | ActionLogValue_summary;
