import type { LatestVersionResponse } from "./LatestVersionResponse.js";
/**
* Information necessary to identify the latest version of a versioned object set.
*/
export interface GetBulkLatestVersionResponseEntry {
	latestVersion: LatestVersionResponse | undefined;
}
