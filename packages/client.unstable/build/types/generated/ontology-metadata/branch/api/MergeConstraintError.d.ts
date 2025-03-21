import type { BranchConflictsWithMain } from "./BranchConflictsWithMain.js";
export interface MergeConstraintError_branchConflictsWithMain {
	type: "branchConflictsWithMain";
	branchConflictsWithMain: BranchConflictsWithMain;
}
export type MergeConstraintError = MergeConstraintError_branchConflictsWithMain;
