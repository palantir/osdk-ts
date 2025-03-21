import type { ProposalsSettings } from "./ProposalsSettings.js";
import type { UsageSettings } from "./UsageSettings.js";
/**
* Request to configure organization-wide Ontology settings.
*/
export interface SetOrgSettingsRequest {
	usage: UsageSettings | undefined;
	proposals: ProposalsSettings | undefined;
}
