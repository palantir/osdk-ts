import type { ActionApplyClientPreferences } from "./ActionApplyClientPreferences.js";
import type { ActionLogConfiguration } from "./ActionLogConfiguration.js";
import type { ActionLogicModification } from "./ActionLogicModification.js";
import type { ActionNotificationModification } from "./ActionNotificationModification.js";
import type { ActionNotificationSettings } from "./ActionNotificationSettings.js";
import type { ActionRevert } from "./ActionRevert.js";
import type { ActionSubmissionConfiguration } from "./ActionSubmissionConfiguration.js";
import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeDisplayMetadataModification } from "./ActionTypeDisplayMetadataModification.js";
import type { ActionTypeProvenanceModification } from "./ActionTypeProvenanceModification.js";
import type { ActionTypeStatus } from "./ActionTypeStatus.js";
import type { ActionWebhooksModification } from "./ActionWebhooksModification.js";
import type { CompassProjectRid } from "./CompassProjectRid.js";
import type { FormContent } from "./FormContent.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { ParameterId } from "./ParameterId.js";
import type { PutParameterRequestModification } from "./PutParameterRequestModification.js";
import type { PutSectionRequestModification } from "./PutSectionRequestModification.js";
import type { SectionId } from "./SectionId.js";
import type { TypeGroupRidOrIdInRequest } from "./TypeGroupRidOrIdInRequest.js";
import type { ValidationRuleIdInRequest } from "./ValidationRuleIdInRequest.js";
import type { ValidationRuleModification } from "./ValidationRuleModification.js";
/**
* A ActionTypeCreate is used to create ActionTypes.
*/
export interface ActionTypeCreate {
	apiName: ActionTypeApiName;
	displayMetadata: ActionTypeDisplayMetadataModification;
	parameters: Record<ParameterId, PutParameterRequestModification>;
	sections: Record<SectionId, PutSectionRequestModification>;
	parameterOrdering: Array<ParameterId>;
	formContentOrdering: Array<FormContent>;
	logic: ActionLogicModification;
	validations: Record<ValidationRuleIdInRequest, ValidationRuleModification>;
	validationsOrdering: Array<ValidationRuleIdInRequest>;
	webhooks: ActionWebhooksModification | undefined;
	notifications: Array<ActionNotificationModification>;
	actionLogConfiguration: ActionLogConfiguration | undefined;
	status: ActionTypeStatus | undefined;
	actionApplyClientSettings: ActionApplyClientPreferences | undefined;
	notificationSettings: ActionNotificationSettings | undefined;
	revert: ActionRevert | undefined;
	packageRid: OntologyPackageRid | undefined;
	projectRid: CompassProjectRid | undefined;
	provenance: ActionTypeProvenanceModification | undefined;
	typeGroups: Array<TypeGroupRidOrIdInRequest>;
	submissionConfiguration: ActionSubmissionConfiguration | undefined;
}
