import type { ApplicationRid } from "./ApplicationRid.js";
import type { ApplicationVersion } from "./ApplicationVersion.js";
export interface ApplicationVersionRequest {
	applicationRid: ApplicationRid;
	applicationVersion: ApplicationVersion | undefined;
}
