import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";
import { TransactionStatus } from "../components/TransactionStatus";

/** The given transaction has not been committed. */
export interface TransactionNotCommitted {
    errorCode: "INVALID_ARGUMENT";
    errorName: "TransactionNotCommitted";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
        transactionStatus: TransactionStatus;
    };
}
