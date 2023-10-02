import { TransactionRid } from "./TransactionRid";
import { TransactionType } from "./TransactionType";
import { TransactionStatus } from "./TransactionStatus";

/**
 * An operation that modifies the files within a dataset.
 *
 */
export interface Transaction {
    rid: TransactionRid;
    transactionType: TransactionType;
    status: TransactionStatus;
    /** The timestamp when the transaction was created, in ISO 8601 timestamp format. */
    createdTime: string;
    /** The timestamp when the transaction was closed, in ISO 8601 timestamp format. */
    closedTime?: string;
}
