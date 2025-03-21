import type { DataScopeRemovalPatch } from "./DataScopeRemovalPatch.js";
import type { SdkVersion } from "./SdkVersion.js";
export interface SdkPackageDataScopePatch_addedOrUpdated {
	type: "addedOrUpdated";
	addedOrUpdated: SdkVersion;
}
export interface SdkPackageDataScopePatch_removed {
	type: "removed";
	removed: DataScopeRemovalPatch;
}
export type SdkPackageDataScopePatch = SdkPackageDataScopePatch_addedOrUpdated | SdkPackageDataScopePatch_removed;
