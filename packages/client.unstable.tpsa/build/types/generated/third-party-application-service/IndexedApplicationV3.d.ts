import type { ApplicationRid } from "./ApplicationRid.js";
import type { Attribution } from "./Attribution.js";
export interface IndexedApplicationV3 {
	thirdPartyApplicationRid: ApplicationRid;
	thirdPartyApplicationName: string;
	thirdPartyApplicationDescription: string | undefined;
	thirdPartyApplicationLastModified: Attribution;
}
