import { BranchId } from "./BranchId";
import { TransactionRid } from "./TransactionRid";

/**
 * A Branch of a Dataset.
 *
 */
export type Branch = { branchId: BranchId; transactionRid?: TransactionRid; };
