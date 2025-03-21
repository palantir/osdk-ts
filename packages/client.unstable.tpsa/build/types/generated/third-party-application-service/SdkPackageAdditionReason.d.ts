import type { SdkPackageRid } from "./SdkPackageRid.js";
import type { SdkVersion } from "./SdkVersion.js";
export interface SdkPackageAdditionReason {
	sdkPackageRid: SdkPackageRid;
	sdkVersion: SdkVersion;
}
