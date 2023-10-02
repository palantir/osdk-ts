import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";

/** The requested transaction could not be found on the dataset, or the client token does not have access to it. */
export interface TransactionNotFound {
    errorCode: "NOT_FOUND";
    errorName: "TransactionNotFound";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
    };
}
