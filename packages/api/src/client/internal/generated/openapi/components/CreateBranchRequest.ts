import { BranchId } from "./BranchId";
import { TransactionRid } from "./TransactionRid";

export type CreateBranchRequest = { branchId: BranchId; transactionRid?: TransactionRid; };
