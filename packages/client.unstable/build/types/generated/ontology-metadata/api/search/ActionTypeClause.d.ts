import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { FunctionRid } from "../FunctionRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { WebhookRid } from "../WebhookRid.js";
import type { ActionTypePermissionModelFilter } from "./ActionTypePermissionModelFilter.js";
import type { ActionTypeStatusFilter } from "./ActionTypeStatusFilter.js";
import type { FullTextStringPredicate } from "./FullTextStringPredicate.js";
import type { LogicRuleTypeFilter } from "./LogicRuleTypeFilter.js";
import type { TypeClassPredicate } from "./TypeClassPredicate.js";
export interface ActionTypeClause_and {
	type: "and";
	and: Array<ActionTypeClause>;
}
export interface ActionTypeClause_or {
	type: "or";
	or: Array<ActionTypeClause>;
}
export interface ActionTypeClause_affectedObjectTypeRid {
	type: "affectedObjectTypeRid";
	affectedObjectTypeRid: ObjectTypeRid;
}
export interface ActionTypeClause_inputObjectTypeRid {
	type: "inputObjectTypeRid";
	inputObjectTypeRid: ObjectTypeRid;
}
export interface ActionTypeClause_webhookRid {
	type: "webhookRid";
	webhookRid: WebhookRid;
}
export interface ActionTypeClause_actionTypeApiName {
	type: "actionTypeApiName";
	actionTypeApiName: FullTextStringPredicate;
}
export interface ActionTypeClause_actionTypeRid {
	type: "actionTypeRid";
	actionTypeRid: ActionTypeRid;
}
export interface ActionTypeClause_actionTypeDisplayName {
	type: "actionTypeDisplayName";
	actionTypeDisplayName: FullTextStringPredicate;
}
export interface ActionTypeClause_typeClasses {
	type: "typeClasses";
	typeClasses: TypeClassPredicate;
}
export interface ActionTypeClause_actionTypeDescription {
	type: "actionTypeDescription";
	actionTypeDescription: FullTextStringPredicate;
}
export interface ActionTypeClause_status {
	type: "status";
	status: ActionTypeStatusFilter;
}
export interface ActionTypeClause_logicRule {
	type: "logicRule";
	logicRule: LogicRuleTypeFilter;
}
export interface ActionTypeClause_hasActionLog {
	type: "hasActionLog";
	hasActionLog: boolean;
}
export interface ActionTypeClause_hasWebhook {
	type: "hasWebhook";
	hasWebhook: boolean;
}
export interface ActionTypeClause_hasNotification {
	type: "hasNotification";
	hasNotification: boolean;
}
export interface ActionTypeClause_permissionModel {
	type: "permissionModel";
	permissionModel: ActionTypePermissionModelFilter;
}
export interface ActionTypeClause_functionRid {
	type: "functionRid";
	functionRid: FunctionRid;
}
/**
* Data structure to represent search query for ActionTypes. Supports filters for various ActionType features.
*/
export type ActionTypeClause = ActionTypeClause_and | ActionTypeClause_or | ActionTypeClause_affectedObjectTypeRid | ActionTypeClause_inputObjectTypeRid | ActionTypeClause_webhookRid | ActionTypeClause_actionTypeApiName | ActionTypeClause_actionTypeRid | ActionTypeClause_actionTypeDisplayName | ActionTypeClause_typeClasses | ActionTypeClause_actionTypeDescription | ActionTypeClause_status | ActionTypeClause_logicRule | ActionTypeClause_hasActionLog | ActionTypeClause_hasWebhook | ActionTypeClause_hasNotification | ActionTypeClause_permissionModel | ActionTypeClause_functionRid;
