import type { SdkPackageFailedStatus } from "./SdkPackageFailedStatus.js";
import type { SdkPackageInProgressStatus } from "./SdkPackageInProgressStatus.js";
import type { SdkPackageRequestedStatus } from "./SdkPackageRequestedStatus.js";
import type { SdkPackageSuccessStatus } from "./SdkPackageSuccessStatus.js";
export interface SdkPackageStatus_requested {
	type: "requested";
	requested: SdkPackageRequestedStatus;
}
export interface SdkPackageStatus_inProgress {
	type: "inProgress";
	inProgress: SdkPackageInProgressStatus;
}
export interface SdkPackageStatus_success {
	type: "success";
	success: SdkPackageSuccessStatus;
}
export interface SdkPackageStatus_failed {
	type: "failed";
	failed: SdkPackageFailedStatus;
}
export type SdkPackageStatus = SdkPackageStatus_requested | SdkPackageStatus_inProgress | SdkPackageStatus_success | SdkPackageStatus_failed;
