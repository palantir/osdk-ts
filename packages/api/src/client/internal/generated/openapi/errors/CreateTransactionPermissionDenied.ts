import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";

/** The provided token does not have permission to create a transaction on this dataset. */
export interface CreateTransactionPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "CreateTransactionPermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
    };
}
