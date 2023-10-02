import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";

/** The provided token does not have permission to delete the given branch from this dataset. */
export interface DeleteBranchPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "DeleteBranchPermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
    };
}
