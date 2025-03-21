import type { SdkGeneratorVersionPageToken } from "./SdkGeneratorVersionPageToken.js";
import type { SdkGeneratorVersionResult } from "./SdkGeneratorVersionResult.js";
export interface ListSdkGeneratorVersionsResponse {
	versions: Array<SdkGeneratorVersionResult>;
	nextPageToken: SdkGeneratorVersionPageToken | undefined;
}
