import type { ApplicationPageToken } from "./ApplicationPageToken.js";
import type { VersionedApplication } from "./VersionedApplication.js";
export interface ListApplicationsResponse {
	applications: Array<VersionedApplication>;
	nextPageToken: ApplicationPageToken | undefined;
	totalResults: number;
}
