import type { ErrorStatus } from "./ErrorStatus.js";
import type { MergeableStatus } from "./MergeableStatus.js";
export interface BranchMergeStatus_mergable {
	type: "mergable";
	mergable: MergeableStatus;
}
export interface BranchMergeStatus_error {
	type: "error";
	error: ErrorStatus;
}
export type BranchMergeStatus = BranchMergeStatus_mergable | BranchMergeStatus_error;
