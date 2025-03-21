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
import type { ParameterId } from "./ParameterId.js";
import type { PutParameterRequest } from "./PutParameterRequest.js";
import type { ValidationRule } from "./ValidationRule.js";
/**
* A PutActionTypeRequest is used to create or modify Action Types.
*/
export interface PutActionTypeRequest {
	apiName: ActionTypeApiName;
	displayMetadata: ActionTypeDisplayMetadataModification;
	parameters: Record<ParameterId, PutParameterRequest>;
	parameterOrdering: Array<ParameterId>;
	logic: ActionLogic;
	validation: Array<ValidationRule>;
	webhooks: ActionWebhooks | undefined;
	notifications: Array<ActionNotification>;
	actionLogConfiguration: ActionLogConfiguration | undefined;
	revert: ActionRevert | undefined;
	status: ActionTypeStatus | undefined;
	notificationSettings: ActionNotificationSettings | undefined;
	submissionConfiguration: ActionSubmissionConfiguration | undefined;
}
