import { TransactionRid } from "./TransactionRid";
import { TransactionType } from "./TransactionType";
import { TransactionStatus } from "./TransactionStatus";

/**
 * An operation that modifies the files within a dataset.
 *
 */
export type Transaction = { rid: TransactionRid; transactionType: TransactionType; status: TransactionStatus; createdTime: string; closedTime?: string; };
