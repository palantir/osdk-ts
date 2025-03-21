import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetVersion } from "./ObjectSetVersion.js";
export interface UpdateLatestVersionRequest {
	currentLatestVersion: ObjectSetVersion | undefined;
	objectSet: ObjectSet;
}
