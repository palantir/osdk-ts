import type { ProposalsDisabled } from "./ProposalsDisabled.js";
import type { ProposalsEnabled } from "./ProposalsEnabled.js";
export interface ProposalsEnabledStatus_disabled {
	type: "disabled";
	disabled: ProposalsDisabled;
}
export interface ProposalsEnabledStatus_enabled {
	type: "enabled";
	enabled: ProposalsEnabled;
}
export type ProposalsEnabledStatus = ProposalsEnabledStatus_disabled | ProposalsEnabledStatus_enabled;
