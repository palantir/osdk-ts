import { BranchId } from "./BranchId";
import { TransactionRid } from "./TransactionRid";

/**
 * A Branch of a Dataset.
 *
 */
export interface Branch {
    branchId: BranchId;
    transactionRid?: TransactionRid;
}
