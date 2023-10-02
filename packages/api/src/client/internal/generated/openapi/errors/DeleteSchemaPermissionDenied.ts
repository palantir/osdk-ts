import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";
import { TransactionRid } from "../components/TransactionRid";

/** todo */
export interface DeleteSchemaPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "DeleteSchemaPermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
        transactionRid: TransactionRid;
    };
}
