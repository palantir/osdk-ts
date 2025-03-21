import type { ActionApplyClientPreferences } from "./ActionApplyClientPreferences.js";
import type { ActionLogConfiguration } from "./ActionLogConfiguration.js";
import type { ActionNotificationSettings } from "./ActionNotificationSettings.js";
import type { ActionSubmissionConfiguration } from "./ActionSubmissionConfiguration.js";
import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeDisplayMetadata } from "./ActionTypeDisplayMetadata.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { ActionTypeStatus } from "./ActionTypeStatus.js";
import type { ActionTypeVersion } from "./ActionTypeVersion.js";
import type { ActionTypeProvenance } from "./entitymetadata/provenance/ActionTypeProvenance.js";
import type { FormContent } from "./FormContent.js";
import type { OntologyIrActionTypeEntities } from "./OntologyIrActionTypeEntities.js";
import type { OntologyIrParameter } from "./OntologyIrParameter.js";
import type { ParameterId } from "./ParameterId.js";
import type { Section } from "./Section.js";
import type { SectionId } from "./SectionId.js";
/**
* An ActionType defines the schema of the edits that can be made to Phonograph.
*/
export interface OntologyIrActionTypeMetadata {
	rid: ActionTypeRid;
	apiName: ActionTypeApiName;
	version: ActionTypeVersion;
	displayMetadata: ActionTypeDisplayMetadata;
	parameters: Record<ParameterId, OntologyIrParameter>;
	sections: Record<SectionId, Section>;
	parameterOrdering: Array<ParameterId>;
	formContentOrdering: Array<FormContent>;
	actionLogConfiguration: ActionLogConfiguration | undefined;
	status: ActionTypeStatus;
	entities: OntologyIrActionTypeEntities | undefined;
	actionApplyClientSettings: ActionApplyClientPreferences | undefined;
	notificationSettings: ActionNotificationSettings;
	provenance: ActionTypeProvenance | undefined;
	submissionConfiguration: ActionSubmissionConfiguration | undefined;
}
