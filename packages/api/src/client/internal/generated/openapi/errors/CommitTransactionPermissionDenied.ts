import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";

/** The provided token does not have permission to commit the given treansaction on the given dataset. */
export interface CommitTransactionPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "CommitTransactionPermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
    };
}
