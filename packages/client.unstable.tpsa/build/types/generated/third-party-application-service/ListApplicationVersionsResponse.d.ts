import type { ApplicationVersionMetadata } from "./ApplicationVersionMetadata.js";
import type { ApplicationVersionPageToken } from "./ApplicationVersionPageToken.js";
export interface ListApplicationVersionsResponse {
	applicationVersions: Array<ApplicationVersionMetadata>;
	nextPageToken: ApplicationVersionPageToken | undefined;
	totalResults: number;
}
