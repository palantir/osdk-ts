import type { ObjectSetRid } from "./ObjectSetRid.js";
import type { ObjectSetVersion } from "./ObjectSetVersion.js";
export interface LatestVersionResponse {
	latestVersion: ObjectSetVersion;
	latestObjectSetRid: ObjectSetRid;
}
