import type { VersionedApplication } from "./VersionedApplication.js";
export interface BulkGetApplicationsResponse {
	results: Array<VersionedApplication | undefined>;
}
