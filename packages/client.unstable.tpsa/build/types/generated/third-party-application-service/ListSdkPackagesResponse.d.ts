import type { SdkPackage } from "./SdkPackage.js";
import type { SdkPackagePageToken } from "./SdkPackagePageToken.js";
export interface ListSdkPackagesResponse {
	sdkPackages: Array<SdkPackage>;
	nextPageToken: SdkPackagePageToken | undefined;
	totalResults: number;
}
