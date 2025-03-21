import type { AutoVersionConfig } from "@osdk/foundry-config-json";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";
interface SiteDeployInternalArgs extends Omit<SiteDeployArgs, "version" | "autoVersion" | "gitTagPrefix"> {
	selectedVersion: string | AutoVersionConfig;
}
export default function siteDeployCommand({ selectedVersion, application, foundryUrl, uploadOnly, snapshot, snapshotId, directory, token, tokenFile }: SiteDeployInternalArgs): Promise<void>;
