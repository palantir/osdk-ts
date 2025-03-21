import type { AutoVersionConfigType } from "@osdk/foundry-config-json";
import type { CommonSiteArgs } from "../CommonSiteArgs.js";
export interface SiteDeployArgs extends CommonSiteArgs {
	version?: string;
	directory: string;
	uploadOnly: boolean;
	autoVersion?: AutoVersionConfigType;
	gitTagPrefix?: string;
	snapshot: boolean;
	snapshotId?: string;
}
