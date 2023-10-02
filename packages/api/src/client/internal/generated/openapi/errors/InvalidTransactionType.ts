import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";
import { TransactionType } from "../components/TransactionType";

/** The given transaction type is not valid. Valid transaction types are `SNAPSHOT`, `UPDATE`, `APPEND`, and `DELETE`. */
export interface InvalidTransactionType {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidTransactionType";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
        transactionType: TransactionType;
    };
}
