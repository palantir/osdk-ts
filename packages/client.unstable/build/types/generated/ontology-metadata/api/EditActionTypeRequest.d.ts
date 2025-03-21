import type { ActionLogConfiguration } from "./ActionLogConfiguration.js";
import type { ActionLogic } from "./ActionLogic.js";
import type { ActionNotification } from "./ActionNotification.js";
import type { ActionNotificationSettings } from "./ActionNotificationSettings.js";
import type { ActionRevert } from "./ActionRevert.js";
import type { ActionSubmissionConfiguration } from "./ActionSubmissionConfiguration.js";
import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeDisplayMetadataModification } from "./ActionTypeDisplayMetadataModification.js";
import type { ActionTypeStatus } from "./ActionTypeStatus.js";
import type { ActionWebhooks } from "./ActionWebhooks.js";
import type { EditParameterRequest } from "./EditParameterRequest.js";
import type { EditValidationRuleRequest } from "./EditValidationRuleRequest.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterRid } from "./ParameterRid.js";
import type { PutParameterRequest } from "./PutParameterRequest.js";
import type { ValidationRule } from "./ValidationRule.js";
import type { ValidationRuleRid } from "./ValidationRuleRid.js";
/**
* Request object to edit existing Action Types.
*/
export interface EditActionTypeRequest {
	apiName: ActionTypeApiName;
	actionLogConfiguration: ActionLogConfiguration | undefined;
	revert: ActionRevert | undefined;
	displayMetadata: ActionTypeDisplayMetadataModification;
	parametersToAdd: Record<ParameterId, PutParameterRequest>;
	parametersToDelete: Array<ParameterRid>;
	parametersToEdit: Record<ParameterRid, EditParameterRequest>;
	parameterOrdering: Array<ParameterId>;
	logic: ActionLogic;
	validationsToAdd: Array<ValidationRule>;
	validationsToDelete: Array<ValidationRuleRid>;
	validationsToEdit: Record<ValidationRuleRid, EditValidationRuleRequest>;
	status: ActionTypeStatus | undefined;
	webhooks: ActionWebhooks | undefined;
	notifications: Array<ActionNotification>;
	notificationSettings: ActionNotificationSettings | undefined;
	submissionConfiguration: ActionSubmissionConfiguration | undefined;
}
