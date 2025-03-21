import type { VersionedDefaultBranchDetails } from "./VersionedDefaultBranchDetails.js";
import type { VersionedNonDefaultBranchDetails } from "./VersionedNonDefaultBranchDetails.js";
export interface VersionedBranchDetails_default {
	type: "default";
	default: VersionedDefaultBranchDetails;
}
export interface VersionedBranchDetails_nonDefault {
	type: "nonDefault";
	nonDefault: VersionedNonDefaultBranchDetails;
}
export type VersionedBranchDetails = VersionedBranchDetails_default | VersionedBranchDetails_nonDefault;
