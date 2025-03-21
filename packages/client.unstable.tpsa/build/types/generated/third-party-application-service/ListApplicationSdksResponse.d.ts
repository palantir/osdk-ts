import type { ApplicationSdk } from "./ApplicationSdk.js";
import type { ApplicationSdkPageToken } from "./ApplicationSdkPageToken.js";
export interface ListApplicationSdksResponse {
	sdks: Array<ApplicationSdk>;
	nextPageToken: ApplicationSdkPageToken | undefined;
	totalResults: number;
}
