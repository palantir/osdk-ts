import type { CommonSiteArgs } from "../../CommonSiteArgs.js";
export interface VersionDeleteArgs extends CommonSiteArgs {
	version: string;
	yes?: boolean;
}
