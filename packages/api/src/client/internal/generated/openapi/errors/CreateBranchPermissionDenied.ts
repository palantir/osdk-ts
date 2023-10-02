import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";

/** The provided token does not have permission to create a branch of this dataset. */
export interface CreateBranchPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "CreateBranchPermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
    };
}
