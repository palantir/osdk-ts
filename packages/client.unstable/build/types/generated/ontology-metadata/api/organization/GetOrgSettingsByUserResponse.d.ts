import type { OrganizationRid } from "../OrganizationRid.js";
import type { ProposalsSettings } from "./ProposalsSettings.js";
import type { UsageSettings } from "./UsageSettings.js";
export interface GetOrgSettingsByUserResponse {
	organization: OrganizationRid;
	usage: UsageSettings;
	proposals: ProposalsSettings;
}
