import type { ProposalsSettings } from "./ProposalsSettings.js";
import type { UsageSettings } from "./UsageSettings.js";
/**
* Response containing organization-wide settings managed by OMS.
*/
export interface GetOrgSettingsResponse {
	usage: UsageSettings;
	proposals: ProposalsSettings;
}
