import type { CliCommonArgs } from "@osdk/cli.common";
import type { ThirdPartyAppRid } from "../../net/ThirdPartyAppRid.js";
export interface CommonSiteArgs extends CliCommonArgs {
	application: ThirdPartyAppRid;
	foundryUrl: string;
	token?: string;
	tokenFile?: string;
}
