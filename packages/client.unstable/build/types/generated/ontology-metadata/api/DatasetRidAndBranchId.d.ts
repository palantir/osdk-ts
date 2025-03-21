import type { BranchId } from "./BranchId.js";
/**
* Representing the rid and the branch of a foundry dataset.
*/
export interface DatasetRidAndBranchId {
	datasetRid: string;
	branchId: BranchId;
}
