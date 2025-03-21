import type { ActionApplyClientPreferences } from "../ActionApplyClientPreferences.js";
import type { ActionLogConfiguration } from "../ActionLogConfiguration.js";
import type { ActionLogicModification } from "../ActionLogicModification.js";
import type { ActionNotificationModification } from "../ActionNotificationModification.js";
import type { ActionNotificationSettings } from "../ActionNotificationSettings.js";
import type { ActionRevert } from "../ActionRevert.js";
import type { ActionSubmissionConfiguration } from "../ActionSubmissionConfiguration.js";
import type { ActionTypeApiName } from "../ActionTypeApiName.js";
import type { ActionTypeDisplayMetadataModification } from "../ActionTypeDisplayMetadataModification.js";
import type { ActionTypeEntities } from "../ActionTypeEntities.js";
import type { ActionTypeProvenanceModification } from "../ActionTypeProvenanceModification.js";
import type { ActionTypeStatus } from "../ActionTypeStatus.js";
import type { ActionWebhooksModification } from "../ActionWebhooksModification.js";
import type { EditParameterRequestModification } from "../EditParameterRequestModification.js";
import type { EditSectionRequest } from "../EditSectionRequest.js";
import type { FormContent } from "../FormContent.js";
import type { ParameterId } from "../ParameterId.js";
import type { ParameterRid } from "../ParameterRid.js";
import type { SectionRid } from "../SectionRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
import type { ValidationRuleModification } from "../ValidationRuleModification.js";
import type { ValidationRuleRid } from "../ValidationRuleRid.js";
import type { PutParameterRequestModificationWithId } from "./PutParameterRequestModificationWithId.js";
import type { PutSectionRequestWithId } from "./PutSectionRequestWithId.js";
import type { ValidationRuleModificationWithIdInRequest } from "./ValidationRuleModificationWithIdInRequest.js";
/**
* Internal request object to edit existing Action Types, useful in certain conversions.
*/
export interface ActionTypeModification {
	apiName: ActionTypeApiName;
	actionLogConfiguration: ActionLogConfiguration | undefined;
	actionApplyClientSettings: ActionApplyClientPreferences | undefined;
	displayMetadata: ActionTypeDisplayMetadataModification;
	parametersToCreate: Record<ParameterRid, PutParameterRequestModificationWithId>;
	sectionsToCreate: Record<SectionRid, PutSectionRequestWithId>;
	parametersToDelete: Array<ParameterRid>;
	sectionsToDelete: Array<SectionRid>;
	parametersToUpdate: Record<ParameterRid, EditParameterRequestModification>;
	sectionsToUpdate: Record<SectionRid, EditSectionRequest>;
	parameterOrdering: Array<ParameterId>;
	formContentOrdering: Array<FormContent> | undefined;
	logic: ActionLogicModification;
	validationsToCreate: Record<ValidationRuleRid, ValidationRuleModificationWithIdInRequest>;
	validationsToDelete: Array<ValidationRuleRid>;
	validationsToUpdate: Record<ValidationRuleRid, ValidationRuleModification>;
	validationsOrdering: Array<ValidationRuleRid>;
	revert: ActionRevert | undefined;
	status: ActionTypeStatus | undefined;
	webhooks: ActionWebhooksModification | undefined;
	notifications: Array<ActionNotificationModification>;
	notificationSettings: ActionNotificationSettings | undefined;
	submissionConfiguration: ActionSubmissionConfiguration | undefined;
	provenance: ActionTypeProvenanceModification | undefined;
	entities: ActionTypeEntities | undefined;
	typeGroups: Array<TypeGroupRid>;
}
