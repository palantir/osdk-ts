import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";

/** The provided token does not have permission to abort the given treansaction on the given dataset. */
export interface AbortTransactionPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "AbortTransactionPermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
    };
}
