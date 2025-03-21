import type { EntitySdkVersions } from "./EntitySdkVersions.js";
export interface BulkGetEntitySdkVersionsResponse {
	sdkVersions: Record<string, EntitySdkVersions>;
}
