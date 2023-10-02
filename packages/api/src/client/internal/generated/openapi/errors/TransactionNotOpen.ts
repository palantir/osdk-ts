import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";
import { TransactionStatus } from "../components/TransactionStatus";

/** The given transaction is not open. */
export interface TransactionNotOpen {
    errorCode: "INVALID_ARGUMENT";
    errorName: "TransactionNotOpen";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
        transactionStatus: TransactionStatus;
    };
}
