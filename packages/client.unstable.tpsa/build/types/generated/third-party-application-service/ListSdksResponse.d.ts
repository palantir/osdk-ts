import type { Sdk } from "./Sdk.js";
import type { SdkPageToken } from "./SdkPageToken.js";
export interface ListSdksResponse {
	sdks: Array<Sdk>;
	nextPageToken: SdkPageToken | undefined;
	totalResults: number;
}
