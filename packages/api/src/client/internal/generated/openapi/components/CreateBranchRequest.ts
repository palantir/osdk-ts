import { BranchId } from "./BranchId";
import { TransactionRid } from "./TransactionRid";

export interface CreateBranchRequest {
    branchId: BranchId;
    transactionRid?: TransactionRid;
}
