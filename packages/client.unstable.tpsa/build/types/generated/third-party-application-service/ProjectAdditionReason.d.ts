import type { SdkPackageAdditionReason } from "./SdkPackageAdditionReason.js";
export interface ProjectAdditionReason_sdkPackage {
	type: "sdkPackage";
	sdkPackage: SdkPackageAdditionReason;
}
export type ProjectAdditionReason = ProjectAdditionReason_sdkPackage;
