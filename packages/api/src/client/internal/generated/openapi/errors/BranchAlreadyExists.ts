import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";

/** The branch cannot be created because a branch with that name already exists. */
export interface BranchAlreadyExists {
    errorCode: "CONFLICT";
    errorName: "BranchAlreadyExists";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
    };
}
